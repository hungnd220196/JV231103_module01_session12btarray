//bt1

// for(let i = 1; i<=9; i++){
//     for(j=1;j<=10;j++){
//         console.log(i+"x"+j+"="+ i*j);

//     }
// }

// for (let i = 1; i <= 9; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(`${i}x${j}=` + i*j);
//   }
// }

//bt2
// let N = parseInt(prompt("mời bạn nhập số nguyên N:"));
// let total = 0;
// for (i = 1; i <= N; i++) {
//   total = total + i;
// }
// console.log(total);

//bt3
// let m = parseInt(prompt("mời bạn nhập số m"));
// let n = parseInt(prompt("mời bạn nhập số n"));

// for(m; m<=n; m++){
//     if(m%2===0){
//         console.log(m+"là số chẵn");

//     }else{
//         console.log(m+"là số lẻ");
//     }
// }

//bt4

// let chuoi = prompt("Nhập chuỗi cần đảo ngược:");

// let chuoiDaoNguoc = "";

// for (let i = chuoi.length - 1; i >= 0; i--) {
//   chuoiDaoNguoc += chuoi[i];
// }

// console.log("Chuỗi đảo ngược là: " + chuoiDaoNguoc);

//bt5

// let numbers = 20;

// let a = 1, b = 1, c;

// console.log("20 số đầu tiên trong chuỗi Fibonacci:");

// for (let i = 0; i <numbers; i++) {
//     console.log(a);

//     c = a;
//     a = b;
//     b = c + b;
// }

// let a1 = 0;
// let a2 = 1;
// let a3 = a1 + a2 ;
// let fibonacystring = a1 +" " + a2 +" ";

// for(let i=2; i<20;i ++){
//     a1 =a2;
//     a2=a3;
//     a3 = a1 + a2;
//     fibonacystring = fibonacystring+ a3 +" ";
// }
// console.log(fibonacystring);

//bt6
// let N = parseInt(prompt("mời bạn nhập số: "));
// let total = 0;
// for (let i = 1; i <= N / 2; i++) {
//   if (N % i === 0) {
//     total += i;
//   }
// }
// if ((total = N)) {
//   console.log(N + " là số hoàn hảo");
// } else {
//   console.log(N + " là số không hoàn hảo");
// }


