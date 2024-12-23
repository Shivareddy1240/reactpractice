import React, {useState} from "react";

const Index = () => {
    const [count,setCount] = useState(1)
    console.log(count);
    console.log(setCount);

    const increaseCount = () =>{
        setCount((prevCount)=>{
            console.log(prevCount);
            return prevCount + 1;
        });
        // setCount((prevCount)=>{
        //     console.log(prevCount);
        //     return prevCount + 1;
        // });
        setCount((prevCount) => prevCount + 1)
    }
    const decreaseCount = () =>{
        setCount(count - 1);
    }
    
    return (
        <>
        <button onClick={decreaseCount}>-</button>
        <span>Count : {count}</span>
        <button onClick={increaseCount}>+</button>
        </>
        
    )
}

export default Index