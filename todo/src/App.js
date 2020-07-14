import React, { useReducer, useState } from 'react';
import './App.css';

import List from './components/list';

import { initalState, reducer } from './reducer/listReducer';

const App = () => {
  const [newListItem, setNewListItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initalState);
 console.log(state)
  const onChange = evt => {
    setNewListItem(evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
  }

  return (
    <div className="App">
      <List onSubmit = {onSubmit} onChange = {onChange} listItem = {newListItem} list = {state} dispatch = {dispatch} />
    </div>
  );
}

export default App;
