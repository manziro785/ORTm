import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../dashboard/Dashboard.module.css";
import Sidebar from "../../components/common/sideBar/sideBar";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={style.dashboard_container}>
      {" "}
      <Sidebar />
      <div className={style.dashboard_content}>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
