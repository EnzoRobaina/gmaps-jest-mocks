/* 
InfoWindow class

Methods: close, getContent, getPosition, getZIndex, open, setContent, setOptions, setPosition, setZIndex
Events: closeclick, content_changed, domready, position_changed, zindex_changed
*/

import { MVCObject } from "./index";
import { InfoWindowOptions } from "./infowindowoptions";

export class InfoWindow extends MVCObject {
  constructor(opts?: InfoWindowOptions) {
    super();
  }
}