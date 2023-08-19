import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}



/*const Main = () => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
const [message, setMessage] = useState("Loading...");

useEffect(() => {
    axios
    .get("http://localhost:8000/api")
    .then((res) => {
        console.log(res);
        setMessage(res.data.message);
    })
    .catch((err) => console.log(err));
}, []);

  // --------------------------------------------------
  // II) JSX
  // --------------------------------------------------
return (
    <div>
        <h2>Message from the backend: {message}</h2>
    </div>
    );
};*/