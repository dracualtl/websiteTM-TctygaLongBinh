$(document).ready(function(){
    $("#btnExit1").click(function(){
        window.location="../thongtin/capnhatthongtin.html"
    })
    $("#btnSave").click(function(){
            if($("#txtId").val()=="" || $("#txtName").val()=="" || $("#txtEmail").val()=="" || $("#txtSodt").val()=="" || $("#txtDiachi").val()==""){
                alert("Không được để trống thông tin");
            }else{
                $.get("http://localhost:3000/tk",function(data){
    
                var xetid=false;
                var xetemail=false;
                var xetsdt=false;
    
                data.danhsachid.forEach(function(val) {
                    if(val==$("#txtId").val() && $("#txtId").val()!= document.getElementById("idnguoidung").textContent){
                        xetid=true;
                    }
                });
                data.danhsachemail.forEach(function(val) {
                    if(val==$("#txtEmail").val() && $("#txtEmail").val()!=document.getElementById("emailnguoidung").textContent){
                        xetemail=true;
                    }
                });
                data.danhsachsdt.forEach(function(val) {
                    if(val==$("#txtSodt").val() && $("#txtSodt").val() != document.getElementById("sdtnguoidung").textContent){
                        xetsdt=true;
                    }
                });
                if(xetid==true){
                    alert("ID đã được sử dụng");
                }else if(xetemail==true){
                    alert("Email đã được sử dụng");
                }else if(xetsdt==true){
                    alert("Số Điện Thoại đã được sử dụng");
                }else{
                    var ten = document.getElementById('txtName'); 
                    if (ten.value.length<5) { 
                             alert('Hãy Nhập Họ Tên Hợp Lệ.\n Ví dụ: Nguyễn Văn A');
                             ten.focus; 
                             return false; 
                    }
                    else{ 
                        var email = document.getElementById('txtEmail'); 
                        var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
                        if (!filter1.test(email.value)) { 
                                 alert('Hãy Nhập Địa Chỉ Email Hợp Lệ.\nVí dụ: Example@gmail.com');
                                 email.focus; 
                                 return false; 
                        }
                        else{ 
                            var sdt = document.getElementById('txtSodt'); 
                            var filter2 =  /^[0-9]+$/;
                            if (!filter2.test(sdt.value) || sdt.value.length<9 || sdt.value.length >11 ) { 
                                     alert('Hãy Nhập Số Điện Thoại Hợp Lệ.\nVí dụ: 0976545321');
                                     sdt.focus; 
                                     return false; 
                            }
                            else{ 
                                var diac = document.getElementById('txtDiachi');
                                if (diac.value.length<5) { 
                                    alert('Địa chỉ Quá Ngắn');
                                    diac.focus; 
                                    return false; 
                                }
                                else{
                                    
                                    if($("#txtPassold").val().length==0){
                                        $.post("http://localhost:3000/capnhattaikhoan1",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),SDT:$("#txtSodt").val(),Tknh:$("#txtTknh").val(),Fax:$("#txtFax").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPassnew").val()},function(data){
                                                        console.log("da gui du lieu len server: ", data);
                                                    });
                                                    alert("cập nhật thành công");
                                                    window.location="http://localhost:3000/thongtin/capnhatthongtin.html";
                                    }else{
                                        if($("#txtPassold").val()==document.getElementById("passnguoidung").textContent){
                                            var pa = document.getElementById('txtPassnew');
                                            var repa = document.getElementById('txtRepassnew');
                                            if(pa.value.length==0 || repa.value.length==0){
                                                alert("Mật khẩu mới không được trống");
                                            }else if (pa.value.length<6) { 
                                                alert('Mật Khẩu quá ngắn');
                                                pa.focus; 
                                                return false; 
                                            }
                                            else if(pa.value!=repa.value){ 
                                                alert('Mật khẩu chưa trùng nhau');
                                                pa.focus;
                                                repa.focus; 
                                                return false;
                                            } else{
                                                    $.post("http://localhost:3000/capnhattaikhoan",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),SDT:$("#txtSodt").val(),Tknh:$("#txtTknh").val(),Fax:$("#txtFax").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPassnew").val()},function(data){
                                                        console.log("da gui du lieu len server: ", data);
                                                    });
                                                    alert("cập nhật thành công");
                                                    window.location="http://localhost:3000/thongtin/capnhatthongtin.html";
                                                // }else if(stknh.value != "" && fax.value== ""){
                                                //     if (!filter3.test(stknh.value) || stknh.value.length<12 || stknh.value.length>16) { 
                                                //         alert('Hãy nhập số tài khoản ngân hàng hợp lệ');
                                                //         stknh.focus; 
                                                //         return false; 
                                                //     }else{
                                                //         console.log("post len có tknh");
                                                //         $.post("http://localhost:3000/set/reg2",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),TKNH:$("#txtTknh").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                                //             console.log("da gui du lieu len server: ", data);
                                                //         });
                                                //         alert("Đăng ký thành công");
                                                //         window.location="http://localhost:3000";
                                                //     }
                                                // }else if(stknh.value == "" && fax.value != "" ){
                                                //     if (!filter3.test(fax.value) || fax.value.length<8 || fax.value.length>11) { 
                                                //         alert('Hãy nhập số fax hợp lệ');
                                                //         fax.focus; 
                                                //         return false; 
                                                //     }else{
                                                //         console.log("post len có fax");
                                                //         $.post("http://localhost:3000/set/reg3",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),FAX:$("#txtFax").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                                //             console.log("da gui du lieu len server: ", data);
                                                //         });
                                                //         alert("Đăng ký thành công");
                                                //         window.location="http://localhost:3000";
                                                //     }
                                                // }else{
                                                //     console.log("post lên có cả 2");
                                                //     $.post("http://localhost:3000/set/reg4",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),TKNH:$("#txtTknh").val(),FAX:$("#txtFax").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                                //         console.log("da gui du lieu len server: ", data);
                                                //     });
                                                //     alert("Đăng ký thành công");
                                                //     window.location="http://localhost:3000";
                                                // }
                                            }
                                        }else{
                                            alert("Mật khẩu cũ không đúng");
                                        }
                                    }
                                    
                                } 
                            } 
                        } 
                    } 
                    
                }
            });
            }
    })
});

function loadthem1(){
    $.get("http://localhost:3000/test3",function(data){
        if(data.giatrilg=="NULL" || data.giatrilg=="CKH"){

        }else{
            document.getElementById("thongtinmacdinh").style.display="none";
            $.get("http://localhost:3000/laythongtintk",function(data1){
                document.getElementById("idnguoidung").textContent=data1.idget;
                document.getElementById("tennguoidung").textContent=data1.hotenget;
                document.getElementById("emailnguoidung").textContent=data1.emailget;
                document.getElementById("sdtnguoidung").textContent=data1.sdtget;
                document.getElementById("diachinguoidung").textContent=data1.dcget;
                document.getElementById("vaitronguoidung").textContent=data1.vaitroget;
                document.getElementById("stknguoidung").textContent=data1.stkget;
                document.getElementById("faxnguoidung").textContent=data1.faxget;
                document.getElementById("passnguoidung").textContent=data1.passget;
            });
            document.getElementById("thongtintaikhoan").style.display="block";
        }
    })
}

function suathongtin(){
    document.getElementById("txtId").value = document.getElementById("idnguoidung").textContent;
    document.getElementById("txtId").disabled=true;
    document.getElementById("txtName").value = document.getElementById("tennguoidung").textContent;
    document.getElementById("txtEmail").value = document.getElementById("emailnguoidung").textContent;
    document.getElementById("txtSodt").value = document.getElementById("sdtnguoidung").textContent;
    document.getElementById("txtDiachi").value = document.getElementById("diachinguoidung").textContent;
    document.getElementById("txtTknh").value = document.getElementById("stknguoidung").textContent;
    document.getElementById("txtFax").value = document.getElementById("faxnguoidung").textContent;
    document.getElementById("thongtintaikhoan").style.display="none";
    document.getElementById("suataikhoan").style.display="block";
}