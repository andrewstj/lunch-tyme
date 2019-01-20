import { CSSProperties } from "react";

const HEIGHT = "180px";
const RADIUS = 10;

export const CONTAINER_ITEM: CSSProperties = {
  width: "100%"
};

export const DETAIL_HEADER: CSSProperties = {
  ...CONTAINER_ITEM,
  backgroundColor: "#34B379",
  padding: ".75rem"
};

export const DETAIL_INFORMATION: CSSProperties = {
  ...CONTAINER_ITEM,
  backgroundColor: "#FFFFFF",
  color: "#000000",
  height: HEIGHT
};

export const MAP: CSSProperties = {
  height: HEIGHT,
  width: "100%"
};

export const MAP_POINT_STYLE: CSSProperties = {
  position: "absolute",
  width: RADIUS,
  height: RADIUS,
  left: -RADIUS / 2,
  top: -RADIUS / 2,

  border: "1px solid white",
  borderRadius: RADIUS,
  backgroundColor: "#0000b5",
  padding: 4
};
