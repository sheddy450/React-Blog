import {Link} from 'react-router-dom'; 

const Navbar = () => {
    return ( 
       <nav className="navbar">
        <h1>Sheddy's Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Create">new Blog</Link>
            <Link to="/Contact">Contact</Link>
        </div>
       </nav>
     );
}
 
export default Navbar;