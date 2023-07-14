import { useState } from "react";

function Home() {
    const [pokemon, setPokemon] = useState([
        {name: "Pickachu", type: "electric", hp: 60, id:1},
        {name: "Eevee", type: "normal", hp: 70, id:2},
        {name: "Charmander", type: "fire", hp: 70, id:3}
    ]);

    return (
        <div className="home">
           {pokemon.map((pokemon) => (
             <div className="pokemon-preview" key={pokemon.id}>
                <h2>{ pokemon.name }</h2>
                <p>Type: { pokemon.type }</p>
             </div>
           ))}
        </div>
    );
}
 
export default Home;