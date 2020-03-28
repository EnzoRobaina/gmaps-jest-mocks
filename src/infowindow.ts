/* 
InfoWindow class

Methods: close, getContent, getPosition, getZIndex, open, setContent, setOptions, setPosition, setZIndex
Events: closeclick, content_changed, domready, position_changed, zindex_changed
*/

import { MVCObject, LatLng } from "./index";
import { InfoWindowOptions } from "./infowindowoptions";

export class InfoWindow extends MVCObject {
  constructor(opts?: InfoWindowOptions) {
    super();
  }

  close = jest.fn().mockImplementation((): void => {});

  getContent = jest.fn().mockImplementation((): string | Node => "");

  getPosition = jest
    .fn()
    .mockImplementation(
      (): google.maps.LatLng | null | undefined =>
        new LatLng({ lat: 0, lng: 0 })
    );

  getZIndex = jest.fn().mockImplementation((): number => 1);

  open = jest
    .fn()
    .mockImplementation(
      (
        map?: google.maps.Map | google.maps.StreetViewPanorama | null,
        anchor?: MVCObject | null
      ): void => {}
    );

  setContent = jest
    .fn()
    .mockImplementation((content: string | Node | null): void => {});

  setOptions = jest
    .fn()
    .mockImplementation((options: InfoWindowOptions | null): void => {});

  setPosition = jest
    .fn()
    .mockImplementation(
      (
        latlng: google.maps.LatLng | google.maps.ReadonlyLatLngLiteral | null
      ): void => {}
    );

  setZIndex = jest.fn().mockImplementation((zIndex: number | null): void => {});
}
