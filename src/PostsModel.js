import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

 
const PostsModel  = (url)=> {

    const [isWaiting,setIsWaiting]= useState(true);
    const [serverError,setServerError]= useState(null);
    const [posts,setPosts] = useState(null);
    const navigator = useNavigate();

   
     

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
                .then(response => {
                    if(!response.ok){
                        throw Error("غير متصل بالسيرفر")
                    }
                    return response.json()
                })
                .then(data => {
                    // console.log(data)
                    setPosts(data)
                    setIsWaiting(false)
                })
                .catch(e=>{
                    console.log(e.message)
                    setServerError(e.message)
                    setIsWaiting(false)

                });
        },2000);
     },[url]);


     return{isWaiting,serverError,posts};
}

export default PostsModel ;