import React, { useState } from 'react';
import './Modal.css'; 
function App() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='container'>
      {!isVisible && (
        <button onClick={() => setIsVisible(true)}
        className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-100" >
          Show Message
        </button>
      )}

      {isVisible && (
        <div style={{ border: "10px solid Black", width: "600px", padding: "50px", textAlign: "center", position: "relative" }}>
           <button onClick={() => setIsVisible(false)} className="close-button">X</button>
          
          <h1>Welcome</h1>
          <video width="560" height="315" controls autoPlay loop>
            <source src="/min.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default App;
