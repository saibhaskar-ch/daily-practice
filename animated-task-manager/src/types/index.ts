import type React from "react";

type TaskItemType = {
  id: number;
  description: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: TaskItemType[];
  filterType: FilterType;
  setFilterType: React.Dispatch<React.SetStateAction<FilterType>>;
  completedCount: number;
  totalCount: number;
  addTask: (description: string) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

type FilterType = "ALL" | "ACTIVE" | "DONE";

export type { TaskItemType, TaskContextType, FilterType };
