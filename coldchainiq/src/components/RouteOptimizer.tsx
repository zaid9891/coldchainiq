import React, { useState } from 'react';
import { Navigation, MapPin, Clock, Fuel, Route } from 'lucide-react';

const RouteOptimizer = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [productType, setProductType] = useState('');
  const [showRoute, setShowRoute] = useState(false);

  const locations = [
    'Mumbai DC', 'Delhi DC', 'Bangalore DC', 'Chennai DC', 'Kolkata DC',
    'Pune Store', 'Gurgaon Store', 'Hyderabad Store', 'Coimbatore Store', 'Bhubaneswar Store'
  ];

  const products = [
    'Dairy Products', 'Fresh Vegetables', 'Fruits', 'Frozen Foods', 'Meat Products'
  ];

  const optimizeRoute = () => {
    if (source && destination && productType) {
      setShowRoute(true);
    }
  };

  const routeDetails = {
    distance: '342 km',
    estimatedTime: '4h 32m',
    fuelCost: '₹2,840',
    coldChainOptimal: true,
    temperatureZones: 3,
    riskLevel: 'Low'
  };

  const waypoints = [
    { name: source, time: '00:00', temp: '2°C', status: 'start' },
    { name: 'Waypoint 1', time: '01:30', temp: '2.5°C', status: 'intermediate' },
    { name: 'Waypoint 2', time: '03:00', temp: '2.8°C', status: 'intermediate' },
    { name: destination, time: '04:32', temp: '3.1°C', status: 'end' }
  ];

  return (
    <div className="space-y-6">
      {/* Route Input Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Optimization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select source location</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select destination</option>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Type</label>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select product type</option>
              {products.map((product) => (
                <option key={product} value={product}>{product}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            onClick={optimizeRoute}
            disabled={!source || !destination || !productType}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
          >
            <Navigation size={20} />
            <span>Optimize Route</span>
          </button>
        </div>
      </div>

      {/* Route Results */}
      {showRoute && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Route Map */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimized Route</h3>
            <div className="bg-gray-100 rounded-lg h-80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                
                {/* Route visualization */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
                  <div className="relative w-full h-full">
                    {/* Route line */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg className="w-full h-full" viewBox="0 0 200 150">
                        <path
                          d="M 20 20 Q 50 50 100 40 Q 150 30 180 130"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                    
                    {/* Waypoints */}
                    <div className="absolute top-2 left-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute top-8 left-20 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute top-6 left-32 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Route Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Route size={20} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Distance</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{routeDetails.distance}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock size={20} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Est. Time</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{routeDetails.estimatedTime}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Fuel size={20} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Fuel Cost</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{routeDetails.fuelCost}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">❄️</span>
                  <span className="text-sm font-medium text-gray-700">Cold Chain</span>
                </div>
                <span className="text-sm font-semibold text-green-600">Optimal</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🛡️</span>
                  <span className="text-sm font-medium text-gray-700">Risk Level</span>
                </div>
                <span className="text-sm font-semibold text-blue-600">{routeDetails.riskLevel}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Waypoints Table */}
      {showRoute && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Route Waypoints</h3>
            <p className="text-sm text-gray-600 mt-1">Temperature monitoring at each checkpoint</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Temperature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {waypoints.map((waypoint, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">{waypoint.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{waypoint.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{waypoint.temp}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        waypoint.status === 'start' ? 'bg-green-100 text-green-800' :
                        waypoint.status === 'end' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {waypoint.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteOptimizer;