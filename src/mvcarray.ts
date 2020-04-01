import { MVCObject } from "./index";

export class MVCArray<T> extends MVCObject {
  constructor(array?: Array<T>) {
    super();
  }

  clear = jest.fn().mockImplementation();

  forEach = jest
    .fn()
    .mockImplementation((callback: (arg0: T, arg1: number) => any) => {});

  getArray = jest.fn().mockImplementation((): Array<T> | null => []);

  getAt = jest.fn().mockImplementation((i: number): T | null => null);

  getLength = jest.fn().mockImplementation((): number => 1);

  insertAt = jest.fn().mockImplementation((i: number, elem: T) => {});

  pop = jest.fn().mockImplementation((): T | null => null);

  push = jest.fn().mockImplementation((elem: T): number => 1);

  removeAt = jest.fn().mockImplementation((i: number): T | null => null);

  setAt = jest.fn().mockImplementation((i: number, elem: T) => {});
}
