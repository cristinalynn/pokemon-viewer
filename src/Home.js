
import PokemonList from "./PokemonList";


function Home( {pokemon}) {
   

    return (
        <div className="home">
           <PokemonList  pokemon={pokemon} title="All Pokemon!"/>
         
        </div>
    );
}
 
export default Home;