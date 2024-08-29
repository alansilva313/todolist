import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


import { ITask } from "./interfaces/Task"
import Modal from "./components/Modal"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  };


  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
  if(display){
    modal?.classList.remove("hidden")
  }else {
    modal?.classList.add("hidden")
  }
  }


  const editTask = (task: ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
     const updatedTask: ITask = {id, title, difficulty}

     const updatedItems = taskList.map((task) => {
        return task.id === updatedTask.id ? updatedTask : task
     })

     setTaskList(updatedItems)

     hideOrShowModal(false)
  }

  return (
  <div className="flex flex-col w-full h-screen">
    <Modal children={<TaskForm btnText="Editar tarefa" 
    taskList={taskList} task={taskToUpdate}
    handleUpdate={updateTask}
    />} />
  <Header />

  <div className="flex flex-col items-center  p-4 justify-start w-full h-screen">
    <div>
      <h2>O que você vai fazer?</h2>
      <TaskForm 
     
      btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList}/>
    </div>

    <div className="flex flex-col items-center mt-20 gap-8 h-[600px] overflow-auto">
      <h2 className="text-3xl">Suas tarefas</h2>
      <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
    </div>

  </div>

    <Footer />
 
  </div>
  )
}

export default App
