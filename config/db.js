import { initializeApp, cert} from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import { readFile } from 'fs/promises'

const createDbConnection = async db =>{

    const file = await readFile(`.firekey-${db}.json`)
    
    const serviceAccount = JSON.parse(file)
    
    initializeApp({
      credential: cert(serviceAccount)
    });
    
    const connection = getFirestore();

    return connection
}

export default createDbConnection