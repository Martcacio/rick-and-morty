import planet from "../images/planet.png";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "gender", value: ev.target.value });
  };
  return (
    <form className="filter-planet-container">
      <label className="filter-planet-label" htmlFor="name">
        Search by:
      </label>
      <select
        className="filter-planet-select"
        type="text"
        name="gender"
        value={props.gender}
        id="gender"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </form>
  );
};

export default FilterByGender;
