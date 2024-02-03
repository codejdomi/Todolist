import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from "../model";
import SingleTodo from './SingleTodo';
import './styles.css'

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
     <div className="container">
      <Droppable droppableId='TodoList'>
         {
          (provided, snapshot) => (
            <div className={`todos 
            ${snapshot.isDraggingOver? 'dragactive': ""}`} 
              ref={provided.innerRef} 
              {...provided.droppableProps}>
            <span className="todos_heading">
              List of New Task
            </span>
            {
              todos.map((todo, index) => (
                <SingleTodo 
                index={index}
                todo={todo} 
                todos={todos} 
                key={todo.id} 
                setTodos={setTodos} />
              ))}
              {provided.placeholder}
         </div>
          )}
        </Droppable>
        <Droppable droppableId='Todos remove'>
          {
            (provided, snapshot) => (
              <div className={`todos remove 
              ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
              ref={provided.innerRef} 
              {...provided.droppableProps}>
              <span className="todos_heading">
                Complete Task
              </span>
              {
                completedTodos.map((todo, index) => (
                  <SingleTodo 
                  index={index}
                  todo={todo} 
                  todos={completedTodos} 
                  key={todo.id} 
                  setTodos={setCompletedTodos} />
                ))}
                 {provided.placeholder}
            </div>
            )}
        </Droppable>
        
     </div>
  )
};

export default TodoList