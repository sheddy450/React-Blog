import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div>
            <h1>Sorry</h1>
            <p>this page cannot be reached</p>
           <Link to='/'>Back to homepage....</Link>
        </div>
     );
}
 
export default Notfound;