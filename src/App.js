// import logo from './logo.svg';
import './css/Signup.css'
import './css/Navbar.css'
import './css/Login.css'
import './css/Todo.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Todo from './components/Todo'
import TodoList from './components/Todolist'


function App() {
  return (
    <>
    <Navbar/>
    {/* <Demo/> */}
    <Routes>
      <Route path='SignUP' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='Todo' element={<TodoList/>}/>
    </Routes>
     {/* <SignUp />
     <Login/> */}
    </>
  );
}

export default App;
