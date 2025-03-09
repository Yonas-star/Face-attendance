// src/App.tsx
import React from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Student Attendance System</h1>
      <WebcamCapture />
    </div>
  );
};

export default App;
