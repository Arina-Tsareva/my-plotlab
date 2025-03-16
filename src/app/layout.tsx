"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal"; // Подключаем модальное окно
import "../../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Навигация */}
        <nav className="navbar sticky top-0 z-50">
          <div className="container-main py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-full 
                            flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-2xl font-bold">PlotLab</h1>
            </div>

            {/* Кнопки */}
            <div className="flex space-x-4">
              <button className="btn-secondary" onClick={() => setIsLoginOpen(true)}>
                Вход
              </button>
              <button className="btn-primary">Регистрация</button>
            </div>
          </div>
        </nav>

        {/* Основное содержимое */}
        <main className="container-main py-12">
          {children}
        </main>

        {/* Модальное окно входа */}
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </body>
    </html>
  );
}
