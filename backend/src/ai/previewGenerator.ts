import fs from "fs";

export async function generatePreview(videoPath: string, previewPath: string) {
  fs.copyFileSync(videoPath, previewPath);
  return previewPath;
}