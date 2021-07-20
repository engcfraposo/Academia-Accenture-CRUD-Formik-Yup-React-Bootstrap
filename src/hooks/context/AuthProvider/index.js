import React, {
    createContext,
    useState,
    useContext,
    useCallback,
  } from 'react';
  
  const AuthContext = createContext({});

  const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
      const token = sessionStorage.getItem('@Academia_login');
  
      if (token) {
        return token;
      }
  
      return "";
    });
  
    const [error, setError] = useState("");

    const signOut = useCallback(() => {
      sessionStorage.removeItem('@Academia_login')
      setAuth("");
    }, []);
  
    const signIn = useCallback(async ({login, password}) => {
      setError("")
      try {
        if(!login || !password) setError('Login ou senha inválidos')
        
        const auth = {
            login: "teste",
            password: "teste",
            access_token: "liberado"
        }

        if(login !== auth.login) {
            return setError('Login ou senha inválidos')
        }
        if(password !== auth.password) {
            return setError('Login ou senha inválidos')
        }

        setAuth(auth.access_token);
        sessionStorage.setItem('@Academia_login', auth.access_token)
        //api.defaults.headers.Authorization = `Bearer ${auth.access_token}`; 
      } catch (error) {
          setError('Login ou senha inválidos')
      }
    }, []);  
    
    return (
      <AuthContext.Provider 
        value={{ 
          auth, 
          signIn, 
          signOut, 
          error 
        }}
      >
            {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
  }
  
  export { AuthProvider, useAuth };