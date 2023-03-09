import { useState } from 'react';
import BlogList from './Blogs';
import useFetch from './useFetch';


const Home = () => {

        const {data, isloading, error} = useFetch('http://localhost:8000/blogs')
        
    
        
    return ( 
        <div className="home">
            {isloading && <div>Loading...</div>}
            {error && <div>{error}</div>}
           {data && <BlogList lists = {data} title = 'All Blogs'/>}
           
        </div>
     )
}
export default Home;