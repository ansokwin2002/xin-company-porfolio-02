import React from 'react';
import AdminNavigation from './AdminNavigation';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNavigation />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          {/* Admin specific header content, e.g., user menu, notifications */}
          <div>
            <span className="text-gray-700">Welcome, Admin!</span>
          </div>
        </header>
        <main className="flex-1 p-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to your Admin Dashboard</h2>
            <p className="text-gray-600">Use the navigation on the left to manage your website content.</p>
            {/* Placeholder for dashboard widgets/summary */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-blue-800">Total Projects</h3>
                <p className="text-3xl font-bold text-blue-600">50+</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-800">New Messages</h3>
                <p className="text-3xl font-bold text-green-600">5</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-yellow-800">Pending Tasks</h3>
                <p className="text-3xl font-bold text-yellow-600">12</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
