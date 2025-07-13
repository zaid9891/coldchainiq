import React, { useState } from 'react';
import { AlertTriangle, Clock, MapPin, Thermometer, Filter } from 'lucide-react';

const AlertsNotifications = () => {
  const [filter, setFilter] = useState('all');
  
  const alerts = [
    {
      id: 1,
      time: '2024-01-15 14:23:45',
      location: 'Mumbai DC',
      unitId: 'CU-8934',
      issue: 'Temperature exceeds 8°C',
      severity: 'critical',
      temp: 9.2,
      product: 'Dairy Products'
    },
    {
      id: 2,
      time: '2024-01-15 14:18:12',
      location: 'Delhi DC',
      unitId: 'CU-7821',
      issue: 'Humidity level warning',
      severity: 'warning',
      temp: 6.8,
      product: 'Fresh Vegetables'
    },
    {
      id: 3,
      time: '2024-01-15 14:15:33',
      location: 'Bangalore DC',
      unitId: 'CU-9456',
      issue: 'Door sensor malfunction',
      severity: 'warning',
      temp: -18.2,
      product: 'Frozen Foods'
    },
    {
      id: 4,
      time: '2024-01-15 14:12:07',
      location: 'Chennai DC',
      unitId: 'CU-3214',
      issue: 'Critical temperature breach',
      severity: 'critical',
      temp: 12.5,
      product: 'Fruits'
    },
    {
      id: 5,
      time: '2024-01-15 14:08:41',
      location: 'Kolkata DC',
      unitId: 'CU-5678',
      issue: 'Power supply fluctuation',
      severity: 'warning',
      temp: 3.1,
      product: 'Dairy Products'
    },
    {
      id: 6,
      time: '2024-01-15 14:05:29',
      location: 'Mumbai DC',
      unitId: 'CU-1234',
      issue: 'Compressor efficiency drop',
      severity: 'info',
      temp: 1.8,
      product: 'Meat Products'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'warning': return 'border-yellow-500 bg-yellow-50';
      case 'info': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return '🔴';
      case 'warning': return '🟡';
      case 'info': return '🔵';
      default: return '⚪';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      case 'info': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const filteredAlerts = filter === 'all' 
    ? alerts 
    : alerts.filter(alert => alert.severity === filter);

  const alertCounts = {
    all: alerts.length,
    critical: alerts.filter(a => a.severity === 'critical').length,
    warning: alerts.filter(a => a.severity === 'warning').length,
    info: alerts.filter(a => a.severity === 'info').length
  };

  return (
    <div className="space-y-6">
      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{alertCounts.all}</p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <AlertTriangle size={24} className="text-gray-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Critical</p>
              <p className="text-2xl font-bold text-red-600">{alertCounts.critical}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔴</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Warning</p>
              <p className="text-2xl font-bold text-yellow-600">{alertCounts.warning}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🟡</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Info</p>
              <p className="text-2xl font-bold text-blue-600">{alertCounts.info}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔵</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <Filter size={20} className="text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter by severity:</span>
          <div className="flex space-x-2">
            {['all', 'critical', 'warning', 'info'].map((severity) => (
              <button
                key={severity}
                onClick={() => setFilter(severity)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filter === severity
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
          <p className="text-sm text-gray-600 mt-1">
            Showing {filteredAlerts.length} of {alerts.length} alerts
          </p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredAlerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-6 border-l-4 hover:bg-gray-50 transition-colors ${getSeverityColor(alert.severity)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{getSeverityIcon(alert.severity)}</span>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{alert.issue}</h4>
                      <p className={`text-sm font-medium ${getSeverityText(alert.severity)}`}>
                        {alert.severity.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{alert.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{alert.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Thermometer size={16} />
                      <span>{alert.unitId}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">Product: <span className="font-medium">{alert.product}</span></span>
                    <span className="text-gray-600">Current Temp: <span className="font-medium">{alert.temp}°C</span></span>
                  </div>
                </div>
                
                <div className="ml-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsNotifications;