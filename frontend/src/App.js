import {useState, useEffect} from 'react';
import {
    Button,
    Radio
} from 'antd';

import {getAllStudent} from './client'

import './App.css';



function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = () =>
      getAllStudent()
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setStudents(data);
      })

  useEffect( () => {
    console.log("Component Mounted");
    fetchStudents();
  }, []
);

  
  return <p>{students.length}</p>;
}

export default App;
