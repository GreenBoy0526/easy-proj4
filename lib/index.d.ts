import defMap from "./proj4defs";
type defname = keyof typeof defMap;
declare const _default: (coord: Array<number>, fromEPSG: defname, toEPSG?: defname) => number[] | undefined;
export default _default;
