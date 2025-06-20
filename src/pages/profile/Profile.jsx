import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Profile.module.css";

import Sidebar from "../../components/common/sideBar/sideBar";

export default function Profile() {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/profile/edit");
    };

    return (
        <div className={style.profileContainer}>
            <Sidebar />
            <div className={style.profileContent}>
                <div className={style.profileCard}>
                    <img src="../../assets/ProfilePage/6e1fdc17903c7bb070d9ad684dae08839e66881f.jpg" alt="avatar" className={style.avatar} />
                    <h2 className={style.name}>Рик Граймс Краш</h2>
                    <p className={style.university}>American University of Central Asia</p>
                    <h3 className={style.sectionTitle}>Интересующие секции:</h3>
                    <ul className={style.interests}>
                        <li>Математика</li>
                        <li>Грамматика</li>
                        <li>Аналогии</li>
                        <li>Биология</li>
                    </ul>
                    <button className={style.editBtn} onClick={handleEdit}>
                        Редактировать
                    </button>
                </div>
                <div className={style.mainBlock}>
                    <h3 className={style.sectionTitle}>Информация о пользователе</h3>
                    <p>Школьник, целеустремленный в подготовке к ОРТ. Интересуюсь математикой и критическим мышлением, участвую в олимпиадах и помогаю одноклассникам разбираться в сложных темах.</p>
                    <h3 className={style.sectionTitle}>Статистика пользователя</h3>
                    <div className={style.stats}>
                        <div className={style.card} style={{ background: '#FAD961' }}>
                            <img src="../../assets/ProfilePage/aeb6822331b05ad81ba4159d5882c8f22c1f944c.png" alt="puzzle" /><br />
                            <strong>1642</strong><br />Решённых вопросов
                        </div>
                        <div className={style.card} style={{ background: '#0033cc', color: '#ffffff' }}>
                            <img src="../../assets/ProfilePage/f948a2a10effbd66c81290e233e21741d3198a99.png" alt="checkmark" /><br />
                            <strong>89 : 11%</strong><br />Соотношение ответов
                        </div>
                        <div className={style.card} style={{ background: '#E08E79' }}>
                            <img src="../../assets/ProfilePage/f948a2a10effbd66c81290e233e21741d3198a99.png" alt="list" /><br />
                            <strong>124</strong><br />Пройденных тестов
                        </div>
                    </div>
                    <h3 className={style.sectionTitle}>Рейтинг пользователя</h3>
                    <div className={style.rating}>
                        <div className={style.circle}>#12</div>
                        <div>Приблизительный балл пользователя:</div>
                        <img src="/your-star.png" alt="star" /><br /><strong>235</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}