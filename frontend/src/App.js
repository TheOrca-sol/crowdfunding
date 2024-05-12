import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/SignupLogin';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';
import Property from './components/Property';
import ProfileCompletion from './components/ProfileCompletion';
import SignupSteps from './components/SignupSteps';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = (checked) => {
    setIsLoggedIn(checked);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} handleToggle={handleToggle} />} />

            <Route path="/signup" element={<SignupSteps />} />
            <Route path="/ProfileCompletion" element={<ProfileCompletion />} />

            <Route path="/home" element={<Home isLoggedIn={isLoggedIn} handleToggle={handleToggle} />} />
            <Route path="/portfolio" element={<Portfolio isLoggedIn={isLoggedIn} handleToggle={handleToggle} />} />
            <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} handleToggle={handleToggle} />} />
            <Route path="/property"  element={<Property  isLoggedIn={isLoggedIn} handleToggle={handleToggle} />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
