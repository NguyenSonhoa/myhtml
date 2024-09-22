const texts = [
    "Bạn có biết rằng đây là website\nđầu tiên của Hoàng Sơn?",
    "Mình là 1 Web developer thực tập sinh\nđây là website đầu tiên của mình.",
    "Các bạn có thể tham khảo\nwebsite của mình."
];

let index = 0;
const displayTime = 5000; // 5000ms = 5 giây

function showText() {
    const textElement = document.getElementById("text");
    textElement.style.animation = 'none';
    textElement.offsetHeight;
    textElement.innerText = texts[index];
    textElement.style.animation = 'slideUp 0.3s ease-in-out forwards'; // Chạy lại animation
    index = (index + 1) % texts.length;
    }

let currentPage = 1;

function switchPage(page) {
    // Xử lý di chuyển viền từ trang hiện tại đến trang mới
    let home1 = document.getElementById('home1');
    let banners = document.getElementsByClassName('banner');
    let banners2 = document.getElementsByClassName('banner');
    let contents = document.getElementsByClassName('content');
    let home2 = document.getElementById('home2');
    let home3 = document.getElementById('home3');
    let page2 = document.getElementById('page2');
    let page3 = document.getElementById('page3');

    if (page === 1 && currentPage !== 1) {
        // Trở về trang 1
        page2.classList.remove('pg2');
        page3.classList.remove('pg3');
        home1.classList.add('active');
        home2.classList.remove('active');
        home3.classList.remove('active');
        for (let banner of banners) {
            banner.classList.remove('hide');
        }
        for (let content of contents) {
            content.classList.remove('hide');
        }
        for (let banner of banners2) {
            banner.classList.remove('hide2');
        }
    } else if (page === 2 && currentPage !== 2) {
        // Hiển thị trang 2 và chuyển viền từ ô 1 sang ô 2
        page2.style.display = 'flex'; // Hiển thị trang 2
        setTimeout(function() {
            page2.classList.add('pg2');
        }, 50); // Hiệu ứng trượt mượt hơn
        // Chuyển viền từ trang 1 sang trang 2
        home1.classList.remove('active');
        page3.classList.remove('pg3');
        home2.classList.add('active');
        home3.classList.remove('active');
        for (let banner of banners) {
            banner.classList.add('hide');
        }
        for (let content of contents) {
            content.classList.add('hide');
        }
        for (let banner of banners2) {
            banner.classList.remove('hide2');
        }
    } else if (page === 3 && currentPage !== 3) {
        // Hiển thị trang 3 và chuyển viền từ ô 1 sang ô 3
        page3.style.display = 'flex'; // Hiển thị trang 3
        setTimeout(function() {
            page3.classList.add('pg3');
        }, 100); // Hiệu ứng trượt mượt hơn

        // Chuyển viền từ trang 1 sang trang 2
        page2.classList.remove('pg2');
        home1.classList.remove('active');
        home2.classList.remove('active');
        home3.classList.add('active');
        for (let banner of banners) {
            banner.classList.add('hide');
        }
        for (let content of contents) {
            content.classList.add('hide');
        }
        for (let banner of banners2) {
            banner.classList.remove('hide2');
        }
    }
    currentPage = page; // Cập nhật trang hiện tại
}

// 
document.getElementById('home1').classList.add('active');
let banners = document.getElementsByClassName('banner');
let banners2 = document.getElementsByClassName('banner');
for (let banner of banners) {
    banner.classList.remove('hide');
}
for (let banner of banners2) {
    banner.classList.remove('hide2');
}
// Lặp qua từng phần tử của contents để hiển thị chúng
let contents = document.getElementsByClassName('content');
for (let content of contents) {
    content.classList.remove('hide');
}

setInterval(showText, displayTime);
showText();