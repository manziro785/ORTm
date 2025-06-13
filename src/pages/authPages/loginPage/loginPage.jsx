import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth/authLayout/authLayout";
import "../../../styles/auth_styles.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
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
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email format.";
    if (!form.password) errs.password = "Please enter your password.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        localStorage.removeItem("email_verification_required");
        navigate("/dashboard");
      } else {
        setServerError(
          data.message || "Invalid credentials. Please try again."
        );
        alert(data.message || "Invalid credentials. Please try again.");
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
      title="Кирүү"
      backLink="/"
      nextLink="/dashboard"
      relink="Аккаунт түзүү"
      relinkLink="/register"
      onNext={handleSubmit}
    >
      <h4> </h4>
      <h5>Аккаунтуңузга кириңиз</h5>
      <p>Системага кирүү үчүн почтаңызды жана купуя сөзүңүздү жазыңыз.</p>
      <form className="form_register" onSubmit={handleSubmit}>
        <div className="form_register_up">
          <div className="form_register_row">
            <div>
              <label>
                Электрондук почта <span>*</span>
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
                placeholder="Купуя сөздү жазыңыз"
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
        {serverError && <div className="form_error">{serverError}</div>}
        {/* <button type="submit" className="btn_reg" disabled={loading} style={{marginTop: '1.5rem'}}>
          {loading ? "Жүктөлүүдө..." : "Кирүү"}
        </button> */}
      </form>
    </AuthLayout>
  );
}
