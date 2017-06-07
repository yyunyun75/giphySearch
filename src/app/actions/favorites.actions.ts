export const actAddFavorite = (gif:object) => ({
    type: 'ADD_FAVORITE',
    payload:{
        gif
    }
});

export const actDelFavorite = (id:string) =>({
    type: 'DELETE_FAVORITE',
    payload:{
        id
    }
});

export const actClearFavorites = () =>({
    type: 'CLEAR_FAVORITES'
});

export const actLoadFavorites = (list:object[]) =>({
    type: 'LOAD_FAVORITES',
    payload:{
        list
    }
});