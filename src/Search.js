import { useEffect, useState } from "react";

const Search = ()=> {
    const [query , setQuery] = useState("");
    const [posts , setPost] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if(!response.ok){
                    throw Error("غير متصل بالسيرفر")
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                setPost(data)
            })
            .catch(e=>{
                console.log(e.message)

            });
    },[])

    return (
        <div className="container mt-5"> 
            <div className="col-md-3">
            .  <input className="form-control me-2" placeholder="Search" onChange={event=>setQuery(event.target.value)}/>

            </div>
            <div className="row">
                {posts && 
                posts.filter(post => {
                        if (query === '') 
                        {
                            return post;
                        } 
                        else if (post.title.toLowerCase().includes(query.toLowerCase())) 
                        {
                            return post;
                        }
                }).map((post,index)=>(
                    <div className="col-md-3">
                        <div className="card my-4 " key={index}>
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.body}.</p>
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
           
        </div>
    );
}
export default Search;