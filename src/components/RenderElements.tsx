import CarImage from '../assets/car.png'
import { type ElementType, type LayoutElement } from '../types'
import { TOOL_ITEM_TYPES } from '../utils/constants'

interface RenderElementsProps {
  item: LayoutElement
  isSelected: boolean
}

const baseStyle =
  'w-full h-full flex items-center justify-center text-xs font-bold relative overflow-hidden'

const RenderElements = ({ item, isSelected }: RenderElementsProps) => {
  const isParking = item.type.includes('parking')
  const isOccupied = isParking && item.spotInfo?.occupied

  switch (item.type as ElementType) {
    // Roads
    case TOOL_ITEM_TYPES.ROAD_HORIZONTAL:
      return <RoadHorizontal />
    case TOOL_ITEM_TYPES.ROAD_VERTICAL:
      return <RoadVertical />
    case TOOL_ITEM_TYPES.ROAD_CONNECTOR:
      return <RoadConnector />
    case TOOL_ITEM_TYPES.ROAD_INTERSECTION:
      return <RoadIntersection />
    case TOOL_ITEM_TYPES.ROAD_T_JUNCTION:
      return <RoadTJunction />
    case TOOL_ITEM_TYPES.ROAD_CURVE_TL:
      return <RoadCurve direction="top-left" />
    case TOOL_ITEM_TYPES.ROAD_CURVE_TR:
      return <RoadCurve direction="top-right" />
    case TOOL_ITEM_TYPES.ROAD_CURVE_BL:
      return <RoadCurve direction="bottom-left" />
    case TOOL_ITEM_TYPES.ROAD_CURVE_BR:
      return <RoadCurve direction="bottom-right" />

    // Parking
    case TOOL_ITEM_TYPES.PARKING_HORIZONTAL:
      return <ParkingHorizontal item={item} isOccupied={isOccupied} />
    case TOOL_ITEM_TYPES.PARKING_VERTICAL:
      return <ParkingVertical item={item} isOccupied={isOccupied} />
    case TOOL_ITEM_TYPES.PARKING_DIAGONAL:
      return <ParkingDiagonal item={item} isOccupied={isOccupied} />
    case TOOL_ITEM_TYPES.HANDICAP_PARKING_HORIZONTAL:
      return <HandicapParking item={item} isOccupied={isOccupied} orientation="horizontal" />
    case TOOL_ITEM_TYPES.HANDICAP_PARKING_VERTICAL:
      return <HandicapParking item={item} isOccupied={isOccupied} orientation="vertical" />
    case TOOL_ITEM_TYPES.VIP_PARKING:
      return <VipParking item={item} isOccupied={isOccupied} />
    case TOOL_ITEM_TYPES.EV_CHARGING_STATION:
      return <EVChargingStation item={item} isOccupied={isOccupied} />

    // Buildings & Structures
    case TOOL_ITEM_TYPES.BUILDING:
      return <Building item={item} />
    case TOOL_ITEM_TYPES.ENTRANCE:
      return <Entrance item={item} />
    case TOOL_ITEM_TYPES.EXIT:
      return <Exit item={item} />
    case TOOL_ITEM_TYPES.GATE:
      return <Gate item={item} />
    case TOOL_ITEM_TYPES.SECURITY_BOOTH:
      return <SecurityBooth item={item} />
    case TOOL_ITEM_TYPES.TICKET_BOOTH:
      return <TicketBooth item={item} />
    case TOOL_ITEM_TYPES.OFFICE:
      return <Office item={item} />
    case TOOL_ITEM_TYPES.RESTROOM:
      return <Restroom item={item} />

    // Safety & Security
    case TOOL_ITEM_TYPES.CCTV_CAMERA:
      return <CCTVCamera item={item} />
    case TOOL_ITEM_TYPES.FIRE_EXTINGUISHER:
      return <FireExtinguisher item={item} />
    case TOOL_ITEM_TYPES.EMERGENCY_EXIT:
      return <EmergencyExit item={item} />
    case TOOL_ITEM_TYPES.FIRST_AID:
      return <FirstAid item={item} />
    case TOOL_ITEM_TYPES.SECURITY_LIGHT:
      return <SecurityLight item={item} />
    case TOOL_ITEM_TYPES.CALL_BOX:
      return <CallBox item={item} />

    // Utilities & Equipment
    case TOOL_ITEM_TYPES.DUMPSTER:
      return <Dumpster item={item} />
    case TOOL_ITEM_TYPES.RECYCLING_BIN:
      return <RecyclingBin item={item} />
    case TOOL_ITEM_TYPES.WATER_HYDRANT:
      return <WaterHydrant item={item} />
    case TOOL_ITEM_TYPES.UTILITY_POLE:
      return <UtilityPole item={item} />
    case TOOL_ITEM_TYPES.TRANSFORMER:
      return <Transformer item={item} />
    case TOOL_ITEM_TYPES.GENERATOR:
      return <Generator item={item} />

    // Landscaping
    case TOOL_ITEM_TYPES.TREE:
      return <Tree item={item} />
    case TOOL_ITEM_TYPES.SHRUB:
      return <Shrub item={item} />
    case TOOL_ITEM_TYPES.FLOWER_BED:
      return <FlowerBed item={item} />
    case TOOL_ITEM_TYPES.GRASS_AREA:
      return <GrassArea item={item} />
    case TOOL_ITEM_TYPES.SIDEWALK:
      return <Sidewalk item={item} />
    case TOOL_ITEM_TYPES.GARDEN:
      return <Garden item={item} />

    // Signage
    case TOOL_ITEM_TYPES.STOP_SIGN:
      return <StopSign item={item} />
    case TOOL_ITEM_TYPES.SPEED_LIMIT_SIGN:
      return <SpeedLimitSign item={item} />
    case TOOL_ITEM_TYPES.DIRECTIONAL_SIGN:
      return <DirectionalSign item={item} />
    case TOOL_ITEM_TYPES.PARKING_SIGN:
      return <ParkingSign item={item} />
    case TOOL_ITEM_TYPES.NO_PARKING_SIGN:
      return <NoParkingSign item={item} />
    case TOOL_ITEM_TYPES.WARNING_SIGN:
      return <WarningSign item={item} />

    // Barriers & Boundaries
    case TOOL_ITEM_TYPES.FENCE:
      return <Fence item={item} />
    case TOOL_ITEM_TYPES.WALL:
      return <Wall item={item} />
    case TOOL_ITEM_TYPES.BARRIER:
      return <Barrier item={item} />
    case TOOL_ITEM_TYPES.BOLLARD:
      return <Bollard item={item} />
    case TOOL_ITEM_TYPES.CHAIN_LINK:
      return <ChainLink item={item} />

    // Lighting
    case TOOL_ITEM_TYPES.STREET_LIGHT:
      return <StreetLight item={item} />
    case TOOL_ITEM_TYPES.FLOOD_LIGHT:
      return <FloodLight item={item} />
    case TOOL_ITEM_TYPES.PATHWAY_LIGHT:
      return <PathwayLight item={item} />

    // Special Areas
    case TOOL_ITEM_TYPES.LOADING_ZONE:
      return <LoadingZone item={item} />
    case TOOL_ITEM_TYPES.DRIVE_THRU:
      return <DriveThru item={item} />
    case TOOL_ITEM_TYPES.PEDESTRIAN_CROSSING:
      return <PedestrianCrossing item={item} />
    case TOOL_ITEM_TYPES.BIKE_RACK:
      return <BikeRack item={item} />
    case TOOL_ITEM_TYPES.BUS_STOP:
      return <BusStop item={item} />

    default:
      return <div className={`${baseStyle} bg-gray-400`}>?</div>
  }
}

