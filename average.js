
function average(numbers) {
  return numbers.reduce((p, c)=> {
    if(!p) p=0;
    if(!c) c=0;
    return p+c
  }, 0) / numbers.length;
}

module.exports = {average};
