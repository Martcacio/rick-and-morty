import React from "react";
import { Link } from "react-router-dom";
import dead from "../images/dead.png";

const CharacterDetail = (props) => {
  console.log(props);
  if (props.selectedCharacter === undefined) {
    return (
      <div className="">
        <div className="">
          <header className="">
            <h2 className="">No sé Rick, parece falso</h2>
            <Link to="/">
              <span className="icon fas fa-times"></span>
            </Link>
          </header>
          <section>
            <p>x</p>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="container-card-one">
          <header className="">
            <h2 className="name-card-one">{props.selectedCharacter.name}</h2>
            <Link to="/" className="cross">
              <span className="icon fas fa-times"></span>
            </Link>
          </header>
          <section className="character-card-one">
            <ul className="cardsDetail">
              <img
                className="image-one"
                src={props.selectedCharacter.image}
                alt={`image` + props.selectedCharacter.name}
              />
              <h4 className="specie-one">
                Species:{props.selectedCharacter.species}
              </h4>
              <h4 className="planet-one">
                Planet:{props.selectedCharacter.planet}
              </h4>
              <h4 className="episodes-one">
                Nº episodes: {props.selectedCharacter.episodes}
              </h4>
              <h4 className="dead">
                {props.selectedCharacter.status === "Alive" ? (
                  ""
                ) : (
                  <img className="dead" src={dead} alt="dead" />
                )}
              </h4>
            </ul>
          </section>
        </div>
      </div>
    );
  }
};

export default CharacterDetail;
