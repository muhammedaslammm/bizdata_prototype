import { useState } from "react";
import { UserContext } from "./Contexts.jsx";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const verifyUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/verify", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        console.log(data.message);
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const value = { verifyUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
