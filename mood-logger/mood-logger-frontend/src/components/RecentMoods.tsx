import type { Mood } from "../types";

const recentMoodList: Mood[] = [
  { label: "Happy", emoji: "😊", value: "happy" },
  { label: "Excited", emoji: "😄", value: "excited" },
  { label: "Calm", emoji: "😌", value: "calm" },
  { label: "Neutral", emoji: "😐", value: "neutral" },
  { label: "Sad", emoji: "😔", value: "sad" },
  { label: "Frustrated", emoji: "😤", value: "frustrated" },
  { label: "Anxious", emoji: "😰", value: "anxious" },
  { label: "Tired", emoji: "😴", value: "tired" },
  { label: "Angry", emoji: "😡", value: "angry" },
  { label: "Greateful", emoji: "🤩", value: "greateful" },
  { label: "Happy", emoji: "😊", value: "happy" },
  { label: "Excited", emoji: "😄", value: "excited" },
  { label: "Calm", emoji: "😌", value: "calm" },
  { label: "Neutral", emoji: "😐", value: "neutral" },
  { label: "Sad", emoji: "😔", value: "sad" },
  { label: "Frustrated", emoji: "😤", value: "frustrated" },
  { label: "Anxious", emoji: "😰", value: "anxious" },
  { label: "Tired", emoji: "😴", value: "tired" },
  { label: "Angry", emoji: "😡", value: "angry" },
  { label: "Greateful", emoji: "🤩", value: "greateful" },
];

const RecentMoods = () => {
  return (
    <div className="flex-2">
      <h3 className="uppercase text-xs tracking-wider font-semibold mb-5">
        Recent Moods
      </h3>
      <div className="md:px-5 max-h-[54%] overflow-y-auto">
        {recentMoodList.map((item: Mood) => (
          <div className="flex justify-between items-center not-last:mb-5">
            <div className="flex gap-3 items-center">
              <p className="text-2xl">{item.emoji}</p>
              <p className="font-semibold">{item.label}</p>
            </div>
            <p className="text-xs">just now</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMoods;
