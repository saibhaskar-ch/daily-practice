import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import type { FilterType } from "../types";

const filterList: {
  title: string;
  value: FilterType;
}[] = [
  { title: "All", value: "ALL" },
  { title: "Active", value: "ACTIVE" },
  { title: "Done", value: "DONE" },
];

const FilterButtonList = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) throw new Error("TaskContext missing");

  const { filterType, setFilterType } = taskContext;

  return (
    <div className="mx-5 border-b border-b-border mb-5">
      <ul className="filter-list">
        {filterList.map(({ title, value }) => (
          <li key={value} className={value == filterType ? "selected" : ""}>
            <button className="" onClick={() => setFilterType(value)}>{title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterButtonList;
