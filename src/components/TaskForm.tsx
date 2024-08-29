
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string,
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void
  
};

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {
 
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
   
    e.preventDefault();

    if(handleUpdate){
      handleUpdate(id, title, difficulty)

    }else {

      const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {id, title, difficulty}

    setTaskList!([...taskList, newTask])

    setTitle("")
    setDifficulty(0)

    }

   


  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name  === "title"){
          setTitle(e.target.value)
    }else {
      setDifficulty(parseInt(e.target.value))
    }

  
  }



  return (
   <form onSubmit={addTaskHandler} className="flex flex-col w-[600px] gap-4 mt-10">
    <div className="flex flex-col">
      <label htmlFor="">Titulo:</label>
      <input 
      className="border p-4 outline-0 rounded"
      type="text" 
      name="title" 
      placeholder="Título da tarefa"
      onChange={handleChange}
      value={title}
      
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="">Dificuldade:</label>
      <input 
      className="border p-4 outline-0 rounded"
      type="text" 
      name="difficulty" 
      placeholder="Dificuldade da tarefa"
      onChange={handleChange}
      value={difficulty}
      
      />
    </div>

    <input 
    className="border p-4 cursor-pointer rounded bg-blue-900 hover:bg-blue-800 text-white"
    type="submit" value={btnText}/>
   </form>
  )
}

export default TaskForm