import react, { useState } from 'react';

const filterSortTabsStyle = {
    // backgroundColor: "#546163",
    height: "100px",
    // marginTop: "10px"
}

const labelText = {
    textAlign: "center",
}


const FilterSortTabs = (props) => {
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")

    const filterChanged = (e) => {
        setFilter(e.target.value)
        if (e.target.value === "Completed") {
            const completedTasks = props.tasks.filter((eachTask, i) => eachTask.completed === true);
            props.sendFilter([...completedTasks], true, "filter")
        } else if (e.target.value === "NotCompleted") {
            const notCompletedTasks = props.tasks.filter((eachTask, i) => eachTask.completed === false);
            props.sendFilter([...notCompletedTasks], true, "filter")
        } else {
            props.sendFilter([], false, false)
        }
    }


    const sortChanged = (e) => {
        setSort(e.target.value)
        const tasksCopy = [...props.tasks]
        if (e.target.value == "A-Z") {
            //sorting an array of objects
            const sorted = [...props.tasks].sort((a, b) => {
                a = a.taskText.toLowerCase()
                b = b.taskText.toLowerCase()
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;

            })

            props.sendFilter(sorted, true, "sort")
        } else if (e.target.value == "Z-A") {
            //sorting an array of objects
            const sorted = [...props.tasks].sort((a, b) => {
                a = a.taskText.toLowerCase()
                b = b.taskText.toLowerCase()
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            })
            //reversing an array
            const reverseArray = sorted.reverse()
            props.sendFilter(reverseArray, true, "sort")
        } else if (e.target.value == "Completed") {
            const completedTasks = props.tasks.filter((eachTask, i) => eachTask.completed === true);
            const notCompletedTasks = props.tasks.filter((eachTask, i) => eachTask.completed === false);
            const completedFirst = [...completedTasks, ...notCompletedTasks]
            props.sendFilter(completedFirst, true, "sort")
        } else {
            props.sendFilter([], false, false)
        }

    }


    return (
        <div className='container d-flex justify-content-around' style={filterSortTabsStyle}>
            <div className='d-flex m-3 gap-4 align-items-center'>
                <div>
                    <label className='form-label h6' style={labelText} id="filters" >Filter By: </label>
                </div>
                <div>
                    <select className=' form-select ' name="filters" id="{filters}" value={filter} onChange={filterChanged}>
                        <option hidden>Select an option!</option>
                        <option value="noFilter">No Filter</option>
                        <option value="Completed">Completed</option>
                        <option value="NotCompleted">Not Completed</option>
                    </select>
                </div>
            </div>
            <div className='d-flex m-3 p-3 gap-4 align-items-center'>
                <div><label className='form-label h6' style={labelText}>Sort By: </label></div>
                <div>
                    <select className='form-select' name="sort" id="sort" value={sort} onChange={sortChanged}>
                        <option hidden>Select an option!</option>
                        <option value="Unsorted">Unsorted</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>
        </div>
    )

}

export default FilterSortTabs;