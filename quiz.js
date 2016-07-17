//YOU WILL NEED TO USE REPEAT METHOD ON STRING
//BE SURE TO CONVERT CHAR INTO STRING
//USE TERNARY
//CONDENSE EVENT LISTENERS


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

// function growTree(tree) {
//     var output = '';
//     for (var i = 0; i < tree.height; i++) {
//         console.log(output += tree.leaf);
//     }
//  }

// function growTree(tree) {
//     var output = '';
//     var outputArranged = '';
//     for (var i = 0; i < tree.height; i++) {
//     outputArranged = output += tree.leaf;
//     console.log(' '.repeat(tree.height - (i / 2)) + outputArranged);
//    //console.log(' '.repeat(parseFloat((tree.height - (i / 2))))  + outputArranged)  need an if/else based on modulo of height/2;
//     }
//  }

// growTree(tree);

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




