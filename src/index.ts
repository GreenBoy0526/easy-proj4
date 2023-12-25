import proj4 from "proj4";
import defMap from "./proj4defs";


type defname = keyof typeof defMap;
const defNames = Object.keys(defMap) as defname[];

const epsgDefs = defNames.map((key) => [key, defMap[key]]);
proj4.defs(epsgDefs);

export default (coord: Array<number>, fromEPSG: defname, toEPSG: defname="EPSG:4326") => {
  if (fromEPSG && toEPSG && proj4.defs(fromEPSG) && proj4.defs(toEPSG)) {
    return proj4(fromEPSG, toEPSG).forward(coord);
  }
  return undefined;
};
