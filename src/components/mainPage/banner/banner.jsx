import style from "./banner.module.css";
import img_blue from "../../../assets/mainPage/blue_answ.svg";
import img_yellow from "../../../assets/mainPage/orange_answ.svg";
import img_test from "../../../assets/mainPage/img_tests.svg";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Banner() {
  const blueRef = useRef();
  const yellowRef = useRef();
  const testRef = useRef();

  useEffect(() => {
    let animationFrame;
    let lastTimestamp = 0;
    let scroll = 0;
    const maxScroll = 800; // максимальная "виртуальная" прокрутка
    const speed = 0.9; // скорость автоскролла

    function animateParallax(ts) {
      if (!lastTimestamp) lastTimestamp = ts;
      const dt = ts - lastTimestamp;
      lastTimestamp = ts;
      scroll += dt * speed * 0.05;
      if (scroll > maxScroll) scroll = 0;
      if (blueRef.current)
        blueRef.current.style.transform = `translateY(${-scroll * 0.7}px)`;
      if (yellowRef.current)
        yellowRef.current.style.transform = `translateY(${-scroll * 0.7}px)`;
      if (testRef.current)
        testRef.current.style.transform = `translateY(${scroll * 0.5}px)`;
      animationFrame = requestAnimationFrame(animateParallax);
    }
    animationFrame = requestAnimationFrame(animateParallax);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={style.banner_container}>
      <div className={style.ortmaster}>ORTMASTER</div>
      <div className={style.parallax_wrapper}>
        <img ref={blueRef} src={img_blue} className={style.bg_img1} alt="" />
        <img
          ref={yellowRef}
          src={img_yellow}
          className={style.bg_img2}
          alt=""
        />
        <img ref={testRef} src={img_test} className={style.fg_img} alt="" />
      </div>
      <div className={style.banner_content}>
        <div className={style.info}>
          <h2>Прокрастинацияны</h2>
          <h3>даярдыкка айландыр!</h3>
          <p>
            Современная платформа для подготовки к ОРТ, где учеба становится
            ежедневной привычкой.
          </p>
          <div className={style.btns}>
            <NavLink to="/register" className={style.btn_reg}>
              Регистрация
            </NavLink>
            <NavLink to="/login" className={style.btn_login}>
              Вход
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
