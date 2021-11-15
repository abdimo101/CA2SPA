import facade from "../apiFacade";
import { useState, useEffect } from "react";
import norris from "./chucknorrisjoke.jpg"

function Exercise3({facade}) {
  const [joke, setJoke] = useState({ joke: '', ref: ''});
  const updates = (data) => {
    setJoke({joke: data.value, ref: data.url});
  }

  useEffect(() => { 
    facade.fetchData('jokes', updates); 


  }, [facade])

  return(
    <div className="background1">
    <h1> 
      {joke.joke}
    </h1>
    <img src={norris} class="responsive"/>
    </div>
  )
}

export default Exercise3;
