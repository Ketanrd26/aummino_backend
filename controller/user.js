import userModel from "../model/usermodel.js";

export const customersData = async (req, res) => {
  const {  fname,lname, email,contact,message } = req.body;

  try {
    const user = new userModel({
      
      fname,
      lname,
      email,
      contact,
      message
    });

    await user.save();
    res.status(200).json({ message: "Data added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding data", error });
  }
};
