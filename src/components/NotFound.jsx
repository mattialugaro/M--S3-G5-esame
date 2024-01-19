import { NavLink } from "react-router-dom"

const NotFound = () => {

    return(
        <div className="text-center text-white my-5 bg-dark w-50 mx-auto rounded-pill">
            <h3 className="display-5 fst-italic text-light pt-3">404 - Pagina non Trovata</h3>
            <NavLink to="/" className="btn btn-light fw-bold my-3 rounded-pill text-dark">Torna alla Home</NavLink>
        </div>
    )
}

export default NotFound