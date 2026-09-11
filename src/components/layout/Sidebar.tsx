import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShieldAlert, LayoutDashboard, Flame, FileText, AlertTriangle, 
  Truck, BarChart2, Settings, Radio 
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const links = [
    { to: '/dashboard', label: 'Command Center', icon: LayoutDashboard },
    { to: '/incidents', label: 'Fused Incidents', icon: Flame },
    { to: '/reports', label: 'Incoming Reports', icon: FileText },
    { to: '/conflicts', label: 'Contradiction Center', icon: AlertTriangle },
    { to: '/resources', label: 'Resources', icon: Truck },
    { to: '/analytics', label: 'Analytics', icon: BarChart2 },
    { to: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 text-slate-700 flex flex-col justify-between h-screen sticky top-0 shrink-0 shadow-sm">
      <div>
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3">
          <div className="bg-red-600 p-2 rounded-lg text-white">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-900 tracking-wider">RAKSHAK AI</h1>
            <p className="text-xs text-slate-500">Disaster Response Intelligence</p>
          </div>
        </div>

        <nav className="p-3 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-200">
        <div className="bg-slate-100 p-3 rounded-lg flex items-center justify-between border border-slate-200">
          <div className="flex items-center space-x-2">
            <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="text-xs font-semibold text-slate-700">DEMO MODE</span>
          </div>
          <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-700 font-medium">v1.0</span>
        </div>
      </div>
    </aside>
  );
};