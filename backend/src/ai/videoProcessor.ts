import fs from "fs";
import { addMusic, cutClips } from "./effects";

export async function processVideo(inputPath: string, outputPath: string, musicTrack: string) {
  const clips = await cutClips(inputPath, 10);
  for (const clip of clips) {
    await addMusic(clip, musicTrack);
  }
  const finalVideo = `${outputPath}/final.mp4`;
  fs.writeFileSync(finalVideo, Buffer.concat(clips.map(c => fs.readFileSync(c))));
  return finalVideo;
}