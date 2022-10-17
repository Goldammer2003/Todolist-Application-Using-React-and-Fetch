import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");


const [todos,setTodos] =useState ([])
console.log (todos)
  return (
    <div className="text-center">
      <h1> ToDoList</h1>
      <input
        type="text"
        onKeyPress={(e) => {
          if (e.key =="Enter") {
			setTodos ([...todos,inputValue])
			setInputValue ("")
		  }
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      ></input>
	  <ul className="list-group">
		{todos.map((item)=>{
			return (
				<li className="list-group-item">{item}</li>
			)
		})}
	  </ul>
    </div>
  );
};

export default Home;
