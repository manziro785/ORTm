import React, { useState, useEffect } from "react";
import styles from "./Exam.module.css";
import { useNavigate, useParams } from "react-router-dom";
import img_example from "../../assets/imgss/img_example_task.svg";

import { QuestionPagination } from "../../components/exam/QuestionPagination";

const LETTERS = ["А", "Б", "В", "Г"];

export default function Exam() {
  const [time, setTime] = useState(30 * 60);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();
  const { num } = useParams(); // из URL: string

  // Преобразуем в число и корректируем, если надо
  const currentQuestion = Number(num) ? Number(num) - 1 : 0;

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
    <div className={styles.container}>
      <QuestionPagination currentQuestion={currentQuestion} />

      <div className={styles.content}>
        <div>
          {/* Здесь будет содержимое вопроса */}
          <img src={img_example} alt="" />
          <div className={styles.letterButtons}>
            {LETTERS.map((l) => (
              <button
                key={l}
                className={`${styles.letterButton} ${
                  selectedAnswer === l ? styles.active : ""
                }`}
                onClick={() => setSelectedAnswer(l)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <button
          className={styles.navButton}
          onClick={
            () => navigate(`/exam/${Math.max(currentQuestion, 1)}`) /* назад */
          }
        >
          Артка
        </button>

        <div className={styles.timer}>
          <span style={{ fontSize: "1.5em" }}>⏱</span> {formatTime(time)}
        </div>

        <button
          className={styles.navButton}
          onClick={
            () =>
              navigate(
                `/exam/${Math.min(currentQuestion + 2, 30)}`
              ) /* вперёд */
          }
        >
          Алдыга
        </button>

        {/* Отладка */}
        {/* <span>Текущий вопрос: {currentQuestion + 1}</span> */}
      </div>
    </div>
  );
}
