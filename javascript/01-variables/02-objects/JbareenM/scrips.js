
let _set = {dad:["yaba", 40], mom:["yama", 38] , sister1:["1st", 20], sister2:['2nd', 15], chal:["chal1", 4], am:["am1", 2]};

function print(arr){
  for (const i in _set) {
    console.log(_set[i]);
  }
}

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

let arr = []
for(const i in _set){

  if(_set[i][1] > 6){
    arr = [...arr, _set[i][1]];
  }
}

console.log(average(arr))