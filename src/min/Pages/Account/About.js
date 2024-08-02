import React, { useState } from 'react';
import './About.css';

function App() {
  const [message, setMessage] = useState(null);
  
  const a = "Login here";

  return (
    <div className="p-4">
      <button
        onClick={() => setMessage(a)}
        className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-100"
      >
        Click Me
      </button>
      
      {message !== null && ( // Check if message is not null
        <div style={{ border: "30px solid red", textAlign: "center", width: "20%", height: "50%" }}>
          <h2>{message}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
