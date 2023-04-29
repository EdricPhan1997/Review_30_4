// Sử dụng vòng lặp for

function tinhTichDaySo(arr) {
  let tich = 1;
  for (let i = 0; i < arr.length; i++) {
    tich *= arr[i];
  }
  return tich;
}

// Sử dụng vòng lặp reduce
function tinhTichDaySo(arr) {
  return arr.reduce(function (tich, currentValue) {
    return tich * currentValue;
  }, 1);
}
