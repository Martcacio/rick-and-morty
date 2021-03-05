import Character from "./Character";
import PropTypes from "prop-types";
import fail from "../images/fail.jpg";

const CharacterList = (props) => {
  console.log(props.characters);
  if (props.characters.length === 0) {
    return (
      <div className="container-card-fail">
        <section className="character-card-fail">
          <img className="image-fail" src={fail} alt="fail image" />
        </section>
      </div>
    );
  } else {
    const characterElements = props.characters.map((character) => {
      return (
        <li className="character-card" key={character.id}>
          <Character character={character} />
        </li>
      );
    });

    return (
      <section className="cards-container">
        <ul className="cards">{characterElements}</ul>
      </section>
    );
  }
};
CharacterList.propTypes = { character: PropTypes.object };
export default CharacterList;
