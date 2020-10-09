//let item1= 'Com gao lut';
//let item2= 'Chao ga';
//let item3= 'Burger';
//let item4= 'Khoai tay chien'; ( khai báo từng item ntn rất tốn thời gian )

// let menu = [];           //( đây là khai báo mảng rỗng )
// console.log(menu);

// let menu = ['Chao ga'];
//     console.log(menu);

// let menu = ['Chao ga','Burger','Khoai Tay Chien'];
//     console.log(menu);





// //Ex1 + EX 2 + Ex 3
// let movies= ['HIMYM', 'FRIEND', 'Rocky123']
//     console.log(movies);

// let newMovies = prompt("Nhập bộ phim mà bạn thích");
// movies.push(newMovies);                                //gõ lệnh: movies.push("tên bộ phim") ( để push thẳng item vào mảng)
// console.log(movies);

// let i= prompt("Nhập thứ tự phim bạn chọn");             // thứ tự in ra ở đây hay còn gọi là index dùng để in ra 1 thằng.
// console.log(movies[i]);





//Ex4 UPDATE

// let menu= ['Com', 'Bun', 'Pho', 'Mien']
// console.log(menu);

// let a=prompt("Nhập vào thứ tự bạn muốn");
// console.log(menu[a]);
// let i = prompt("Nhập vào tên món ăn bạn thích");
// menu[a] = i;
// console.log(menu);





// 7 DELETE + EX5
let gear = ['Laptop', 'Mouse', 'Screen'];
console.log(gear);

// gear.splice(0,1);  // Lệnh để xóa - Bên trái là thử tự bắt đầu xóa- Bên phải là số phần tử muốn xóa )
// console.log(gear);

let a= prompt("Thứ tự bạn muốn xóa ");
let b= prompt("Số linh kiện bạn muốn xóa ")
gear.splice(a,b);
console.log(gear);
