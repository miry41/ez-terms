import React from "react";

interface HeaderProps {
  headerText: string;
  actions?: React.ReactNode[];
}

export default function Header({ headerText, actions }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-green-100">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{`${headerText}`}</h1>
          </div>

          <div className="flex items-center space-x-4">
            {actions?.map((action, index) => (
              <React.Fragment key={index}>{action}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
