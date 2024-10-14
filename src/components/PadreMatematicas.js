import Matematicas from "./Matematicas";
function padreMatematicas (){
    const tripleNumero = (numero) =>{
        let triple = parseInt(numero) * 3;
        console.log(triple);
    }
    return(
        <div>
            <Matematicas numero='10' metodoPadre={tripleNumero}/>  
        </div>
    )
}

export default padreMatematicas;