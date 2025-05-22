import React from 'react';

// Progress bar component
const ProgressBar = ({ value, color = "bg-primary" }: { value: number; color?: string }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className={`h-2.5 rounded-full ${color}`}
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

export default ProgressBar;