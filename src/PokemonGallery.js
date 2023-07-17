
function PokemonGallery({pokemon}) {
    
    return (
        <div className="pokemon-gallery">
             { pokemon.map((pokemon) => 
                <div className="pokemon-image" key={pokemon.id}>
                    <h2>{ pokemon.name }</h2>
                    <img src={pokemon.image} alt={pokemon.title} />
                </div>)}
        </div>
    );
}
 
export default PokemonGallery;