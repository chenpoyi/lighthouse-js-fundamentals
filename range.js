const range = function(start, end, step){
  if( start === undefined || end === undefined || step === undefined){
    return []
  }
  if( start > end ){
    return []
  }
  if( step <= 0){
    return []
  }
  let array = [];
  let curr = start;
  while(curr <= end){
    array.push(curr);
    curr += step;
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));