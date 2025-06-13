import React from "react";
import style from "./Grades.module.css";

export default function Grades() {
  return (
    <div className={style.grades_container}>
      <div className={style.grades_content}>
        <div className={style.card}>
          <p>2 000+</p>
          <div>
            ОРТ <br />
            тапшырмалары
          </div>
        </div>
        <div className={style.card}>
          <p>10 000+</p>
          <div>
            Активдүү <br />
            колдонуучу
          </div>
        </div>
        <div className={style.card}>
          <p>30+</p>
          <div>
            Тематикалык <br />
            жыйнактар
          </div>
        </div>
        <div className={style.card}>
          <p>100%</p>
          <div>
            Акысыз жана
            <br /> жеткиликтүү
          </div>
        </div>
      </div>
    </div>
  );
}
