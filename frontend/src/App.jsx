import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Models from './pages/Models';
import Research from './pages/Research';
import Auth from './pages/Auth';

/* ===============================
   AUTH CONTEXT (In-Memory JWT)
================================ */

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (accessToken) => {
    setToken(accessToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/* ===============================
   PROTECTED ROUTE
================================ */

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

/* ===============================
   APP
================================ */

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/models" element={<Models />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;