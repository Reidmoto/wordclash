import React, { useState } from 'react';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { RackGrid } from './components/RackGrid';
import { EnvironmentPanel } from './components/EnvironmentPanel';
import { EventLog } from './components/EventLog';
import { AlertsPanel } from './components/AlertsPanel';
import { Controls } from './components/Controls';

import {
  getInitialStats,
  getInitialEnvironment,
  getInitialRacks,
  getInitialAlerts,
  getInitialLogs,
} from './utils/initialData';

import { Rack, Alert, LogEntry, Stats, Environment } from './types';
import './App.css';

function App() {
  const [stats, setStats] = useState<Stats>(getInitialStats());
  const [environment, setEnvironment] = useState<Environment>(getInitialEnvironment());
  const [racks, setRacks] = useState<Rack[]>(getInitialRacks());
  const [alerts, setAlerts] = useState<Alert[]>(getInitialAlerts());
  const [logs, setLogs] = useState<LogEntry[]>(getInitialLogs());

  const handleSimulateSpike = () => {};
  const handleResetSystem = () => {};

  return (
    <div className="app">
      <Header />

      <div className="stats-grid">
        <StatsCard label="Servers Online" value={stats.serversOnline} />
        <StatsCard label="CPU Load" value={stats.cpuLoad} suffix="%" />
        <StatsCard label="Power Usage" value={stats.powerUsage} suffix=" MW" />
        <StatsCard label="Active Alerts" value={alerts.length} alert={alerts.length > 0} />
      </div>

      <Controls
        onSimulateSpike={handleSimulateSpike}
        onResetSystem={handleResetSystem}
      />

      <div className="main-grid">
        <RackGrid racks={racks} />
        <EnvironmentPanel environment={environment} />
        <EventLog logs={logs} />
        <AlertsPanel alerts={alerts} />
      </div>
    </div>
  );
}

export default App;