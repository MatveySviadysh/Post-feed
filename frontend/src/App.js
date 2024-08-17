import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    };

    return (
        <Router>
            <AppRoutes onLogin={handleLogin} onLogout={handleLogout} isAuthenticated={isAuthenticated} />
        </Router>
    );
}

export default App;
