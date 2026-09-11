import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { mockConflicts, mockResources } from '../data/mockData';
import type { Conflict, Resource } from '../types';

interface OpsState {
  conflicts: Conflict[];
  resources: Resource[];
  resolveConflict: (id: string) => void;
  dispatchResource: (resourceId: string, incidentId: string) => void;
}

const OpsContext = createContext<OpsState | null>(null);

export function OpsProvider({ children }: { children: ReactNode }) {
  const [conflicts, setConflicts] = useState(mockConflicts);
  const [resources, setResources] = useState(mockResources);

  const value = useMemo<OpsState>(
    () => ({
      conflicts,
      resources,
      resolveConflict: (id) =>
        setConflicts((prev) => prev.map((c) => (c.id === id ? { ...c, status: 'Resolved' } : c))),
      dispatchResource: (resourceId, incidentId) =>
        setResources((prev) =>
          prev.map((r) =>
            r.id === resourceId ? { ...r, status: 'Assigned', assignedIncidentId: incidentId } : r,
          ),
        ),
    }),
    [conflicts, resources],
  );

  return <OpsContext.Provider value={value}>{children}</OpsContext.Provider>;
}

export function useOps() {
  const ctx = useContext(OpsContext);
  if (!ctx) throw new Error('useOps must be used inside OpsProvider');
  return ctx;
}
