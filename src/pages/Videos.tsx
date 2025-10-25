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
