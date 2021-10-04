console.log("step 1");
console.log("step 2");
console.log("step 3");
console.log("step 4");
console.log("step 5");

for (var step = 0; step <5; step++) {
    console.log("walking east one step");
}

for (var step = 0; step <5; step=step+1) {
    console.log("walking east one step" + (step+1)); //1
}
for (var step = 0; step <5; step+= 3) {
    console.log("walking east one step" + (step+1)); //1
}
for (var step = 0; step <5; step+=3) {
    console.log("walking east one step" + step); //1
}

function tuan(){} //function declaration

//excecute
console.log("string")
console.log(1)
var x =27;
console.log(x);
console.log(tuan());

function tuan(hoang) {
    return hoang;
 //func declaration

console.log(tuan(12));
}

function oddEven(x) {
    if (x % 2 ===0) {
        console.log("even");
        return "stop"
    }   else {
        console.log("odd");
    }
    console.log("this has been run")
}
console.log(oddEven(12));

function oddEven(x, y, z) {
    return { x, y ,z };
} //func declaration

var x = 10;
var y = 100;
var z = 1000;
console.log(oddEven(x, x, x)); //0
//1 how many variable
//2 input(10,10,10)
//3 map with declaration
//
//
function myClg(argument) {
    console.log(argument);
}

var data = 123;
myClg("hahahha mine");