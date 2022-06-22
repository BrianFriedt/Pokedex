import Loading from "./Loading";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokedex, isLoading}) => {
  if (isLoading) {
    return <Loading />;
  } else if (pokedex.length === 0) {
    return (
      <div className="card transparent">
        <h3>No Pokémon found</h3>
        <img className="image" src="https://www.pngitem.com/pimgs/m/485-4858557_sad-mirror-ash-ash-from-pokemon-sad-hd.png" alt="sad face" />
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid">
          {pokedex.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
};

export default Pokedex;
