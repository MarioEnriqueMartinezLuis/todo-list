import { useState } from "react";
import ClasicButton from "../Buttons/ClasicButton";
import Swal from "sweetalert2";

function FormTodo({ setDataList, handleAddItem }) {
  const [taskName, setTaskName] = useState("");
  const onclickEvt = () => {
    if (taskName.length === 0) {
      Swal.fire({
        title: "El campo tarea no puede estar vacío",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        //   cancelButtonText: "Cancelar",
      });
    } else {
      handleAddItem({
        id: (+new Date()).toString(),
        label: taskName,
      });

      Swal.fire({
        title: "Tarea agregada",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1200,
      });
      setTaskName("");
    }
  };

  return (
    <div id="input-group">
      <label htmlFor="toDoName">Tarea</label>
      <div>
        <input
          type="text"
          name="toDoName"
          id="toDoName"
          className="border-2 border-blue-500/50 mr-5"
          value={taskName}
          onChange={({ target }) => setTaskName(target.value)}
        />
        <ClasicButton
          key={1}
          backgroundColor={"white"}
          hoverBackgroundColor={"blue"}
          borderColor={"blue"}
          text={"Agregar"}
          textColor={"black"}
          hoverTextColor={"white"}
          handleOnclick={onclickEvt}
        />
      </div>
    </div>
  );
}

export default FormTodo;
