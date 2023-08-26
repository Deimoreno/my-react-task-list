import React from "react";
import TaskList from "../components/TaskList";

function HomePage() {
    return (
        <div>
            <h1 className="Home">Bienvenidos a la Aplicacion de Tareas</h1>
            
            <TaskList showDescrition={false} />

        </div>
    );
}

export default HomePage;