import Link from "next/link";
import * as Icon from "@/lib/icons";
import { Document } from "@/types";
import { formatDate } from "@/utils/helpers";

interface RecentDocumentsProps {
  documents: Document[];
  viewAllHref?: string;
}

export const RecentDocuments = ({
  documents,
  viewAllHref = "/dashboard/documents",
}: RecentDocumentsProps) => {
  return (
    <div className="elegant-card p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          最近のドキュメント
        </h3>
        <Link
          href={viewAllHref}
          className="text-green-600 hover:text-green-700 text-sm font-medium"
        >
          すべて見る
        </Link>
      </div>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg gentle-hover"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Icon.Folder className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 text-sm">{doc.title}</p>
                <p className="text-xs text-gray-500">
                  {doc.words}単語 • {formatDate(doc.date)}
                </p>
              </div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {doc.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
