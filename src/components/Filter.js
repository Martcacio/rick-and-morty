import FilterByName from "./FilterByName";
import FilterByPlanet from "./FilterByPlanet";

const Filter = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <div className="container-filter">
      <FilterByName
        handleFilter={props.handleFilter}
        name={props.name}
        handleReset={props.handleReset}
      />
      <FilterByPlanet
        handleFilter={props.handleFilter}
        planet={props.planet}
        handleReset={props.handleReset}
      />
      <span onClick={handleReset} className="reset icon fas fa-times"></span>
    </div>
  );
};

export default Filter;
