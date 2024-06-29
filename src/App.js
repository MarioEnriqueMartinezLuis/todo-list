import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditToDo from "./Pages/EditToDo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id" element={<EditToDo />} />
    </Routes>
  );
}

export default App;
