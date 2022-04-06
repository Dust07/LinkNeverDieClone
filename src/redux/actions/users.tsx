import { useDispatch } from "react-redux"
import usersSlice from "../reducers/users"

export const fetchUser = async () => {
    return async (dispatch: any){
        dispatch(usersSlice.actions.FETCH_USERS)

    }
}