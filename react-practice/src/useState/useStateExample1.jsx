import React , {useState} from "react";

const MyExample = () => {
    const [showData,setShowData] = useState(false);
    const displayData = () =>{
    setShowData(!showData);
}
return (
    <>
    <hr></hr>
    <h1>My Example for Use State</h1>
    <button onClick={displayData}> {showData ? "hide" : "show"}</button>
    {/* {showData && (<div className="myContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum molestias fuga esse, repudiandae quos placeat tenetur perferendis nam aut.
    </div>)} */}
    { showData ? <div className="myContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium harum molestias fuga esse, repudiandae quos placeat tenetur perferendis nam aut.
    </div> : <h3>Data is hidden</h3>}
   
    </>
)
}

export default MyExample