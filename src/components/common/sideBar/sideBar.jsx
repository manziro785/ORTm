import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./Sidebar.module.css";
import img1 from "../../../assets/scrollFeed/img_1.svg";
import img2 from "../../../assets/scrollFeed/img_2.svg";
import img3 from "../../../assets/scrollFeed/img_3.svg";
import img4 from "../../../assets/scrollFeed/img_4.svg";
// import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //   useTranslation();

  const handleNavigation = (path) => {
    if (
      location.pathname.includes("create-survey") ||
      location.pathname.includes("take-survey") ||
      location.pathname.includes("survey")
    ) {
      const event = new CustomEvent("navigationAttempt", { detail: { path } });
      window.dispatchEvent(event);
    } else {
      navigate(path);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <a href="/">ОРТМАСТЕР</a>
      </div>
      <nav className={style.btns}>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/dashboard");
              }}
            >
              <img src={img1} alt="" /> <span>Главная</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scroll"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/scroll");
              }}
            >
              <img src={img2} alt="" /> <span>Лента</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/friends");
              }}
            >
              <img src={img3} alt="" /> <span>Друзья</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/profile");
              }}
            >
              <img src={img4} alt="" /> <span>Профиль</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
