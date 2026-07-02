import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing VITE_GEMINI_API_KEY in .env file");
}

const genAI = new GoogleGenerativeAI(apiKey);

function fileToGenerativePart(file: File): Promise<{
  inlineData: { data: string; mimeType: string };
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = (reader.result as string).split(",")[1];
      resolve({
        inlineData: {
          data: base64,
          mimeType: file.type,
        },
      });
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function analyzePostureImage(file: File) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const imagePart = await fileToGenerativePart(file);

  const prompt = `
You are an AI posture awareness assistant for AlignPod.

Analyze the uploaded side-view posture image.

Give safe, non-medical posture awareness feedback.

Do not diagnose disease.
Do not claim medical treatment.
Do not mention certainty if image quality is unclear.

Return response in this exact JSON format:

{
  "score": number from 0 to 100,
  "summary": "short overall posture summary",
  "headPosition": "feedback",
  "shoulderAlignment": "feedback",
  "upperBack": "feedback",
  "spineAwareness": "feedback",
  "recommendations": ["tip 1", "tip 2", "tip 3"],
  "disclaimer": "This is posture awareness feedback, not a medical diagnosis."
}
`;

  const result = await model.generateContent([prompt, imagePart]);
  const text = result.response.text();

  const cleaned = text.replace(/```json|```/g, "").trim();

  return JSON.parse(cleaned);
}