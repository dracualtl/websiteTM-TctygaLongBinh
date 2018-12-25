var bienanh=0;


function chonanh(){
    
}

function check(){
    document.images["imagesp1"].src=$("#file").val();
    alert($("#file").val());
}

function xoasp(ten,ma){
    document.getElementById("xacnhanxoasp").style.display="block";
    document.getElementById("tenspctz").textContent=ten;
    document.getElementById("maspctz").textContent=ma;
    
}

function xoaluon(mas){
    $.post("http://localhost:3000/xoasanpham",{sanphamcanxoa:mas},function(data){
        console.log("da gui du lieu len server",data);
    });
    alert("Đã xóa sản phẩm");
    window.location="../San pham/tatcasp.html";
}

function suasp(vt){
    document.images["imagespsua"].src=document.getElementsByClassName("linkanh")[vt].textContent;
    document.getElementById("vtsp").textContent=vt;
    document.getElementById("mahang1").disabled=true;
    document.getElementById("mahang1").value=document.getElementsByClassName("masp102")[vt].textContent;
    document.getElementById("tenhang1").value=document.getElementsByClassName("tensp")[vt].textContent;
    document.getElementById("giahang1").value=document.getElementsByClassName("giasp")[vt].textContent.slice(0,Number(document.getElementsByClassName("giasp")[vt].textContent.length)-4);
    document.getElementById("quycach1").value=document.getElementsByClassName("quycach1")[vt].textContent;
    document.getElementById("editForm").style.display="block";

}

function luusp(vt){
    var ma=document.getElementById("mahang1").value;
    var ten=document.getElementById("tenhang1").value;
    var gia=document.getElementById("giahang1").value;
    var quycach=document.getElementById("quycach1").value;
    if(bienanh==1){
        $.post("http://localhost:3000/guisanphamluu1",{xtenhang:ten,xmahang:ma,xgia:gia,xquycach:quycach},function(data){
            console.log("da gui du lieu len server",data);
        });
        document.getElementById("btnanh2").click();
        alert("Lưu thành công 1");
    }else{
        $.post("http://localhost:3000/guisanphamluu",{xtenhang:ten,xmahang:ma,xgia:gia,xquycach:quycach},function(data){
            console.log("da gui du lieu len server",data);
        });
        alert("Lưu thành công");
        window.location="../San pham/tatcasp.html"
    }
    bienanh=0;
}

function km(val){
    var date = new Date();
    //var ngayhientai=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    document.getElementById("ngaybd").valueAsDate=new Date();
    document.getElementById("ngaykt").valueAsDate=new Date();
    document.getElementById("tenspkm").textContent=document.getElementsByClassName("tensp")[val].textContent;
    document.getElementById("maspkm").textContent=document.getElementsByClassName("masp102")[val].textContent;
    document.getElementById("khuyenmai").style.display="block";
}

function khuyenmai(){
    var makm= document.getElementById("maspkm").textContent;
    var gtkm= document.getElementById("txtgtkm").value;
    var date = new Date();
    var ngaybd = document.getElementById("ngaybd").value;
    var ngaykt = document.getElementById("ngaykt").value;
    var ngaybatdau= new Date(ngaybd);
    var ngayketthuc= new Date(ngaykt);
    var gt=Number(Math.ceil((ngaybatdau-date)/(24*60*60*1000)));
    if(Number(Math.ceil((ngayketthuc-ngaybatdau)/(24*60*60*1000)))<0){
        alert("Ngày kết thúc phải từ ngày bắt đầu trở đi");
    }else if(gt<0){
        alert("Ngày bắt đầu không hợp lệ");
        document.getElementById("ngaybd").valueAsDate=new Date();
    }else{
        $.post("http://localhost:3000/themkhuyenmai",{makhuyenmai:makm,giatrikhuyenmai:gtkm,thoigiankhuyenmai:ngaybd,tgktkm:ngaykt},function(data){
            console.log("da gui du lieu", data);
        });
        alert("Thêm khuyến mãi thành công");
        window.location="../San pham/tatcasp.html";
    }
    
}

function previewFile(){
    var preview = document.getElementById('imagesp1');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    if(file.name.length==0){
        alert("bạn chưa chọn ảnh");
    }else{
        reader.onloadend = function () {
            preview.src = reader.result;
            document.getElementById("btnthem").disabled=false;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    
}

function previewFile3(){
    var preview = document.getElementById('imagespsua');
    var file    = document.querySelector('input[id=file2]').files[0];
    var reader  = new FileReader();
    if(file.name.length==0){
        alert("bạn chưa chọn ảnh");
    }else{
        reader.onloadend = function () {
            preview.src = reader.result;
            bienanh=1;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    
}


function themsp(){
    if(document.getElementById("mahang").value.length==0 || document.getElementById("tenhang").value.length==0 || document.getElementById("quycach").value.length==0 || document.getElementById("giahang").value.length==0){
        alert("Mời bạn nhập dữ liệu đầy đủ");
    }else if(document.getElementById("giahang").value<1000 || document.getElementById("giahang").value>999000 ){
        alert("Số tiền không hợp lệ");
        document.getElementById("giahang").value=1000;
    }else{
        $.get("http://localhost:3000/ttt",function(data){
            var massp=[];
            var biengt=false;
            data.msp.forEach(function(val){
                massp.push(val);
            });
            for(var i=0;i<massp.length;i++){
                if(massp[i]==document.getElementById("mahang").value){
                    biengt=true;
                }
            }
            if(biengt==true){
                alert("Mã sản phẩm đã tồn tại");
            }else{
                //document.getElementById("addForm").style.display="none";
                $.post("http://localhost:3000/guisanpham",{xtenhang:document.getElementById("tenhang").value,xmahang:document.getElementById("mahang").value,xgia:document.getElementById("giahang").value,xquycach:document.getElementById("quycach").value},function(data){
                    console.log("da gui du lieu len server",data);
                });
                alert("Thêm thành công");
                document.getElementById("btnanh").click();
            }
        });
    }
    
    // alert("da vao day r");
    // 
}