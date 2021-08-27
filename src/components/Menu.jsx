import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, store } from '../firebaseconfig'

const Menu = () => {
    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)
    useEffect( () => {
        auth.onAuthStateChanged( user => {
            setUsuario(user.email);
            console.log(user.email);
        })
    },[])

    const cerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        historial.push('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li>
                        
                        {
                            !usuario?(
                                <Link className="nav-link" to="/login">Login</Link>
                            ):(
                                <span></span>
                            )
                        }
                    </li>
                    <li>
                        {
                            usuario?(
                                <Link className="nav-link" to="/local">Local</Link>
                            ):(
                                <span></span>
                            )
                        }
                    </li>
                    <li>
                        <Link className="nav-link" to="/admin">Admin(test)</Link>
                        {/* TODO: verificar admin en BD (firebase store)
                            !usuario?(
                                <Link className="nav-link" to="/admin">Admin</Link>
                            ):(
                                <span></span>
                            )
                        */}
                    </li>
                </ul>
                {
                    usuario? (
                        <button
                            onClick={cerrarSesion}
                            className="btn btn-danger"
                        >Cerrar Sesión</button>
                    ) : (
                        <span></span>
                    )
                }
            </nav>
        </div>
    );
};

export default Menu;