//Answer #1

let cls1 = cls2(5);
function cls2 (xyz) {
    return function (klm){
        return xyz + klm;
    }
}
let cls3 = +prompt("Please enter number");
let cls4 = +prompt("Please enter number");

console.log(cls1(cls3));
console.log(cls1(cls4));


//Answer #2
 
function findArray (array, value){
  if (array.length === 0){
    return false;
  } else if (array [0] === value){
    return true;
  } else {
    return findArray(array.slice(1), value);
  }
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findArray(myArray, 15));
console.log(findArray(myArray, 9));

//Answer #3
function addParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
  
    const body = document.querySelector('body');
    body.appendChild(newParagraph);
  }

//Answer #4

function addListItem(text) {
    const newItem = document.createElement('li');
      newItem.textContent = text;
  
    const list = document.querySelector('ul');
    list.appendChild(newItem);
  }
  
//Answer #5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }

//Answer #6 
function savelocal (key, value){
  localStorage.setItem(key, JSON.stringify(value));
}
let myobj1 = {name1: "Dennis", age:35 }; 
savelocal("myobj", myobj1);


//Answer #7 
function getlocal (key){
  let value1 = localStorage.getItem(key);
  return value1 ? JSON.parse(value1) : null;
}
let myobj = getlocal ("myobj");
console.log(myobj);



//Answer #8 
function retrieval(obj) {

  Object.keys(obj).forEach(key => {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  });
 
  let newObj = {};
  Object.keys(obj).forEach(key => {
    newObj[key] = JSON.parse(localStorage.getItem(key));
  });
  return newObj;
}
let myObject = { name: 'Ishaq Khakwani', age: 65 };
let myObject2 = retrieval(myObject);
console.log(myObject2);
  