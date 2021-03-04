import Character from "./Character";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  console.log(props.characters);
  if (props.characters.length === 0) {
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
    const characterElements = props.characters.map((character) => {
      return (
        <li className="character-card" key={character.id}>
          <Character character={character} />
        </li>
      );
    });

    return (
      <section>
        <ul className="cards">{characterElements}</ul>
      </section>
    );
  }
};
CharacterList.propTypes = { character: PropTypes.object };
export default CharacterList;
