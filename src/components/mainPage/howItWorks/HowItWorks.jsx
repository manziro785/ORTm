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
          <h4>Бул кантип иштейт?</h4>
          <div className={style.cards}>
            <div className={style.card} style={{ backgroundColor: "#001C65" }}>
              <img src={icon_11} alt="" />
              <h5>Тапшырмаларды чыгар</h5>
              <p>
                Лента жаңы тапшырмалар менен <br /> жаңыланып турат.
              </p>
            </div>
            <div className={style.card} style={{ backgroundColor: "#022684" }}>
              <img src={icon_12} alt="" />
              <h5>Секцияларды танда</h5>
              <p>
                Аналогиябы? Математикабы? <br />
                Фильтрлеп өзүңө ыңгайлуу кыл.{" "}
              </p>
            </div>
            <div className={style.card} style={{ backgroundColor: "#013AC9" }}>
              <img src={icon_13} alt="" />
              <h5>Жоопторду түшүн</h5>
              <p>
                “Чечимди көрүү” баскычы менен <br />
                ChatGPT түшүндүрмө берет.{" "}
              </p>
            </div>
            <div className={style.card} style={{ backgroundColor: "#1653EB" }}>
              <img src={icon_14} alt="" />
              <h5>Прогрессти сакта</h5>
              <p>
                Профилиңде чогулткан жыйнактар,
                <br /> статистика, сүйүктүүлөр сакталат.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
