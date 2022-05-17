let arr1 = ["apple", "mango", "banana", "santra", "grapes", "coconut", "tomato"];


// for loops
for (let i = 0; i < arr1.length; i++) {
    console.log("List of fruits", arr1[i]);
}

//for in used to iterate through object keys

let student = {
    firstname: "Vikash",
    lastname: "Patel",
    age: 21,
    gender: "male"
}

for (let items in student) {
    console.log(items, " is ", student[items])
}
console.log(student["age"])

//for of used to get directy the values of the keys in object
//cannot be iterate throrught the object 

for (let items of "Viaksh Patel") {
    console.log("Sliced name is: ", items)
}

//while used when we dont know how many steps the iteration will required

arr1 = ["apple", "mango", "banana", "santra", "grapes", "coconut", "tomato"];

let count = 0;
while (arr1.length > 1) {
    let fruits = arr1.shift();
    count++;
    console.log(arr1)
    console.log(`removed ${fruits}`)
}
console.log(count)

// Do while loop behaves similary to the while loop but will 
//runs one extra loop as the condition is defined after the conditon checked

let counter = 10;

do {
    console.log("LL", counter);
    counter--;
} while (count === 0);


//if else vs switch case
function checkDay(day) {
    switch (day) {
        case 7:
            console.log("Woohoo!! its Sunday")
            break
        case 1:
            console.log("its Monday")
            break
        case 2:
            console.log("its Tuesday")
            break
        case 3:
            console.log("Its Wednesday")
            break
        case 4:
            console.log("Its Thursday")
            break
        case 5:
            console.log("Its Friday")
            break
        case 6:
            console.log("Its Saturday")
            break
    }
}

checkDay(1)

checkDayButIf(0)

function checkDayButIf(day) {
    if (day === 0) {
        console.log("Woohoo!! its Sunday")
    }
    else if (day === 1) {
        console.log("its Monday")

    }
    else if (day === 2) {
        console.log("its Tuesday")

    }
    else if (day === 3) {
        console.log("its Wednesday")

    }
    else if (day === 4) {
        console.log("its Thursday")

    }
    else if (day === 5) {
        console.log("its Friday")
    }
    else{
        console.log("its Saturday")
    }
}