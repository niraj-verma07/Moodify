import { login, register, getMe, logout } from "../services/auth.api";
import { useContext } from "react";
import { AuthContext } from "../auth.context";

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  async function handleRegister({ username, email, password }) {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
    } catch {
      setUser(null);
    }
    setLoading(false);
  }

  async function handleLogin({ username, email, password }) {
    setLoading(true);
    try {
      const data = await login({ username, email, password });
      setUser(data.user);
    } catch {
      setUser(null);
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      // ignore
    }
    setUser(null);
    setLoading(false);
  }

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
  };
};
