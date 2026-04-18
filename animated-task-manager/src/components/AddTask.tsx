const AddTask = () => {
  return (
    <div className="px-5 flex gap-2 mb-3">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
      />

      <button className="task-add-button">+ Add</button>
    </div>
  );
};

export default AddTask;
