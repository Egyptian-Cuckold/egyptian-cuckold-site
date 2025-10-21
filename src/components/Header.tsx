import { Link, useLocation } from "wouter";
import { NAV_ITEMS, APP_TITLE } from "@shared/const";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#1a0a1f] to-[#0A0A0A] border-b-2 border-[#8E44AD] shadow-lg">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Egyptian Cuckold Logo" className="h-16 w-16 object-contain" />
        </div>
        <h1 className="text-3xl font-bold text-[#9B59B6] mb-2">{APP_TITLE}</h1>
        <p className="text-[#B19CD9] text-sm">دليلك الشامل لاستكشاف تحديات الزوجة الحرة بأسلوب آمن ومدروس</p>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-[#1a0a1f] to-[#2d1b3d] border-t border-[rgba(155,89,182,0.3)]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center gap-8 py-4 flex-wrap">
            {NAV_ITEMS.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#8E44AD] text-[#D4AF37]"
                      : "text-[#E0E0E0] hover:bg-[#8E44AD] hover:text-[#D4AF37]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex justify-center py-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 rounded-full bg-[#9B59B6] text-white flex items-center justify-center text-xl hover:bg-[#8E44AD] transition-all"
            >
              ☰
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all text-center ${
                      isActive
                        ? "bg-[#8E44AD] text-[#D4AF37]"
                        : "text-[#E0E0E0] hover:bg-[#8E44AD] hover:text-[#D4AF37]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

