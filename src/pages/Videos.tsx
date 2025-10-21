import { useState } from "react";
import { VIDEOS } from "@shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type VideoLevel = "مبتدئ" | "متوسط" | "متقدم";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof VIDEOS)[0] | null>(null);
  const [activeLevel, setActiveLevel] = useState<VideoLevel | "all">("all");

  // Filter videos by level
  const filteredVideos =
    activeLevel === "all"
      ? VIDEOS
      : VIDEOS.filter((video) => video.level === activeLevel);

  const levels: { label: string; value: VideoLevel | "all"; icon: string; color: string }[] = [
    { label: "الكل", value: "all", icon: "🎥", color: "from-[#9B59B6] to-[#8E44AD]" },
    { label: "مبتدئ", value: "مبتدئ", icon: "🌱", color: "from-[#27AE60] to-[#229954]" },
    { label: "متوسط", value: "متوسط", icon: "📈", color: "from-[#F39C12] to-[#E67E22]" },
    { label: "متقدم", value: "متقدم", icon: "⭐", color: "from-[#E74C3C] to-[#C0392B]" },
  ];

  const getLevelColor = (level: string | VideoLevel) => {
    switch (level) {
      case "مبتدئ":
        return "from-[#27AE60] to-[#229954]";
      case "متوسط":
        return "from-[#F39C12] to-[#E67E22]";
      case "متقدم":
        return "from-[#E74C3C] to-[#C0392B]";
      default:
        return "from-[#9B59B6] to-[#8E44AD]";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-4 drop-shadow-lg">
            🎥 الفيديوهات التعليمية
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            شروحات مفصلة وتعليمية لكل مستوى من المستويات
          </p>
        </div>

        {/* Level Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {levels.map((level) => (
            <button
              key={level.value}
              onClick={() => setActiveLevel(level.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeLevel === level.value
                  ? `bg-gradient-to-r ${(level as any).color} text-white shadow-lg scale-105`
                  : "bg-[rgba(155,89,182,0.2)] text-[#D4AF37] hover:bg-[rgba(155,89,182,0.4)] border border-[rgba(155,89,182,0.3)]"
              }`}
            >
              <span>{level.icon}</span>
              <span>{level.label}</span>
              {activeLevel === level.value && (
                <span className="ml-2 text-sm">({filteredVideos.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="bg-gradient-to-b from-[#1a0a1f] to-[#2d1b3d] border border-[rgba(155,89,182,0.3)] rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-105 cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 md:h-56 bg-[#2d1b3d] overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] group-hover:bg-[rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${getLevelColor(video.level)} rounded-full flex items-center justify-center text-white text-3xl md:text-4xl group-hover:scale-110 transition-transform shadow-lg`}>
                    ▶
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 bg-[rgba(0,0,0,0.8)] text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Level Badge */}
                <div className={`inline-block bg-gradient-to-r ${getLevelColor(video.level)} text-white px-3 py-1 rounded-full text-xs font-bold mb-3`}>
                  {video.level}
                </div>

                {/* Video Number */}
                <div className="inline-block ml-2 bg-[#8E44AD] text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold mb-3">
                  الفيديو {video.id}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] mb-3 line-clamp-2">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="text-[#B8B8B8] text-sm mb-4 leading-relaxed line-clamp-2">
                  {video.description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-[rgba(155,89,182,0.3)]">
                  <span className="text-[#B19CD9] text-xs font-semibold">
                    اضغط للمشاهدة
                  </span>
                  <span className="text-[#B8B8B8] text-xs">
                    {video.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#9B59B6] text-white text-2xl hover:bg-[#8E44AD] transition-all hover:scale-110 z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Video Container */}
          <div className="flex flex-col gap-6 max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Video Player */}
            <div className="relative bg-[#1a0a1f] rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-[#2d1b3d] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#9B59B6] to-[#D4AF37] rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-4">
                    ▶
                  </div>
                  <p className="text-[#B8B8B8]">مشغل الفيديو</p>
                  <p className="text-[#D4AF37] text-sm mt-2">{selectedVideo.duration}</p>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-gradient-to-r from-[#1a0a1f] to-[#2d1b3d] rounded-lg p-6 border border-[rgba(155,89,182,0.3)]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-2">
                    {selectedVideo.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`inline-block bg-gradient-to-r ${getLevelColor(selectedVideo.level)} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                      {selectedVideo.level}
                    </span>
                    <span className="inline-block bg-[#8E44AD] text-[#D4AF37] px-4 py-1 rounded-full text-sm font-bold">
                      الفيديو {selectedVideo.id}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#B8B8B8] text-sm">المدة</p>
                  <p className="text-[#D4AF37] font-bold text-lg">{selectedVideo.duration}</p>
                </div>
              </div>

              <p className="text-[#E0E0E0] leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>

            {/* Close Hint */}
            <p className="text-center text-[#B8B8B8] text-sm">
              اضغط على الخلفية أو الزر × للإغلاق
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

