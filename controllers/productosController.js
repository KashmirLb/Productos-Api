import createDbConnection from "../config/db.js";

const getProducts = async (req, res) => {

    let data = []

    try{
        const db = await createDbConnection(req.body.tienda)
    
        const snapshot = await db.collection('productos').get()
    
        snapshot.forEach((doc) => {
            data.push(doc)
        });
    }
    catch{
        res.json({ data: "No se pudo conectar a la base de datos."})
    }
    res.json({ data })
}
 
export {
    getProducts
}