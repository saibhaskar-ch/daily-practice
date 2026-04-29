import Heading from "./components/Heading";
import MoodSelector from "./components/MoodSelector";
import RecentMoods from "./components/RecentMoods";

const App = () => {
  return (
    <div className="min-h-screen bg-dot-grid bg-stone-50 bg-fixed flex justify-center">
      <div className="w-full max-h-screen md:max-w-270">
        <Heading />
        <div className="flex flex-col lg:flex-row gap-15 lg:max-h-[70%]">
          <MoodSelector />
          <RecentMoods />
        </div>
      </div>
    </div>
  );
};

export default App;
