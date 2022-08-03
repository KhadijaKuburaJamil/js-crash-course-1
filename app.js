// Declaring a variable
//keyword identifier/VariableName=value
var firstName="Khadija";
let lastName="Jamil";
let age ="30";
let isMarriage =true;
let children = ["Ama", "Kof", "Esi"];
let other = {
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoriteFruit: "Apple",
}
const fullName= firstName + "" +lastName; // concatenation
const myself= 'My name is ${firstName} ${lastName}.';
console.log(myself);

// STRINGE
let sentence = "This is a story about Khadija Jamil in Marriage"
console.log(sentence.length);
console.log(sentence.split("Khadija"));
console.log(sentence. replace(" Khadija", "Kubura" ));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith ("Spot"));
console.log(sentence.includes(""));

// ARRAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
days.unshift("Saturday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Saturday"));
console.timeLog(days[4]);  // Retrieving data
days[4] = "Saturday";
console.timeLog(days);

//OBJECTS
let person = {
    firstName:"Khadija" ,
    lastName: "Jamil",
    age:30
};
console.log(person["firstName"]);
console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));