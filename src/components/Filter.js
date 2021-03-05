import FilterByName from "./FilterByName";
import FilterByPlanet from "./FilterByPlanet";

const Filter = (props) => {
  return (
    <div className="container-filter">
      <FilterByName handleFilter={props.handleFilter} name={props.name} />{" "}
      <FilterByPlanet handleFilter={props.handleFilter} name={props.planet} />{" "}
    </div>
  );
};

export default Filter;
