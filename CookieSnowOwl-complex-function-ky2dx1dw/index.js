let LOG = console.log
let newLog = function(value)
{
    LOG(value);
};
//a function that is of class FUnction must have parameters that are only appear as a variable in what the function does. To avoid this restriction, if your variable is, lets say, energy, and you wanted to console.log("energy is cool, especially the " + energy + "type of energy"), you would write console.log("energ" + "y is cool, especially the"...)
//class FUnction (not Function)
class FUnction {
  constructor(FunctionParameters, FunctionDoes) {
    this.functionparameters = FunctionParameters;
    this.functiondoes = FunctionDoes;
  }
  get functionReturn() {
    return this.FunctionBuilt();
  }
  
  FunctionBuilt() {
    let toReturnParams = ""
    for (let i = 0; i < this.functionparameters.length; i++) {
      toReturnParams += ", " + this.functionparameters[i]
    }
    toReturnParams = toReturnParams.substring(2)
    this.functiondoes = this.functiondoes.replace("console.log", "newLog")
    return "function(" + toReturnParams + ") {" + this.functiondoes + "}"}
  get thisName() {return this.thisNAME()}
  thisName() {console.log(this.functiondoes)}
}
//simplify Function (plug in the parameters)
function simplifyFUnction(paramsandValuesJSON, stringedFUnction) {
  stringedFUnction = stringedFUnction.replace("function", '')
  let paramsandValuesJSONOBJECTS = Object.keys(paramsandValuesJSON)
  for (let i = 0; i < paramsandValuesJSONOBJECTS.length; i++) {
    stringedFUnction.split(paramsandValuesJSONOBJECTS[i]).join("")
    stringedFUnction.split(paramsandValuesJSONOBJECTS[i]).join(paramsandValuesJSON[paramsandValuesJSONOBJECTS[i]])
  }
  stringedFUnction = "function" + stringedFUnction
  return stringedFUnction
}
//make the simplifyFUnction(a string) into a function
function runSimplifiedFUnction(SimplifiedFUnction) {
  SimplifiedFUnction = SimplifiedFUnction.substring(12).slice(0, -1)
  SimplifiedFUnction = new Function(SimplifiedFUnction)
  return SimplifiedFUnction
}

//make the function
eetBeens = new FUnction(["eeee"], "console.log(\"I\'m eating beens and \" + eeee)").functionReturn

//simplifyFUnction it
eetBeens = simplifyFUnction({"eeee": "'books'"}, eetBeens)

//turn it into a function
eetBeens = runSimplifiedFUnction(eetBeens)

//run it
eetBeens()

addition = new FUnction(["numberList"], "let g = 0;\n for (let i = 0; i < numberList.length; i++){g += numberList[i].parseInt()};\n return g;")
addition = simplifyFUnction({"numberList": [1, 2, 3, 4, 10]}, addition)
addition = runSimplifiedFUnction(addition)
addition = addition()
console.log(addition)