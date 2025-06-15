'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Clock, 
  Target,
  ChevronLeft,
  Plus,
  Edit,
  Trash2,
  Play,
  Volume2,
  Eye,
  MoreVertical,
  Download,
  Upload,
  Menu,
  X,
  Home,
  Zap,
  Brain,
  BarChart3,
  Folder,
  Settings,
  LogOut
} from 'lucide-react';

export default function VocabularyPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const vocabularyWords = [
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
      source: '学術論文 #1',
      tags: ['研究', '学術', '科学']
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
      source: '研究記事',
      tags: ['理論', 'モデル', '概念']
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
      source: '科学ジャーナル',
      tags: ['証拠', '観察', 'データ']
    },
    {
      id: 4,
      word: 'hypothesis',
      pronunciation: '/haɪˈpɒθəsɪs/',
      definition: '限られた証拠に基づいて作られた仮定や提案された説明',
      difficulty: 'intermediate',
      category: 'research',
      mastery: 45,
      examples: ['仮説は制御された実験を通じてテストされた。'],
      dateAdded: '2024-01-12',
      source: '学術論文 #2',
      tags: ['理論', '予測', '科学']
    }
  ];

  const categories = ['all', 'research', 'academic', 'science', 'technology', 'medicine'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const sidebarItems = [
    { id: 'home', label: 'ホーム', icon: Home, path: '/dashboard' },
    { id: 'extract', label: '単語抽出', icon: Zap, path: '/dashboard/extract' },
    { id: 'vocabulary', label: '単語帳', icon: BookOpen, path: '/dashboard/vocabulary' },
    { id: 'learn', label: '学習', icon: Brain, path: '/dashboard/learn' },
    { id: 'analytics', label: '分析', icon: BarChart3, path: '/dashboard/analytics' },
    { id: 'documents', label: 'ドキュメント', icon: Folder, path: '/dashboard/documents' },
    { id: 'settings', label: '設定', icon: Settings, path: '/dashboard/settings' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '初級';
      case 'intermediate': return '中級';
      case 'advanced': return '上級';
      default: return '不明';
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case 'research': return '研究';
      case 'academic': return '学術';
      case 'science': return '科学';
      case 'technology': return 'テクノロジー';
      case 'medicine': return '医学';
      default: return category;
    }
  };

  const getMasteryColor = (mastery: number) => {
    if (mastery >= 80) return 'text-green-600';
    if (mastery >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredWords = vocabularyWords.filter(word => {
    const matchesSearch = word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         word.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || word.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

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
              const isActive = item.id === 'vocabulary';
              
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
                <h1 className="text-2xl font-bold text-gray-900">マイ単語帳</h1>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Upload className="w-4 h-4" />
                  <span>インポート</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>エクスポート</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Plus className="w-4 h-4" />
                  <span>単語を追加</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="elegant-card p-6 text-center gentle-hover">
              <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{vocabularyWords.length}</div>
              <div className="text-sm text-gray-600">総単語数</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {vocabularyWords.filter(w => w.mastery >= 80).length}
              </div>
              <div className="text-sm text-gray-600">習得済み</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {vocabularyWords.filter(w => w.mastery > 0 && w.mastery < 80).length}
              </div>
              <div className="text-sm text-gray-600">学習中</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(vocabularyWords.reduce((acc, w) => acc + w.mastery, 0) / vocabularyWords.length)}%
              </div>
              <div className="text-sm text-gray-600">平均習得率</div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="elegant-card p-6 mb-8">
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
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? '全てのカテゴリ' : getCategoryText(category)}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' ? '全てのレベル' : getDifficultyText(difficulty)}
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
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Vocabulary Grid/List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredWords.map((word) => (
              <div key={word.id} className={`elegant-card p-6 hover-lift ${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
                {viewMode === 'grid' ? (
                  <>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{word.word}</h3>
                        <p className="text-sm text-gray-500 mb-2">{word.pronunciation}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(word.difficulty)}`}>
                            {getDifficultyText(word.difficulty)}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {getCategoryText(word.category)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{word.definition}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">例文:</p>
                      <p className="text-sm text-gray-600 italic">"{word.examples[0]}"</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-500">習得進捗</span>
                          <span className={`text-xs font-medium ${getMasteryColor(word.mastery)}`}>
                            {word.mastery}%
                          </span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="gradient-primary h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${word.mastery}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-xs text-gray-500">
                          追加日: {new Date(word.dateAdded).toLocaleDateString('ja-JP')}
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors">
                            <Play className="w-3 h-3" />
                            <span>練習</span>
                          </button>
                          <button className="p-1 text-gray-400 hover:text-blue-600">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{word.word}</h3>
                          <p className="text-sm text-gray-500">{word.pronunciation}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(word.difficulty)}`}>
                            {getDifficultyText(word.difficulty)}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {getCategoryText(word.category)}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 mt-2 text-sm">{word.definition}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getMasteryColor(word.mastery)}`}>
                          {word.mastery}%
                        </div>
                        <div className="text-xs text-gray-500">習得率</div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                          <Play className="w-4 h-4" />
                          <span>練習</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {filteredWords.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">単語が見つかりません</h3>
              <p className="text-gray-600">検索条件やフィルターを調整してみてください。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}