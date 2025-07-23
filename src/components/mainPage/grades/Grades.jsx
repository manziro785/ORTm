import React from "react";
import style from "./Grades.module.css";

export default function Grades() {
  return (
    <div className={style.grades_container}>
      <div className={style.grades_content}>
        <div className={style.card}>
          <p>2 000+</p>
          <div>
            Задач <br />
            по ОРТ
          </div>
        </div>
        <div className={style.card}>
          <p>10 000+</p>
          <div>
            Активных <br />
            Пользователей
          </div>
        </div>
        <div className={style.card}>
          <p>30+</p>
          <div>
            Тематические <br />
            коллекции
          </div>
        </div>
        <div className={style.card}>
          <p>100%</p>
          <div>
            Бесплатно и
            <br /> доступно
          </div>
        </div>
      </div>
    </div>
  );
}
