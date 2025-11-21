import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"

export default function TaskInput() {
    const [taskName, setTaskName] = useState('')
    const createTask = useMutation(api.tasksFunction.createTask)

    function handleSubmit(e: any) {
        e.preventDefault()
        if (taskName === '') {
            return
        }

        createTask({taskName: taskName})
        setTaskName('')
    }
    return (
        <form onSubmit={handleSubmit} className="w-full h-12 flex items-center bg-[hsl(235,24%,19%)]">
            <button className="w-[8%] h-full p-2 text-white" type="submit">Create</button>
            <input className="w-full h-full bg-transparent px-5 focus:outline-none text-white" type="text" placeholder="Create a new todo..."
            value={taskName} onChange={(e) => {
                e.preventDefault()
                setTaskName(e.target.value)
            }}/>
        </form>
    )
}
