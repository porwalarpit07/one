// const initialState = {
//     userData: null,
//     newUSer : []
   
// }

// const saveDataReducer = (state = initialState, action) => {
//     const { type, payload } = action
//     console.log('data in reducer ==============', payload);
//     switch (type) {
//         case 'SAVE_DATA':
//             return {
//                 ...state,
//                 userData: payload
//             }
//         case 'NEW_USER' : 
//         return {
//             ...state,
//             newUSer : payload
//         }
//         default:
//             return state
//     }
// }
// export default saveDataReducer;