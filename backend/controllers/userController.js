import jwt from "jsonwebtoken";
import config from "../config.js";
import getPassword from "../utils/getPassword.js";
import User from "../models/userModel.js";
import getToken from "../utils/getToken.js";
import bcrypt from "bcrypt";
import verifyPassword from "../utils/verifyPassword.js";

export const verifyState = (req, res) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "user not authenticated" });
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    console.log("decoded obj:", decoded);
    return res.json({
      success: true,
      message: "user authenticated",
      user: decoded,
    });
  } catch (error) {
    return res.status(401).json({ success: false, message: "invalid token" });
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const role = email === process.env.email ? "admin" : "user";
    const hashed_pass = await getPassword(password);
    const new_user = new User({
      username,
      email,
      password: hashed_pass,
      role,
    });
    const user = await new_user.save();

    const token = getToken(user._id);
    res.cookie("token", token, {
      secure: true,
      httpOnly: true,
      sameSite: "Strict",
    });
    res.json({ success: true, message: "user created", user });

    //
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

// sign in user
export const signinUser = async (req, res) => {
  try {
    console.log("reqbody:", req.body);
    const { email, password } = req.body;
    const existing_user = await User.findOne({ email });
    console.log("matching user:", existing_user);
    if (!existing_user)
      return res
        .status(401)
        .json({ success: false, message: "incorrect username or password" });

    const matching_password = await verifyPassword(
      password,
      existing_user.password
    );

    if (!matching_password)
      return res
        .status(401)
        .json({ success: false, message: "incorrect username or password" });

    const token = getToken(existing_user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    return res.json({
      success: true,
      message: "user logged in",
      user: existing_user,
    });
  } catch (error) {
    console.log("error :", error);
    return res
      .status(500)
      .json({ success: false, message: "user login failed" });
  }
};

// logout user
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      secure: true,
      httpOnly: true,
      sameSite: "Strict",
    });
    res.json({ success: true, message: "user logged out" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "user logout failed" });
  }
};
