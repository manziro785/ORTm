import style from "./HowItWorks.module.css";
import icon_11 from "../../../assets/mainPage/icon_11.svg";
import icon_12 from "../../../assets/mainPage/icon_12.svg";
import icon_13 from "../../../assets/mainPage/icon_13.svg";
import icon_14 from "../../../assets/mainPage/icon_14.svg";

export default function HowItWorks() {
  return (
    <div>
      <div className={style.how_it_works_wrapper}>
        <div className={style.how_it_works_content}>
          <h4>Как это работает?</h4>
          <div className={style.cards}>
            <div className={style.card} style={{ backgroundColor: "#001C65" }}>
              <img src={icon_11} alt="" />
              <h5>Решай задачи</h5>
              <p>
                Лента пополняется новыми <br /> задачами.
              </p>
            </div>
            <div className={style.card} style={{ backgroundColor: "#022684" }}>
              <img src={icon_12} alt="" />
              <h5>Выбери секции</h5>
              <p>
                Аналогия? Математика? <br />
                Фильтруй и выбирай.{" "}
              </p>
            </div>
            <div className={style.card} style={{ backgroundColor: "#013AC9" }}>
              <img src={icon_13} alt="" />
              <h5>Понимай задания</h5>
              <p>
                “Посмотри решение” <br />
                ChatGPT объясняет.{" "}
              </p>
            </div>
            <div className={style.card} style={{ backgroundColor: "#1653EB" }}>
              <img src={icon_14} alt="" />
              <h5>Сохраняй прогресс </h5>
              <p>
                В профиле сохраняются <br />
                статистики, избранные задачи.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
