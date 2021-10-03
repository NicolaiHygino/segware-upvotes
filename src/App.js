import React, { useState } from 'react';
import Login from './Login';
import Feed from './Feed';

const App = () => {
  const [token, setToken] = useState();
  
  if(!token) return <Login setToken={setToken} />;
  return <Feed />;
}

export default App;
