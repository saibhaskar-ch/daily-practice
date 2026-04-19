import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Heading = () => {
  const taskContext = useContext(TaskContext);

  return (
    <div className="px-5 pt-5 flex justify-between items-center mb-3">
      <h2 className="text-text-primary text-lg font-semibold">My tasks</h2>
      {taskContext?.totalCount ? (
        <p className="text-xs text-text-secondary">
          {taskContext?.completedCount} of {taskContext?.totalCount} done
        </p>
      ) : null}
    </div>
  );
};

export default Heading;
