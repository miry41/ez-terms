import React from "react";

type Props = {
  icon: React.ReactNode;
  count: number | string;
  label: string;
};

export const StatsCard: React.FC<Props> = ({ icon, count, label }) => (
  <div className="elegant-card p-6 text-center gentle-hover">
    {icon}
    <div className="text-2xl font-bold text-gray-900">{count}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);
