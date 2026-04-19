import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import type { FilterType, TaskItemType as Task } from "../types";
import TaskItem from "./TaskItem";

function parseList(list: Task[], type: FilterType): Task[] {
  switch (type) {
    case "ACTIVE":
      return list.filter((item: Task) => !item.completed);
    case "DONE":
      return list.filter((item: Task) => item.completed);
    case "ALL":
    default:
      return list;
  }
}

const TaskList = () => {
  const { tasks = [], filterType } = useContext(TaskContext);

  return (
    <div className="px-5 md:max-h-100 max-h-20 overflow-y-scroll">
      <ul>
        {parseList(tasks, filterType).map((item:Task, key) => (
          <TaskItem item={item} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
