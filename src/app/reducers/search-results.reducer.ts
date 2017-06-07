const initialState = [];

export function searchResultsReducer(state = initialState, action) {
    switch(action.type){
        case 'SAVE_LIST':
            return action.payload.list;
        case 'SET_CURRENT':
            console.log(action, 'setcurrent');
            return state.map(gif =>{
                if(gif.id === action.payload.id){
                    return Object.assign(gif, {isCurrent: true});
                }else{
                    return Object.assign(gif, {isCurrent: false});
                }
            });
        case 'CLEAR_LIST':
            return [];
        default:
            return state;
    }
}