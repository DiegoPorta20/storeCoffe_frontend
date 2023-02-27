import { Link } from "react-router-dom"

const ServicesProduct = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/resumen">Resumen</Link></li>
                <li><Link to="/datosTotal">Datos y Total</Link></li>
            </ul>
        </div>
    )
}
export default ServicesProduct