// 6kyu - WeIrD StRiNg CaSe


function toWeirdCase(string){
  let result = ''
  let index = 0      //index which resets to zero after space
  for(i of string){ 
    if(i == " "){
      result = result.concat(i)
      index = -1    
    }else if(index % 2 == 0){
      result = result.concat(i.toUpperCase())
    }else{
      result = result.concat(i.toLowerCase())
    }
    index += 1   
  }

  return result
}

console.log(toWeirdCase("this is a test"))