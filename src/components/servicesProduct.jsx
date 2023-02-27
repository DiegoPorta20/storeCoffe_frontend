import { Link } from "react-router-dom"
import styles from '../styles/serviceProduct.module.css'

const ServicesProduct = () => {
    return (
        <div className={styles.nav}>
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/resumen">Resumen</Link></li>
                <li><Link to="/datosTotal">Datos y Total</Link></li>
            </ul>
        </div>
    )
}
export default ServicesProduct