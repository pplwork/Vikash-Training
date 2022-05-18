//callback function are present in the high order fucntions

const { default: axios } = require("axios");

let arr = ["apple", "mango", "banana", "santra", "grapes", "coconut", "tomato"];

arr.map((item,i)=>{
    console.log(item.split())
})

//event listners 
//onClik, onChange, onFocus, onKeydown, OnMouseOver, etc
//Uses callback functions to invoke the values

//creating CUSTOM callback functions

function race(name){
    console.log(`lets race ${name}`);
}

//highorder function

function startRace(func,name){

    console.log("lets pick a racer")

    func(name);
}

startRace(race,"vickey")

//Async Await functions

const Url="https://jsonplaceholder.typicode.com/posts"

const getData= async()=>{
    const {data}= await axios(Url);

    return data;
}
// console.log(getData().then(data=>console.log(data)))


//Promises 

const promises= new Promise((resolve,reject)=>{
    const histype="animal";
    const hertype="anmal";

    if(histype==hertype){
        resolve("You Both are equal in the name of law")
    }else{
        reject("you both are not equal please try again later")
    }
})

promises.then(response=>console.log(response)).catch(err=>console.log(err))

// Promises are used to reduce the callback complexity
// mostly called as Callback hell or Pyramid of doom
// they are placed in micro task queue 
//which means they will be excuted first when compare to the callstack


const joinForce=(gender)=>{

    return new Promise((resolve,reject)=>{
        if(gender==="male" || gender==="Male"){
            resolve("Go For Paratroppers")
        }else{
            reject("GO For Navy")
        }
    })

}

function processResponse(response){
    return new Promise((resolve,reject)=>{
        console.log("You are Selected For")
        if(response){
            resolve("Post is here "+response) 
        }else{
            reject("check your code please")
        }
    })
}

joinForce("female").then(response=>{
    return processResponse(response)
}).then(processresponse=>console.log(processresponse))
.catch(err=>console.log(err))

//Converting promises to async await for reducing code complexity
//Async Await

const converter=async()=>{

    try {
        const response= await joinForce("male");    
        console.log(await processResponse(response))
    } catch (error) {
        console.log(error)
    }

}

converter()