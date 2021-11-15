import { useState, useEffect } from "react";
import catvibing from "./cat-vibing-vibing-cat.gif"
function CatFacts({facade}) {
const [cat, setCat] = useState({ fact: '', ref: ''});
  const updates = (data) => {
    setCat({facts: data.fact, ref: data.length});
  }

  useEffect(() => { 
    facade.fetchData('catfacts', updates); 


  }, [facade])

    return (
        <div className="background1">
            <h1>Facts about cats</h1>
            <h2>{cat.facts}</h2>

            <img src={catvibing} class="responsive"/>
        </div>
    )
}

export default CatFacts;