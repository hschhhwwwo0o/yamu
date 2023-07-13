/** Types */
import { DeviceLibraryItem } from "../../types/DeviceType.js";

/** iPhone 13 */
import iPhone13Base64Image from "../images/iphone-13/iphone-13-frame-base64.js";
import iPhone13WithSystemBarBase64Image from "../images/iphone-13/iphone-13+system-bar-frame-base64.js";

/** iPhone 14 */
import iPhone14Base64Image from "../images/iphone-14/iphone-14-frame-base64.js";
import iPhone14WithSystemBarBase64Image from "../images/iphone-14/iphone-14+system-bar-frame-base64.js";

/** iWatch SE */
import iWatchSEBase64Image from "../images/iwatch-se/iwatch-se-frame-base64.js";
import iWatchSEWithStrapBase64Image from "../images/iwatch-se/iwatch-se+strap-frame-base64.js";

export const devicesLibrary: DeviceLibraryItem[] = [
  {
    name: "iPhone 13",
    type: "phone",
    frameImages: {
      default: iPhone13Base64Image,
      withSystemBar: iPhone13WithSystemBarBase64Image,
    },
    width: 345,
    height: 698,
    paddingsInPercents: {
      paddingTop: 4.95,
      paddingBottom: 4.95,
      paddingLeft: 5.57,
      paddingRight: 5.57,
    },
  },
  {
    name: "iPhone 14 Pro",
    type: "phone",
    frameImages: {
      default: iPhone14Base64Image,
      withSystemBar: iPhone14WithSystemBarBase64Image,
    },
    width: 345,
    height: 703.55,
    paddingsInPercents: {
      paddingTop: 4.4,
      paddingBottom: 4.4,
      paddingLeft: 5.2,
      paddingRight: 5,
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
      paddingTop: 36,
      paddingBottom: 36,
      paddingLeft: 16,
      paddingRight: 15.5,
    },
  },
];
