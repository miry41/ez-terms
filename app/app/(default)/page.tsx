'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Upload, 
  FileText, 
  Link2, 
  Image, 
  Search,
  Filter,
  Grid,
  List,
  Star,
  Clock,
  TrendingUp,
  User,
  Settings,
  LogOut,
  Target,
  Brain,
  Zap,
  Sparkles,
  Activity,
  Layers,
  Rocket,
  Cpu,
  Database,
  Globe,
  Play,
  ChevronRight,
  Award,
  Atom,
  Orbit,
  Menu,
  X,
  Home,
  BarChart3,
  PlusCircle,
  Calendar,
  Folder
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [inputText, setInputText] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  
  const [extractedWords, setExtractedWords] = useState([
    {
      id: 1,
      word: 'methodology',
      pronunciation: '/mɛθəˈdɒlədʒi/',
      definition: '特定の研究分野や活動で使用される方法のシステム',
      difficulty: 'intermediate',
      category: 'research',
      mastery: 85,
      examples: ['研究方法論は論文で明確に概説されていた。'],
      dateAdded: '2024-01-15',
      source: '学術論文 #1'
    },
    {
      id: 2,
      word: 'paradigm',
      pronunciation: '/ˈpærəˌdaɪm/',
      definition: '何かの典型的な例やパターン；モデル',
      difficulty: 'advanced',
      category: 'academic',
      mastery: 72,
      examples: ['これは科学的思考のパラダイムシフトを表している。'],
      dateAdded: '2024-01-14',
      source: '研究記事'
    },
    {
      id: 3,
      word: 'empirical',
      pronunciation: '/ɪmˈpɪrɪkəl/',
      definition: '観察や経験に基づく、またはそれによって検証可能な',
      difficulty: 'advanced',
      category: 'research',
      mastery: 91,
      examples: ['この研究は仮説に対する実証的証拠を提供している。'],
      dateAdded: '2024-01-13',
      source: '科学ジャーナル'
    }
  ]);

  const recentDocuments = [
    { id: 1, title: '機械学習研究論文', words: 89, date: '2024-01-15', type: 'PDF' },
    { id: 2, title: '量子コンピューティング記事', words: 67, date: '2024-01-14', type: 'URL' },
    { id: 3, title: 'バイオテクノロジー論文', words: 91, date: '2024-01-13', type: 'DOCX' }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'mastered',
      word: 'empirical',
      time: '2時間前',
      icon: Star,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: 2,
      type: 'practiced',
      word: 'フラッシュカードセッション',
      time: '1日前',
      icon: BookOpen,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'extracted',
      word: '15個の新しい用語',
      time: '2日前',
      icon: Zap,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const handleExtractVocabulary = () => {
    if (inputText.trim()) {
      const newWords = [
        {
          id: Date.now(),
          word: 'hypothesis',
          pronunciation: '/haɪˈpɒθəsɪs/',
          definition: '限られた証拠に基づいて作られた仮定や提案された説明',
          difficulty: 'intermediate',
          category: 'research',
          mastery: 0,
          examples: ['仮説は制御された実験を通じてテストされた。'],
          dateAdded: new Date().toISOString().split('T')[0],
          source: '現在のテキスト入力'
        }
      ];
      setExtractedWords([...newWords, ...extractedWords]);
      setInputText('');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMasteryColor = (mastery: number) => {
    if (mastery >= 80) return 'text-green-600';
    if (mastery >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-green-100">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {activeTab === 'home' ? 'おかえりなさい、田中さん！' : 
                   'ダッシュボード'}
                </h1>
                <p className="text-gray-600">
                  {activeTab === 'home' ? '今日も語彙力を向上させる準備はできていますか？' : 
                   '学習の旅を続けましょう'}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                  <Calendar className="w-5 h-5" />
                </button>
                <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
                  <LogOut className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'home' && (
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="elegant-card p-6 text-center gentle-hover animate-fade-in">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{extractedWords.length}</div>
                  <div className="text-sm text-gray-600">総単語数</div>
                </div>
                
                <div className="elegant-card p-6 text-center gentle-hover animate-fade-in">
                  <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {extractedWords.filter(w => w.mastery >= 80).length}
                  </div>
                  <div className="text-sm text-gray-600">習得済み</div>
                </div>
                
                <div className="elegant-card p-6 text-center gentle-hover animate-fade-in">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">連続日数</div>
                </div>
                
                <div className="elegant-card p-6 text-center gentle-hover animate-fade-in">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Math.round(extractedWords.reduce((acc, w) => acc + w.mastery, 0) / extractedWords.length)}%
                  </div>
                  <div className="text-sm text-gray-600">平均習得率</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="elegant-card p-6 animate-slide-up">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">クイックアクション</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link href="/dashboard/extract" className="group">
                    <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover-lift group-hover:bg-green-50">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">語彙抽出</h3>
                      <p className="text-sm text-gray-600">文書をアップロードまたはテキストを貼り付け</p>
                    </div>
                  </Link>

                  <Link href="/dashboard/learn" className="group">
                    <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover-lift group-hover:bg-blue-50">
                      <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">学習開始</h3>
                      <p className="text-sm text-gray-600">フラッシュカードで練習</p>
                    </div>
                  </Link>

                  <Link href="/dashboard/vocabulary" className="group">
                    <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover-lift group-hover:bg-purple-50">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">マイ単語帳</h3>
                      <p className="text-sm text-gray-600">単語コレクションを確認</p>
                    </div>
                  </Link>

                  <Link href="/dashboard/analytics" className="group">
                    <div className="p-6 rounded-xl border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 hover-lift group-hover:bg-orange-50">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">分析を見る</h3>
                      <p className="text-sm text-gray-600">進捗を追跡</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="elegant-card p-6 animate-slide-up">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">最近のアクティビティ</h3>
                    <Link href="/dashboard/analytics" className="text-green-600 hover:text-green-700 text-sm font-medium">
                      すべて見る
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => {
                      const IconComponent = activity.icon;
                      return (
                        <div key={activity.id} className={`flex items-center space-x-4 p-4 ${activity.bg} rounded-lg gentle-hover`}>
                          <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center`}>
                            <IconComponent className={`w-5 h-5 ${activity.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">
                              {activity.type === 'mastered' ? `「${activity.word}」を習得` :
                               activity.type === 'practiced' ? `${activity.word}を完了` :
                               `${activity.word}を抽出`}
                            </p>
                            <p className="text-sm text-gray-600">{activity.time}</p>
                          </div>
                          {activity.type === 'mastered' && (
                            <div className="text-green-600 font-medium">+10 XP</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Documents */}
                <div className="elegant-card p-6 animate-slide-up">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">最近のドキュメント</h3>
                    <Link href="/dashboard/documents" className="text-green-600 hover:text-green-700 text-sm font-medium">
                      すべて見る
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {recentDocuments.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg gentle-hover">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{doc.title}</p>
                            <p className="text-xs text-gray-500">{doc.words}単語 • {new Date(doc.date).toLocaleDateString('ja-JP')}</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {doc.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Progress */}
              <div className="elegant-card p-6 animate-scale-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">今日の進捗</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
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
                    <p className="text-sm text-gray-600">1日の目標</p>
                    <p className="text-xs text-gray-500">20単語中15単語</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
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
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.60)}`}
                          className="text-blue-500"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">60%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">正解率</p>
                    <p className="text-xs text-gray-500">20問中12問正解</p>
                  </div>

                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
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
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.40)}`}
                          className="text-purple-500"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">40%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">学習時間</p>
                    <p className="text-xs text-gray-500">30分中12分</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}