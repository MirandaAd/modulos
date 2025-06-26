function Tarjeta () {
    // Definimos la información estática de la tarjeta
  const nombre = "Daniel";
  const profesion = "Desarrollador";
  const mensaje = "¡Hola! Esta es mi tarjeta de presentación";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div style={{ border: '1.2px solid #ccc', padding: '25px', width: '300px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta