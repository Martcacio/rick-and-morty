const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "name", value: ev.target.value });
  };
  const handleDefault = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="filter-name" onSubmit={handleDefault}>
      <label className="" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className=""
        type="text"
        name="name"
        value={props.name}
        id="id"
        species="species"
        onChange={handleChange}
      />
    </form>
  );
};

export default FilterByName;
