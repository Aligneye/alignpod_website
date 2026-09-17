import collarImg from "../assets/magnetic-collar.jpg";

export interface AccessoryVariant {
  id: string;
  title: string;
  colorHex?: string;
  sku: string;
  inStock: boolean;
}

export interface AccessoryDetailProduct {
  id: string;
  title: string;
  handle: string;
  subtitle: string;
  price: number;
  currency: string;
  badge?: string;
  inStock: boolean;
  images: string[];
  thumbnail: string;
  compatibility: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  variants: AccessoryVariant[];
}

export const accessoriesCatalog: AccessoryDetailProduct[] = [
  {
    id: "prod_magnetic_collar",
    title: "Magnetic Collar",
    handle: "magnetic-collar",
    subtitle: "Ergonomic silicone neck mount with dual N52 neodymium locking magnets.",
    price: 1499,
    currency: "₹",
    badge: "Official Accessory",
    inStock: true,
    thumbnail: collarImg,
    images: [collarImg],
    compatibility: "Compatible with AlignPod v1 & v2 Sensor Units",
    description:
      "Crafted for uninterrupted, all-day posture training. The AlignPod Magnetic Collar provides a secure, weightless neck mount using ultra-strong neodymium alignment magnets encased in soft-touch, hypoallergenic medical-grade silicone.",
    features: [
      "Snap-to-align dual N52 neodymium magnetic locking mechanism",
      "Featherlight 18g contoured collar with balanced weight distribution",
      "Sweat-resistant, skin-safe biocompatible silicone coating",
      "Zero-interference vibration pass-through for posture alerts",
      "Discreet low profile that wears naturally under shirts or collars",
    ],
    specs: [
      { label: "Compatibility", value: "AlignPod v1 & v2 Sensor Units" },
      { label: "Weight", value: "18 grams" },
      { label: "Materials", value: "Medical-Grade Silicone + Anodized Aluminum" },
      { label: "Water Resistance", value: "IPX4 Sweat & Splash Resistant" },
      { label: "Magnet Type", value: "Dual N52 Neodymium Magnetic Clasp" },
      { label: "Warranty", value: "1 Year Official Warranty" },
    ],
    variants: [
      { id: "var_black", title: "Matte Black", colorHex: "#1C1C1E", sku: "ALP-ACC-COL-BLK", inStock: true },
      { id: "var_grey", title: "Space Grey", colorHex: "#71717A", sku: "ALP-ACC-COL-GRY", inStock: true },
    ],
  },
];

export function getAccessoryByHandle(handle: string): AccessoryDetailProduct | undefined {
  return accessoriesCatalog.find((item) => item.handle === handle);
}
