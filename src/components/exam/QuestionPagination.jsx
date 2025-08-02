import React from "react";
import styles from "./QuestionPagination.module.css";
import { useNavigate } from "react-router-dom";

const totalQuestions = 30;

export const QuestionPagination = ({ currentQuestion }) => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/exam/${index + 1}`);
  };

  return (
    <div className={styles.container}>
      {/* Кружки */}
      <div className={styles.circles}>
        {Array.from({ length: totalQuestions }, (_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={
              index === currentQuestion
                ? `${styles.circle} ${styles.activeCircle}`
                : styles.circle
            }
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* Номера */}
      <div className={styles.numbers}>
        {Array.from({ length: totalQuestions }, (_, index) => (
          <span
            key={index}
            onClick={() => handleClick(index)}
            className={
              index === currentQuestion
                ? `${styles.number} ${styles.activeNumber}`
                : styles.number
            }
            style={{ cursor: "pointer" }}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};
