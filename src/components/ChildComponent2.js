// ChildComponent2.js
import React from 'react';

function ChildComponent2({ onSelectOption }) {
  const handleClick = () => {
    onSelectOption('Option 2');
  };

  return (
    <div className='two'>
          <h1>Child Component 2</h1>
      <button onClick={handleClick}>Select Option 2</button>
    </div>
  );
}

export default ChildComponent2;
