import Checkbox from "./Checkbox";

const TaskItem = () => {
  return (
    <>
      <li className="py-2 border-b-2 border-divider flex gap-3 justify-between items-center last:border-b-0">
        <div className="list-left">
          <Checkbox />
          <p className="task-text">Testing asdfasdfasdfasdfasdf</p>
        </div>
        <button className="delete-button">X</button>
      </li>
    </>
  );
};

export default TaskItem;
