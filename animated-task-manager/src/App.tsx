import Checkbox from "./components/Checkbox";

const App = () => {
  return (
    <div className="bg-bg-primary min-h-screen flex justify-center items-center">
      <div className="p-5 w-[80%] min-h-30 border-border border rounded-lg bg-bg-secondary">
        {/* Heading */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-text-primary text-lg font-semibold">My tasks</h2>
          <p className="text-xs text-text-secondary">2 of 3 done</p>
        </div>

        {/* Input and Button    */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            className="border-border bg-bg-tertiary border flex-10/12 rounded-lg p-2 text-sm text-text-secondary"
            placeholder="Add a new task..."
          />

          <button className="flex-1/12 bg-white rounded-lg text-sm px-2 text-accent">
            + Add
          </button>
        </div>

        {/* Filter Tabs */}

        <div className="border-b border-b-border mb-5">
          <ul className="filter-list">
            <li className="selected">
              <button>All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Done</button>
            </li>
          </ul>
        </div>

        {/* List */}
        <div>
          <ul>
            <li className="border border-white flex">
              {/* <input type="checkbox" name="" id="" className="w-5 h-5 rounded-full" /> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
