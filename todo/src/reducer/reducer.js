export const initalState = {
    todo: [
        {
            item: "Learn about reducers",
            completed: false
        },
        {
            item: "figure stuff out",
            completed: false
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "HOPE_THIS_WORKS":
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case "TOGGLE_COMPLETED":
            return{
                ...state,
                todo: state.todo.map(task => {
                    if(task.item === action.payload){
                        console.log(task.item);
                        console.log(task.completed);
                        console.log(state)
                        return {
                            ...task,
                            completed: true
                        }
                    }
                })
            }
        default:
            return state;
    }
}