import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <div className="container-list">
      <Link className="link" to={"/character/" + props.character.id}>
        <img
          className="character__image"
          src={props.character.image}
          alt={`image` + props.character.name}
        />
        <h4 className="character-name">{props.character.name}</h4>
        <h4 className="character-specie">{props.character.species}</h4>
        <h4 className="character-planet">{props.character.planet}</h4>
      </Link>
    </div>
  );
};

export default Character;
