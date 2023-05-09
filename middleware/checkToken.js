import bcrypt from 'bcrypt'

const checkToken = async (req, res, next) => {
    let token;
    let tokensMatch = false
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split(' ')[1]
            tokensMatch = await bcrypt.compare(process.env.PRODUCTOS_KEY, token)            
        } catch (error) {
            return res.status(400).json({msg: "Error comprobando token"})
        }
    }
    if(!tokensMatch){
        const error = new Error('Token inválido')
        return res.status(401).json({msg: error.message})
    }
    next()
}

export default checkToken