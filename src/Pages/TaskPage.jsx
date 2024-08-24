import React from "react";
import useTaskList from "../hooks/useTaskList";
import Header from "../components/Header";

function TaskPage() {
    const { tasks, updateTask } = useTaskList();

    function handleCheck(id, completed) {
        updateTask(id, { completed });
    }

    return (
        <div className="task-page">
            <Header />
            {tasks.map((task) => (
                <div className="task" key={task.id}>
                    <span className="task-name">
                        {task.name}
                    </span>
                    <span className="task-description">
                        {task.description}
                    </span>
                    <label className={`task-check-label ${task.completed ? "completed" : ""}`} >
                        <input 
                        type="checkbox" 
                        className="task-check"
                        checked={task.completed}
                        onChange={(e) => handleCheck(task.id, e.target.checked)}
                        />
                        Completed
                    </label>
                </div>
            ))}
        </div>
    );
}

export default TaskPage;