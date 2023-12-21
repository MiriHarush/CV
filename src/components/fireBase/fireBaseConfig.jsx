
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {
    collection,
    getFirestore,
    addDoc,
    getDocs
} from 'firebase/firestore'
import ShowResume from "../showResume/ShowResume";
const {
    VITE_API_KEY,
    VITE_AUTH_DOMIN,
    VITE_PROJECT_ID,
    VITE_STORAGE_BUCKET,
    VITE_MESSAGING_SENDER_ID,
    VITE_APP_ID
} = import.meta.env

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMIN,
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_STORAGE_BUCKET,
    messagingSenderId: VITE_MESSAGING_SENDER_ID,
    appId: VITE_APP_ID
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'CV')
const colUser = collection(db, 'User')


// export const getResume = (ownerId) =>{
    //    return getDocs(colRef)
    //     .then((snapshot)=>{
        //         let resume=[];
        //         snapshot.docs.forEach((doc)=>{
            //             const data = doc.data();
            //             if (data.ownerId && data.ownerId === ownerId ||ownerId==='rkBO4I0r7hY99IySmIbh0C7GYrZ2') {
                //             resume.push({...doc.data(),id:doc.id})
                //         }
                //             else {
                    //                 console.log('user is not connected')   
                    //             }
                    //         })
                    //     // ShowResume()
                    
                    //         console.log(resume)
                    //     }).catch(err=>{
                        //         console.log(err.message)
        
//     })
//     console.log('owner',ownerId)
// }
export const getResume = async (ownerId) => {
    try {
        const snapshot = await getDocs(colRef);
        let resume = [];
        
        snapshot.docs.forEach((doc) => {
            const data = doc.data();
            if (data.ownerId && (data.ownerId === ownerId || ownerId === 'rkBO4I0r7hY99IySmIbh0C7GYrZ2')) {
                resume.push({ ...doc.data(), id: doc.id });
            } else {
                console.log('user is not connected');
            }
        });
        
        console.log(resume);
        return resume;
    } catch (err) {
        console.log(err.message);
        return [];
    }
};


const addResumePdf = async (formData) => {
    addDoc(colRef,formData)
}

export const addUser = async (email,password,role) => {
    console.log('email', email)
    console.log('pass', password)
    addDoc(colUser,{email,password,role})
}
export { addResumePdf };
export const storage = getStorage()

// const convertFileToBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
        //       const reader = new FileReader();
        //       reader.readAsDataURL(file);
        
//       reader.onload = () => {
//         resolve(reader.result.split(',')[1]); // Extract base64 data (remove 'data:image/jpeg;base64,')
//       };

//       reader.onerror = (error) => {
    //         reject(error);
    //       };
    //     });
    //   };
    
    
    