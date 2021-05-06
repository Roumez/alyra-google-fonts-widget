import React from 'react';

const DarkMode = ({darkMode, setDarkMode}) => {



  return (
      <button onClick={() => setDarkMode(!darkMode)}>Dark mode</button>
  );
};

 export default DarkMode;