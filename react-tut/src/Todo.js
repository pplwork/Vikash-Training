import React from 'react'

const Todo = ({ todos, deleteTodo }) => {

    console.log(todos)

    const todolist = todos.length ? (todos.map(todo => {
        return (
            <div className='collection-item' key={todo.id}>
                <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
            </div>
        )
    })
    ) : (
        <p className="center">no todos left</p>
    )

    return (
        <div className='todos collections'>
            {todolist}
        </div>
    )
}

export default Todo