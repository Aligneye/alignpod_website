import { Upload, Camera } from "lucide-react";

type UploadCardProps = {
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOpenCamera: () => void;
};

export function UploadCard({ onImageUpload, onOpenCamera }: UploadCardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="group flex flex-col items-center justify-center rounded-[28px] border border-gray-200 bg-[#F8F8F6] p-8 cursor-pointer hover:bg-white hover:shadow-md transition">
          <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition">
            <Upload className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-semibold text-[#111111] mb-2">
            Upload Image
          </h3>

          <p className="text-sm text-gray-500 text-center">
            Choose a side-view posture photo from your device.
          </p>

          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={onImageUpload}
            className="hidden"
          />
        </label>

        <button
          type="button"
          onClick={onOpenCamera}
          className="group flex flex-col items-center justify-center rounded-[28px] border border-gray-200 bg-[#F8F8F6] p-8 hover:bg-white hover:shadow-md transition"
        >
          <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition">
            <Camera className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-semibold text-[#111111] mb-2">
            Take Photo
          </h3>

          <p className="text-sm text-gray-500 text-center">
            Capture a posture photo using your camera.
          </p>
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        For best results, use a clear side-view image with your upper body visible.
      </p>
    </div>
  );
}