
function average(numbers) {
  filteredNums = numbers.filter((num) => {
    if(!Number.isNaN(num)){ 
      return num;
    }
  });
  if(filteredNums.length == 0){
    return NaN;
  }
  return filteredNums.reduce((p, c)=> p+c, 0) / numbers.length;
}

module.exports = {average};
