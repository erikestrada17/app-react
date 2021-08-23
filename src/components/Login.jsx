import React, {useState} from 'react';
import { auth } from '../firebaseconfig';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const historial = useHistory()

    const[email, setEmail] = useState('')
    const[contra, setContra] = useState('')

    const iniciarSesion = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, contra)
            .then(r => {
                console.log(r)
                alert('login exitoso')
                setEmail('')
                setContra('')
                historial.push('/local')
            })
            .catch(err => {
                if(err.code === 'auth/invalid-mail' || err.code === 'auth/wrong-password'){
                    alert('Se ingreso email o contraseña incorrectamente')
                } else {
                    alert(err.message)
                    console.log(err.message)
                }
            })
    }

    return (
        <div className="row mt-5">
            <div className="col-sm col-md-3"></div>
            <div className="col-md">
                <form onSubmit={iniciarSesion} className="form-group">
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Ingrese email"
                        type="email" />
                    <input 
                        value={contra}
                        onChange={(e) => setContra(e.target.value)}
                        className="form-control mt-3"
                        placeholder="Ingrese contraseña"
                        type="password" />
                    <input 
                        className="btn btn-primary btn-block mt-3" //btn-dark
                        value="Iniciar Sesión"
                        type="submit" />
                </form>
            </div>
            <div className="col-sm col-md-3"></div>
        </div>
    );
};

export default Login;