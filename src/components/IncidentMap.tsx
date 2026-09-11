import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { mockIncidents } from '../data/mockData';
import type { Severity } from '../types';

const colors: Record<Severity, string> = {
  CRITICAL: '#ef4444',
  HIGH: '#f97316',
  MEDIUM: '#f59e0b',
  LOW: '#64748b',
};

export function IncidentMap({ focusId }: { focusId?: string }) {
  const navigate = useNavigate();
  const focus = mockIncidents.find((i) => i.id === focusId);
  const center = focus?.coordinates ?? ([26.18, 91.75] as [number, number]);

  return (
    <MapContainer
      center={center}
      zoom={focus ? 14 : 12}
      className="h-full w-full rounded-xl"
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {mockIncidents.map((incident) => (
        <CircleMarker
          key={incident.id}
          center={incident.coordinates}
          radius={incident.severity === 'CRITICAL' ? 14 : 10}
          pathOptions={{
            color: colors[incident.severity],
            fillColor: colors[incident.severity],
            fillOpacity: 0.55,
            weight: 2,
          }}
          eventHandlers={{
            click: () => navigate(`/incidents/${incident.id}`),
          }}
        >
          <Popup>
            <div className="text-slate-900 text-sm">
              <strong>{incident.id}</strong>
              <div>{incident.title}</div>
              <div>Priority {incident.priorityScore}</div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
