import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";
import sidebarContent from "./data/sidebarContent";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const AdminApp = () => {
  const [title, setTitle] = useState(null);
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean)[1];

  useEffect(() => {
    const title = sidebarContent.find((c) => c.slug === path).title;
    setTitle(title);
  }, [pathname]);

  return (
    <div className="application relative">
      <Toaster position="top-center" richColors />
      <Header />
      <div className="relative">
        <Sidebar content={sidebarContent} />
        <PageContent title={title} />
      </div>
    </div>
  );
};

export default AdminApp;
