import axios from "axios"
import { IUser } from "models/IUser"
import { AppDispatch } from "store/store"
import { userSlice } from "./UserSlice"

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.userFetching())
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            dispatch(userSlice.actions.userFetchingSuccess(response.data))
        } catch (error) {
            dispatch(userSlice.actions.userFetchingError('Some error with users downloading'))
        }
    }
}