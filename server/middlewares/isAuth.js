import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
let {token} = req.cookies || {}

        if(!token){
            return res.status(401).json({message:"Please sign in again to continue."})
        }
        const verifyToken = jwt.verify(token , process.env.JWT_SECRET)
        
        if(!verifyToken){
            return res.status(401).json({message:"Your session is invalid. Please sign in again."})
        }
        req.userId = verifyToken.userId

        next()
   

    } catch (error) {
        return res.status(401).json({message:"Your session has expired. Please sign in again."})
    }
    
}

export default isAuth
