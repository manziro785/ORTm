import React from "react";
import style from "../dashboard/Dashboard.module.css";
import style_start from "./startSurvey.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/imgss/img_101 (1).png";

export default function StartSurvey() {
  return (
    <>
      {" "}
      <div className={style.dashboard_container}>
        {" "}
        <div className={style.dashboard_content}>
          <NavLink to="/dashboard" className={style_start.btn_back}>
            {/* <img src={left_line} alt="" /> */}
          </NavLink>
          <img src={img} alt="" />
          <div className={style_start.btns}>
            <div>
              <p>
                Убактысы: 215 мүнөт
                <br />
                Тапшырмалардын саны: 150
              </p>
            </div>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/exam"
              className={style_start.btn_start}
            >
              Баштоо
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
