import { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext(null);

export function useEmail() {
    const email = useContext(authContext);
    return email;
}

let obj = {};

export const AuthProvider = (props) => {
    const [email, setEmail] = useState({});
    useEffect(() => {
      let user = JSON.parse(localStorage.getItem("email"));
      obj.email = user.email;
      setEmail(user.email);
    }, [email]);
    return (<authContext.Provider value={{email,setEmail,obj}}>{props.children }</authContext.Provider>)
}