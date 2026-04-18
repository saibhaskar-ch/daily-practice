const FilterButtonList = () => {
  return (
    <div className="mx-5 border-b border-b-border mb-5">
      <ul className="filter-list">
        <li className="selected">
          <button>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Done</button>
        </li>
      </ul>
    </div>
  );
};

export default FilterButtonList;
