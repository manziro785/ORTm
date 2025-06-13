import React, { useState, useEffect } from "react";
import style from "../dashboard/Dashboard.module.css";
import Sidebar from "../../components/common/sideBar/sideBar";
import img_lip from "../../assets/imgss/img___lip2.svg";

const LETTERS = ["А", "Б", "В", "Г"];

export default function Exam2() {
  const [time, setTime] = useState(30 * 60); // 30 минут в секундах

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (t) => {
    const m = String(Math.floor(t / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div>
      <div className={style.dashboard_container}>
        {" "}
        <Sidebar />
        <div className={style.dashboard_content}>
          <img src={img_lip} alt="" />
          {/* Нижний блок с кнопками и таймером */}
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
              background: "#181c20",
              padding: "2.2rem 0 2.2rem 0",
              zIndex: 100,
            }}
          >
            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0.9em 2.5em",
                cursor: "pointer",
                marginRight: "2.5rem",
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
              }}
            >
              Артка
            </button>
            {/* Кнопки А Б В Г */}
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {LETTERS.map((l) => (
                <button
                  key={l}
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "#181c20",
                    color: "#fff",
                    border: "3px solid #2563eb",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            {/* Таймер */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7em",
                marginLeft: "2.5rem",
                marginRight: "2.5rem",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.25rem",
              }}
            >
              <span style={{ fontSize: "1.5em" }}>⏱</span> {formatTime(time)}
            </div>
            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0.9em 2.5em",
                cursor: "pointer",
                marginLeft: "2.5rem",
                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.10)",
              }}
            >
              Алдыга
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
