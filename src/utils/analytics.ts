declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, parameters);

  console.log("GA Event:", eventName, parameters);
}