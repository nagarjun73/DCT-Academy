function totalPortfolioValue(a,b){
  let result = b.reduce(function(prevValue, currValue){
    if(a.includes(currValue[0])){
      prevValue[currValue[0]]  = currValue[1] * a[a.indexOf(currValue[0]) + 1]
    }else{
      prevValue[currValue[0]] = 'company does not exist'
    }
    return prevValue
  }, {})

  console.log(result);

  for(const key in result){
    if(result[key] == Number(result[key])){
      if(!result['total']){
    result['total'] = result[key]
  }else{
    result['total'] += result[key]
  }
}
}
  return result
}

console.log(totalPortfolioValue(['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44],[['AAPL', 100], ['YHOO', 200]]));
