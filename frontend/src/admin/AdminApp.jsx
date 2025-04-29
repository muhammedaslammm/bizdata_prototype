import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";

const AdminApp = () => {
  return (
    <div className="application relative">
      <Header />
      <div className="relative">
        <Sidebar />
        <PageContent />
      </div>
    </div>
  );
};

export default AdminApp;
