const container = document.querySelector(".container")


 let getData = async function ()
 {
// //here i am just testing that the end point which is created bt me is working properly or not?
   let response = await fetch("http://localhost:8000/api/movies")
  let data = await response.json();
  let Movies=data.data.movies
  Movies.map((movie)=>{
    let li=document.createElement("li")
    li.innerText=movie.name
    container.appendChild(li)
  }
  )
  
}
getData();


// //////////////////////////////////////////////////
// //////////////////// JAVA SCRIPT//////////////////
// //////////////////////////////////////////////////
// class Factory{
//   constructor(name,model)
//   {
//     this.name = name
//     this.model = model
//   }
//   generateDetails()
//   {
//     return Math.floor(Math.random()*1000000000000)
//   }
// }



// const Product = new Factory ("vishal singh","5g")

// console.log(Product.generateDetails())



// const array =[1,2,3,4,5,6]

// const newArray=array.map((num)=>{
//   return num+1;
// })

// console.log(newArray)

// ////////////////////////////////////////////////
// ///////// FILTER METHOD WITH ARRAY /////////////
// ////////////////////////////////////////////////

// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newName = Numbers.filter((number) => {
//   return number%2===0
// });

// console.log(newName)

// const words = ["apple", "banana", "orange", "kiwi", "strawberry", "blueberry"];

// const newWords=words.filter((name)=>
// {
//   return name.length>=5
// })
// console.log(newWords)

// const names = ["John", "Jane", "Bob", "Jack", "Jessica"];

// const newNames =names.filter((letter)=>
// {
//   return letter[0].toLowerCase()==="j"
// })

// console.log(newNames)

// const numbers = [-2, 5, -10, 8, -3, 0, 12, -7];

// const positiveNumbers= numbers.filter((num)=>{
//  return num>=0
// })
// console.log(positiveNumbers)

// const Words = ["level", "hello", "radar", "world", "civic"];

// const NewWords=words.filter((name)=>
// {
//   const reverseWord=name.split("").reverse().join("")
//   return reverseWord.toLowerCase()===name.toLowerCase()
// })

// console.log(NewWords)

// //======================================
// //=========CALL BACK HELL===============
// //======================================

// function task1(callback)
// {
//   setTimeout(()=>
//   {
//     console.log("task 1 completed...")
//     callback()

//   },2000)
// }

// function task2(callback)
// {
//   setTimeout(()=>
//   {
//     console.log("task 2 completed...")
//     callback()

//   },2000)}

// function task3(callback)
// {
//   setTimeout(()=>
//   {
//     console.log("task 3 completed...")
//     callback()
//   },2000)}

// function task4(callback)
// {
//  setTimeout(()=>
//   {
//     console.log("task 4 completed...")
//     callback()
//   },2000)}

// console.log("getting the Data of task 1..")
// task1(()=>{
//   console.log("getting the Data of task 2..")
//   task2(()=>{
//   console.log("getting the Data of task 3..")
//     task3(()=>{
//      console.log("getting the Data of task 4..")
//       task4(()=>{
//         console.log("this is the final level")
//       })
//     })
//   })
// })

// ///////////////////////////////////////////////
// //////CALL BACK HELL RESOLVED BY PROMISE///////
// ///////////////////////////////////////////////

// function morning()
// {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve("morning walk")
//     },2000) 
//   })
// }


// function afternoon()
// {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve("afternoon walk")
//     },2000) 
//   })  
// }


// function goodnight()
// {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//     resolve("goodnight walk")
//     },2000)
//   })
// }

// morning()
// .then((val)=>
// {
//   console.log(val)
//   return afternoon()
// })
// .then((val)=>{
//   console.log(val)
//   return goodnight();
// }) 
// .then((val)=>
// {
//   console.log(val)
//   console.log("all the tasks were completed")
// })


// function createStarPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let spaces = ' '.repeat(rows - i);
//       let stars = '*'.repeat(2 * i - 1);
//       console.log(spaces + stars);
//     }
//   }
  
//   // Create the pattern with 3 rows
//   createStarPattern(10);

// function createStarPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let spaces = '';
//       for (let j = 1; j <= rows - i; j++) {
//         console.log(rows-i)
//         spaces += ' ';
//       }
  
//       let stars = '';
//       for (let k = 1; k <= 2 * i - 1; k++) {
//         console.log( 2 * i - 1)
//         stars += '*';
//       }
  
//       console.log(spaces + stars);
//     }
//   }
  
//   //Create the pattern with 3 rows
//   createStarPattern(10);

////recursive function

// function printNumbers(start,end)
// {
//   if(start<end)
//   {
//     console.log(`the number which you want to print is ${start}`)
//     printNumbers(start+1,end)
//   }

// }
// printNumbers(1,20)

////find the second largest number in array

let array =[93,12,56,87940349,93284980313,94,86845948,28328991,91,98,97]
let largest = 0
let secondLargest = 0

for(let i=0;i<array.length;i++)
{
  if(largest<array[i])  // 0 93
  {
    secondLargest = largest
    largest= array[i]
  }
  else if(secondLargest<array[i])
  {
    secondLargest = array[i]
  }
}
console.log(largest)
console.log(secondLargest)




