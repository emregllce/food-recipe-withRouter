import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-bootstrap";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";


  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
    try {
        let userCredential =  await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      toastSuccessNotify("Registered successfully!");
      console.log(userCredential);

      navigate("/main");
    } catch (err) {
      toastErrorNotify(err.message);
      // alert(err.message);
    }
  };

  export const signIn = async (email, password,navigate) => {
      try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/main")
          toastSuccessNotify("Logged in successfully!");
      } catch(err){
           toastErrorNotify(err.message);
      }
  }

  export const logOut = async(navigate) => {
    await signOut(auth);
    navigate("/")

    Alert("Logged out successfully!");
  }

  export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
        
          // ...
        } else {
          // User is signed out
          setCurrentUser(false)

        }
      });
  }

  export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    navigate("/main");
   console.log(result);
  }).catch((error) => {
    console.log(error);
  });
  }