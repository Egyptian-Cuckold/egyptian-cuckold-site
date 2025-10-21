import { useState, useMemo } from "react";
import { GALLERY_ITEMS } from "@shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type FilterCategory = "all" | "couple" | "intimate" | "aesthetic" | "dynamic";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter categories mapping
  const filterMap: Record<FilterCategory, string[]> = {
    all: [],
    couple: ["couple", "romantic"],
    intimate: ["intimate", "sensual"],
    aesthetic: ["aesthetic", "artistic"],
    dynamic: ["dynamic", "action"],
  };

  // Filter images based on active filter
  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    
    const filterKeywords = filterMap[activeFilter];
    return GALLERY_ITEMS.filter((item) =>
      filterKeywords.some((keyword) =>
        item.description.toLowerCase().includes(keyword) ||
        item.title.toLowerCase().includes(keyword)
      )
    );
  }, [activeFilter]);

  const filters: { label: string; value: FilterCategory; icon: string }[] = [
    { label: "الكل", value: "all", icon: "🖼️" },
    { label: "الأزواج", value: "couple", icon: "👫" },
    { label: "الحميمية", value: "intimate", icon: "💕" },
    { label: "فني", value: "aesthetic", icon: "✨" },
    { label: "ديناميكي", value: "dynamic", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-4 drop-shadow-lg">
            🖼️ معرض الصور التوضيحية
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            استكشف مجموعة متنوعة من الصور التوضيحية الاحترافية
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] text-white shadow-lg scale-105"
                  : "bg-[rgba(155,89,182,0.2)] text-[#D4AF37] hover:bg-[rgba(155,89,182,0.4)] border border-[rgba(155,89,182,0.3)]"
              }`}
            >
              <span>{filter.icon}</span>
              <span>{filter.label}</span>
              {activeFilter === filter.value && (
                <span className="ml-2 text-sm">({filteredImages.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* Image Count */}
        <div className="text-center mb-8">
          <p className="text-[#B8B8B8]">
            عرض {filteredImages.length} من {GALLERY_ITEMS.length} صورة
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(item.image)}
                className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border-2 border-[rgba(155,89,182,0.3)] cursor-pointer group hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#E0E0E0] text-xs md:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* ID Badge */}
                <div className="absolute top-3 right-3 bg-[rgba(212,175,55,0.9)] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #{item.id}
                </div>

                {/* Play Icon on Hover */}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
                    <div className="w-16 h-16 bg-[rgba(212,175,55,0.9)] rounded-full flex items-center justify-center text-white text-2xl">
                      🔍
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#B8B8B8] text-lg">
              لا توجد صور تطابق المرشح المختار
            </p>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#9B59B6] text-white text-2xl hover:bg-[#8E44AD] transition-all hover:scale-110 z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Image Container */}
          <div className="flex flex-col items-center gap-4 max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Info */}
            <div className="text-center text-[#E0E0E0] text-sm">
              <p>اضغط على الخلفية أو الزر × للإغلاق</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

