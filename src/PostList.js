import { Link } from "react-router-dom";

const PostList = ({posts ,name,deleteAction })=>{
   
    return (
        <div className="container mt-5">
            <h1>{name}</h1>
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">UserId</th>
                        <th scope="col" colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { posts.map((post)=>(
                        <tr key={post.id}>
                            <th scope="row" >{post.id}</th>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.userId}</td>
                            <td>
                                <button onClick={()=>deleteAction(post.id)} className="btn btn-danger" type="button">Delete</button>
                            </td>
                            <td>
                                <Link to={"/posts/"+post.id} className="btn btn-info" >More</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default PostList;