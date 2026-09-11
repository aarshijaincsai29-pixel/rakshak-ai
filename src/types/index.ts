export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type ReportSource = 'CITIZEN' | 'FIELD_WORKER' | 'HELPLINE' | 'SENSOR' | 'NEWS';
export type IncidentStatus = 'Verified' | 'Needs Verification' | 'Resolved';
export type ReportStatus = 'New' | 'Fused' | 'Verified' | 'Conflicting' | 'Rejected';

export interface Incident {
  id: string;
  title: string;
  type: string;
  location: string;
  coordinates: [number, number];
  affectedCount: number;
  reportCount: number;
  sourcesCount: number;
  confidence: number;
  priorityScore: number;
  severity: Severity;
  status: IncidentStatus;
  lastUpdated: string;
  firstDetected: string;
  summary: string;
  scoreBreakdown: {
    severity: number;
    affected: number;
    urgency: number;
    reliability: number;
    infrastructure: number;
  };
  sourcesBreakdown: Record<string, number>;
}

export interface Report {
  id: string;
  source: ReportSource;
  text: string;
  location: string;
  timestamp: string;
  incidentType: string;
  confidence: number;
  status: ReportStatus;
  fusedIncidentId?: string;
  reliabilityScore: number;
}

export interface Conflict {
  id: string;
  incidentId: string;
  location: string;
  reportA: string;
  reportB: string;
  fieldReport?: string;
  aiAssessment: string;
  confidence: number;
  status: 'Pending' | 'Resolved';
}

export interface Resource {
  id: string;
  name: string;
  type: 'Ambulance' | 'Fire Team' | 'Rescue Boat' | 'Personnel' | 'Shelter';
  status: 'Available' | 'Assigned' | 'En Route' | 'Unavailable';
  location: string;
  distanceKm: number;
  assignedIncidentId?: string;
}

export interface AnalyticsSnapshot {
  reportsOverTime: { time: string; reports: number; fused: number }[];
  typeDistribution: { name: string; value: number }[];
  sourceMix: { name: string; value: number }[];
}
