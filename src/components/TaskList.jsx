export function TaskList({ tasks, setDone, removeTask }) {

    const handleDone = index => {
        setDone(index);
    }

    const handleRemove = index => {
        removeTask(index);
    } 

    return (
        <ul className="w-full mt-5">
            { tasks.map(({desc, done}, index) => 
                <li className="flex justify-between items-center shadow-md p-3 border mt-3" key={index}>
                    <p className={ done ? "line-through" : "" }>{desc}</p>
                    <div>
                        {!done && 
                            <button
                                className="w-7 h-7 rounded-full text-xl bg-green-900 text-white mr-1"
                                onClick={() => handleDone(index)}
                            >✔</button>
                        }
                        <button
                            className="w-7 h-7 rounded-full text-xl bg-red-900 text-white"
                            onClick={() => handleRemove(index)}
                                
                        >✕</button>
                    </div>
                </li>
            )}
        </ul>
    )
}