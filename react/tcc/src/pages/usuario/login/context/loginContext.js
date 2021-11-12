import { createContext, useContext, useState } from "react";



const LoginContext = createContext();


export default function LoginContextProvider(props) {
    const [loginUsu, setLoginUsu] = useState('Não logado');
  
    return (
      <LoginContext.Provider value={{ loginUsu, setLoginUsu }}>
        {props.children}
      </LoginContext.Provider>
    )
  }


  export function useLoginContext() {
    const context = useContext(LoginContext);
  
    const {loginUsu, setLoginUsu} = context;
    
    return {
      loginUsu,
      setLoginUsu
    }
  }