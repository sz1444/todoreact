import { useState } from "react"
import { ButtonAddTask } from "./ButtonAddTask";
import { Form } from "./Form";

export function AddTask({setter}) {
    
    const [isCreatedTask, setIsCreatedTask] = useState(false);

    return (
        <>
            { isCreatedTask ?
                <Form setter={setter} setIsCreatedTask={setIsCreatedTask} /> :
                <ButtonAddTask onClick={() => setIsCreatedTask(true)} />
            }
        </>
    )
}