import ServicesProduct from "./servicesProduct"
import Menu from "./menu"
import Resumen from "./resumen"
import DatosTotal from "./datosTotal"
import { Route, Routes } from "react-router-dom"

const Container = () => {
    return (
        <div>
            <ServicesProduct></ServicesProduct>
            <Routes>
                <Route path="/" element={ <Menu />} />
                <Route path="/resumen" element={ <Resumen />} />
                <Route path="/datosTotal" element={ <DatosTotal />} />
            </Routes>
        </div>
    )
}
export default Container