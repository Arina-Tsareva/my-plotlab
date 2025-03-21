"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPenNib, FaComments, FaCoins } from "react-icons/fa";
import LoginModal from "@/components/LoginModal";
import "../styles/globals.css";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Скрываем шапку на странице регистрации и профайла
  const showNavbar = pathname !== "/register";

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Шапка  */}
      {showNavbar && (
        <nav className="navbar container">
          <div className="navbar-logo">
            <Image
              src="/images/logo.svg"
              alt="PlotLab Logo"
              width={50}
              height={50}
            />
            <span>PlotLab</span>
          </div>
          <div className="space-x-4">
            <button
              className="btn btn-secondary"
              onClick={() => setIsLoginOpen(true)}
            >
              Вход
            </button>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/register")}
            >
              Регистрация
            </button>
          </div>
        </nav>
      )}

      {/* Основной контент */}
      <main className="container flex flex-col items-center text-center py-20 space-y-16">
        <section>
          <h1>Совместное творчество без границ</h1>
          <p className="text-lg text-text-light max-w-2xl mt-4">
            Пишите книги, создавайте сценарии и разрабатывайте идеи вместе с
            творческим сообществом. Ваши проекты могут стать следующим
            бестселлером!
          </p>
        </section>

        {/* Карточки с возможностями */}
        <div className="grid md:grid-cols-3 gap-16">
          <FeatureCard
            icon={<FaPenNib size={50} className="text-peach" />}
            title="Совместный редактор"
            description="Редактируйте в реальном времени с авторами со всего мира"
            delay={0}
          />
          <FeatureCard
            icon={<FaComments size={50} className="text-peach" />}
            title="Система обсуждений"
            description="Комментируйте идеи и предлагайте улучшения"
            delay={0.2}
          />
          <FeatureCard
            icon={<FaCoins size={50} className="text-peach" />}
            title="Монетизация"
            description="Получайте доход от успешных проектов"
            delay={0.4}
          />
        </div>

        {/* CTA Блок */}
        <section className="cta-section">
          <h2>Готовы начать свой проект?</h2>
          <p className="opacity-80 mt-4">
            Присоединяйтесь к сообществу авторов по всему миру
          </p>
          <button className="btn btn-primary text-lg">Создать проект</button>
        </section>
      </main>

      {/* Модальное окно входа */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

// Компонент карточки с анимацией
function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="feature-card w-80"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-coffee mb-2">{title}</h3>
      <p className="text-text-light">{description}</p>
    </motion.div>
  );
}
