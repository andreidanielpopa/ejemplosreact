import './SumarNumeros.css'
import imagen from '../../assets/images/cruzzi2.jfif'
function SumarNumeros() {
    const sumaNumero = (numero1, numero2) => {
        var suma = numero1 + numero2;
        console.log(suma);
    };
    return(
        <div>
            <img src={imagen} alt="imagen cruzzi"></img>
            <button onClick={() => sumaNumero(2,2)}>Sumar</button>
            <button onClick={() => sumaNumero(5,5)}>Sumar</button>
        </div>
    )
}

export default SumarNumeros;
