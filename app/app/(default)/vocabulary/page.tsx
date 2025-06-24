"use client";

import { useState } from "react";
import Link from "next/link";
import * as Icon from "@/lib/icons";
import { StatsCard } from "@/components/cards/StatsCard";
import SearchPanel from "@/components/SearchPanel";
import { vocabularyWords } from "@/components/ExampleVoc";
import VocabularyCard from "@/components/cards/VocabularyCard";
import Header from "@/components/Header";

export default function VocabularyPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const headerAction = [
    <div className="relative inline-block" key="export-dev">
      {/* オーバーレイバッジ */}
      <div className="absolute -top-2 -right-2 z-10 bg-yellow-500 text-white text-sm font-bold px-2 py-0.5 rounded-full shadow-md border">
        開発中
      </div>

      {/* 半透明ボタン */}
      <button
        className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg bg-white opacity-50 cursor-not-allowed"
        disabled
      >
        <Icon.Download className="w-4 h-4" />
        <span>エクスポート</span>
      </button>
    </div>,
    <Link
      className="flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
      key="add"
      href="./extract"
    >
      <Icon.Plus className="w-4 h-4" />
      <span>単語を追加</span>
    </Link>,
  ];

  const categories = [
    "all",
    "research",
    "academic",
    "science",
    "technology",
    "medicine",
  ];
  const difficulties = ["all", "beginner", "intermediate", "advanced"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "初級";
      case "intermediate":
        return "中級";
      case "advanced":
        return "上級";
      default:
        return "不明";
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "research":
        return "研究";
      case "academic":
        return "学術";
      case "science":
        return "科学";
      case "technology":
        return "テクノロジー";
      case "medicine":
        return "医学";
      default:
        return category;
    }
  };

  const getMasteryColor = (mastery: number) => {
    if (mastery >= 80) return "text-green-600";
    if (mastery >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const filteredWords = vocabularyWords.filter((word) => {
    const matchesSearch =
      word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || word.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" || word.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header headerText="マイ単語帳" actions={headerAction} />

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={
                <Icon.BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
              }
              count={vocabularyWords.length}
              label={"総単語数"}
            />
            <StatsCard
              icon={
                <Icon.Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              }
              count={vocabularyWords.filter((w) => w.mastery >= 80).length}
              label={"習得済み"}
            />

            <StatsCard
              icon={
                <Icon.Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              }
              count={
                vocabularyWords.filter((w) => w.mastery > 0 && w.mastery < 80)
                  .length
              }
              label={"学習中"}
            />
            <StatsCard
              icon={
                <Icon.Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              }
              count={`${Math.round(
                vocabularyWords.reduce((acc, w) => acc + w.mastery, 0) /
                  vocabularyWords.length
              )}%`}
              label={"平均習得率"}
            />
          </div>

          {/* Filters and Search */}
          <div className="elegant-card p-6 mb-8">
            <SearchPanel
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
              sortBy={sortBy}
              setSortBy={setSortBy}
              viewMode={viewMode}
              setViewMode={setViewMode}
              categories={categories}
              difficulties={difficulties}
              getCategoryText={getCategoryText}
              getDifficultyText={getDifficultyText}
            />
          </div>
          {/* Vocabulary Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredWords.map((word) => (
              <VocabularyCard
                key={word.id}
                word={word}
                viewMode={viewMode}
                getDifficultyColor={getDifficultyColor}
                getDifficultyText={getDifficultyText}
                getCategoryText={getCategoryText}
                getMasteryColor={getMasteryColor}
              />
            ))}
          </div>

          {filteredWords.length === 0 && (
            <div className="text-center py-12">
              <Icon.BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                単語が見つかりません
              </h3>
              <p className="text-gray-600">
                検索条件やフィルターを調整してみてください。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
