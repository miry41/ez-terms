'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Download,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Camera,
  Mail,
  Lock,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Menu,
  X,
  Home,
  BookOpen,
  Zap,
  Brain,
  BarChart3,
  Folder,
  Settings,
  LogOut
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // Profile
    name: '田中太郎',
    email: 'tanaka@example.com',
    bio: '新しい語彙の学習と学術研究に情熱を注いでいます。',
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    weeklyReport: true,
    studyReminders: true,
    achievementAlerts: true,
    
    // Privacy
    profileVisibility: 'private',
    dataSharing: false,
    analyticsTracking: true,
    
    // Appearance
    theme: 'light',
    language: 'ja',
    fontSize: 'medium',
    
    // Learning
    dailyGoal: 20,
    difficultyPreference: 'mixed',
    autoPlay: true,
    soundEffects: true
  });

  const tabs = [
    { id: 'profile', label: 'プロフィール', icon: User },
    { id: 'notifications', label: '通知', icon: Bell },
    { id: 'privacy', label: 'プライバシー・セキュリティ', icon: Shield },
    { id: 'appearance', label: '外観', icon: Palette },
    { id: 'learning', label: '学習', icon: Globe },
    { id: 'data', label: 'データ・ストレージ', icon: Download }
  ];

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-green-100">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900">設定</h1>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                <Save className="w-4 h-4" />
                <span>変更を保存</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="elegant-card p-6">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-green-100 text-green-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="elegant-card p-8">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">プロフィール設定</h2>
                      <p className="text-gray-600">個人情報とアカウント詳細を管理します。</p>
                    </div>

                    {/* Profile Picture */}
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          田中
                        </div>
                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <Camera className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">プロフィール画像</h3>
                        <p className="text-sm text-gray-600 mb-2">新しいプロフィール画像をアップロード</p>
                        <button className="text-green-600 text-sm font-medium hover:text-green-700">
                          画像を変更
                        </button>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          氏名
                        </label>
                        <input
                          type="text"
                          value={settings.name}
                          onChange={(e) => handleSettingChange('name', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          メールアドレス
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            value={settings.email}
                            onChange={(e) => handleSettingChange('email', e.target.value)}
                            className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        自己紹介
                      </label>
                      <textarea
                        value={settings.bio}
                        onChange={(e) => handleSettingChange('bio', e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="自己紹介を入力してください..."
                      />
                    </div>

                    {/* Password Change */}
                    <div className="border-t pt-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">パスワード変更</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            現在のパスワード
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            新しいパスワード
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">通知設定</h2>
                      <p className="text-gray-600">学習進捗に関する通知方法を選択してください。</p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-gray-600" />
                          <div>
                            <h3 className="font-medium text-gray-900">メール通知</h3>
                            <p className="text-sm text-gray-600">メールで更新情報を受信</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.emailNotifications}
                            onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-gray-600" />
                          <div>
                            <h3 className="font-medium text-gray-900">プッシュ通知</h3>
                            <p className="text-sm text-gray-600">デバイスで通知を受信</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.pushNotifications}
                            onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Bell className="w-5 h-5 text-gray-600" />
                          <div>
                            <h3 className="font-medium text-gray-900">学習リマインダー</h3>
                            <p className="text-sm text-gray-600">毎日の練習リマインダー</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.studyReminders}
                            onChange={(e) => handleSettingChange('studyReminders', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Appearance Tab */}
                {activeTab === 'appearance' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">外観設定</h2>
                      <p className="text-gray-600">EZ-Termsの見た目と操作感をカスタマイズします。</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          テーマ
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          <button
                            onClick={() => handleSettingChange('theme', 'light')}
                            className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                              settings.theme === 'light' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Sun className="w-6 h-6 text-gray-600" />
                            <span className="text-sm font-medium">ライト</span>
                          </button>
                          <button
                            onClick={() => handleSettingChange('theme', 'dark')}
                            className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                              settings.theme === 'dark' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Moon className="w-6 h-6 text-gray-600" />
                            <span className="text-sm font-medium">ダーク</span>
                          </button>
                          <button
                            onClick={() => handleSettingChange('theme', 'auto')}
                            className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                              settings.theme === 'auto' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Monitor className="w-6 h-6 text-gray-600" />
                            <span className="text-sm font-medium">自動</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          言語
                        </label>
                        <select
                          value={settings.language}
                          onChange={(e) => handleSettingChange('language', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="ja">日本語</option>
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          フォントサイズ
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {['small', 'medium', 'large'].map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSettingChange('fontSize', size)}
                              className={`p-3 border-2 rounded-lg text-center transition-colors ${
                                settings.fontSize === size ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <span className={`font-medium ${
                                size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'
                              }`}>
                                {size === 'small' ? '小' : size === 'medium' ? '中' : '大'}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Learning Tab */}
                {activeTab === 'learning' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">学習設定</h2>
                      <p className="text-gray-600">学習体験と目標をカスタマイズします。</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          1日の目標: {settings.dailyGoal}単語
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={settings.dailyGoal}
                          onChange={(e) => handleSettingChange('dailyGoal', parseInt(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>5単語</span>
                          <span>50単語</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          難易度設定
                        </label>
                        <select
                          value={settings.difficultyPreference}
                          onChange={(e) => handleSettingChange('difficultyPreference', e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="mixed">混合レベル</option>
                          <option value="beginner">初級中心</option>
                          <option value="intermediate">中級中心</option>
                          <option value="advanced">上級中心</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Volume2 className="w-5 h-5 text-gray-600" />
                          <div>
                            <h3 className="font-medium text-gray-900">自動発音再生</h3>
                            <p className="text-sm text-gray-600">単語の発音を自動再生</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.autoPlay}
                            onChange={(e) => handleSettingChange('autoPlay', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {settings.soundEffects ? <Volume2 className="w-5 h-5 text-gray-600" /> : <VolumeX className="w-5 h-5 text-gray-600" />}
                          <div>
                            <h3 className="font-medium text-gray-900">効果音</h3>
                            <p className="text-sm text-gray-600">正解/不正解時の音を再生</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.soundEffects}
                            onChange={(e) => handleSettingChange('soundEffects', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Data Tab */}
                {activeTab === 'data' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">データ・ストレージ</h2>
                      <p className="text-gray-600">データ、エクスポート、アカウント削除を管理します。</p>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">データをエクスポート</h3>
                        <p className="text-gray-600 mb-4">全ての語彙データ、進捗、設定をダウンロードします。</p>
                        <button className="flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                          <Download className="w-4 h-4" />
                          <span>データをエクスポート</span>
                        </button>
                      </div>

                      <div className="p-6 border border-red-200 rounded-lg bg-red-50">
                        <h3 className="text-lg font-semibold text-red-900 mb-2">アカウントを削除</h3>
                        <p className="text-red-700 mb-4">アカウントと関連するすべてのデータを完全に削除します。この操作は元に戻せません。</p>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                          <Trash2 className="w-4 h-4" />
                          <span>アカウントを削除</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}