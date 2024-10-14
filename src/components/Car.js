import { useState } from 'react';
function Car(props) {
    const [estado, setEstado] = useState(false);
    const [velocidad, setVelocidad] = useState(0);

    var coche = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadmaxima),
        aceleracion: parseInt(props.aceleracion),
    };

    const comprobarEstado = () => {
        if (estado == true) {
            return <h1 style={{ color: 'green' }}>Arrancado</h1>;
        } else {
            return <h1 style={{ color: 'red' }}>Detenido</h1>;
        }
    };

    const acelerarCoche = () => {
        if (estado == false) {
            alert('El coche esta detenido');
            setVelocidad(0);
        } else {
            if (velocidad >= coche.velocidadMaxima) {
                setVelocidad(coche.velocidadMaxima);
            } else {
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    };

    return (
        <div>
            <h1>
                Componente car: {coche.marca}, {coche.modelo}
            </h1>
            <h2>Velocidad actual: {velocidad} km/h</h2>
            <div>{comprobarEstado()}</div>
            <button
                onClick={() => {
                    setEstado(!estado);
                }}
            >
                Arrancar/Detener
            </button>
            
            <button onClick={()=>acelerarCoche()}>Acelerar Coche</button>
        </div>
    );
}

export default Car;
