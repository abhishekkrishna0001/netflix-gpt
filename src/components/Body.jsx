import React from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        //signin
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      }
      else{
        //signout
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
  
    </div>
  )
};

export default Body;