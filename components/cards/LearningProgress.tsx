interface ProgressItem {
  percentage: number;
  label: string;
  description: string;
  color: string;
}

interface LearningProgressProps {
  items: ProgressItem[];
}

export const LearningProgress = ({ items }: LearningProgressProps) => {
  return (
    <div className="elegant-card p-6 animate-scale-in">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">今日の進捗</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <svg
                className="w-20 h-20 transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 40 * (1 - item.percentage / 100)
                  }`}
                  className={item.color}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">
                  {item.percentage}%
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{item.label}</p>
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
