export type DeviceType = "phone" | "watch";

export interface DeviceLibraryItem {
  name: string;
  width: number;
  height: number;
  type: "phone" | "watch";
  frameImages: {
    default: string;
    withSystemBarLightTheme?: string;
    withSystemBarDarkTheme?: string;
    withStrap?: string;
  };
  screen: {
    width: number;
    height: number;
  };
  paddingsInPercents: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  borderRadius?: number;
}
