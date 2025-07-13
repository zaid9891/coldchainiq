import React from 'react';
import { 
  Thermometer, 
  Brain, 
  Bell, 
  Route, 
  ArrowRight, 
  Truck,
  Shield,
  BarChart3,
  Users
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onGetStarted }) => {
  const features = [
    {
      icon: Thermometer,
      title: 'Real-time Temperature Tracking',
      description: 'Monitor temperature and humidity across your entire cold chain network with precision sensors and IoT devices.'
    },
    {
      icon: Brain,
      title: 'Spoilage Prediction with AI',
      description: 'Advanced machine learning algorithms predict spoilage risks before they happen, saving millions in losses.'
    },
    {
      icon: Bell,
      title: 'Smart Alert Notifications',
      description: 'Instant alerts for temperature breaches, equipment failures, and critical supply chain events.'
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'AI-powered route planning ensures optimal delivery paths while maintaining cold chain integrity.'
    }
  ];

  const stats = [
    { number: '50M+', label: 'Products Tracked Daily' },
    { number: '99.8%', label: 'Uptime Reliability' },
    { number: '30%', label: 'Reduction in Spoilage' },
    { number: '24/7', label: 'Monitoring Coverage' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ColdChain IQ</h1>
                <p className="text-xs text-gray-500">by Walmart</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={onLogin}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Login
              </button>
              <button
                onClick={onGetStarted}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Revolutionizing
                  <span className="text-blue-600"> Cold Chain</span>
                  <span className="text-yellow-500"> Monitoring</span>
                  <br />at Walmart
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Track, Predict, and Optimize Perishable Shipments in Real Time with 
                  AI-powered insights and comprehensive supply chain visibility.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onGetStarted}
                  className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onLogin}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
                >
                  Login
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image/Animation */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <Truck size={20} className="text-blue-600" />
                        <span className="text-sm font-medium">Unit CU-8934</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">2.5°C</div>
                      <div className="text-xs text-gray-500">Normal Range</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield size={20} className="text-green-600" />
                        <span className="text-sm font-medium">Risk Score</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">Low</div>
                      <div className="text-xs text-gray-500">AI Prediction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 size={20} className="text-yellow-600" />
                        <span className="text-sm font-medium">Efficiency</span>
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">98.2%</div>
                      <div className="text-xs text-gray-500">This Month</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users size={20} className="text-blue-600" />
                        <span className="text-sm font-medium">Active Units</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">1,234</div>
                      <div className="text-xs text-gray-500">Nationwide</div>
                    </div>
                  </div>
                </div>
                
                {/* Animated elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cold Chain Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced platform combines IoT sensors, AI analytics, and real-time monitoring 
              to ensure product quality from warehouse to customer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Cold Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of logistics professionals who trust ColdChain IQ 
            to protect their perishable products and optimize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-lg shadow-lg"
            >
              Start Free Trial
            </button>
            <button
              onClick={onLogin}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Login to Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <div>
                <h3 className="font-bold">ColdChain IQ</h3>
                <p className="text-sm text-gray-400">by Walmart</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Walmart Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;