//(cách để kiểm tra người dùng nhập có đúng không)

// let n =Number(prompt("Enter a number"))
// console.log(n);

// if(n) {
//     console.log('Is number');
// }
// else{
//     console.log("Not a Number");
// }



// let n;
// while(true){
//     n= Number(prompt('Enter a Number'));
//     if (n){
//         break;
//     }
// }
// console.log(n);




//Ex14

// let str;
// while(true){
//     str = prompt("what's your name");
//     let n = str.length;
//     if(n <= 15){
//         alert("Good User Name");
//     break;
//     }
//     else{ 
//         alert('The User name is too Long');
//     }
// }
// console.log(str);




//Ex15
while(true) {
let n = prompt(`How many legs does a spider have ?
    1. None
    2. 4 legs
    3. 8 legs
    4. 12 legs`)
    if(n == 3){
        alert("Bravo, you are correct");
    break;
    }
    else if(n != 3 && n != 1 && n != 2 && n != 4){
        alert("Hahaha, try again")
    }
    else{
        alert("Good luck next time");
    }
}




