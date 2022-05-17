// prototype 
//it is a space provivide to evry function in js

function FullDescription(fname,lastname,email,age,address){
    this.fname=fname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
}

FullDescription.prototype.about=function(){
    return `Name is ${this.fname} ${this.lastname}, age is ${this.age}, email: ${this.email}, address ${this.address} `
}
FullDescription.prototype.is18=function(){return this.age >=18};
FullDescription.prototype.hobbie=function(){return `${this.fname} likes dancing playing songs`};

const myself= new FullDescription("vikash","patel","pvickey663@gamil.com",21,"mahrashtra");

console.log(myself)
console.log(myself.about())
console.log(myself.is18())
console.log(myself.hobbie())


//classes under a roof works same like prototype

class Animal{
    
    constructor(name,legs,hands){
        this.name=name;
        this.legs=legs;
        this.hands=hands;
    }
    running(speed){
        return `${this.name} is running ${speed} km/hr`;
    }
}

let dog= new Animal("tommy",4,0);

console.log(dog.running(23))


//inheritence 

class Mammals extends Animal{

    constructor(name, size, region){
        super()
        this.size=size;
        this.region=region;
        this.name=name;
    }

    friendly(){
        return `${this.name} is freindly`
    }
    description(){
        return `${this.name} has size of ${this.size} and lives in ${this.region}`
    }
}

let human= new Mammals("kiran",23,"india")

console.log(human.friendly())
console.log(human.description())
console.log(human.running(100))


//closures are the lexical environment regions that comes with the function in js
//it is an environment in which mostly the function variables reference are stored
//eg

const primaryFunc=(num1,num2)=>{
    let num3=5;

    return function(){
        return num1+num2+num3;
    }
}

const secondaryFunc=primaryFunc(2,4);
console.log(secondaryFunc())

