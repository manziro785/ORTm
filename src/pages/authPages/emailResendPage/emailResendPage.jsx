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
    if (token) {
      navigate("/dashboard");
    } else if (!verification) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <AuthLayout
      title="Катталуу"
      backLink="/register"
      nextLink="/dashboard"
      relink="Эсептик жазууңуз барбы?"
      relinkLink="/login"
    >
      <h4>2-кадам</h4>
      <h5>Почтаңызды тастыктаңыз</h5>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem", padding: "0 10%" }}>
        Сиздин почтаңызга шилтеме жөнөттүк. Каттоону аяктап, аккаунтка кирүү
        үчүн ошол шилтемени басыңыз.
      </p>
    </AuthLayout>
  );
}
