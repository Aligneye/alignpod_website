import type { PostureResult } from "../../types/posture";

type ResultCardProps = {
  result: PostureResult;
};

export function ResultCard({ result }: ResultCardProps) {
  const checks = [
    { label: "Head position", value: result.headPosition },
    { label: "Shoulder alignment", value: result.shoulderAlignment },
    { label: "Upper back posture", value: result.upperBack },
    { label: "Spine awareness", value: result.spineAwareness },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white border border-gray-200 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 text-left shadow-sm overflow-hidden">
      <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-3">
        Posture Report
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-[#111111] mb-2">
            AI posture analysis
          </h2>
          <p className="text-gray-600">{result.summary}</p>
        </div>

        <div className="w-full sm:w-auto shrink-0 flex flex-col items-center text-center">
  <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2">
    Posture Score
  </p>

  <div className="w-24 h-24 rounded-full bg-[#111111] text-white flex items-center justify-center">
    <div className="flex flex-col items-center leading-none">
      <span className="text-3xl font-bold">{result.score}</span>
      <span className="text-sm text-gray-300 mt-1">/100</span>
    </div>
  </div>

  <p className="mt-3 text-sm font-medium text-gray-600">
    {result.score >= 90
      ? "Excellent posture"
      : result.score >= 75
      ? "Overall posture is good with minor improvements recommended."
      : result.score >= 60
      ? "Fair posture. Improvements recommended."
      : "Needs improvement. Review the recommendations below."}
  </p>
</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {checks.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-[#F8F8F6] p-4 border border-gray-100"
          >
            <p className="font-medium text-[#111111]">{item.label}</p>
            <p className="text-sm text-gray-500 mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F8F8F6] p-5 border border-gray-100 mb-6">
  <p className="font-medium text-[#111111] mb-3">
    How AlignPod can help
  </p>

  <ul className="space-y-2 text-sm text-gray-600">
    <li>• Tracks your sitting posture in real time while you work or study.</li>
    <li>• Gives gentle vibration reminders when you start slouching.</li>
    <li>• Helps you build better posture habits through daily awareness.</li>
    <li>• Supports posture training without forcing uncomfortable correction.</li>
  </ul>
</div>

<a
  href="/product"
  className="inline-flex items-center justify-center w-full rounded-full bg-[#111111] text-white px-6 py-3 hover:bg-black transition"
>
  Explore AlignPod
</a>

      <p className="text-xs text-gray-500 leading-relaxed">
        {result.disclaimer}
      </p>
    </div>
  );
}