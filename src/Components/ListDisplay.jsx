import react, { useState } from 'react';

const listDisplayStyle = {
    // backgroundColor: "#3450A1",
    height: "500px",
    marginTop: "10px"
}

const tableStyle = {
    color: "white"
}

// const pinkBtn = {
//     backgroundColor: "#D3D3D3",
//     color: "white"
// }

const left = {
    flex: "4",
    display: "flex",
    justifyContent: "start",
    textOverflow: "ellipsis"
}
const right = {
    flex: "1",
    display: "flex",
    justifyContent: "end"

}

const ListDisplay = (props) => {

    const handleCompleted = (indexToUpdate) => {
        const tasksCopy = [...props.tasks]
        tasksCopy[indexToUpdate].completed = !tasksCopy[indexToUpdate].completed
        props.sendUpdate(tasksCopy)
    }
    const handleUpdate = (indexToUpdate) => {
        const tasksCopy = [...props.tasks]
        tasksCopy[indexToUpdate].completed = !tasksCopy[indexToUpdate].completed
        props.sendUpdate(tasksCopy)
    }

    const handleDelete = (indexToDelete) => {
        const tasksCopy = props.tasks.filter((eachTask, i) => i !== indexToDelete)
        props.sendUpdate(tasksCopy)
    }


    return (
        <div className='container overflow-auto' style={listDisplayStyle}>
            <div className='table' style={tableStyle}>
                    {
                        props.tasks.map((eachTask, idx) => {
                            return (
                                <div id="taskDiv" className='d-flex justify-content-between align-items-center p-3 table' key={idx} style={
                                    eachTask.completed?
                                        {backgroundColor : "#07da63"}:
                                        {backgroundColor : "#FFFFFF"}
                                }>
                                    <div style={left} >
                                        <input className='form-check' type="checkbox" checked={eachTask.completed} onChange={(e) => handleCompleted(idx)} ></input>
                                        <p className='text-align-center mb-0 overflow-auto'>{eachTask.taskText}</p>
                                    </div>
                                    <div style={right}>
                                        <button className='btn btn-outline-dark' onClick={(e) => handleDelete(idx)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>

        </div>
    )

}

export default ListDisplay;