import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

function NavBar() {
    return (
        <nav className={style.nav} >
            {/*eslint-disable-next-line react/no-unescaped-entities*/}
            <h2 className={style.item}><Link to="/" >Orc'food</Link></h2>
            <ul id="navbar">
                <li className={style.item}><Link to="/">Home</Link></li>
                <li className={style.item}><Link>Cardapio</Link></li>
                <li className={style.item}><Link to="login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar