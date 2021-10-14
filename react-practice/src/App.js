import logo from './logo.svg';
import './App.css';


import React, {useState, useEffect} from 'react'
import {firebaseApp, firestore } from './firebase/index'
import { collection, query, getDocs } from "firebase/firestore";
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const searchUsers = async() => {
      // Firestoreのコレクションを指定してデータ取得。今回は全量を検索
      const q = query(collection(firestore, 'users'));
      const querySnapshot = await getDocs(q);
      const userList = [];
      querySnapshot.forEach(doc => {
        userList.push(doc.data());
      })
      setUsers(userList);
      console.log(userList);
    }

    searchUsers();
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    {
      users.map((user, index) => {
        return <p key={index}> name: {user.name}</p>
      })
    }
      </header>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2:
