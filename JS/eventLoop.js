//As javascript is single threaded therefore inorder to perform the asyncronous task that 
//usually take a amout of timme to execute and therefore can reduce application performance, therefore the
//time realted task are handled by the browser api using event loop which uses event stack to do execute the task 

console.log("script start")

setTimeout(()=>{
    console.log("this shoulde be printed after the script execution is completed")
},0)

function add(num1,num2){
    for(let i=0;i<1000;i++){
        console.log(`hello ${i>3?i+"th":" "} times`)
    }
    return num1+num2;
}

add()


const seconds = new Date().getSeconds();
console.log(seconds)

setTimeout(function() {
  console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
}, 1000)

while (true) {
  if (new Date().getSeconds() - seconds >= 3) {
    console.log(`Good, looped for ${new Date().getSeconds() - seconds} seconds`)
    break;
  }
}

const stopWatch=()=>{
    console.log(new Date().getSeconds())
}

const timer=setInterval(()=>{
    stopWatch()
    if(new Date().getSeconds == 40){
        clearInterval(timer)
    }
},1000)

console.log(new Date().getHours(),"_____")

console.log("script end")