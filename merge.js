const merge = function(arr1, arr2){
  let sorted = [];
  let start = 0;

  if(arr1.length === 0){
    return arr2;
  }else if(arr2.length === 0){
    return arr1;
  }
  for( let i = 0; i < arr1.length; i++){
    for( let j = start; j < arr2.length; j++){
      if(arr2[j] <= arr1[i]){
        sorted.push(arr2[j]);
        start = j + 1;
      }
    }
    sorted.push(arr1[i]);
  }

  for(let k = start; k < arr2.length; k++){
    sorted.push(arr2[k]);
  }
  return sorted;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);