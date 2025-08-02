import React from "react";
import style from "../dashboard/Dashboard.module.css";
import style_start from "./startSurvey.module.css";
import { NavLink } from "react-router-dom";
import left_line from "../../assets/icons/left_line.svg";
import img from "../../assets/imgss/img_start_surv.svg";

export default function StartSurvey() {
  return (
    <>
      <div className={style.dashboard_content}>
        <div className={style_start.start_survey_content}>
          <NavLink to="/dashboard" className={style_start.btn_back}>
            <img src={left_line} alt="" />
          </NavLink>
          <div className={style_start.start_survey_content_wrapper}>
            <div>
              <h3>Полный тест</h3>
              <p>
                Добро пожаловать на полный тест ОРТ! Этот тест состоит из
                четырех разделов: математика, кыргызский, русский и чтение.
                Общее время - 215 минут. Количество заданий и ограничение по
                времени в каждом разделе разное.Вы можете ответить на каждое
                задание только один раз - выбранный ответ автоматически
                сохраняется и не может быть изменен позже. Поэтому делайте
                каждый выбор внимательно и обдуманно.После завершения теста вы
                увидите результаты:
                <br />
                <div className={style_start.span_start_survey}>
                  {" "}
                  - Количество правильных и неправильных ответов
                </div>
                <br />
                <div className={style_start.span_start_survey}>
                  {" "}
                  - Общие проценты
                </div>
                <br />
                <div className={style_start.span_start_survey}>
                  {" "}
                  - Результаты по каждому разделу
                </div>
                <br />
                Этот тест — прекрасная возможность проверить себя и
                подготовиться к настоящему экзамену. Удачи!
              </p>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className={style_start.down_side}>
            <div>
              <p>Время: 215 минут</p>
              <p>Количество задач: 150</p>
            </div>
            <div className={style_start.btn_start_survey}>
              <NavLink to="/exam" className={style_start.btn_start_survey_link}>
                Начать тест
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
