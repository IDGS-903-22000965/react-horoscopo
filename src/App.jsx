import React, { useState } from "react";
import SignosZodiacales from "./components/SignosZodiacales";

function App() {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const calcularSignoZodiacal = (fecha) => {
    const [año, mes, dia] = fecha.split("-").map(Number);
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21))
      return "Escorpio";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21))
      return "Sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19))
      return "Capricornio";
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
    return null;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre && fechaNacimiento) {
      const signo = calcularSignoZodiacal(fechaNacimiento);
      setResultado({ nombre, signo });
      setMostrarModal(true);
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setNombre("");
    setFechaNacimiento("");
    setResultado(null);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Horóscopo App</h1>
        <p>Descubre tu signo zodiacal y tu mensaje personalizado</p>
      </div>

      <div className="form-container">
        <form onSubmit={manejarEnvio}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label>Fecha de nacimiento:</label>
            <input
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">
            Descubrir mi Signo
          </button>
        </form>
      </div>

      {mostrarModal && resultado && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={cerrarModal}>
              ×
            </button>
            <SignosZodiacales
              datosSigno={resultado.signo}
              nombreUsuario={resultado.nombre}
            />
            <button className="btn btn-secondary" onClick={cerrarModal}>
              Nueva Consulta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
