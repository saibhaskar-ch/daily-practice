import Heading from "./components/Heading";
import MoodSelector from "./components/MoodSelector";
import RecentMoods from "./components/RecentMoods";

const App = () => {
  return (
    <div className="min-h-screen bg-dot-grid bg-stone-50 flex justify-center">
      <div className="w-full md:max-w-270">
        <Heading />
        <div className="flex gap-15">
          <MoodSelector />
          <RecentMoods />
        </div>
      </div>
    </div>
  );
};

export default App;
