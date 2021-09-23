// 6kyu
// Middle Earth is about to go to war. The forces of good will have 
// many battles with the forces of evil. Different races will certainly be involved. 
// Each race has a certain worth when battling against others. On the side of good 
// we have the following races, with their associated worth:


function goodVsEvil(good, evil){

  // strength of good side, reduce method to add each elements
  goodStrength = good.split(" ").reduce((acc, num)=> {
    return acc + Number(num)
  }, 0)

  // strength of evil side
  evilStrength = evil.split(" ").reduce((acc, num)=>{
    return acc + Number(num)
  }, 0)

  if(goodStrength > evilStrength){
    return 'Battle Result: Good triumphs over Evil'
  }if(goodStrength == evilStrength){
    return 'Battle Result: No victor on this battle field'
  }else {
    return 'Battle Result: Evil eradicates all trace of Good' 
  }
  
}

console.log(goodVsEvil('1 1 3 1 1 1', '1 1 1 1 1 1 1'))