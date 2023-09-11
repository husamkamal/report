// UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a custom hook for using the context
export function useUser() {
  return useContext(UserContext);
}

// Create a UserProvider component to wrap your app
export function UserProvider({ children }) {
  const [username, setUsername] = useState(null); // Initialize with null or the default username
    useEffect(()=>{
        console.log(localStorage.getItem("username"),"============>>>>>>>username context",username)
        setUsername(localStorage.getItem('username'))
    }, [username])
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
