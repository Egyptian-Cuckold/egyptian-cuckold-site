import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Stories() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#9B59B6] text-center mb-12 drop-shadow-lg">
          📖 القصص الواقعية
        </h1>

        <div className="bg-gradient-to-b from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-2xl p-8 mb-12">
          <p className="text-[#E0E0E0] text-lg leading-relaxed mb-6">
            تجارب حقيقية وقصص واقعية من أزواج خاضوا تجربة نمط حياة الزوجة الحرة بنجاح. تعرف على رحلتهم، التحديات التي واجهوها، والدروس التي تعلموها.
          </p>
        </div>

        <div className="grid gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">📝</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">
                    قصة {i}: تجربة الثقة والتواصل
                  </h3>
                  <p className="text-[#B8B8B8] mb-4">
                    قصة حقيقية عن كيفية بناء الثقة والتواصل الفعال بين الزوجين. تعرف على كيف بدأت الرحلة، الخطوات التي اتخذوها، والنتائج الإيجابية التي حققوها.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-[#8E44AD] text-[#D4AF37] px-3 py-1 rounded-full">
                      مستوى: متوسط
                    </span>
                    <span className="bg-[#8E44AD] text-[#D4AF37] px-3 py-1 rounded-full">
                      المدة: 8 دقائق قراءة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[rgba(155,89,182,0.1)] to-[rgba(212,175,55,0.1)] border border-[rgba(155,89,182,0.3)] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
            📌 شارك قصتك
          </h3>
          <p className="text-[#E0E0E0] mb-6">
            هل لديك قصة تود مشاركتها مع المجتمع؟ نحن نرحب بتجاربك وآرائك القيمة.
          </p>
          <button className="bg-[#9B59B6] hover:bg-[#8E44AD] text-white px-8 py-3 rounded-lg transition-all duration-300 font-bold">
            اتصل بنا
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

