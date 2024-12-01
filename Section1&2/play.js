const firstname = "Ronan";
let age = 34;
const hasHobbies = true;
age = 35;
const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", his age is " +
    userAge +
    " and he has hobbies : " +
    userHasHobbies
  );
};
const add = (a, b) => a + b;
console.log(add(1, 2));
const addOne = (a) => a + 1;
console.log(addOne(1));
const addRandom = () => Math.random();
console.log(addRandom());
console.log(summarizeUser(firstname, age, hasHobbies));
///
const person = {
  namePerson: "Max",
  agePerson: 29,
  greet() {
    console.log("Hi, I am " + this.namePerson);
  },
};
person.greet();
const hobbies = ["Sports", "Cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
hobbies.push("Programming");
console.log(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);
const copiedPerson = { ...person };
console.log(copiedPerson);
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));
const printName = ({ namePerson }) => {
  console.log(namePerson);
};
printName(person);
const { namePerson, agePerson } = person;
console.log(namePerson, agePerson);
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};
setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);
console.log("Hello!");
console.log("Hi!");
