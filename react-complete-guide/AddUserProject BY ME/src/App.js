import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import WarningMessage from './components/WarningMessage';
let message = '';

function App() {
  const [users, setUsersState] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const addNewUser = (user) => {
    if (user.username.trim() === '' || user.age.trim() === '') {
      setIsValid(false);
      message = 'No empty fields';
      return
    }
    if(user.age <= 0){
      setIsValid(false);
      message = 'Age must me greater than 0';
      return
    }
    setIsValid(true);
    setUsersState(prevState => [user, ...prevState]);
    console.log(users);
  }

  const closeInvalidInput = () => {
      setIsValid(true);
  }

  return (
    <div>
      <UserForm onAddUser={addNewUser} />
      <UserList items={users} />
      <WarningMessage
        invalidInput={isValid}
        setIsValid={setIsValid}
        message={message} 
        close = {closeInvalidInput}/>
    </div>
  );
}

export default App;
