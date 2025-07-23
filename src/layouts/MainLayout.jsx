import Sidebar from "../components/common/sideBar/sideBar";
import style from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className={style.layoutContainer}>
      <Sidebar />
      <div className={style.pageContent}>
        <Outlet />
      </div>
    </div>
  );
}
