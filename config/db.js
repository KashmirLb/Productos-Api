import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import { readFile } from 'fs/promises'

const createDbConnection = async db =>{

    const file = await readFile(`.firekey-${db}.json`)
    
    const serviceAccount = JSON.parse(file)

    if(getApps?.length == 0){
        initializeApp({
          credential: cert(serviceAccount)
        });

        const connection = getFirestore();
        return connection
    }
    else{
        try{
            let fireApp = initializeApp({
                credential: cert(serviceAccount)
              }, db);
      
              const connection = getFirestore(fireApp);
              return connection

        }
        catch{
            return null
        }
    }
}

export default createDbConnection