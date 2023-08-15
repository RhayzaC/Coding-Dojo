import React, { useState, useEffect } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

// Tareas almacenadas al cargar la página (localStorage) y guardarlas al actualizarse
useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
}, []);

useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

//
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const newTaskObject = { text: newTask, completed: false };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
    }
};

    const handleToggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
};

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
};


return (
    <div className="container">
        <h1 className="my-4">Todo List</h1>
            <div className="mb-3 d-flex align-items-center">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAddTask}>
                Add
            </button>
    </div>
        <ul className="list-group">
            {tasks.map((task, index) => (
            <li className="list-group-item d-flex align-items-center" key={index}>
            <input
            type="checkbox"
            className="form-check-input m-2"
            checked={task.completed}
            onChange={() => handleToggleComplete(index)}
            />
            <span className={task.completed ? 'completed ml-2 text-decoration-line-through' : 'ml-2'}>{task.text}</span>
            <button className="btn btn-danger m-4" onClick={() => handleDeleteTask(index)}>
                Delete
            </button>
            </li>
        ))}
    </ul>
    </div>
);
}

export default TodoApp;