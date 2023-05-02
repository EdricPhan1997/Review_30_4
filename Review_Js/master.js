// // alert(document.head.firstElementChild.nodeName);
// // document.body.style.background = "gray";

// let _id = document.getElementById("tieuDe");
// let _class = document.getElementsByClassName("nhom1");
// let _tag = document.getElementsByTagName("p");

// // 3.1. Nhắm đến phần tử DOM bằng ID
// _id.style.color = "red";
// // y.style.color = "blue";
// // console.log(x);

// // console.log(_class);

// // _class[0].style.color = "blue";

// // 3.2. Nhắm đến phần tử DOM bằng Class Name
// // for (let elem in _class) {
// //   //   console.log(elem);

// //   _class[elem].style.background = "green";
// // }

// // 3.3. Nhắm đến phần tử DOM bằng Tag Name
// // for (let elem in _tag) {
// //   _tag[elem].style.background = "gray";
// // }

// // 3.4. Nhắm đến phần tử DOM bằng CSS Selector
// // Phương thức querySelectorAll() trả về danh sách tất cả các phần tử khớp với các CSS Selector được chỉ định.
// let _allLi = document.querySelectorAll("ul li");

// // console.log(_allLi.length);

// // for (var elem of _allLi) {
// //   console.log(elem.innerHTML); // text
// // }

// let _name = document.getElementsByName("hello");

// console.log(_name[0]);

//==================================================================================================

let _id = document.getElementById("tieuDe");

console.log("id", _id.id);
console.log("className", _id.className);
console.log("tagName", _id.tagName);
console.log("outerHTML", _id.outerHTML);
console.log("innerHTML", _id.innerHTML);
console.log("textContent", _id.textContent);
console.log("attributes", _id.attributes);
console.log("value", _id.value);

// Create a new child node
const child = document.createElement("p");
child.textContent = "This is a new paragraph.";

// Add the new child node to the parent node
_id.appendChild(child);

// document.body.style.background = "gray";

const childNodes = _id.childNodes;

console.log("childNodes", childNodes[1]);

// https://topdev.vn/blog/dom-la-gi/
