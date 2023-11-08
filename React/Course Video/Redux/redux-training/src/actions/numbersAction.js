export const addNumber = (randomNum) => {
  return {
    type: "ADD_NUMBER",
    payload: randomNum
  }
}

export const plusTwo = () => {
  return {
    type: "PLUS_TWO"
  }
}

export const removeAll = () => {
  return {
    type: "REMOVE_ALL"
  }
}

export const incrementnumber = (id) => {
  return {
    type: "INCREMENT_NUMBER",
    payload: id
  }
}