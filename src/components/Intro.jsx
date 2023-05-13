import React, { useState, useEffect } from 'react';
import Intro from './Intro';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showIntro ? (
        <Intro />
      ) : (
        <Card />
      )}
    </div>
  );
};

export default App;
