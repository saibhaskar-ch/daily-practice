import { useContext } from "react";
import type { TaskItemType } from "../types";
import Checkbox from "./Checkbox";
import { TaskContext } from "../contexts/TaskContext";

const TaskItem = ({
  item: { id, completed, description },
}: {
  item: TaskItemType;
}) => {
  const { deleteTask, completeTask } = useContext(TaskContext);
  return (
    <>
      <li className="py-2 border-b-2 border-divider flex gap-3 justify-between items-center last:border-b-0">
        <div className="list-left">
          <Checkbox
            checked={completed}
            onChange={() => {
              completeTask(id);
            }}
          />
          <p className={`task-text ${completed ? "line-through" : ""}`}>
            {description}
          </p>
        </div>
        <button
          className="delete-button"
          onClick={() => {
            deleteTask(id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
};

export default TaskItem;
