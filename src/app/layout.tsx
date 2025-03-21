"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();

  // Не показываем шапку на странице регистрации и профайла
  const showNavbar = pathname !== "/register" && pathname !== "/profile";

  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Навигация (скрываем на странице регистрации) */}
        {showNavbar && (
          <nav className="navbar sticky top-0 z-50">
            <div className="container-main py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 bg-[var(--secondary-color)] rounded-full 
                              flex items-center justify-center"
                >
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h1 className="text-2xl font-bold">PlotLab</h1>
              </div>

              {/* Кнопки */}
              <div className="flex space-x-4">
                <button
                  className="btn-secondary"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Вход
                </button>
                <Link href="/register" className="btn btn-primary">
                  Регистрация
                </Link>
              </div>
            </div>
          </nav>
        )}

        {/* Основное содержимое */}
        <main className="container-main py-12">{children}</main>

        {/* Модальное окно входа */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
      </body>
    </html>
  );
}
