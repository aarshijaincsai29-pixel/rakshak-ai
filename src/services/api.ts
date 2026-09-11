import { mockAnalytics, mockConflicts, mockIncidents, mockReports, mockResources } from '../data/mockData';
import type { Conflict, Incident, Report, Resource } from '../types';

export const api = {
  getIncidents: async (): Promise<Incident[]> => Promise.resolve(mockIncidents),
  getIncidentById: async (id: string): Promise<Incident | undefined> =>
    Promise.resolve(mockIncidents.find((inc) => inc.id === id)),
  getReports: async (): Promise<Report[]> => Promise.resolve(mockReports),
  getReportsForIncident: async (id: string): Promise<Report[]> =>
    Promise.resolve(mockReports.filter((r) => r.fusedIncidentId === id)),
  getConflicts: async (): Promise<Conflict[]> => Promise.resolve(mockConflicts),
  getResources: async (): Promise<Resource[]> => Promise.resolve(mockResources),
  getAnalytics: async () => Promise.resolve(mockAnalytics),
};
