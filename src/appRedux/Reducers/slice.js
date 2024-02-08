import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    name : 'userData',
    name : 'userAnswer',
    initialState : {user: null},
    initialState: {userData: null},
    initialState : {userAnswer: []},
    reducers:{
        setUser:(state, action)=>{
            // console.log('action==========',action.payload);
            state.user = action.payload
        },
        setUserData: (state, action) =>{
            state.userData = action.payload
        },
        setUserAnswer: (state, action) =>{
            console.log("action userAnswer========", action.payload);

            state.userAnswer = [...state.userAnswer, action.payload]
        }
    }
})
export const { setUser, setUserData , setUserAnswer} = userSlice.actions;

export default userSlice.reducer;