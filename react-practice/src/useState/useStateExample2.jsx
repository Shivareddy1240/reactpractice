import React, {useState} from "react";

const SecondExample = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    // const changeFirstName = (e) =>{
    //     setFirstName(e.target.value);
    // }
    // const changeLastName = (e) =>{
    //     setLastName(e.target.value)
    // }
    // const changeEmail = (e) =>{
    //     setEmail(e.target.value)
    // }
    // const changePassword = (e) =>{
    //     setPassword(e.target.value)
    // }

    const handleFormInputs = (e, inputName) =>{
        console.log(e.target.value, inputName);
        if(inputName == "firstName"){
            setFirstName(e.target.value);
        }
        if(inputName == "lastName"){
            setLastName(e.target.value);
        }
        if(inputName == "email"){
            setEmail(e.target.value);
        }
        if(inputName == "password"){
            setPassword(e.target.value);
        }
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let userObject = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password
        }
        console.log(userObject)
    }
    return (
        <div>
            <hr></hr>
            <h1> Second Example - Forms</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-content">
            <input 
                type="text"
                name="firstname" 
                value={firstName} 
                id="firstname" 
                placeholder="enter firstname"
                onChange={(e) => handleFormInputs(e,"firstName")}
                ></input>
            </div>
            <div className="form-content">
            <input 
                type="text" 
                name="lastname" 
                value={lastName} 
                id="lastname" 
                placeholder="enter lastname" onChange={(e) => handleFormInputs(e,"lastName")}>
                </input>
            </div>
            <div className="form-content">
            <input 
                type="text" 
                name="email" 
                value={email} 
                id="email" 
            placeholder="enter email" onChange={(e) => handleFormInputs(e,"email")}></input>
            </div>
            <div className="form-content">
            <input 
                type="password" 
                name="password" 
                value={password} 
                id="password" 
                placeholder="enter password" onChange={(e) => handleFormInputs(e,"password")}></input>
            </div>
           <div className="from-button">
           <button type="submit">Submit</button>
           </div>
            
            </form>
        </div>
        
    )
} 

export default SecondExample