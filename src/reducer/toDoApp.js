import { createSlice } from '@reduxjs/toolkit'
const initialState = []
  export const toDoApp = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
      addToDoData : (state,action) => {
        state.push(action.payload);
        return state;
      },
      statusChange : (state,action) => {
        const newState = state;
        const objIndex = newState.findIndex((val => val.id === action.payload));
        const newArray = [...newState];
       const changedStaus = (newArray[objIndex].status === 'complete') ? 'incomplete' : 'complete';
       newArray[objIndex].status = changedStaus;
        return state;
      },
    },
  })
  export const {addToDoData,statusChange} = toDoApp.actions;
  export default toDoApp.reducer;