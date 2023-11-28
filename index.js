// const age =33; 

//         if (age >= 25) {
//     console.log("მომხმარებლის ასაკი 25_ზე მეტია");
// }       else {
//     console.log("მომხმარებლის ასაკი 25_ზე ნაკლებია");
// }





 
// const weekDay = 12;
   
// switch (weekDay) {
//         case 1:
//     console.log("Sunday")
//     break;
//         case 2:
//     console.log("Monday")
//     break;
//         case 3:
//     console.log("Tuesday")
//     break;
//         case 4:
//     console.log("Wednesday")
//     break;
//         case 5:
//     console.log("Thursday")
//     break;
//         case 6:
//     console.log("Friday")
//     break;
//         case 7:
//     console.log("Saturday")
//     break;
//                 default:
//             console.log("Your week day is not correct");
// }


// const array = [1,2,3,8,9,12,14,15,17,20,22,19,10,7,28,30,35,40,27]

// console.log(array)




// let arraysum = 0
// for (let i = 0; i < array.length; i ++){
//   arraysum+=array[i]
  
// }
// console.log(arraysum)




// let luwiArr = []
// for (let i = 0; i < array.length; i ++){
//     if(array[i]%2===0){ 
//  luwiArr.push(array[i])
// }
// }
// console.log(luwiArr)
    



// let kentiArr = []
// for (let i = 0; i < array.length; i ++){
//     if(array[i]%2===1){ 
//  kentiArr.push(array[i])
// }
// }
// console.log(kentiArr)





// const arrayArithmetic = [12,14,1,8,5,9,32,43,22,16,14,9,18,26,13,19,25,32]

// console.log(arrayArithmetic)




// let arrayjami = 0

// for (let i = 0; i < arrayArithmetic.length; i ++){
//     arrayjami+=array[i]
  
// }
//  console.log(arrayjami)


// let arrarithmetic = 0
// for (let i = 0; i < arrayArithmetic.length; i ++){
//     arrarithmetic = arrayjami / arrayArithmetic.length
// }
// console.log(arrarithmetic)


// // srtingis gadayvana nambershi
// const num =123
// const text = '123'

// const textNum = String(num)
// const numText = Number(text)


// // success da resolve eroufanqshenit


// const request = new Promise((resolve, reject) => {
//     resolve('succ');
//     reject('error');
// });

// const isprinterworks = false

// const printer = new Promise((resolve, reject) => {
//   if(isprinterworks) {
//     resolve('document')
//   }else {
//     reject('X')
//   }
// })

// printer
//     .then(success => console.log('success =',success))
//     .catch(error => console.log('error =',error))



// // const isprinterworks = false

// // const printer = new Promise((resolve, reject) => {
// //   if(isprinterworks) {
//     // resolve('document')
//     // setTimeout(resolve, secondsToMilliseconds(3), 'printer is working')
// //   }else {
//     // reject('X')
//     // settimeout(reject, secondsToMilliseconds(3), 'printer is not working')
// //   }
// // })

// // taimauti da intervali


// const second = 1000
// const secondsToMilliseconds = (second) => {
//     return second * 1000
// }

// setTimeout(() => console.log('daibechda 3 wamshi'), secondsToMilliseconds (3))
// // setInterval(() => console.log('daibechdeba yovel 5 wamshi'), secondsToMilliseconds (5))

// setTimeout(() => console.log('daibechda 3 wamshi'), 3000)
// // setInterval(() => console.log('daibechdeba yovel 5 wamshi'), 5000)




// const promise1 = new Promise((resolve, reject) => {
//     resolve('success promise 1')
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, 'success promise with timeout')
// });

// const promise3 = new Promise((reslove, reject) => {
//     reject('error promise 3')
// });

// Promise.all([promise1,promise2,promise3])
// .then((values) => {console.log(values) })
// .catch(error => console.log(error))



 

// shualeduri N3

const usersArray = [
    {name: 'ზურა', age: 34 },
    {name: 'ვაჟა', age: 31 },
    {name: 'მარიამი', age: 13 }
    ]
   
   
    const asakisJami = usersArray.reduce((el, sum) => {
          el += sum.age
        return el;
                     }, 0)

    console.log(asakisJami)




const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let firstname = document.querySelector('#firstName')
    let lastname = document.querySelector('#lastName')
    let genders = document.querySelector('#gender')


        console.log(firstname.value);
        console.log(lastname.value);
        console.log(genders.value);
})





const stringsArray = ["abasha", "batummi", "qutaisi", "zestafoni", "nikorcminda"];

const findLongestWord = (arr) => arr.reduce((element, current) => {
  if(current.length > element.length){
    return current;
  }else{
    return element;
  }
},);


console.log(findLongestWord(stringsArray));


