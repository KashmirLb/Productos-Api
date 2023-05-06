import { initializeApp, applicationDefault, cert} from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'
import { serviceAccount } from "../.firebaseKey.js"

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const createUser = async (req, res) =>{
    
    const docRef = db.collection('users').doc('alovelace');
    
    await docRef.set({
        first: "Ada",
        last: "Lovelace",
        born: 1897
    });

    res.json({msg: "Added user!"})
}

const getStore = async(req, res) =>{

    const snapshot = await db.collection('tiendas-productos').doc("CvCdzQB066h4Rg4KXfYf").collection("Productos").get()

    let data = []
    
    snapshot.forEach((doc) => {
        data.push(doc)
    });

    res.json({ data })
};

const getProducts = async (req, res) => {
    
    let data = []

    if(req.body.tienda){

        const snapshot = await db.collection('tiendas-productos').doc(req.body.tienda).collection("Productos").get()
    
        snapshot.forEach((doc) => {
            data.push(doc)
        });

    }
    res.json({ data })
}
 
export {
    createUser,
    getStore,
    getProducts
}