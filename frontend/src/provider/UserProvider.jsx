import { useEffect, useState } from "react";
import { UserContext } from "../contexts";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/auth/verify", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          console.log(data.message);
          setUser(true);
        }
      } catch (error) {
        console.log(error.message);
        setUser(null);
      }
    };
    fetchRequest();
  }, []);

  const logoutUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data);
      } else {
        setUser(null);
        return true;
      }
    } catch (error) {
      console.log("error:", error.message);
      return false;
    }
  };

  const registerUser = async (userData) => {
    delete userData.confirm_password;
    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        console.log(data.message);
        setUser(data.user);
        return data.success;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };

  const loginUser = async (userData) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log("error:", data.message);
        throw new Error(data.message);
      } else {
        console.log(data.message);
        setUser(data.user);
        return data;
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const value = { user, registerUser, loginUser, logoutUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
