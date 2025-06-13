import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth/authLayout/authLayout";
import "../../../styles/auth_styles.css";

const SUBJECTS = [
  { value: "MATH", label: "Математика" },
  { value: "CHEMISTRY", label: "Химия" },
  { value: "PHYSICS", label: "Физика" },
  { value: "BIOLOGY", label: "Биология" },
  { value: "KYRGYZ", label: "Кыргыз тили" },
  { value: "HISTORY", label: "Тарых" },
  { value: "ANALOGY", label: "Аналогия" },
  { value: "READING", label: "Окуу (Чтение)" },
  { value: "PRACTICERUSHIAN", label: "Орус тили (Практика)" },
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
    if (!form.name.trim()) errs.name = "Атыңызды жазыңыз";
    if (!form.surname.trim()) errs.surname = "Фамилияңызды жазыңыз";
    if (!form.email.trim()) errs.email = "Почтаңызды жазыңыз";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Почта туура эмес";
    if (!form.password) errs.password = "Купуя сөз жазыңыз";
    else if (form.password.length < 6)
      errs.password = "Купуя сөз кеминде 6 символ болушу керек";
    if (!form.interest.length) errs.interest = "Кызыkкан предметти тандаңыз";
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
      alert("Please fill in all fields correctly.");
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
      if (res.ok) {
        localStorage.setItem("email_verification_required", "1");
        navigate("/email_resend");
      } else {
        setServerError(data.message || "An error occurred. Please try again.");
        alert(data.message || "An error occurred. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again.");
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Катталуу"
      backLink="/"
      nextLink="/email_resend"
      relink="Эсептик жазууңуз барбы?"
      relinkLink="/login"
      onNext={handleSubmit}
    >
      <h4>1-кадам</h4>
      <h5>Катталуу үчүн маалыматтарды толтуруңуз</h5>
      <p> Заполните следующие поля, чтобы получить доступ к платформе</p>
      <form className="form_register" onSubmit={handleSubmit}>
        <div className="form_register_up">
          <div className="form_register_row">
            <div>
              <label>
                Аты <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Атыңызды жазыңыз"
                value={form.name}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.name && <div className="form_error">{errors.name}</div>}
            </div>
            <div>
              <label>
                Фамилиясы <span>*</span>
              </label>
              <input
                type="text"
                name="surname"
                placeholder="Фамилияңызды жазыңыз"
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
                Электрондук почта
                <span> *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Почтаңызды жазыңыз"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.email && <div className="form_error">{errors.email}</div>}
            </div>
            <div>
              <label>
                Купуя сөз (пароль)
                <span> *</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Купуя сөз ойлоп табыңыз"
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
            Сизге кызыkкан ОРТ предметтери
          </label>
          <select
            name="interest"
            value={form.interest[0] || ""}
            onChange={handleSelect}
            disabled={loading}
          >
            <option value="">Кызыkкан предметтерди тандаңыз</option>
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