export default RenderElements

// ----- ROAD COMPONENTS -----
const RoadHorizontal = () => (
  <div className={`${baseStyle} bg-gray-700`}>
    <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white translate-y-[-50%]" />
  </div>
)

const RoadVertical = () => (
  <div className={`${baseStyle} bg-gray-700`}>
    <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-white translate-x-[-50%]" />
  </div>
)

const RoadConnector = () => (
  <div className={`${baseStyle} bg-gray-700`}>
    <div className="absolute top-1/2 left-0 w-1/2 border-t border-dashed border-white translate-y-[-50%]" />
    <div className="absolute left-1/2 bottom-0 h-1/2 border-l border-dashed border-white translate-x-[-50%]" />
  </div>
)

const RoadIntersection = () => (
  <div className={`${baseStyle} bg-gray-700`}>
    <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white translate-y-[-50%]" />
    <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-white translate-x-[-50%]" />
  </div>
)

const RoadTJunction = () => (
  <div className={`${baseStyle} bg-gray-700`}>
    <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white translate-y-[-50%]" />
    <div className="absolute left-1/2 top-0 h-1/2 border-l border-dashed border-white translate-x-[-50%]" />
  </div>
)

const RoadCurve = ({
  direction,
}: {
  direction: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) => {
  const getPath = () => {
    switch (direction) {
      case 'top-left':
        return 'M 0 50 Q 0 0 50 0'
      case 'top-right':
        return 'M 50 0 Q 100 0 100 50'
      case 'bottom-left':
        return 'M 0 50 Q 0 100 50 100'
      case 'bottom-right':
        return 'M 50 100 Q 100 100 100 50'
    }
  }

  return (
    <div className={`${baseStyle} bg-gray-700`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <path d={getPath()} stroke="white" strokeWidth="2" strokeDasharray="5,5" fill="none" />
      </svg>
    </div>
  )
}

// ----- PARKING COMPONENTS -----
interface ParkingProps {
  item: LayoutElement
  isOccupied: boolean | undefined
}

const ParkingHorizontal = ({ item, isOccupied }: ParkingProps) => (
  <div className={`${baseStyle} ${isOccupied ? 'bg-red-300' : 'bg-gray-200'}`}>
    <div
      className={`absolute inset-1 border ${isOccupied ? 'border-white/50' : ''} border-dashed`}
    />
    <div className="relative z-10 text-[10px] flex flex-col items-center justify-center">
      {isOccupied && <img src={CarImage} className="rotate-90 w-[80%]" />}
      <span
        className={`font-mono ${isOccupied ? 'absolute left-[35%]' : ''} absolute text-[10px] opacity-70`}
      >
        {item.customId}
      </span>
    </div>
  </div>
)

const ParkingVertical = ({ item, isOccupied }: ParkingProps) => (
  <div className={`${baseStyle} ${isOccupied ? 'bg-red-300' : 'bg-gray-200'}`}>
    <div
      className={`absolute inset-1 border ${isOccupied ? 'border-white/50' : ''} border-dashed`}
    />
    <div className="relative z-10 text-[10px] flex flex-col items-center justify-center">
      {isOccupied && <img src={CarImage} className="scale-[160%]" />}
      <span
        className={`font-mono ${isOccupied ? 'absolute bottom-[25%]' : ''} absolute text-[10px] opacity-70`}
      >
        {item.customId}
      </span>
    </div>
  </div>
)

const ParkingDiagonal = ({ item, isOccupied }: ParkingProps) => (
  <div className={`${baseStyle} ${isOccupied ? 'bg-red-300' : 'bg-gray-200'}`}>
    <div className='absolute inset-1 border border-dashed transform rotate-12' />
    <div className="relative z-10 text-[10px] flex flex-col items-center justify-center">
      {isOccupied && <img src={CarImage} className="rotate-12 w-[80%]" />}
      <span className="font-mono absolute text-[10px] opacity-70">{item.customId}</span>
    </div>
  </div>
)

const HandicapParking = ({
  item,
  isOccupied,
  orientation,
}: ParkingProps & { orientation: 'horizontal' | 'vertical' }) => (
  <div className={`${baseStyle} ${isOccupied ? 'bg-red-300' : 'bg-blue-200'}`}>
    <div className="absolute inset-1 border border-blue-600 border-dashed" />
    <div className="relative z-10 text-[10px] flex flex-col items-center justify-center">
      {isOccupied && (
        <img
          src={CarImage}
          className={`${orientation === 'horizontal' ? 'rotate-90' : ''} w-[80%]`}
        />
      )}
      <div className="absolute text-blue-600 text-2xl">♿</div>
      <span className="font-mono absolute bottom-0 text-[8px] opacity-70">{item.customId}</span>
    </div>
  </div>
)

const VipParking = ({ item, isOccupied }: ParkingProps) => (
  <div className={`${baseStyle} ${isOccupied ? 'bg-red-300' : 'bg-yellow-200'}`}>
    <div className="absolute inset-1 border border-yellow-600 border-dashed" />
    <div className="relative z-10 text-[10px] flex flex-col items-center justify-center">
      {isOccupied && <img src={CarImage} className="w-[80%]" />}
      <div className="absolute text-yellow-600 text-lg">⭐</div>
      <span className="font-mono absolute bottom-0 text-[8px] opacity-70">{item.customId}</span>
    </div>
  </div>
)

const EVChargingStation = ({ item, isOccupied }: ParkingProps) => (
  <div className={`${baseStyle} ${isOccupied ? 'bg-red-300' : 'bg-green-200'}`}>
    <div className="absolute inset-1 border border-green-600 border-dashed" />
    <div className="relative z-10 text-[10px] flex flex-col items-center justify-center">
      {isOccupied && <img src={CarImage} className="w-[80%]" />}
      <div className="absolute text-green-600 text-lg">⚡</div>
      <span className="font-mono absolute bottom-0 text-[8px] opacity-70">{item.customId}</span>
    </div>
  </div>
)

// ----- BUILDING COMPONENTS -----
const Building = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-800 text-white`}>
    <div className="text-lg">🏢</div>
    <span className="absolute bottom-1 text-[10px]">{item.customId}</span>
  </div>
)

const Entrance = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-green-500 text-white`}>
    <div className="text-lg">🚪</div>
    <span className="absolute bottom-1 text-[8px]">ENTER</span>
  </div>
)

