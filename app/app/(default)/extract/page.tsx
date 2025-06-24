"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Upload,
  FileText,
  Link2,
  Image,
  ChevronLeft,
  File,
  Globe,
  Camera,
  Zap,
  Settings,
  Download,
  Eye,
  Trash2,
  Plus,
  Filter,
  Search,
  Menu,
  X,
  Home,
  BookOpen,
  Brain,
  BarChart3,
  Folder,
  LogOut,
} from "lucide-react";
import Header from "@/components/Header";
import {
  mockExtractedWords,
  mockInputMethods,
  mockExtractionSettings,
} from "@/data/mockData";
import {
  getDifficultyColor,
  getDifficultyText,
  getConfidenceColor,
} from "@/utils/helpers";
import { ExtractedWord } from "@/types";

export default function ExtractPage() {
  const [activeTab, setActiveTab] = useState("text");
  const [inputText, setInputText] = useState("");
  const [extractedWords, setExtractedWords] = useState(mockExtractedWords);
  const [extractionSettings, setExtractionSettings] = useState(
    mockExtractionSettings
  );

  const handleExtractVocabulary = () => {
    if (inputText.trim()) {
      // Simulate vocabulary extraction
      const newWords: ExtractedWord[] = [
        {
          id: Date.now(),
          word: "hypothesis",
          pronunciation: "/haɪˈpɒθəsɪs/",
          definition: "限られた証拠に基づいて作られた仮定や提案された説明",
          difficulty: "intermediate",
          category: "research",
          confidence: 92,
          examples: ["仮説は制御された実験を通じてテストされた。"],
          source: "現在のテキスト入力",
        },
      ];
      setExtractedWords([...newWords, ...extractedWords]);
    }
  };

  const headerAction = [
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
        <Header headerText="単語抽出" actions={headerAction} />
        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Input Method Selection */}
              <div className="elegant-card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  入力方法を選択
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {mockInputMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setActiveTab(method.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover-lift ${
                          activeTab === method.id
                            ? "border-green-500 bg-green-50 gentle-glow"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              activeTab === method.id
                                ? "gradient-primary text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h3 className="font-semibold text-gray-900">
                            {method.label}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Text Input */}
                {activeTab === "text" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        テキストを入力または貼り付け
                      </label>
                      <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="ここにテキストを入力してください..."
                      />
                    </div>
                    <button
                      onClick={handleExtractVocabulary}
                      className="w-full gradient-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                    >
                      <Zap className="w-5 h-5" />
                      <span>語彙を抽出</span>
                    </button>
                  </div>
                )}

                {/* File Upload */}
                {activeTab === "upload" && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        ファイルをドラッグ＆ドロップまたはクリックして選択
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF、DOCX、TXTファイルをサポート
                      </p>
                    </div>
                  </div>
                )}

                {/* URL Input */}
                {activeTab === "url" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Web URL
                      </label>
                      <input
                        type="url"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="https://example.com/article"
                      />
                    </div>
                    <button className="w-full gradient-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>URLから抽出</span>
                    </button>
                  </div>
                )}

                {/* Image Upload */}
                {activeTab === "image" && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        画像をドラッグ＆ドロップまたはクリックして選択
                      </p>
                      <p className="text-sm text-gray-500">
                        JPG、PNG、GIFファイルをサポート
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Extraction Results */}
              <div className="elegant-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    抽出された用語 ({extractedWords.length})
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Filter className="w-4 h-4" />
                      <span>フィルター</span>
                    </button>
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>エクスポート</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {extractedWords.map((word) => (
                    <div
                      key={word.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow gentle-hover"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {word.word}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {word.pronunciation}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                              word.difficulty
                            )}`}
                          >
                            {getDifficultyText(word.difficulty)}
                          </span>
                          <div
                            className={`text-sm font-medium ${getConfidenceColor(
                              word.confidence
                            )}`}
                          >
                            {word.confidence}%
                          </div>
                          <div className="flex space-x-1">
                            <button className="p-1 text-gray-400 hover:text-blue-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-green-600">
                              <Plus className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{word.definition}</p>
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">例文:</p>
                        <p className="text-sm text-gray-600 italic">
                          &ldquo;{word.examples[0]}&rdquo;
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>カテゴリ: {word.category}</span>
                        <span>ソース: {word.source}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {extractedWords.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      まだ用語が抽出されていません
                    </h3>
                    <p className="text-gray-600">
                      上記の入力方法を使用してテキストを追加し、開始してください。
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Settings Sidebar */}
            <div className="space-y-6">
              {/* Extraction Settings */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  抽出設定
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      難易度
                    </label>
                    <select
                      value={extractionSettings.difficulty}
                      onChange={(e) =>
                        setExtractionSettings({
                          ...extractionSettings,
                          difficulty: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="all">すべて</option>
                      <option value="beginner">初級</option>
                      <option value="intermediate">中級</option>
                      <option value="advanced">上級</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      最小信頼度
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={extractionSettings.minConfidence}
                      onChange={(e) =>
                        setExtractionSettings({
                          ...extractionSettings,
                          minConfidence: parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>{extractionSettings.minConfidence}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Extractions */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  最近の抽出
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <File className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">
                        研究論文.pdf
                      </p>
                      <p className="text-xs text-gray-500">45単語 • 2時間前</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">
                        Nature記事
                      </p>
                      <p className="text-xs text-gray-500">32単語 • 1日前</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">
                        テキスト入力
                      </p>
                      <p className="text-xs text-gray-500">28単語 • 2日前</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  クイックヒント
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>長いテキストほど語彙抽出の精度が向上します</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>学術論文や技術文書が最適です</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>信頼度の閾値を調整して結果をフィルタリング</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
