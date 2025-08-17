import React from "react";
import VideoPlayer from "./VideoPlayer";

interface VideoCardProps {
  videoUrl: string;
  previewUrl: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, previewUrl, title }) => {
  return (
    <div className="video-card">
      <h3>{title}</h3>
      <VideoPlayer videoUrl={videoUrl} previewUrl={previewUrl} />
    </div>
  );
};

export default VideoCard;