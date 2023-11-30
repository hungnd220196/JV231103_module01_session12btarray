// Chuyển 1 mảng về 1 chuỗi
const array = ["A", "B", "C", "D"];
const newarray = array.toString();
console.log("mảng sau khi chuyển đổi: ", newarray);

//Hàm join()
const newarray1 = array.join(", ");
console.log("newarray1:", newarray1);

// chuyển đổi 1 chuỗi thành 1 mảng
const myString = "a b c d e f g h i j k";
const stringConvertArray = myString.split(" ");
console.log("Sau khi split", stringConvertArray);

//bt1
const myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
const newMyColor = myColor.toString();
console.log("Chuỗi sau khi nối", newMyColor);

//bt2
// const number = +prompt("mời bạn nhập số");
// const newString = number.toString();
// const result = [newString[0]];
// for (let i = 1; i < newString; i++) {
//   if (newString[i - 1] % 2 === 0 && newString[i] % 2 === 0) {
//     result.push("_", newString[i]);
//   } else {
//     result.push(newString[i]);
//   }
// }
// console.log(result.join(""));

let string = prompt("mời bạn nhập chuỗi");
let newString = "";
for (i = 0; i < string.length; i++) {
  newString += string[i];
  if (string[i] % 2 === 0 && string[i + 1] % 2 === 0) {
    newString += "_";
  }
}
console.log(newString);

//bt3

