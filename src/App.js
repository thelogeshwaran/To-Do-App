import './App.css';
import {useAuthState} from "react-firebase-hooks/auth";
import Todo from "./components/ToDo"
import { auth } from "./firebase"
import firebase from "firebase"

// const signInWithGoogle =()=> auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())


// const SignIn = ()=>(
// <main>
//     <button onClick={()=>signInWithGoogle()}>Sign  in with google </button>
//   </main>
// )

  


function App() {
  // const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* { user ? <Todo/> : <SignIn/>} */}
      <Todo/>
    </div>
  );
}

export default App;
