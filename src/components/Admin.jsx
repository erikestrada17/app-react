import React, { useState, useEffect } from "react";
import { auth, store } from "../firebaseconfig";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [locales, setLocales] = useState([""]);
  const historial = useHistory();
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUsuario(user.email);
      console.log(user.email);
      if (!usuario == null) {
        setLocales([...locales, user.email]);
      }
    });
  }, []);

  const [email, setEmail] = useState("");
  const [contra, setContra] = useState("");

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, contra)
      .then((r) => {
        console.log(r);
        alert("Resgistro exitoso");
        setEmail("");
        setContra("");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="row mt-5">
      <div className="col-sm col-md-3">
        {
          /*auth.currentUser !== null*/
          auth.currentUser.email === "admin@gmail.com" ? (
            <p className="mt-4">
              Email de administrador en sesión: {auth.currentUser.email}
            </p>
          ) : (
            <p className="mt-4">
              Email de responsable en sesión: {auth.currentUser.email}
            </p>
          )
        }
      </div>
      <div className="col-md">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <h2 className="text-center text-primary">
            Registrar responsable del local
          </h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mt-5"
            placeholder="Ingrese email"
            type="email"
          />
          <input
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            className="form-control mt-3"
            placeholder="Ingrese contraseña"
            type="password"
          />
          <input
            className="btn btn-dark btn-block mt-3"
            value="Registrar Usuario"
            type="submit"
          />
        </form>
      </div>
      <div className="col-sm col-md-3">
        <p className="mt-4">Lista de responsables:</p>
        {/* {usuario != null && email !== "admin@gmail.com" ? (
          locales.map((e) => <p>{e}</p>)
        ) : (
          <span></span>
        )} */}
      </div>
    </div>
  );
};

export default Admin;
