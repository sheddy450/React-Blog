import { Link } from "react-router-dom";


const BlogList = ({lists, title }) => {

    // const blogs = props.lists;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {lists.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
                ))}
        </div>
     );
}
 
export default BlogList;