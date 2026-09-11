import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

const titles: Record<string, string> = {
  '/dashboard': 'Crisis Command Center',
  '/incidents': 'Fused Incidents',
  '/reports': 'Incoming Reports',
  '/conflicts': 'Contradiction Center',
  '/resources': 'Resource Dispatch',
  '/analytics': 'Response Analytics',
  '/settings': 'Settings & Demo Controls',
};

export function AppLayout() {
  const { pathname } = useLocation();
  const title =
    titles[pathname] ??
    (pathname.startsWith('/incidents/') ? 'Incident Inspector' : 'Rakshak AI');

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar title={title} />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
