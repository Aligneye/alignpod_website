import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
};

export function SEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;

      if (!element) return;

      element.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (canonicalLink) {
      canonicalLink.href = canonical;
    }
  }, [title, description, canonical]);

  return null;
}