import Loading from "./Loading";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokedex, isLoading}) => {
  if (isLoading) {
    return <Loading />;
  } else if (pokedex.length == 0) {
    return <h1>No Pookemon found</h1>;
  } else {
    return (
      <div>
        {pokedex.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    );
  }
};

export default Pokedex;
