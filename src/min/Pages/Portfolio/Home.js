import React, { useState } from 'react';
import img1 from "../../../image/bag.jpg";
import img2 from "../../../image/girl.png"; 

function App() {
  // State to store the image URL or path
  const [imageSrc, setImageSrc] = useState('');

  // Set the image source when the first button is clicked
  const showImage1 = () => {
    setImageSrc(img1);
  };

  // Set the image source when the second button is clicked
  const showImage2 = () => {
    setImageSrc(img2);
  };

  return (
    <div>
      <div className="border-solid border-2 p-4">
        <button
          onClick={showImage1}
          className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-100"
        >
          Show Image 1
        </button>
        <button
          onClick={showImage2}
          className="px-4 py-2 border-2 border-red-500 text-red-500 rounded hover:bg-red-100 ml-2"
        >
          Show Image 2
        </button>
      </div>
      
      {/* Render the image if imageSrc is set */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Dynamic"
          style={{ display: 'block', margin: '20px auto', maxWidth: '100%' }}
        />
      )}
    </div>
  );
}

export default App;
