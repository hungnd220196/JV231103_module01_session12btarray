//cách tạo mảng
// c1: sử dụng đối tượng array
// const array1 = newarray(1, "A", null, undefined, NaN);
// for (let i = 0; i < array1.length; i++) {
//   console.log("index", i); // vị trí
//   console.log(array1[i]); // giá trị của các phần tử
// }

//c2 khai báo theo kiểu literal
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

// từ khóa typeof để kiểm tra kiểu dữ liệu của biến
console.log(Array.isArray(array2));
// các thao tác làm việc với bảng
//1. Thêm phần tử cuối bảng
array2.push(6);
console.log("mang sau khi push", array2);
//2. xóa phần tử cuối bảng
array2.pop();
console.log("mang sau khi pop", array2);
//3 thêm phần từ đầu mảng
array2.unshift(0);
console.log("mang sau khi unshift", array2);
//4 del phần từ đầu mảng
array2.shift();
console.log("mang sau khi shift", array2);
//kiểm tra độ dài của mảng
const arrayLength = array2.length;
console.log("độ dài của mảng:", arrayLength);

// chuyển dổi 1 mảng thành 1 chuỗi
const arrayConvertString = array2.toString();
console.log("mang sau khi chuyen doi", arrayConvertString);

// đảo ngược các phần tử của mảng
array2.reverse();
console.log(array2);
// nối nhiều mảng với nhau
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2];
console.log(array3);
// cat cac phan tu trong mang
const newarray = array3.slice(1, 2);
console.log(newarray);

// Cho 1 mảng danh sách giá cả const prices = [100,300,500,600,900]. Tính tổng các phần tử trong mảng
let total = 0;
const prices = [100, 300, 500, 600, 900];
for (i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(total);

//tạo ra 1 mảng rỗng tên là product. Viết 1 menu
// nếu chọn 1 thì cho phép thêm sản phẩm ở cuối mảng( sp lấy từ trình duyệt)
// nếu chọn 2 thì cho phép xóa sản phẩm ở cuối mảng
// nếu chọn 3 thì in ra mảng
//nếu chọn 4 thì thoát chương trình
// nếu chọn khác( 5,6,7) thì yêu cầu nhập lại

let product = [];
let number;

while (number !== 4) {
  number = parseInt(prompt("mời bạn nhập số"));
  switch (number) {
    case 1:
      let itemproduct = prompt("mời bạn nhập sản phẩm");
      product.push(itemproduct);
      break;
    case 2:
      product.pop();
      break;
    case 3:
      alert(product);
      break;
    case 4:
      alert("thoát chương trình");
    default:
      alert("mời bạn nhập lại");
      break;
  }
}
