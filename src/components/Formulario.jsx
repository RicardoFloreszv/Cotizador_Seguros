import { MARCAS, YEARS, PLANES } from "../constants"
import { Fragment} from "react"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"


function Formulario() {

    const {datos, handleChangeDatos, error, setError, cotizadorSeguro} = useCotizador()
    
    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }
        setError("")

        // TODO: Cotizar
        cotizadorSeguro()
        

    }


  return (
    <>
        {error && <Error/> }

        <form onSubmit={handleSubmit} className="mb-10">
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
            
                <select name="marca" id="" className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}>
                    <option value="">-- Selecciona Marca --</option>
                    {MARCAS.map( marca => (
                        <option value={marca.id} key={marca.id}>
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
            
                <select name="year" id="" className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}>
                    <option value="">-- Selecciona Año --</option>
                    {YEARS.map( year => (
                        <option value={year} key={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Elige un plan</label>
                
                <div>
                    {PLANES.map( plan =>(
                        <Fragment
                            key={plan.id}
                            >
                                <label >{plan.nombre}</label>
                                <input type="radio"
                                       className="mx-4"
                                       name="plan"
                                       value={plan.id} 
                                       onChange={e => handleChangeDatos(e)}/>

                        </Fragment>

                    ))}
                </div>
            </div>

            <input type="submit" value="cotizar" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' />



        </form>
    
    </>
  )
}

export default Formulario