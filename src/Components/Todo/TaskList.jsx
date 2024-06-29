import Swal from "sweetalert2";
import { TrashIcon } from "../Icons/TrashIcon";
import { NavLink } from "react-router-dom";

function TaskList({ dataList, setDataList, pointEvents }) {
  const onClickRemoveItem = (currentId) => {
    Swal.fire({
      title: "Esta a punto de eliminar la tarea",
      text: "Está acción es irreversible, ¿Desea continuar?",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateList = dataList.filter((task) => currentId !== task.id);
        setDataList(updateList);
        if (!pointEvents)
          window.localStorage.setItem("taskList", JSON.stringify(updateList));
        Swal.fire({
          title: "Tarea eliminada",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  };

  return (
    <ul className="to-do-list border-2 border-gray-500/50 rounded-lg">
      {dataList.length > 0 &&
        dataList.map((task, index) => {
          return (
            <li
              className="to-do-list my-2 mx-4 border-b-2 grid grid-cols-2 gap-10"
              key={index}
            >
              {pointEvents && (
                <NavLink
                  to={`/todo/${task.id}`}
                  className="hover:bg-blue-700/50 hover:text-white"
                >
                  {task.label}
                </NavLink>
              )}
              {!pointEvents && task.label}
              <TrashIcon
                style={{
                  position: "relative",
                  left: "90px",
                  cursor: "pointer",
                }}
                onClickEvt={() => onClickRemoveItem(task.id)}
              />
            </li>
          );
        })}
      {dataList.length === 0 && (
        <li className="to-do-list flex justify-center my-2 mx-4 border-b-2 text-gray-500/75">
          Lista vacía
        </li>
      )}
    </ul>
  );
}

export default TaskList;
