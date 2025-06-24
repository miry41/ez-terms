// 一時保存用のモックデータ
import * as Icon from "@/lib/icons";
import {
  VocabularyWord,
  ExtractedWord,
  Document,
  Activity,
  InputMethod,
} from "@/types";

export const mockVocabularyWords: VocabularyWord[] = [
  {
    id: 1,
    word: "methodology",
    pronunciation: "/mɛθəˈdɒlədʒi/",
    definition: "特定の研究分野や活動で使用される方法のシステム",
    difficulty: "intermediate",
    category: "research",
    mastery: 85,
    examples: ["研究方法論は論文で明確に概説されていた。"],
    dateAdded: "2024-01-15",
    source: "学術論文 #1",
  },
  {
    id: 2,
    word: "paradigm",
    pronunciation: "/ˈpærəˌdaɪm/",
    definition: "何かの典型的な例やパターン；モデル",
    difficulty: "advanced",
    category: "academic",
    mastery: 72,
    examples: ["これは科学的思考のパラダイムシフトを表している。"],
    dateAdded: "2024-01-14",
    source: "研究記事",
  },
  {
    id: 3,
    word: "empirical",
    pronunciation: "/ɪmˈpɪrɪkəl/",
    definition: "観察や経験に基づく、またはそれによって検証可能な",
    difficulty: "advanced",
    category: "research",
    mastery: 91,
    examples: ["この研究は仮説に対する実証的証拠を提供している。"],
    dateAdded: "2024-01-13",
    source: "科学ジャーナル",
  },
];

export const mockExtractedWords: ExtractedWord[] = [
  {
    id: 1,
    word: "methodology",
    pronunciation: "/mɛθəˈdɒlədʒi/",
    definition: "特定の研究分野や活動で使用される方法のシステム",
    difficulty: "intermediate",
    category: "research",
    confidence: 95,
    examples: ["研究方法論は論文で明確に概説されていた。"],
    source: "現在のテキスト入力",
  },
  {
    id: 2,
    word: "paradigm",
    pronunciation: "/ˈpærəˌdaɪm/",
    definition: "何かの典型的な例やパターン；モデル",
    difficulty: "advanced",
    category: "academic",
    confidence: 88,
    examples: ["これは科学的思考のパラダイムシフトを表している。"],
    source: "現在のテキスト入力",
  },
];

export const mockRecentDocuments: Document[] = [
  {
    id: 1,
    title: "機械学習研究論文",
    words: 89,
    date: "2024-01-15",
    type: "PDF",
  },
  {
    id: 2,
    title: "量子コンピューティング記事",
    words: 67,
    date: "2024-01-14",
    type: "URL",
  },
  {
    id: 3,
    title: "バイオテクノロジー論文",
    words: 91,
    date: "2024-01-13",
    type: "DOCX",
  },
];

export const mockRecentActivity: Activity[] = [
  {
    id: 1,
    type: "mastered",
    word: "empirical",
    time: "2時間前",
    icon: Icon.Star,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    id: 2,
    type: "practiced",
    word: "フラッシュカードセッション",
    time: "1日前",
    icon: Icon.BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 3,
    type: "extracted",
    word: "15個の新しい用語",
    time: "2日前",
    icon: Icon.Zap,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export const mockInputMethods: InputMethod[] = [
  {
    id: "text",
    label: "テキスト入力",
    icon: Icon.Edit,
    description: "テキストを直接貼り付けまたは入力",
  },
  {
    id: "upload",
    label: "ファイルアップロード",
    icon: Icon.Upload,
    description: "PDF、DOCX、TXTファイルをアップロード",
  },
  {
    id: "url",
    label: "Web URL",
    icon: Icon.Home,
    description: "Web記事から抽出",
  },
  {
    id: "image",
    label: "画像OCR",
    icon: Icon.Eye,
    description: "画像からテキストを抽出",
  },
];

export const mockCategories = [
  "all",
  "research",
  "academic",
  "science",
  "technology",
  "medicine",
];

export const mockDifficulties = ["all", "beginner", "intermediate", "advanced"];

export const mockExtractionSettings = {
  difficulty: "all",
  subject: "auto",
  minConfidence: 80,
  includePronounciation: true,
  includeExamples: true,
  maxWords: 50,
};
