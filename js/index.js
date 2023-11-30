// Khai báo 1 mảng gồm 10 số nguyên
// Cú pháp: từ_khóa_khai_báo tên mảng = [phẩn tử trong mảng, phần tử trong mảng...];

const arrayNumber = [1, 3, 5, 7, 9, 11, 13];
console.log(arrayNumber);

// // truy xuất hoặc lấy ra từng phần tử của mảng
// // cách 1:
// console.log("số lượng phần tử trong mảng", arrayNumber.length);
// console.log("phần tử của mảng tại vị trị thứ 5: ", arrayNumber[4]);

// //cách 2: Dùng vòng lặp
// for(let i = 0; i < arrayNumber.length; i ++){
//     console.log("Vị trí trong mảng", i);
//     console.log("Phần tử ", arrayNumber[i]);
// }

// const arrayNumber =[0,2,3,4324,10,5,52,4,4,2,1,31,23,"nguyen duc hung",null];

// for(i=0 ; i < arrayNumber.length;i++){
//     // console.log(arrayNumber[i]);
//     if(arrayNumber[i]==="nguyen duc hung"){
//         console.log("vi tri thay",i);
//     }

// }

// các thao tác với mảng
// 1. thêm phần tử vào khối mảng push()
// arrayNumber.push(10);
// console.log("mảng sau khi push: ", arrayNumber);

// // 2. Xóa phần tử cuối bảng
// arrayNumber.pop();
// console.log("mảng sau khi pop", arrayNumber);
// // 3. Thêm phần tử đầu mảng
// arrayNumber.unshift(0);
// console.log("mảng sau khi unshift: ", arrayNumber);

// // xóa phần tử đầu bảng
// arrayNumber.shift();
// console.log("mảng sau khi shift: ", arrayNumber);

// //Nối các mảng lại với nhau
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let newArray = array1.concat(array2);
// // let newArray = [...array1,...array2]; cách 2
// console.log("mảng mới: ", newArray);

// //Hàm forEach() => lập các phần tử của mảng

// arrayNumber.forEach((array) => {
//   console.log(array);
// });

//1. Đảo ngược các phần tử của mảng
//2. tìm kiếm vị trí xuất hiện của 1 phần tử trong mảng, dữ liệu lấy từ browser
//3. Cho 1 mảng, hãy sắp xếp mẩng đó theo thứ tự tăng dần.
//4. Hãy tìm giá trị nhỏ nhất lớn nhất trong bảng.

const array3 = [3, 2, 6, 9, 8, 7];

// for (let i = array3.length - 1; i >= 0; i--) {
//   console.log(array3[i]);
// }

let element = +prompt(" mời bạn nhập số: ");
let index; // khai báo biến để lưu trữ vị trí của phần tử tìm thấy trong mảng
for (let i = 0; i < array3.length; i++) {
  if (array3[i] === element) {
    index = i;
    break; 
  } else {
    index = -1;
  }
}

if (index !== -1) {
  console.log("Vi tri tim thay: ", index);
} else {
  console.log("Khong tim thay");
}

