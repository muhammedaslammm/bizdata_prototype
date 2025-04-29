import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/Contexts";

function App() {
  const [userState, setUserState] = useState(false);
  const { verifyUser } = useContext(UserContext);
  useEffect(() => {
    const getresponse = async () => {
      const response = await verifyUser();
      if (response) setUserState(true);
      else setUserState(false);
    };
    getresponse();
  }, []);
  return (
    <div className="application bg-neutral-200">
      <Header state={userState} /> {/*header UI */}
      <Outlet /> {/*this part changes based on the route defined.*/}
      <Footer /> {/*footer UI */}
    </div>
  );
}
export default App;
