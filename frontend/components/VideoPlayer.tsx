import React, { useState } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  previewUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, previewUrl }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-player">
      <video
        src={playing ? videoUrl : previewUrl}
        controls
        autoPlay={playing}
        onClick={() => setPlaying(!playing)}
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play Full Video"}
      </button>
    </div>
  );
};

export default VideoPlayer;