// This function will clear all the values
function clearScreen() {
 document.getElementById("result").value = "";}

// This function will display values
function display(value) {
 document.getElementById("result").value += value;}

// This function will evaluates the expression and return result
function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;}
