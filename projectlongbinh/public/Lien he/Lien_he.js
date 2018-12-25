function guiLienHe() {
    var hoten, email, noidung, ngay, tt;
    hoten = document.getElementById("ten");
    email = document.getElementById("email");
    noidung = document.getElementById("noidung");
    var date = new Date();
    ngay = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    tt = "Chưa trả lời"

    if (hoten.value == "" || email.value == "" || noidung.value == "") {
        
        alert("Xin nhập đầy đủ thông tin.");
    } else {
        $.post("http://localhost:3000/guilienhe", {xhoten: hoten.value, xemail: email.value, xnoidung: noidung.value, xtgian: ngay, xtthai: tt}, function(data){
            console.log("da nhap kho", data)
        });
        alert("Đã gửi liên hệ");
        window.location = "../Lien%20he/Lien_he.html";
    }
    
}