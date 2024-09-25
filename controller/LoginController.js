import loginUser from "../model/Login.js";

export const adminData = async (req, res) => {
  try {
    const adminCredintials = [
      {
        email: "admin123@gmail.com",
        password: "admin123",
      },
    ];

    const admin = await loginUser.insertOne(adminCredintials);
    res.status(200).json({ status: "success", admin });
  } catch (error) {
    res.status(400).json({ status: "error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "incorrect email or password" });
    } else {
      res.status(200).json({
        status: "success",
        message: "login successfully",
        userData: {
          email: user.email,
          password: user.password,
        },
      });
    }
  } catch (error) {
    res.status(500).json({status:"error", message:"login failed"})
  }
};
