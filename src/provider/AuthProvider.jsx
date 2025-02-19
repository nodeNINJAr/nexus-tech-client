import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseInit";
import useAxiosSecure from "../components/hooks/useAxiosSecure";
import useAxiosPublic from "../components/hooks/useAxiosPublic";

//
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  //
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()
  // store user data
  const [user, setUser] = useState(null);
  // when user is unvailable
  const [loading, setLoading] = useState(true);

  // create user by email and pass
  const userSignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // user profile update
  const userProfileUpdate = (name, photoURL) => {
    return updateProfile(auth?.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // create user by email and pass
  const userSignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // user sign in by google
  const userSignInByGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  // user sign in by github
  const userSignInByGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // userSignOut
  const userSignOut = () => {
    return signOut(auth);
  };

  // observer for checking current login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        try {
          await axiosSecure.post("/login", {
            email: currentUser?.email,
          });
          
        } catch(err){
          // console.log(err);
        }
      } else {
        setUser("");
        setLoading(false);
        try {
         await axiosPublic.post("/logout");
      
        } catch (err) {
          // console.log(err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // transporter
  const authInfo = {
    userSignUp,
    userSignIn,
    userProfileUpdate,
    userSignInByGoogle,
    userSignInByGithub,
    userSignOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
