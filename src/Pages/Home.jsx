import { useEffect, useState } from "react";
import FormTodo from "../Components/Todo/FormTodo";
import TaskList from "../Components/Todo/TaskList";

function Home() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(JSON.parse(window.localStorage.getItem("taskList")) || [] );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddItem = (addItem) => {
    let data = [...taskList, addItem];
    setTaskList(data);
    window.localStorage.setItem("taskList", JSON.stringify(data));
  };

  return (
    <main className="container mx-auto">
      {/* <button
      className={`text-xs bg-white-500 border-2 border-blue-500/75 text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white hover:border-white-500`}
    >
      aaaaaaaaaaaaaaaaaaaaaa
    </button> */}
      <div className="flex justify-center items-center h-screen grid gridTemplateRows">
        <section className="list-title flex flex-row justify-center mt-5 row-span-*">
          <h1 className="font-bold">TO DO List</h1>
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
              pointEvents={true}
            />
          </article>
        </section>
      </div>
    </main>
  );
}

export default Home;
