const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "name", value: ev.target.value });
  };
  const handleDefault = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleDefault}>
      <input
        className="filter-name-input"
        type="text"
        name="name"
        value={props.name}
        placeholder=" Search"
        id="id"
        species="species"
        onChange={handleChange}
      />
    </form>
  );
};

export default FilterByName;
