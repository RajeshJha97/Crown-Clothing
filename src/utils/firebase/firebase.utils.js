import { initializeApp } from 'firebase/app'; //app-->will have all the access of firebase
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

//below config we can get from firebase portal in order to get the access of firevbase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiDqY2Qjv-LJH72_ZIPG_pYO5PkYP362c',
  authDomain: 'crwn-clothing-db-e7a28.firebaseapp.com',
  projectId: 'crwn-clothing-db-e7a28',
  storageBucket: 'crwn-clothing-db-e7a28.appspot.com',
  messagingSenderId: '1055233736979',
  appId: '1:1055233736979:web:58c41e99c2c5e12421dae6',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid); // it'll take 3 input first db name, then group name which we create,and last one is uid to validate the user is exist
  // console.log(userDocRef);
  const userSnap = await getDoc(userDocRef);
  // console.log(userSnap);
  // console.log(userSnap.exists());
  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
