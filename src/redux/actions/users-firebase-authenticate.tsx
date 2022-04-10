import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { UserInterface } from "../../interfaces/userInterfaces";
import { auth } from "../../firebase-config";

export const userSignIn = async ({ email, password }: {
  email: string,
  password: string
}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  }
  catch (error) {
    console.log("Error while signing in!" + error)

  }
}

export const userSignOut = async () => {
  await signOut(auth)
}

export const addNewUserFB = async ({ email, password, displayName = "Default Name", photoURL = "N/A" }: UserInterface) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    const user = auth.currentUser;
    if (user !== null) {
      updateProfile(user, {
        displayName,
        photoURL
      })
    }
  }
  catch (error) {
    console.log("Error while adding new profile!" + error)
  }
}

export const updateUserFB = ({ displayName = "", photoURL = "" }: any) => {
  const user = auth.currentUser;
  if (user !== null) {
    updateProfile(user, {
      displayName,
      photoURL
    }).then(() => {
      console.log("Profile updated!")
    }).catch((error) => {
      console.log("Error occured when updating new profile.")
    });
  }
}

