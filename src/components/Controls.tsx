import React from 'react';

interface ControlsProps {
  onSimulateSpike: () => void;
  onResetSystem: () => void;
}

export function Controls({ onSimulateSpike, onResetSystem }: ControlsProps) {
  return (
    <div className="controls">
      <button className="btn btn-warning" onClick={onSimulateSpike}>
        Simulate Spike
      </button>
      <button className="btn btn-reset" onClick={onResetSystem}>
        Reset System
      </button>
    </div>
  );
}