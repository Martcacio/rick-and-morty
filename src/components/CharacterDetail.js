import React from "react";
import { Link } from "react-router-dom";

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
        <div className="">
          <header className="">
            <h2 className="">{props.selectedCharacter.name}</h2>
            <Link to="/">
              <span className="icon fas fa-times"></span>
            </Link>
          </header>
          <section>
            <ul className="cardsDetail">
              <img
                className=""
                src={props.selectedCharacter.image}
                alt={`image` + props.selectedCharacter.name}
              />
              <h4>{props.selectedCharacter.name}</h4>
              <h4>Species:{props.selectedCharacter.species}</h4>
              <h4>Planet:{props.selectedCharacter.planet}</h4>
              <h4>Nº episodes: {props.selectedCharacter.episodes}</h4>
              <h4>
                Dead or alive:
                {props.selectedCharacter.status === "Alive"
                  ? props.selectedCharacter.status
                  : "fa-bath"}
              </h4>
            </ul>
          </section>
        </div>
      </div>
    );
  }
};

export default CharacterDetail;
