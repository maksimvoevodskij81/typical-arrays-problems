
exports.min = function min (array) {
  try{
  if(array.length==0)
  return 0;
  let min=array[0];
  for (let i = 1; i < array.length; i++) {
    if(min>array[i]){
      min=array[i];
    }
  }
  return min;
}catch{
return 0;
}
}

exports.max = function max (array) {
 try{
  if(array.length==0)
  return 0;
  let max=array[0];
  for (let i = 1; i < array.length; i++) {
    if(max<array[i]){
      max=array[i];
    }
  }
  return max;
}catch{
  return 0;
}
}

exports.avg = function avg (array) {
  try{
  if(array.length==0)
  return 0;
 return array.reduce((acoom,item)=>acoom+item)/array.length;
  }catch{
    return 0;
  }
  
}
