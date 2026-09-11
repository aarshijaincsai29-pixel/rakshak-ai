import React from 'react';
import { Header } from '../components/layout/Header';
import { AlertCircle, ArrowUpRight } from 'lucide-react';
import { mockIncidents } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light-grid text-slate-900 font-sans">
      <Header />

      <main className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Section Tag */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono uppercase tracking-widest text-pink-600 font-bold bg-pink-50 px-2.5 py-1 rounded border border-pink-200 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" /> LIVE CRISIS ALERTS
          </span>
          <span className="text-xs font-mono text-slate-500">Actionable intelligence requiring immediate dispatch</span>
        </div>

        {/* 3 Accent Border Alert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-600 p-5 rounded-r-md shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <h4 className="font-semibold text-slate-900 text-base">Water levels risen 6.2% at Brahmaputra Cell.</h4>
            </div>
            <div className="ml-4">
              <span className="inline-block bg-emerald-50 text-emerald-800 font-mono text-xs px-2.5 py-0.5 rounded border border-emerald-200">
                Guwahati Sector • +1.2m in 24h
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-amber-500 p-5 rounded-r-md shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h4 className="font-semibold text-slate-900 text-base">Trapped civilian count updated to 1,840.</h4>
            </div>
            <div className="ml-4">
              <span className="inline-block bg-amber-50 text-amber-800 font-mono text-xs px-2.5 py-0.5 rounded border border-amber-200">
                ABC School Zone • urgent rescue
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-red-600 p-5 rounded-r-md shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <h4 className="font-semibold text-slate-900 text-base">Rescue boats available nearby at 4 units.</h4>
            </div>
            <div className="ml-4">
              <span className="inline-block bg-red-50 text-red-800 font-mono text-xs px-2.5 py-0.5 rounded border border-red-200">
                Central Staging Depot • 2.1 km distance
              </span>
            </div>
          </div>
        </div>

        {/* Full-width Purple Status Banner */}
        <div className="bg-purple-50/70 border border-purple-200/80 p-4 rounded-xl flex items-center justify-between">
          <p className="text-sm font-medium text-purple-950">
            <span className="font-bold text-purple-900">Incident Fusion Active:</span> 47 raw report clusters pooled into 1,240 verified alerts. Direct NDRF dispatch active with Regional Cell B.
          </p>
          <button onClick={() => navigate('/incidents')} className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 shrink-0">
            Incidents View
          </button>
        </div>

        {/* Title Header Section */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">01 NDRF AGGREGATION ENGINE</span>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Brahmaputra Regional Command Cell
              </h1>
            </div>
            <span className="text-xs font-mono text-slate-400">CELL-ASSAM-04 • 6 FLOODED DISTRICTS</span>
          </div>

          {/* Bottom Big Numerical Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 py-6">
            <div className="pr-6">
              <div className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">6</div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">TEAMS AGGREGATED</div>
            </div>

            <div className="px-6">
              <div className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                1,240 <span className="text-xl font-normal text-slate-500 font-mono">civilians</span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">TOTAL EVACUATED</div>
            </div>

            <div className="px-6">
              <div className="text-5xl font-extrabold text-slate-900 tracking-tight mb-2">8</div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">ACTIVE HELICOPTER DROPS</div>
            </div>

            <div className="pl-6 flex flex-col justify-between">
              <div className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2.5 rounded-full justify-between cursor-pointer hover:bg-slate-800" onClick={() => navigate('/conflicts')}>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold font-mono">RAKSHAK AI ENGINE</span>
                </div>
                <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300 font-mono">v3.7 Active</span>
              </div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mt-4">VERIFIED REPORTERS</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
                      
              
                