import type { RecentMood } from "../types";
const RecentMoodsItem = ({ emoji, mood: label, loggedAt }: RecentMood) => {
  return (
    <div className="flex justify-between items-center not-last:mb-5 hover:translate-x-0.5 duration-200">
      <div className="flex gap-3 items-center">
        <p className="text-2xl">{emoji}</p>
        <p className="font-semibold">{label}</p>
      </div>
      <p className="text-xs">{loggedAt}</p>
    </div>
  );
};

export default RecentMoodsItem;
