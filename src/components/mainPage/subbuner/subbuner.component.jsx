import style from "./subbuner.module.css";
import img_banner from "../../../assets/mainPage/img_banner.svg";

export default function Subbuner() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.info}>
          <h3>Решай задачи</h3>
          <h5>В любом формате</h5>
          <p>
            Тренируйся так, как удобно именно тебе: выбирай между классическими
            пробными тестами и кастомными сборниками. <br />У тебя 10 минут?
            Пройди мини-сборник. Есть час? Попробуй полноценный тест. Подготовка
            становится гибкой и комфортной.
          </p>
        </div>

        <div className={style.image}>
          <img src={img_banner} alt="" />
        </div>
      </div>
    </div>
  );
}
