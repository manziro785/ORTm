import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <h2>Информация о пользователе</h2>
                <div className={styles.profileBio}>
                    Школьник, целеустремлённый в подготовке к ОРТ. Интересуюсь математикой и критическим мышлением,
                    участвую в олимпиадах и помогаю одноклассникам разбираться в сложных темах.
                </div>
            </div>

            <div className={styles.statsSection}>
                <h2>Статистика пользователя</h2>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statLabel}>Решенных вопросов</div>
                        <div className={styles.statValue}>1642</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statLabel}>Соотношение ответов</div>
                        <div className={styles.ratioContainer}>
                            <div className={styles.ratioValue}>89 : 11%</div>
                            <div className={styles.ratioBar}>
                                <div className={styles.ratioFill}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statLabel}>Пройденных тестов</div>
                        <div className={styles.statValue}>124</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statLabel}>Рейтинг пользователя:</div>
                        <div className={styles.statHighlight}>#12</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statLabel}>Приблизительный балл пользователя:</div>
                        <div className={styles.statHighlight}>235</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;