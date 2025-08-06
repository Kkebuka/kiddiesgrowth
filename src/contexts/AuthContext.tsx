// context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

// Define the shape of your user
type User = {
  id: string;
  email: string;
  name?: string;
  // add any other user properties
};

// Define the shape of the AuthContext
type AuthContextType = {
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<unknown>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Optional: Check user from cookie/localStorage
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include", // 🌟 for HTTP-only cookie
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (res.ok) setUser(data.user);
    return data;
  };

  const logout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
