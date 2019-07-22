// setName();
// function setName() {
//     var name = 'Kevin';
//     console.log(name);
// }
// name = 'Kevin';
// var name;
// console.log(name);

// console.log('start');
// let ave = findAvg(2,2);
// console.log('middle');
// function findAvg(a,b) {
//     console.log('function');
//     var answer = (a + b) / 2;
//     return answer;
// }


let fruits = ['Apple', 'Orange', 'Banana'];
// let favFruit;
function printFruits() {
    let favFruit = fruits[1];
    console.log(fruits[0]);
    function printFavFruit() {
        console.log(favFruit);
    }
}

// function printFavFruit() {
//     console.log(favFruit);
// }

printFruits();
printFavFruit();