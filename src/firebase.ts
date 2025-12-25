import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc  } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './firebase.config';
import { doc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export async function getFormData(data: any) {
    try {
        const docRef = await addDoc(collection(db, 'rsvps'), {
            ...data,
            timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}