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
}

export type SupportedImageFormat = "png" | "jpeg" | "webp";
