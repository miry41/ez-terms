'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  MoreVertical,
  ChevronLeft,
  Eye,
  Download,
  Trash2,
  Edit,
  BookOpen,
  Calendar,
  Tag,
  Star,
  Clock,
  Target,
  Plus,
  Grid,
  List,
  Folder,
  File,
  Menu,
  X,
  Home,
  Zap,
  Brain,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';

export default function DocumentsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const documents = [
    {
      id: 1,
      title: '機械学習研究論文',
      type: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      wordsExtracted: 89,
      category: 'テクノロジー',
      status: 'processed',
      progress: 100,
      thumbnail: '/api/placeholder/200/250'
    },
    {
      id: 2,
      title: '量子コンピューティング記事',
      type: 'URL',
      size: '1.2 MB',
      uploadDate: '2024-01-14',
      wordsExtracted: 67,
      category: '科学',
      status: 'processed',
      progress: 100,
      thumbnail: '/api/placeholder/200/250'
    },
    {
      id: 3,
      title: 'バイオテクノロジー論文',
      type: 'DOCX',
      size: '3.1 MB',
      uploadDate: '2024-01-13',
      wordsExtracted: 91,
      category: '医学',
      status: 'processed',
      progress: 100,
      thumbnail: '/api/placeholder/200/250'
    },
    {
      id: 4,
      title: 'ビジネス戦略分析',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '2024-01-12',
      wordsExtracted: 0,
      category: 'ビジネス',
      status: 'processing',
      progress: 65,
      thumbnail: '/api/placeholder/200/250'
    }
  ];

  const categories = ['all', 'テクノロジー', '科学', '医学', 'ビジネス', '文学'];

  const sidebarItems = [
    { id: 'home', label: 'ホーム', icon: Home, path: '/dashboard' },
    { id: 'extract', label: '単語抽出', icon: Zap, path: '/dashboard/extract' },
    { id: 'vocabulary', label: '単語帳', icon: BookOpen, path: '/dashboard/vocabulary' },
    { id: 'learn', label: '学習', icon: Brain, path: '/dashboard/learn' },
    { id: 'analytics', label: '分析', icon: BarChart3, path: '/dashboard/analytics' },
    { id: 'documents', label: 'ドキュメント', icon: Folder, path: '/dashboard/documents' },
    { id: 'settings', label: '設定', icon: Settings, path: '/dashboard/settings' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processed': return '完了';
      case 'processing': return '処理中';
      case 'failed': return '失敗';
      default: return '不明';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="w-5 h-5 text-red-600" />;
      case 'DOCX': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'URL': return <FileText className="w-5 h-5 text-green-600" />;
      default: return <File className="w-5 h-5 text-gray-600" />;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              const isActive = item.id === 'documents';
              
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
                <h1 className="text-2xl font-bold text-gray-900">マイドキュメント</h1>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Upload className="w-4 h-4" />
                  <span>ドキュメントアップロード</span>
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
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{documents.length}</div>
              <div className="text-sm text-gray-600">総ドキュメント数</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {documents.reduce((acc, doc) => acc + doc.wordsExtracted, 0)}
              </div>
              <div className="text-sm text-gray-600">抽出単語数</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {documents.filter(doc => doc.status === 'processing').length}
              </div>
              <div className="text-sm text-gray-600">処理中</div>
            </div>
            <div className="elegant-card p-6 text-center gentle-hover">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {documents.filter(doc => doc.status === 'processed').length}
              </div>
              <div className="text-sm text-gray-600">完了</div>
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
                    placeholder="ドキュメントを検索..."
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
                      {category === 'all' ? '全てのカテゴリ' : category}
                    </option>
                  ))}
                </select>

                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>その他フィルター</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
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

          {/* Documents Grid/List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className={`elegant-card hover-lift ${viewMode === 'list' ? 'flex items-center p-6' : 'p-6'}`}>
                {viewMode === 'grid' ? (
                  <>
                    {/* Document Thumbnail */}
                    <div className="relative mb-4">
                      <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        {getTypeIcon(doc.type)}
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                          {getStatusText(doc.status)}
                        </span>
                      </div>
                    </div>

                    {/* Document Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{doc.title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(doc.uploadDate).toLocaleDateString('ja-JP')}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded-full">{doc.category}</span>
                      </div>

                      {doc.status === 'processing' && (
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-500">処理中</span>
                            <span className="text-xs text-gray-500">{doc.progress}%</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-1">
                            <div 
                              className="gradient-primary h-1 rounded-full transition-all duration-300" 
                              style={{ width: `${doc.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {doc.status === 'processed' && (
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            <BookOpen className="w-3 h-3 inline mr-1" />
                            {doc.wordsExtracted}単語
                          </div>
                          <div className="flex space-x-1">
                            <button className="p-1 text-gray-400 hover:text-blue-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-green-600">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getTypeIcon(doc.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{doc.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>{doc.type} • {doc.size}</span>
                          <span>{new Date(doc.uploadDate).toLocaleDateString('ja-JP')}</span>
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{doc.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{doc.wordsExtracted}</div>
                        <div className="text-xs text-gray-500">単語</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                        {getStatusText(doc.status)}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600">
                          <Download className="w-4 h-4" />
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

          {/* Empty State */}
          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">ドキュメントが見つかりません</h3>
              <p className="text-gray-600 mb-6">最初のドキュメントをアップロードして語彙抽出を始めましょう。</p>
              <button className="flex items-center space-x-2 px-6 py-3 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity mx-auto">
                <Upload className="w-5 h-5" />
                <span>ドキュメントアップロード</span>
              </button>
            </div>
          )}

          {/* Upload Area */}
          <div className="mt-12 elegant-card p-8">
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-green-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">新しいドキュメントをアップロード</h3>
                <p className="text-gray-600 mb-4">ファイルをここにドラッグ&ドロップするか、クリックして参照</p>
                <button className="gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  ファイルを選択
                </button>
                <p className="text-xs text-gray-500 mt-4">PDF、DOCX、TXT、WebURL対応（最大10MBまで）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}