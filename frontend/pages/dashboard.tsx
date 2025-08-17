import React, { useEffect, useState } from "react";
import ShortClipsCarousel from "../components/ShortClipsCarousel";
import { fetchVideos } from "../services/api";

const Dashboard: React.FC = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const data = await fetchVideos();
      setVideos(data);
    }
    loadVideos();
  }, []);

  return (
    <div>
      <h1>My Videos</h1>
      <ShortClipsCarousel clips={videos} />
    </div>
  );
};

export default Dashboard;