const Exit = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-red-500 text-white`}>
    <div className="text-lg">🚪</div>
    <span className="absolute bottom-1 text-[8px]">EXIT</span>
  </div>
)

const Gate = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-600 text-white`}>
    <div className="text-lg">🚧</div>
    <span className="absolute bottom-1 text-[8px]">GATE</span>
  </div>
)

const SecurityBooth = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-blue-700 text-white`}>
    <div className="text-lg">🏠</div>
    <span className="absolute bottom-1 text-[8px]">SECURITY</span>
  </div>
)

const TicketBooth = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-purple-600 text-white`}>
    <div className="text-lg">🎫</div>
    <span className="absolute bottom-1 text-[8px]">TICKET</span>
  </div>
)

const Office = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-600 text-white`}>
    <div className="text-lg">🏢</div>
    <span className="absolute bottom-1 text-[8px]">OFFICE</span>
  </div>
)

const Restroom = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-blue-400 text-white`}>
    <div className="text-lg">🚻</div>
    <span className="absolute bottom-1 text-[8px]">WC</span>
  </div>
)

// ----- SAFETY & SECURITY COMPONENTS -----
const CCTVCamera = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-black text-white`}>
    <div className="text-lg">📹</div>
    <span className="absolute bottom-1 text-[8px]">CCTV</span>
  </div>
)

const FireExtinguisher = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-red-600 text-white`}>
    <div className="text-lg">🧯</div>
  </div>
)

