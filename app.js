//Answer of question No.1 ok

// let cls1 = cls2(5);
// function cls2 (xyz) {
//     return function (klm){
//         return xyz + klm;
//     }
// }
// let cls3 = +prompt("Please enter number");
// let cls4 = +prompt("Please enter number");

// console.log(cls1(cls3));
// console.log(cls1(cls4));


//Answer of question No.2 ok
 
// function findArray (array, value){
//   if (array.length === 0){
//     return false;
//   } else if (array [0] === value){
//     return true;
//   } else {
//     return findArray(array.slice(1), value);
//   }
// }
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findArray(myArray, 15));
// console.log(findArray(myArray, 9));



//Answer of question No.3 TBC

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
}





//Answer of question No.4




//Answer of question No.5 tbc
// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }

// const myDiv = document.getElementById("myDiv");
// changeBackgroundColor(myDiv, "blue");

// let yourPara = document.querySelector("#your-para");
// yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
// yourPara.style.backgroundColor = "#000";
// yourPara.style.color = "#fff";
// yourPara.style.width = "100%";








//Answer of question No.6 ok
// function savelocal (key, value){
//   localStorage.setItem(key, JSON.stringify(value));
// }
// let myobj = {name1: "Dennis", age:35 }; 
// savelocal("myobj", myobj);


//Answer of question No.7 ok
// function getlocal (key){
//   let value1 = localStorage.getItem(key);
//   return value1 ? JSON.parse(value1) : null;
// }
// let myobj = getlocal ("myobj");
// console.log(myobj);



//Answer of question No.8 ok
// function retrieval(obj) {

//   Object.keys(obj).forEach(key => {
//     localStorage.setItem(key, JSON.stringify(obj[key]));
//   });
 
//   let newObj = {};
//   Object.keys(obj).forEach(key => {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   });
//   return newObj;
// }
// let myObject = { name: 'Ishaq Khakwani', age: 65 };
// let myObject2 = retrieval(myObject);
// console.log(myObject2);


