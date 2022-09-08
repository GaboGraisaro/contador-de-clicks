import React from 'react';
import '../stylesheet/boton.css';
function boton ({texto,esBotonDeClick, manejarclick}) /* Sintaxis de desestructuracion*/{
  //operador ternario permite tomar decisiones en base a otro operador  
	return (
			<button
			className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
			onClick={manejarclick}> 
       {texto}
			</button>
		)
}

export default boton;