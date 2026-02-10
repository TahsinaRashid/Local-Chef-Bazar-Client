import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

export default function AuthProvider({children}) {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo={
         user,
        loading,
        registerUser,
        signInUser,
        logOut,
        updateUserProfile

    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

// import React, { useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../../firebase/firebase.init";

// const API_URL =
//   import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ Register
//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Login
//   const signInUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Logout
//   const logOut = () => {
//     setLoading(true);
//     localStorage.removeItem("token"); // remove JWT
//     return signOut(auth);
//   };

//   // ✅ Update profile
//   const updateUserProfile = (profile) => {
//     return updateProfile(auth.currentUser, profile);
//   };

//   // ✅ Auth state + JWT fetch
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);

//       if (currentUser?.email) {
//         try {
//           const res = await fetch(`${API_URL}/auth/jwt`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email: currentUser.email }),
//           });

//           const data = await res.json();

//           if (data?.token) {
//             localStorage.setItem("token", data.token);
//           }
//         } catch (err) {
//           console.error("JWT fetch error:", err);
//         }
//       } else {
//         localStorage.removeItem("token");
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     registerUser,
//     signInUser,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
