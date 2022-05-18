let arr1 = ["apple", "mango", "banana", "santra", "grapes", "coconut", "tomato"];

//cloning an array using spread operator

let clonedArray=[...arr1];

console.log(arr1===clonedArray) //false

//map
const inventory = [
    { name: 'asparagus', type: 'vegetables' },
    { name: 'bananas',  type: 'fruit' },
    { name: 'goat', type: 'meat' },
    { name: 'cherries', type: 'fruit' },
    { name: 'fish', type: 'meat' }
];

const inventoryType= inventory.map((item)=>{
    return item.type;
})

console.log(inventoryType)

//filter

const onlyVeg=inventory.filter((item)=>{
    return item.type!=="meat";
})
console.log(onlyVeg)

//reduce
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const total= array1.reduce((acc,curr)=>acc+curr,100)
console.log(total)

//shift unshift push pop

console.log(array1.pop(),array1.shift())

//foreach
let sum=0;
array1.forEach(add);

function add(num){
    sum+=num;
}

console.log(sum)

//object destructuring and object assigning
let person = {firstName:"vikash", lastName:"patel", age:130, eyeColor:"blue"};

const {firstName:myName, age:number}=person;
console.log(myName, number)

//arrow functions, rest parameters and template string

const worker=(name,age=12)=>{
    return `${name} is ${age} years old`;
}

console.log(worker("vikash"))
