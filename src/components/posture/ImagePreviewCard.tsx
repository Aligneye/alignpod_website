import { Image as ImageIcon } from "lucide-react";

type ImagePreviewCardProps = {
  imagePreview: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAnalyze: () => void;
  onRetakePhoto: () => void;
  isLoading: boolean;
};

export function ImagePreviewCard({
  imagePreview,
  onImageUpload,
  onAnalyze,
  onRetakePhoto,
  isLoading,
}: ImagePreviewCardProps) {
  return (
    <div>
      <div className="rounded-[24px] overflow-hidden border border-gray-200 bg-gray-50 mb-6">
        <img
          src={imagePreview}
          alt="Uploaded posture preview"
          className="w-full max-h-[520px] object-contain"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
         onClick={onRetakePhoto}
         className="px-6 py-3 rounded-full border border-gray-300 text-[#111111] hover:bg-gray-100 transition"
         >
           Retake Photo
         </button>

        <button
          onClick={onAnalyze}
          disabled={isLoading}
          className="px-6 py-3 rounded-full bg-[#111111] text-white hover:bg-black transition flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <ImageIcon className="w-4 h-4" />
          {isLoading ? "Analyzing..." : "Analyze Posture"}
        </button>
      </div>
    </div>
  );
}