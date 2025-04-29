import jwt from "jsonwebtoken";
import config from "../config.js";
import getPassword from "../utils/getPassword.js";
import User from "../models/userModel.js";
import getToken from "../utils/getToken.js";

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
    res.cookie("token", token, { secure: true, httpOnly: true });
    res.json({ success: true, message: "user created", user });

    //
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
