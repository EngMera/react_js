import { useState } from "react";
const About = ()=>{

    const [name,setName] = useState('Mera');

    const changeNme = ()=>{
        setName('ENg');
    }

    return(
        <div>
          <h3 className="alert alert-primary">{name} </h3>
          <button type="button" onClick={changeNme} className="btn btn-primary">Primary</button>
        </div>
        
        
    );
}
export default About;