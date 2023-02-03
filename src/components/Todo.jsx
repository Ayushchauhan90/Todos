import React,{useState} from "react";


export default function Todo() {
    const [todos,settodo]=useState([{
          todotask:'',
          tododescription:''
}])
// console.log(todos)
 const todoonchange=(e)=>{
       const {value,name}=e.target;
       settodo(() =>{
           return {
               ...todos,
               [name]:value
           }
        //    console.log(todos)
       })
 }
 const addtodo=(e)=>{
    e.preventDefault();
    localStorage.setItem("todoDeatils", JSON.stringify(todos))
    const gettodo=localStorage.getItem("todoDeatils")
    console.log(gettodo)
 }
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12">
              <div className="todo-handle">
                <form className="todo-form">
                  <h1>TODO</h1>
                  <div className="todo-text">
                    <label className="todo-label">Enter Task</label>
                    <input
                      name="todotask"
                      type={"text"}
                      onChange={todoonchange}
                      className="todo-input"
                      placeholder="what's your task"
                    />
                    <br />
                  </div>
                  <div className="todo-text">
                    <label className="todo-label">Description</label>
                    <textarea className="todo-textarea" onChange={todoonchange} name="tododescription" rows={"5"}></textarea>
                  </div>
                  <div className="add-button">
                    <button type="button" onClick={addtodo}>Add Todo</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
