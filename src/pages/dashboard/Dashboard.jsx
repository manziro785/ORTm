import style from "./Dashboard.module.css";
import Sidebar from "../../components/common/sideBar/sideBar";
import Search from "../../components/dashboard/search/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img__1 from "../../assets/scrollFeed/img__1 (1).svg";
import img__2 from "../../assets/scrollFeed/img__1 (1).svg";
import img__3 from "../../assets/scrollFeed/img__1 (1).svg";

const cardData = [
  {
    title: "Толук тест",
    subtitle: "Бардык бөлүмдөр",
    time: "215 мүнөт",
    count: 150,
    color: "#5b8efc",
    textColor: "#fff",
  },
  {
    title: "Математика",
    subtitle: "1-бөлүк",
    time: "30 мүнөт",
    count: 30,
    color: "#d6ff4b",
    textColor: "#111",
  },
  {
    title: "Математика",
    subtitle: "2-бөлүк",
    time: "60 мүнөт",
    count: 30,
    color: "#8fffc1",
    textColor: "#111",
  },
  {
    title: "Окошоттуктар жана сүйлөмдөрдү толуктоо",
    time: "30 мүнөт",
    count: 30,
    color: "#ffe066",
    textColor: "#111",
  },
  {
    title: "Текстти окуу жана түшүнүү",
    time: "60 мүнөт",
    count: 30,
    color: "#ffb98a",
    textColor: "#111",
  },
  {
    title: "Кыргыз тилинин грамматикасы",
    time: "35 мүнөт",
    count: 30,
    color: "#3b6fff",
    textColor: "#fff",
  },
];

const cardData2 = [
  {
    title: "Блиц Математика",
    subtitle: "Бардык бөлүмдөр",
    time: "10 мүнөт",
    count: 10,
    color: "#2563eb",
    textColor: "#fff",
  },
  {
    title: "Блиц Орус тили",
    subtitle: "Бардык бөлүмдөр",
    time: "10 мүнөт",
    count: 10,
    color: "#ffe066",
    textColor: "#111",
  },
  {
    title: "Математика: Толук кайталоо",
    subtitle: "Бардык бөлүмдөр",
    time: "30 мүнөт",
    count: 25,
    color: "#ffb98a",
    textColor: "#111",
  },
  {
    title: "Орус тил: Толук кайталоо",
    subtitle: "Бардык бөлүмдөр",
    time: "30 мүнөт",
    count: 25,
    color: "#8fffc1",
    textColor: "#111",
  },
  {
    title: "Текстти окуу жана түшүнүү",
    time: "60 мүнөт",
    count: 30,
    color: "#2563eb",
    textColor: "#fff",
  },
  {
    title: "Кыргыз тилинин грамматикасы",
    time: "35 мүнөт",
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
        {" "}
        <Sidebar />
        <div className={style.dashboard_content}>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className={style.dashboard_content_wrapper}>
            <h4>Классикалык жыйнактар</h4>
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
                    Убактысы: {card.time}
                  </div>
                  <div style={{ fontSize: "1em", opacity: 0.85 }}>
                    Тапшырмалардын саны: {card.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.dashboard_content_wrapper_images}>
            <h4>Тапшырма клиптери</h4>

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
            <h4>Өзгөчө жыйнактар</h4>
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
                    Убактысы: {card.time}
                  </div>
                  <div style={{ fontSize: "1em", opacity: 0.85 }}>
                    Тапшырмалардын саны: {card.count}
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
