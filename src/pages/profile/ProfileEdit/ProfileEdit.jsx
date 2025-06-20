import React, { useState } from 'react';
import './EditProfile.css';
import Sidebar from "../../../components/common/sideBar/sideBar.jsx";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [active, setActive] = useState('');
    const [lastName, setLastName] = useState('');
    const [interests, setInterests] = useState(['Аналогия', 'Прматика', 'Математика']);
    const [newInterest, setNewInterest] = useState('');
    const navigate = useNavigate();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && ['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
            setProfilePic(URL.createObjectURL(file));
        } else {
            alert('Пожалуйста, выберите файл с расширением .png, .jpg или .webp');
        }
    };

    const addInterest = () => {
        if (newInterest && !interests.includes(newInterest)) {
            setInterests([...interests, newInterest]);
            setNewInterest('');
        }
    };

    const removeInterest = (interest) => {
        setInterests(interests.filter((i) => i !== interest));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/profile');
        console.log('Form submitted:', { active, lastName, interests });
    };

    return (
        <div className="edit-profile-container">
            {/*<Sidebar />*/}
            <div className="edit-profile-content">
                <ProfilePictureUpload
                    profilePic={profilePic}
                    handleFileUpload={handleFileUpload}
                />
                <UserInfoForm
                    active={active}
                    setActive={setActive}
                    lastName={lastName}
                    setLastName={setLastName}
                    interests={interests}
                    removeInterest={removeInterest}
                    newInterest={newInterest}
                    setNewInterest={setNewInterest}
                    addInterest={addInterest}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};


const ProfilePictureUpload = ({ profilePic, handleFileUpload }) => {
    return (
        <div className="profile-picture-section">
            <h2>ЗАГРУЗИТЬ НОВУЮ ФОТОГРАФИЮ ПРОФИЛЯ</h2>
            <p>Только файлы с расширением .png, .jpg, .webp</p>
            <input
                type="file"
                accept=".png,.jpg,.jpeg,.webp"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="upload-input"
            />
            <label htmlFor="upload-input" className="upload-button">
                ЗАГРУЗИТЬ
            </label>
            <div className="profile-picture">
                {profilePic ? (
                    <img src={profilePic} alt="Profile" />
                ) : (
                    <div className="placeholder">No Image</div>
                )}
            </div>
            <div className="description">
                КЛЮЧНИК, ЧЕЛУСТРЕМЯНЫЙ, УЧАСТОК ПОЛУЧКИ К ОТ, ИНТЕРЕСУЮТ МАТЕМАТИКОЙ И КРИПТОГРАФИЧЕСКИЙ МЕТОДЫ, УЧАСТОК В ПОЛЕВОЙ АЛГОРИТМЫ СЛОЖНЫХ ТЕМАХ
            </div>
        </div>
    );
};

const UserInfoForm = ({
                          active,
                          setActive,
                          lastName,
                          setLastName,
                          interests,
                          removeInterest,
                          newInterest,
                          setNewInterest,
                          addInterest,
                          handleSubmit,
                      }) => {
    return (
        <div className="user-info-form">
            <h2>ИЗМЕНИТЬ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЕ</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="active">Имя</label>
                    <input
                        type="text"
                        id="active"
                        value={active}
                        onChange={(e) => setActive(e.target.value)}
                        placeholder="Имя"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Фамилия</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Фамилия"
                    />
                </div>
                <div className="form-group">
                    <label>Интересы</label>
                    <div className="interests">
                        {interests.map((interest, index) => (
                            <div key={index} className="interest-tag">
                                {interest}
                                <span onClick={() => removeInterest(interest)}>X</span>
                            </div>
                        ))}
                    </div>
                    <div className="add-interest">
                        <input
                            type="text"
                            value={newInterest}
                            onChange={(e) => setNewInterest(e.target.value)}
                            placeholder="Новый интерес"
                        />
                        <button type="button" onClick={addInterest}>
                            Добавить
                        </button>
                    </div>
                </div>
                <button        type="button"  // Prevents form submission if inside a form
                               className="save-button"
                               onClick={handleSubmit}>
                    СОХРАНИТЬ ИНФОРМАЦИЮ
                </button>
            </form>
        </div>
    );
};

export default EditProfile;