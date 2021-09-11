import React, {useState, useEffect} from 'react';
import { store } from '../firebaseconfig';
import { auth } from '../firebaseconfig';
import CRUD from '../crud'
import db from '../firestore'

const Inicio = () => {
	const [usuario, setUsuario] = useState('')
    useEffect( () => {
        try {
            auth.onAuthStateChanged( user => {
                setUsuario(user.email);
                //console.log(user.email);
            })
        } catch(err) {
            console.log(err)
        }
        let get = CRUD
        console.log('crud:')
        console.log(get)
        console.log('getAll:')
        console.log(get.getAll())
        
    },[])
    return (
        <div>
            <h2>Inicio/Cliente</h2>
        </div>
    );
};

export default Inicio;
