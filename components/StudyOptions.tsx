"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight, BarChart3, Filter } from "lucide-react";
import { learningStatuses, documents, categories } from "@/data/learnData";

interface StudyOptionsProps {
  selectedDocument: string;
  setSelectedDocument: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  difficulty: string;
  setDifficulty: (value: string) => void;
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: (value: boolean) => void;
}

export default function StudyOptions({
  selectedDocument,
  setSelectedDocument,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  difficulty,
  setDifficulty,
  showAdvancedFilters,
  setShowAdvancedFilters,
}: StudyOptionsProps) {
  // 選択された条件に基づいて利用可能な単語数を計算
  const getAvailableWords = () => {
    const selectedDoc =
      documents.find((doc) => doc.id === selectedDocument) || documents[0];
    const selectedCat =
      categories.find((cat) => cat.id === selectedCategory) || categories[0];

    if (selectedStatus === "all") {
      return Math.min(selectedDoc.words, selectedCat.words);
    }

    const statusKey = `${selectedStatus}Words` as keyof typeof selectedDoc;
    return Math.min(
      selectedDoc[statusKey] as number,
      selectedCat[statusKey] as number
    );
  };

  return (
    <div className="elegant-card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">学習設定</h3>

      {/* Basic Filters */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            ドキュメント
          </label>
          <select
            value={selectedDocument}
            onChange={(e) => setSelectedDocument(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {documents.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} ({doc.words}単語)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            カテゴリ
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.words}単語)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Learning Status Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          学習ステータス
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedStatus("all")}
            className={`p-3 rounded-lg border-2 text-left transition-colors ${
              selectedStatus === "all"
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center space-x-2 mb-1">
              <BarChart3 className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-sm">全てのステータス</span>
            </div>
            <p className="text-xs text-gray-500">全ての学習段階</p>
          </button>

          {learningStatuses.map((status) => {
            const IconComponent = status.icon;
            const selectedDoc =
              documents.find((doc) => doc.id === selectedDocument) ||
              documents[0];
            const statusKey = `${status.id}Words` as keyof typeof selectedDoc;
            const wordCount = selectedDoc[statusKey] as number;

            return (
              <button
                key={status.id}
                onClick={() => setSelectedStatus(status.id)}
                className={`p-3 rounded-lg border-2 text-left transition-colors ${
                  selectedStatus === status.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <IconComponent className={`w-4 h-4 ${status.color}`} />
                  <span className="font-medium text-sm">{status.label}</span>
                </div>
                <p className="text-xs text-gray-500">
                  {status.description} ({wordCount})
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="border-t pt-6 space-y-6 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                難易度レベル
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="mixed">混合レベル</option>
                <option value="beginner">初級のみ</option>
                <option value="intermediate">中級のみ</option>
                <option value="advanced">上級のみ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                セッション時間
              </label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="5">5分</option>
                <option value="10">10分</option>
                <option value="15">15分</option>
                <option value="20">20分</option>
                <option value="30">30分</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                単語数制限
              </label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="10">10単語</option>
                <option value="20">20単語</option>
                <option value="50">50単語</option>
                <option value="all">全て利用可能</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                復習優先度
              </label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="recent">最近追加</option>
                <option value="difficult">最も困難</option>
                <option value="forgotten">よく忘れる</option>
                <option value="random">ランダム順</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Status Summary */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          選択した単語セットの概要
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          {learningStatuses.map((status) => {
            const selectedDoc =
              documents.find((doc) => doc.id === selectedDocument) ||
              documents[0];
            const statusKey = `${status.id}Words` as keyof typeof selectedDoc;
            const wordCount = selectedDoc[statusKey] as number;
            const IconComponent = status.icon;

            return (
              <div key={status.id} className="bg-white rounded-lg p-3">
                <IconComponent
                  className={`w-5 h-5 ${status.color} mx-auto mb-1`}
                />
                <div className="text-lg font-bold text-gray-900">
                  {wordCount}
                </div>
                <div className="text-xs text-gray-600">{status.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/session">
          <div
            role="button"
            className="flex items-center space-x-3 px-8 py-4 gradient-primary text-white rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity hover-lift"
          >
            <Play className="w-6 h-6" />
            <span>学習セッションを開始</span>
            <span className="bg-white/20 px-2 py-1 rounded-lg text-sm">
              {getAvailableWords()}単語
            </span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
