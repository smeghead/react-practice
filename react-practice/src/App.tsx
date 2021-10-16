import './App.css';

import React, {useState, useEffect} from 'react'
import {firestore } from './firebase/index'
import { collection, query, getDocs } from "firebase/firestore";
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
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
    }

    searchUsers();
  }, []);
  const userListElement = () => {
    if (users.length == 0) {
      return <p>LOADING...</p>
    } else {
      return users.map((user, index) => {
        return <p key={index}> name: {user.name}</p>
      })
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        { userListElement() }
      </header>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
