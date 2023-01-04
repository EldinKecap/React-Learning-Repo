import React,{useState} from "react";
import styles from './UserForm.module.css'


const UserForm = (props) => {
    const [usernameState, setUsernameState] = useState('');
    const [ageState, setAgeState] = useState('');
    
    const usernameOnChangeHandler = (event) => {
        setUsernameState(event.target.value);
    }
    
    const ageOnChangeHandler = (event) => {
        setAgeState(event.target.value);
    }
    
    const getUserData = event => {
        event.preventDefault();

        const userData = {
            key: Math.random(),
            username:usernameState,
            age:ageState
        }

        // console.log(userData);
        props.onAddUser(userData);
        setUsernameState('');
        setAgeState('');
    }


    return(
        <form className={styles.form}>
            <label>Username</label>
            <input type={'text'} onChange={usernameOnChangeHandler} value={usernameState}/>
            <label>Age</label>
            <input type={'number'} onChange={ageOnChangeHandler} value={ageState}/>
            <button className={styles.button} onClick={getUserData}>Add User</button>
        </form>
    )

}

export default UserForm;