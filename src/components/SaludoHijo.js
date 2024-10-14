function SaludoHijo(props) {
    let ejecutarPadre = props.metodoPadre;
    let idhijo = props.idhijo;
    return (
        <div>
            <h1>Saludo Hijo</h1>
            <button onClick={()=>ejecutarPadre('Luke ' + idhijo)}>Lamar al Padre</button>
        </div>
    );
}

export default SaludoHijo;
