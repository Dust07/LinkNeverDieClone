import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { UserInterface } from "../../interfaces/userInterfaces";
import { auth } from "../../firebase-config";
import { modalSlice } from "../reducers/modal";
import { usersSlice } from "../reducers/users";

export const addNewUserFB = ({ email, password, displayName = "Default Name", photoURL = "N/A", checkPassword }: UserInterface) => {
  return async (dispatch: any) => {
    //validate info before push to database
    if (password !== checkPassword) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Password doesn't match, please try again."))
      return
    }
    if (!validateEmail(email)) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Wrong email type, please try again"))
      return
    }
    if (!validatePassword(password)) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Password need to have at least 7 characters."))
      return
    }

    //Push to database
    dispatch(usersSlice.actions.FETCH_USER)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      if (user !== null) await updateProfile(user, { displayName, photoURL })
      dispatch(modalSlice.actions.SHOW_MODAL_NORMAL("Successfully created new user! Logging in..."))
      dispatch(usersSlice.actions.CREATE_NEW_USER_SUCCESS("Added new profile"))
    }
    catch (error) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Error occured while creating new profile. Please try again."))
      dispatch(usersSlice.actions.CREATE_NEW_USER_FAILED("Error occured while creating new profile."))
    }
  }
}

export const updateUserFB = ({ displayName = "", photoURL = "" }: any) => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.FETCH_USER("fetching"))
    try {
      const user = auth.currentUser
      if (user !== null) {
        updateProfile(user, {
          displayName,
          photoURL
        })
      }
      dispatch(modalSlice.actions.SHOW_MODAL_NORMAL("Successfully updated information!"))
      dispatch(usersSlice.actions.USER_UPDATE_SUCCESS("Profile Updated!"))

    }
    catch (error) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Error occured while updating profile. Please try again."))
      dispatch(usersSlice.actions.USER_UPDATE_FAILED("Error occured while updating profile."))
    }
  }
}


export const userSignIn = ({ email, password }: {
  email: string,
  password: string
}) => {
  return async (dispatch: any) => {
    //validate before sign in
    if (!validateEmail(email)) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Wrong email type, please try again"))
      return
    }
    if (!validatePassword(password)) {
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Password need to have at least 7 characters."))
      return
    }

    //sign in 
    dispatch(usersSlice.actions.FETCH_USER("Fetching"))
    try {
      await signInWithEmailAndPassword(auth, email, password)
      dispatch(usersSlice.actions.USER_SIGN_IN_SUCCESS("Signed in successfully!"))
      dispatch(modalSlice.actions.SHOW_MODAL_NORMAL("Welcome back!"))
    }
    catch (error) {
      dispatch(usersSlice.actions.USER_SIGN_IN_SUCCESS("Signed in successfully!"))
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Error occured while signing in! Please try again"))
      console.log(error)
    }
  }
}


export const userSignOut = () => {
  return async (dispatch: any) => {
    dispatch(usersSlice.actions.FETCH_USER("Fetching"))
    try {
      await signOut(auth)
      dispatch(usersSlice.actions.USER_SIGN_OUT_SUCCESS("Log out successful."))
      dispatch(modalSlice.actions.SHOW_MODAL_NORMAL("Signed out successfully. Have a nice day."))
    } catch (error) {
      dispatch(usersSlice.actions.USER_SIGN_OUT_FAILED("Error occured! Please try to log out again"))
      dispatch(modalSlice.actions.SHOW_MODAL_WARNING("Error occured while signing out! Please try again"))
      console.log(error)
    }
  }
}

//VALIDATE FUNCTIONS
export const validateEmail = (email: string) => {
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(EMAIL_REGEX)
}

export const validatePassword = (password: string) => {
  return password.length >= 7
}