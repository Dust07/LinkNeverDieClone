import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserInterface } from "../../interfaces/userInterfaces";
import { auth } from "../../firebase-config";

//Add new profile with Firebase's Email/password SDKs
export const addNewUserFB = ({ email, password, displayName = "Default Name", photoURL = "N/A" }: UserInterface) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      if (user !== null) {
        updateProfile(user, {
          displayName,
          photoURL
        }).then(() => {
          console.log("Profile created!")
        }).catch((error) => {
          console.log("Error occured when adding new profile. " + error)
        });
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export const updateFBUser = ({ displayName = "", photoURL = "" }: any) => {
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

