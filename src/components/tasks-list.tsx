import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import Checked from "../assets/check.svg"

export default function TasksList() {
    const allTasks = useQuery(api.tasksFunction.getAllTasks)
    const toggleCompleteTask = useMutation(api.tasksFunction.toggleCompleteTask)

    console.log(allTasks);

    return (
        <div className="w-full h-[50%] bg-[hsl(235,24%,19%)]">
            {allTasks?.map((t) => {
                return (
                    <div key={t._id} className='w-full h-12 flex items-center'>
                        <div className='w-[8%] min-w-12 h-full flex items-center justify-center'>
                            <button
                                onClick={() => toggleCompleteTask({ taskId: t._id })}
                                className='w-5 h-5 flex items-center justify-center rounded-full border border-gray-600'>
                                <img src={t.isCompleted ? Checked : ""} className='w-3 h-3' alt="" />
                            </button>
                        </div>
                        <span className='w-full'>{t.taskName}</span>
                    </div>
                )
            })}
        </div>
    )
}
