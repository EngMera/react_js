// import { useState,useEffect } from "react";
import PostList from "./PostList";
import PostsModel  from "./PostsModel";

const Posts = ()=> {
    const {isWaiting,serverError,posts} = PostsModel('https://jsonplaceholder.typicode.com/posts');
    
     

    return(
        <div className="container my-5">
          
          {serverError && <p className="alert alert-danger">{serverError} ... </p>} 

          {isWaiting && <h1>please wait to load data . . .</h1>}
          
          {posts && <PostList posts={posts} name="Posts List "  />}

        </div>
    );
}
export default Posts ;



    // const [checkAuth,setCheckAuth]= useState('false');
    // const deleteAction =(id)=>{
    //     const updatePost = posts.filter(post=> post.id !== id);
    //     setPost(updatePost);
    // }