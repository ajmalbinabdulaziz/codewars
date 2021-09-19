function solution(digits){

  let large = digits.slice(0, 5)
  let limit = digits.length - 4  //to limit the unwanted iterations

  for(let i=0; i<limit; i++){
    let check = digits.slice(i, i+5)  //each loop iteration slices the next 5 digits
    if(large < check){  //comparing against answer
      large = check
    }
  }
  return large
}

console.log(solution("81828848789898989484"))

