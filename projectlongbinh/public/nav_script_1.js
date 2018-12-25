// Login
function login(){
    var id, pass, taikhoan, dangnhap;
    id = document.getElementById("tendn").value;
    pass = document.getElementById("matkhau").value;
    if ((id === "id") && (pass === "pass")) {
        document.getElementById("chuadangnhap").style.display = "none";
        window.alert("Bạn đã đăng nhập thành công");
        document.getElementById("dadangnhap").style.display = "block";
    } else {
        window.alert("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
}

function logout() {
    document.getElementById("dadangnhap").style.display = "none";
    document.getElementById("chuadangnhap").style.display = "block";
}

// Hide nav when scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Slide show
var slideIndex = 1;
showSlide(slideIndex);

function plusslide(n) {
    showSlide(slideIndex += n);
}

function currentslide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

