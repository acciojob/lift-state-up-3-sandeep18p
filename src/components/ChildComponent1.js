
import React from 'react';

function ChildComponent1({ onSelectOption }) {
  const handleClick = () => {
    onSelectOption('Option 1');
  };

  return (
    <div className='one'>
        <h1>Child Component 1</h1>
      <button onClick={handleClick}>Select Option 1</button>
    </div>
  );
}

export default ChildComponent1;
