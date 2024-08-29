
import { ITask } from '../interfaces/Task'

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask):void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>

      {taskList.length > 0 ? (
        taskList.map(task => (
            <div key={task.id} className='
            flex justify-between w-[450px]  border-b-2 p-2 items-center '>
              <div className='text-[1.2em] mb-[1em]'>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className='flex flex-col items-center'>
                <i 
                onClick={() => handleEdit(task)}
                className='bi bi-pencil mb-[.5em] text-[1.2em] cursor-pointer bg-[#282c34] text-white p-2 hover:bg-slate-900'></i>
                <i className='bi bi-trash  mb-[.5em] text-[1.2em] cursor-pointer bg-[#282c34] text-white p-2 hover:bg-slate-900'
                onClick={() => {handleDelete(task.id)}}
                ></i>
              </div>
            </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas</p>
      )
    
    }
    
    </>
  )
}

export default TaskList