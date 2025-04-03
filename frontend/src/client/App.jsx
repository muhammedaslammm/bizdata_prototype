import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="application">
      <Header />
      <Outlet />
      
    </div>
  );
}
export default App;
