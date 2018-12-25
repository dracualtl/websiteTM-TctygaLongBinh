//  var socket = io("https://demologinio.herokuapp.com/");

//var socket = io("http://localhost:3000");

var sott = [];

var us = document.getElementById("txtUser");

var taikhoan = $("#txtUser").val();

var passw = $("#txtPass").val();

var trangthai=false;

var vaitro="";

socket.on("username-fail", function(){
    alert($("#txtUsername").val() + " da ton tai !!!")
});

socket.on("username-successfull", function(){
    $("#currentUser").html($("#txtUsername").val());
    $("#loginForm").hide(2000);
    $("#chatForm").show(1000);
});

socket.on("login-user-successfull", function(){
    // $("#currentUser").html(data)
    socket.emit("client-send-p",$("#txtPass").val());
});

socket.on("login-user-fail", function(){
    alert("Tai khoan " +$("#txtUser").val() + " khong ton tai");
});

socket.on("login-successfull", function(data){
    vaitro=data;
    xetquyen();
    trangthai=true;
});

socket.on("login-fail", function(){
    alert("Mat Khau Sai");
});

socket.on("server-da-nhan", function(){
    alert("Chúc Mừng Bạn Đã Đăng Ký Thành Công !!!");
});

// socket.on("server-k-nhan", function(){
//     alert("k nhan duoc");
// });

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(){
        socket.emit("client-send-Username", $("#txtUsername").val());
    });
    $("#btnLg").click(function(){
        socket.emit("client-send-u",$("#txtUser").val());
    });

    $("#btnReg").click(function(){
        //if($("#txtUser").val().length)
        //kiemtrattdky($("#txtUser").val())
        kiemtrattdky( $("#txtName").val(), $("#txtEmail").val(), $("#txtNumPhone").val(), $("#txtDiachi").val(), $("#txtQhuyen").val(), $("#txtTinhTp").val(), $("#txtQuocgia").val(), $("#txtPass").val(), $("#txtrePass").val());
        socket.emit("client-send-inf",sott);
    });


});



function kiemtrattdky(hoten,email,sdt,diachi,qh,ttp,qg,pass,repass){
    if(hoten.length<1 || email.length<1 ||sdt.length<1 || diachi.length<1 || qh.length<1 || ttp.length<1 || qg.length<1 ||pass.length<1 ||repass.length<1){
        alert("khong duoc bo trong thong tin");
    }else{
        sott.push(hoten);
        sott.push(email);
        sott.push(sdt);
        sott.push(diachi);
        sott.push(qh);
        sott.push(ttp);
        sott.push(qg);
        sott.push(pass);
    }
}
function xetquyen(){
    window.alert("da click vao day");
    if(vaitro=="ND"){
        document.getElementById("chuadangnhap").style.display = "none";
        document.getElementById("formcuakhachhang").style.display = "block";
    }else if(vaitro=="AD"){
        document.getElementById("chuadangnhap").style.display = "none";
        document.getElementById("formcuaadmin").style.display = "block";
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

//gioithieu

function gioithieu(){
    document.getElementById("chuadangnhap").style.display = "none";
    document.getElementById("formcuakhachhang").style.display = "block";
}

