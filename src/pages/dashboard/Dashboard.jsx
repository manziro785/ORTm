import style from "./Dashboard.module.css";
import Search from "../../components/dashboard/search/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img__1 from "../../assets/scrollFeed/img__1 (1).svg";
import img__2 from "../../assets/scrollFeed/img__1 (1).svg";
import img__3 from "../../assets/scrollFeed/img__1 (1).svg";

const cardData = [
  {
    title: "Полный тест",
    subtitle: "Все разделы",
    time: "215 минут",
    count: 150,
    color: "#5b8efc",
    textColor: "#fff",
  },
  {
    title: "Математика",
    subtitle: "Раздел 1",
    time: "30 минут",
    count: 30,
    color: "#d6ff4b",
    textColor: "#111",
  },
  {
    title: "Математика",
    subtitle: "Раздел 2",
    time: "60 минут",
    count: 30,
    color: "#8fffc1",
    textColor: "#111",
  },
  {
    title: "Дополнение предложений и аналогии",
    time: "30 минут",
    count: 30,
    color: "#ffe066",
    textColor: "#111",
  },
  {
    title: "Чтение и понимание текста",
    time: "60 минут",
    count: 30,
    color: "#ffb98a",
    textColor: "#111",
  },
  {
    title: "Грамматика кыргызского языка",
    time: "35 минут",
    count: 30,
    color: "#3b6fff",
    textColor: "#fff",
  },
];

const cardData2 = [
  {
    title: "Блиц Математика",
    subtitle: "Все разделы",
    time: "10 минут",
    count: 10,
    color: "#2563eb",
    textColor: "#fff",
  },
  {
    title: "Блиц Русский язык",
    subtitle: "Все разделы",
    time: "10 минут",
    count: 10,
    color: "#ffe066",
    textColor: "#111",
  },
  {
    title: "Математика: Полный повтор",
    subtitle: "Все разделы",
    time: "30 минут",
    count: 25,
    color: "#ffb98a",
    textColor: "#111",
  },
  {
    title: "Русский язык: Полный повтор",
    subtitle: "Все разделы",
    time: "30 минут",
    count: 25,
    color: "#8fffc1",
    textColor: "#111",
  },
  {
    title: "Чтение и понимание текста",
    time: "60 минут",
    count: 30,
    color: "#2563eb",
    textColor: "#fff",
  },
  {
    title: "Грамматика кыргызского языка",
    time: "35 минут",
    count: 30,
    color: "#2563eb",
    textColor: "#fff",
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCards = cardData.filter((card) =>
    (card.title + " " + (card.subtitle || ""))
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const filteredCards2 = cardData2.filter((card) =>
    (card.title + " " + (card.subtitle || ""))
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className={style.dashboard_container}>
        <div className={style.dashboard_content}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className={style.dashboard_content_wrapper}>
            <h4>Классические сборники</h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                // marginTop: "1.5rem",
              }}
            >
              {filteredCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate("/start_survey")}
                  style={{
                    background: card.color,
                    borderRadius: "16px",
                    padding: "2rem 1.5rem",
                    minWidth: "270px",
                    maxWidth: "320px",
                    flex: "1 1 270px",
                    color: card.textColor,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                    cursor: "pointer",
                  }}
                  className={style.dashboard_content_wrapper_card}
                >
                  {card.subtitle && (
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "1.1em",
                        opacity: 0.8,
                      }}
                    >
                      {card.subtitle}
                    </div>
                  )}
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.35em",
                      margin: "0.5em 0",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: "1em",
                      marginTop: "1.2em",
                      opacity: 0.85,
                    }}
                  >
                    Время: {card.time}
                  </div>
                  <div style={{ fontSize: "1em", opacity: 0.85 }}>
                    Количество заданий: {card.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.dashboard_content_wrapper_images}>
            <h4>Клипы по заданиям</h4>

            <div>
              <img
                src={img__1}
                alt=""
                onClick={() => navigate("/scroll")}
                style={{ cursor: "pointer" }}
              />
              <img
                src={img__2}
                alt=""
                onClick={() => navigate("/scroll")}
                style={{ cursor: "pointer" }}
              />
              <img
                src={img__3}
                alt=""
                onClick={() => navigate("/scroll")}
                style={{ cursor: "pointer" }}
              />
              <img
                src={img__1}
                alt=""
                onClick={() => navigate("/scroll")}
                style={{ cursor: "pointer" }}
              />
              <img
                src={img__2}
                alt=""
                onClick={() => navigate("/scroll")}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className={style.dashboard_content_wrapper}>
            <h4>Особые сборники</h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                // marginTop: "1.5rem",
              }}
            >
              {filteredCards2.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate("/start_survey")}
                  style={{
                    background: card.color,
                    borderRadius: "16px",
                    padding: "2rem 1.5rem",
                    minWidth: "270px",
                    maxWidth: "320px",
                    flex: "1 1 270px",
                    color: card.textColor,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                    cursor: "pointer",
                  }}
                  className={style.dashboard_content_wrapper_card}
                >
                  {card.subtitle && (
                    <div
                      style={{
                        fontWeight: 500,
                        fontSize: "1.1em",
                        opacity: 0.8,
                      }}
                    >
                      {card.subtitle}
                    </div>
                  )}
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.35em",
                      margin: "0.5em 0",
                    }}
                  >
                    {card.title}
                  </div>
                  <div
                    style={{
                      fontSize: "1em",
                      marginTop: "1.2em",
                      opacity: 0.85,
                    }}
                  >
                    Время: {card.time}
                  </div>
                  <div style={{ fontSize: "1em", opacity: 0.85 }}>
                    Количество заданий: {card.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
