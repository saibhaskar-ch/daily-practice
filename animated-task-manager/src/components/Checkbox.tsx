const Checkbox = () => {
  return (
    <div className="relative flex-center">
      <input type="checkbox" id="checkbox" className="peer checkbox checked:bg-success" />
      <label htmlFor="checkbox" className="checkbox-label peer-checked:bg-white peer-checked:after:bg-white"/>
    </div>
  );
};

export default Checkbox;
