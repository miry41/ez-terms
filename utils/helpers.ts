// 共通のヘルパー関数

export const getDifficultyColor = (difficulty: string) => {
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

export const getDifficultyText = (difficulty: string) => {
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

export const getCategoryText = (category: string) => {
  switch (category) {
    case "research":
      return "研究";
    case "academic":
      return "学術";
    case "science":
      return "科学";
    case "technology":
      return "テクノロジー";
    case "medicine":
      return "医学";
    default:
      return category;
  }
};

export const getMasteryColor = (mastery: number) => {
  if (mastery >= 80) return "text-green-600";
  if (mastery >= 50) return "text-yellow-600";
  return "text-red-600";
};

export const getConfidenceColor = (confidence: number) => {
  if (confidence >= 90) return "text-green-600";
  if (confidence >= 70) return "text-yellow-600";
  return "text-red-600";
};

export const calculateAverageMastery = (words: any[]) => {
  if (words.length === 0) return 0;
  return Math.round(
    words.reduce((acc, w) => acc + w.mastery, 0) / words.length
  );
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ja-JP");
};
