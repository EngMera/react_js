import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ()=>{
    const [userId ,setUserId]= useState(' user id');
    const [title ,setTitle]= useState('post title');
    const [body ,setBody]= useState('text body ');
    const [waitingServer ,setWaitingServer]= useState(false);
    const navigator = useNavigate()

    const mySubmit= (e)=>{
        e.preventDefault();
        const myPost = {
            title,
            body,
            userId,
        }
        console.log(myPost);
        setWaitingServer(true);

        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(()=>{
                console.log('new post added successfully')
                setWaitingServer(false);
                navigator('/posts'); //redirect to posts page
            })
        },2000)

    }
    return (
        <div className="container mt-5 text-left">
            <h3>new post</h3>

            <form onSubmit={mySubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User Id</label>
                    <input type="text" className="form-control" id="exampleInputEmail0" required 
                           value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required 
                           value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Body</label>
                    <textarea type="password" className="form-control" id="exampleInputPassword1" rows="3"required 
                              value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                </div>
                <div>
                   {!waitingServer && <button type="submit" className="btn btn-primary float-end">Post</button>} 
                   {waitingServer && <button type="submit" className="btn btn-primary float-end" disabled>Posting</button>} 
                </div>
                
            </form>
            <span>{userId}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}
export default CreatePost;