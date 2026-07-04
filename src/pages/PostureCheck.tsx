import { useState } from "react";
import { UploadCard } from "../components/posture/UploadCard";
import { ImagePreviewCard } from "../components/posture/ImagePreviewCard";
import { ResultCard } from "../components/posture/ResultCard";
import { analyzePostureImage } from "../services/gemini";
import type { PostureResult } from "../types/posture";
import { CameraCapture } from "../components/posture/CameraCapture";
import { Navbar} from "../components/Navbar";
import { Footer } from "../components/Footer";

export function PostureCheck() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [result, setResult] = useState<PostureResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCamera, setShowCamera] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  const handleCameraCapture = (file: File, previewUrl: string) => {
  setImageFile(file);
  setImagePreview(previewUrl);
  setResult(null);
  setError("");
};

  const handleAnalyze = async () => {
    if (!imageFile) return;

    try {
      setIsLoading(true);
      setError("");
      setResult(null);

      const aiResult = await analyzePostureImage(imageFile);
      setResult(aiResult);
    } catch (err) {
      console.error(err);
      setError("Unable to analyze this image. Please try another clear side-view image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-[#F8F8F6] pt-28 px-6">
      <section className="max-w-5xl mx-auto text-center py-20">
        <p className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
          AI Posture Check
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold text-[#111111] mb-6">
          Check your posture with AI.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Upload a clear side-view posture image and get awareness-based posture feedback.
        </p>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm">

  {!imagePreview && !showCamera && (
    <>
      <UploadCard
  onImageUpload={handleImageUpload}
  onOpenCamera={() => setShowCamera(true)}
/>
    </>
  )}

  {showCamera && (
    <CameraCapture
      onCapture={handleCameraCapture}
      onClose={() => setShowCamera(false)}
    />
  )}

  {imagePreview && (
    <ImagePreviewCard
      imagePreview={imagePreview}
      onImageUpload={handleImageUpload}
      onAnalyze={handleAnalyze}
      isLoading={isLoading}
    />
  )}

</div>

        {error && (
          <div className="max-w-2xl mx-auto mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {result && <ResultCard result={result} />}
      </section>
    </main>
    <Footer/>
    </>
  );
}
    