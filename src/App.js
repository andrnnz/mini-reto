import React from 'react';
import FileUploadComponent from './FileUpload';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Subir Archivos</h1>
      <FileUploadComponent />
      <div className="footer">
        <p> Andrea Núñez | A01640839 </p>
        <p> Roberto Castro | A01640117 </p>
      </div>
    </div>
  );
};

export default App;
