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

  const renderCard = (card, idx) => (
    <div
      key={idx}
      onClick={() => navigate("/start_survey")}
      className={style.card}
      style={{
        background: card.color,
        color: card.textColor,
      }}
    >
      {card.subtitle && (
        <div className={style.cardSubtitle}>{card.subtitle}</div>
      )}
      <div className={style.cardTitle}>{card.title}</div>
      <div className={style.cardInfo}>Время: {card.time}</div>
      <div className={style.cardInfo}>Количество заданий: {card.count}</div>
    </div>
  );

  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard_content}>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />

        <div className={style.dashboard_content_wrapper}>
          <h4>Классические сборники</h4>
          <div className={style.cardGrid}>{filteredCards.map(renderCard)}</div>
        </div>

        <div className={style.dashboard_content_wrapper_images}>
          <h4>Клипы по заданиям</h4>
          <div className={style.imageRow}>
            {[img__1, img__2, img__3, img__1, img__2].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                onClick={() => navigate("/scroll")}
                className={style.image}
              />
            ))}
          </div>
        </div>

        <div className={style.dashboard_content_wrapper}>
          <h4>Особые сборники</h4>
          <div className={style.cardGrid}>{filteredCards2.map(renderCard)}</div>
        </div>
      </div>
    </div>
  );
}
