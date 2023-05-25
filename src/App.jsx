import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
};

export default App;
