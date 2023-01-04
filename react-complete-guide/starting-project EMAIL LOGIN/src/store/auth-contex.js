import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: (email, password) => { }
})

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInInfo = localStorage.getItem('isLoggedIn');

        if (storedLoggedInInfo === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', '1');

    }
    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');

    }


    return <AuthContext.Provider
        value=
        {{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}
    > {props.children}</AuthContext.Provider >
}


export default AuthContext;
export { AuthContextProvider }; 