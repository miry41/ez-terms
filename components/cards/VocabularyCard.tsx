"use client";

import * as Icons from "@/lib/icons";

export default function VocabularyCard({
  word,
  viewMode,
  getDifficultyColor,
  getDifficultyText,
  getCategoryText,
  getMasteryColor,
}: {
  word: any;
  viewMode: string;
  getDifficultyColor: (d: string) => string;
  getDifficultyText: (d: string) => string;
  getCategoryText: (c: string) => string;
  getMasteryColor: (m: number) => string;
}) {
  return (
    <div
      className={`elegant-card p-6 hover-lift ${
        viewMode === "list" ? "flex items-center justify-between" : ""
      }`}
    >
      {viewMode === "grid" ? (
        <>
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {word.word}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{word.pronunciation}</p>
              <div className="flex items-center space-x-2 mb-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    word.difficulty
                  )}`}
                >
                  {getDifficultyText(word.difficulty)}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  {getCategoryText(word.category)}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Icons.Volume2 className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Icons.MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            {word.definition}
          </p>

          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">例文:</p>
            <p className="text-sm text-gray-600 italic">
              &ldquo;{word.examples[0]}&rdquo;
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">習得進捗</span>
                <span
                  className={`text-xs font-medium ${getMasteryColor(
                    word.mastery
                  )}`}
                >
                  {word.mastery}%
                </span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${word.mastery}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-gray-500">
                追加日: {new Date(word.dateAdded).toLocaleDateString("ja-JP")}
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors">
                  <Icons.Play className="w-3 h-3" />
                  <span>練習</span>
                </button>
                <button className="p-1 text-gray-400 hover:text-blue-600">
                  <Icons.Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {word.word}
                </h3>
                <p className="text-sm text-gray-500">{word.pronunciation}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    word.difficulty
                  )}`}
                >
                  {getDifficultyText(word.difficulty)}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  {getCategoryText(word.category)}
                </span>
              </div>
            </div>
            <p className="text-gray-700 mt-2 text-sm">{word.definition}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div
                className={`text-lg font-bold ${getMasteryColor(word.mastery)}`}
              >
                {word.mastery}%
              </div>
              <div className="text-xs text-gray-500">習得率</div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Icons.Volume2 className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                <Icons.Play className="w-4 h-4" />
                <span>練習</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Icons.MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
