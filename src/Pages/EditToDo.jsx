import { NavLink, useParams } from "react-router-dom";
import FormTodo from "../Components/Todo/FormTodo";
import { useEffect, useState } from "react";
import TaskList from "../Components/Todo/TaskList";
import { BackIcon } from "../Components/Icons/BackIcon";
import Swal from "sweetalert2";

function EditToDo() {
  const params = useParams();
  const [taskList, setTaskList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const handleAddItem = (addItem) => {
    let data = [...taskList, addItem];
    setTaskList(data);
    // window.localStorage.setItem("taskList", JSON.stringify(data));
  };

  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem("taskList"));
    setCurrentTask(buscarPorId(data, params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buscarPorId = (array, id) => {
    return array.find((elemento) => elemento.id === id);
  };

  const updateTaskName = (id, event) => {
    if (event.key === "Enter") {
      updateLabelInLocalStorage(id, event.target.value);
      Swal.fire({
        title: "Nombre de tarea actualizado",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1200,
      });
    }
  };

  const updateLabelInLocalStorage = (id, newLabel) => {
    const items = JSON.parse(localStorage.getItem("taskList"));
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].label = newLabel;
        break;
      }
    }
    localStorage.setItem("taskList", JSON.stringify(items));
  };

  return (
    <div className="flex justify-center items-center h-screen grid gridTemplateRows">
      <section className="list-title flex flex-row justify-center mt-5 row-span-*">
        <NavLink to={"/"}>
          <BackIcon />
        </NavLink>
        <div id="input-group" className="ml-5 grid grid-cols-3">
          <label htmlFor="toDoName">TO DO </label>
          <div>
            <input
              type="text"
              name="toDoName"
              id="subToDoName"
              className="border-2 border-blue-500/50 mr-5"
              value={currentTask.label}
              onKeyUp={(e) => updateTaskName(currentTask.id, e)}
              onChange={({ target }) =>
                setCurrentTask({
                  ...currentTask,
                  label: target.value,
                })
              }
            />
          </div>
        </div>
      </section>
      <section className="make-to-do row-span-*">
        <article className="flex justify-center pr-5">
          <FormTodo setDataList={setTaskList} handleAddItem={handleAddItem} />
        </article>
      </section>
      <section className="content-to-do row-span-*">
        <article>
          <h2 className="font-bold list-title flex justify-center mb-5">
            Lista de TO DOs
          </h2>
          <TaskList
            dataList={taskList}
            setDataList={setTaskList}
            pointEvents={false}
          />
        </article>
      </section>
    </div>
  );
}

export default EditToDo;
