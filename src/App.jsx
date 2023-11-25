import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { getSubheading } from "./utils/getSubheading";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (desc) => {
        const newTask = {
            desc: desc,
            done: false
        }
        setTasks(prevTasks => ([
            ...prevTasks,
            newTask
        ]))
    }

    const setTaskDone = index => {
        setTasks((prevTasks) => (
            prevTasks.map((task, key) => {
                if (index !== key) return task;

                return {
                    ...task,
                    done: true
                }
            })
        ))
    }

    const removeTask = index => {
        setTasks((prevTasks) => (
            prevTasks.filter((task, key) => {
                if (index == key) return false;
    
                return true
            })
        ))
    }

    return (
        <div className="h-screen p-5 bg-indigo-950 flex items-start justify-center">
            <div className="w-full md:w-1/2 bg-white p-10 rounded-lg mt-10">
                <header className="flex flex-wrap justify-between">
                    <div>
                        <h1 className="text-xl uppercase font-bold">Lista zadań</h1>
                        <p>{ getSubheading(tasks.length) }</p>
                    </div>
                    <AddTask setter={addTask}/>
                </header>
                <TaskList tasks={tasks} setDone={setTaskDone} removeTask={removeTask}/>
            </div>
        </div>
    )
}

export default App;
