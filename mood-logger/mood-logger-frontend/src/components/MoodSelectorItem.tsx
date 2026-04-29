import type { Mood } from "../types";

type MoodSelectorItemType = {
  item: Mood;
  onSelect: (value: string) => Promise<void>;
};

const MoodSelectorItem = ({ item, onSelect }: MoodSelectorItemType) => {
  const { value, emoji, label } = item;
  return (
    <button
      className="text-center hover:-translate-y-px duration-200"
      onClick={() => {
        onSelect(value);
      }}
    >
      <p className="text-xl">{emoji}</p>
      <p className="text-[8px]">{label}</p>
    </button>
  );
};

export default MoodSelectorItem;
