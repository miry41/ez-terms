'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Target, 
  Brain, 
  Zap, 
  Play, 
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
  ArrowRight,
  Filter,
  Settings,
  FileText,
  Globe,
  Calendar,
  BarChart3,
  AlertCircle,
  Circle,
  MinusCircle,
  CheckCircle2,
  Trophy,
  Menu,
  X,
  Home,
  Folder,
  LogOut
} from 'lucide-react';

export default function LearnPage() {
  const [selectedMode, setSelectedMode] = useState('flashcards');
  const [selectedDocument, setSelectedDocument] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [difficulty, setDifficulty] = useState('mixed');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // 5段階の学習ステータス定義
  const learningStatuses = [
    { id: 'new', label: '未学習', icon: Circle, color: 'text-gray-500', bg: 'bg-gray-100', description: '新しい単語' },
    { id: 'learning', label: '学習中', icon: AlertCircle, color: 'text-blue-500', bg: 'bg-blue-100', description: '学習開始済み' },
    { id: 'reviewing', label: '復習中', icon: MinusCircle, color: 'text-yellow-500', bg: 'bg-yellow-100', description: '復習が必要' },
    { id: 'familiar', label: '習得済み', icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-100', description: 'ある程度習得' },
    { id: 'mastered', label: '完全習得', icon: Trophy, color: 'text-purple-500', bg: 'bg-purple-100', description: '完全にマスター' }
  ];

  const learningModes = [
    {
      id: 'flashcards',
      title: 'フラッシュカード',
      description: '間隔反復学習でしっかり記憶',
      icon: BookOpen,
      color: 'bg-green-500',
      gradient: 'gradient-primary',
      stats: { words: 45, time: '15分', accuracy: '87%' }
    },
    {
      id: 'quiz',
      title: 'クイズモード',
      description: '選択問題で知識をテスト',
      icon: Target,
      color: 'bg-blue-500',
      gradient: 'gradient-secondary',
      stats: { words: 20, time: '10分', accuracy: '92%' }
    },
    {
      id: 'writing',
      title: 'ライティング練習',
      description: 'スペルと文脈での使用を練習',
      icon: PenTool,
      color: 'bg-purple-500',
      gradient: 'gradient-accent',
      stats: { words: 15, time: '20分', accuracy: '78%' }
    },
    {
      id: 'listening',
      title: '発音練習',
      description: '正しい発音とリスニングを学習',
      icon: Headphones,
      color: 'bg-orange-500',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
      stats: { words: 30, time: '12分', accuracy: '85%' }
    },
    {
      id: 'games',
      title: 'ワードゲーム',
      description: '楽しいゲームで学習を強化',
      icon: Gamepad2,
      color: 'bg-pink-500',
      gradient: 'bg-gradient-to-r from-pink-500 to-purple-500',
      stats: { words: 25, time: '18分', accuracy: '90%' }
    },
    {
      id: 'review',
      title: 'スマート復習',
      description: 'AI搭載の苦手単語復習',
      icon: Brain,
      color: 'bg-indigo-500',
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-500',
      stats: { words: 12, time: '8分', accuracy: '94%' }
    }
  ];

  const documents = [
    { id: 'all', name: '全てのドキュメント', words: 247, newWords: 45, learningWords: 89, reviewingWords: 67, familiarWords: 32, masteredWords: 14 },
    { id: 'paper1', name: '機械学習研究論文', words: 89, newWords: 12, learningWords: 34, reviewingWords: 25, familiarWords: 15, masteredWords: 3 },
    { id: 'paper2', name: '量子コンピューティング記事', words: 67, newWords: 8, learningWords: 23, reviewingWords: 20, familiarWords: 12, masteredWords: 4 },
    { id: 'paper3', name: 'バイオテクノロジー論文', words: 91, newWords: 25, learningWords: 32, reviewingWords: 22, familiarWords: 5, masteredWords: 7 }
  ];

  const categories = [
    { id: 'all', name: '全てのカテゴリ', words: 247, newWords: 45, learningWords: 89, reviewingWords: 67, familiarWords: 32, masteredWords: 14 },
    { id: 'science', name: '科学', words: 89, newWords: 15, learningWords: 32, reviewingWords: 25, familiarWords: 12, masteredWords: 5 },
    { id: 'technology', name: 'テクノロジー', words: 67, newWords: 12, learningWords: 28, reviewingWords: 18, familiarWords: 7, masteredWords: 2 },
    { id: 'medicine', name: '医学', words: 91, newWords: 18, learningWords: 29, reviewingWords: 24, familiarWords: 13, masteredWords: 7 }
  ];

  const recentSessions = [
    {
      id: 1,
      mode: 'フラッシュカード',
      words: 15,
      accuracy: 87,
      time: '12分',
      date: '2時間前',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      id: 2,
      mode: 'クイズモード',
      words: 20,
      accuracy: 92,
      time: '8分',
      date: '1日前',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      id: 3,
      mode: 'ワードゲーム',
      words: 25,
      accuracy: 90,
      time: '15分',
      date: '2日前',
      icon: Gamepad2,
      color: 'text-pink-600'
    }
  ];

  const sidebarItems = [
    { id: 'home', label: 'ホーム', icon: Home, path: '/dashboard' },
    { id: 'extract', label: '単語抽出', icon: Zap, path: '/dashboard/extract' },
    { id: 'vocabulary', label: '単語帳', icon: BookOpen, path: '/dashboard/vocabulary' },
    { id: 'learn', label: '学習', icon: Brain, path: '/dashboard/learn' },
    { id: 'analytics', label: '分析', icon: BarChart3, path: '/dashboard/analytics' },
    { id: 'documents', label: 'ドキュメント', icon: Folder, path: '/dashboard/documents' },
    { id: 'settings', label: '設定', icon: Settings, path: '/dashboard/settings' }
  ];

  // 選択された条件に基づいて利用可能な単語数を計算
  const getAvailableWords = () => {
    const selectedDoc = documents.find(doc => doc.id === selectedDocument) || documents[0];
    const selectedCat = categories.find(cat => cat.id === selectedCategory) || categories[0];
    
    if (selectedStatus === 'all') {
      return Math.min(selectedDoc.words, selectedCat.words);
    }
    
    const statusKey = `${selectedStatus}Words` as keyof typeof selectedDoc;
    return Math.min(selectedDoc[statusKey] as number, selectedCat[statusKey] as number);
  };

  const getStatusIcon = (statusId: string) => {
    const status = learningStatuses.find(s => s.id === statusId);
    return status ? status.icon : Circle;
  };

  const getStatusColor = (statusId: string) => {
    const status = learningStatuses.find(s => s.id === statusId);
    return status ? status.color : 'text-gray-500';
  };

  const getStatusBg = (statusId: string) => {
    const status = learningStatuses.find(s => s.id === statusId);
    return status ? status.bg : 'bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white/90 backdrop-blur-sm border-r border-green-100 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-green-100">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">EZ-Terms</span>
              </Link>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = item.id === 'learn';
              
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg gentle-glow' 
                      : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-green-600'}`} />
                  {sidebarOpen && (
                    <span className={`font-medium ${isActive ? 'text-white' : ''}`}>
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-green-100">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900">学習センター</h1>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
                    showAdvancedFilters ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  <span>詳細フィルター</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>設定</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="elegant-card p-6 text-center gentle-hover">
              <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">連続日数</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2.5時間</div>
              <div className="text-sm text-gray-600">今週の学習時間</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">89%</div>
              <div className="text-sm text-gray-600">平均スコア</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{getAvailableWords()}</div>
              <div className="text-sm text-gray-600">利用可能単語数</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Learning Modes */}
            <div className="lg:col-span-2 space-y-8">
              <div className="elegant-card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">学習モードを選択</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningModes.map((mode) => {
                    const IconComponent = mode.icon;
                    return (
                      <div
                        key={mode.id}
                        onClick={() => setSelectedMode(mode.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover-lift ${
                          selectedMode === mode.id
                            ? 'border-green-500 bg-green-50 gentle-glow'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 ${mode.gradient} rounded-xl flex items-center justify-center mb-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          {selectedMode === mode.id && (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{mode.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{mode.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{mode.stats.words}単語</span>
                          <span>{mode.stats.time}</span>
                          <span>{mode.stats.accuracy}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Study Options */}
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
                      {documents.map(doc => (
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
                      {categories.map(category => (
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
                      onClick={() => setSelectedStatus('all')}
                      className={`p-3 rounded-lg border-2 text-left transition-colors ${
                        selectedStatus === 'all' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
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
                      const selectedDoc = documents.find(doc => doc.id === selectedDocument) || documents[0];
                      const statusKey = `${status.id}Words` as keyof typeof selectedDoc;
                      const wordCount = selectedDoc[statusKey] as number;
                      
                      return (
                        <button
                          key={status.id}
                          onClick={() => setSelectedStatus(status.id)}
                          className={`p-3 rounded-lg border-2 text-left transition-colors ${
                            selectedStatus === status.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            <IconComponent className={`w-4 h-4 ${status.color}`} />
                            <span className="font-medium text-sm">{status.label}</span>
                          </div>
                          <p className="text-xs text-gray-500">{status.description} ({wordCount})</p>
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
                  <h4 className="font-medium text-gray-900 mb-3">選択した単語セットの概要</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    {learningStatuses.map((status) => {
                      const selectedDoc = documents.find(doc => doc.id === selectedDocument) || documents[0];
                      const statusKey = `${status.id}Words` as keyof typeof selectedDoc;
                      const wordCount = selectedDoc[statusKey] as number;
                      const IconComponent = status.icon;
                      
                      return (
                        <div key={status.id} className="bg-white rounded-lg p-3">
                          <IconComponent className={`w-5 h-5 ${status.color} mx-auto mb-1`} />
                          <div className="text-lg font-bold text-gray-900">{wordCount}</div>
                          <div className="text-xs text-gray-600">{status.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="flex items-center space-x-3 px-8 py-4 gradient-primary text-white rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity hover-lift">
                    <Play className="w-6 h-6" />
                    <span>学習セッションを開始</span>
                    <span className="bg-white/20 px-2 py-1 rounded-lg text-sm">
                      {getAvailableWords()}単語
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Learning Status Overview */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">学習進捗</h3>
                <div className="space-y-4">
                  {learningStatuses.map((status) => {
                    const selectedDoc = documents.find(doc => doc.id === selectedDocument) || documents[0];
                    const statusKey = `${status.id}Words` as keyof typeof selectedDoc;
                    const wordCount = selectedDoc[statusKey] as number;
                    const percentage = Math.round((wordCount / selectedDoc.words) * 100);
                    const IconComponent = status.icon;
                    
                    return (
                      <div key={status.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <IconComponent className={`w-4 h-4 ${status.color}`} />
                            <span className="text-sm font-medium text-gray-900">{status.label}</span>
                          </div>
                          <div className="text-sm text-gray-600">{wordCount} ({percentage}%)</div>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${status.bg.replace('bg-', 'bg-').replace('-100', '-500')}`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Sessions */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">最近のセッション</h3>
                <div className="space-y-4">
                  {recentSessions.map((session) => {
                    const IconComponent = session.icon;
                    return (
                      <div key={session.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <IconComponent className={`w-5 h-5 ${session.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900 text-sm">{session.mode}</p>
                            <span className="text-xs text-gray-500">{session.date}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                            <span>{session.words}単語</span>
                            <span>•</span>
                            <span>{session.accuracy}%</span>
                            <span>•</span>
                            <span>{session.time}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Daily Goal */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">今日の目標</h3>
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
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
                      <span className="text-xl font-bold text-gray-900">75%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">20単語中15単語</p>
                  <p className="text-xs text-gray-500">あと5単語で今日の目標達成！</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="elegant-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">クイックアクション</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                    <RotateCcw className="w-4 h-4" />
                    <span>間違いを復習</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                    <Shuffle className="w-4 h-4" />
                    <span>ランダム練習</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                    <Brain className="w-4 h-4" />
                    <span>スマート復習</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}