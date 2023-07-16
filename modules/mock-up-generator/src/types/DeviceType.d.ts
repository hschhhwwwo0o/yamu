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
  paddingsInPercents: {
    paddingTop: number;
    paddingLeft: number;
    paddingBottom: number;
    paddingRight: number;
  };
}
