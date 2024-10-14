function Matematicas (props){
    const dobleNumero = () =>{
        let doble = parseInt(props.numero) * 2;
        console.log(doble);
    }
    var metodoPadre = props.metodoPadre;
    return(
        <div>
            <button onClick={()=>dobleNumero()}>Doble</button>
            <button onClick={()=>metodoPadre('10')}>Triple</button>
        </div>
    )
}

export default Matematicas;