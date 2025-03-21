"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/register.css";

export default function RegisterPage() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("weak");

  useEffect(() => {
    setTimeout(() => setShowContent(true), 2000);
  }, []);

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  return (
    <div className="register-container">
      {!showContent && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/images/pen-animation.gif" alt="Writing Pen" width={80} height={80} />
          <span className="logo-text">PlotLab</span>
        </motion.div>
      )}
      {showContent && (
        <>
          <Image src="/images/logo.svg" alt="PlotLab Logo" width={100} height={100} />
          <h1 className="register-title">Добро пожаловать!</h1>
          <p className="register-description">
            Вас ждет мир творчества, вдохновения и новых знакомств. Здесь вы сможете писать истории, находить единомышленников и делиться своими идеями с миром!
          </p>
          <form className="register-form">
            <label>Загрузите фото профиля</label>
            <input type="file" className="file-input" />
            
            <label>Псевдоним</label>
            <input type="text" placeholder="Введите ваш псевдоним" required />
            
            <label>Дата рождения</label>
            <input type="date" required />
            
            <label>О себе и о творчестве</label>
            <textarea placeholder="Расскажите о себе" rows={4} required />
            
            <label>Логин (почта)</label>
            <input type="email" placeholder="Введите почту" required />
            
            <label>Пароль</label>
            <input type="password" placeholder="Введите пароль" onChange={handlePasswordChange} required />
            <div className={`password-strength ${passwordStrength}`}></div>
            <p className="password-hint">Пароль должен быть не менее 12 символов</p>
            
            <button type="submit" className="btn-register" onClick={() => router.push("/profile")}>
              Зарегистрироваться
            </button>
          </form>
        </>
      )}
    </div>
  );
}
