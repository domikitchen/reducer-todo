import React from 'react';
import { v4 as uuid } from 'uuid';

import List from './list';

const NewListInput = props => {

    const newTask = {
        item: props.newListItem,
        completed: false,
        id: uuid()
    }

    console.log(props.listItems)

    return(
        <div>
            {
                props.listItems.map((list, index) => {
                    return (
                        <List key = {index} newList = {list} dispatch = {props.dispatch} />
                    );
                })
            }
            <form onSubmit = {props.onSubmit}>
                <input
                    type = "text"
                    name = "newListItem"
                    value = {props.newListItem}
                    onChange = {props.onChange}
                />
                <button onClick = {() => props.dispatch({type: "HOPE_THIS_WORKS", payload: newTask})}>+</button>
            </form>
        </div>
    );
}

export default NewListInput;