import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {auth, db} from "../firebase"
import firebase from "firebase"
import React, {useState,useEffect} from "react";
import TodoList from "./TodoList"


export default function Todo() {
    const [todoInput , setTodoInput] = useState("")
    const [ todos , setTodos] = useState([])

    useEffect(()=>{
        fetchTodos();
    },[])

    function addTodo(e) {
      e.preventDefault();
     db.collection("todos").add({
      inprogress : true,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      todo : todoInput
    });
    setTodoInput("")
  
      
    }

    function fetchTodos() {
        db.collection("todos").orderBy("timestamp","desc").onSnapshot(function(querySnapshot){
           setTodos(
               querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
        }))
        ); 
        })
    } 

    // console.log(todos)
    // const signOut = ()=>auth.signOut();
    return(
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

            <h1>To-do App</h1>
            {/* <button onClick={()=>signOut()}>SignOut</button> */}
                <form>
                <TextField id="standard-basic" label="What's next.."
                value = {todoInput} 
                onChange={e=> setTodoInput(e.target.value)}/>

                <Button type="submit" variant="contained" color="primary" onClick={addTodo}   disabled={!todoInput} >
                    Add
                </Button>
                
                </form>

            {

            todos.map((obj) => (
            <TodoList key={obj.id}id={obj.id} inprogress={obj.inprogress} todo={obj.todo}/>
                ) )

            }
    </div>
    )
}


