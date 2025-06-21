"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Menu,
  X,
  Home,
  Zap,
  Brain,
  BarChart3,
  Folder,
  Settings,
  LogOut,
} from "lucide-react";

function DashboardSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  // ローカルストレージからサイドバーの状態を読み込む
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    if (savedState !== null) {
      setSidebarOpen(JSON.parse(savedState));
    }
  }, []);

  // サイドバーの状態が変更されたらローカルストレージに保存
  const handleSidebarToggle = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem("sidebarOpen", JSON.stringify(newState));
  };

  const sidebarItems = [
    { id: "dashboard", label: "ホーム", icon: Home, path: "/app" },
    { id: "extract", label: "単語抽出", icon: Zap, path: "/app/extract" },
    {
      id: "vocabulary",
      label: "単語帳",
      icon: BookOpen,
      path: "/app/vocabulary",
    },
    { id: "learn", label: "学習", icon: Brain, path: "/app/learn" },
    { id: "analytics", label: "分析", icon: BarChart3, path: "/app/analytics" },
    {
      id: "documents",
      label: "ドキュメント",
      icon: Folder,
      path: "/app/documents",
    },
    { id: "settings", label: "設定", icon: Settings, path: "/app/settings" },
  ];

  // 現在のページのIDを取得
  const getCurrentPageId = () => {
    if (pathname === "/app") return "dashboard";
    const pathSegments = pathname.split("/");
    return pathSegments[2] || "dashboard";
  };

  const currentPageId = getCurrentPageId();

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-white/90 backdrop-blur-sm border-r border-green-100 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="p-6 border-b border-green-100">
        <div className="flex items-center justify-between">
          {sidebarOpen && (
            <Link href="/app" className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">EZ-Terms</span>
            </Link>
          )}
          <button
            onClick={handleSidebarToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = item.id === currentPageId;

            return (
              <Link
                key={item.id}
                href={item.path}
                className={`flex items-center ${
                  sidebarOpen
                    ? "space-x-3 justify-start px-3"
                    : "justify-center px-0"
                } py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg gentle-glow"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {sidebarOpen && (
                  <span
                    className={`font-medium ${isActive ? "text-white" : ""}`}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-green-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
            田中
          </div>
          {sidebarOpen && (
            <div className="flex-1">
              <p className="font-medium text-gray-900">田中太郎</p>
              <p className="text-sm text-gray-500">プレミアムユーザー</p>
            </div>
          )}
          {sidebarOpen && (
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <LogOut className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
