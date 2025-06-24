// 共通のデータ型定義

export interface VocabularyWord {
  id: number;
  word: string;
  pronunciation: string;
  definition: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  mastery: number;
  examples: string[];
  dateAdded: string;
  source: string;
  confidence?: number;
}

export interface ExtractedWord {
  id: number;
  word: string;
  pronunciation: string;
  definition: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  confidence: number;
  examples: string[];
  source: string;
}

export interface Document {
  id: number;
  title: string;
  words: number;
  date: string;
  type: string;
}

export interface Activity {
  id: number;
  type: "mastered" | "practiced" | "extracted";
  word: string;
  time: string;
  icon: any;
  color: string;
  bg: string;
}

export interface ExtractionSettings {
  difficulty: string;
  subject: string;
  minConfidence: number;
  includePronounciation: boolean;
  includeExamples: boolean;
  maxWords: number;
}

export interface InputMethod {
  id: string;
  label: string;
  icon: any;
  description: string;
}

export interface StatsData {
  totalWords: number;
  masteredWords: number;
  learningWords: number;
  averageMastery: number;
  streakDays: number;
}
