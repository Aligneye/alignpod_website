interface StepProgressBarProps {
  totalSteps: number;
  activeIndex: number;
}

export function StepProgressBar({
  totalSteps,
  activeIndex,
}: StepProgressBarProps) {
  const percent = ((activeIndex + 1) / totalSteps) * 100;

  return (
    <div className="absolute top-24 sm:top-28 left-0 right-0 px-6 lg:px-8 z-20 pointer-events-none">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className="w-full rounded-full overflow-hidden bg-[#E5E7EB]"
          style={{ height: 7 }}
          role="progressbar"
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Step ${activeIndex + 1} of ${totalSteps}`}
        >
          <div
            className="h-full rounded-full bg-[#0d8080]"
            style={{
              width: `${percent}%`,
              transition: "width 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}