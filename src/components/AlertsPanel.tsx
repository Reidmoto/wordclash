import React from 'react';
import { Alert } from '../types';

interface AlertsPanelProps {
  alerts: Alert[];
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {
  return (
    <div className="panel panel-alerts">
      <h2 className="panel-title">Active Alerts</h2>

      <div className="alerts-container">
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <span className="alert-message">{alert.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}