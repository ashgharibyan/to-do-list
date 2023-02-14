import react, { useState } from 'react';

const createTaskStyle = {
    // backgroundColor: "#3450A1",
    // height: "150px",
    marginTop: "10px"
}

const createTaskBtn = {
    backgroundColor: "#06c258",
    color: "white",
    flex: 1
}
const inputStyle = {
    color: "#546163",
    flex: 3
}

const CreateTask = (props) => {
    const [taskText, setTaskText] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault();
        const thisTask = {
            taskText: taskText,
            completed: false
        }
        props.sendTask(thisTask)
        setTaskText("")
        document.getElementById("inputText").focus();
    }

    return (
        <div className='container p-3' style={createTaskStyle}>
            <form className='d-flex input-group-lg gap-2' onSubmit={handleSubmit}>
                <input className='flex-2 form-control' style={inputStyle} id="inputText" type="text" value={taskText} onChange={(e)=>setTaskText(e.target.value)} />
                <button className='flex-1 btn' style={createTaskBtn} type="submit">CREATE TASK</button>
            </form>
        </div>
    )
    
}

export default CreateTask;