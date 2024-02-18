import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const userSignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (username && email && password) {
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword,
      });
      if (newUser) {
        return res.status(200).json(newUser);
      } else {
        res.status(500).json({ message: "Something went wrong" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Please enter all the required fields" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { userSignUp };
