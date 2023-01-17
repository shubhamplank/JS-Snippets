import { useState } from 'react';
import jwt_decode from 'jwt-decode';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setUser(jwt_decode(token));
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      setUser(jwt_decode(token));
    }
  }, []);

  return { user, token, login, logout };
}

export default useAuth;
