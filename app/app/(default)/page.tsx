"use client";

import { useState } from "react";
import Link from "next/link";
import * as Icon from "@/lib/icons";
import Header from "@/components/Header";
import { StatsOverview } from "@/components/cards/StatsOverview";
import { QuickActions } from "@/components/cards/QuickActions";
import { RecentActivity } from "@/components/cards/RecentActivity";
import { RecentDocuments } from "@/components/cards/RecentDocuments";
import { LearningProgress } from "@/components/cards/LearningProgress";
import {
  mockVocabularyWords,
  mockRecentActivity,
  mockRecentDocuments,
} from "@/data/mockData";

export default function DashboardPage() {
  const text = "ダミーテキスト";

  const headerAction = [
    <Link
      className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      key="settings"
      href="./app/settings"
    >
      <Icon.Settings className="w-4 h-4" />
      <span>設定</span>
    </Link>,
    <Link
      href="../"
      key="logout"
      className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-red-300 transition-colors"
    >
      <Icon.LogOut className="w-5 h-5" />
      <span>ログアウト</span>
    </Link>,
  ];

  const quickActions = [
    {
      href: "/app/extract",
      icon: Icon.Zap,
      title: "語彙抽出",
      description: "文書をアップロードまたはテキストを貼り付け",
      gradient: "gradient-primary",
      hoverColor: "green",
    },
    {
      href: "/app/learn",
      icon: Icon.BookOpen,
      title: "学習開始",
      description: "フラッシュカードで練習",
      gradient: "gradient-secondary",
      hoverColor: "blue",
    },
    {
      href: "/app/vocabulary",
      icon: Icon.BookOpen,
      title: "マイ単語帳",
      description: "単語コレクションを確認",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "purple",
    },
    {
      href: "/app/analytics",
      icon: Icon.BarChart3,
      title: "分析を見る",
      description: "進捗を追跡",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      hoverColor: "orange",
    },
  ];

  const progressItems = [
    {
      percentage: 75,
      label: "1日の目標",
      description: "20単語中15単語",
      color: "text-green-500",
    },
    {
      percentage: 60,
      label: "正解率",
      description: "20問中12問正解",
      color: "text-blue-500",
    },
    {
      percentage: 40,
      label: "学習時間",
      description: "30分中12分",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          headerText={`おかえりなさい！${text}さん`}
          actions={headerAction}
        />
        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-8">
            {/* Quick Stats */}
            <StatsOverview vocabularyWords={mockVocabularyWords} />

            {/* Quick Actions */}
            <QuickActions actions={quickActions} />

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <RecentActivity activities={mockRecentActivity} />

              {/* Recent Documents */}
              <RecentDocuments documents={mockRecentDocuments} />
            </div>

            {/* Learning Progress */}
            <LearningProgress items={progressItems} />
          </div>
        </main>
      </div>
    </div>
  );
}
