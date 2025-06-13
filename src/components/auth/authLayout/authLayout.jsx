import React from "react";
import style from "./authLayout.module.css";
import { NavLink } from "react-router-dom";

export default function AuthLayout({
  children,
  title,
  backLink,
  nextLink,
  relink,
  relinkLink,
  onNext,
}) {
  return (
    <>
      <div className={style.authLayout}>
        <div>
          <div className={style.wrapper}>
            <div className={style.header}>
              <h3>{title}</h3>
            </div>
            <div className={style.container}>{children}</div>
          </div>
          <div className={style.btns}>
            <NavLink to={backLink} className={style.btn_back}>
              Артка кайтуу
            </NavLink>
            <div className={style.relink}>
              <NavLink to={relinkLink}>{relink}</NavLink>
            </div>
            {onNext ? (
              <button className={style.btn_back} onClick={onNext} type="button">
                Улантуу
              </button>
            ) : (
              <NavLink to={nextLink} className={style.btn_back}>
                Улантуу
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
