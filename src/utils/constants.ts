import { type ElementType } from '../types'

export const ROTATABLE_ELEMENTS: ElementType[] = ['road-connector']
export const GRID_SIZE = 60

export const TOOL_ITEM_TYPES = {
  // Road Elements
  ROAD_HORIZONTAL: 'road-horizontal',
  ROAD_VERTICAL: 'road-vertical',
  ROAD_CONNECTOR: 'road-connector',
  ROAD_INTERSECTION: 'road-intersection',
  ROAD_T_JUNCTION: 'road-t-junction',
  ROAD_CURVE_TL: 'road-curve-tl',
  ROAD_CURVE_TR: 'road-curve-tr',
  ROAD_CURVE_BL: 'road-curve-bl',
  ROAD_CURVE_BR: 'road-curve-br',

  // Parking Spaces
  PARKING_HORIZONTAL: 'parking-horizontal',
  PARKING_VERTICAL: 'parking-vertical',
  PARKING_DIAGONAL: 'parking-diagonal',
  HANDICAP_PARKING_HORIZONTAL: 'handicap-parking-horizontal',
  HANDICAP_PARKING_VERTICAL: 'handicap-parking-vertical',
  VIP_PARKING: 'vip-parking',
  EV_CHARGING_STATION: 'ev-charging-station',

  // Buildings & Structures
  BUILDING: 'building',
  ENTRANCE: 'entrance',
  EXIT: 'exit',
  GATE: 'gate',
  SECURITY_BOOTH: 'security-booth',
  TICKET_BOOTH: 'ticket-booth',
  OFFICE: 'office',
  RESTROOM: 'restroom',

  // Safety & Security
  CCTV_CAMERA: 'cctv-camera',
  FIRE_EXTINGUISHER: 'fire-extinguisher',
  EMERGENCY_EXIT: 'emergency-exit',
  FIRST_AID: 'first-aid',
  SECURITY_LIGHT: 'security-light',
  CALL_BOX: 'call-box',

  // Utilities & Equipment
  DUMPSTER: 'dumpster',
  RECYCLING_BIN: 'recycling-bin',
  WATER_HYDRANT: 'water-hydrant',
  UTILITY_POLE: 'utility-pole',
  TRANSFORMER: 'transformer',
  GENERATOR: 'generator',

  // Landscaping
  TREE: 'tree',
  SHRUB: 'shrub',
  FLOWER_BED: 'flower-bed',
  GRASS_AREA: 'grass-area',
  SIDEWALK: 'sidewalk',
  GARDEN: 'garden',

  // Signage
  STOP_SIGN: 'stop-sign',
  SPEED_LIMIT_SIGN: 'speed-limit-sign',
  DIRECTIONAL_SIGN: 'directional-sign',
  PARKING_SIGN: 'parking-sign',
  NO_PARKING_SIGN: 'no-parking-sign',
  WARNING_SIGN: 'warning-sign',

  // Barriers & Boundaries
  FENCE: 'fence',
  WALL: 'wall',
  BARRIER: 'barrier',
  BOLLARD: 'bollard',
  CHAIN_LINK: 'chain-link',

  // Lighting
  STREET_LIGHT: 'street-light',
  FLOOD_LIGHT: 'flood-light',
  PATHWAY_LIGHT: 'pathway-light',

  // Special Areas
  LOADING_ZONE: 'loading-zone',
  DRIVE_THRU: 'drive-thru',
  PEDESTRIAN_CROSSING: 'pedestrian-crossing',
  BIKE_RACK: 'bike-rack',
  BUS_STOP: 'bus-stop',
}
