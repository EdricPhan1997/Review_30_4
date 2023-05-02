// linearSearch: Thuật Toán Tìm Kiếm Tuần Tự

function linearSearch(_arr, _target) {
  for (let i = 0; i < _arr.length; i++) {
    if (_arr[i] === _target) {
      return i;
    }
  }
  return -1;
}

let arr = [3, 5, 2, 8, 1];

// console.log(linearSearch(arr, 8));

function linearSearchV2(_arr, _target) {
  let _index = -1; // dat bien co hieu
  _arr.forEach(function (item, index) {
    if (item === _target) {
      _index = index;
    }
  });
  return _index;
}

// console.log(linearSearchV2(arr, 8));

function linearSearchWithSentinel(_arr, _target) {
  const _lastItem = arr[arr.length - 1]; // 1

  arr[arr.length - 1] = _target; // 8

  let i = 0;
  while (_arr[i] !== _target) {
    i++;
    // console.log("i", _arr[i]); // 5 ,2 ,8
  }

  _arr[_arr.length - 1] = _lastItem; // 1

  //   console.log("i", i); // 3
  if (i < _arr.length - 1 || _arr[_arr.length - 1] === _target) {
    return i; // Trả về chỉ số của phần tử được tìm thấy
  } else {
    return -1; // Nếu không tìm thấy, trả về giá trị -1
  }
}

console.log(linearSearchWithSentinel(arr, 8));
