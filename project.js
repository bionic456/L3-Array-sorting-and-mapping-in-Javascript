var nos = [13, 87, 64, 35]

function myFunction(num) {
    return num * 50;
}

var newarray = nos.map(myFunction);

document.getElementById("result").innerHTML = "The mapped values are: " + newarray;

function ascending() {
    newarray.sort(function(a, b){return a - b});
    document.getElementById("result").innerHTML = "The ascending order of the mapped values are: " + newarray;
}

function descending() {
    newarray.sort(function(a, b){return b - a});
    document.getElementById("result").innerHTML = "The descending order of the mapped values are: " + newarray;
}

function mapped() {
    newarray = nos.map(myFunction);
    document.getElementById("result").innerHTML = "The mapped values are: " + newarray
}