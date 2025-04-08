import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="application bg-neutral-200">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
