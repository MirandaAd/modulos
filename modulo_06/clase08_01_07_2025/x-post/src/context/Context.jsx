/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    name: 'Marco',
    username: '@marcoRS',
    avatar: 'https://images.ecestaticos.com/dZ32Hrir1OYW3FBCGrs_er-PGEM=/369x0:1727x1019/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa06%2F7a2%2Fef8%2Fa067a2ef8c3d2ab71bbfdd68f38fc918.jpg'
  });

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
}
