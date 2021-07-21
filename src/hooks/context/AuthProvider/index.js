  import React, {
    createContext,
    useState,
    useContext,
    useCallback,
  } from 'react';

  import { api } from '../../../services/api'

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
        
        const { data } = await api.get(`/users?login=${login}`)

        if(data.length === 0) {
            return setError('Login ou senha inválidos')
        }
        if(password !== data[0].password) {
            return setError('Login ou senha inválidos')
        }

        setAuth(data[0].access_token);
        sessionStorage.setItem('@Academia_login', data[0].access_token)
        api.defaults.headers.Authorization = `Bearer ${data[0].access_token}`; 
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