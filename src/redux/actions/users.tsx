import { usersSlice } from "../reducers/users"
import { database } from '../../firebase-config';
import { collection, getDocs, addDoc } from "firebase/firestore"
import { UserInterface } from "../../interfaces/userInterfaces";

const usersCollectionRef = collection(database, "users");

// export const fetchUsers = () => {
//   return async (dispatch: any) => {
//     dispatch(usersSlice.actions.FETCH_USERS)
//     try {
//       const usersFromAPI: any = []
//       const firebaseData = await getDocs(usersCollectionRef);

//       firebaseData.forEach((doc) => {
//         usersFromAPI.push({
//           id: doc.id,
//           ...doc.data()
//         })
//       })
//       dispatch(usersSlice.actions.FETCH_USERS_SUCCESS(usersFromAPI))
//       console.log("fetched success")
//     }
//     catch (error) {
//       console.log("fetched failed")
//       dispatch(usersSlice.actions.FETCH_USERS_SUCCESS(error))
//     }
//   }
// }

export const fetchUsersCheckExist = ({ username, password }: {
  username: string,
  password: string
}) => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.FETCH_USERS, "fetching")

    try {
      const usersArray: any = []
      const firebaseData = await getDocs(usersCollectionRef);
      firebaseData.forEach((doc) => {
        usersArray.push({
          id: doc.id,
          ...doc.data()
        })
      })
      const currentUser = usersArray.find((user: any) => user.username === username && user.password === password)
      dispatch(usersSlice.actions.FETCH_USERS_SUCCESS(currentUser))
      if (currentUser) console.log(`Login successful! Welcome back, ${currentUser.user_display_name}`)
      else console.log("Login failed! Please try again")
    } catch (error) {
      dispatch(usersSlice.actions.FETCH_USERS_SUCCESS(error))
      console.log("fetched failed")
    }
  }
}

export const addNewUser = ({ username, password, email, user_full_name }: UserInterface) => {
  return async (dispatch: any) => {
    const usersArray: any = []
    const firebaseData = await getDocs(usersCollectionRef);
    firebaseData.forEach((doc) => {
      usersArray.push({
        id: doc.id,
        ...doc.data()
      })
    })
    dispatch(usersSlice.actions.CREATE_NEW_USER, "Creating new profile")
    try {
      if (usersArray.some((user: any) => user.username === username)) {
        throw "User already exist. Please try again"
      }
      if (usersArray.some((user: any) => user.email === email)) {
        throw "Email already registed. Please use another email."
      }
      await addDoc(usersCollectionRef, {
        username,
        password,
        email,
        user_display_name: username,
        user_full_name,
        privilege: "user"
      })
      dispatch(usersSlice.actions.CREATE_NEW_USER_SUCCESS, "New profile created")
      console.log("New profile created")
    } catch (error) {
      dispatch(usersSlice.actions.CREATE_NEW_USER_FAILED, "Error adding new profile")
      console.log(error)
    }
  }
}