import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <div className="px-5 md:max-h-100 max-h-20 overflow-y-scroll">
      <ul>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </div>
  );
};

export default TaskList;
