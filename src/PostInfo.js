import { useParams } from "react-router-dom";
import PostsModel  from "./PostsModel";

const PostInfo = ()=>{
    const {id} = useParams();
    const {isWaiting,serverError,posts} = PostsModel('https://jsonplaceholder.typicode.com/posts/'+id);
    // console.log(posts);
    return(
        <div className="container mt-5">
           {serverError && <p className="alert alert-danger">{serverError} ... </p>} 

           {isWaiting && <h1>please wait to load data . . .</h1>}
           <h3>PostInfo - {id}</h3>

           {posts && 
                (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">{posts.title}</h5>
                            <p className="card-text">{posts.body}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
               )
           }
            
        </div>
    );
}
export default PostInfo;