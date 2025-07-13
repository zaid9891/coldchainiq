import React from 'react';
import { TrendingUp, AlertTriangle, Package, BarChart } from 'lucide-react';

const PredictiveAnalytics = () => {
  const riskScores = [
    { product: 'Dairy Products', risk: 8.5, trend: 'increasing', color: 'text-red-600' },
    { product: 'Fresh Vegetables', risk: 6.2, trend: 'stable', color: 'text-yellow-600' },
    { product: 'Fruits', risk: 7.8, trend: 'decreasing', color: 'text-yellow-600' },
    { product: 'Frozen Foods', risk: 2.1, trend: 'stable', color: 'text-green-600' },
    { product: 'Meat Products', risk: 4.3, trend: 'increasing', color: 'text-green-600' },
  ];

  const highRiskItems = [
    { id: 'CU-8934', product: 'Dairy Products', location: 'Mumbai → Pune', riskScore: 9.2, reason: 'Temperature fluctuation' },
    { id: 'CU-3214', product: 'Fruits', location: 'Chennai → Coimbatore', riskScore: 8.7, reason: 'Humidity exceeding limits' },
    { id: 'CU-7821', product: 'Fresh Vegetables', location: 'Delhi → Gurgaon', riskScore: 7.9, reason: 'Extended transit time' },
    { id: 'CU-5432', product: 'Dairy Products', location: 'Kolkata → Bhubaneswar', riskScore: 7.6, reason: 'Route congestion' },
  ];

  const trendData = [
    { month: 'Jan', dairy: 6.2, vegetables: 5.8, fruits: 7.1, frozen: 2.3, meat: 4.1 },
    { month: 'Feb', dairy: 7.1, vegetables: 6.2, fruits: 6.9, frozen: 2.1, meat: 3.8 },
    { month: 'Mar', dairy: 8.3, vegetables: 6.8, fruits: 7.5, frozen: 2.4, meat: 4.2 },
    { month: 'Apr', dairy: 8.5, vegetables: 6.2, fruits: 7.8, frozen: 2.1, meat: 4.3 },
  ];

  const getRiskColor = (risk: number) => {
    if (risk >= 8) return 'bg-red-500';
    if (risk >= 6) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getRiskBgColor = (risk: number) => {
    if (risk >= 8) return 'bg-red-50';
    if (risk >= 6) return 'bg-yellow-50';
    return 'bg-green-50';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return '↗️';
      case 'decreasing': return '↘️';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  return (
    <div className="space-y-6">
      {/* Risk Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Risk Score</p>
              <p className="text-2xl font-bold text-gray-900">5.8</p>
              <p className="text-sm text-green-600">↓ 0.3 from last week</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">High Risk Items</p>
              <p className="text-2xl font-bold text-red-600">{highRiskItems.length}</p>
              <p className="text-sm text-red-600">↑ 2 from yesterday</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle size={24} className="text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Predicted Savings</p>
              <p className="text-2xl font-bold text-green-600">₹2.4L</p>
              <p className="text-sm text-green-600">This month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp size={24} className="text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Risk Scores */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Type Risk Scores</h3>
          <div className="space-y-4">
            {riskScores.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                <div className="flex items-center space-x-3">
                  <Package size={20} className="text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{item.product}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      {getTrendIcon(item.trend)} {item.trend}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${item.color}`}>
                    {item.risk}
                  </div>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                    <div 
                      className={`h-2 rounded-full ${getRiskColor(item.risk)}`}
                      style={{ width: `${(item.risk / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trend Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Trend Analysis</h3>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between space-x-2">
              {trendData.map((point, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full relative" style={{ height: '200px' }}>
                    <div 
                      className="absolute bottom-0 w-full bg-red-400 rounded-t"
                      style={{ height: `${(point.dairy / 10) * 100}%` }}
                    ></div>
                    <div 
                      className="absolute bottom-0 w-full bg-yellow-400 rounded-t opacity-75"
                      style={{ height: `${(point.vegetables / 10) * 100}%` }}
                    ></div>
                    <div 
                      className="absolute bottom-0 w-full bg-orange-400 rounded-t opacity-50"
                      style={{ height: `${(point.fruits / 10) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">{point.month}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span>Dairy</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span>Vegetables</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-orange-400 rounded"></div>
              <span>Fruits</span>
            </div>
          </div>
        </div>
      </div>

      {/* High Risk Items Today */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">High-Risk Items Today</h3>
          <p className="text-sm text-gray-600 mt-1">Items requiring immediate attention</p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {highRiskItems.map((item) => (
            <div key={item.id} className={`p-6 ${getRiskBgColor(item.riskScore)}`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle size={20} className="text-red-600" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{item.id}</h4>
                      <p className="text-sm text-gray-600">{item.product}</p>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                    <span>Route: {item.location}</span>
                    <span>Issue: {item.reason}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">{item.riskScore}</div>
                  <div className="text-sm text-gray-600">Risk Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;