import React from 'react';
import '../stylesheet/contador.css'
function Contador ({numClicks}) {
    return (
     <div className='contador'>
      {numClicks}
     </div>
    );
}

export default Contador;