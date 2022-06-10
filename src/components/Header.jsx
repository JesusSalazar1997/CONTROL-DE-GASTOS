import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({ presupuesto, setPresupuesto, isvalid, setIsvalid, gastos, setGastos }) => {

    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isvalid ? (
                <ControlPresupuesto
                    gastos={gastos}
                    presupuesto={presupuesto}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setIsvalid={setIsvalid}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsvalid={setIsvalid}

                />)}

        </header>
    )
}

export default Header