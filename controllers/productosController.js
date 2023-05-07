import { initializeApp, cert} from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import { serviceAccount } from "../.firebaseKey.js"

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const getProducts = async (req, res) => {
    
    let data = []

    const snapshot = await db.collection('productos').get()

    snapshot.forEach((doc) => {
        data.push(doc)
    });
    
    res.json({ data })
}
 
export {
    getProducts
}