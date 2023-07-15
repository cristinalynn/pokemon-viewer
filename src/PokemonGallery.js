import { useParams } from "react-router-dom";

function PokemonGallery() {
    const { id } = useParams();
    
   
    return (
        <div className="pokemon-gallery">
            <h2>Pokemon Gallery - { id }</h2>
            {/* { pokemon.map((pokemon) => 
                <div className="pokemon-image" key={pokemon.id}>
                    <h2>{ pokemon.name }</h2>
                    <img>{ pokemon.image }</img>
                </div>)} */}
        </div>
    );
}
 
export default PokemonGallery;