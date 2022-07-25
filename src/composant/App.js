import { useState, useEffect, useRef, useMemo } from 'react';
import Timer from './Timer';
import Video from '../video/video.mp4'
import COntent from './Content';
import Content from './Content';


function App() {

    const [toggle, setToggle] = useState(true);

    const ref = useRef();

    

    

    const toggleFunc = () => {
        setToggle(!toggle)
    }
    const tableau = useMemo(() =>{
      return[1,2,3,4]


    },[])





  return (
    <div className="App">

      <Content num={tableau} />
       


    

        <button onClick={toggleFunc}>toggle</button>
        {toggle && <Timer  />}


        <video ref={ref} width="750" height="500" controls muted>
      <source src={Video} type='video/mp4' />
  
    </video>

    
      
    </div>
  );
}

export default App;