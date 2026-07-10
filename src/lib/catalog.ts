export type ChargedItem = { name: string; price: number };

export type WatermarkEntry = {
  apply: boolean;
  pos: string;
  size: string;
};

export type Catalog = {
  id: string;
  category: "PASTEL" | "MODERN" | "MINIMAL";
  price: number;
  featured: boolean;
  minOrder: number;
  size: string;
  material: string;
  description: string;
  extraCharges: ChargedItem[];
  applyWatermark: boolean;
  watermarkPos?: string;
  watermarkSize?: string;
  instagram_url?: string;
  images: string[];
  originals: string[];
  imageWatermarks: (WatermarkEntry | null)[];
  variants?: {
    name: string;
    size: string;
    size_id: number;
    material: string;
    material_id: number;
    price: number;
  }[];
};
