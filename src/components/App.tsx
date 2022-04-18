import React from 'react';
import banner from '../assets/images/test.png';

function App() {
  return (
    <div style={{
      display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
      <h1 style={{
        fontSize: '2.5rem', backgroundColor: '#7373e8b1', padding: '10px', borderRadius: '1rem', boxShadow: '2px 2px 5px 2px #888',
      }}
      >
        This is react-typescript-starter
      </h1>
      <img
        alt="banner"
        style={{
          width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1',
        }}
        src={banner}
      />
    </div>
  );
}

export default App;
