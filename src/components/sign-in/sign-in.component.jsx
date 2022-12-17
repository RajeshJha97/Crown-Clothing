import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
    </>
  );
};

export default SignIn;
