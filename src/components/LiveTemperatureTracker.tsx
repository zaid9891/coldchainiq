import React, { useState } from 'react';
import { Thermometer, Droplets, MapPin, AlertTriangle, TrendingUp } from 'lucide-react';

const LiveTemperatureTracker = () => {
  const [selectedUnit, setSelectedUnit] = useState('CU-8934');
  
  const shipments = [
    { id: 'CU-8934', product: 'Dairy Products', temp: 2.5, humidity: 65, location: 'Mumbai → Pune', status: 'normal' },
    { id: 'CU-7821', product: 'Fresh Vegetables', temp: 6.8, humidity: 78, location: 'Delhi → Gurgaon', status: 'warning' },
    { id: 'CU-9456', product: 'Frozen Foods', temp: -18.2, humidity: 45, location: 'Bangalore → Chennai', status: 'normal' },
    { id: 'CU-3214', product: 'Fruits', temp: 8.9, humidity: 82, location: 'Kolkata → Bhubaneswar', status: 'critical' },
    { id: 'CU-5678', product: 'Dairy Products', temp: 3.1, humidity: 62, location: 'Chennai → Coimbatore', status: 'normal' },
    { id: 'CU-1234', product: 'Meat Products', temp: 1.8, humidity: 55, location: 'Mumbai → Nashik', status: 'normal' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return '●';
      case 'warning': return '▲';
      case 'critical': return '⚠';
      default: return '●';
    }
  };

  // Mock temperature data for the last 24 hours
  const temperatureData = [
    { time: '00:00', temp: 2.1 },
    { time: '02:00', temp: 2.3 },
    { time: '04:00', temp: 2.5 },
    { time: '06:00', temp: 2.8 },
    { time: '08:00', temp: 3.1 },
    { time: '10:00', temp: 2.9 },
    { time: '12:00', temp: 2.7 },
    { time: '14:00', temp: 2.4 },
    { time: '16:00', temp: 2.6 },
    { time: '18:00', temp: 2.5 },
    { time: '20:00', temp: 2.3 },
    { time: '22:00', temp: 2.2 },
  ];

  return (
    <div className="space-y-6">
      {/* Current Shipments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Current Shipments</h3>
          <p className="text-sm text-gray-600 mt-1">Real-time monitoring of all cold units</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humidity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shipments.map((shipment) => (
                <tr 
                  key={shipment.id} 
                  className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                    selectedUnit === shipment.id ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedUnit(shipment.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Thermometer size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{shipment.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${
                        shipment.temp > 8 ? 'text-red-600' : 
                        shipment.temp > 5 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {shipment.temp}°C
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Droplets size={16} className="text-blue-400 mr-1" />
                      <span className="text-sm text-gray-900">{shipment.humidity}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-900">{shipment.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                      {getStatusIcon(shipment.status)} {shipment.status.charAt(0).toUpperCase() + shipment.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Temperature Trend Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Temperature Trend - {selectedUnit}</h3>
            <p className="text-sm text-gray-600">Last 24 hours</p>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp size={20} className="text-blue-600" />
            <span className="text-sm font-medium text-gray-900">
              Current: {shipments.find(s => s.id === selectedUnit)?.temp}°C
            </span>
          </div>
        </div>
        
        <div className="h-64 relative">
          <div className="absolute inset-0 flex items-end justify-between space-x-2">
            {temperatureData.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-200 rounded-t relative" style={{ height: '200px' }}>
                  <div 
                    className="absolute bottom-0 w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                    style={{ height: `${(point.temp / 4) * 100}%` }}
                  ></div>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                    {point.temp}°C
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">{point.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTemperatureTracker;