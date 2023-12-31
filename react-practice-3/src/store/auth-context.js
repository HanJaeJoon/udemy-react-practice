import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const loginHandler = () => {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };