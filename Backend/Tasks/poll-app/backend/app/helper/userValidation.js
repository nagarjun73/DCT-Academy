const User = require("../model/userSchema")

const usernameValidation = {
  isLength: {
    Option: { min: 3, max: 15 },
    errorMessage: "username should be between 3 to 15 characters"
  }
}

const emailValidationRegister = {
  notEmpty: {
    errorMessage: "Email should not be empty"
  },
  isEmail: {
    errorMessage: 'Email should be in valid format'
  },
  custom: {
    options: async (value) => {
      const result = await User.findOne({ email: value })
      if (!result) {
        return true
      } else {
        throw new Error("user record exists")
      }
    }
  }
}

const emailValidationLogin = {
  notEmpty: {
    errorMessage: "Email should not be empty"
  },
  isEmail: {
    errorMessage: "should be valid Email address"
  }
}

const passwordRegisterValidation = {
  notEmpty: {
    errorMessage: "password should not be empty"
  },
  isStrongPassword: {
    errorMessage: "Password should have at least one Uppercase,Lowercase,number,symbol and 8 character length",
    option: { minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers: 1, minSymbols: 1 }
  }
}

const passwordLoginValidation = {
  notEmpty: {
    errorMessage: "Password should not be empty"
  }
}

const userRegisterValidation = {
  username: usernameValidation,
  email: emailValidationRegister,
  password: passwordRegisterValidation
}

const userLoginValidation = {
  email: emailValidationLogin,
  password: passwordLoginValidation
}

module.exports = { userRegisterValidation, userLoginValidation }