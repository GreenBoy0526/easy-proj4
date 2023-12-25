"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var proj4_1 = __importDefault(require("proj4"));
var proj4defs_1 = __importDefault(require("./proj4defs"));
var defNames = Object.keys(proj4defs_1.default);
var epsgDefs = defNames.map(function (key) { return [key, proj4defs_1.default[key]]; });
proj4_1.default.defs(epsgDefs);
exports.default = (function (coord, fromEPSG, toEPSG) {
    if (toEPSG === void 0) { toEPSG = "EPSG:4326"; }
    if (fromEPSG && toEPSG && proj4_1.default.defs(fromEPSG) && proj4_1.default.defs(toEPSG)) {
        return (0, proj4_1.default)(fromEPSG, toEPSG).forward(coord);
    }
    return undefined;
});
