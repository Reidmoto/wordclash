import React from 'react';
import { LogEntry } from '../types';

interface EventLogProps {
  logs: LogEntry[];
}

export function EventLog({ logs }: EventLogProps) {
  return (
    <div className="panel panel-log">
      <h2 className="panel-title">Event Log</h2>
      <div className="log-container">
        {logs.map((log) => (
          <div key={log.id} className={`log-entry log-${log.type}`}>
            <span className="log-timestamp">{log.timestamp}</span>
            <span className="log-message">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}