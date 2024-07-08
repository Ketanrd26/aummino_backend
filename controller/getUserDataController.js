import userData from "../model/usermodel.js";

export const contactData = async (req,res)=>{
  
    try {
        const datauser = await userData.find({});
        res.status(200).json({status:"success", contactList : datauser})
    } catch (error) {
        res.status(400).json({status:"error", message:"data not found"})
    }
}