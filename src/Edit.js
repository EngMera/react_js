import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ()=>{

    const {id} = useParams();
    const [userId ,setUserId]= useState('');
    const [title ,setTitle]= useState(' ');
    const [body ,setBody]= useState('  ');
    const [waitingServer ,setWaitingServer]= useState(false);
    const [isWaiting,setIsWaiting]= useState(true);
 
    const navigator = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts/'+id)
                .then(response => {
                    if(!response.ok){
                        throw Error("غير متصل بالسيرفر")
                    }
                    return response.json()
                })
                .then(data => {
                    // console.log(data)
                    setUserId(data.userId)
                    setTitle(data.title)
                    setBody(data.body)
                    setIsWaiting(false)

                    
                })
                .catch(e=>{
                    console.log(e.message)
                    setIsWaiting(false)
                    
                  

                });
        },2000);
     },[]);
     const mySubmit= (e)=>{
        e.preventDefault();
        const myPost = {
            id,
            title,
            body,
            userId,
        }
        console.log(myPost);
        setWaitingServer(true);

        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
            method: 'PUT',
            body: JSON.stringify(myPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(()=>{
                console.log(' post Updated successfully')
                setWaitingServer(false);
                navigator('/posts'); //redirect to posts page
            })
        },2000)

    }
    return (
        <div className="container mt-5 text-left">
            {isWaiting && <h1>please wait to load data . . .</h1>}

            <h3>Update post</h3>

            <form onSubmit={mySubmit} >
                <div className="mb-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label"> Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail0" required 
                           value={id} onChange={(e)=>setUserId(e.target.value)}/>
                </div>
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
                   {!waitingServer && <button type="submit" className="btn btn-primary float-end">Update</button>} 
                   {waitingServer && <button type="submit" className="btn btn-primary float-end" disabled>Updating</button>} 
                </div>
                
            </form>
            <span>{userId}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}
export default Edit;