const EmergencyExit = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-red-700 text-white`}>
    <div className="text-lg">🚨</div>
    <span className="absolute bottom-1 text-[8px]">EMERGENCY</span>
  </div>
)

const FirstAid = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-white text-red-600 border-2 border-red-600`}>
    <div className="text-lg">⛑️</div>
  </div>
)

const SecurityLight = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-300 text-black`}>
    <div className="text-lg">💡</div>
  </div>
)

const CallBox = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-orange-600 text-white`}>
    <div className="text-lg">📞</div>
  </div>
)

// ----- UTILITY COMPONENTS -----
const Dumpster = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-700 text-white`}>
    <div className="text-lg">🗑️</div>
  </div>
)

const RecyclingBin = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-green-600 text-white`}>
    <div className="text-lg">♻️</div>
  </div>
)

const WaterHydrant = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-red-500 text-white`}>
    <div className="text-lg">🚰</div>
  </div>
)

const UtilityPole = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-brown-600 text-white`}>
    <div className="w-2 h-full bg-brown-800 mx-auto" />
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-[8px]">⚡</div>
  </div>
)

const Transformer = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-800 text-yellow-400`}>
    <div className="text-lg">⚡</div>
    <span className="absolute bottom-1 text-[8px]">XFMR</span>
  </div>
)

const Generator = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-900 text-yellow-300`}>
    <div className="text-lg">🔌</div>
    <span className="absolute bottom-1 text-[8px]">GEN</span>
  </div>
)

// ----- LANDSCAPING COMPONENTS -----
const Tree = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-green-300`}>
    <div className="text-lg">🌳</div>
  </div>
)

const Shrub = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-green-400`}>
    <div className="text-lg">🌿</div>
  </div>
)

