import { StatsCard } from "./StatsCard";
import * as Icon from "@/lib/icons";
import { VocabularyWord } from "@/types";
import { calculateAverageMastery } from "@/utils/helpers";

interface StatsOverviewProps {
  vocabularyWords: VocabularyWord[];
  streakDays?: number;
}

export const StatsOverview = ({
  vocabularyWords,
  streakDays = 22,
}: StatsOverviewProps) => {
  const masteredWords = vocabularyWords.filter((w) => w.mastery >= 80).length;
  const learningWords = vocabularyWords.filter(
    (w) => w.mastery > 0 && w.mastery < 80
  ).length;
  const averageMastery = calculateAverageMastery(vocabularyWords);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="animate-fade-in">
        <StatsCard
          icon={
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-2">
              <Icon.BookOpen className="w-6 h-6 text-white" />
            </div>
          }
          count={vocabularyWords.length}
          label="総単語数"
        />
      </div>
      <div className="animate-fade-in">
        <StatsCard
          icon={
            <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon.Star className="w-6 h-6 text-white" />
            </div>
          }
          count={masteredWords}
          label="習得済み"
        />
      </div>
      <div className="animate-fade-in">
        <StatsCard
          icon={
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon.Clock className="w-6 h-6 text-white" />
            </div>
          }
          count={streakDays}
          label="連続日数"
        />
      </div>
      <div className="animate-fade-in">
        <StatsCard
          icon={
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon.Target className="w-6 h-6 text-white" />
            </div>
          }
          count={`${averageMastery}%`}
          label="平均習得率"
        />
      </div>
    </div>
  );
};
