import React, {useState} from "react";
import Index from "./useStatePractice";

const Advanced = () => {
    const initialData = {
        firstName : "Shiva",
        lastName : "Reddy"
      }
    const existedStoreData = [
        {
        id: 1,
        itemName : "AC",
        quantity : 6 
        },
        {
        id: 2,
        itemName : "Refregirator",
        quantity : 10 
        }
]
      const [storeData,updateData] = useState(existedStoreData) 
      const [data,setData] = useState(initialData);      
      const changeName = () => {
        setData({
            ...initialData,
            firstName : "Shiva Reddy"
        })
      }

      const deleteItem = (comingID) =>{
        console.log(comingID);
       const filteredData =  storeData.filter((eachItem) => {
        return eachItem.id != comingID
       });
    updateData(filteredData);
      }
    return(
        <>
        <p> First name is {data.firstName}</p>
        <button onClick={changeName}>Change FirstName</button>
        <p>Last name is {data.lastName}</p>
        <hr></hr>
        <ul>
            {
            storeData.map((eachItem, index)=>{
                const {itemName,quantity,id} = eachItem
                return <li key={index}>
                    <div>Item Name : {itemName}</div>
                    <div>Quantity : {quantity}</div>
                    <button onClick={() => deleteItem(id)}>Delete Item</button>
                </li>
            })
            }
        </ul>
        </>
    )
}

export default Advanced