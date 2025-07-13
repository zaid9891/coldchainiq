import React from 'react';
import { LogOut, User as UserIcon } from 'lucide-react';
import { User } from '../App';

interface HeaderProps {
  activeTab: string;
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, user, onLogout }) => {
  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'temperature': return 'Live Temperature Tracker';
      case 'alerts': return 'Alerts & Notifications';
      case 'analytics': return 'Predictive Analytics';
      case 'routes': return 'Delivery Route Optimizer';
      case 'reports': return 'Reports & Logs';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {getPageTitle()}
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">System Online</span>
          </div>
          
          <div className="text-sm text-gray-500">
            {new Date().toLocaleString()}
          </div>
          
          {user && (
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserIcon size={16} className="text-blue-600" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.userType}</p>
                </div>
              </div>
              
              <button
                onClick={onLogout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;