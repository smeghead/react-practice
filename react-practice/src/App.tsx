import './App.css';

import React, {useState, useEffect} from 'react'
import { firestore } from './firebase/index'
import { collection, query, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
  const [users, setUsers] = useState([]);
  const [myAccount, setMyAccount] = useState<firebase.User>();

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

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setMyAccount(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const userListElement = () => {
    if (users.length == 0) {
      return <p>LOADING...</p>
    } else {
      return users.map((user) => {
        return <p key={user.name}> name: {user.name}</p>
      })
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        { userListElement() }
        { myAccount ? <p>loging in</p> : <button onClick={googleLogin}>Google login</button> }
      </header>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
