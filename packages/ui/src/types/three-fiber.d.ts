/**
 * Type declarations for @react-three/fiber JSX elements
 *
 * This file extends the JSX namespace to include Three.js elements
 * used by react-three-fiber components.
 */

import type { Object3DNode } from "@react-three/fiber";
import type { Mesh, PlaneGeometry } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh>;
      planeGeometry: Object3DNode<PlaneGeometry, typeof PlaneGeometry>;
      primitive: { object: unknown; attach?: string };
    }
  }
}

export {};
