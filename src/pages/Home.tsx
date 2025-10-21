import { Link } from "wouter";
import { APP_TITLE, SECTIONS } from "@shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-[#1a0a1f] to-[#0A0A0A]">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-6 drop-shadow-lg">
            مرحباً بك في {APP_TITLE}
          </h1>
          <p className="text-lg md:text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            موقع شامل يقدم 40 تحدياً مدروساً، قصص واقعية، معرض صور توضيحية، وفيديوهات تعليمية لاستكشاف نمط حياة الزوجة الحرة بأمان وثقة
          </p>
        </section>

        {/* Sections Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTIONS.map((section) => (
              <Link
                key={section.id}
                href={`/${section.id}`}
                className="group block h-full"
              >
                <div className="bg-gradient-to-b from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:border-[#D4AF37] cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-4xl mb-3">{section.icon}</div>
                    <h3 className="text-xl font-bold text-[#D4AF37] mb-3">
                      {section.title}
                    </h3>
                    <p className="text-[#B8B8B8] text-sm leading-relaxed flex-1">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

