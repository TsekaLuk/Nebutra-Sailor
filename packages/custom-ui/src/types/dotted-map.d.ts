declare module "dotted-map" {
  export interface DottedMapOptions {
    height?: number;
    width?: number;
    grid?: "diagonal" | "vertical";
  }

  export interface MapPoint {
    x: number;
    y: number;
    lat: number;
    lng: number;
  }

  export interface PinOptions {
    lat: number;
    lng: number;
    svgOptions?: {
      color?: string;
      radius?: number;
    };
  }

  export default class DottedMap {
    constructor(options?: DottedMapOptions);
    getPoints(): MapPoint[];
    addPin(options: PinOptions): void;
    getSVG(options?: { shape?: string; color?: string; radius?: number }): string;
  }
}
