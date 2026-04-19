import AddTask from "./components/AddTask";
import FilterButtonList from "./components/FilterButtonList";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskProvider from "./components/TaskProvider";

const App = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        {/* Heading */}
        <TaskProvider>
          <Heading />

          {/* Add Task */}
          <AddTask />

          {/* Filter Tabs */}

          <FilterButtonList />

          {/* List */}
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  );
};

export default App;
