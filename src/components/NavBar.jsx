import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <header className='d-flex'>
            <nav className="navbar navbar-expand-lg row">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="http://localhost:5173/">Helados Supreme</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="http://localhost:5173/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/:id">Helados</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category/:id">Postres</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar