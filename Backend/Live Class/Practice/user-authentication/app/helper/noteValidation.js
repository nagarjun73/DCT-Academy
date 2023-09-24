const addNotesSchema = {
  title: {
    notEmpty: {
      errorMessage: "Title should not be empty"
    }
  }
}

module.exports = addNotesSchema