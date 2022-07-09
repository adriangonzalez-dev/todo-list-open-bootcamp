import TaskComponent from '../pure/TaskComponent'
import {Task} from '../../models/task.class'
import React from 'react'
import { LEVELS } from '../../models/levels.enum'

const task_list = () => {
    const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL)

    const changeState = (id) =>{
        console.log("Cambiar estado")
    }
  return (
    <div>
        <div>
            Tus tareas
        </div>
        <TaskComponent task={defaultTask} changeState={changeState}/>
    </div>
  )
}

export default task_list
