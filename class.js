// function test(){
//   var x=1
//   x=2
//   console.log(x)
// }
// test()


// const x=1
// y=2
//  console.log(x)

// function sum(a=13,b=14){
//     console.log(a+b)
// }
//  sum()

// const sum=(num1,num2)=> {

//     return num1+num2
// }
// console.log(sum(1,2));

// const kec={
// name:'gautam',
// class:12,
// rollno:33

// }
// console.log(kec.name)
// console.log(kec.class)

// for(var i=0;i<=3;i++){
//     console.log(i)
// }

// for(var i=0;i<=3;i++){
//     setTimeout(()=>console.log(i),1000) //same memory space so it will replace the previous o/p and give the final o/p
// }
// for(let i=0;i<=3;i++){
//     setTimeout(()=>console.log(i),1000) //different memory space so different o/p
// 
arr=[1,10,20,30,40]
// for(let i=0;i<=5;i++){
//     setTimeout(()=>console.log(arr[i]),1000)
// }
// arr.map((i)=>console.log(i)) //use map with argurement instead of for loop

 const arr2= arr.filter((i)=>i<20)
// console.log(arr2)

// console.log(...arr)

arr3=[...arr,...arr2] //... will split array and , will combine them
console.log(arr3)