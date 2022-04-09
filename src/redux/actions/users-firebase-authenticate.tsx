import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { UserInterface } from "../../interfaces/userInterfaces";
const auth = getAuth();

//Add new profile with Firebase's Email/password support
export const addNewUserFB = async ({ email, password }: UserInterface) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

