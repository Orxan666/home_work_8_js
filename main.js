// 1-ci sual

// let myArr = ["kitab", "defter", "qelem", "pozan"];
// myArr.splice(2, 1, "jurnal", "karandas");
// console.log(myArr);
// --------------
// 2-ci sual
// const myArr = [2, 5, 32, 12, 6];
// let result =myArr.every(function(el){
//     return el%2===0
//  })
// console.log(result)

// ------------
// const result = myArr.some(function (el) {
//     return el%2===0
// });

// console.log(result);

// 3-cu sual

// ---------------
// const myArr = [-23, 5, 34, 3, -3, 0];

// const result = myArr.filter(function (x) {
//   return x > 0;
// });
// // console.log(result);

// function square(number) {
//   return number * 2;
// }
// let total = result.map(square);
// console.log(total);

// const bigArr=total.sort(function(a,b){
//     return b-a
// })
// console.log(bigArr);

// let myArr = [2, 4, 1, 6, 5];
// console.log(
//   myArr.sort(function (a, b) {
//     return b - a;
//   })
// );

// ---------
// 4-cu sual
// const button = "save";
// const button = "cancel";
// const button = "update";

// switch (button) {
//   case "save":
//     console.log("Yadda saxlanildi");
//     break;
//   case "cancel":
//     console.log("Cixis edildi");
//     break;
//   case "update":
//     console.log("Deyisiklikler bas verdi");
//     break;

//   default:
//     console.log("zehmetolmasa buttonlardan birini daxili edin");
//     break;
// }
// -------------------------
// 5 ci sual
const myArr = [4, 6, 3, 2, 5, 7];
let num = [];

myArr.map((e) => (e % 2 == 0 ? num.push("cut") : num.push("tek")));
console.log(num);

// ------------
// 6-ci sual

// const result =Array.from("abcfdeg")
// console.log(result);

// 7-ci sual
// const obj1={cloud: 'bulud', book: 'kitab', juice: 'meyve siresi'}
// const obj2={phone: 'telefon', window: 'pencere'}

// const result=Object.assign(obj1,obj2)

// console.log(Object.values(result));

// let numbers = [2, 3, 5, 7, 11, 13, 17, 20, 34, 54, 55, 76, 98];

// let newArray = numbers.slice(3, 7);
// console.log(newArray);
// let newArray = numbers.splice(3, 2, 5);
// console.log(numbers);

// if (ad === "AbdulRashid") {
//   console.log("salam 1");
// } else {
//   console.log("salam 2");
// }

// ad==="AbdulRashid"? console.log("salam 1"):console.log("salam 2")
// let text = ['j','a','v','a'];
// console.log(Array.isArray(text));

// let button = "cancel";
// let button="update"
