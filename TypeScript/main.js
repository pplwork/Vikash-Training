"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello Vikash";
console.log(message);
var is18 = true;
var name = "vikash";
var age = 23;
var n = null;
var u = undefined;
var myname = null || undefined;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 4];
var arr = ['vikash', 23];
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 34;
randomValue = "Vikash";
console.log(randomValue.name);
console.log(randomValue.toUpperCase());
var randomValue2 = 34;
randomValue2 = "Vikash";
function hasName(obj) {
    //return object and 
    //type of object = object and 
    //"name" property exist in object
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(randomValue2)) {
    console.log(randomValue2.name);
}
// randomValue2()
console.log(randomValue2.toUpperCase());
var a; //type cann be changes as variable is only decalred not have assigned value on it
a = 34;
a = true;
//multiple types 
//union type
var multType;
multType = 20;
multType = true;
//Functions
//optional parameters and defaault parameters
function add(num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 2);
add(5);
function fullname(person) {
    // function fullname(person:{firstname:string,lastname:string}){
    console.log(person.firstname, person.firstname.lastIndexOf);
}
var p = {
    firstname: "vikash",
    lastname: "male"
};
fullname(p);
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("vikash");
console.log(emp1.employeeName, emp1.greet());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegatework = function () {
        console.log("manager delegiting tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("vickey");
console.log( m1.employeeName);
m1.greet()
m1.delegatework()
//Access modifiers
//public => Default
//private => Cannot be acced outside its containing class
//protected => cann be accessed by extended class
