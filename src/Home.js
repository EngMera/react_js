const Home  = ()=> {
    const clickMe = (e)=>{
        console.log(e.target);
    }
    const clickDanger = (name,e)=>{
        console.log("first name is  "+ name + e);
        
    }
    return (
        <div className="container mt-5 text-center">
           <h2 className="alert alert-success" id="home">Home page Here</h2>
           <button type="button" onClick={clickMe} className="btn btn-primary mx-2">Primary</button>
           <button type="button" onClick={(e)=>clickDanger('mera',e)} className="btn btn-danger">danger</button>
        </div>
    );
}
export default Home;