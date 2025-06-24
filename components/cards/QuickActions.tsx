import Link from "next/link";
import * as Icon from "@/lib/icons";

interface QuickAction {
  href: string;
  icon: any;
  title: string;
  description: string;
  gradient: string;
  hoverColor: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="elegant-card p-6 animate-slide-up">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        クイックアクション
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <Link href={action.href} key={index} className="group">
              <div
                className={`p-6 rounded-xl border-2 border-gray-200 hover:border-${action.hoverColor} transition-all duration-300 hover-lift group-hover:bg-${action.hoverColor}50`}
              >
                <div
                  className={`w-12 h-12 ${action.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
