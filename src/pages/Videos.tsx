import { useState, useEffect } from "react";
import { VIDEOS } from "@shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type VideoLevel = "مبتدئ" | "متوسط" | "متقدم";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof VIDEOS)[0] | null>(null);
  const [activeLevel, setActiveLevel] = useState<VideoLevel | "all">("all");
  const [dynamicVideos, setDynamicVideos] = useState<any[]>([]);

  useEffect(() => {
    fetch('/.netlify/functions/videos')
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
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] bg-clip-text text-transparent">
            🎥 الفيديوهات
          </h1>
          <p className="text-[#B8B8B8] text-lg">
            تصفح مجموعة من الفيديوهات المصنفة حسب المستوى
          </p>
        </div>

        {/* Level Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {levels.map((level) => (
            <button
              key={level.value}
              onClick={() => setActiveLevel(level.value)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeLevel === level.value
                  ? `bg-gradient-to-r ${level.color} text-white shadow-lg scale-105`
                  : "bg-[#1a0a1f] text-[#B8B8B8] hover:bg-[#2d1b3d]"
              }`}
            >
              <span className="mr-2">{level.icon}</span>
              {level.label}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-gradient-to-br from-[#1a0a1f] to-[#2d1b3d] rounded-lg overflow-hidden border border-[rgba(155,89,182,0.3)] hover:border-[#9B59B6] transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-[#0A0A0A] overflow-hidden">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#9B59B6] rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                      ▶
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm font-bold">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-[#B8B8B8] mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block bg-gradient-to-r ${getLevelColor(
                        video.level
                      )} text-white px-3 py-1 rounded-full text-xs font-bold`}
                    >
                      {video.level}
                    </span>
                    <span className="text-xs text-[#B8B8B8]">
                      الفيديو #{video.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-[#B8B8B8]">
              لا توجد فيديوهات في هذا المستوى
            </p>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-[#B8B8B8] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Video Player Placeholder */}
              <div className="px-4 pb-4">
                <div className="relative aspect-video bg-[#1a0a1f] rounded-lg overflow-hidden mb-4">
                  {selectedVideo.videoUrl ? (
                    <video
                      controls
                      className="w-full h-full"
                      src={selectedVideo.videoUrl}
                    >
                      متصفحك لا يدعم تشغيل الفيديو
                    </video>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-[#9B59B6] rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                          ▶
                        </div>
                        <p className="text-xl font-bold">مشغل الفيديو</p>
                        <p className="text-sm text-[#B8B8B8] mt-2">
                          {selectedVideo.duration}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block bg-gradient-to-r ${getLevelColor(
                          selectedVideo.level
                        )} text-white px-4 py-1 rounded-full text-sm font-bold`}
                      >
                        {selectedVideo.level}
                      </span>
                      <span className="text-sm text-[#B8B8B8]">
                        الفيديو #{selectedVideo.id}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2">المدة</h3>
                    <p className="text-[#B8B8B8]">
                      {selectedVideo.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#B8B8B8] leading-relaxed">
                      {selectedVideo.description}
                    </p>
                  </div>

                  {/* Close Hint */}
                  <div className="text-center text-sm text-[#B8B8B8] pt-4">
                    اضغط على الخلفية أو الزر × للإغلاق
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
