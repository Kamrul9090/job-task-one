import { useState } from 'react';
import './App.css';
import Drawer from './components/PersonData/Drawer/Drawer';
import Header from './components/PersonData/Header/Header';
import PersonData from './components/PersonData/PersonData';
function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Header users={users}></Header>
      <Drawer users={users} setUsers={setUsers}></Drawer>
    </div>
  );
}

export default App;
