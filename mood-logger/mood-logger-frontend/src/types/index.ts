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

export type { Mood };
