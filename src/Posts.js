// import { useState,useEffect } from "react";
import PostList from "./PostList";
import PostsModel  from "./PostsModel";

const Posts = ()=> {
    const {isWaiting,serverError,posts,deleteAction} = PostsModel('https://jsonplaceholder.typicode.com/posts');
    
     

    return(
        <div className="my-5">
          
          {serverError && <p className="alert alert-danger">{serverError} ... </p>} 

          {isWaiting && <h1>please wait to load data . . .</h1>}
          
          {posts && <PostList posts={posts} name="Posts List " deleteAction={deleteAction} />}

        </div>
    );
}
export default Posts ;



    // const [checkAuth,setCheckAuth]= useState('false');
    // const deleteAction =(id)=>{
    //     const updatePost = posts.filter(post=> post.id !== id);
    //     setPost(updatePost);
    // }