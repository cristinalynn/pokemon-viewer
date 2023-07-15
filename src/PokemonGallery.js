import { useParams } from "react-router-dom";

function PokemonGallery() {
    const { id } = useParams();

    return (
        <div className="pokemon-gallery">
            <h2>Pokemon gallery - { id }</h2>
        </div>
    );
}
 
export default PokemonGallery;