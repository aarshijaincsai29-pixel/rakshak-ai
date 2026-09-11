import React from 'react';
import { Search, Bell, User } from 'lucide-react';

interface TopbarProps {
  title: string;
}

export const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur px-6 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <h1 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h1>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search reports, locations..."
            className="bg-slate-50 border border-slate-200 text-sm rounded-lg pl-9 pr-4 py-1.5 text-slate-800 focus:outline-none focus:border-blue-500 w-64 placeholder-slate-400"
          />
        </div>

        <button className="relative p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-900">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
          <div className="bg-blue-50 text-blue-600 p-2 rounded-lg border border-blue-200">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-900">EOC Operator 01</div>
            <div className="text-[10px] text-slate-500">Command Center</div>
          </div>
        </div>
      </div>
    </header>
  );
};
