import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import LiveTemperatureTracker from './components/LiveTemperatureTracker';
import AlertsNotifications from './components/AlertsNotifications';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import RouteOptimizer from './components/RouteOptimizer';
import ReportsLogs from './components/ReportsLogs';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export interface User {
  id: string;
  email: string;
  name: string;
  userType: 'Admin' | 'Logistics Manager' | 'Driver';
}

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    if (!user) return null;

    // Filter available tabs based on user type
    const getAvailableTabs = () => {
      switch (user.userType) {
        case 'Admin':
          return ['dashboard', 'temperature', 'alerts', 'analytics', 'routes', 'reports'];
        case 'Logistics Manager':
          return ['dashboard', 'temperature', 'alerts', 'analytics', 'reports'];
        case 'Driver':
          return ['dashboard', 'temperature', 'routes'];
        default:
          return ['dashboard'];
      }
    };

    const availableTabs = getAvailableTabs();
    
    // Redirect to available tab if current tab is not accessible
    if (!availableTabs.includes(activeTab)) {
      setActiveTab('dashboard');
      return <Dashboard />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'temperature':
        return <LiveTemperatureTracker />;
      case 'alerts':
        return <AlertsNotifications />;
      case 'analytics':
        return <PredictiveAnalytics />;
      case 'routes':
        return <RouteOptimizer />;
      case 'reports':
        return <ReportsLogs />;
      default:
        return <Dashboard />;
    }
  };

  if (currentPage === 'landing') {
    return (
      <LandingPage 
        onLogin={() => setCurrentPage('login')}
        onGetStarted={() => setCurrentPage('login')}
      />
    );
  }

  if (currentPage === 'login') {
    return (
      <LoginPage 
        onLogin={handleLogin}
        onBack={() => setCurrentPage('landing')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
      />
      
      <div className="flex-1 flex flex-col">
        <Header 
          activeTab={activeTab}
          user={user}
          onLogout={handleLogout}
        />
        
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;