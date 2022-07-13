import { useState, useEffect } from 'react';

function Accumulation() {

  const [dataComponent, setDataComponent] = useState(1);

  const changeState = () => {
    setDataComponent(dataComponent + 1)
  }



  return (
    <div className="Accumulation">
      <h1>le state est {dataComponent}</h1>
      <button onClick={changeState}>modififcation</button>
    </div>
  );
}

export default Accumulation;
