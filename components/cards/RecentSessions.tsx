import { recentSessions } from "@/data/learnData";

export function RecentSessions() {
  return (
    <div className="elegant-card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        最近のセッション
      </h3>
      <div className="space-y-4">
        {recentSessions.map((session) => {
          const IconComponent = session.icon;
          return (
            <div
              key={session.id}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <IconComponent className={`w-5 h-5 ${session.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900 text-sm">
                    {session.mode}
                  </p>
                  <span className="text-xs text-gray-500">{session.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                  <span>{session.words}単語</span>
                  <span>•</span>
                  <span>{session.accuracy}%</span>
                  <span>•</span>
                  <span>{session.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
