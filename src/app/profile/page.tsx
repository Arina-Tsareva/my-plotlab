"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/profile.css";

export default function ProfilePage() {
  const [works, setWorks] = useState([
    { id: 1, title: "Моя первая книга", description: "Описание книги..." },
    { id: 2, title: "Фантастический рассказ", description: "Описание рассказа..." },
  ]);

  const addWork = () => {
    const newWork = {
      id: works.length + 1,
      title: `Новая работа ${works.length + 1}`,
      description: "Новое описание...",
    };
    setWorks([...works, newWork]);
  };

  return (
    <div className="profile-container">
      {/* Шапка профиля */}
      <header className="profile-header">
        <div className="about-me">
          <h1>Имя пользователя</h1>
          <p>Здесь краткая информация о пользователе. Что он пишет, чем увлекается.</p>
        </div>
        <div className="avatar">
          <Image src="/images/default-avatar.png" alt="Avatar" width={100} height={100} />
        </div>
      </header>

      {/* Стена работ */}
      <section className="works-wall">
        <h2>Мои работы</h2>
        <div className="works-grid">
          {works.map((work) => (
            <div key={work.id} className="work-card">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
        <button className="add-work-btn" onClick={addWork}>Добавить работу</button>
      </section>
    </div>
  );
}
