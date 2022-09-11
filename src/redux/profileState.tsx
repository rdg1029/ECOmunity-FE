import { createSlice } from "@reduxjs/toolkit";

export const profileStateSlice = createSlice({
    name : "profile",
    initialState: { value: {name: "사용자", email: ""}},

    reducers:{
        usrProfile: (state, action) =>{
            state.value = action.payload
        },
    },
});

export default profileStateSlice.reducer;