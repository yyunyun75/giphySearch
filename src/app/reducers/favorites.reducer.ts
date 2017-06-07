//inital state to get favorites from localStorage
const initialState = [];

export function favoritesReducer(state = initialState, action) {
    switch(action.type){
        case 'LOAD_FAVORITES':
            return action.payload.list;

        case 'ADD_FAVORITE':
            let gif = action.payload.gif;
            let exist = state.some(data=>data.id === gif['id']);

            if(exist){
                return state;
            }else{
                return [
                    gif,
                    ...state
                ];
            }
            

        case 'DELETE_FAVORITE':
            return state.filter(favorite => {
                return favorite.id !== action.payload.id;
            });

        case 'CLEAR_FAVORITES':
            return [];
            
        default:
            return state;
    }
}