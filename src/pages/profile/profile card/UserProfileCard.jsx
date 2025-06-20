import React, { useState, useEffect } from 'react';
import { FaEdit, FaHeart, FaVk, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './UserProfileCard.css'
const UserProfileCard = ({
                             userName,
                             university,
                             avatarLetter = 'R',
                             interests,
                             onEditClick,
                         }) => {
    const [checkedInterests, setCheckedInterests] = useState({});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Инициализация состояний чекбоксов
        const initialChecked = {};
        interests.forEach(interest => {
            initialChecked[interest.id] = interest.checked;
        });
        setCheckedInterests(initialChecked);
    }, [interests]);

    const handleCheckboxChange = (id) => {
        setCheckedInterests(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className={`profile-element ${isMounted ? 'mounted' : ''}`}>
            <div className="profile-header">
                <div className="avatar">{avatarLetter}</div>
                <h2 className="user-name">{userName}</h2>
                <p className="user-uni">{university}</p>
            </div>

            <div className="profile-content">
                <h3 className="section-title">
                    <FaHeart />
                    Интересующие секции:
                </h3>

                <div className="interests-list">
                    {interests.map((interest) => (
                        <div key={interest.id} className="interest-item">
                            <input
                                type="checkbox"
                                id={interest.id}
                                checked={checkedInterests[interest.id] || false}
                                onChange={() => handleCheckboxChange(interest.id)}
                            />
                            <label
                                htmlFor={interest.id}
                                style={{
                                    fontWeight: checkedInterests[interest.id] ? '600' : 'normal',
                                    color: checkedInterests[interest.id] ? '#3498db' : '#2c3e50'
                                }}>
                                {interest.label}
                            </label>
                        </div>
                    ))}
                </div>

                <button className="edit-btn" onClick={onEditClick}>
                    <FaEdit />
                    Редактировать
                </button>

                <div className="social-links">
                    <a href="#" aria-label="VK"><FaVk /></a>
                    <a href="#" aria-label="Telegram"><FaTelegram /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
            </div>
        </div>
    );
}

export default UserProfileCard;
