const age =33; 

        if (age >= 25) {
    console.log("მომხმარებლის ასაკი 25_ზე მეტია");
}       else {
    console.log("მომხმარებლის ასაკი 25_ზე ნაკლებია");
}





 
const weekDay = 12;
   
switch (weekDay) {
        case 1:
    console.log("Sunday")
    break;
        case 2:
    console.log("Monday")
    break;
        case 3:
    console.log("Tuesday")
    break;
        case 4:
    console.log("Wednesday")
    break;
        case 5:
    console.log("Thursday")
    break;
        case 6:
    console.log("Friday")
    break;
        case 7:
    console.log("Saturday")
    break;
                default:
            console.log("Your week day is not correct");
}


const array = [1,2,3,8,9,12,14,15,17,20,22,19,10,7,28,30,35,40,27]

console.log(array)




let arraysum = 0
for (let i = 0; i < array.length; i ++){
  arraysum+=array[i]
  
}
console.log(arraysum)




let luwiArr = []
for (let i = 0; i < array.length; i ++){
    if(array[i]%2===0){ 
 luwiArr.push(array[i])
}
}
console.log(luwiArr)
    



let kentiArr = []
for (let i = 0; i < array.length; i ++){
    if(array[i]%2===1){ 
 kentiArr.push(array[i])
}
}
console.log(kentiArr)





const arrayArithmetic = [12,14,1,8,5,9,32,43,22,16,14,9,18,26,13,19,25,32]

console.log(arrayArithmetic)




let arrayjami = 0

for (let i = 0; i < arrayArithmetic.length; i ++){
    arrayjami+=array[i]
  
}
 console.log(arrayjami)


let arrarithmetic = 0
for (let i = 0; i < arrayArithmetic.length; i ++){
    arrarithmetic = arrayjami / arrayArithmetic.length
}
console.log(arrarithmetic)
