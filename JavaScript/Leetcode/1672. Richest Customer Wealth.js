var maximumWealth = function(accounts) {
      let customerWealth = []
    for(let i=0; i<accounts.length; i++){
        let count = 0
      for(let j=0; j<accounts[i].length; j++){
        count+=accounts[i][j]
      }
        customerWealth.push(count)
    }
    let richestMan = 0
    for(let i=0; i<customerWealth.length; i++){
      if(customerWealth[i] < richestMan){
        continue
      }else if(customerWealth[i] > richestMan){
        richestMan = customerWealth[i]
      }
    }
    return richestMan
  }
console.log(maximumWealth([[1,2,3],[3,2,1]])); 
console.log(maximumWealth([[1,5],[7,3],[3,5]])); 
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])); 
