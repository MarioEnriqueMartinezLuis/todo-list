export const saveTaskList = (id, taskList) => {
  const items = JSON.parse(localStorage.getItem("taskList"));
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items[i].tasklist = taskList;
      break;
    }
  }
  localStorage.setItem("taskList", JSON.stringify(items));
};
