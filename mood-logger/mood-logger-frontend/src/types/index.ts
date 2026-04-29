type Emoji =
  | "😄"
  | "😌"
  | "😐"
  | "😔"
  | "😤"
  | "😰"
  | "😴"
  | "😡"
  | "🤩"
  | "😊";

type Mood = {
  label: string;
  emoji: Emoji;
  value: string;
};

type RecentMood = {
  loggedAt: string;
  mood: string;
  emoji: string;
};

export type { Mood, RecentMood };
