import { createContext, useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjustedExpirationTime - currentTime;
    return remainingDuration;
}

const retriveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    } else {
        return {
            token: storedToken,
            duration: remainingTime
        };
    }
}


const AuthContextProvider = (props) => {
    const tokenData = retriveStoredToken();
    let initalToken;
    if (tokenData) {
        initalToken = tokenData.token;
    }

    const [token, setToken] = useState(initalToken);
    const userIsLoggedIn = !!token;
    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    };


    const loginHandler = useCallback((token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(() => {
            logoutHandler();
        }, remainingTime);
    }, []);

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler])


    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider;
export { AuthContext };