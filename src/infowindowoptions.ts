import { Size, LatLng } from "./index";

export interface InfoWindowOptions {
  content: string | Node;
  disableAutoPan: boolean;
  maxWidth: number;
  pixelOffset: Size;
  position: LatLng;
  zIndex: number;
}
