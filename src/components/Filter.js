import FilterByName from "./FilterByName";
import FilterByPlanet from "./FilterByPlanet";

const Filter = (props) => {
  return (
    <>
      <FilterByName handleFilter={props.handleFilter} name={props.name} />{" "}
      <FilterByPlanet handleFilter={props.handleFilter} name={props.planet} />{" "}
    </>
  );
};

export default Filter;
