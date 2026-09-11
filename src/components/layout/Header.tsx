import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldAlert, Bell, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const navItems = [
    { to: '/dashboard', label: 'Incidents' },
    { to: '/reports', label: 'Reports Ingestion' },
    { to: '/conflicts', label: 'Contradiction Center' },
    { to: '/resources', label: 'Resources' },
    { to: '/analytics', label: 'Analytics' },
  ];

  return (
    <header className="w-full bg-[#fcfcf9] border-b border-slate-200 px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-8">
        {/* Brand */}
        <div className="flex items-center space-x-2.5">
          <ShieldAlert className="w-5 h-5 text-red-600" />
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider text-slate-900 leading-none">RAKSHAK AI</span>
            <span className="text-[10px] text-slate-500 font-mono mt-0.5">Disaster Response</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-slate-900 font-semibold border-b-2 border-slate-900 pb-1' : 'text-slate-500 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Action Controls */}
      <div className="flex items-center space-x-4">
        {/* Mode Selector Pill */}
        <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
          <span className="px-3 py-1 text-xs font-semibold text-slate-600">COMMAND</span>
          <span className="px-3 py-1 text-xs font-bold text-white bg-slate-900 rounded-full">EOC CELL</span>
        </div>

        {/* Language Selector */}
        <button className="flex items-center space-x-1.5 px-3 py-1.5 border border-slate-200 rounded-full text-xs font-medium text-slate-700 bg-white">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>English</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>

        <span className="text-xs font-mono text-slate-400">+91 98765 43210</span>

        <button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition">
          New Incident
        </button>

        <button className="text-xs border border-slate-200 px-3 py-2 rounded-full font-medium text-slate-700 bg-white hover:bg-slate-50">
          Sign out
        </button>
      </div>
    </header>
  );
};