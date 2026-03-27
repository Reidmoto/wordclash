export type RackStatus = 'healthy' | 'warning' | 'critical';

export interface Rack {
  id: number;
  status: RackStatus;
}

export interface Alert {
  id: number;
  type: 'warning' | 'critical';
  message: string;
}

export interface LogEntry {
  id: number;
  timestamp: string;
  message: string;
  type: 'info' | 'warning' | 'critical';
}

export interface Stats {
  serversOnline: number;
  cpuLoad: number;
  powerUsage: number;
  activeAlerts: number;
}

export interface Environment {
  temperature: number;
  airflow: number;
  humidity: number;
}