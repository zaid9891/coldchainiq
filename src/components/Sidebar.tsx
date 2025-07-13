import React, { useState } from 'react';
import { 
  Home, 
  Thermometer, 
  AlertTriangle, 
  TrendingUp, 
  Route, 
  FileText,
  Menu,
  X
} from 'lucide-react';
import { User } from '../App';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getNavItems = () => {
    if (!user) return [];

    const allItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'temperature', label: 'Live Temperature Tracker', icon: Thermometer },
      { id: 'alerts', label: 'Alerts & Notifications', icon: AlertTriangle },
      { id: 'analytics', label: 'Predictive Analytics', icon: TrendingUp },
      { id: 'routes', label: 'Delivery Route Optimizer', icon: Route },
      { id: 'reports', label: 'Reports & Logs', icon: FileText },
    ];

    // Filter based on user type
    switch (user.userType) {
      case 'Admin':
        return allItems;
      case 'Logistics Manager':
        return allItems.filter(item => item.id !== 'routes');
      case 'Driver':
        return allItems.filter(item => ['dashboard', 'temperature', 'routes'].includes(item.id));
      default:
        return [allItems[0]]; // Just dashboard
    }
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu size={24} className="text-gray-600" />
      </button>

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">ColdChain IQ</h1>
              <p className="text-xs text-gray-500">Supply Chain Management</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Info */}
        {user && (
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.userType}</p>
              </div>
            </div>
          </div>
        )}
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;