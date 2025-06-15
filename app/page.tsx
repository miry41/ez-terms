import Link from 'next/link';
import { BookOpen, Brain, Target, Users, ArrowRight, FileText, Lightbulb, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">EZ-Terms</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">機能</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">使い方</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors">料金</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-green-600 transition-colors">
                ログイン
              </Link>
              <Link href="/signup" className="gradient-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                始める
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            学術語彙を
            <span className="block gradient-primary bg-clip-text text-transparent">
              簡単にマスター
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            AI搭載の精密技術で学術論文や技術文書から語彙を抽出、学習、習得。
            研究読書体験を変革します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link href="/signup" className="gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity hover-lift">
              無料で学習開始
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <Link href="/demo" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors hover-lift">
              デモを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              学術成功に必要なすべて
            </h2>
            <p className="text-xl text-gray-600">
              学術成功のために設計された包括的ツール
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">スマート文書処理</h3>
              <p className="text-gray-600">
                PDF、テキスト、URLをアップロード。AIがあらゆる学術コンテンツから精密に語彙を抽出します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI搭載分析</h3>
              <p className="text-gray-600">
                高度なNLPアルゴリズムが専門用語、文脈固有の意味、難易度レベルを自動識別します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-green-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">個人化学習</h3>
              <p className="text-gray-600">
                適応型フラッシュカードと間隔反復で、あなたのペースで語彙を確実に習得できます。
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">文脈認識定義</h3>
              <p className="text-gray-600">
                文書の文脈と分野に合致した分野固有の定義と例文を取得できます。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-lime-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">進捗追跡</h3>
              <p className="text-gray-600">
                詳細な分析と達成マイルストーンで語彙の成長を監視できます。
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">マルチデバイス同期</h3>
              <p className="text-gray-600">
                すべてのデバイスで語彙リストと進捗にシームレスにアクセスできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              シンプル。パワフル。効果的。
            </h2>
            <p className="text-xl text-gray-600">
              3つの簡単なステップで学術語彙の習得を開始
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">文書をアップロード</h3>
              <p className="text-gray-600">
                PDF、テキスト、URLを簡単にアップロード。EZ-Termsが残りを処理します。
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AIが重要用語を抽出</h3>
              <p className="text-gray-600">
                高度なAIが関連語彙を定義と文脈とともに識別・抽出します。
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">学習・習得</h3>
              <p className="text-gray-600">
                インタラクティブなフラッシュカードと間隔反復で語彙を習得します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            読書体験を変革する準備はできましたか？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            学術語彙学習を加速させた数千人の学生・研究者に参加しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity hover-lift">
              無料トライアルを開始
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors hover-lift">
              営業に問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">EZ-Terms</span>
              </div>
              <p className="text-gray-400">
                インテリジェントな語彙学習を通じて学術成功を支援します。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">プロダクト</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">機能</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ヘルプセンター</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ステータス</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">会社</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ブログ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">採用</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EZ-Terms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}