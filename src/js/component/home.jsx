import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");


  const [isShown, setIsShown] = useState({ state: false, index: 0 });
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect (()=> {
    getTodos ()
  },[])

  useEffect (()=>{
    saveTodos ()
  } ,[todos] )

  const deletetodo = (index) => {
  const newlistafterdeletion =todos.filter ((item,i)=>{
    return index != i 
  })  
  setTodos (newlistafterdeletion)
  }

const getTodos = () => {
  fetch ('https://assets.breatheco.de/apis/fake/todos/user/Goldammer2003')
  .then (response =>response.json () ) 
  .then (data => setTodos(data))
}

const saveTodos = () => {
  fetch ('https://assets.breatheco.de/apis/fake/todos/user/Goldammer2003',{
    method:'PUT', 
    headers: {
      'Content-Type': 'application/json'



    },
    body:JSON.stringify (todos)
  })
}

  return (
    <div className="text-center">
      <h1> ToDoList</h1>
     
      <ul className="list-group">
        <li className="list-group-item w-25 m-auto">
           <input
           placeholder='Add a task'
        className ="w-75"
        type="text"
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            setTodos([...todos, {
              label:inputValue, 
              done:false
            }]);
            setInputValue("");
          }
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      ></input></li>
        {todos.map((item, ind) => {
         


          return (
            <li className="list-group-item w-25 m-auto" onMouseEnter={() => setIsShown({ state: true, index: ind })}   onMouseLeave={() => setIsShown({ state: false, index: 0 })}>
              {" "}
              <div className ="d-flex justify-content-between container">
                <span>{item.label}</span>
                {isShown.state == true && isShown.index == ind ? <button type="button" className="btn btn-danger " onClick = {()=>{deletetodo(ind)
              saveTodos ()
                }}>
                  <i className="fas fa-trash"></i>
                </button>: ''}
              </div>
            </li>
          );
        })}
        <li className="list-group-item w-25 m-auto">{todos.length} items left</li>
      </ul>
    </div>
  );
};

export default Home;
