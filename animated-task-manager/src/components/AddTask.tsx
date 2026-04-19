import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const AddTask = () => {
  const taskContext = useContext(TaskContext);

  const [description, setDescription] = useState<string>("");

  return (
    <div className="px-5 flex gap-2 mb-3">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        value={description}
      />

      <button
        className="task-add-button"
        onClick={() => {
          taskContext?.addTask(description);
        }}
      >
        + Add
      </button>
    </div>
  );
};

export default AddTask;
