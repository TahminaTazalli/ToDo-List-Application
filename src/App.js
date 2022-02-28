import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const[itemList,setItemList] = useState("");
  const[items,setItems] = useState([]);

  const handleEvent = (event)=>{
    setItemList(event.target.value);
  }
  const addItem =  ()=>{
    setItems((oldItems)=>{
      return [...oldItems,itemList];
    });
    setItemList("");
  };
  const deleteItems = (id)=>{
        console.log("dleted");
        setItems((oldItems)=>{
          return oldItems.filter((arrElement,index)=>{
            return index !== id;
          })
        })
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <p>ToDo List</p>
        <input className="input" type="text" placeholder="Add Item" value={itemList}  onChange={handleEvent} />
        <button onClick={addItem}> + </button>
        <ul>
          {items.map((val,index)=>{
           return <ToDoList key={index} id={index} text={val} onSelect={deleteItems}/>
          })}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
