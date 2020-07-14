export const initalState = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
        case "HOPE_THIS_WORKS":
            return [...state, action.payload]
        case "TOGGLE_COMPLETED":
            return [...state, state.map(task => {
                    if(task.item === action.payload){
                        console.log(task.item);
                        console.log(task.completed);
                        console.log(state)
                        return {
                            ...task,
                            completed: true
                        }
                    }
                })]
        default:
            return state;
    }
}