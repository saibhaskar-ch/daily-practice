import type React from "react";
import { useCallback, useReducer, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { type FilterType, type TaskItem } from "../types";

type AddTaskAction = {
  type: "ADD_TASK";
  payload: {
    description: string;
  };
};

type CompleteorDeleteTaskAction = {
  type: "COMPLETE_TASK" | "DELETE_TASK";
  payload: {
    id: number;
  };
};

type ActionType = AddTaskAction | CompleteorDeleteTaskAction;

function taskReducer(state: TaskItem[], action: ActionType) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000) + 1,
          description: action.payload.description,
          completed: false,
        },
      ];

    case "COMPLETE_TASK":
      return state.map((task: TaskItem) =>
        task.id === action.payload.id ? { ...task, completed: true } : task,
      );

    case "DELETE_TASK":
      return state.filter((task: TaskItem) => task.id !== action.payload.id);

    default:
      return state;
  }
}

const initialState: TaskItem[] = [];

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [...initialState]);

  const [filterType, setFilterType] = useState<FilterType>("ALL");

  const totalCount = tasks.length;
  const completedCount = tasks.filter((t: TaskItem) => t.completed).length;

  const addTask = useCallback((description: string) => {
    const trimmed = description?.trim();
    if (!trimmed) return;
    dispatch({ type: "ADD_TASK", payload: { description: trimmed } });
  }, []);

  const completeTask = useCallback((id: number) => {
    dispatch({ type: "COMPLETE_TASK", payload: { id } });
  }, []);

  const deleteTask = useCallback((id: number) => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filterType,
        setFilterType,
        completedCount,
        totalCount,
        addTask,
        completeTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
