import { useState } from "react"

export function Form({setter, setIsCreatedTask}) {

    const [input, setInput] = useState('');

    const handleCahnge = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    
        setter(input);

        setIsCreatedTask(false);
    }

    return (
        <form
            className="w-full mt-5 flex"
            onSubmit={ e => handleSubmit(e) }
        >
            <input
                type="text"
                className="shadow-xl border mr-3 px-4 py-2 w-4/6 rounded-full"
                onChange={e => handleCahnge(e)}
            />
            <button
                className="bg-indigo-950 px-5 py-2 w-2/6 rounded-full text-white uppercase text-sm"
                type="submit"
            >Dodaj</button>
        </form>
    )
}