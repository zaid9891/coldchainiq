import React from 'react';
import { 
  Package, 
  Thermometer, 
  AlertTriangle, 
  TrendingUp,
  MapPin,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    { title: 'Total Shipments', value: '2,847', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Active Cold Units', value: '1,234', icon: Thermometer, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Spoilage Risk %', value: '3.2%', icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { title: 'Average Temperature', value: '4.2°C', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const locations = [
    { id: 1, name: 'Mumbai DC', lat: 19.0760, lng: 72.8777, status: 'safe', units: 45 },
    { id: 2, name: 'Delhi DC', lat: 28.7041, lng: 77.1025, status: 'warning', units: 32 },
    { id: 3, name: 'Bangalore DC', lat: 12.9716, lng: 77.5946, status: 'safe', units: 28 },
    { id: 4, name: 'Chennai DC', lat: 13.0827, lng: 80.2707, status: 'critical', units: 19 },
    { id: 5, name: 'Kolkata DC', lat: 22.5726, lng: 88.3639, status: 'safe', units: 23 },
  ];

  const statusData = [
    { status: 'Safe', count: 1184, color: 'bg-green-500', percentage: 85 },
    { status: 'Warning', count: 156, color: 'bg-yellow-500', percentage: 11 },
    { status: 'At Risk', count: 56, color: 'bg-red-500', percentage: 4 },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <div className={`${metric.bg} ${metric.color} p-3 rounded-lg`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cold Unit Locations</h3>
          <div className="relative bg-gray-100 rounded-lg h-80 overflow-hidden">
            {/* Simple map representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              
              {/* Location pins */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${((location.lng - 68) / (95 - 68)) * 100}%`,
                    top: `${((35 - location.lat) / (35 - 8)) * 100}%`,
                  }}
                >
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    location.status === 'safe' ? 'bg-green-500' :
                    location.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  } animate-pulse`}></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {location.name}<br />
                    {location.units} units
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Summary</h3>
          <div className="space-y-4">
            {statusData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{item.status}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">{item.count}</div>
                  <div className="text-xs text-gray-500">{item.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Units</span>
              <span className="font-semibold text-gray-900">1,396</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={16} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Shipment W-4521 delivered successfully</p>
              <p className="text-xs text-gray-500">Mumbai DC → Pune Store • 2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertTriangle size={16} className="text-yellow-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Temperature alert for unit CU-8934</p>
              <p className="text-xs text-gray-500">Delhi DC • 5 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock size={16} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">New shipment W-4523 dispatched</p>
              <p className="text-xs text-gray-500">Bangalore DC → Chennai Store • 12 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;