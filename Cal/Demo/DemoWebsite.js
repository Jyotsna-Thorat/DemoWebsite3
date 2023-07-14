// client - imgsInit 
// {
//     uniqueid: 'mycrawler2',
//     inc: 5, //speed - pixel increment for each iteration of this marquee's movement
//     mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
//     moveatleast: 2,
//     neutral: 150,
//     savedirection: true,
//     random: true,
// }


alert("Wlcome to foodie world!");
let age = prompt("Enter Your Age");
console.log(age);

if (age >= 18) {
    confirm("Welcome");
    console.log("Welcome to Foodie World");

} else {
    confirm("Oops!Sorry Your Age is below 18years");
    console.log("Oops!Sorry Your Age is below 18years");
}

let family = ["A", "B", "C", "D"]
for (let index = 0; index < family.length; index++) {
    console.log(family[index]);
}

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(function myFunction(item) {
    console.log(item)
});


function myFunction() {

    document.getElementById("submit1").innerHTML = "YOU CLICKED ME!";
}

function greet(name, designation) {
    console.log(name + " is good " + designation);
}