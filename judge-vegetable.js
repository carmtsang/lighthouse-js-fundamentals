//vegetables are array of objects 
//to be judged by either plumpness or redness. return submitter name.

//return submitter name

const judgeVegetable = function(vegetables, metric) {
  if (vegetables[0][metric] >= vegetables[0][metric] && vegetables[0][metric] >= vegetables[2][metric]) {
    return vegetables[0].submitter;
  } else if (vegetables[1][metric] >= vegetables[0][metric] && vegetables[1][metric] >= vegetables[2][metric]) {
    return vegetables[1].submitter;
  } else {
    return vegetables[2].submitter
  }
}


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

console.log(judgeVegetable(vegetables, metric));