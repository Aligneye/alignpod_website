import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { accessoriesCatalog, getAccessoryByHandle } from "../../../data/accessories";
import AccessoryDetailContent from "./AccessoryDetailContent";

export function generateStaticParams() {
  return accessoriesCatalog.map((product) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getAccessoryByHandle(handle);

  if (!product) {
    return {
      title: "Accessory Not Found | AlignPod",
    };
  }

  return {
    title: `${product.title} | AlignPod Official Accessory`,
    description: product.subtitle,
    alternates: {
      canonical: `https://www.aligneye.com/accessories/${product.handle}`,
    },
    openGraph: {
      title: `${product.title} | AlignPod Official Accessory`,
      description: product.subtitle,
      url: `https://www.aligneye.com/accessories/${product.handle}`,
      siteName: "AlignPod",
      type: "website",
      images: [
        {
          url: product.thumbnail,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | AlignPod Official Accessory`,
      description: product.subtitle,
    },
  };
}

export default async function AccessoryPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getAccessoryByHandle(handle);

  if (!product) {
    notFound();
  }

  return <AccessoryDetailContent product={product} />;
}
