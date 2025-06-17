import Link from 'next/link';
import { BookOpen, Brain, Target, Users, ArrowRight, FileText, Lightbulb, TrendingUp, Check, Star, Zap, Clock, Shield, Globe, Award, Sparkles, ChevronRight, Play, Download, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: FileText,
      title: 'スマート文書処理',
      description: 'PDF、テキスト、URLをアップロード。AIがあらゆる学術コンテンツから精密に語彙を抽出します。',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI搭載分析',
      description: '高度なNLPアルゴリズムが専門用語、文脈固有の意味、難易度レベルを自動識別します。',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '個人化学習',
      description: '適応型フラッシュカードと間隔反復で、あなたのペースで語彙を確実に習得できます。',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: '文脈認識定義',
      description: '文書の文脈と分野に合致した分野固有の定義と例文を取得できます。',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: '進捗追跡',
      description: '詳細な分析と達成マイルストーンで語彙の成長を監視できます。',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Users,
      title: 'マルチデバイス同期',
      description: 'すべてのデバイスで語彙リストと進捗にシームレスにアクセスできます。',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: '田中 研究員',
      role: '大学院生・工学研究科',
      content: 'EZ-Termsのおかげで英語論文の読解速度が2倍になりました。専門用語の理解が格段に向上し、研究効率が大幅にアップしました。',
      avatar: '田中',
      rating: 5
    },
    {
      name: '佐藤 教授',
      role: '医学部・研究者',
      content: '学生にも推奨しています。医学用語の習得が効率的になり、論文執筆時の語彙選択も的確になりました。',
      avatar: '佐藤',
      rating: 5
    },
    {
      name: '山田 学生',
      role: '理学部・学部生',
      content: '英語が苦手でしたが、EZ-Termsで段階的に学習できるようになりました。TOEFLスコアも大幅に向上しました。',
      avatar: '山田',
      rating: 5
    }
  ];

  const stats = [
    { number: '50,000+', label: '抽出された語彙数' },
    { number: '1,200+', label: 'アクティブユーザー' },
    { number: '95%', label: 'ユーザー満足度' },
    { number: '3x', label: '学習効率向上' }
  ];

  const ticketPlans = [
    {
      name: '5チケット',
      price: '¥500',
      description: '軽めの処理におすすめ',
      features: ['テキスト処理（〜2,000語）×5回', '基本的な語彙抽出', 'PayPay支払い対応'],
      popular: false
    },
    {
      name: '11チケット',
      price: '¥1,000',
      description: 'たっぷり使いたい方向け',
      features: ['実質1枚あたり¥90でお得', 'PDF処理対応', '画像OCR処理', 'PayPay支払い対応'],
      popular: true,
      badge: 'お得'
    }
  ];

  const usageGuide = [
    { type: 'テキスト（〜2,000語）', tickets: '1枚' },
    { type: 'テキスト（〜10,000語）', tickets: '2枚' },
    { type: 'PDFファイル（1〜3ページ）', tickets: '2〜3枚' },
    { type: '画像からの文字抽出（OCR）', tickets: '2枚' },
    { type: '単語帳のエクスポート（CSV形式）', tickets: '1枚' }
  ];

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
              <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">お客様の声</a>
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
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 animate-gentle-float"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI搭載の次世代語彙学習プラットフォーム
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            学術語彙を
            <span className="block gradient-primary bg-clip-text text-transparent soft-text-glow">
              簡単にマスター
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            AI搭載の精密技術で学術論文や技術文書から語彙を抽出、学習、習得。
            研究読書体験を変革し、学術成功への道筋を明確にします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in mb-12">
            <Link href="/signup" className="gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity hover-lift gentle-glow">
              無料で学習開始
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <Link href="/demo" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors hover-lift">
              <Play className="inline mr-2 w-5 h-5" />
              デモを見る
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="elegant-card p-8 rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 gentle-glow`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
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
            {[
              {
                step: '1',
                title: '文書をアップロード',
                description: 'PDF、テキスト、URLを簡単にアップロード。EZ-Termsが残りを処理します。',
                icon: Upload,
                gradient: 'gradient-primary'
              },
              {
                step: '2',
                title: 'AIが重要用語を抽出',
                description: '高度なAIが関連語彙を定義と文脈とともに識別・抽出します。',
                icon: Brain,
                gradient: 'gradient-secondary'
              },
              {
                step: '3',
                title: '学習・習得',
                description: 'インタラクティブなフラッシュカードと間隔反復で語彙を習得します。',
                icon: Target,
                gradient: 'bg-gradient-to-r from-lime-500 to-green-500'
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-16 h-16 ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 gentle-glow`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600">
              EZ-Termsで学術成功を実現した方々の体験談
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="elegant-card p-8 rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💬 料金プラン
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              ✨ 必要なときだけ、手軽に
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              EZ-Termsでは、使いたいときだけ気軽に使える「チケット制」と、
              継続的に学びたい方向けの「月額プラン」をご用意しています。
            </p>
          </div>

          {/* Ticket Plans */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🎟️ チケットプラン</h3>
              <p className="text-gray-600">💡 必要な分だけ購入して使える！（PayPay対応）</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ticketPlans.map((plan, index) => (
                <div key={index} className={`elegant-card p-8 rounded-2xl hover-lift relative ${plan.popular ? 'ring-2 ring-green-500 gentle-glow' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="text-3xl font-bold text-green-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'gradient-primary text-white hover:opacity-90' 
                      : 'border-2 border-green-500 text-green-600 hover:bg-green-50'
                  }`}>
                    チケット購入
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Guide */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🎫 チケット消費の目安</h3>
            </div>
            
            <div className="elegant-card p-8 rounded-2xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {usageGuide.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">{item.type}</span>
                    <span className="text-green-600 font-bold">{item.tickets}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800 font-semibold">🔒 チケットの有効期限：有効期限なし</span>
                </div>
                <p className="text-green-700 mt-2">使いたいときにいつでも使えます。</p>
              </div>
            </div>
          </div>

          {/* Monthly Plans (Coming Soon) */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📅 月額プラン（※今後提供予定）</h3>
            <div className="elegant-card p-8 rounded-2xl max-w-4xl mx-auto">
              <p className="text-gray-600 mb-6">※現在準備中。今後は月額プランでチケット不要＆プレミアム機能もご利用いただけるようになります。</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">スタンダード</h4>
                  <div className="text-2xl font-bold text-gray-600 mb-2">¥500〜¥700/月</div>
                  <p className="text-gray-600 text-sm">単語帳保存・例文表示・発音記号表示など</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">プロプラン</h4>
                  <div className="text-2xl font-bold text-gray-600 mb-2">¥1,500〜¥2,000/月</div>
                  <p className="text-gray-600 text-sm">PDF/OCR対応、Ankiエクスポート、優先処理など</p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Recommendation */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">💬 どちらを選べばいい？</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="elegant-card p-6 rounded-xl">
                <div className="text-4xl mb-4">🎟️</div>
                <h4 className="font-bold text-gray-900 mb-2">チケット制がおすすめ</h4>
                <p className="text-gray-600">時々使うだけ、まずはお試し</p>
              </div>
              <div className="elegant-card p-6 rounded-xl">
                <div className="text-4xl mb-4">📅</div>
                <h4 className="font-bold text-gray-900 mb-2">月額プランがおすすめ</h4>
                <p className="text-gray-600">定期的に単語帳を作って学びたい（予定）</p>
              </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/signup" className="gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity hover-lift gentle-glow">
              無料トライアルを開始
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors hover-lift">
              営業に問い合わせ
            </Link>
          </div>
          
          {/* Purchase Link */}
          <div className="elegant-card p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🛒 チケット購入はこちら</h3>
            <p className="text-gray-600 mb-4">
              🎉 STORESリンク（外部サイト）からご購入いただけます。<br />
              決済後に届くコードをアプリで入力するだけでOK！
            </p>
            <button className="gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Download className="inline mr-2 w-5 h-5" />
              チケットを購入する
            </button>
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
                <li><a href="#features" className="hover:text-white transition-colors">機能</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">料金</a></li>
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