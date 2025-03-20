// 1-- Write a function that takes a string and returns its reverse:

function reverseStr(str:string):string{
    let strReversed: string="" ;
    for(let i=str.length-1;i>=0;i--){
       strReversed+=str.charAt(i);
    }
    return strReversed;
    
}
let b="Marc";
console.log(reverseStr(b));


// 2--Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

countVowels("typescript"); // 3
function countVowels(str: string): number {
 let count=0;
 for (let i=0;i<str.length;i++){
    if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u")
        {
        count++;
    }
 }
 return count;
}

// 3--Given an array of numbers from 1 to N with one missing number, find the missing number.

function findMissingNumber(arr: number[]): number {
    let arrNum = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arrNum) {
            return arrNum;  
        }
        arrNum++; 
    }
    return arrNum; 
}


// 4-- Write a function that returns the first non-repeating character in a given string.

function firstNonRepeatingChar(str: string): string |null {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) { //If both the first and last occurrences are the same, that means the character doesn't repeat in the string
            return str[i]; 
        }
    }
    return null; 

}

//5-- Write a function that compares two objects deeply for equality

function deepEqual(obj1: any, obj2: any): boolean {
     if (obj1===obj2)
        {return true};

     if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {// checking if they have the same keys count
        return false;
    }

    for (let key of keys1) {
       
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {  // If the key is not in obj2 or values don't match, we return false
            return false;
        }
    }

   
    return true; // if all is good => return true.
}





// --7 Class TaskManager that contains the 3 methods addTask , completeTask , and displayTask

class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
    const task = {
        id:this.currentId++,
        name: name,
        status:"pending",
    }
    this.tasks.push(task);
    }
    completeTask(id: number): void {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) { // Compare the 'id' of each task
                this.tasks[i].status = "complete"; // Update the status of the task
                return; // Once the task is found and updated, exit the method
            }
        }
    }
    
    displayTasks(): void {
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        }
    }
}