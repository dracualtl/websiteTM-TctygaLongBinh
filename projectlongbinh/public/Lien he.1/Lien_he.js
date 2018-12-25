function guiLienHe() {
    var hoten, email, noidung, ngay, tt;
    hoten = document.getElementById("ten");
    email = document.getElementById("email");
    noidung = document.getElementById("noidung");
    var date = new Date();
    ngay = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();
    tt = "Chưa trả lời"
    $.post("http://localhost:3000/guilienhe", {xhoten: hoten, xemail: email, xnoidung: noidung, xtgian: ngay, xtthai: tt}, function(data){
        console.log("da nhap kho", data)
    });

    // alert("Đã gửi liên hệ");
    window.location = "../Lien%20he/Lien_he.html";
}