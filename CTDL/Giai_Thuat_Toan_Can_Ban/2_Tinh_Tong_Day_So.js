let obj = { a: 10, b: 20, c: 30 };

// Cach 1

const result = (_obj) => {
  let sum = 0;
  for (let key in _obj) {
    if (typeof _obj[key] === "number") {
      sum += _obj[key];
    }
  }

  return sum;
};

// console.log(result(obj));

//========================================================

// Cach 2
let values = Object.values(obj); // lay ra value cua obj va tra ve 1 mang

const result2 = (_values) => {
  let sum = values.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return sum;
};

// console.log(result2(obj));
// ** Nhuoc diem cua cach 2 la phai biet cach dung reduce và tạo ra một array mới

//========================================================

// Cach 3

let values_v2 = Object.keys(obj); // lay ra key cua obj va tra ve 1 mang
// console.log("valuesv2", values_v2);

const result3 = (_obj) => {
  var sum = Object.keys(_obj).reduce(function (total, key) {
    if (typeof _obj[key] === "number") {
      return total + _obj[key];
    }
    return total;
  }, 0);

  return sum;
};

console.log(result3(obj));
