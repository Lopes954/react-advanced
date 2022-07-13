import { useState, useEffect } from 'react';

function Effect() {

    const[dataImg ,setDataImg] = useState();

    useEffect(()=> {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            console.log(response);
            return response.json();

        })

        .then(data => {
            setDataImg(data[0].url);
        })

    },[])




  return (
    <div className="Effect">

        {dataImg &&
        <img src={dataImg}
        alt="cat image" style={{with: "200px"}}/>

        }
      
    </div>
  );
}

export default Effect;