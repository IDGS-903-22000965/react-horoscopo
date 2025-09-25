import React from "react";
import PropTypes from "prop-types";

const TarjetaSigno = ({ signo, icono, prediccion, usuario }) => {
  return (
    <div className="signo-card">
      <img src={icono} alt={signo} className="signo-avatar" />
      <h2 className="signo-title">{signo}</h2>

      <div className="saludo">
        <strong>¡Hola {usuario}!</strong> Tu signo es <strong>{signo}</strong>
      </div>

      <div className="prediccion">{prediccion}</div>
    </div>
  );
};

TarjetaSigno.propTypes = {
  signo: PropTypes.string.isRequired,
  icono: PropTypes.string.isRequired,
  prediccion: PropTypes.string.isRequired,
  usuario: PropTypes.string.isRequired,
};

export default TarjetaSigno;
