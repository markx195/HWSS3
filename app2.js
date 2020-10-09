let menu=['Chao', 'Com', 'Burger','Pizza'];
console.log(menu);

       //(menu.length thay đổi theo phần tử có )
for (let i = 0; i<menu.length; i++){
    console.log(`${i+1}. ${menu[i]}`); //(muốn truyền biến vào trong string thì dùng cú pháp ${tên biến}
    menu[i] = menu[i].toUpperCase();    //(cách để viết hoa tất cả các phần tử )
}
console.log(menu);
// ( cấu tạo vòng for gồm : điều kiện đầu; điều kiện chạy; điều kiện cập nhập)
// for dùng để lúc code biết số vòng lập xác định
// while dùng để code khi không biết số lần lặp xác định.



