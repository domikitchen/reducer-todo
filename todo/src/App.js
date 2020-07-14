import React, { useState, useReducer } from 'react';
import './App.css';

import FakeNav from './components/fakeNav';
import NewListInput from './components/newListInput';

import { initalState, reducer } from './reducer/reducer';

const App = () => {
  const [newListItem, setNewListItem] = useState("")
  const [state, dispatch] = useReducer(reducer, initalState);

  const onChange = evt => {
    setNewListItem(evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
  }
  
  return (
    <div className="App">
      <FakeNav />
      <NewListInput newListItem = {newListItem} onChange = {onChange} listItems = {state} onSubmit = {onSubmit} dispatch = {dispatch} />
    </div>
  );
}

export default App;
