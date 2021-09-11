import React, { useState, useEffect } from "react";
import { store } from "../firebaseconfig";

const Local = () => {
  const [locales, setLocales] = useState([]);
  useEffect(() => {
    store.collection("locales").onSnapshot((querySnapshot) => {
      let locales = [];
      querySnapshot.docs.forEach((doc) => {
        console.log(doc.data());
        const { name, email } = doc.data();
        locales.push({
          id: doc.id,
          name,
          email,
        });
      });
      setLocales(locales);
    });
    console.log("locales:");
    console.log(locales);
  }, []);
  return (
    <div>
      <h2>Responsable del local</h2>
      {locales.map((local) => {
        console.log(local);
      })}
    </div>
  );
};

export default Local;
