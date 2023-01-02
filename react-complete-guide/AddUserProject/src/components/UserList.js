import React from "react";
import styles from './UserList.module.css'


const UserList = props => {
    return(
        <ul className={styles.list}>
            {props.items.map(element => {
                return <li key={element.key} className={styles.listItem}>{element.username} is {element.age}</li>
            })}
        </ul>
    )
}

export default UserList;