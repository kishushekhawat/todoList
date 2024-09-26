import { useState } from "react";

function TodoItem() {
    let [task, setTask] = useState('');
    let [taskList, setTaskList] = useState([])

    function InputHandler(event) {
        setTask(event.target.value);
    };
    function AddTaskHandler() {
        if (task.trim() !== "") {
            setTaskList([...taskList, task])
            setTask("")
        }
    }
    function deleteItem(index) {

        let newTask = [...taskList]
        newTask.splice(index, 1)
        setTaskList(newTask)

    }

    return (
        <>
            <div className="">
                <div className="bg-blue-400 font-bold text-white text-center text-3xl p-2">To do List!!</div>
                <div className="flex w-[400px] mx-auto mt-24 gap-3 items-center ">
                    <input onChange={InputHandler} value={task} className="border rounded-xl px-1 py-2" type="text" placeholder="enter your task" />
                    <button onClick={AddTaskHandler} className="border rounded-xl  px-1 py-2 bg-blue-400 font-bold text-white">Add Task</button>

                </div>
            </div>
            <div className="mt-6 w-[400px] mx-auto ">
                {taskList.length > 0 ? (
                    <ul >
                        {taskList.map((t, index) => (
                            <li key={index} className="border w-[100%] p-2 my-2 rounded bg-gray-100 flex justify-between items-center">
                                {t}
                                <div onClick={() => { deleteItem(index) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </div>
                            </li>

                        ))}
                    </ul>
                ) : (
                    <p className="text-center mt-4">No tasks added yet!!</p>
                )}
            </div>

        </>
    )
}

export default TodoItem;
