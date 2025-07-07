import React from "react";
import { useParams } from "react-router-dom";

function DetalleCita() {
  const { id } = useParams();
  return <h1>Detalles de la cita #{id}</h1>;
}

export default DetalleCita;