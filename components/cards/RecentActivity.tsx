import Link from "next/link";
import { Activity } from "@/types";

interface RecentActivityProps {
  activities: Activity[];
  viewAllHref?: string;
}

export const RecentActivity = ({
  activities,
  viewAllHref = "/dashboard/analytics",
}: RecentActivityProps) => {
  return (
    <div className="elegant-card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          最近のアクティビティ
        </h3>
        <Link
          href={viewAllHref}
          className="text-green-600 hover:text-green-700 text-sm font-medium"
        >
          すべて見る
        </Link>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div
              key={activity.id}
              className={`flex items-center space-x-4 p-4 ${activity.bg} rounded-lg gentle-hover`}
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <IconComponent className={`w-5 h-5 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {activity.type === "mastered"
                    ? `「${activity.word}」を習得`
                    : activity.type === "practiced"
                    ? `${activity.word}を完了`
                    : `${activity.word}を抽出`}
                </p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
              {activity.type === "mastered" && (
                <div className="text-green-600 font-medium">+10 XP</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
