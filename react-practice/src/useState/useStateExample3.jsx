import React,{useState} from "react";

const Example3 = () =>{
   
    const [list,setList] = useState([]);
    const [message,setMessage] = useState({
        text: "",
        id : ""
    })
    const [editMessage,setEditMessage] = useState ({
        id : "",
        isEditMode : false
    })
    const changeMessage = (e) =>{
        setMessage({
            ...message,
            text : e.target.value,
        });
    }
    const addMessage = (e) =>{
        e.preventDefault();
        let newMessage = {
            text : message.text,
            id : new Date().getTime().toString()
        }
        setList([...list,newMessage]);
        setMessage({
            text: "",
            id: ""
        })
    }

    const editingMessage = (id) => {
        setEditMessage({
            ...editMessage,
            id : id,
            isEditMode : true
           });
           let editableItem = list.find((eachItem) => eachItem.id === id);
           setMessage({
            ...message,
            text : editableItem.text,
            id : editableItem.id
           });
    }

    const deleteMessage = (id) => {
        let newMessages = list.filter((eachItem) =>{
            return eachItem.id != id;
        })
        setList(newMessages)
        setEditMessage({
            text : "",
            isEditMode : false
        })
    }

    const updateMessage = (e) => {
        e.preventDefault();
        let newEditMessage = list.map((eachItem) =>{
            if(eachItem.id === editMessage.id){
                return {
                    text: message.text,
                    id:editMessage.id
                }
            }
            else {
                return eachItem
            }
        });
        setList(newEditMessage);
        setMessage({
            text: "",
            id : ""
        })
        setEditMessage({
            id : "",
            isEditMode : false
        })    
    }
    return(
        <>
        <h1>Example 3 - useState</h1>
        <form>
            <input type="text" name="message"
             value={message.text} id="message"
              placeholder="enter message" onChange={changeMessage} />
              {
                editMessage.isEditMode ? (<button onClick={updateMessage} type="submit">Edit</button>) : (
                <button onClick={addMessage} type="submit">Add</button>
                ) 
              }
              
        </form>
        <hr></hr>
        {
            list.length === 0 && <h3>No Items to display</h3>
        }
        <ul>
            {
                list.map((eachItem) =>{
                    const {text,id} = eachItem
                    return <li key={id}>
                        <span>{text}</span>
                        <button onClick= {() => editingMessage(id)}>Edit</button>
                        <button onClick={() => deleteMessage(id)}>Delete</button>
                    </li>
                }) 
            }
        </ul>
        </>
    )
}
export default Example3