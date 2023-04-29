// Array
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
}

let arr = [3, 5, 2, 8, 1];
// console.log(linearSearch(arr, 8)); // true
// console.log(linearSearch(arr, 6)); // false

// Object

function searchObject(obj, x) {
  for (let key in obj) {
    // obj.hasOwnProperty(key) : kiem tra xem key co phai la cua obj va co ton tai trong obj hay khong neu co => true
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === x) {
        return true;
      }
    }
  }
  return false;
}

let obj = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(searchObject(obj, "New York")); // true
// console.log(searchObject(obj, "Paris")); // false

// Cach 2
function searchObjectV2(obj, x) {
  return Object.values(obj).indexOf(x) !== -1;
}

// string.indexOf(searchvalue, start) : tra ve vi tri cua chuoi con trong chuoi cha, neu khong tim thay tra ve -1
// arr.indexOf(searchElement[, fromIndex]) : tra ve vi tri cua phan tu trong mang, neu khong tim thay tra ve -1

// console.log(searchObjectV2(obj, "New York")); // true
// console.log(searchObjectV2(obj, "Paris")); // false

// https://niithanoi.edu.vn/dom-trong-javascript.html
