var header = document.getElementById('header');
var menu = document.getElementById('menu-mobile');
var current_height = header.clientHeight; //  Lấy chiều cao hiện tại

// Khi bấm chuột sẽ chạy sự kiện
menu.onclick = function () {
    var isClosed = header.clientHeight === current_height;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }

    // Khi bấm vào menu thì sẽ set height = null
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            console.log(this);
            if (isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        }
    }
}