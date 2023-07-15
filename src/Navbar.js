import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Pokemon World</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add a New Pokemon</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;