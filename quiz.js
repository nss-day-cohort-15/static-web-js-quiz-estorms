
//Initialize object

var tree = {}


//Capture user input to populate object


var char = document.getElementById('character');
char.addEventListener('input', function(event) {
   tree.species = char.value;
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
      alert('Aw, shucks. You need a value in both fields.');
    }})

//Initialize function on keypress, only while pointer remains in one of the two input fields and both fields are populated

char.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value != '' && num.value !='') {
        growTree(tree);
    }
    else if (event.keyCode === 13) {
    alert('Aw, shucks. You need a value in both fields.');
    }
})

num.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value != '' && num.value !='') {
        growTree(tree);

    }
    else if (event.keyCode === 13) {
    alert('Aw, shucks. You need a value in both fields.');
    }
})

//Grow tree
 function growTree(arg) {
  var space = ' ';
    for (var i = 1; i <= arg.height; i++) {
    console.log(space.repeat(arg.height - i) + arg.species.repeat(i * 2 - 1));
 }
 }



// Add remaining conditions (if height = NAN, char > 1)
// Clean up event listeners
// Is there a way to make this universal (i.e., not dependent on obj passed in having a height or species?)


