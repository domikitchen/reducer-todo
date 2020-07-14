import React from 'react';

const List = props => {
    return(
        <div>
            <p onClick = {() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.newList.item })}>{props.newList.item}</p>
        </div>
    );
}

export default List;
// () => props.dispatch({ type: "TOGGLE_COMPLETED" })