"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { StatsCard } from "@/components/cards/StatsCard";
import { LearningStatusOverview } from "@/components/cards/LearningStatusOverview";
import { RecentSessions } from "@/components/cards/RecentSessions";
import StudyOptions from "@/components/StudyOptions";
import {
  BookOpen,
  Target,
  Brain,
  Zap,
  ChevronLeft,
  Clock,
  Star,
  Award,
  TrendingUp,
  Users,
  Gamepad2,
  Headphones,
  PenTool,
  Shuffle,
  RotateCcw,
  CheckCircle,
  XCircle,
  Volume2,
  Filter,
  Settings,
  FileText,
  Globe,
  Calendar,
  AlertCircle,
  Circle,
  MinusCircle,
  CheckCircle2,
  Trophy,
  Menu,
  X,
  Home,
  Folder,
  LogOut,
} from "lucide-react";
import { learningModes } from "@/data/learnData";

export default function LearnPage() {
  const [selectedMode, setSelectedMode] = useState("flashcards");
  const [selectedDocument, setSelectedDocument] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [difficulty, setDifficulty] = useState("mixed");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const headerAction = [
    <button
      onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
      className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
        showAdvancedFilters
          ? "border-green-500 bg-green-50 text-green-700"
          : "border-gray-200 hover:bg-gray-50"
      }`}
      key="filters"
    >
      <Filter className="w-4 h-4" />
      <span>詳細フィルター</span>
    </button>,
    <Link
      className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      key="settings"
      href="./settings"
    >
      <Settings className="w-4 h-4" />
      <span>設定</span>
    </Link>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header headerText="学習センター" actions={headerAction} />

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
            <StatsCard
              icon={<Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />}
              count={22}
              label={"連続日数"}
            />
            <StatsCard
              icon={<Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />}
              count={"2.5時間"}
              label={"今週の学習時間"}
            />
            <StatsCard
              icon={<Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />}
              count={"89%"}
              label={"平均スコア"}
            />
            {/* Daily Goal */}
            <div className="elegant-card p-4">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg
                    className="w-16 h-16 transform -rotate-90"
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
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                      className="text-green-500"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">75%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">今日の目標</p>
                <p className="text-xs text-gray-500">15/20単語</p>
              </div>
            </div>
          </div>

          {/* Quick Actions 横並び */}
          <div className="elegant-card px-6 py-4 mb-4">
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center space-x-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                <RotateCcw className="w-4 h-4" />
                <span>間違いを復習</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                <Shuffle className="w-4 h-4" />
                <span>ランダム練習</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-3 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                <Brain className="w-4 h-4" />
                <span>スマート復習</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Study Options */}
              <StudyOptions
                selectedDocument={selectedDocument}
                setSelectedDocument={setSelectedDocument}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                showAdvancedFilters={showAdvancedFilters}
                setShowAdvancedFilters={setShowAdvancedFilters}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Learning Status Overview */}
              <LearningStatusOverview selectedDocument={selectedDocument} />

              {/* Recent Sessions */}
              <RecentSessions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
