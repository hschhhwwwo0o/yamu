export interface RenderData {
  frameWidth: number;
  frameHeight: number;
  frameImage: string;
  insertedImage: string;
  paddingsInPercents: {
    paddingTop: number;
    paddingLeft: number;
    paddingBottom: number;
    paddingRight: number;
  };
}

export type SupportedImageFormat = "png" | "svg" | "jpg";
