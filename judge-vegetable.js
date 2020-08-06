const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'


const judgeVegetable = function(vegetables, metric){
  let max = 0;
  let leader;
  for(let veg of vegetables){
    if(veg[metric] >= max){
      leader = veg["submitter"];
      max = veg[metric];
    }
    
  }
  return leader;
}
console.log(judgeVegetable(vegetables, metric));