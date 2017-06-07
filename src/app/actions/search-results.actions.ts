export const actSaveList = (list:object[]) => ({
    type: 'SAVE_LIST',
    payload:{
        list
    }
});

export const actSetCurrent = (id:string) => ({
    type: 'SET_CURRENT',
    payload:{
        id
    }
});

export const actClearList = () =>({
    type: 'CLEAR_LIST'
});
