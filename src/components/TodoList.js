import React from "react";
import{ListItem,ListItemText,Button, colors }from '@material-ui/core';
import { db } from "../firebase";




const TodoList =({id , inprogress, todo})=>{

    function updateTodo(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress 
        })
    }
    function deleteTodo(){
        db.collection("todos").doc(id).delete()
    }

    return (
        <div style={{display:"flex", maxWidth: "800px",width:"40vw",justifyContent:"center", alignItems:"center",}}>
            <ListItem>
            <ListItemText primary={todo} style={ inprogress ? {color :"red"} : {color: "green"} } secondary={ inprogress ? "Inprogress" : "Completed" }/>
            </ListItem>
            <Button onClick={()=>updateTodo()}>{inprogress ? "Done" :"Undone"}</Button>
            <Button onClick={()=>deleteTodo()}>X</Button>
        </div>
    )
}

export default TodoList