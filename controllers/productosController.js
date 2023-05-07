import createDbConnection from "../config/db.js";

const getProducts = async (req, res) => {

    let data = []

    const db = await createDbConnection(req.body.tienda)

    const snapshot = await db.collection('productos').get()

    snapshot.forEach((doc) => {
        data.push(doc)
    });
    
    res.json({ data })
}
 
export {
    getProducts
}