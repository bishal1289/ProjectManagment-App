import { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext(null);

export function useEmail() {
    const email = useContext(authContext);
    return email;
}

export const AuthProvider = (props) => {
    const [email, setEmail] = useState({});
    useEffect(() => {
      let user = JSON.parse(localStorage.getItem("email"));
      setEmail(user.email);
    }, []);
    return (<authContext.Provider value={{email,setEmail}}>{props.children }</authContext.Provider>)
}