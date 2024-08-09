import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Slidebar/Sidebar";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import AddTask from "./pages/AddTask/AddTask";
import data from "./data/kanban.json";
import { useState } from "react";
import EditTask from "./pages/EditTask/EditTask";

function App() {
  const [tasks, setTasks] = useState([...data]);
  const nextId = Math.max(...tasks.map((task) => task.id)) + 1;

  function addTask(newTask) {
    setTasks([newTask, ...tasks]);
  }

  function editTask(editedTask) {
    setTasks((tasks) => {
      const newTasks = [...tasks];
      return newTasks.map((task) => {
        return task.id === editedTask.id ? editedTask : task;
      });
    });
  }

  return (
    <>
      <div className="pageContainer">
        <Navbar />
        <div className="mainContainer">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main tasks={tasks} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/addTask"
              element={<AddTask addTask={addTask} nextId={nextId} />}
            />
            <Route
              path="/editTask/:id"
              element={<EditTask onEditTask={editTask} tasks={tasks} />}
            />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
