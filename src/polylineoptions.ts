import { MVCObject } from "./index";

export interface PolylineOptions {
  clickable?: boolean;
  draggable?: boolean;
  editable?: boolean;
  geodesic?: boolean;
  icons?: [];
  map?: google.maps.Map;
  path?: [];
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  visible?: boolean;
  zIndex?: number;
}
