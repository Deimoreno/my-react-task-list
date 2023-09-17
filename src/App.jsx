import React from 'react';
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';

function  App(props) {
  return (
    <div className='App'>
      <Header />
      <TaskList />
    </div>
  );
};

export default App;