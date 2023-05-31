import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostList = ({posts ,name })=>{
    const navigator = useNavigate();
    

    const deleteAction =(id)=>{
            // const updatePost = posts.filter(post=> post.id !== id);
            // setPosts(updatePost);
            fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
                method: 'DELETE',
            }).then(()=>{
                console.log(' post deleted successfully')
                navigator('/')
            });
    }
    return (
        <div className="container mt-5 ">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h1>{name}</h1>
                <Link to="/create" className="btn btn-sm btn-primary">Add New</Link>
                
            </div>
            
            
            <table className="table  border ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">UserId</th>
                        <th scope="col" colSpan="3">Action</th>
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
                                <Link to={"/posts/"+post.id} className="btn btn-info" >Show</Link>
                            </td>
                            <td>
                                <Link to={"/edit/"+post.id} className="btn btn-success" >Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default PostList;