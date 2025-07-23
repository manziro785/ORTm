import React from "react";
import style from "./Search.module.css";
import img from "../../../assets/scrollFeed/search.svg";

export default function Search({ value, onChange }) {
  return (
    <div className={style.search_container}>
      <input
        type="text"
        placeholder="Найдите интересующие вас коллекции задач."
        value={value}
        onChange={onChange}
      />
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
