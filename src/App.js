import './App.css';
import React , {useState } from 'react';
import All from './components/All';
import nextId from "react-id-generator";
import Form from './components/Form';
import Complete from './components/Complete';
import Incomplete from './components/Incomplete';
import { useDispatch } from 'react-redux';
import { addToDoData } from './reducer/toDoApp';
import { Routes, Route} from "react-router-dom";


function App() {
  const [toDo , setToDo] = useState(''); 
  const dispatch = useDispatch()

  const handleCallback = (value) => {setToDo(value);}

    // function for save input data in array
    const saveToDo = () => {
    dispatch(addToDoData({
      id : nextId(),
      value : toDo ,
      status : 'incomplete'
  }))
      setToDo('')
  }
  return (
    <div className="App">
      <Form parentCallback = {handleCallback} save={saveToDo} toDo={toDo}/>
        <Routes>
          <Route path='all' element={<All />}/>
          <Route path='complete' element={<Complete />}/>
          <Route path='incomplete' element={<Incomplete />}/>
        </Routes>
    </div>
  );
}

export default App;
