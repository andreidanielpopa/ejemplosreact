import './SumarNumeros.css'
import imagen from '../../assets/images/cruzzi2.jfif'
function SumarNumeros(props) {
    
    const sumaNumero = () => {
        var suma = parseInt(props.numero1) + parseInt(props.numero2);
        console.log(suma);
    };
    return(
        <div>
            <img src={imagen} alt="imagen cruzzi"></img>
            <br/>
            <button onClick={() => sumaNumero()}>Sumar {props.numero1} + {props.numero2}</button>
        </div>
    )
}

export default SumarNumeros;
