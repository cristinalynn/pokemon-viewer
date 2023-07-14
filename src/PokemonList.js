function PokemonList() {
    return (
        <div className="pokemon-list">
            {pokemon.map((pokemon) => (
            <div className="pokemon-preview" key={pokemon.id}>
               <h2>{ pokemon.name }</h2>
               <p>Type: { pokemon.type }</p>
               <p>HP: { pokemon.hp }</p>
            </div>
          ))}
        </div>
        
    );
}
 
export default PokemonList;