import { useState, useEffect } from "react";
import { VIDEOS } from "@shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type VideoLevel = "مبتدئ" | "متوسط" | "متقدم";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof VIDEOS)[0] | null
  >(null);
  const [activeLevel, setActiveLevel] = useState<VideoLevel | "all">(
    "all"
  );
  const [dynamicVideos, setDynamicVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos.json')
      .then(res => res.json())
      .then(data => setDynamicVideos(data))
      .catch(err => console.error('Error fetching videos:', err));
  }, []);

  const allVideos = [
    ...VIDEOS,
    ...dynamicVideos.map((video, index) => ({
      id: VIDEOS.length + index + 1,
      title: video.title,
      description: video.description,
      duration: video.duration,
      level: video.category || 'فيديو ساخن',
      image: video.thumbnail || video.videoFile,
      videoUrl: video.videoFile
    }))
  ];

  // Filter videos by level
  const filteredVideos =
    activeLevel === "all"
      ? allVideos
      : allVideos.filter((video) => video.level === activeLevel);

  const levels: {
    label: string;
    value: VideoLevel | "all";
    icon: string;
    color: string;
  }[] = [
    {
      label: "الكل",
      value: "all",
      icon: "🎥",
      color: "from-[#9B59B6] to-[#8E44AD]",
    },
    {
      label: "مبتدئ",
      value: "مبتدئ",
      icon: "🌱",
      color: "from-[#27AE60] to-[#229954]",
    },
    {
      label: "متوسط",
      value: "متوسط",
      icon: "📈",
      color: "from-[#F39C12] to-[#E67E22]",
    },
    {
      label: "متقدم",
      value: "متقدم",
      icon: "⭐",
      color: "from-[#E74C3C] to-[#C0392B]",
    },
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
            🎥 الفيديوهات
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            تصفح مجموعة من الفيديوهات المصنفة حسب المستوى
          </p>
        </div>

        {/* Level Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {levels.map((level) => (
            <button
              key={level.value}
              onClick={() => setActiveLevel(level.value)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeLevel === level.value
                  ? `bg-gradient-to-r ${level.color} text-white shadow-lg`
                  : "bg-[#1a0a1f] text-[#B8B8B8] hover:bg-[#2d1b3d]"
              }`}>
              <span className="text-xl mr-2">{level.icon}</span>
              {level.label}
              <span className="ml-2 text-sm opacity-75">
                ({
                  level.value === "all"
                    ? allVideos.length
                    : allVideos.filter((v) => v.level === level.value).length
                })
              </span>
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-gradient-to-br from-[#1a0a1f] to-[#2d1b3d] rounded-lg overflow-hidden border border-[rgba(155,89,182,0.3)] hover:border-[#9B59B6] transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-[#0A0A0A] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9B59B6]/20 to-[#D4AF37]/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#9B59B6] to-[#D4AF37] rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300">
                      ▶
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-[#D4AF37] px-2 py-1 rounded text-sm font-bold">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#D4AF37] mb-2 group-hover:text-[#9B59B6] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-[#B8B8B8] text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block bg-gradient-to-r ${getLevelColor(
                        video.level
                      )} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {video.level}
                    </span>
                    <span className="text-[#B8B8B8] text-xs">
                      الفيديو #{video.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-[#B8B8B8] text-xl">
              لا توجد فيديوهات في هذا المستوى
            </p>
          </div>
        )}
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0A0A0A] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-[#9B59B6] hover:text-[#D4AF37] text-3xl font-bold transition-colors">
                ×
              </button>
            </div>

            {/* Video Player Placeholder */}
            <div className="px-4 pb-4 space-y-6">
              <div className="aspect-video bg-[#2d1b3d] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#9B59B6] to-[#D4AF37] rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-4">
                    ▶
                  </div>
                  <p className="text-[#B8B8B8]">مشغل الفيديو</p>
                  <p className="text-[#D4AF37] text-sm mt-2">
                    {selectedVideo.duration}
                  </p>
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
                      <span
                        className={`inline-block bg-gradient-to-r ${getLevelColor(
                          selectedVideo.level
                        )} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                        {selectedVideo.level}
                      </span>
                      <span className="inline-block bg-[#8E44AD] text-[#D4AF37] px-4 py-1 rounded-full text-sm font-bold">
                        الفيديو #{selectedVideo.id}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#B8B8B8] text-sm">المدة</p>
                    <p className="text-[#D4AF37] font-bold text-lg">
                      {selectedVideo.duration}
                    </p>
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
        </div>
      )}

      <Footer />
    </div>
  );
}
