const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. Root Health Check Endpoint
app.get('/', (req, res) => {
  res.send('RAKSHAK AI Backend API Running');
});

// 2. User Disaster Report Submission Endpoint
app.post('/api/reports', (req, res) => {
  const { title, location, severity, description } = req.body;

  console.log('New Disaster Report Received:', req.body);

  res.status(201).json({
    success: true,
    message: 'Report submitted successfully!',
    report: {
      id: Date.now(),
      title,
      location,
      severity,
      description,
      timestamp: new Date()
    }
  });
});

// 3. USGS Earthquake Feed Endpoint (No Key Required)
app.get('/api/live-disasters', async (req, res) => {
  try {
    const response = await fetch(
      'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'
    );
    const data = await response.json();

    const disasters = data.features.map((feature) => ({
      id: feature.id,
      title: feature.properties.title,
      magnitude: feature.properties.mag,
      place: feature.properties.place,
      time: new Date(feature.properties.time),
      url: feature.properties.url,
      coordinates: {
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        depth: feature.geometry.coordinates[2]
      }
    }));

    res.status(200).json({
      success: true,
      source: 'USGS',
      count: disasters.length,
      data: disasters
    });
  } catch (error) {
    console.error('Error fetching USGS data:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch USGS disaster data'
    });
  }
});

// 4. GDACS Global Multi-Hazard Feed Endpoint (No Key Required)
app.get('/api/gdacs-events', async (req, res) => {
  try {
    const response = await fetch(
      'https://www.gdacs.org/gdacsapi/api/events/geteventlist/SEARCH'
    );
    const data = await response.json();

    const events = (data.features || []).map((feature) => ({
      id: feature.properties?.eventid || feature.id,
      name: feature.properties?.name || feature.properties?.eventname,
      eventType: feature.properties?.eventtype, // EQ (Earthquake), FL (Flood), TC (Cyclone), VO (Volcano), WF (Wildfire)
      alertLevel: feature.properties?.alertlevel, // Green, Orange, Red
      country: feature.properties?.country,
      description: feature.properties?.description,
      fromDate: feature.properties?.fromdate,
      toDate: feature.properties?.todate,
      coordinates: feature.geometry?.coordinates || []
    }));

    res.status(200).json({
      success: true,
      source: 'GDACS',
      count: events.length,
      data: events
    });
  } catch (error) {
    console.error('Error fetching GDACS events:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch GDACS disaster data'
    });
  }
});

// 5. NASA FIRMS Active Fire Feed Endpoint (Requires NASA MAP_KEY)
app.get('/api/fire-events', async (req, res) => {
  const mapKey = process.env.NASA_FIRMS_MAP_KEY;

  if (!mapKey) {
    return res.status(500).json({
      success: false,
      message: 'NASA_FIRMS_MAP_KEY is missing from backend .env file'
    });
  }

  try {
    const response = await fetch(
      `https://firms.modaps.eosdis.nasa.gov/api/area/csv/${mapKey}/VIIRS_SNPP_NRT/world/1`
    );
    const csvData = await response.text();

    res.status(200).json({
      success: true,
      source: 'NASA FIRMS',
      rawCsv: csvData
    });
  } catch (error) {
    console.error('Error fetching NASA FIRMS data:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch NASA FIRMS fire data'
    });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});