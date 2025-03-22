"use strict";
// 1-- Write a function that takes a string and returns its reverse:
function reverseStr(str) {
    let strReversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strReversed += str.charAt(i);
    }
    return strReversed;
}
let b = "Marc";
console.log(reverseStr(b));

// 2--Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}
let str="makkkssffeeoo";
console.log(countVowels(str));


// 3--Given an array of numbers from 1 to N with one missing number, find the missing number.
function findMissingNumber(arr) {
    let arrNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arrNum) {
            return arrNum;
        }
        arrNum++;
    }
    return arrNum;
}
//example for challenge 3 :
let arr = [1, 2, 3, 4, 6, 7];
console.log(findMissingNumber(arr));


// 4-- Write a function that returns the first non-repeating character in a given string.
function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) { //If both the first and last occurrences are the same, that means the character doesn't repeat in the string
            return str[i];
        }
    }
    return null;
}

let str1="abcabdec";
console.log(firstNonRepeatingChar(str1));

//5-- Write a function that compares two objects deeply for equality
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    ;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) { // checking if they have the same keys count
        return false;
    }
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) { // If the key is not in obj2 or values don't match, we return false
            return false;
        }
    }
    return true; // if all is good => return true.
}
//6 create a LRU map and store data into it 
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) {
            return null;
        }
        // Move accessed key to the end (most recently used)
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            // Remove existing key so it can be added to the end
            this.cache.delete(key);
        }
        else if (this.cache.size >= this.capacity) {
            // Ensure the leastUsedKey is defined before deleting
            const leastUsedKey = this.cache.keys().next().value;
            if (leastUsedKey !== undefined) {
                this.cache.delete(leastUsedKey);
            }
        }
        this.cache.set(key, value);
    }
}

// example for LRU challenge 6 : 

const cache = new LRUCache(3); // LRU cache with a capacity of 3

cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");

console.log(cache.get(1)); // Outputs: "A", moves key 1 to the most recently used position

cache.put(4, "D"); // Since capacity is 3, this will remove the least recently used key (key 2)

console.log(cache.get(2)); // Outputs: null (key 2 was removed)
console.log(cache.get(3)); // Outputs: "C"
console.log(cache.get(4)); // Outputs: "D"

cache.put(5, "E"); // Removes least recently used key (key 1)

console.log(cache.get(1)); // Outputs: null (key 1 was removed)
console.log(cache.get(5)); // Outputs: "E"
console.log(cache.get(3)); // Outputs: "C"


// --7 Class TaskManager that contains the 3 methods addTask , completeTask , and displayTask
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }
    addTask(name) {
        const task = {
            id: this.currentId++,
            name: name,
            status: "pending",
        };
        this.tasks.push(task);
    }
    completeTask(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) { // Compare the 'id' of each task
                this.tasks[i].status = "complete"; // Update the status of the task
                return; // Once the task is found and updated, exit the method
            }
        }
    }
    displayTasks() {
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        }
    }
}

//example of use for challenge 7  :

// Creating an instance of TaskManager
const taskManager = new TaskManager();

// Adding tasks
taskManager.addTask("Complete JavaScript project");
taskManager.addTask("Study for exams");
taskManager.addTask("Buy groceries");

// Displaying tasks before completing any
console.log("Before completing tasks:");
taskManager.displayTasks();

// Completing the task with ID 2 (Study for exams)
taskManager.completeTask(2);

// Displaying tasks after completing one
console.log("\nAfter completing task 2:");
taskManager.displayTasks();
