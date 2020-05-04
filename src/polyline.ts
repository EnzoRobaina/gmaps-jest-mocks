import { MVCObject, LatLng } from "./index";
import { PolylineOptions } from "./polylineoptions";
import { MVCArray } from "./mvcarray";

export class Polyline extends MVCObject {
  constructor(opts?: PolylineOptions) {
    super();
  }

  getDraggable = jest.fn().mockImplementation((): boolean => true);

  getEditable = jest.fn().mockImplementation((): boolean => true);

  getMap = jest
    .fn()
    .mockImplementation((): google.maps.Map | null | undefined => null);

  getPath = jest
    .fn()
    .mockImplementation((): MVCArray<LatLng> | null => new MVCArray([]));

  getVisible = jest.fn().mockImplementation((): boolean => true);

  setDraggable = jest.fn().mockImplementation((draggable: boolean) => {});

  setEditable = jest.fn().mockImplementation((editable: boolean) => {});

  setMap = jest.fn().mockImplementation((map: google.maps.Map) => {});

  setOptions = jest.fn().mockImplementation((options: PolylineOptions) => {});

  setPath = jest.fn().mockImplementation((path: MVCArray<LatLng>) => {});

  setVisible = jest.fn().mockImplementation((visible: boolean) => {});
}
