import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { UploadCard } from "../components/posture/UploadCard";
import { ImagePreviewCard } from "../components/posture/ImagePreviewCard";
import { ResultCard } from "../components/posture/ResultCard";
import { AnalysisLoader } from "../components/posture/AnalysisLoader";
import { analyzePostureImage } from "../services/gemini";
import type { PostureResult } from "../types/posture";
import { CameraCapture } from "../components/posture/CameraCapture";
import { Navbar} from "../components/Navbar";
import { Footer } from "../components/Footer";
import { trackEvent } from "../utils/analytics";

export function PostureCheck() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [result, setResult] = useState<PostureResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    return () => {
      if (imagePreview?.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    trackEvent("photo_uploaded", { source: "upload" });
    setResult(null);
    setError("");
  };

  const handleCameraCapture = (file: File, previewUrl: string) => {
    setImageFile(file);
    setImagePreview(previewUrl);
    trackEvent("photo_captured", { source: "camera" });
    setResult(null);
    setError("");
  };

  const handleAnalyze = async () => {
    if (!imageFile || isLoading) return;

    try {
      setIsLoading(true);
      setError("");
      setResult(null);
      trackEvent("analysis_started");

      const aiResult = await analyzePostureImage(imageFile);
      setResult(aiResult);
      trackEvent("analysis_completed");
    } catch (err) {
      console.error(err);
      setError("Unable to analyze this image. Please try another clear side-view image.");
      trackEvent("analysis_failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetakePhoto = () => {
    setImageFile(null);
    setImagePreview(null);
    setResult(null);
    setError("");
    setShowCamera(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F8F6] pt-32 pb-24 px-6">
        <section className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-6">
              AI Posture Check
            </span>

            <h1 className="heading-hero text-[#111111] mb-6">
              Check your posture with AI.
            </h1>

            <p className="text-body text-[#6B7280] max-w-2xl mx-auto mb-16">
              Upload a clear side-view posture image and get awareness-based posture feedback.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-white border border-[#E5E7EB] rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <AnimatePresence mode="wait">
              {!imagePreview && !showCamera && !isLoading && (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <UploadCard
                    onImageUpload={handleImageUpload}
                    onOpenCamera={() => {
                      trackEvent("camera_opened");
                      setShowCamera(true);
                    }}
                  />

                  <div className="mt-6 rounded-2xl bg-[#F8F8F6] border border-gray-100 p-5 text-left">
                    <h3 className="text-lg font-semibold text-[#111111] mb-3">
                      For best AI posture analysis
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Sit sideways to the camera, not facing front.</li>
                      <li>• Keep your head, neck, shoulder, and upper back clearly visible.</li>
                      <li>• Sit naturally as you usually work or study.</li>
                      <li>• Use good lighting and avoid blurry photos.</li>
                      <li>• Keep the camera at chest or shoulder height.</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {showCamera && !isLoading && (
                <motion.div
                  key="camera"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <CameraCapture
                    onCapture={handleCameraCapture}
                    onClose={() => setShowCamera(false)}
                  />
                </motion.div>
              )}

              {imagePreview && !isLoading && !result && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <ImagePreviewCard
                    imagePreview={imagePreview}
                    onImageUpload={handleImageUpload}
                    onAnalyze={handleAnalyze}
                    onRetakePhoto={handleRetakePhoto}
                    isLoading={isLoading}
                  />
                </motion.div>
              )}

              {isLoading && imagePreview && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <AnalysisLoader imagePreview={imagePreview} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {error && (
            <div className="max-w-2xl mx-auto mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {result && <ResultCard result={result} />}
        </section>
      </main>
      <Footer />
    </>
  );
}