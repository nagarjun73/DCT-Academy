const pollValidation = {
  question: {
    isLength: {
      options: { min: 10, max: 100 },
      errorMessage: "qustion shuold not be empty"
    }
  },
  options: {
    isArray: {
      options: { min: 2 },
      errorMessage: "poll should have minimum 2 options"
    }
  },
  duration: {
    isNumeric: {
      errorMessage: "duration should be number"
    }
  },
  category: {
    notEmpty: {
      errorMessage: "Category should not be empty"
    },
    isMongoId: {
      errorMessage: "Not valid category"
    }
  }
}

module.exports = pollValidation