import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserInterface } from "../../interfaces/userInterfaces";
import { auth } from "../../firebase-config";

export const addNewUserFB = async ({ email, password, displayName = "Default Name", photoURL = "N/A" }: UserInterface) => {
  await createUserWithEmailAndPassword(auth, email, password)
  try {
    const user = auth.currentUser;
    if (user !== null) {
      updateProfile(user, {
        displayName,
        photoURL
      })
    }
  }
  catch (error) {
    console.log("THIS IS AN ERROR!" + error)
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

