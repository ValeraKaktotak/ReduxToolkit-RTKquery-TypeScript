import axios from "axios";
import { IUser } from "models/IUser";
import { AppDispatch } from "store/store";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             dispatch(userSlice.actions.userFetching())
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//             dispatch(userSlice.actions.userFetchingSuccess(response.data))
//         } catch (error) {
//             dispatch(userSlice.actions.userFetchingError('Some error with users downloading'))
//         }
//     }
// }

// RTK asyncThunk
export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Some error with downloading");
    }
  }
);
