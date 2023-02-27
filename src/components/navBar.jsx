import styles from '../styles/navBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <img src="./logo.png" alt="Logo coffe" />
            </div>
            <div className={styles.services_option}>
                <ul>
                    <li><img src="./img/coffe.png" alt="" /> Cafe</li>
                    <li><img src="./img/burger.png" alt="" /> Hamburguesa</li>
                    <li><img src="./img/pizza.png" alt="" /> Pizzas</li>
                    <li><img src="./img/dona.png" alt="" /> Donas</li>
                    <li><img src="./img/pastel.png" alt="" /> Pasteles</li>
                    <li><img src="./img/cookie.png" alt="" /> Galletas</li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;