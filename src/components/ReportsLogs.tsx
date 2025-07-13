import React, { useState } from 'react';
import { Download, Filter, Calendar, FileText, Search, Eye } from 'lucide-react';

const ReportsLogs = () => {
  const [dateFilter, setDateFilter] = useState('last7days');
  const [statusFilter, setStatusFilter] = useState('all');
  const [productFilter, setProductFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const shipmentHistory = [
    {
      id: 'W-4521',
      date: '2024-01-15',
      product: 'Dairy Products',
      route: 'Mumbai DC → Pune Store',
      status: 'Delivered',
      temperature: '2.5°C',
      duration: '4h 32m',
      driver: 'Raj Patel'
    },
    {
      id: 'W-4522',
      date: '2024-01-15',
      product: 'Fresh Vegetables',
      route: 'Delhi DC → Gurgaon Store',
      status: 'In Transit',
      temperature: '6.8°C',
      duration: '2h 15m',
      driver: 'Amit Singh'
    },
    {
      id: 'W-4523',
      date: '2024-01-15',
      product: 'Frozen Foods',
      route: 'Bangalore DC → Chennai Store',
      status: 'Alert',
      temperature: '-18.2°C',
      duration: '6h 45m',
      driver: 'Suresh Kumar'
    },
    {
      id: 'W-4524',
      date: '2024-01-14',
      product: 'Fruits',
      route: 'Chennai DC → Coimbatore Store',
      status: 'Delivered',
      temperature: '8.9°C',
      duration: '3h 20m',
      driver: 'Vikram Reddy'
    },
    {
      id: 'W-4525',
      date: '2024-01-14',
      product: 'Meat Products',
      route: 'Kolkata DC → Bhubaneswar Store',
      status: 'Delivered',
      temperature: '1.8°C',
      duration: '5h 10m',
      driver: 'Rohit Das'
    }
  ];

  const reportTypes = [
    { name: 'Daily Temperature Report', format: 'PDF', size: '2.4 MB' },
    { name: 'Weekly Shipment Summary', format: 'CSV', size: '1.8 MB' },
    { name: 'Monthly Analytics Report', format: 'PDF', size: '5.2 MB' },
    { name: 'Compliance Report', format: 'PDF', size: '3.1 MB' },
    { name: 'Driver Performance Report', format: 'CSV', size: '0.9 MB' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Alert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredHistory = shipmentHistory.filter((shipment) => {
    const matchesSearch = shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.route.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || shipment.status === statusFilter;
    const matchesProduct = productFilter === 'all' || shipment.product === productFilter;
    
    return matchesSearch && matchesStatus && matchesProduct;
  });

  const downloadReport = (reportName: string, format: string) => {
    // Mock download functionality
    console.log(`Downloading ${reportName} as ${format}`);
  };

  return (
    <div className="space-y-6">
      {/* Report Generation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Reports</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTypes.map((report, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <FileText size={20} className="text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <p className="text-sm text-gray-500">{report.format} • {report.size}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => downloadReport(report.name, report.format)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center justify-center space-x-1"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  <Eye size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Shipment History</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search shipments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last90days">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="Delivered">Delivered</option>
              <option value="In Transit">In Transit</option>
              <option value="Alert">Alert</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product</label>
            <select
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Products</option>
              <option value="Dairy Products">Dairy Products</option>
              <option value="Fresh Vegetables">Fresh Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Meat Products">Meat Products</option>
            </select>
          </div>
        </div>
      </div>

      {/* Shipment History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Shipment History</h3>
            <p className="text-sm text-gray-600 mt-1">
              Showing {filteredHistory.length} of {shipmentHistory.length} shipments
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download size={16} />
            <span>Export All</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shipment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Temperature</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredHistory.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-blue-600">{shipment.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.route}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.temperature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{shipment.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsLogs;