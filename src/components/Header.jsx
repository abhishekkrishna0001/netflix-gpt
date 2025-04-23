import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';


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
      <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
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