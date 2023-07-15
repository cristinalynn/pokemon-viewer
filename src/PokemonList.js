import { Link } from "react-router-dom";

function PokemonList({ pokemon, title }) {
    
    return (
        <div className="pokemon-list">
            <h2>{ title }</h2>
            {pokemon.map((pokemon) => (
            <div className="pokemon-preview" key={pokemon.id}>
                <Link to={`/pokemon/${pokemon.id}`}> 
                    <h2>{ pokemon.name }</h2>
                    <p>Type: { pokemon.type }</p>
                    <p>HP: { pokemon.hp }</p>
               </Link>
            </div>
          ))}
        </div>
        
    );
}
 
export default PokemonList;