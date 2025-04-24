import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user =  useSelector(store => store.user);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
          //signin
          const {uid, email, displayName, photoURL} = user;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName:displayName, 
              photoURL:photoURL
            })
          );
          navigate("/browse");
        }
        else{
          //signout
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe();
    }, []);

  const handleSignOut = () => {
      signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  };

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className='p-1 cursor-pointer font-bold text-white'>Sign Out</button>
        </div>
      )}
    </div>
  )
};

export default Header;