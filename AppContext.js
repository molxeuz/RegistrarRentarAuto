import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [UsuariosContext, setUsuariosContext] = useState([]);
  const [AutomovilesContext, setAutomovilesContext] = useState([]);
  const [RentasContext, setRentasContext] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [FechaActual, setFechaActual] = useState('');

  useEffect(() => {
    const fechaActual = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', options);
    setFechaActual(fechaFormateada);
  }, []);

  return (
    <AppContext.Provider
      value={{
        UsuariosContext,
        setUsuariosContext,
        AutomovilesContext,
        setAutomovilesContext,
        RentasContext,
        setRentasContext,
        usuarioLogueado,
        setUsuarioLogueado,
        FechaActual,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
