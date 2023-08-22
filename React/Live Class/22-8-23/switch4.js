// function reducer(state, action){
//   switch (action.type){
//     case "ADD_USER": {
//       return [...state, action.payload]
//     }
//   }
// }

// console.log(reducer([], {type:'ADD_USER', payload:{id:1, name:"Steve"}}));


function reducer(state, action){
  switch (action.type){
    case 'ADD' : {
      return [...state, action.payload]
    }
    case 'REMOVE_ODD' :{
      return state.filter((ele)=>{return ele % 2 == 0})
    }

    case 'ADD2' : {
      return state.map((ele)=>{return ele+2})
    }
  }
}

console.log(reducer([10,15,20],{type:'ADD', payload:25}));//[10,15,20,25]
console.log(reducer([10,13,15,17],{type:'REMOVE_ODD'})); //[10]
console.log(reducer([10,12,15,17],{type:'ADD2'}));//[12,14,17,19]

