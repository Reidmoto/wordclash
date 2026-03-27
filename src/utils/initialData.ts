import { Rack, Alert, LogEntry, Stats, Environment, RackStatus } from '../types';

export const getInitialStats = (): Stats => ({
  serversOnline: 124,
  cpuLoad: 62,
  powerUsage: 4.8,
  activeAlerts: 3,
});

export const getInitialEnvironment = (): Environment => ({
  temperature: 22,
  airflow: 85,
  humidity: 45,
});

export const getInitialRacks = (): Rack[] => {
  const racks: Rack[] = [];

  for (let i = 1; i <= 24; i++) {
    let status: RackStatus = 'healthy';

    if (i === 7 || i === 15) status = 'warning';
    if (i === 19) status = 'critical';

    racks.push({ id: i, status });
  }

  return racks;
};

export const getInitialAlerts = (): Alert[] => [
  { id: 1, type: 'warning', message: 'Rack 7: Temperature above threshold' },
  { id: 2, type: 'warning', message: 'Rack 15: High CPU usage detected' },
  { id: 3, type: 'critical', message: 'Rack 19: Critical cooling failure' },
];

export const getInitialLogs = (): LogEntry[] => [
  { id: 1, timestamp: '22:45:12', message: 'System startup complete', type: 'info' },
  { id: 2, timestamp: '22:45:18', message: 'All racks initialized successfully', type: 'info' },
  { id: 3, timestamp: '22:45:23', message: 'Rack 7 temperature warning', type: 'warning' },
  { id: 4, timestamp: '22:45:31', message: 'Rack 19 cooling system failure detected', type: 'critical' },
];

let logIdCounter = 5;

export function createLogEntry(
  message: string,
  type: 'info' | 'warning' | 'critical'
): LogEntry {
  const now = new Date();
  const timestamp = now.toLocaleTimeString('en-US', { hour12: false });
  return {
    id: logIdCounter++,
    timestamp,
    message,
    type,
  };
}