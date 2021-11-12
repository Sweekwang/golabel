import { createSlice } from '@reduxjs/toolkit';


const initialGoState = { title: 'Nonee'};

const goSlice = createSlice({
  name: 'goTerm',
  initialState: initialGoState,
  reducers: {
    setTerm(state, action) {
        console.log("CALLED!");
        console.log(action.payload);
        state.title = action.payload;
    }
  },
});


export const goActions = goSlice.actions;
export default goSlice.reducer;