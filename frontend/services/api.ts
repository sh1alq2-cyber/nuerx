export async function fetchVideos() {
  const res = await fetch("http://localhost:5000/api/videos");
  const data = await res.json();
  return data.map((v: any) => ({
    videoUrl: v.processedVideo,
    previewUrl: v.previewVideo,
    title: v.title,
  }));
}