import SaludoHijo from './SaludoHijo';
function SaludoPadre() {
    const metodoPadre = (nombre) => {
        console.log(nombre+'Yo soy tu padre');
    };
    return (
        <div>
            <h1>Saludo Padre</h1>
            <SaludoHijo idhijo='1' metodoPadre={metodoPadre}/>
            <SaludoHijo idhijo='2' metodoPadre={metodoPadre}/>
            <SaludoHijo idhijo='3' metodoPadre={metodoPadre}/>
        </div>
    );
}

export default SaludoPadre;
