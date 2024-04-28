
import React, { useState } from 'react';
import './../styles/App.css';
import './styless.css'

import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 onSelectOption={handleOptionSelect} />
      <ChildComponent2 onSelectOption={handleOptionSelect} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default App;
