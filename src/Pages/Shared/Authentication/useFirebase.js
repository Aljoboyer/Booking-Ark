import {useEffect, useState} from 'react';
import {getIdToken,onAuthStateChanged,updateProfile, signOut,signInWithEmailAndPassword ,getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializationFirebase from '../../../Firebasesetup/Firebaseinit';
import Swal from 'sweetalert2';

initializationFirebase()

const useFirebase = () => {
    const [user , setUser] = useState({})
    const auth = getAuth();
    const [isloading, setIsloading] = useState(true);
    const [isadmin, setIsadmin] = useState(false)
    
    //registering user

    const RegisterUser = (email,password,name, navigate) => {
      setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)

            //saving user name
            UpdateUsername(name)

            //saving user to database
            SavedUser(email, name)

            Swal.fire(
              'Registration Succesfully',
              'Welcome to Booking Ark',
              'success'
            )
            navigate('/')
        })
        .catch((error) => {
            console.log('from reg',error.message)
        }).finally(() => setIsloading(false));
    }

    //Login user
    const LoginUser = (email, password,  navigate, location) => {
      setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
          const destination = location?.state?.from || '/';
          navigate(destination)
        })
        .catch((error) => {
            console.log('from login',error.message)
        }).finally(() => setIsloading(false));
    }

    //saving user name
    const UpdateUsername = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    //currently sign in user
    useEffect(() => {
      setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
               getIdToken(user).then(idtoken => localStorage.setItem('idtoken', idtoken))
              setUser(user)
              
            } else {
              // User is signed out
              // ...
            }
            setIsloading(false)
          });
    },[auth])
    //Logout User
    const LogOutUser = () => {
      setIsloading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})

          }).catch((error) => {
            // An error happened.
          }).finally(() => setIsloading(false));
    }

    //finding admin
    useEffect(() => {
      if(user.email)
      {
        fetch(`http://localhost:5000/findadmin?email=${user.email}`)
        .then(res => res.json())
        .then(data => setIsadmin(data.isadmin))
      }
    },[user.email])
    
    const SavedUser = (email, name) => {
      const newuser = {email, name}
      fetch('http://localhost:5000/saveuser',{
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(newuser)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    return {
        RegisterUser,
        user , 
        setUser,
        LoginUser,
        LogOutUser,
        isloading,
        isadmin
    }
}

export default useFirebase;