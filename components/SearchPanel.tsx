import { List, Search, Grid } from "lucide-react";
import React from "react";

interface SearchPanelProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  viewMode: string;
  setViewMode: (value: string) => void;
  categories: string[];
  difficulties: string[];
  getCategoryText: (category: string) => string;
  getDifficultyText: (difficulty: string) => string;
}

function SearchPanel({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  categories,
  difficulties,
  getCategoryText,
  getDifficultyText,
}: SearchPanelProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="単語を検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-full sm:w-64"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "all"
                ? "全てのカテゴリ"
                : getCategoryText(category)}
            </option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty === "all"
                ? "全てのレベル"
                : getDifficultyText(difficulty)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="recent">最近追加</option>
          <option value="alphabetical">アルファベット順</option>
          <option value="mastery">習得レベル</option>
          <option value="difficulty">難易度</option>
        </select>

        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg ${
              viewMode === "grid"
                ? "bg-green-100 text-green-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg ${
              viewMode === "list"
                ? "bg-green-100 text-green-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
