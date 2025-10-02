const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");

async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    const isUserExist = await userModel.findOne({ username });
    if (isUserExist)
      return res.status(409).json("User already exist".toLocaleLowerCase());

    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist)
      return res.status(409).json("email already used".toLocaleLowerCase());

    const hash = await bcrypt.hash(password, 10);
    console.log("password: ", hash);
    const user = await userModel.create({ username, email, password: hash });

    const token = await jwt.sign({ userID: user._id, username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.cookie("token", token, {
      httpOnly: true,    // prevent JS access
      secure: true,      // use only on https
      sameSite: "strict" // prevent CSRF
    });

    res
      .status(201)
      .json({ message: "user created successfully".toLocaleLowerCase(), user });
  } catch(err) {
    console.error("Register Error: ", err);

    res
      .status(500)
      .json({ message: "Network error, please try again".toLocaleLowerCase() });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    console.log(password)
    
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "invalid email or password".toLocaleLowerCase() });
    }
    console.log(user.password)

    
    const pwdCheck = await bcrypt.compare(password, user.password);
    console.log(pwdCheck)

    if (!pwdCheck)
      return res
        .status(401)
        .json({ message: "Check email & password".toLocaleLowerCase() });

    const token = await jwt.sign(
      { userID: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

      res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict"
    });

    return res
      .status(200)
      .json({
        message: "Login Successfully".toLocaleLowerCase(),
        user,
      });
  } catch(err) {
    console.error("Login Error: ", err);

    res
      .status(500)
      .json({ message: "Network error, please try again".toLocaleLowerCase() });
  }
}

function logout(req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  });
  return res.status(200).json({
    message: "logout successfully"
  });
}

module.exports = {
  register,
  login,
  logout,
};
