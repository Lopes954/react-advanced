import { useState, useEffect } from 'react';
import Timer from './Timer';

function App() {

    const [toggle, setToggle] = useState(true);

    

    const toggleFunc = () => {
        setToggle(!toggle)
    }





  return (
    <div className="App">

        <button onClick={toggleFunc}>toggle</button>
        {toggle && <Timer  />}

    
      
    </div>
  );
}

export default App;