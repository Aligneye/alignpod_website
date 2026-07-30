import { useEffect, useRef, useState } from "react";
import { Camera, SwitchCamera, X } from "lucide-react";

type CameraCaptureProps = {
  onCapture: (file: File, previewUrl: string) => void;
  onClose: () => void;
};

export function CameraCapture({ onCapture, onClose }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [error, setError] = useState("");
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [canSwitchCamera, setCanSwitchCamera] = useState(false);

  useEffect(() => {
    async function startCamera() {
      try {
        setError("");
        setIsCameraReady(false);

        streamRef.current?.getTracks().forEach((track) => track.stop());

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode },
          audio: false,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          videoRef.current.onloadedmetadata = () => {
            setIsCameraReady(true);
            videoRef.current?.play().catch((err) => {
              console.warn("Video play warning:", err);
            });
          };
        }

        // Only offer the flip control when the device actually has more than one camera.
        if (navigator.mediaDevices.enumerateDevices) {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const videoInputs = devices.filter((d) => d.kind === "videoinput");
          setCanSwitchCamera(videoInputs.length > 1);
        }
      } catch (err) {
        console.error("Camera access error:", err);
        setError(
          "Camera could not start. Please close other camera apps and refresh the page."
        );
      }
    }

    startCamera();

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [facingMode]);

  const flipCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.videoWidth || !video.videoHeight) {
      setError("Camera is still loading. Please wait 2 seconds and try again.");
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;

        const file = new File([blob], "posture-capture.jpg", {
          type: "image/jpeg",
        });

        const previewUrl = URL.createObjectURL(blob);
        onCapture(file, previewUrl);

        streamRef.current?.getTracks().forEach((track) => track.stop());
        onClose();
      },
      "image/jpeg",
      0.92
    );
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-semibold text-[#111111]">
          Take posture photo
        </h3>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
          aria-label="Close camera"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-2xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[4/3] mb-5">
        {!isCameraReady && !error && (
          <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
            Starting camera...
          </div>
        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover bg-black"
        />

        {canSwitchCamera && isCameraReady && (
          <button
            onClick={flipCamera}
            aria-label="Flip camera"
            className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
          >
            <SwitchCamera className="w-5 h-5" />
          </button>
        )}
      </div>

      <button
        onClick={capturePhoto}
        disabled={!isCameraReady}
        className="w-full px-6 py-3 rounded-full bg-[#111111] text-white hover:bg-black transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Camera className="w-4 h-4" />
        Capture Photo
      </button>
    </div>
  );
}