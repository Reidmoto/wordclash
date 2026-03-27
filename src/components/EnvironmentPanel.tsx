import React from 'react';
import { Environment } from '../types';

interface EnvironmentPanelProps {
  environment: Environment;
}

export function EnvironmentPanel({ environment }: EnvironmentPanelProps) {
  return (
    <div className="panel">
      <h2 className="panel-title">Cooling & Environment</h2>

      <div className="environment-grid">
        <div className="env-metric">
          <div className="env-label">Temperature</div>
          <div className="env-value">
            {environment.temperature}
            <span className="env-unit">°C</span>
          </div>
        </div>

        <div className="env-metric">
          <div className="env-label">Airflow</div>
          <div className="env-value">
            {environment.airflow}
            <span className="env-unit">%</span>
          </div>
        </div>

        <div className="env-metric">
          <div className="env-label">Humidity</div>
          <div className="env-value">
            {environment.humidity}
            <span className="env-unit">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}