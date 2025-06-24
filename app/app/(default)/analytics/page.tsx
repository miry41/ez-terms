"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  TrendingUp,
  Target,
  Clock,
  Star,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Award,
  Zap,
  Brain,
  ChevronLeft,
  Filter,
  Download,
  Menu,
  X,
  Home,
  Settings,
  Folder,
  LogOut,
} from "lucide-react";
import Header from "@/components/Header";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d");

  const stats = {
    totalWords: 1247,
    masteredWords: 423,
    studyTime: 28.5,
    accuracy: 87,
    streak: 12,
    weeklyGoal: 75,
  };

  const progressData = [
    { day: "月", words: 12, time: 25 },
    { day: "火", words: 18, time: 35 },
    { day: "水", words: 8, time: 15 },
    { day: "木", words: 22, time: 45 },
    { day: "金", words: 15, time: 30 },
    { day: "土", words: 20, time: 40 },
    { day: "日", words: 10, time: 20 },
  ];

  const categoryData = [
    { category: "科学", words: 342, mastery: 78, color: "bg-blue-500" },
    {
      category: "テクノロジー",
      words: 289,
      mastery: 85,
      color: "bg-purple-500",
    },
    { category: "医学", words: 234, mastery: 72, color: "bg-green-500" },
    { category: "ビジネス", words: 198, mastery: 91, color: "bg-orange-500" },
    { category: "文学", words: 184, mastery: 68, color: "bg-pink-500" },
  ];

  const headerAction = [
    <select
      key="select"
      value={timeRange}
      onChange={(e) => setTimeRange(e.target.value)}
      className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
    >
      <option value="7d">過去7日間</option>
      <option value="30d">過去30日間</option>
      <option value="90d">過去3ヶ月</option>
      <option value="1y">過去1年</option>
    </select>,
    <button
      className="flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity"
      key="export"
    >
      <Download className="w-4 h-4" />
      <span>エクスポート</span>
    </button>,
  ];

  return (
    <>
      {/* 開発中オーバーレイ */}
      <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center pointer-events-none">
        <div className="bg-white/90 text-gray-800 px-8 py-5 rounded-2xl shadow-2xl text-3xl font-bold animate-pulse">
          現在開発中
        </div>
      </div>

      {/* ページ本体 */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header headerText="学習分析" actions={headerAction} />
          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              <div className="elegant-card p-6 gentle-hover">
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.totalWords}
                  </span>
                </div>
                <p className="text-sm text-gray-600">総単語数</p>
                <div className="mt-2 text-xs text-green-600">今週+12%</div>
              </div>

              <div className="elegant-card p-6 gentle-hover">
                <div className="flex items-center justify-between mb-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.masteredWords}
                  </span>
                </div>
                <p className="text-sm text-gray-600">習得済み</p>
                <div className="mt-2 text-xs text-green-600">今週+8%</div>
              </div>

              <div className="elegant-card p-6 gentle-hover">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.studyTime}時間
                  </span>
                </div>
                <p className="text-sm text-gray-600">学習時間</p>
                <div className="mt-2 text-xs text-green-600">今週+15%</div>
              </div>

              <div className="elegant-card p-6 gentle-hover">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-8 h-8 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.accuracy}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">正解率</p>
                <div className="mt-2 text-xs text-green-600">今週+3%</div>
              </div>

              <div className="elegant-card p-6 gentle-hover">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-8 h-8 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.streak}
                  </span>
                </div>
                <p className="text-sm text-gray-600">連続日数</p>
                <div className="mt-2 text-xs text-green-600">継続中！</div>
              </div>

              <div className="elegant-card p-6 gentle-hover">
                <div className="flex items-center justify-between mb-2">
                  <Award className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.weeklyGoal}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">週間目標</p>
                <div className="mt-2 text-xs text-green-600">もう少し！</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Progress Chart */}
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    週間進捗
                  </h3>
                  <BarChart3 className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  {progressData.map((day, index) => (
                    <div key={day.day} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium text-gray-600">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-700">
                            {day.words}単語
                          </span>
                          <span className="text-sm text-gray-500">
                            {day.time}分
                          </span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div
                            className="gradient-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(day.words / 25) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    カテゴリ別内訳
                  </h3>
                  <PieChart className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  {categoryData.map((category, index) => (
                    <div key={category.category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${category.color}`}
                          ></div>
                          <span className="font-medium text-gray-900">
                            {category.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-gray-900">
                            {category.words}単語
                          </div>
                          <div className="text-xs text-gray-500">
                            習得率{category.mastery}%
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className={`${category.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${category.mastery}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Learning Patterns */}
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    学習パターン
                  </h3>
                  <Activity className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">最適時間帯</p>
                      <p className="text-sm text-gray-600">午前9:00 - 11:00</p>
                    </div>
                    <div className="text-green-600 font-semibold">85%</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">最良の曜日</p>
                      <p className="text-sm text-gray-600">火曜日</p>
                    </div>
                    <div className="text-blue-600 font-semibold">92%</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">
                        平均セッション
                      </p>
                      <p className="text-sm text-gray-600">23分</p>
                    </div>
                    <div className="text-purple-600 font-semibold">+12%</div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    最近の達成
                  </h3>
                  <Award className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">単語マスター</p>
                      <p className="text-sm text-gray-600">400語以上習得</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        スピード学習者
                      </p>
                      <p className="text-sm text-gray-600">
                        1セッション10語以上
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">継続学習</p>
                      <p className="text-sm text-gray-600">12日連続</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    おすすめ
                  </h3>
                  <Brain className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                    <h4 className="font-medium text-gray-900 mb-2">
                      科学用語に集中
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      科学分野の語彙に注意が必要です。毎日15分追加で学習しましょう。
                    </p>
                    <button className="text-green-600 text-sm font-medium hover:text-green-700">
                      練習開始 →
                    </button>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-gray-900 mb-2">
                      朝の学習セッション
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      朝の学習効果が23%高いです。朝の時間帯にスケジュールしてみましょう。
                    </p>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      リマインダー設定 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
