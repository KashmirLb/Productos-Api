import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore'

initializeApp();

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1897
});

