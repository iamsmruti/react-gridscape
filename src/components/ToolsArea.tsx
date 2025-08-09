import ToolItem from './ToolItem'
import { TOOL_ITEM_TYPES } from '../utils/constants'

const ToolsArea = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white shadow-sm p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Blocks</h3>

      {/* Road Elements */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-gray-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-gray-600 rounded-sm mr-2"></div>
          Road Elements
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_HORIZONTAL} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_VERTICAL} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_CONNECTOR} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_INTERSECTION} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_T_JUNCTION} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_CURVE_TL} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_CURVE_TR} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_CURVE_BL} />
          <ToolItem type={TOOL_ITEM_TYPES.ROAD_CURVE_BR} />
        </div>
      </div>

      {/* Parking Spaces */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-gray-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
          Parking Spaces
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.PARKING_HORIZONTAL} />
          <ToolItem type={TOOL_ITEM_TYPES.PARKING_VERTICAL} />
          <ToolItem type={TOOL_ITEM_TYPES.PARKING_DIAGONAL} />
          <ToolItem type={TOOL_ITEM_TYPES.HANDICAP_PARKING_HORIZONTAL} />
          <ToolItem type={TOOL_ITEM_TYPES.HANDICAP_PARKING_VERTICAL} />
          <ToolItem type={TOOL_ITEM_TYPES.VIP_PARKING} />
          <ToolItem type={TOOL_ITEM_TYPES.EV_CHARGING_STATION} />
        </div>
      </div>

      {/* Buildings & Structures */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-gray-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-gray-800 rounded-sm mr-2"></div>
          Buildings & Structures
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.BUILDING} />
          <ToolItem type={TOOL_ITEM_TYPES.ENTRANCE} />
          <ToolItem type={TOOL_ITEM_TYPES.EXIT} />
          <ToolItem type={TOOL_ITEM_TYPES.GATE} />
          <ToolItem type={TOOL_ITEM_TYPES.SECURITY_BOOTH} />
          <ToolItem type={TOOL_ITEM_TYPES.TICKET_BOOTH} />
          <ToolItem type={TOOL_ITEM_TYPES.OFFICE} />
          <ToolItem type={TOOL_ITEM_TYPES.RESTROOM} />
        </div>
      </div>

      {/* Safety & Security */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-red-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
          Safety & Security
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.CCTV_CAMERA} />
          <ToolItem type={TOOL_ITEM_TYPES.FIRE_EXTINGUISHER} />
          <ToolItem type={TOOL_ITEM_TYPES.EMERGENCY_EXIT} />
          <ToolItem type={TOOL_ITEM_TYPES.FIRST_AID} />
          <ToolItem type={TOOL_ITEM_TYPES.SECURITY_LIGHT} />
          <ToolItem type={TOOL_ITEM_TYPES.CALL_BOX} />
        </div>
      </div>

      {/* Utilities & Equipment */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-yellow-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
          Utilities & Equipment
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.DUMPSTER} />
          <ToolItem type={TOOL_ITEM_TYPES.RECYCLING_BIN} />
          <ToolItem type={TOOL_ITEM_TYPES.WATER_HYDRANT} />
          <ToolItem type={TOOL_ITEM_TYPES.UTILITY_POLE} />
          <ToolItem type={TOOL_ITEM_TYPES.TRANSFORMER} />
          <ToolItem type={TOOL_ITEM_TYPES.GENERATOR} />
        </div>
      </div>

      {/* Landscaping */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-green-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-green-300 rounded-sm mr-2"></div>
          Landscaping
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.TREE} />
          <ToolItem type={TOOL_ITEM_TYPES.SHRUB} />
          <ToolItem type={TOOL_ITEM_TYPES.FLOWER_BED} />
          <ToolItem type={TOOL_ITEM_TYPES.GRASS_AREA} />
          <ToolItem type={TOOL_ITEM_TYPES.SIDEWALK} />
          <ToolItem type={TOOL_ITEM_TYPES.GARDEN} />
        </div>
      </div>

      {/* Signage */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-blue-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
          Signage
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.STOP_SIGN} />
          <ToolItem type={TOOL_ITEM_TYPES.SPEED_LIMIT_SIGN} />
          <ToolItem type={TOOL_ITEM_TYPES.DIRECTIONAL_SIGN} />
          <ToolItem type={TOOL_ITEM_TYPES.PARKING_SIGN} />
          <ToolItem type={TOOL_ITEM_TYPES.NO_PARKING_SIGN} />
          <ToolItem type={TOOL_ITEM_TYPES.WARNING_SIGN} />
        </div>
      </div>

      {/* Barriers & Boundaries */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-gray-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-gray-500 rounded-sm mr-2"></div>
          Barriers & Boundaries
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.FENCE} />
          <ToolItem type={TOOL_ITEM_TYPES.WALL} />
          <ToolItem type={TOOL_ITEM_TYPES.BARRIER} />
          <ToolItem type={TOOL_ITEM_TYPES.BOLLARD} />
          <ToolItem type={TOOL_ITEM_TYPES.CHAIN_LINK} />
        </div>
      </div>

      {/* Lighting */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-yellow-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-yellow-400 rounded-sm mr-2"></div>
          Lighting
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.STREET_LIGHT} />
          <ToolItem type={TOOL_ITEM_TYPES.FLOOD_LIGHT} />
          <ToolItem type={TOOL_ITEM_TYPES.PATHWAY_LIGHT} />
        </div>
      </div>

      {/* Special Areas */}
      <div className="mb-8">
        <h3 className="font-semibold text-sm text-purple-700 mb-4 flex items-center">
          <div className="w-3 h-3 bg-purple-400 rounded-sm mr-2"></div>
          Special Areas
        </h3>
        <div className="flex flex-wrap gap-5">
          <ToolItem type={TOOL_ITEM_TYPES.LOADING_ZONE} />
          <ToolItem type={TOOL_ITEM_TYPES.DRIVE_THRU} />
          <ToolItem type={TOOL_ITEM_TYPES.PEDESTRIAN_CROSSING} />
          <ToolItem type={TOOL_ITEM_TYPES.BIKE_RACK} />
          <ToolItem type={TOOL_ITEM_TYPES.BUS_STOP} />
        </div>
      </div>

      {/* Quick Guide */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-sm text-blue-800 mb-3 flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          Quick Guide
        </h3>
        <ul className="text-xs text-blue-700 space-y-2">
          <li className="flex items-start">
            <span className="font-mono bg-blue-100 px-1 rounded mr-2 mt-0.5">Drag</span>
            <span>Add elements to canvas</span>
          </li>
          <li className="flex items-start">
            <span className="font-mono bg-blue-100 px-1 rounded mr-2 mt-0.5">Click</span>
            <span>Select and edit items</span>
          </li>
          <li className="flex items-start">
            <span className="font-mono bg-blue-100 px-1 rounded mr-2 mt-0.5">Space</span>
            <span>Pan mode</span>
          </li>
          <li className="flex items-start">
            <span className="font-mono bg-blue-100 px-1 rounded mr-2 mt-0.5">Wheel</span>
            <span>Zoom in/out</span>
          </li>
          <li className="flex items-start">
            <span className="font-mono bg-blue-100 px-1 rounded mr-2 mt-0.5">Del</span>
            <span>Delete selected</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ToolsArea
