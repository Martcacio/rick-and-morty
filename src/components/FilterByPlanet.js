const FilterByPlanet = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "planet", value: ev.target.value });
  };
  return (
    <form className="filter-planet">
      <label className="" htmlFor="name">
        Filtrar por planeta:
      </label>
      <select
        className=""
        type="text"
        name="planet"
        value={props.planet}
        id="planet"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Earth (C-137)">Earth (C-137)</option>
        <option value="Earth (Replacement Dimension)">
          Earth (Replacement Dimension)
        </option>
        <option value="Abadango">Abadango</option>
        <option value="unknown">unknown</option>
      </select>
    </form>
  );
};

export default FilterByPlanet;
