export {}
let message = "Hello Vikash";
console.log(message)

let is18 : boolean = true;

let name:string= "vikash";

let age:number=23;

let n:null= null;

let u:undefined=undefined;

let myname:string= null || undefined;

let arr1 : number[]= [1,2,3];
let arr2 : Array<number>= [1,2,4];

let arr: [string,number]=['vikash',23];

enum Color {Red=3,Green,Blue};

let c:Color=Color.Green;

console.log(c)

let randomValue:any=34;

randomValue="Vikash"

console.log(randomValue.name)
randomValue()
console.log(randomValue.toUpperCase())

let randomValue2:unknown=34;

randomValue2="Vikash"

function hasName(obj : any):obj is{name:string}{
    //return object and 
    //type of object = object and 
    //"name" property exist in object
    return !!obj && 
    typeof obj==="object" &&
    "name" in obj
}

if(hasName(randomValue2)){
    console.log(randomValue2.name)
}
// randomValue2()
console.log((randomValue2 as string).toUpperCase())

let a;      //type cann be changes as variable is only decalred not have assigned value on it
a=34;
a=true;

//multiple types 
//union type
let multType: number | boolean;

multType =20;
multType=true;

//Functions

//optional parameters and defaault parameters
function add(num1:number = 10 ,num2?:number ):number{
    if(num2){
        return num1+num2;
    }else{
        return num1;
    }
}
add(5,2)
add(5)

//interface

interface Person{
    firstname:string,
    lastname?:string;       //question mark = optional (lastname optional)
}

function fullname(person:Person){
// function fullname(person:{firstname:string,lastname:string}){
    console.log(person.firstname,person.firstname.lastIndexOf)
}

let p={
    firstname:"vikash",
    lastname:"male"
}

fullname(p)

//classes

class Employee{

    employeeName: string;

    constructor(name: string){
        this.employeeName=name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp1= new Employee("vikash");

console.log(emp1.employeeName,emp1.greet())


class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }

    delegatework(){
        console.log("manager delegiting tasks")
    }

}

let m1= new Manager("vickey")

console.log(m1.delegatework(), m1.employeeName, m1.greet())

//Access modifiers

//public => Default
//private => Cannot be acced outside its containing class
//protected => cann be accessed by extended class


