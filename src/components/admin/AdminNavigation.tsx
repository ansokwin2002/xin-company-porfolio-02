import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Settings, Users, LayoutDashboard, LogOut } from 'lucide-react';

const AdminNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Manage Portfolio', icon: Briefcase, path: '/admin/portfolio' },
    { name: 'Manage Services', icon: Settings, path: '/admin/services' },
    { name: 'Manage Testimonials', icon: Users, path: '/admin/testimonials' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-md font-medium transition-colors
              ${location.pathname === item.path ? 'bg-red-600 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center space-x-3 p-3 rounded-md font-medium text-gray-300 hover:bg-gray-700 w-full">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminNavigation;
