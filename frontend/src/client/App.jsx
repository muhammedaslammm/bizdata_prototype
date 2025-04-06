import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="application bg-gray-100">
      <Header />
      <Outlet />
    </div>
  );
}
export default App;
