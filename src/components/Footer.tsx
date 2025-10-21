import { APP_TITLE } from "@shared/const";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#1a0a1f] to-[#0A0A0A] border-t-2 border-[#8E44AD] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#9B59B6] bg-clip-text text-transparent mb-4">
          {APP_TITLE}
        </div>
        <p className="text-[#B8B8B8] mb-6 max-w-2xl mx-auto">
          دليلك الشامل لاستكشاف تحديات وأنماط العلاقات الحميمة
        </p>
        <div className="pt-6 border-t border-[rgba(155,89,182,0.3)]">
          <p className="text-[#B8B8B8] text-sm">
            © 2025 {APP_TITLE}. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}

