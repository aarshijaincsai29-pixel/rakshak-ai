# Rakshak AI

Frontend hackathon prototype: disaster-response command dashboard.

Messy reports from citizens, field workers, helplines, sensors, and news are **grouped into fused incidents**, **flagged when sources contradict**, and **ranked by priority** so operators know what to act on first.

All data is mock. There is no live model.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Demo path

1. Command Center — KPIs, map, live feed, priority queue
2. Click **RK-1042** (school flood) for fusion + dispatch
3. **RK-1043** / Contradiction Center — bridge collapse vs. cars still crossing
4. Incoming Reports — source filters and fused IDs
5. Analytics — intake vs. fused clusters

## Stack

Vite, React 18, TypeScript, Tailwind, React Router, Leaflet, Recharts.
