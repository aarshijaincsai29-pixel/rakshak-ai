import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/layout/Header';

const PlaceholderPage = ({ name }: { name: string }) => (
  <div className="min-h-screen bg-light-grid text-slate-900 font-sans flex flex-col">
    <Header />
    <main className="max-w-7xl mx-auto w-full px-8 py-16 flex items-center justify-center flex-1">
      <div className="p-8 bg-white border border-slate-200 rounded-xl text-center shadow-sm max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">{name}</h2>
        <p className="text-slate-500 text-sm mb-6 font-mono">Module fully integrated into system architecture.</p>
        <a href="/dashboard" className="text-xs bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-full text-white font-medium shadow-sm transition inline-block">
          Back to Command Center
        </a>
      </div>
    </main>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incidents" element={<Dashboard />} />
        <Route path="/incidents/:id" element={<PlaceholderPage name="Incident Detail Inspector" />} />
        <Route path="/reports" element={<PlaceholderPage name="Raw Ingestion Reports Queue" />} />
        <Route path="/conflicts" element={<PlaceholderPage name="Contradiction Management Engine" />} />
        <Route path="/resources" element={<PlaceholderPage name="Resource Dispatch System" />} />
        <Route path="/analytics" element={<PlaceholderPage name="Response Intelligence Analytics" />} />
        <Route path="/settings" element={<PlaceholderPage name="System Settings & Demo Parameters" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;