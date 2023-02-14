import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CreateTask from './Components/CreateTask';
import FilterSortTab from './Components/FilterSortTab';
import ListDisplay from './Components/ListDisplay';

const midDiv = {
  display: "flex",
  marginTop: "10px",
  // justifyContent: "space-between",
  gap: "10px"
}

function App() {
  const [filter, setFilter] = useState(false)
  const [filteredOrSortedTasks, setFilteredOrSortedTasks] = useState([])
  const [sort, setSort] = useState(false)
  const [tasks, setTasks] = useState([])


  const receiveTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const receiveUpdate = (updatedTasks) => {
    setTasks(updatedTasks)
  }

  const receiveFilter = (updatedTasks, currentFilterOrSort, filterOrSort) => {
    if (filterOrSort === "filter") {
      setFilter(true)
      currentFilterOrSort && setFilteredOrSortedTasks(updatedTasks)
    } else if (filterOrSort === "sort") {
      setSort(true)
      currentFilterOrSort && setFilteredOrSortedTasks(updatedTasks)
    } else {
      setFilter(false)
      setSort(false)
    }

  }

  return (
    <div className="App">
      <div className="App">
        <Header />
        <CreateTask sendTask={receiveTask}></CreateTask>
        <FilterSortTab tasks={tasks} sendFilter={receiveFilter}></FilterSortTab>
        <ListDisplay tasks={filter || sort ? filteredOrSortedTasks : tasks} sendUpdate={receiveUpdate}></ListDisplay>
      </div>
    </div>
  );
}

export default App;
