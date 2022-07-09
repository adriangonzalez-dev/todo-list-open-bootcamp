import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent=({task, changeState})=>{



  return (
    <div>
      <h2>
        Nombre: {task.name}
      </h2>
      <h3>
        Descripción: {task.description}
      </h3>
      <h4>
        Nivel: {task.level}
      </h4>
      <h4>
        Esta tarea esta: {task.completed ? 'Completado' : 'Pendiente'}
      </h4>
      <button onClick={()=>changeState()}>Marcar como completada</button>
    </div>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)
}

export default TaskComponent
