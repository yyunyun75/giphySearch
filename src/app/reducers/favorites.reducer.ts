//inital state to get favorites from localStorage
let initialState = [];
if(window.localStorage.getItem('Giphy_Favorites')){
    initialState = JSON.parse(window.localStorage.getItem('Giphy_Favorites'));
}

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
                let data = [
                    gif,
                    ...state
                ];
                window.localStorage.setItem('Giphy_Favorites', JSON.stringify(data));

                return data;
            }
            

        case 'DELETE_FAVORITE':
            
            let data = state.filter(favorite => {
                return favorite.id !== action.payload.id;
            });

            window.localStorage.setItem('Giphy_Favorites', JSON.stringify(data));
            
            return data;

        case 'CLEAR_FAVORITES':
            return [];
            
        default:
            return state;
    }
}