import React from 'react';
import { v4 as uuid } from 'uuid'



const List = props => {
    
    const newTask = {
    item: props.listItem,
    completed: false,
    id: uuid()
    }


    return (
        <div>
            {
                props.list.map(listItem => {
                    return(
                        <p key = {listItem.id} onClick = {() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: listItem.id})} className = {`${listItem.completed ? "uncomplete" : "completed"}`}>{listItem.item}</p>
                    );
                })
            }
            <button onClick = {() => props.dispatch({ type: "REMOVE_COMPLETED" })}>remove items</button>
            <form onSubmit = {props.onSubmit}>
                <input
                    type = "text"
                    name = "newListItem"
                    value = {props.listItem}
                    onChange = {props.onChange}
                />
                <button onClick = {() => props.dispatch({ type: "ADD_NEW_ITEM", payload: newTask })}>+</button>
            </form>
        </div>
    )
}

export default List;