/*

// 1 ----  BEFORE HOISTING BY THE INTERPRETER
console.log(hello);                                   
var hello = 'world';


// 1 ----  AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello); // logs undefined
hello = "world";


//--------------------------------------------------------------------------


// 2 ----  BEFORE HOISTING BY THE INTERPRETER
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// 2 ----  AFTER HOISTING BY THE INTERPRETER
var needle;
needle = "magnet";
console.log(needle);


//-------------------------------------------------------------------------


// 3 ----  BEFORE HOISTING BY THE INTERPRETER
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// 3 ----  AFTER HOISTING BY THE INTERPRETER
var brendan;
brendan = "super cool";
console.log(brendan);


//-------------------------------------------------------------------------


// 4 ----  BEFORE HOISTING BY THE INTERPRETER
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


// 4 ----  AFTER HOISTING BY THE INTERPRETER
var food;
food = "chicken";
console.log(food); //prints chicken
food = "half-chicken";
console.log(food); //prints half-chicken
food = "gone";


//-------------------------------------------------------------------------


// 5 ----  BEFORE HOISTING BY THE INTERPRETER
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// 5 ----  AFTER HOISTING BY THE INTERPRETER
//mean is not a function


//-------------------------------------------------------------------------


// 6 ----  BEFORE HOISTING BY THE INTERPRETER
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// 6 ----  AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre) //logs undefined
genre = "disco";
var genre;
genre = "rock";
console.log(genre); //logs rock
genre = "r&b";
console.log(genre); //logs r&b
genre = "disco";
console.log(genre); // logs disco


//-------------------------------------------------------------------------


// 7 ----  BEFORE HOISTING BY THE INTERPRETER
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// 7 ----  AFTER HOISTING BY THE INTERPRETER
var dojo;
dojo = "san jose";
console.log(dojo); //logs san jose
var dojo;
dojo = "seattle";
console.log(dojo); //logs seattle
dojo = "burbank"; 
console.log(dojo); //logs burbank
dojo = "san jose";
console.log(dojo); //logs san jose

*/
