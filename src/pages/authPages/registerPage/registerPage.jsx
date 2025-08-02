import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth/authLayout/authLayout";
import "../../../styles/auth_styles.css";

const SUBJECTS = [
  { value: "MATH", label: "Математика" },
  { value: "CHEMISTRY", label: "Химия" },
  { value: "PHYSICS", label: "Физика" },
  { value: "BIOLOGY", label: "Биология" },
  { value: "KYRGYZ", label: "Кыргызский язык" },
  { value: "HISTORY", label: "История" },
  { value: "ANALOGY", label: "Аналогия" },
  { value: "READING", label: "Чтение" },
  { value: "PRACTICERUSHIAN", label: "Русский язык (Практика)" },
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    interest: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Пожалуйста, введите имя";
    if (!form.surname.trim()) errs.surname = "Пожалуйста, введите фамилию";
    if (!form.email.trim()) errs.email = "Пожалуйста, введите почту";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Некорректная почта";
    if (!form.password) errs.password = "Пожалуйста, введите пароль";
    else if (form.password.length < 6)
      errs.password = "Пароль должен содержать минимум 6 символов";
    if (!form.interest.length)
      errs.interest = "Пожалуйста, выберите интересующий предмет";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, interest: val ? [val] : [] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) {
      setServerError("Пожалуйста, заполните все поля корректно.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log("Ответ сервера:", data);

      if (res.ok && data.message) {
        localStorage.setItem("token", data.message);
        // задержка необязательна, но можно оставить на всякий случай
        navigate("/dashboard");
      } else {
        setServerError(data.message || "Ошибка регистрации.");
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      setServerError("Сервер временно недоступен. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Регистрация"
      backLink="/"
      nextLink="/email_resend"
      relink="Уже есть аккаунт?"
      relinkLink="/login"
      onNext={handleSubmit}
    >
      <h4>Шаг 1</h4>
      <h5>Заполните данные для регистрации</h5>
      <p>Заполните следующие поля, чтобы получить доступ к платформе</p>
      <form className="form_register" onSubmit={handleSubmit}>
        <div className="form_register_up">
          <div className="form_register_row">
            <div>
              <label>
                Имя <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Введите имя"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.name && <div className="form_error">{errors.name}</div>}
            </div>
            <div>
              <label>
                Фамилия <span>*</span>
              </label>
              <input
                type="text"
                name="surname"
                placeholder="Введите фамилию"
                value={form.surname}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.surname && (
                <div className="form_error">{errors.surname}</div>
              )}
            </div>
          </div>
          <div className="form_register_row">
            <div>
              <label>
                Электронная почта
                <span> *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Введите почту"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && <div className="form_error">{errors.email}</div>}
            </div>
            <div>
              <label>
                Пароль
                <span> *</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Придумайте пароль"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.password && (
                <div className="form_error">{errors.password}</div>
              )}
            </div>
          </div>
        </div>
        <div>
          <label style={{ margin: "0.5rem 0" }}>
            Выберите интересующие предметы ОРТ
          </label>
          <select
            name="interest"
            value={form.interest[0] || ""}
            onChange={handleSelect}
            disabled={loading}
          >
            <option value="">Выберите предмет</option>
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {errors.interest && (
            <div className="form_error">{errors.interest}</div>
          )}
        </div>
        {serverError && <div className="form_error">{serverError}</div>}
      </form>
    </AuthLayout>
  );
}
