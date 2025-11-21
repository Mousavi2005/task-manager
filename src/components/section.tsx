import Header from "./header"
import TaskInput from "./input"
import TasksList from "./tasks-list"

export default function Section() {

    return (
        <div className="relative bg-blue-100 h-full w-[45%]">
            <Header></Header>
            <TaskInput></TaskInput>
            <TasksList></TasksList>
        </div>
    )
}
