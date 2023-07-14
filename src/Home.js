import { useState } from "react";
import PokemonList from "./PokemonList";

function Home() {
    const [pokemon, setPokemon] = useState([
        {name: "Pickachu", type: "electric", hp: 60, id:1},
        {name: "Eevee", type: "normal", hp: 70, id:2},
        {name: "Charmander", type: "fire", hp: 70, id:3}
    ]);

    return (
        <div className="home">
          <PokemonList  pokemon={pokemon} title="All Pokemon!"/>
        </div>
    );
}
 
export default Home;