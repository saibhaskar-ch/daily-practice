import type { Mood } from "../types";
import MoodSelectorItem from "./MoodSelectorItem";
import Axios from "../lib/axios";

const list: Mood[] = [
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

const MoodSelector = () => {
  const handleMoodSelect = async (value: string) => {
    await Axios.post("/api/moods", { mood: value });
  };

  return (
    <div className="flex-1">
      <h3 className="uppercase text-[10px] tracking-widest font-bold mb-5">
        How are you feeling?
      </h3>

      <div className="md:px-5 grid grid-cols-5 gap-6">
        {list.map((item: Mood) => (
          <MoodSelectorItem
            item={item}
            key={item.value}
            onSelect={handleMoodSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
