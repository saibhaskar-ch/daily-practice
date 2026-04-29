import { useEffect, useState } from "react";
import type { RecentMood } from "../types";
import RecentMoodsItem from "./RecentMoodsItem";
import Axios from "../lib/axios";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

const MOOD_EMOJI: Record<string, string> = {
  happy: "😊",
  excited: "😄",
  calm: "😌",
  neutral: "😐",
  sad: "😔",
  frustrated: "😤",
  anxious: "😰",
  tired: "😴",
  angry: "😡",
  grateful: "🤩",
};

const RecentMoods = () => {
  const [recentMoods, setRecentMoods] = useState<RecentMood[]>([]);

  const getMoodWithEmoji = (mood: string) => {
    const emoji = MOOD_EMOJI[mood.toLowerCase()] ?? "❓";
    return emoji;
  };

  const getRelativeTime = (dateStr: string): string => {
    const past = new Date(dateStr);
    const now = new Date();

    const seconds = differenceInSeconds(now, past);
    const minutes = differenceInMinutes(now, past);
    const hours = differenceInHours(now, past);
    const days = differenceInDays(now, past);

    if (seconds <= 60) return "just now";
    if (minutes <= 60) return `${minutes} min ago`;
    if (hours <= 24) return `${hours} hr ago`;
    if (days === 1) return "yesterday";
    return `${days} days ago`;
  };

  useEffect(() => {
    const fetchListOfRecentMoods = async () => {
      const response = await Axios.get("/api/moods");

      const emojiAppendedRecentMoods: RecentMood[] = response.data.map(
        ({
          loggedAt,
          mood,
        }: {
          id: number;
          loggedAt: string;
          mood: string;
        }) => {
          return {
            loggedAt: getRelativeTime(loggedAt),
            mood,
            emoji: getMoodWithEmoji(mood.toLowerCase()),
          };
        },
      );

      setRecentMoods(emojiAppendedRecentMoods);
    };
    fetchListOfRecentMoods();
  }, []);

  return (
    <div className="flex-2">
      <h3 className="uppercase text-[10px] tracking-widest font-bold mb-5">
        Recent Moods
      </h3>
      <div className="md:px-5 max-h-[95%]  overflow-y-auto">
        {recentMoods.map((item: RecentMood, index: number) => (
          <RecentMoodsItem {...item} key={`item.value-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default RecentMoods;
