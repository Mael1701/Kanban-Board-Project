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
import TaskDetails from "./components/TaskDetails/TaskDetals";

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

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function moovingTask(id, status) {

    const taskId = tasks.findIndex((el) => el.id === id);
    const newTasks = tasks.map((task, i) => {
      if(i !== taskId){
        return task
      }
      task.status = status
      return task
    })
    setTasks(newTasks);
  }


  return (
    <>
      <div className="pageContainer">
        <Navbar />
        <div className="mainContainer">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<Main tasks={tasks} deleteTask={deleteTask} moovingTask={moovingTask} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/addTask"
              element={<AddTask addTask={addTask} nextId={nextId} />}
            />
            <Route
              path="/editTask/:id"
              element={<EditTask onEditTask={editTask} tasks={tasks} />}
            />
            <Route
              path="/taskDetails/:id"
              element={<TaskDetails tasks={tasks} deleteTask={deleteTask} />}
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
