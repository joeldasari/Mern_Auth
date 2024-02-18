import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const userSignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username && email && password) {
      const fetchUsername = await userModel.findOne({ username });

      const fetchEmail = await userModel.findOne({ email });

      if (fetchUsername) {
        return res.json({ message: "Username already exists" });
      } else if (fetchEmail) {
        return res.json({ message: "Email already exists" });
      } else {
        const hashedPassword = bcryptjs.hashSync(password, 10);

        await userModel.create({
          username,
          email,
          password: hashedPassword,
        });

        return res
          .status(201)
          .json({ message: "Your Account has been Created" });
      }
    } else {
      return res.json({ message: "Please enter all the required fields" });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { userSignUp };
