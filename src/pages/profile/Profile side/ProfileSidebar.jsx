import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileSidebar.module.css';

const ProfileSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.userHeader}>
                <h1 className={styles.userName}>Рик Граймс Краш</h1>
                <div className={styles.userUniversity}>American University of Central Asia</div>
            </div>

            <div className={styles.userBio}>
                Школьник, целеустремлённый в подготовке к ОРТ. Интересуюсь математикой и критическим мышлением,
                участвую в олимпиадах и помогаю одноклассникам разбираться в сложных темах.
            </div>

            <h2 className={styles.sectionTitle}>Статистика пользователя</h2>
            <div className={styles.statsContainer}>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>1642</div>
                    <div className={styles.statLabel}>Решенных вопросов</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>124</div>
                    <div className={styles.statLabel}>Пройденных тестов</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>#12</div>
                    <div className={styles.statLabel}>Рейтинг</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statValue}>235</div>
                    <div className={styles.statLabel}>Приблизительный балл</div>
                </div>
            </div>

            <div className={styles.ratioContainer}>
                <div className={styles.statLabel}>Соотношение ответов: 89 : 11%</div>
                <div className={styles.ratioBar}>
                    <div className={styles.ratioFill}></div>
                </div>
            </div>

            <h2 className={styles.sectionTitle}>Интересующие секции</h2>
            <div className={styles.interestsContainer}>
                <span className={styles.interestTag}>Математика</span>
                <span className={styles.interestTag}>Прагматика</span>
                <span className={styles.interestTag}>Аналогия</span>
                <span className={styles.interestTag}>Биология</span>
            </div>

            <ul className={styles.navMenu}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Главная</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/feed" className={styles.navLink}>Лента</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/friends" className={styles.navLink}>Друзья</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/profile" className={styles.navLink}>Профиль</Link>
                </li>
            </ul>

            <button className={styles.editButton}>Редактировать</button>
        </aside>
    );
};

export default ProfileSidebar;