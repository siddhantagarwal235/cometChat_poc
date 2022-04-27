import React,{useEffect} from 'react';
import './App.css';
import { initializeCometChat,createUser, loginUser } from './utils';
import {CometChatUI} from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/uiKitImports"
function App() {
  useEffect(()=>{
  initializeCometChat()
  loginUser()
  // createUser()
  },[])
  return (
    <div style={{width: '100%', height:'95vh' }}>
    <CometChatUI />
  </div>
  );
}

export default App;
