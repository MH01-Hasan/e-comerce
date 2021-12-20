// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";



// const initialState = {
//   items: [],
//   status: null,
// };

// export const detailsFetch = createAsyncThunk(
//   "details/detailsFetch",
//   async () => {
//     try {
//       const response = await axios.get(
//         `https://secure-island-42519.herokuapp.com/Product/`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// const detailsSlics = createSlice({
//   name: "details",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [detailsFetch.pending]: (state, action) => {
//       state.status = "pending";
//     },
//     [detailsFetch.fulfilled]: (state, action) => {
//       state.items = action.payload;
//       state.status = "success";
//     },
//     [detailsFetch.rejected]: (state, action) => {
//       state.status = "rejected";
//     },
//   },
// });

// export default detailsSlics.reducer;