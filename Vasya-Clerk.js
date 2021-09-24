function tickets(peopleInLine){
  let change = { '25': 0, '50': 0, '100': 0 }
  for(let i=0; i < peopleInLine.length; i++) {

    if(peopleInLine[i] === 25){ 
      change['25'] += 1

    }else if(peopleInLine[i] === 50){
      if(change['25'] > 0){
        change['25'] -= 1
        change['50'] += 1
      } else {
        return 'NO'
      }

    }else{  
      if(change['50']>0 && change['25']>0){
        change['25'] -= 1
        change['50'] -= 1
        change['100'] += 1
      }else if(change['25'] >= 3){
        change['25'] -= 3
        change['100'] += 1
      }else {
        return 'NO'
      }
    } 
  }
  return 'YES'
}

console.log(tickets([25,25,25,25,25,25,25,50,50,50,100,100,100,100]))