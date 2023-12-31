import { useState } from "react";
import { useHistory } from "react-router-dom";


function Create({ addPokemon })  {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [hp, setHp] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

function handleSubmit(e) {
    e.preventDefault();
    const pokemon = { name, type, hp, image};

    setIsLoading(true);

    fetch("http://localhost:8000/pokemon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon)
    }).then((r) =>r.json())
      .then((data) => {
        addPokemon(data)
        setIsLoading(false);
        history.push("/");
        
        
    })
}

    return (
        <div className="create">
            <h2>Add a New Pokemon</h2>
            <form onSubmit={handleSubmit}>
                <label>Pokemon Name</label>
                <input
                   type="text"
                   required 
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                />
                <label>Pokemon Type</label>
                <input
                   type="text"
                   required
                   value={type}
                   onChange={(e) => setType(e.target.value)} 
                />
                <label>Pokemon HP</label>
                <input
                   type="text"
                   required 
                   value={hp}
                   onChange={(e) => setHp(e.target.value)}
                />
                <label>Pokemon Image</label>
                <input
                   type="text"
                   required
                   value={image}
                   onChange={(e) => setImage(e.target.value)} 
                />
                {!isLoading && <button>Add Pokemon</button>}
                {isLoading && <button disabled>Adding Pokemon...</button>}
            </form>
        </div>
    );
} 
 
export default Create;