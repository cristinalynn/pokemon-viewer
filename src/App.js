import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import React,{ useState, useEffect } from "react";
import PokemonGallery from "./PokemonGallery";



function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8000/pokemon")
      .then(res => {
          return res.json();
      })
      .then(data => {
          setPokemon(data);
      })
  }, []);

  function addPokemon(data) {
      setPokemon([...pokemon, data])
  }
  
  return (
  
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home pokemon={pokemon}/>
            </Route>
            <Route path="/create">
                <Create  addPokemon={addPokemon}/>
            </Route>
            <Route path="/pokemonGallery">
                <PokemonGallery pokemon={pokemon}/>
            </Route >
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
