"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Volume2,
  Check,
  X,
  Star,
  ChevronRight,
  Pause,
  Play,
  Home,
  BarChart3,
  Settings,
  Lightbulb,
  Zap,
  Target,
} from "lucide-react";

type LearningMode =
  | "en-recognition" // 英→知っているかどうか
  | "jp-recognition" // 日→知っているかどうか
  | "en-to-jp-choice" // 英→日本語訳4択
  | "jp-to-en-choice" // 日→英語4択
  | "audio-to-jp-choice" // 英語音声→日本語4択
  | "audio-recognition"; // 英語音声→知っているかどうか

export default function LearningSessionPage() {
  const router = useRouter();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [learningMode, setLearningMode] =
    useState<LearningMode>("en-recognition");
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    correct: 0,
    incorrect: 0,
    total: 0,
    streak: 0,
    maxStreak: 0,
  });
  const [isPaused, setIsPaused] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showChoiceResult, setShowChoiceResult] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(
    null
  );

  // サンプル単語データ
  const words = [
    {
      id: 1,
      word: "methodology",
      pronunciation: "/mɛθəˈdɒlədʒi/",
      definition: "特定の研究分野や活動で使用される方法のシステム",
      japanese: "方法論",
      difficulty: "intermediate",
      category: "research",
      examples: [
        "研究方法論は論文で明確に概説されていた。",
        "この方法論は多くの研究で採用されている。",
      ],
      hint: "研究で使われる方法論のこと",
      choices: {
        jpChoices: ["方法論", "理論", "実験", "分析"],
        enChoices: ["methodology", "theory", "experiment", "analysis"],
      },
    },
    {
      id: 2,
      word: "paradigm",
      pronunciation: "/ˈpærəˌdaɪm/",
      definition: "何かの典型的な例やパターン；モデル",
      japanese: "パラダイム",
      difficulty: "advanced",
      category: "academic",
      examples: [
        "これは科学的思考のパラダイムシフトを表している。",
        "新しいパラダイムが学界に受け入れられた。",
      ],
      hint: "考え方の枠組みやモデル",
      choices: {
        jpChoices: ["パラダイム", "仮説", "理論", "概念"],
        enChoices: ["paradigm", "hypothesis", "theory", "concept"],
      },
    },
    {
      id: 3,
      word: "empirical",
      pronunciation: "/ɪmˈpɪrɪkəl/",
      definition: "観察や経験に基づく、またはそれによって検証可能な",
      japanese: "実証的な",
      difficulty: "advanced",
      category: "research",
      examples: [
        "この研究は仮説に対する実証的証拠を提供している。",
        "実証的データが理論を支持している。",
      ],
      hint: "実際の観察や実験に基づく",
      choices: {
        jpChoices: ["実証的な", "理論的な", "仮説的な", "概念的な"],
        enChoices: ["empirical", "theoretical", "hypothetical", "conceptual"],
      },
    },
    {
      id: 4,
      word: "hypothesis",
      pronunciation: "/haɪˈpɒθəsɪs/",
      definition: "限られた証拠に基づいて作られた仮定や提案された説明",
      japanese: "仮説",
      difficulty: "intermediate",
      category: "research",
      examples: [
        "仮説は制御された実験を通じてテストされた。",
        "新しい仮説が提案された。",
      ],
      hint: "科学的な推測や仮説",
      choices: {
        jpChoices: ["仮説", "理論", "法則", "原理"],
        enChoices: ["hypothesis", "theory", "law", "principle"],
      },
    },
    {
      id: 5,
      word: "synthesis",
      pronunciation: "/ˈsɪnθəsɪs/",
      definition: "複数の要素を組み合わせて統一された全体を形成すること",
      japanese: "統合",
      difficulty: "intermediate",
      category: "academic",
      examples: [
        "この論文は既存研究の総合的な統合を提供している。",
        "異なる理論の統合が試みられた。",
      ],
      hint: "複数のものを組み合わせること",
      choices: {
        jpChoices: ["統合", "分析", "分離", "分解"],
        enChoices: ["synthesis", "analysis", "separation", "decomposition"],
      },
    },
  ];

  const currentWord = words[currentWordIndex];
  const progress = ((currentWordIndex + 1) / words.length) * 100;

  const learningModes = [
    {
      id: "en-recognition",
      label: "英→知っているか",
      description: "英単語を見て意味を知っているか判断",
    },
    {
      id: "jp-recognition",
      label: "日→知っているか",
      description: "日本語を見て英単語を知っているか判断",
    },
    {
      id: "en-to-jp-choice",
      label: "英→日本語4択",
      description: "英単語の日本語訳を4択から選択",
    },
    {
      id: "jp-to-en-choice",
      label: "日→英語4択",
      description: "日本語の英単語を4択から選択",
    },
    {
      id: "audio-to-jp-choice",
      label: "音声→日本語4択",
      description: "英語音声の日本語訳を4択から選択",
    },
    {
      id: "audio-recognition",
      label: "音声→知っているか",
      description: "英語音声を聞いて意味を知っているか判断",
    },
  ];

  // セッション時間の管理
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused && !isSessionComplete) {
      interval = setInterval(() => {
        setSessionTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, isSessionComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (isCorrect: boolean) => {
    setLastAnswerCorrect(isCorrect);
    setSessionStats((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      return {
        ...prev,
        [isCorrect ? "correct" : "incorrect"]:
          prev[isCorrect ? "correct" : "incorrect"] + 1,
        total: prev.total + 1,
        streak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak),
      };
    });

    // 次の単語に進む
    setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prev) => prev + 1);
        setShowAnswer(false);
        setShowHint(false);
        setSelectedChoice(null);
        setShowChoiceResult(false);
        setLastAnswerCorrect(null);
      } else {
        setIsSessionComplete(true);
      }
    }, 2000);
  };

  const handleChoiceAnswer = (
    selectedChoice: string,
    correctAnswer: string
  ) => {
    const isCorrect = selectedChoice === correctAnswer;
    setSelectedChoice(selectedChoice);
    setShowChoiceResult(true);
    setLastAnswerCorrect(isCorrect);

    setSessionStats((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      return {
        ...prev,
        [isCorrect ? "correct" : "incorrect"]:
          prev[isCorrect ? "correct" : "incorrect"] + 1,
        total: prev.total + 1,
        streak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak),
      };
    });

    // 次の単語に進む
    setTimeout(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prev) => prev + 1);
        setShowAnswer(false);
        setShowHint(false);
        setSelectedChoice(null);
        setShowChoiceResult(false);
        setLastAnswerCorrect(null);
      } else {
        setIsSessionComplete(true);
      }
    }, 2000);
  };

  const playPronunciation = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      utterance.lang = "en-US";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "初級";
      case "intermediate":
        return "中級";
      case "advanced":
        return "上級";
      default:
        return "不明";
    }
  };

  const getChoiceButtonClass = (choice: string, correctAnswer: string) => {
    if (!showChoiceResult) {
      return "p-6 bg-white border-2 border-gray-200 rounded-xl text-xl font-medium hover:border-green-500 hover:bg-green-50 transition-colors";
    }

    if (choice === correctAnswer) {
      return "p-6 bg-green-100 border-2 border-green-500 rounded-xl text-xl font-medium text-green-800";
    }

    if (choice === selectedChoice && choice !== correctAnswer) {
      return "p-6 bg-red-100 border-2 border-red-500 rounded-xl text-xl font-medium text-red-800";
    }

    return "p-6 bg-gray-100 border-2 border-gray-300 rounded-xl text-xl font-medium text-gray-500";
  };

  const renderLearningContent = () => {
    switch (learningMode) {
      case "en-recognition":
        return (
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              {currentWord.word}
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <p className="text-2xl text-gray-600">
                {currentWord.pronunciation}
              </p>
              <button
                onClick={playPronunciation}
                className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
            {!showAnswer ? (
              <div className="space-y-8">
                <p className="text-2xl text-gray-600 mb-12">
                  この単語の意味を知っていますか？
                </p>
                <div className="flex justify-center space-x-6">
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    答えを見る
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="bg-gray-50 rounded-xl p-8">
                  <p className="text-3xl font-semibold text-gray-900 mb-4">
                    {currentWord.japanese}
                  </p>
                  <p className="text-xl text-gray-700">
                    {currentWord.definition}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 font-medium">
                    知っていましたか？
                  </p>
                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={() => handleAnswer(false)}
                      className="flex items-center space-x-3 px-12 py-6 bg-red-500 text-white rounded-xl text-xl font-semibold hover:bg-red-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                      <span>知らなかった</span>
                    </button>
                    <button
                      onClick={() => handleAnswer(true)}
                      className="flex items-center space-x-3 px-12 py-6 bg-green-500 text-white rounded-xl text-xl font-semibold hover:bg-green-600 transition-colors"
                    >
                      <Check className="w-6 h-6" />
                      <span>知っていた</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "jp-recognition":
        return (
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-12">
              {currentWord.japanese}
            </h1>
            {!showAnswer ? (
              <div className="space-y-8">
                <p className="text-2xl text-gray-600 mb-12">
                  この日本語の英単語を知っていますか？
                </p>
                <div className="flex justify-center space-x-6">
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    答えを見る
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="bg-gray-50 rounded-xl p-8">
                  <p className="text-3xl font-semibold text-gray-900 mb-4">
                    {currentWord.word}
                  </p>
                  <p className="text-xl text-gray-600">
                    {currentWord.pronunciation}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 font-medium">
                    知っていましたか？
                  </p>
                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={() => handleAnswer(false)}
                      className="flex items-center space-x-3 px-12 py-6 bg-red-500 text-white rounded-xl text-xl font-semibold hover:bg-red-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                      <span>知らなかった</span>
                    </button>
                    <button
                      onClick={() => handleAnswer(true)}
                      className="flex items-center space-x-3 px-12 py-6 bg-green-500 text-white rounded-xl text-xl font-semibold hover:bg-green-600 transition-colors"
                    >
                      <Check className="w-6 h-6" />
                      <span>知っていた</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "en-to-jp-choice":
        return (
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              {currentWord.word}
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <p className="text-2xl text-gray-600">
                {currentWord.pronunciation}
              </p>
              <button
                onClick={playPronunciation}
                className="p-3 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>
            <p className="text-2xl text-gray-600 mb-12">
              正しい日本語訳を選んでください
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {currentWord.choices.jpChoices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() =>
                    !showChoiceResult &&
                    handleChoiceAnswer(choice, currentWord.japanese)
                  }
                  disabled={showChoiceResult}
                  className={getChoiceButtonClass(choice, currentWord.japanese)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        );

      case "jp-to-en-choice":
        return (
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-12">
              {currentWord.japanese}
            </h1>
            <p className="text-2xl text-gray-600 mb-12">
              正しい英単語を選んでください
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {currentWord.choices.enChoices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() =>
                    !showChoiceResult &&
                    handleChoiceAnswer(choice, currentWord.word)
                  }
                  disabled={showChoiceResult}
                  className={getChoiceButtonClass(choice, currentWord.word)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        );

      case "audio-to-jp-choice":
        return (
          <div className="text-center">
            <div className="mb-12">
              <button
                onClick={playPronunciation}
                className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:opacity-90 transition-opacity mx-auto flex items-center justify-center mb-6"
              >
                <Volume2 className="w-12 h-12" />
              </button>
              <p className="text-2xl text-gray-600">
                音声を聞いて、正しい日本語訳を選んでください
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {currentWord.choices.jpChoices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() =>
                    !showChoiceResult &&
                    handleChoiceAnswer(choice, currentWord.japanese)
                  }
                  disabled={showChoiceResult}
                  className={getChoiceButtonClass(choice, currentWord.japanese)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        );

      case "audio-recognition":
        return (
          <div className="text-center">
            <div className="mb-12">
              <button
                onClick={playPronunciation}
                className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:opacity-90 transition-opacity mx-auto flex items-center justify-center mb-6"
              >
                <Volume2 className="w-12 h-12" />
              </button>
            </div>
            {!showAnswer ? (
              <div className="space-y-8">
                <p className="text-2xl text-gray-600 mb-12">
                  この音声の意味を知っていますか？
                </p>
                <div className="flex justify-center space-x-6">
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    答えを見る
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                <div className="bg-gray-50 rounded-xl p-8">
                  <p className="text-3xl font-semibold text-gray-900 mb-4">
                    {currentWord.word}
                  </p>
                  <p className="text-2xl text-gray-700 mb-4">
                    {currentWord.japanese}
                  </p>
                  <p className="text-xl text-gray-600">
                    {currentWord.definition}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 font-medium">
                    知っていましたか？
                  </p>
                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={() => handleAnswer(false)}
                      className="flex items-center space-x-3 px-12 py-6 bg-red-500 text-white rounded-xl text-xl font-semibold hover:bg-red-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                      <span>知らなかった</span>
                    </button>
                    <button
                      onClick={() => handleAnswer(true)}
                      className="flex items-center space-x-3 px-12 py-6 bg-green-500 text-white rounded-xl text-xl font-semibold hover:bg-green-600 transition-colors"
                    >
                      <Check className="w-6 h-6" />
                      <span>知っていた</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (isSessionComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              セッション完了！
            </h1>
            <p className="text-gray-600 mb-8">
              お疲れさまでした。素晴らしい学習でした！
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {sessionStats.correct}
                </div>
                <div className="text-sm text-gray-600">正解</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {sessionStats.incorrect}
                </div>
                <div className="text-sm text-gray-600">不正解</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {sessionStats.maxStreak}
                </div>
                <div className="text-sm text-gray-600">最大連続正解</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatTime(sessionTime)}
                </div>
                <div className="text-sm text-gray-600">学習時間</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-lg font-semibold text-gray-900 mb-2">
                正解率:{" "}
                {sessionStats.total > 0
                  ? Math.round(
                      (sessionStats.correct / sessionStats.total) * 100
                    )
                  : 0}
                %
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      sessionStats.total > 0
                        ? (sessionStats.correct / sessionStats.total) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/app/learn")}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Home className="w-5 h-5" />
                <span>学習センターに戻る</span>
              </button>
              <button
                onClick={() => router.push("/app/analytics")}
                className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-green-500 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                <span>詳細分析を見る</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/app/learn")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>学習センターに戻る</span>
            </button>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-600">
                {currentWordIndex + 1} / {words.length}
              </div>
              <div className="text-sm text-gray-600">
                時間: {formatTime(sessionTime)}
              </div>
              <button
                onClick={() => setShowModeSelector(!showModeSelector)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>モード変更</span>
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {isPaused ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <Pause className="w-4 h-4" />
                )}
                <span>{isPaused ? "再開" : "一時停止"}</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Mode Selector */}
          {showModeSelector && (
            <div className="mt-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">
                学習モードを選択
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {learningModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setLearningMode(mode.id as LearningMode);
                      setShowModeSelector(false);
                      setShowAnswer(false);
                      setShowHint(false);
                      setSelectedChoice(null);
                      setShowChoiceResult(false);
                      setLastAnswerCorrect(null);
                    }}
                    className={`p-3 text-left rounded-lg border-2 transition-colors ${
                      learningMode === mode.id
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{mode.label}</div>
                    <div className="text-sm text-gray-600">
                      {mode.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content - 新しいレイアウト */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 h-full">
            {/* Left Sidebar - Stats */}
            <div className="col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  学習状況
                </h3>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {sessionStats.correct}
                    </div>
                    <div className="text-sm text-gray-600">正解</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      {sessionStats.incorrect}
                    </div>
                    <div className="text-sm text-gray-600">不正解</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                      {sessionStats.streak}
                    </div>
                    <div className="text-sm text-gray-600">連続正解</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {sessionStats.total > 0
                        ? Math.round(
                            (sessionStats.correct / sessionStats.total) * 100
                          )
                        : 0}
                      %
                    </div>
                    <div className="text-sm text-gray-600">正解率</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-10">
              {/* Flashcard */}
              <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-emerald-500 rounded-full"></div>
                  <div className="absolute top-1/2 right-20 w-12 h-12 bg-green-400 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  {/* Word Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(
                          currentWord.difficulty
                        )}`}
                      >
                        {getDifficultyText(currentWord.difficulty)}
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {currentWord.category}
                      </span>
                      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {
                          learningModes.find((m) => m.id === learningMode)
                            ?.label
                        }
                      </span>
                    </div>
                  </div>

                  {/* Learning Content */}
                  {renderLearningContent()}

                  {/* Hint Section */}
                  {(learningMode === "en-recognition" ||
                    learningMode === "jp-recognition" ||
                    learningMode === "audio-recognition") &&
                    !showAnswer && (
                      <div className="mt-12 text-center">
                        {!showHint ? (
                          <button
                            onClick={() => setShowHint(true)}
                            className="flex items-center space-x-2 px-8 py-4 bg-yellow-100 text-yellow-700 rounded-xl font-medium hover:bg-yellow-200 transition-colors mx-auto"
                          >
                            <Lightbulb className="w-5 h-5" />
                            <span>ヒントを見る</span>
                          </button>
                        ) : (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                            <div className="flex items-center justify-center space-x-2 mb-3">
                              <Lightbulb className="w-6 h-6 text-yellow-600" />
                              <span className="font-medium text-yellow-800 text-lg">
                                ヒント
                              </span>
                            </div>
                            <p className="text-yellow-800 text-lg">
                              {currentWord.hint}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                </div>
              </div>

              {/* Result and Examples Section - 選択肢の下に表示 */}
              {showChoiceResult && (
                <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
                  {/* 正解・不正解の表示 */}
                  <div
                    className={`mb-6 p-6 rounded-xl ${
                      lastAnswerCorrect
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      {lastAnswerCorrect ? (
                        <>
                          <Check className="w-8 h-8 text-green-600" />
                          <span className="text-2xl font-bold text-green-800">
                            正解！
                          </span>
                        </>
                      ) : (
                        <>
                          <X className="w-8 h-8 text-red-600" />
                          <span className="text-2xl font-bold text-red-800">
                            不正解
                          </span>
                        </>
                      )}
                    </div>

                    <div className="text-center space-y-3">
                      <p className="text-xl text-gray-700">
                        <span className="font-semibold">正解:</span>{" "}
                        {learningMode === "en-to-jp-choice" ||
                        learningMode === "audio-to-jp-choice"
                          ? currentWord.japanese
                          : currentWord.word}
                      </p>
                      <p className="text-lg text-gray-600">
                        {currentWord.definition}
                      </p>
                      {learningMode.includes("jp") && (
                        <p className="text-lg text-gray-600">
                          {currentWord.pronunciation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 例文セクション */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      例文
                    </h4>
                    <div className="space-y-3">
                      {currentWord.examples.map((example, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-4 border border-gray-200"
                        >
                          <p className="text-gray-700 italic">"{example}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
