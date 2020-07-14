export const initalState = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_NEW_ITEM":
            return [...state, action.payload];

        case "TOGGLE_COMPLETED":
            return state.map(task => {
                if(task.id === action.payload){
                    console.log(task)
                    return {...task, completed: task.completed ? false : true};
                }
                else{
                    return task;
                }
            })

        case "REMOVE_COMPLETED":
            return state.filter(comp => {
                if(comp.completed === !false){
                    console.log(comp);
                }
                return(comp.completed === false);
            })
        default:
            return[...state];
    }
}