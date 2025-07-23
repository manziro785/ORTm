// import style from './registerPage.module.css'
import AuthLayout from "../../../components/auth/authLayout/authLayout";
import "../../../styles/auth_styles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmailResendPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const verification = localStorage.getItem("email_verification_required");
    // if (token) {
    //   navigate("/dashboard");
    // } else if (!verification) {
    //   navigate("/register");
    // }
  }, [navigate]);

  return (
    <AuthLayout
      title="Регистрация"
      backLink="/register"
      nextLink="/dashboard"
      relink="Эсептик жазууңуз барбы?"
      relinkLink="/login"
    >
      <h4>Шаг 2</h4>
      <h5>Подтвердите свою почту</h5>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem", padding: "0 10%" }}>
        Мы отправили ссылку на вашу почту. Перейдите по ней, чтобы завершить
        регистрацию и войти в аккаунт.
      </p>
    </AuthLayout>
  );
}
