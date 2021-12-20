import  { useEffect, useState } from 'react';
import initialize from '../Firebase/Firebaseint';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";


initialize()
const UseFirebase = () => {
    const auth = getAuth();
    const [loding, setLoding] = useState(true);
    const [user, setUser] = useState({}); 
   

   

    //*********************regester create********************************//
   

  const regester = (email,password) =>{
    setLoding(true);
   createUserWithEmailAndPassword (auth,email, password)
    .then((result) => {   
      const user = result.user;
      setUser(user)
    })
    .catch((error) => { 
     
    })
    .finally(() => setLoding(false));
  
  }
     
    //*********************regester create********************************//
     // Login Email and Password////
     const login = (email,password)=>{
      setLoding(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {   
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
      
      })
      .finally(() => setLoding(false));

     }
     // Login Email and Password////
     //2---------------observe user state-chage use start----------------------------------//
     useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
           if (user) {
               setUser(user)
           }

            else {
             setUser({})
           }
           setLoding(false)
         });
         return () => unsubscribe;
   },[])
//2---------------observe user state-chage use end----------------------------------//
  //Logout///
  const logout = () =>{
      signOut(auth)
      .then(() => {
        setUser({})
        })
        .finally(()=>setLoding(false));

  }
  //Logout///
    
    
    

    return {
        regester,
        login,
        logout,
        user,
        loding,
      
    }
       
       
            
   
};

export default UseFirebase;


  
  
  