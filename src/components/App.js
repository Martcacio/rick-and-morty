import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Filter from "./Filter";
import getDataFromApi from "../services/api";
import CharacterDetail from "./CharacterDetail";
import logo from "../images/logo.png";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("all");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);
  const handleFilter = (dataFilter) => {
    if (dataFilter.key === "name") {
      setName(dataFilter.value);
      console.log();
    } else if (dataFilter.key === "planet") {
      setPlanet(dataFilter.value);
    }
  };

  const handleReset = () => {
    setName("");
    setPlanet("all");
  };
  const filterCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((character) => {
      return planet === "all" ? true : character.planet === planet;
    });
  const renderHome = (props) => {
    return (
      <>
        <section className="header">
          <img className="logo" src={logo} alt="Rick y Morty logo" />{" "}
          <Filter
            className="filters"
            handleFilter={handleFilter}
            handleReset={handleReset}
            name={name}
            planet={planet}
          />
        </section>
        <CharacterList characters={filterCharacters} />
      </>
    );
  };
  const renderDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const selectedCharacter = characters.find((character) => {
      return character.id === id;
    });
    return <CharacterDetail selectedCharacter={selectedCharacter} />;
  };
  return (
    <>
      <Switch>
        <Route path="/character/:id" render={renderDetail} />
        <Route exact path="/" render={renderHome} />
      </Switch>
    </>
  );
};

export default App;
