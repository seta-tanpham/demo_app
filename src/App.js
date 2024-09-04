import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddUser from './components/AddUser'; // Import the AddUser component
import Home from './components/Home'; // Optional

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/add-user" element={<AddUser />} /> {/* Add User route */}
      </Routes>
    </Router>
  );
}

export default App;
