import express from "express";
import { processVideo } from "../ai/videoProcessor";
import { generatePreview } from "../ai/previewGenerator";

const router = express.Router();

router.post("/upload", async (req, res) => {
  const { filePath, music } = req.body;
  const processed = await processVideo(filePath, "./data/videos", music);
  const preview = await generatePreview(processed, "./data/previews/preview.mp4");
  res.json({ processedVideo: processed, previewVideo: preview });
});

export default router;