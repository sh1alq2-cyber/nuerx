import React from "react";
import VideoCard from "./VideoCard";

interface ShortClipsCarouselProps {
  clips: { videoUrl: string; previewUrl: string; title: string }[];
}

const ShortClipsCarousel: React.FC<ShortClipsCarouselProps> = ({ clips }) => {
  return (
    <div className="carousel">
      {clips.map((clip, index) => (
        <VideoCard key={index} {...clip} />
      ))}
    </div>
  );
};

export default ShortClipsCarousel;