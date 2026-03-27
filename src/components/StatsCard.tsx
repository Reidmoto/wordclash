import React from 'react';

interface StatsCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  alert?: boolean;
}

export function StatsCard({ label, value, suffix = '', alert = false }: StatsCardProps) {
  return (
    <div className={`stats-card ${alert ? 'stats-card-alert' : ''}`}>
      <div className="stats-label">{label}</div>
      <div className="stats-value">
        {value}
        {suffix && <span className="stats-suffix">{suffix}</span>}
      </div>
    </div>
  );
}