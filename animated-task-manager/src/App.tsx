import AddTask from "./components/AddTask";
import FilterButtonList from "./components/FilterButtonList";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        {/* Heading */}
        <Heading />

        {/* Add Task */}
        <AddTask />

        {/* Filter Tabs */}

        <FilterButtonList />

        {/* List */}
        <TaskList />
      </div>
    </div>
  );
};

export default App;
