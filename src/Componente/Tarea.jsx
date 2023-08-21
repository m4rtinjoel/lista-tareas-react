import React from "react";
import { useState } from "react";

function Tarea() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea != "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };
  return (
    <div>
      <form action="">
        <label htmlFor="tarea">Tarea: </label>
        <input
          type="text"
          value={tarea}
          placeholder="Ingresa tu tarea"
          id="tarea"
          onChange={(e) => setTarea(e.target.value)}
        />
        <input type="button" onClick={agregarTarea} value="Agregar" />
      </form>

      <table border={1}>
        <tr>
          <td>Tarea</td>
          <td>Finalizada</td>
        </tr>
        {tareas.map((miTarea, index) => (
          <tr>
            <td>{miTarea}</td>
            <td>
              <input type="checkbox" />
              <input
                type="button"
                value="Borrar"
                onClick={() => {
                  console.log("Borrando");
                  const tareaBorrada = tareas.filter((_, i) => i !== index);
                  setTareas(tareaBorrada);
                }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Tarea;
