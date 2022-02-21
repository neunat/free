function CreateEquation(a, b, w){
  return function(x){
    var output = a[0];
    for (var i=1;i<w+2;i++){
      output *= (x**(w-i+1)-b[i-1]);
      if (i <= w){
        output *= (x**(w-i+1)+a[i]);
      }
    }
    return output;
  }
}
console.log(CreateEquation([1, 2, 3], [2, 5, 8], 2)(1))