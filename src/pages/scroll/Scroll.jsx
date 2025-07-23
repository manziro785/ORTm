import { useState, useRef, useEffect } from "react";
import style from "./Scroll.module.css";
// import pencil from "../../assets/scrollFeed/img_back.svg";
// import img_example from "../../assets/scrollFeed/img_example.svg";
import pencil from "../../assets/scrollFeed/icon_right.svg";

const LETTERS = ["A", "Б", "В", "Г", "Д", "Е", "Ж", "З"];

export default function Scroll() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [answers, setAnswers] = useState({}); // {0: 0, ...}
  const [explainIdx, setExplainIdx] = useState(null); // индекс вопроса для объяснения
  const [selectedFilter, setSelectedFilter] = useState("all");
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const [results, setResults] = useState({}); // { [idx]: true/false }

  // Загрузка вопросов с бэка
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_URL}/task/next`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setQuestions(Array.isArray(data) ? data : [data]);
        setLoading(false);
      })
      .catch((e) => {
        setError("Серверге туташуу мүмкүн эмес же авторизация жок");
        setLoading(false);
      });
  }, []);

  // Очистка canvas
  function handleClearCanvas() {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  // Примитивная логика рисования на canvas (с учетом масштаба)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#ffe066";
    let lastX = 0,
      lastY = 0;

    function getXY(e) {
      const rect = canvas.getBoundingClientRect();
      let x, y;
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      // Приводим к масштабу canvas
      x = x * (canvas.width / rect.width);
      y = y * (canvas.height / rect.height);
      return [x, y];
    }
    function start(e) {
      drawing.current = true;
      [lastX, lastY] = getXY(e);
    }
    function move(e) {
      if (!drawing.current) return;
      const [x, y] = getXY(e);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      [lastX, lastY] = [x, y];
    }
    function stop() {
      drawing.current = false;
    }
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseup", stop);
    canvas.addEventListener("mouseleave", stop);
    canvas.addEventListener("touchstart", start);
    canvas.addEventListener("touchmove", move);
    canvas.addEventListener("touchend", stop);
    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseup", stop);
      canvas.removeEventListener("mouseleave", stop);
      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      canvas.removeEventListener("touchend", stop);
    };
  }, [showCanvas]);

  // Обработка ответа
  async function handleAnswer(idx, optIdx) {
    const answerId = filteredQuestions[idx]?.answers[optIdx]?.id;
    console.log(
      "Отправляю id ответа:",
      answerId,
      "(idx:",
      idx,
      ", optIdx:",
      optIdx,
      ")"
    );
    if (results[idx] !== undefined) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://127.0.0.1:8080/task?id=${answerId}`, {
        method: "POST",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      const data = await res.json(); // { correct: true/false }
      setResults((prev) => ({ ...prev, [idx]: data.correct }));
      setAnswers((prev) => ({ ...prev, [idx]: optIdx }));
      if (!data.correct) {
        alert("Туура эмес!");
      }
    } catch {
      alert("Серверден жооп келген жок");
    }
  }

  // Открыть чат-объяснение
  function handleExplain(idx) {
    setExplainIdx(idx);
    setShowChat(true);
    setChatMsg("");
    setChatHistory([]);
    setChatError("");
    setChatLoading(true);
    const taskId = questions[idx]?.id;
    const token = localStorage.getItem("token");
    const userQuestion =
      "кайсыл жооп туура жана эмне үчүн экенин так түшүндүрүп бер";
    fetch(
      `http://127.0.0.1:8080/api/chat/ask?userQuestion=${encodeURIComponent(
        userQuestion
      )}&taskId=${taskId}`,
      {
        method: "POST",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    )
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Сервер вернул ошибку");
        }
        const text = await res.text();
        try {
          return JSON.parse(text);
        } catch {
          return { answer: text };
        }
      })
      .then((data) => {
        setChatHistory([
          {
            role: "assistant",
            content: data.answer || data.message || "Жооп жок",
          },
        ]);
        setChatLoading(false);
      })
      .catch((e) => {
        setChatError("Серверден жооп келген жок: " + e.message);
        setChatLoading(false);
      });
  }

  // Закрыть чат
  function handleCloseChat() {
    setShowChat(false);
    setExplainIdx(null);
    setChatHistory([]);
    setChatMsg("");
    setChatError("");
  }

  // Фильтрация вопросов по select
  const filterOptions = [
    { value: "all", label: "Бардык суроолор" },
    ...questions.map((q, idx) => ({
      value: String(q.id),
      label: `Суроо ${idx + 1}`,
    })),
  ];
  const filteredQuestions =
    selectedFilter === "all"
      ? questions
      : questions.filter((q) => String(q.id) === selectedFilter);

  // --- UI ---
  return (
    <>
      <div className={style.scroll_container}>
        <button
          className={style.open_canvas_btn}
          onClick={() => setShowCanvas((v) => !v)}
          aria-label="Открыть рисование"
        >
          <img src={pencil} alt="Draw" />
        </button>
        <div
          className={style.scroll_feed}
          style={{
            transform: showCanvas ? "translateX(-230px)" : "translateX(0)",
            transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <select
            className={style.select}
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            {filterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {loading && (
            <div style={{ color: "#fff", textAlign: "center", marginTop: 40 }}>
              Жүктөлүүдө...
            </div>
          )}
          {error && (
            <div
              style={{ color: "#e53935", textAlign: "center", marginTop: 40 }}
            >
              {error}
            </div>
          )}
          {!loading &&
            !error &&
            filteredQuestions.map((q, idx) => (
              <div className={style.card_wrapper} key={q.id || idx}>
                <div className={style.card}>
                  <img
                    src={q.question}
                    alt="question"
                    className={style.question_img}
                  />
                </div>
                <div className={style.variants}>
                  {q.answers.map((ans, optIdx) => {
                    const isAnswered = results[idx] !== undefined;
                    const isSelected = answers[idx] === optIdx;
                    const isCorrect =
                      isAnswered && isSelected && results[idx] === true;
                    const isWrong =
                      isAnswered && isSelected && results[idx] === false;
                    return (
                      <button
                        key={ans.id}
                        className={style.variant_btn}
                        style={{
                          background: isCorrect
                            ? "#4caf50"
                            : isWrong
                            ? "#e53935"
                            : isSelected
                            ? "#1976d2"
                            : "",
                          borderColor: isCorrect
                            ? "#4caf50"
                            : isWrong
                            ? "#e53935"
                            : "#3b82f6",
                          color: isAnswered ? "#fff" : "",
                          pointerEvents: isAnswered ? "none" : "auto",
                          opacity: isAnswered && !isSelected ? 0.7 : 1,
                        }}
                        onClick={() => {
                          console.log(
                            "onClick: answerId =",
                            ans.id,
                            "idx =",
                            idx,
                            "optIdx =",
                            optIdx
                          );
                          handleAnswer(idx, optIdx);
                        }}
                      >
                        <b>
                          {LETTERS[optIdx] || String.fromCharCode(65 + optIdx)}
                        </b>
                      </button>
                    );
                  })}
                </div>
                {answers[idx] !== undefined && (
                  <div
                    style={{
                      marginTop: "1rem",
                      color:
                        q.correctIndex !== undefined &&
                        answers[idx] === q.correctIndex
                          ? "#4caf50"
                          : "#e53935",
                      fontWeight: 600,
                      fontSize: "1.1em",
                      background: "#fff",
                      zIndex: 1000,
                      borderRadius: "8px",
                      padding: "0.5em 1em",
                    }}
                  >
                    {q.correctIndex !== undefined
                      ? answers[idx] === q.correctIndex
                        ? "Туура!"
                        : "Туура эмес"
                      : "Жооп текшерүү мүмкүн эмес"}
                  </div>
                )}
                <button
                  className={style.explain_btn}
                  onClick={() => handleExplain(idx)}
                >
                  Жоопту түшүндүрүп берүү
                </button>
              </div>
            ))}
        </div>
        {/* Панель для рисования */}
        <div
          className={style.canvas_panel}
          style={{
            right: showCanvas ? 0 : "-440px",
            opacity: showCanvas ? 1 : 0,
            pointerEvents: showCanvas ? "auto" : "none",
            transition: "right 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s",
          }}
        >
          <button
            className={style.close_canvas_btn}
            onClick={() => setShowCanvas(false)}
          >
            ✖
          </button>
          <canvas
            ref={canvasRef}
            width={560}
            height={600}
            style={{
              background: "#181c20",
              borderRadius: "18px",
              width: "100%",
              height: "80%",
            }}
          ></canvas>
          <div className={style.canvas_footer}>
            <span className={style.canvas_label}>Каралама</span>
            <button className={style.clear_btn} onClick={handleClearCanvas}>
              Баарын тазалоо{" "}
              <span style={{ fontWeight: 700, fontSize: "1.2em" }}>✖</span>
            </button>
          </div>
        </div>
        {/* Чат-панель справа */}
        <div
          className={style.canvas_panel}
          style={{
            right: showChat ? 0 : "-440px",
            opacity: showChat ? 1 : 0,
            pointerEvents: showChat ? "auto" : "none",
            transition: "right 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s",
            background: "#23272f",
            zIndex: 100,
          }}
        >
          <button className={style.close_canvas_btn} onClick={handleCloseChat}>
            ✖
          </button>
          <div
            style={{
              width: "100%",
              height: "80%",
              overflowY: "auto",
              color: "#fff",
              padding: "1.5em 0.5em",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.2em",
                marginBottom: "1em",
              }}
            >
              Түшүндүрмө
            </div>
            {chatLoading && <div>Жүктөлүүдө...</div>}
            {chatError && <div style={{ color: "#e53935" }}>{chatError}</div>}
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                style={{
                  margin: "1em 0",
                  background: "#181c20",
                  borderRadius: 8,
                  padding: "1em",
                }}
              >
                {msg.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
