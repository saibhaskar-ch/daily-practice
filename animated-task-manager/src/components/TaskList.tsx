import { useContext, useRef } from "react";
import { TaskContext } from "../contexts/TaskContext";
import type { FilterType, TaskItemType as Task } from "../types";
import TaskItem from "./TaskItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function parseList(list: Task[], type: FilterType): Task[] {

  if(list.length==0) return list;

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

  const listRef = useRef<HTMLUListElement>(null);
  const prevLengthRef = useRef(tasks.length);

  const parsedTasks = parseList(tasks, filterType);

  useGSAP(
    () => {
      if (!listRef.current) return;
      const items = listRef.current.querySelectorAll("li");

      if (items.length === 0) return;

      const prevLength = prevLengthRef.current;
      if (tasks.length > prevLength) {
        const lastItem = items[items.length - 1];
        if (lastItem) {
          gsap.from(lastItem, {
            y: 24,
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      }
      prevLengthRef.current = tasks.length;
    },
    { scope: listRef, dependencies: [tasks.length] },
  );

  useGSAP(
    () => {
      if (!listRef.current) return;
      gsap.from(listRef.current.querySelectorAll("li"), {
        y: 24,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.07,
      });
    },
    { scope: listRef, dependencies: [filterType] },
  );

  return (
    <div className="px-5 md:max-h-100 max-h-20 overflow-y-scroll">
      {parsedTasks.length > 0 ? (
        <ul ref={listRef}>
          {parsedTasks.map((item: Task, key) => (
            <TaskItem item={item} key={key} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-text-primary text-sm">
          No Tasks Found...
        </p>
      )}
    </div>
  );
};

export default TaskList;
