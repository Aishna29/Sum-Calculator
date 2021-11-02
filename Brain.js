// This function will clear all the values
function clearScreen() {
    document.getElementById("answer").value = "";
}

// This function will display values
function display(value) {
    document.getElementById("answer").value += value;
}

// This function does the expression and return answer
function calculate() {
    var p = document.getElementById("answer").value;
    var q = eval(p);
    document.getElementById("answer").value = q;
}
