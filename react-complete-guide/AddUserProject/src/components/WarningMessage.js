import React from "react";
import styles from "./WarningMessage.module.css"

const WarningMessage = props => {
    if (!props.invalidInput) {
        // console.log(props.invalidInput);
        function closeByClickingOnBackground(event){
            let modal = document.getElementById('BG')
            if (event.target == modal) {
                props.close();
              }
        }

        return (
            <div id="BG" className={styles.background} onClick={closeByClickingOnBackground}>
                <div className={styles.card}>
                    <h2 className={styles.header}>Invalid input</h2>
                    <p className={styles.message}>{props.message}</p>
                    <button
                        className={styles.button}
                        onClick={props.close}>Okay</button>
                </div>
            </div>
        )
    }
    return <div></div>
}

export default WarningMessage;