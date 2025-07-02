import { learningStatuses, documents } from "@/data/learnData";

interface LearningStatusOverviewProps {
  selectedDocument: string;
}

export function LearningStatusOverview({
  selectedDocument,
}: LearningStatusOverviewProps) {
  return (
    <div className="elegant-card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">学習進捗</h3>
      <div className="space-y-4">
        {learningStatuses.map((status) => {
          const selectedDoc =
            documents.find((doc) => doc.id === selectedDocument) ||
            documents[0];
          const statusKey = `${status.id}Words` as keyof typeof selectedDoc;
          const wordCount = selectedDoc[statusKey] as number;
          const percentage = Math.round((wordCount / selectedDoc.words) * 100);
          const IconComponent = status.icon;

          return (
            <div key={status.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <IconComponent className={`w-4 h-4 ${status.color}`} />
                  <span className="text-sm font-medium text-gray-900">
                    {status.label}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {wordCount} ({percentage}%)
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${status.bg
                    .replace("bg-", "bg-")
                    .replace("-100", "-500")}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