const FlowerBed = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-pink-200`}>
    <div className="text-lg">🌺</div>
  </div>
)

const GrassArea = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-green-200`}>
    <div className="grid grid-cols-3 gap-1 p-1">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="text-green-600 text-[8px]">
          🌱
        </div>
      ))}
    </div>
  </div>
)

const Sidewalk = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-300`}>
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-4 gap-[1px] w-full h-full p-1">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="bg-gray-400 rounded-sm" />
        ))}
      </div>
    </div>
  </div>
)

const Garden = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-green-100`}>
    <div className="grid grid-cols-2 gap-1 p-1">
      <div className="text-lg">🌷</div>
      <div className="text-lg">🌹</div>
      <div className="text-lg">🌻</div>
      <div className="text-lg">🌺</div>
    </div>
  </div>
)

// ----- SIGNAGE COMPONENTS -----
const StopSign = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-red-600 text-white`}>
    <div className="text-lg">🛑</div>
  </div>
)

const SpeedLimitSign = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-white text-black border-2 border-black`}>
    <div className="text-center">
      <div className="text-[8px]">SPEED</div>
      <div className="text-lg font-bold">25</div>
    </div>
  </div>
)

const DirectionalSign = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-blue-600 text-white`}>
    <div className="text-lg">➡️</div>
  </div>
)

const ParkingSign = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-white text-blue-600 border-2 border-blue-600`}>
    <div className="text-2xl font-bold">P</div>
  </div>
)

const NoParkingSign = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-white text-red-600 border-2 border-red-600`}>
    <div className="relative text-2xl font-bold">
      P
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-[2px] bg-red-600 transform rotate-45" />
      </div>
    </div>
  </div>
)

const WarningSign = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-400 text-black border-2 border-black`}>
    <div className="text-lg">⚠️</div>
  </div>
)

// ----- BARRIER COMPONENTS -----
const Fence = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-brown-400`}>
    <div className="grid grid-cols-5 gap-[1px] w-full h-full p-1">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="bg-brown-600" />
      ))}
    </div>
  </div>
)

const Wall = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-600`}>
    <div className="grid grid-rows-4 gap-[1px] w-full h-full p-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-gray-500 rounded-sm" />
      ))}
    </div>
  </div>
)

const Barrier = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-500`}>
    <div className="w-full h-2 bg-yellow-600 mb-1" />
    <div className="w-full h-2 bg-black mb-1" />
    <div className="w-full h-2 bg-yellow-600" />
  </div>
)

const Bollard = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-300`}>
    <div className="w-4 h-full bg-gray-700 rounded-full mx-auto" />
  </div>
)

const ChainLink = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-300`}>
    <div className="grid grid-cols-8 grid-rows-8 gap-[1px] w-full h-full p-1">
      {[...Array(64)].map((_, i) => (
        <div key={i} className="bg-gray-500 rounded-full" />
      ))}
    </div>
  </div>
)

// ----- LIGHTING COMPONENTS -----
const StreetLight = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-200`}>
    <div className="flex flex-col items-center">
      <div className="w-1 h-4 bg-gray-600" />
      <div className="text-lg">💡</div>
    </div>
  </div>
)

const FloodLight = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-300`}>
    <div className="text-lg">🔦</div>
  </div>
)

const PathwayLight = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-yellow-100`}>
    <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto" />
  </div>
)

// ----- SPECIAL AREA COMPONENTS -----
const LoadingZone = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-orange-200 border-2 border-orange-500 border-dashed`}>
    <div className="text-lg">📦</div>
    <span className="absolute bottom-1 text-[8px]">LOADING</span>
  </div>
)

const DriveThru = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-purple-200`}>
    <div className="text-lg">🚗</div>
    <span className="absolute bottom-1 text-[8px]">DRIVE-THRU</span>
  </div>
)

const PedestrianCrossing = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-white`}>
    <div className="grid grid-rows-6 gap-[1px] w-full h-full">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-800'}`} />
      ))}
    </div>
  </div>
)

const BikeRack = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-gray-200`}>
    <div className="text-lg">🚲</div>
  </div>
)

const BusStop = ({ item }: { item: LayoutElement }) => (
  <div className={`${baseStyle} bg-blue-300`}>
    <div className="text-lg">🚌</div>
    <span className="absolute bottom-1 text-[8px]">BUS STOP</span>
  </div>
)
