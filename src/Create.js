function Create()  {
    return (
        <div className="create">
            <h2>Add a New Pokemon</h2>
            <form>
                <label>Pokemon Name</label>
                <input
                   type="text"
                   required 
                />
                <label>Pokemon Type</label>
                <input
                   type="text"
                   required 
                />
                <label>Pokemon HP</label>
                <input
                   type="text"
                   required 
                />
                <label>Pokemon Image</label>
                <input
                   type="text"
                   required 
                />
                <button>Add Pokemon</button>
            </form>
        </div>
    );
}
 
export default Create;