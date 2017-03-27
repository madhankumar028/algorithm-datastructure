function slasher(arr, howMany) {  
  return howMany === 0 ? arr : chopper(arr, howMany);
}

function chopper(arr, howMany) {
  return arr.splice(howMany, 0);
}

slasher([1, 2, 3], 2);
