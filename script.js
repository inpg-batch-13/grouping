function grouping (scores) {
  // Your code here
  
// #1
// using for:

// var result = {
//   pass : [],
//   fail: []
// }

  // for (var i = 0; i < scores.length; i++){

  //   if (scores[i] >= 75){
  //     result.pass.push(scores[i])
  //   }

  //   else {
  //     result.fail.push(scores[i])
  //   }

  // }
  // return result


// #2
//using .filter():

var result = {
  pass: scores.filter(checkNumberPass),
  fail: scores.filter(checkNumberFail)
}


function checkNumberPass(number){
 return number >= 75
}
function checkNumberFail(number){
  return number <75
}

return result
}

console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

console.log(grouping([]));
// { pass: [], fail: [] }