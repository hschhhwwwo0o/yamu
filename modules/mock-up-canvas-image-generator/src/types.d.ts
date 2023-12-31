export interface RenderData {
  frameWidth: number;
  frameHeight: number;
  frameImage: string;
  insertedImage: string;
  paddingsInPercents: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  borderRadius?: number;
  isBW?: boolean;
}

export interface Options {
  heightInaccuracy: number;
}

export type SupportedImageFormat = "png" | "jpeg" | "webp";
