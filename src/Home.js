import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";

function Home() {
    const [pokemon, setPokemon] = useState(null);



    useEffect(() => {
        fetch("http://localhost:8000/pokemon")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPokemon(data);
        })
    }, []);

    return (
        <div className="home">
          {pokemon && <PokemonList  pokemon={pokemon} title="All Pokemon!"/>}
        </div>
    );
}
 
export default Home;