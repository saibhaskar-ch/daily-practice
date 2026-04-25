import type { Mood } from "../types";



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
  return (
    <div className="flex-1">
      <h3 className="uppercase text-xs tracking-wider font-semibold mb-5">
        How are you feeling?
      </h3>

      <div className="md:px-5 grid grid-cols-5 gap-6">
        {list.map((item: Mood) => (
          <div key={item.value} className="text-center">
            <p className="text-xl">{item.emoji}</p>
            <p className="text-[8px]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
