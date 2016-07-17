

//Initialize object

var tree = {}


//Capture user input to populate object


var char = document.getElementById('character');
char.addEventListener('input', function(event) {
   tree.leaf = char.value;
})

var num = document.getElementById('height');
num.addEventListener('input', function(event){
    tree.height = Number(num.value);
})

//Initialize function on button click

var growButt = document.getElementById('growButton');
growButt.addEventListener('click', function(event) {
    if (num.value != '' && char.value != '') {
        growTree(tree);
    }
    else {
      alert('You need a value in both fields, dummy');
    }})

//Initialize function on keypress, only while pointer remains in one of the two input fields

char.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value != '' && num.value !='') {
        // console.log(growTree(tree));
        // console.log('working');
    }
    else if (event.keyCode === 13) {
    alert('You need a value in both fields, dummy');
    }
})

num.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value != '' && num.value !='') {
        growTree(tree);
        // console.log('poo');
    }
    else if (event.keyCode === 13) {
    alert('You need a value in both fields, dummy');
    }
})

//Grow the Tree


//how to write the above fn so it doesn't use a parameter that's already specific to an argument?

 function growTree(tree) {
    var output = '';
    var outputArranged = ' '

    for (var i = 0; i < tree.height; i++) {
        if (i !== 0) {
    output += tree.leaf + tree.leaf;
        }
        else {
            output += tree.leaf;
        }
    console.log(' '.repeat(tree.height - (Math.ceil(i / 2))) + output);
    }
 }

 (growTree(tree));


//Left to do, in order of importance:
//1. realign rows when i is GREATER THAN 1; mess with spacing
//2. add remaining conditionals (when num is NAN, char is > 1)
//3. clean up event listeners
//4. explore ternaries
//5.

