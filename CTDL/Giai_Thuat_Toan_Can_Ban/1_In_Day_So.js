/*
Hàm promt() trong JavaScript được sử dụng để hiển thị hộp thoại thông báo nhắc người dùng nhập vào dữ liệu dưới dạng văn bản. Khi hộp thoại thông báo hiện lên, nó sẽ đợi cho đến khi người dùng gửi văn bản đó hoặc từ chối nhập dữ liệu và huỷ hộp thoại. Lúc đó, hộp thoại thông báo sẽ bị đóng.

*/

// let n = prompt("Nhap mot so nguyen duong n: ");

let n = 10;

const _print = (_n) => {
  if (isNaN(_n) || _n < 0) {
    console.log("Nhap sai!");
    return;
  } else {
    for (let i = 0; i < _n; i++) {
      console.log(i);
    }
  }
};

_print(n);

/* 

Run : node In_Day_So.js 
Output:
0
1
2
3
4
5
6
7
8
9
*/
