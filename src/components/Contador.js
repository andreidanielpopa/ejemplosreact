import { useState } from 'react';

function Contador() {
    const [numero, setNumero] = useState(0);
    const sumarNumero = () =>{
        setNumero(numero+1);
    }
    return (
        <div>
            <h1>Ejemplo contador State</h1>
            <h2>Contador {numero}</h2>
            <button onClick={()=>sumarNumero()}>Sumar contador</button>
            <button onClick={()=> setNumero(numero - 1)}>Restar contador</button>
        </div>
    );
}

export default Contador;
