import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <>
      <Link to={"/character/" + props.character.id}>
        <img
          className="image-character"
          src={props.character.image}
          alt={`image` + props.character.name}
        />
        <h4>{props.character.name}</h4>
        <h4>{props.character.species}</h4>
        <h4>{props.character.planet}</h4>
      </Link>
    </>
  );
};

export default Character;
