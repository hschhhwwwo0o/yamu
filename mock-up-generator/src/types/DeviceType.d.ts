export type DeviceType = "phone" | "watch";

export interface DeviceLibraryItem {
  name: string;
  width: number;
  height: number;
  type: "phone" | "watch";
  frameImages: {
    default: string;
    withSystemBar?: string;
    withStrap?: string;
  };
}
