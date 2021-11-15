import { useState, useEffect } from "react";

function Advice({facade}) {
    const [advice, setAdvice] = useState({ value: '', ref: ''});

    const updates = (data) => {setAdvice({value: data.advice, ref: data.id})}

    useEffect(() => { 
        facade.fetchData('advice', updates); 
    
    
      }, [facade])

    
    return ( 
        <>
             <h1>"{advice.value}"</h1>
            
        </>
     );
}

export default Advice;