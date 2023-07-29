/** Types */
import { DeviceLibraryItem } from "../../types/DeviceType.js";

/** iPhone SE */
import iPhoneSEBase64Image from "../images/iphone-se/iphone-se-frame-base64.js";
import iPhoneSEWithSystemBarLightThemeBase64Image from "../images/iphone-se/iphone-se+system-bar+light-theme-frame-base64.js";
import iPhoneSEWithSystemBarDarkThemeBase64Image from "../images/iphone-se/iphone-se+system-bar+dark-theme-frame-base64.js";

/** iPhone 12 */
import iPhone12Base64Image from "../images/iphone-12/iphone-12-frame-base64.js";
import iPhone12WithSystemBarLightThemeBase64Image from "../images/iphone-12/iphone-12+system-bar+light-theme-frame-base64.js";
import iPhone12WithSystemBarDarkThemeBase64Image from "../images/iphone-12/iphone-12+system-bar+dark-theme-frame-base64.js";

/** iPhone 13 */
import iPhone13Base64Image from "../images/iphone-13/iphone-13-frame-base64.js";
import iPhone13WithSystemBarLightThemeBase64Image from "../images/iphone-13/iphone-13+system-bar+light-theme-frame-base64.js";
import iPhone13WithSystemBarDarkThemeBase64Image from "../images/iphone-13/iphone-13+system-bar+dark-theme-frame-base64.js";

/** iPhone 14 */
import iPhone14Base64Image from "../images/iphone-14/iphone-14-frame-base64.js";
import iPhone14WithSystemBarLightThemeBase64Image from "../images/iphone-14/iphone-14+system-bar+light-theme-frame-base64.js";
import iPhone14WithSystemBarDarkThemeBase64Image from "../images/iphone-14/iphone-14+system-bar+dark-theme-frame-base64.js";

/** iWatch SE */
import iWatchSEBase64Image from "../images/iwatch-se/iwatch-se-frame-base64.js";
import iWatchSEWithStrapBase64Image from "../images/iwatch-se/iwatch-se+strap-frame-base64.js";

export const devicesLibrary: DeviceLibraryItem[] = [
  {
    name: "iPhone 12",
    type: "phone",
    frameImages: {
      default: iPhone12Base64Image,
      withSystemBarLightTheme: iPhone12WithSystemBarLightThemeBase64Image,
      withSystemBarDarkTheme: iPhone12WithSystemBarDarkThemeBase64Image,
    },
    width: 345,
    height: 689.17,
    paddingsInPercents: {
      top: 2.45,
      bottom: 2.45,
      left: 5.57,
      right: 5.54,
    },
  },
  {
    name: "iPhone 13",
    type: "phone",
    frameImages: {
      default: iPhone13Base64Image,
      withSystemBarLightTheme: iPhone13WithSystemBarLightThemeBase64Image,
      withSystemBarDarkTheme: iPhone13WithSystemBarDarkThemeBase64Image,
    },
    width: 345,
    height: 698,
    paddingsInPercents: {
      top: 2.45,
      bottom: 2.45,
      left: 5.57,
      right: 5.54,
    },
  },
  {
    name: "iPhone 14 Pro",
    type: "phone",
    frameImages: {
      default: iPhone14Base64Image,
      withSystemBarLightTheme: iPhone14WithSystemBarLightThemeBase64Image,
      withSystemBarDarkTheme: iPhone14WithSystemBarDarkThemeBase64Image,
    },
    width: 345,
    height: 703.55,
    paddingsInPercents: {
      top: 2.15,
      bottom: 2.15,
      left: 5.2,
      right: 4.9,
    },
  },
  {
    name: "iPhone SE",
    type: "phone",
    frameImages: {
      default: iPhoneSEBase64Image,
      withSystemBarLightTheme: iPhoneSEWithSystemBarLightThemeBase64Image,
      withSystemBarDarkTheme: iPhoneSEWithSystemBarDarkThemeBase64Image,
    },
    width: 345,
    height: 693.15,
    paddingsInPercents: {
      top: 2.15,
      bottom: 2.15,
      left: 5.2,
      right: 4.9,
    },
  },
  {
    name: "iWatch SE",
    type: "watch",
    frameImages: {
      default: iWatchSEBase64Image,
      withStrap: iWatchSEWithStrapBase64Image,
    },
    width: 438,
    height: 685,
    paddingsInPercents: {
      top: 23.2,
      bottom: 23.3,
      left: 16,
      right: 15.5,
    },
  },
];
