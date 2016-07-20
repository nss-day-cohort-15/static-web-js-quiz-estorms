
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


var growButt = document.getElementById('growButton');
growButt.addEventListener('click', function(event) {

    if (num.value === '' || char.value === '') {
        alert('You need a value in both fields. How about following the instructions next time.');
    }

    else if (isNaN(num.value) === true) {
        alert("You didn't enter a number in the field labeled 'Number.' How about following the instructions next time.");
    }

    else {
        // if (num.value !== '' && char.value !== '' && isNaN(num.value) === true) {
        // growTree(tree);
        growTree(tree);
    }})


//Initialize function on keypress, only while pointer remains in one of the two input fields and both fields are populated

char.addEventListener('keypress', function(event) {
 if (event.keyCode === 13 && char.value !== '' && num.value !=='') {
    growTree(tree);

}
else if (event.keyCode === 13) {
    alert('You need a value in both fields. How about following the instructions next time.');
}})


num.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 && char.value !== '' && num.value !=='') {
        growTree(tree);

    }
    else if (event.keyCode === 13) {
        alert('You need a value in both fields. How about following the instructions next time.');
    }

})


//Grow tree
function growTree(arg) {
  var space = ' ';
  for (var i = 1; i <= arg.height; i++) {
    console.log(space.repeat(arg.height - i) + arg.species.repeat(i * 2 - 1));
}
}








