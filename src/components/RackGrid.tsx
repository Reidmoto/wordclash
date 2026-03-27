import React from 'react';
import { Rack } from '../types';

interface RackGridProps {
  racks: Rack[];
}

export function RackGrid({ racks }: RackGridProps) {
  return (
    <div className="panel">
      <h2 className="panel-title">Rack Status</h2>
      <div className="rack-grid">
        {racks.map((rack) => (
          <div
            key={rack.id}
            className={`rack rack-${rack.status}`}
            title={`Rack ${rack.id}: ${rack.status}`}
          >
            <div className="rack-id">R{rack.id}</div>
            <div className="rack-indicator"></div>
          </div>
        ))}
      </div>
    </div>
  );
}