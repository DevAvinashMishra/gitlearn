import './App.css';
import React , {useState , useEffect} from 'react';
import All from './components/All';
import nextId from "react-id-generator";
import Form from './components/Form';
import Complete from './components/Complete';
import Incomplete from './components/Incomplete';
import { Routes, Route,useLocation} from "react-router-dom";

const componentMapping =  {
  all: All,
  complete: Complete,
  incomplete: Incomplete
}

function App() {
  const [toDo , setToDo] = useState('');
  const [toDoArray , setToDoArray] = useState([]);  
  const [filterArray , setFilterArray] = useState([]);
  const [currentTab , setCurrentTab] = useState('all');
  const location = useLocation();
  let ComponentToRender = All

  const handleCallback = (value) => {setToDo(value);}

    // function for save input data in array
    const saveToDo = () => {
      toDoArray.push({
          id : nextId(),
          value : toDo ,
          status : 'incomplete'
      })
      setFilterArray(toDoArray);
      setToDo('')
  }
  // function for change data status
    const changeStatus = ({target: { value }}) => {
      const objIndex = toDoArray.findIndex((val => val.id === value));
      const newArray = [...toDoArray];
      const changedStaus = (newArray[objIndex].status === 'complete') ? 'incomplete' : 'complete';
      newArray[objIndex].status = changedStaus;
      switch (location.pathname) {
        case '/incomplete':
          const incompletedData = toDoArray.filter(task => task.status === 'incomplete')
          setFilterArray(incompletedData)
          break;
        case '/complete':
          const completedData = toDoArray.filter(task => task.status === 'complete')
          setFilterArray(completedData)
          break;
        default:
          const allsData = toDoArray.filter(task => task.status !== '')
          setFilterArray(allsData)
      }
  }
    
  useEffect(() => {
    if (location.pathname==='/incomplete') {
      const incompleteData = toDoArray.filter(task => task.status === 'incomplete')
      setFilterArray(incompleteData)
      setCurrentTab('incomplete')
    }
    else if (location.pathname==='/complete') {    
      const completeData = toDoArray.filter(task => task.status === 'complete')
      setFilterArray(completeData)
      setCurrentTab('complete')
    }
    else {
      const allData = toDoArray.filter(task => task.status !== '')
      setFilterArray(allData)
      setCurrentTab('all')
    }
    ComponentToRender = componentMapping[currentTab];
  }, [location]);
  return (
    <div className="App">
      <Form parentCallback = {handleCallback} save={saveToDo} toDo={toDo}/>
        <Routes>
          <Route path={currentTab} element={<ComponentToRender  data={filterArray} changeStatus={changeStatus}/>}/>
        </Routes>
    </div>
  );
}

export default App;
