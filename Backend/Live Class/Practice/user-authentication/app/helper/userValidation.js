const userRegistrationSchema = {
  username: {
    notEmpty: {
      errorMessage: "username should not be empty"
    }
  },
  email: {
    notEmpty: {
      errorMessege: "email should not be empty"
    },
    isEmail: {
      errorMessage: 'email should be in correct format'
    }
  },
  password: {
    notEmpty: {
      errorMessage: "Password should not empty"
    }
  }
}

const userLoginSchema = {
  email: {
    notEmpty: {
      errorMessage: "Email should not be empty"
    },
    isEmail: {
      errorMessage: "Email should be in correct format"
    }
  },
  password: {
    notEmpty: {
      errorMessage: "Password should not be empty"
    }
  }
}

module.exports = { userRegistrationSchema, userLoginSchema }