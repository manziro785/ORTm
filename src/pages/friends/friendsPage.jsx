import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./friendsPage.module.css";

export default function FriendsPage() {
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch("https://ort-reels.onrender.com/user/friends", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error("Ошибка при получении друзей");
        const data = await res.json();

        const formatted = data.map((f) => ({
          id: f.id,
          name: `${f.name} ${f.surname}`,
          avatar: f.avatar?.[0] || "https://i.pravatar.cc/100",
          description: f.interest?.join(", ") || "Без интересов",
          lastSeen: null,
          online: false,
        }));

        setFriends(formatted);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить список друзей.");
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className={style.skeletonLoader}>Загрузка...</div>;
  if (error) return <p className={style.error}>{error}</p>;
  if (!filteredFriends.length) {
    return (
      <div className={style.empty}>
        <img src="/emoji.png" alt="Нет друзей" /> {/* заменён emoji */}
        <p>У тебя нет друзей 😢</p>
        <button
          onClick={() => navigate("/search")}
          className={`${style.btn} ${style.primary}`}
        >
          Найти друзей
        </button>
      </div>
    );
  }

  return (
    <div className={style.page}>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Поиск"
          className={style.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredFriends.map((f) => (
        <div key={f.id} className={style.card}>
          <div className={style.avatarWrapper}>
            <img
              className={style.avatar}
              src={f.avatar}
              alt={`Аватар ${f.name}`}
            />
            {f.online && <span className={style.onlineDot} />}
          </div>
          <div className={style.info}>
            <h3 className={style.name}>{f.name}</h3>
            <p className={style.desc}>{f.description}</p>
            <p className={style.lastSeen}>
              {f.lastSeen || "Недавно был(а) в сети"}
            </p>
          </div>
          <div className={style.actions}>
            <button
              onClick={() => navigate(`/messages/${f.id}`)}
              className={`${style.btn} ${style.primary}`}
            >
              Написать
            </button>
            <button
              onClick={() => navigate(`/profile/${f.id}`)}
              className={`${style.btn} ${style.secondary}`}
            >
              Профиль
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
