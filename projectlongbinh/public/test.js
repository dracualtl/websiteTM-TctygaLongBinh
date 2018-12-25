var danhsachgia=[];
var taikhoan;
var madonhangcanxem=0;
var doigia=[];
var fter=`<div class="row">
<div class="columntype1">
    <img src="lbf.png" alt="Longbinhfood" width="150" height="100">
    <p>Hiện tại và tương lai chúng tôi cố gắng cung cấp sản phẩm thịt gia cầm làm sẳn Sạch - An toàn - Vệ sinh trên
        toàn quốc. - </p>
    <b>Nguyen Thanh Phi Long (CEO)</b>
</div>
<div class="columntype2">
    <p>THÔNG TIN</p>
    <a href="../Gioi thieu/Gioi_thieu.html">Thông tin chúng tôi</a>
    <br>
    <a href="../thongtin/Thong_tin_giao_hang.html">Thông tin giao hàng</a>
    <br>
    <! -- chua -->
    <a href="../thongtin/Bao_mat.html">Chính sách bảo mật thông tin khách hàng</a>
    <br>
    <! -- chua -->
    <a href="../thongtin/Dieu_khoan_dieu_kien.html">Điều khoản và điều kiện</a>
    <br>
    <! -- chua -->
</div>
<div class="columntype2">
    <p>QUẢN LÝ TÀI KHOẢN</p>
    <a href="../Lien he/Lien_he.html">Liên hệ</a>
    <br>
    <! -- chua -->
    <a href="http://longbinhfood.vn/return">Đổi hàng</a>
    <br>
    <! -- chua -->
    <a href="http://longbinhfood.vn/sitemap">Sơ đồ trang</a>
    <br>
    <! -- chua -->
</div>
<div class="columntype2">
    <p>CHĂM SÓC KHÁCH HÀNG</p>
    <a href="http://longbinhfood.vn/brand">Thương hiệu</a>
    <br>
    <! -- chua -->
    <a href="http://longbinhfood.vn/voucher">Phiếu quà tặng</a>
    <br>
    <! -- chua -->
    <a href="http://longbinhfood.vn/affiliate">Cộng tác bán hàng</a>
    <br>
    <! -- chua -->

</div>
<div class="columntype3">
    <p>THÔNG TIN CÔNG TY</p>
    <p>53 Đõ Quang Đẩu, Phường Phạm Ngũ Lão, Quận 1, Tp.HCM</p>
    <p>097.9188.288</p>
    <p>longbinhfood@gmail.com</p>
    <p>MST: 0304457623</p>
</div>
</div>`;
var txt=`<div id="navbar" class="navbar">

<!-- Home -->
<a href="../" style="padding: 15px 10px 5px 20px">
    <img src="../lbf.png" alt="Longbinhfood" width="150" height="50">
</a>
<!-- Gioi thieu -->
<div class="dropdown">
    <button class="dropbtn">
        <a href="../Gioi thieu/Gioi_thieu.html">Giới thiệu</a>
    </button>
</div>
<!-- San pham -->
<div class="dropdown">
    <button class="dropbtn">
        <a>Sản phẩm</a>
        <!-- chua -->
    </button>
    <div class="dropdown-content">
        <div class="sub-dropdown">
                <a href="../San pham/tatcasp.html"><b>Gà tươi</b></a>
            <div class="sub-content fixed">
                <a onclick="xemchitiet('a3')">Cánh gà</a>
                <a onclick="xemchitiet('a7')">Chân gà</a>
                <a onclick="xemchitiet('a10')">Đầu gà</a>
                <a onclick="xemchitiet('a2')">Đùi tỏi</a>
                <a onclick="xemchitiet('a1')">Gà góc tư (Quater leg)</a>
                <a onclick="xemchitiet('a5')">Ức gà (nguyên xương da)</a>
                <a onclick="xemchitiet('a6')">Ức gà (có da)</a>
                <a onclick="xemchitiet('a4')">Ức gà Fillet (không da)</a>
                <a onclick="xemchitiet('a8')">Sản phẩm phụ</a>
            </div>
        </div>
        <a onclick="xemchitiet('a9')"><b>Gà nguyên con</b></a>
        <a href="../San pham/tatcasp.html"><b>Tất cả sản phẩm</b></a>
    </div>
</div>
<!-- Tin tuc -->
<div class="dropdown">
    <button class="dropbtn">
        <a>Tin tức</a>
        <!-- chua -->
    </button>
    <div class="dropdown-content">
        <a href="../TinTuc/Khuyen_mai.html">Khuyến mãi</a>
        <a href="../TinTuc/Su_kien.html">Sự kiện</a>
        <a href="../TinTuc/Bep_lb.html">Bếp Long Bình</a>
    </div>
</div>
<!-- He thong -->
<div class="dropdown">
        <button class="dropbtn">
            <a>Hệ thống</a>
        </button>
        <div class="dropdown-content">
            <div class="sub-dropdown">
                <a>Hệ Thống Chăn Nuôi</a>
                <div class="sub-content">
                    <a href="../HeThong/Trai_giong.html">Trại giống</a>
                    <a href="../HeThong/Nha_may_ap.html">Nhà máy ấp</a>
                    <a href="../HeThong/Trai_nuoi_ga_thit.html">Trại nuôi gà thịt</a>
                </div>
            </div>
            <div class="sub-dropdown">
                <a>Hệ Thống Sản Xuất</a>
                <div class="sub-content">
                    <a href="../HeThong/He_thong_giet_mo.html">Hệ thống giết mổ</a>
                    <a href="../HeThong/He_thong_van_tai.html">Hệ thống vận tải</a>
                </div>
            </div>
            <div class="sub-dropdown">
                <a>Hệ Thống Phân Phối Sản Phẩm</a>
                <div class="sub-content">
                    <a href="../HeThong/He_thong_fastfood.html">Hệ thống FastFood</a>
                    <a href="../HeThong/Cho_truyen_thong.html">Chợ truyền thống</a>
                    <a href="../HeThong/He_thong_ban_le.html">Hệ thống bán lẻ</a>
                </div>
            </div>
        </div>
    </div>
  
<!-- Lien he -->
<div class="dropdown">
    <button class="dropbtn">
        <a href="../Lien he/Lien_he.html">Liên hệ</a>
    </button>
</div>
<div class="dropdown right" style="padding-right: 11%">
<div id="formcuaadmin111" class="dropdown right" >
    <button class="dropbtn">
        <p onmouseover="EventHandler()"><img name="image3cham" src="../3 cham.png" alt="3 cham" width="45" height="45"></p><b id="sotb" style="color: red ; font-size: 20px; top:12px; right: 155px; position: absolute">0</b>
    </button>
    <p id="lbxinchao" style=" top:45px; left: 80%; position: absolute">Xin chào, <b id="iduser" style="color: navy">Khách hàng</b> </p>
</div>
<div id="chuadangnhap" class="dropdown right" style="display: none">
    <div class="dropdown-content rdrop">
            <form class="" action="/login" method="post">
                <br>
                <img src="http://localhost:3000/images/user.png" alt="anh" width="20px" height="20px"><input type="text" name="username" placeholder="username" autocomplete="off"><br><br>
                
                <img src="http://localhost:3000/images/pass.png" alt="anh" width="20px" height="20px"><input type="password" name="password" placeholder="password" autocomplete="off"><br>
                <a onclick="laylaimatkhau()" style="font-size: 12px">Lấy lại mật khẩu</a>
                <input type="submit" name="" value="Đăng Nhập" style="margin-left: -20px;">
            </form>
        

            <a href="../Tai khoan/Dang_ky.html">Chưa có tài khoản ? Tạo Ngay</a>

        <p></p>
    </div>
</div>
<div id="cankichhoat" class="dropdown right" style="display: none">
    <div class="dropdown-content rdrop">
        <br>
                <center><input type="text" id="txtmakichhoat" placeholder="Nhập mã kích hoạt" autocomplete="off"><br><br>
                <center><input type="button" id="btnkichhoat" value="Kích hoạt">
        

                <a href="" onclick="logout()">Đăng xuất</a>
        <p></p>
    </div>
</div>
<div id="khachhang" class="dropdown right" style="display:none">
    <div class="dropdown-content rdrop">
        <a href="../thongtin/capnhatthongtin.html">Cập nhật tài khoản</a>
        <a href="../Tai khoan/lichsu.html">Xem lịch sử giao dịch</a>
        <a href="../Tai khoan/theodoidonhang.html">Theo dõi đơn hàng</a>
        <a href="" onclick="logout()">Đăng xuất</a>
    </div>
</div>
<div id="nhanvienbanhang" class="dropdown right" style="display:none">
    <div class="dropdown-content rdrop">
            <a href="../thongtin/capnhatthongtin.html">Cập nhật tài khoản</a>
        <a href="../donhang/donhang.html">Đơn hàng chờ duyệt (<b id="tbdhcd" style="color: red; font-size: 15px">0</b>)</a>
        <a href="../kho/kho.html">Quản lý kho </a>
        <a href="../San pham/tatcasp.html">Quản lý sản phẩm </a>
        <a href="../Quytrinh/Nhap_quy_trinh.html">Quy trình chăn nuôi</a>
        <a href="" onclick="logout()">Đăng xuất</a>
    </div>
</div>
<div id="nhanviengiaohang" class="dropdown right" style="display:none">
    <div class="dropdown-content rdrop">
        <a href="../thongtin/capnhatthongtin.html">Cập nhật tài khoản</a>
        <a href="../donhang/donhang.html">Đơn hàng chờ chuyển (<b id="tbdhcd1" style="color: red; font-size: 15px">0</b>)</a>
        <a href="" onclick="logout()">Đăng xuất</a>
    </div>
</div>
<div id="nhanvienkinhdoanh" class="dropdown right" style="display:none">
    <div class="dropdown-content rdrop">
        <a href="../thongtin/capnhatthongtin.html">Cập nhật tài khoản</a>
        <a href="../kinhdoanh/tkdonhang.html">Bảng thống kê đơn hàng,doanh thu</a>
        <a href="" onclick="logout()">Đăng xuất</a>
    </div>
</div>
<div id="formcuaadmin" class="dropdown right" style="display:none">
    <div class="dropdown-content rdrop">
        <a href="../quanly/taikhoan.html">Quản lý tài khoản</a>
        <a href="../San pham/tatcasp.html">Quản lý sản phẩm </a>
        <a href="../kho/kho.html">Quản lý kho </a>
        <a href="../kinhdoanh/tkdonhang.html">Bảng thống kê đơn hàng,doanh thu</a>
        <a href="" onclick="logout()">Đăng xuất</a>
    </div>
</div>
</div>
    

<!-- Gio hang -->
<div class="dropdown right" style="margin-top: 0px;">
    <button class="dropbtn" style="padding: 0">

            <p onmouseover="anhgiohang()"><img src="../giohang.png" alt="Giỏ hàng" width="50" height="50" style="position: relative; margin-right: 40px;"></p>
        <b id="sosp" style="color: darkblue ;font-size: 25px; top:10px; margin-right: 70px; position: absolute">0</b>
    </button>
    <div id="giohang" style="display:none">
    <div class="dropdown-content1 rdrop">
        <a href="../giohang/giohang.html" style="font-size: 15px; padding-bottom: 0px">XEM GIỎ HÀNG</a>
        <!-- chua -->
        <p>_____________________________________</p>
        Giỏ hàng đang có <b id="ttgiohang" style="color: red">0</b> Sản Phẩm<br><br><br><br>
    </div>
    </div>
</div>
<!-- Tim kiem -->
<div class="search right" >
    <input id="search1" onkeyup="onInputSearch()" type="text" style="width: 30px" onmousedown="setsizesearch()" onmouseout="setsizeout()">
    <select id="menutimkiem" onchange="hientieude()">
        <option value="0">Tất cả</option>
        <option value="1">Tên Sản Phẩm</option>
        <option value="2">Khuyến mãi</option>
        <option value="3">Sự kiện</option>
        <option value="4">Bếp Long Bình</option>
    </select>
    <div id="searchSpace">
            <!-- <p><a href="">văn lý</a></p>
            <p><a href="">huy hai</a></p>
            <p><a href="">quang phong</a></p>
            <p><a href="">nhut truong</a></p>
            <p><a href="">minh hieu</a></p> -->
    </div>
</div>
<br><br>
</div>`;




function build7(){
    $("#header1").append(txt);
    $("#ft1").append(fter);
    capnhattentk();
    capnhatgiohang();
    $.get("http://localhost:3000/laymaxem",function(data){
        document.getElementById("masp123").textContent=data.gmasp;
        document.getElementById("tensp123").textContent=data.gtensp;
        document.getElementById("quyCach").textContent=data.gloaisp;
        document.getElementById("giaSp").textContent=data.ggiasp;
        document.getElementById("giaVAT").textContent=data.ggiasp;
        document.images["imagesp"].src=data.ganhsp;
    });
 }
 function build2(){
    $("#header1").append(txt);
    $("#ft1").append(fter);
    capnhattentk();
    capnhatgiohang();
    $.get("http://localhost:3000/ttt",function(data){
        var dssl =[];
        data.msp.forEach(function(val){
            dssl.push(val);
        });
        for(var i=0;i<dssl.length;i++){
            doigia[i]=0;
        }
    });
 }
 function build5(){
    $("#header1").append(txt);
    $("#ft1").append(fter);
    capnhattentk();
    document.getElementById("nutchucnang").style.display="none";
    $.get("http://localhost:3000/test6",function(data){
            if(data.giatrilg=="KH"){
                document.images["image3cham"].src="https://academy.spotonmedics.nl/wp-content/uploads/2017/02/red_user.png"
                $.get("http://localhost:3000/getgiohang",function(data){
                    var tt= data.spgh.length
                    document.getElementById("ttgiohang").textContent=tt;
                    document.getElementById("sosp").textContent=tt;
                });
            }else if(data.giatrilg=="NVBH" || data.giatrilg=="AD"){
                //document.getElementsByClassName("sanpham sp")[0].
                
                $.get("http://localhost:3000/getdonhang",function(data){
                    var tt= data.xdsdh.length
                    document.getElementById("tbdhcd").textContent=tt;
                    document.getElementById("sotb").textContent=tt;
                    document.getElementById("thongtinmacdinh").style.display="none";
                    document.getElementById("canhbao").style.display="block";
                    document.getElementById("menuchucnang").style.display="block";
                    document.getElementById("nutxem").disabled=true;
                    document.getElementById("chucnangxemhang").style.display="block";
                    clickxem();
                });
                if(data.giatrilg=="AD"){
                    document.getElementById("sotb").style.display="none";
                    document.images["image3cham"].src="https://st3.depositphotos.com/4326917/12573/v/950/depositphotos_125737266-stock-illustration-user-avatar-illustration-anonymous-sign.jpg"
                }else{
                    document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                }
            }else if(data.giatrilg=="NVGH"){
                document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                $.get("http://localhost:3000/getdonhang1",function(data){
                    var tt= data.xdsdh.length
                    document.getElementById("tbdhcd1").textContent=tt;
                    document.getElementById("sotb").textContent=tt;
                });
            }
        });
    var dsma=[];
    var dsten=[];
    $.get("http://localhost:3000/ttt",function(data){
        data.msp.forEach(function(val){
            dsma.push(val);
        });
        data.tensanpham.forEach(function(val1){
            console.log(val1);
            $("#selectSanpham").append(`<option>`+val1+`</option>`)
            dsten.push(val1);
        });
        
    });

 }
 function build8(){
    $("#header1").append(txt);
    $("#ft1").append(fter);
    capnhattentk();
    $.get("http://localhost:3000/test6",function(data){
            if(data.giatrilg=="KH"){
                document.images["image3cham"].src="https://academy.spotonmedics.nl/wp-content/uploads/2017/02/red_user.png"
                $.get("http://localhost:3000/getgiohang",function(data){
                    var tt= data.spgh.length
                    document.getElementById("ttgiohang").textContent=tt;
                    document.getElementById("sosp").textContent=tt;
                });
            }else if(data.giatrilg=="NVKD" || data.giatrilg=="AD"){
                //document.getElementsByClassName("sanpham sp")[0].
                
                $.get("http://localhost:3000/getdonhang",function(data){
                    var tt= data.xdsdh.length
                    document.getElementById("tbdhcd").textContent=tt;
                    document.getElementById("sotb").textContent=tt;
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("canhbao").style.display="block";
                    document.getElementById("menuchucnang").style.display="block";
                    document.getElementById("nutxem").disabled=true;
                    document.getElementById("chucnangxemhang").style.display="block";
                    clickxem();
                });
                if(data.giatrilg=="AD"){
                    document.getElementById("sotb").style.display="none";
                    document.images["image3cham"].src="https://st3.depositphotos.com/4326917/12573/v/950/depositphotos_125737266-stock-illustration-user-avatar-illustration-anonymous-sign.jpg"
                }else{
                    document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                }
            }else if(data.giatrilg=="NVGH"){
                document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                $.get("http://localhost:3000/getdonhang1",function(data){
                    var tt= data.xdsdh.length
                    document.getElementById("tbdhcd1").textContent=tt;
                    document.getElementById("sotb").textContent=tt;
                });
            }
        });
    var dsma=[];
    var dsten=[];
    $.get("http://localhost:3000/ttt",function(data){
        data.msp.forEach(function(val){
            dsma.push(val);
        });
        data.tensanpham.forEach(function(val1){
            console.log(val1);
            $("#selectSanpham").append(`<option>`+val1+`</option>`)
            dsten.push(val1);
        });
        
    });

 }
 function build4(){
    $("#ft1").append(fter);
    $("#header1").append(txt);
    capnhattentk();
    capnhatgiohang();
    dateSort();
 }

 function build9(){
    $("#header1").append(txt);
    $("#ft1").append(fter);
    capnhattentk();
    capnhatgiohang();
 }

 function loadthem(){
    $.get("http://localhost:3000/ttt",function(data){
        var tmasp=[];
        var tgiasp=[];
        var ttensp=[];
        var tanhsp=[];
        var tqcsp=[];
        var dskm=[];
        var dsnkm=[];
        var dsnktkm=[];
            data.giasanpham.forEach(function(val) {
                tgiasp.push(val);
            });
            data.msp.forEach(function(val1){
                tmasp.push(val1);
            });
            data.tensanpham.forEach(function(val2){
                ttensp.push(val2);
            });
            data.hinhanhsp.forEach(function(val3){
                tanhsp.push(val3);
            });
            data.qcsp.forEach(function(val3){
                tqcsp.push(val3);
            });
            data.xdskm.forEach(function(val3){
                dskm.push(val3);
            });
            data.xdsnkm.forEach(function(val3){
                dsnkm.push(val3);
            });
            data.xdsnktkm.forEach(function(val3){
                dsnktkm.push(val3);
            });
            for(var i=0;i<tmasp.length;i++){
                var date=new Date();
                var ngaykm = new Date(dsnkm[i]);
                var ngayktkm = new Date(dsnktkm[i]);
                var gt=Math.ceil((ngaykm-date)/(24*60*60*1000));
                var gt1=Math.ceil((ngayktkm-date)/(24*60*60*1000));
                if(dskm[i]!=0 && gt<=0 && gt1>=0){
                    $("#danhsach").append(`<div class="sanpham sp" onmousemove="startShow(`+i+`)" onmouseout="endShow(`+i+`)">
                    <img class="anhsp2" src="http://localhost:3000/images/khuyenmai.png" alt="anh" style="width: 50px; height: 30px; position: absolute; z-index:10 "><b class="kmmm" style="font-size: 20px; color: red; position: absolute; margin-left: 50px; z-index:10">`+dskm[i]+`%</b><b class="slsp"><i>còn lại:</i><span class="soluongcl">100</span></b>
                <span>
                    <a onclick="xemchitiet(document.getElementsByClassName('masp102')[`+i+`].textContent)">
                    <b class="masp102" style="display:none;">`+tmasp[i]+`</b>
                    <b class="quycach1" style="display:none;">`+tqcsp[i]+`</b>
                        <img class="anh" src="`+tanhsp[i]+`" alt="anh"></a>
                    <span class="linkanh" style="display:none">`+tanhsp[i]+`</span>
                    <button class="them" onclick="chucnangthem1(`+i+`)">Thêm</button>
                    <button class="xem right" onclick="showDetail(`+i+`)">Xem</button>
                    <input class="slmua" type="number" value="1" min="1" max="999" style="width: 60px;">
                </span>
                <div>
                    <a onclick="xemchitiet(document.getElementsByClassName('masp102')[`+i+`].textContent)">
                        <p class="tensp">`+ttensp[i]+`</p>
                    </a>
                    <p class="gia">
                     Giá Gốc: <b><strike>`+tgiasp[i]+` VND</strike></b><br>
                        Giá khuyến mãi: <b class="giasp">`+(tgiasp[i]-((tgiasp[i]*dskm[i])/100))+` VND</b>
                        <input type="text" class="nhapgia">
                    </p><br>
                    <div class="buttonSp" style="display: none;">
                            <button onclick="changePrice1(this, `+i+`)" class="doigiaNV">Đổi giá</button>
                            <button onclick=km(`+i+`)>Khuyến mãi</button>
                            <button onclick="suasp(`+i+`)">Sửa</button>
                            <button onclick="xoasp('`+ttensp[i]+`','`+tmasp[i]+`')" >Xóa</button>
                    </div>
                </div>
            </div>`);
                }else{
                    $("#danhsach").append(`<div class="sanpham sp" onmousemove="startShow(`+i+`)" onmouseout="endShow(`+i+`)">
                <b class="slsp"><i>còn lại:</i><span class="soluongcl">100</span></b>
                <span>
                    <a onclick="xemchitiet(document.getElementsByClassName('masp102')[`+i+`].textContent)">
                    <b class="masp102" style="display:none;">`+tmasp[i]+`</b>
                    <b class="quycach1" style="display:none;">`+tqcsp[i]+`</b>
                        <img class="anh" src="`+tanhsp[i]+`" alt="anh"></a>
                    <span class="linkanh" style="display:none">`+tanhsp[i]+`</span>
                    <button class="them" onclick="chucnangthem1(`+i+`)">Thêm</button>
                    <button class="xem right" onclick="showDetail(`+i+`)">Xem</button>
                    <input class="slmua" type="number" value="1" min="1" max="999" style="width: 60px;">
                </span>
                <div>
                    <a onclick="xemchitiet(document.getElementsByClassName('masp102')[`+i+`].textContent)">
                        <p class="tensp">`+ttensp[i]+`</p>
                    </a>
                    <p class="gia">
                        Giá: <b class="giasp">`+tgiasp[i]+` VND</b>
                        <input type="text" class="nhapgia">
                    </p><br>
                    <div class="buttonSp" style="display: none;">
                            <button onclick="changePrice1(this, `+i+`)" class="doigiaNV">Đổi giá</button>
                            <button onclick=km(`+i+`)>Khuyến mãi</button>
                            <button onclick="suasp(`+i+`)">Sửa</button>
                            <button onclick="xoasp('`+ttensp[i]+`','`+tmasp[i]+`')" >Xóa</button>
                    </div>
                </div>
            </div>`);
                }
                
            }
            $.get("http://localhost:3000/gettttonkho",function(data){
                    var dsmasp =[];
                    var dssl =[];
                    data.dmasp.forEach(function(val){
                        dsmasp.push(val);
                    });
                    data.dsl.forEach(function(val){
                        dssl.push(val);
                    });
                    for(var i=0;i<tmasp.length;i++){
                        var sl=0;
                        for(var j=0;j<dsmasp.length;j++){
                            if(document.getElementsByClassName('masp102')[i].textContent==dsmasp[j]){
                                sl=sl+Number(dssl[j]);
                            }
                        }
                        document.getElementsByClassName("soluongcl")[i].textContent=""+sl;
                    } 
            });
        });
       
}

function loadthem1(){
    $.get("http://localhost:3000/test3",function(data){
                    if(data.giatrilg=="NVBH" || data.giatrilg=="AD"){
                        document.getElementById("themspmoi").style.display="block"
                        $.get("http://localhost:3000/ttt",function(data){
                        var tgiasp=[];
                            data.giasanpham.forEach(function(val) {
                                tgiasp.push(val);
                            });
                            for(var i=0;i<tgiasp.length;i++){
                                document.getElementsByClassName("buttonSp")[i].style.display="flex";
                            }
                        });
                    }else{
                        document.getElementById("themspmoi").style.display="none"
                        $.get("http://localhost:3000/ttt",function(data){
                        var tgiasp=[];
                            data.giasanpham.forEach(function(val) {
                                tgiasp.push(val);
                            });
                            for(var i=0;i<tgiasp.length;i++){
                                document.getElementsByClassName("buttonSp")[i].style.display="none";
                            }
                        });
                    }
    });
}

function build1(){
    $("#header1").append(txt);
    $("#ft1").append(fter);
    capnhattentk();
    capnhatgiohang();
    document.getElementById("nh").disabled=true;
    document.getElementById("tt").disabled=true;
    $.get("http://localhost:3000/ttt",function(data){
        var tmasp=[];
        var tgiasp=[];
        var ttensp=[];
        var tanhsp=[];
        var dskm=[];
        var dsnkm=[];
            data.giasanpham.forEach(function(val) {
                tgiasp.push(val);
            });
            data.msp.forEach(function(val1){
                tmasp.push(val1);
            });
            data.tensanpham.forEach(function(val2){
                ttensp.push(val2);
            });
            data.hinhanhsp.forEach(function(val3){
                tanhsp.push(val3);
            });
            data.xdskm.forEach(function(val2){
                dskm.push(val2);
            });
            data.xdsnkm.forEach(function(val3){
                dsnkm.push(val3);
            });
    $.get("http://localhost:3000/test6",function(data1){
        console.log(data1.giatrilg);
        if(data1.giatrilg=="KH"){
            $.get("http://localhost:3000/getgiohang",function(data1){
                
                console.log(data1.spgh.length)
                if(data1.spgh.length==0){
                    $("#dssanpham11").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Giỏ hàng trống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var giohang=[];
                    var soluong=[];
                    data1.spgh.forEach(function(val4){
                        giohang.push(val4);
                    });
                    data1.slgh.forEach(function(val4){
                        soluong.push(val4);
                    });
                    for(var i=0;i<giohang.length;i++){
                        console.log(giohang[i]+" va "+soluong[i]);
                    }
                    document.getElementById("thongtinmacdinh").style.display="none";
                    document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=0;i<giohang.length;i++){
                        for(var j=0;j<tmasp.length;j++){
                            if(giohang[i]==tmasp[j]){
                                var date=new Date();
                                var ngaykm = new Date(dsnkm[j]);
                                var gt=Math.ceil((ngaykm-date)/(24*60*60*1000));
                                if(dskm[j]!=0 && gt<=0){
                                    $("#dssanpham").html("");
                                $("#dssanpham11").append(`<div id="danhsachsanpham">
                                <div class="hinhanh">
                                        <img src="`+tanhsp[j]+`" name="images1">
                                </div>
                                <div class="thongtinsanpham">
                                    <i class="tmasp" style="display:none;">`+tmasp[j]+`</i>
                                    <b style="font-size: 15px; padding-left:5px; ">Tên Sản Phẩm:</b> <b class="ttensp" style="font-size: 20px">`+ttensp[j]+`</b><br><br>
                                    <b style="font-size: 15px; padding-left: 35px; ">Số Lượng:</b>    <input type="number" class="txtsoluong" value="`+soluong[i]+`" min="1" max="999" onmouseout="thaydoisoluong(`+om+`,`+(Number(tgiasp[j])-Number((tgiasp[j]*dskm[j])/100))+`)"><br><br>
                                    <b style="font-size: 15px; padding-left: 75px; ">Giá:</b>     <b class="tgiasp" style="font-size: 25px;">`+((Number(tgiasp[j])*Number(soluong[i]))-((Number(tgiasp[j])*Number(soluong[i]))*dskm[j])/100)+`</b> <b style="font-size: 15px; padding-top: 5px; ">VND</b>
                                    
                                </div>
                                <div class="cacnutchucnang">
                                    <input type="button" id="btnXoa" onclick="mydelete(`+om+`)" value="X"><br><br><br>
                                    <b style="font-size: 20px; margin-bottom: 10%; padding-left: 30%">CHỌN</b><input type="checkbox" class="cbtt" onmouseout="choncb()"  />
                                    
                                </div>
                            </div>`);
                                }else{
                                    $("#dssanpham").html("");
                                $("#dssanpham11").append(`<div id="danhsachsanpham">
                                <div class="hinhanh">
                                        <img src="`+tanhsp[j]+`" name="images1">
                                </div>
                                <div class="thongtinsanpham">
                                    <i class="tmasp" style="display:none;">`+tmasp[j]+`</i>
                                    <b style="font-size: 15px; padding-left:5px; ">Tên Sản Phẩm:</b> <b class="ttensp" style="font-size: 20px">`+ttensp[j]+`</b><br><br>
                                    <b style="font-size: 15px; padding-left: 35px; ">Số Lượng:</b>    <input type="number" class="txtsoluong" value="`+soluong[i]+`" min="1" max="999" onmouseout="thaydoisoluong(`+om+`,`+tgiasp[j]+`)"><br><br>
                                    <b style="font-size: 15px; padding-left: 75px; ">Giá:</b>     <b class="tgiasp" style="font-size: 25px;">`+(Number(tgiasp[j])*Number(soluong[i]))+`</b> <b style="font-size: 15px; padding-top: 5px; ">VND</b>
                                    
                                </div>
                                <div class="cacnutchucnang">
                                    <input type="button" id="btnXoa" onclick="mydelete(`+om+`)" value="X"><br><br><br>
                                    <b style="font-size: 20px; margin-bottom: 10%; padding-left: 30%">CHỌN</b><input type="checkbox" class="cbtt" onmouseout="choncb()"  />
                                    
                                </div>
                            </div>`);
                                }
                                
                            om++;
                            }
                        }
                    }
                }
            });
            document.getElementById("imagesp2").style.display="none";
            document.getElementById("dssanpham11").style.display="block";
            document.getElementById("dssanpham22").style.display="block";
        }
    })
        });
    capnhatgiohang();
}
function build3(){
    $("#ft1").append(fter);
    $("#header1").append(txt);
    capnhattentk();
    capnhatgiohang();
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var tmadh=[];
        var tidkh=[];
        var ttg=[];
        var tgc=[];
        var tngay=[];
        var tdcdh=[];
        var tsdtdh=[];
        var tttdh=[];
        var tdsid=[];
        var tdsten=[];
        var tgcnv=[];
        var ttrangthai=[];
        var anhttt=[];
            data.hmadh.forEach(function(val) {
                tmadh.push(val);
            });
            data.hidkh.forEach(function(val1){
                tidkh.push(val1);
            });
            data.htongtien.forEach(function(val2){
                ttg.push(val2);
            });
            data.hghichu.forEach(function(val1){
                tgc.push(val1);
            });
            data.hghichunv.forEach(function(val2){
                tgcnv.push(val2);
            });
            data.hngaytao.forEach(function(val2){
                tngay.push(val2);
            });
            data.hdcdh.forEach(function(val) {
                tdcdh.push(val);
            });
            data.hsdtdh.forEach(function(val1){
                tsdtdh.push(val1);
            });
            data.httdh.forEach(function(val2){
                tttdh.push(val2);
            });
            data.hdsid.forEach(function(val1){
                tdsid.push(val1);
            });
            data.hdsten.forEach(function(val2){
                tdsten.push(val2);
            });
            data.htrangthai.forEach(function(val2){
                ttrangthai.push(val2);
            });
            data.hanhtt.forEach(function(val2){
                anhttt.push(val2);
            });
    $.get("http://localhost:3000/test6",function(data1){
        if(data1.giatrilg=="NVBH"){
            $.get("http://localhost:3000/getdonhang",function(data2){
                
                console.log(data2.xdsdh.length)
                if(data2.xdsdh.length==0){
                    $("#dsdonhangcanduyet").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Đơn hàng cần duyệttrống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var donhang=[];
                    data2.xdsdh.forEach(function(val4){
                        donhang.push(val4);
                    });
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=0;i<donhang.length;i++){
                        for(var j=0;j<tmadh.length;j++){
                            if(donhang[i]==tmadh[j]){
                                var tinhtrang="";
                                if(tttdh[j]=="TRUCTIEP"){
                                    tinhtrang="Chưa thanh toán";
                                }else{
                                    tinhtrang="Đã thanh toán";
                                }
                                $("#dsdonhangcanduyet").append(`<div id="danhsachdonhang">
                                <div class="thongtindonhang">
                                    <b style="font-size: 15px; padding-left:10px; ">Mã Đơn Hàng : </b> <b class="jmadh" style="font-size: 20px">`+tmadh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left:10px; ">ID Khách Hàng : </b> <b class="jidkh" style="font-size: 20px">`+tidkh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tổng Giá Đơn Hàng :</b>   <b class="jtg" style="font-size: 20px">`+ttg[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ngày Tạo Đơn Hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+new Date(tngay[j]).toLocaleDateString()+" "+new Date(tngay[j]).toLocaleTimeString()+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Trạng Thái :</b>     <b class="jngaytao" style="font-size: 20px;">Chờ Duyệt</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tình trạng đơn hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+tinhtrang+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ghi Chú :</b>     <b class="jghichu" style="font-size: 20px;">`+tgc[j]+`</b>
                                    
                                </div>
                                <div class="cacnutchucnang">
                                    <input type="button" id="btnXem" onclick="myview(`+om+`)" value=" Xem "><input type="button" id="btnXoa" onclick="mydelete1(`+om+`)" value="X"><br><br>
                                    <input type="button" id="btnHuy" onclick="mycancel(`+om+`)" value=" Hủy "><br><br>
                                    <input type="button" id="btnDuyet" onclick="myaccept(`+om+`)" value="Duyệt"><br><br><br>
                                </div>
                            </div>`);
                            om++;
                            }
                        }
                    }
                }
            });
            document.getElementById("dsdonhangchuyen").style.display="none";
            document.getElementById("dsdonhangcanduyet").style.display="block";
            
        }else if(data1.giatrilg=="NVGH"){
            $.get("http://localhost:3000/getdonhang1",function(data2){
                if(data2.xdsdh.length==0){
                    $("#dsdonhangcanduyet").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Đơn hàng cần duyệttrống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var donhang=[];
                    data2.xdsdh.forEach(function(val4){
                        donhang.push(val4);
                    });
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=0;i<donhang.length;i++){
                        for(var j=0;j<tmadh.length;j++){
                            if(donhang[i]==tmadh[j]){
                                var hoten="";
                                var tinhtrang="";
                                if(tttdh[j]=="TRUCTIEP"){
                                    tinhtrang="Chưa thanh toán";
                                }else{
                                    tinhtrang="Đã thanh toán";
                                }
                                for(var n=0;n<tdsid.length;n++){
                                    if(tdsid[n]==tidkh[j]){
                                        hoten=tdsten[n];
                                    }
                                }

                                $("#dsdonhangchuyen").append(`<div id="danhsachdonhang1">
                                <div class="thongtindonhang1">
                                    <b class="xxidkh" style="display:none">`+tidkh[j]+`</b>
                                    <b style="font-size: 15px; padding-left:10px; ">Mã Đơn Hàng : </b> <b class="xxmadh" style="font-size: 20px">`+tmadh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left:10px; ">ID Khách Hàng : </b> <b class="jidkh" style="font-size: 20px">`+hoten+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tổng Giá Đơn Hàng :</b>   <b class="jtg" style="font-size: 20px">`+ttg[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Địa chỉ :</b>     <b class="jngaytao" style="font-size: 20px;">`+tdcdh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Số Điện Thoại :</b>     <b class="jngaytao" style="font-size: 20px;">`+tsdtdh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tình Trạng Đơn Hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+tinhtrang+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ghi Chú :</b>     <b class="jghichu" style="font-size: 20px;">`+tgc[j]+`</b>
                                    
                                </div>
                                <div class="cacnutchucnang1">
                                    <input type="button" id="btnXem1" onclick="myview2(`+om+`)" value="   Xem   "><input type="button" id="btnXoa1" onclick="mydelete2(`+om+`)" value="X"><br><br>
                                    <input type="button" id="btnHuy1" onclick="mycancel2(`+om+`)" value="    Hủy   "><br><br>
                                    <input type="button" id="btnOK" onclick="myaccept2(`+om+`)" value="Đã Giao"><br><br><br>
                                </div>
                            </div>`);
                            om++;
                            }
                        }
                    }
                }
            });
            
            document.getElementById("dsdonhangcanduyet").style.display="none";
            document.getElementById("dsdonhangchuyen").style.display="block";
        }else if(data1.giatrilg=="KH"){
            $.get("http://localhost:3000/getdonhang2",function(data2){
                if(data2.xdsdh.length==0){
                    $("#dsdonhangcanduyet").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Đơn hàng cần duyệttrống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var donhang=[];
                    data2.xdsdh.forEach(function(val4){
                        donhang.push(val4);
                    });
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=donhang.length-1;i>=0;i--){
                        for(var j=0;j<tmadh.length;j++){
                            if(donhang[i]==tmadh[j]){
                                var tinhtrang="";
                                if(ttrangthai[j]=="HOANTHANH"){
                                    tinhtrang="Đã hoàn thành"
                                }else{
                                    tinhtrang="Đã hủy"
                                }
                                $("#danhsachlichsu").append(`<div id="danhsachdonhang2">
                                <div class="thongtindonhang2">
                                    <b style="font-size: 15px; padding-left:10px; ">Mã Đơn Hàng : </b> <b class="ttmadh" style="font-size: 20px">`+tmadh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tổng Giá Đơn Hàng :</b>   <b class="jtg" style="font-size: 20px">`+ttg[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Thời gian đặt hàng :</b>   <b class="jtg" style="font-size: 20px">`+tngay[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tình Trạng Đơn Hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+tinhtrang+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ghi chú :</b>     <b class="jngaytao" style="font-size: 20px;">`+tgcnv[j]+`</b>
                                    
                                </div>
                                <div class="cacnutchucnang2">
                                    <input type="button" id="btnXem1" onclick="myview2(`+om+`)" value="Xem chi tiết">
                                </div>
                        </div>`);
                            om++;
                            }
                        }
                    }
                }
            });
            
            document.getElementById("danhsachlichsu").style.display="block";
        }
    })
        });
    capnhatgiohang();
}
function build6(){
    $("#ft1").append(fter);
    $("#header1").append(txt);
    capnhattentk();
    capnhatgiohang();
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var tmadh=[];
        var tidkh=[];
        var ttg=[];
        var tgc=[];
        var tngay=[];
        var tdcdh=[];
        var tsdtdh=[];
        var tttdh=[];
        var tdsid=[];
        var tdsten=[];
        var tgcnv=[];
        var ttrangthai=[];
            data.hmadh.forEach(function(val) {
                tmadh.push(val);
            });
            data.hidkh.forEach(function(val1){
                tidkh.push(val1);
            });
            data.htongtien.forEach(function(val2){
                ttg.push(val2);
            });
            data.hghichu.forEach(function(val1){
                tgc.push(val1);
            });
            data.hghichunv.forEach(function(val2){
                tgcnv.push(val2);
            });
            data.hngaytao.forEach(function(val2){
                tngay.push(val2);
            });
            data.hdcdh.forEach(function(val) {
                tdcdh.push(val);
            });
            data.hsdtdh.forEach(function(val1){
                tsdtdh.push(val1);
            });
            data.httdh.forEach(function(val2){
                tttdh.push(val2);
            });
            data.hdsid.forEach(function(val1){
                tdsid.push(val1);
            });
            data.hdsten.forEach(function(val2){
                tdsten.push(val2);
            });
            data.htrangthai.forEach(function(val2){
                ttrangthai.push(val2);
            });
    $.get("http://localhost:3000/test6",function(data1){
        if(data1.giatrilg=="NVBH"){
            $.get("http://localhost:3000/getdonhang",function(data2){
                
                console.log(data2.xdsdh.length)
                if(data2.xdsdh.length==0){
                    $("#dsdonhangcanduyet").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Đơn hàng cần duyệttrống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var donhang=[];
                    data2.xdsdh.forEach(function(val4){
                        donhang.push(val4);
                    });
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=0;i<donhang.length;i++){
                        for(var j=0;j<tmadh.length;j++){
                            console.log(donhang[i]+"b"+tmadh[j]);
                            
                            if(donhang[i]==tmadh[j]){
                                var tinhtrang="";
                                if(tttdh[j]=="TRUCTIEP"){
                                    tinhtrang="Chưa thanh toán";
                                }else{
                                    tinhtrang="Đã thanh toán";
                                }
                                $("#dsdonhangcanduyet").append(`<div id="danhsachdonhang">
                                <div class="thongtindonhang">
                                    <b style="font-size: 15px; padding-left:10px; ">Mã Đơn Hàng : </b> <b class="jmadh" style="font-size: 20px">`+tmadh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left:10px; ">ID Khách Hàng : </b> <b class="jidkh" style="font-size: 20px">`+tidkh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tổng Giá Đơn Hàng :</b>   <b class="jtg" style="font-size: 20px">`+ttg[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ngày Tạo Đơn Hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+new Date(tngay[j]).toLocaleDateString()+" "+new Date(tngay[j]).toLocaleTimeString()+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Trạng Thái :</b>     <b class="jngaytao" style="font-size: 20px;">Chờ Duyệt</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tình trạng đơn hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+tinhtrang+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ghi Chú :</b>     <b class="jghichu" style="font-size: 20px;">`+tgc[j]+`</b>
                                    
                                </div>
                                <div class="cacnutchucnang">
                                    <input type="button" id="btnXem" onclick="myview(`+om+`)" value=" Xem "><input type="button" id="btnXoa" onclick="mydelete1(`+om+`)" value="X"><br><br>
                                    <input type="button" id="btnHuy" onclick="mycancel(`+om+`)" value=" Hủy "><br><br>
                                    <input type="button" id="btnDuyet" onclick="myaccept(`+om+`)" value="Duyệt"><br><br><br>
                                </div>
                            </div>`);
                            om++;
                            }
                        }
                    }
                }
            });
            document.getElementById("dsdonhangchuyen").style.display="none";
            document.getElementById("dsdonhangcanduyet").style.display="block";
            
        }else if(data1.giatrilg=="NVGH"){
            $.get("http://localhost:3000/getdonhang1",function(data2){
                if(data2.xdsdh.length==0){
                    $("#dsdonhangcanduyet").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Đơn hàng cần duyệttrống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var donhang=[];
                    data2.xdsdh.forEach(function(val4){
                        donhang.push(val4);
                    });
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=0;i<donhang.length;i++){
                        for(var j=0;j<tmadh.length;j++){
                            if(donhang[i]==tmadh[j]){
                                var hoten="";
                                var tinhtrang="";
                                if(tttdh[j]=="TRUCTIEP"){
                                    tinhtrang="Chưa thanh toán";
                                }else{
                                    tinhtrang="Đã thanh toán";
                                }
                                for(var n=0;n<tdsid.length;n++){
                                    if(tdsid[n]==tidkh[j]){
                                        hoten=tdsten[n];
                                    }
                                }

                                $("#dsdonhangchuyen").append(`<div id="danhsachdonhang1">
                                <div class="thongtindonhang1">
                                    <b class="xxidkh" style="display:none">`+tidkh[j]+`</b>
                                    <b style="font-size: 15px; padding-left:10px; ">Mã Đơn Hàng : </b> <b class="xxmadh" style="font-size: 20px">`+tmadh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left:10px; ">ID Khách Hàng : </b> <b class="jidkh" style="font-size: 20px">`+hoten+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tổng Giá Đơn Hàng :</b>   <b class="jtg" style="font-size: 20px">`+ttg[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Địa chỉ :</b>     <b class="jngaytao" style="font-size: 20px;">`+tdcdh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Số Điện Thoại :</b>     <b class="jngaytao" style="font-size: 20px;">`+tsdtdh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tình Trạng Đơn Hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+tinhtrang+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ghi Chú :</b>     <b class="jghichu" style="font-size: 20px;">`+tgc[j]+`</b>
                                    
                                </div>
                                <div class="cacnutchucnang1">
                                    <input type="button" id="btnXem1" onclick="myview2(`+om+`)" value="   Xem   "><input type="button" id="btnXoa1" onclick="mydelete2(`+om+`)" value="X"><br><br>
                                    <input type="button" id="btnHuy1" onclick="mycancel2(`+om+`)" value="    Hủy   "><br><br>
                                    <input type="button" id="btnOK" onclick="myaccept2(`+om+`)" value="Đã Giao"><br><br><br>
                                </div>
                            </div>`);
                            om++;
                            }
                        }
                    }
                }
            });
            
            document.getElementById("dsdonhangcanduyet").style.display="none";
            document.getElementById("dsdonhangchuyen").style.display="block";
        }else if(data1.giatrilg=="KH"){
            $.get("http://localhost:3000/getdonhang3",function(data2){
                console.log(data2.xdsdh.length);
                if(data2.xdsdh.length==0){
                    $("#dsdonhangcanduyet").append(`<div id="thongtinmacdinh" style="display:block;">
                    <b style="font-size: 20px; text-align: center; margin-left: 70px;">Đơn hàng cần duyệttrống hoặc bạn chưa đăng nhập</b><br>
                    <input type="button" id="btnExit" value="Về Trang Chủ">
            </div>`);
                }else{
                    var donhang=[];
                    data2.xdsdh.forEach(function(val4){
                        donhang.push(val4);
                    });
                    document.getElementById("thongtinmacdinh").style.display="none";
                    //document.getElementById("nutthanhtoan").style.display="block";
                    var om=0;
                    for(var i=donhang.length-1;i>=0;i--){
                        for(var j=0;j<tmadh.length;j++){
                            if(donhang[i]==tmadh[j]){
                                console.log("vao lan "+om);
                                var tinhtrang="";
                                if(ttrangthai[j]=="MOITAO"){
                                    tinhtrang="Chờ duyệt"
                                }else{
                                    tinhtrang="Đang chuyển"
                                }
                                $("#danhsachtheodoi").append(`<div id="danhsachdonhang3">
                                <div class="thongtindonhang3">
                                    <b style="font-size: 15px; padding-left:10px; ">Mã Đơn Hàng : </b> <b class="ttmadh" style="font-size: 20px">`+tmadh[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tổng Giá Đơn Hàng :</b>   <b class="jtg" style="font-size: 20px">`+ttg[j]+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Thời gian đặt hàng :</b>   <b class="jtg" style="font-size: 20px">`+new Date(tngay[j]).toLocaleDateString()+" "+new Date(tngay[j]).toLocaleTimeString()+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Tình Trạng Đơn Hàng :</b>     <b class="jngaytao" style="font-size: 20px;">`+tinhtrang+`</b><br>
                                    <b style="font-size: 15px; padding-left: 10px; ">Ghi chú :</b>     <b class="jngaytao" style="font-size: 20px;">`+tgcnv[j]+`</b>
                                    
                                </div>
                                <div class="cacnutchucnang3">
                                    <input type="button" id="btnXem1" onclick="myview3(`+om+`)" value="Xem chi tiết">
                                </div>
                        </div>`);
                            om++;
                            }
                        }
                    }
                }
            });
            
            document.getElementById("danhsachtheodoi").style.display="block";
        }
    })
        });
    capnhatgiohang();
}
function themsoluong(){
    $.get("http://localhost:3000/gettttonkho",function(data){
        var dsmasp =[];
        var dssl =[];
        data.dmasp.forEach(function(val){
            dsmasp.push(val);
        });
        data.dsl.forEach(function(val){
            dssl.push(val);
        });
        for(var i=0;i<8;i++){
            var sl=0;
            for(var j=0;j<dsmasp.length;j++){
                if(document.getElementsByClassName('masp')[i].textContent==dsmasp[j]){
                    sl=sl+Number(dssl[j]);
                }
            }
            document.getElementsByClassName("slspcl")[i].textContent=""+sl;
        }
    });
}
function mydelete(num){
    if(document.getElementsByClassName("cbtt")[num].checked){
        alert("Hủy chọn sản phẩm trước khi xóa")
    }else{
        alert("Xoa tai"+num)
    }
    
}
function trangayhientai(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = dd + '/' + mm + '/' + yyyy;
    return today
}
function build() {
        capnhattentk();
        capnhatgiohang();
        $.get("http://localhost:3000/ttt",function(data){
        var tmasp=[];
        var tgiasp=[];
        var ttensp=[];
        var tanhsp=[];
        var dskm=[];
        var dsnkm=[]
        var dsmatt=[];
            data.giasanpham.forEach(function(val) {
                tgiasp.push(val);
            });
            data.msp.forEach(function(val1){
                tmasp.push(val1);
                dsmatt.push(val1);
            });
            data.tensanpham.forEach(function(val2){
                ttensp.push(val2);
            });
            data.hinhanhsp.forEach(function(val3){
                tanhsp.push(val3);
            });
            data.xdskm.forEach(function(val2){
                dskm.push(val2);
            });
            data.xdsnkm.forEach(function(val3){
                dsnkm.push(val3);
            });
            for(var l=0;l<tmasp.length;l++){
                doigia[l]=0;
            }
            var dssttkm=[];
            var dssttkkm=[];
            // for(var j=0;j<dskm.length;j++){
                
            //     if(dskm[j]!=0 && gt<=0){
            //         dssttkm.push(j);
            //     }else{
            //         dssttkkm.push(j);
            //     }
            // }
                for(var i=0;i<8;i++){
                    var date=new Date();
                    var ngaykm = new Date(dsnkm[i]);
                    var gt=Math.ceil((ngaykm-date)/(24*60*60*1000));
                    if(dskm[i]!=0 && gt<=0){
                        $("#dssp111").append(`<div class="sp" onmousemove="startShow(`+i+`)" onmouseout="endShow(`+i+`)">
                        <img  class="anhsp2" src="http://localhost:3000/images/khuyenmai.png" alt="anh" style="width: 50px; height: 30px; position: absolute; z-index:10 "><b class="kmmm" style="font-size: 20px; color: red; position: absolute; margin-left: 50px; z-index:10">`+dskm[i]+`%</b> <b class="slsp"><i>còn lại:</i><span class="slspcl">100</span></b>
                        <span >
                            <a onclick="xemchitiet(document.getElementsByClassName('masp')[`+i+`].textContent)">
                                <img class="anhsp1" class="anh" src="`+tanhsp[i]+`" alt="anh" style="margin-top:-10px" ></a> 
                            <button class="them" onclick="chucnangthem(`+i+`)">Thêm</button>
                            <button class="xem right" onclick="showDetail(`+i+`)">Xem</button>
                            <input class="slmua" type="number" value="1" min="1" max="999"> 
                        </span>
                        <div>
                            <p class="masp" style="display: none">`+tmasp[i]+`</p>
                            <a href="./San pham/Ga_goc_tu.html">
                                <p class="tensp"  onmouseover="showgia(`+i+`)">`+ttensp[i]+`</p>
                            </a>
                            <p class="gia">
                                Giá Gốc: <b><strike>`+tgiasp[i]+` VND</strike></b><br>
                                Giá khuyến mãi: <b class="giasp">`+(tgiasp[i]-((tgiasp[i]*dskm[i])/100))+` VNĐ</b>
                                <input type="text" class="nhapgia">
                                <button onclick="changePrice(this, `+i+`)" class="doigiaNV" style="display:none">Đổi giá</button>
                            </p>
                        </div>
                    </div>`);
                        
                    }else{
                        $("#dssp111").append(`<div class="sp" onmousemove="startShow(`+i+`)" onmouseout="endShow(`+i+`)">
                        <b class="slsp"><i>còn lại:</i><span class="slspcl">100</span></b>
                        <span >
                            <a onclick="xemchitiet(document.getElementsByClassName('masp')[`+i+`].textContent)">
                                <img class="anhsp1" class="anh" src="`+tanhsp[i]+`" alt="anh"></a> 
                            <button class="them" onclick="chucnangthem(`+i+`)">Thêm</button>
                            <button class="xem right" onclick="showDetail(`+i+`)">Xem</button>
                            <input class="slmua" type="number" value="1" min="1" max="999"> 
                        </span>
                        <div>
                            <p class="masp" style="display: none">`+tmasp[i]+`</p>
                            <a href="./San pham/Ga_goc_tu.html">
                                <p class="tensp"  onmouseover="showgia(`+i+`)">`+ttensp[i]+`</p>
                            </a>
                            <p class="gia">
                                Giá: <b class="giasp">`+tgiasp[i]+` VNĐ</b>
                                <input type="text" class="nhapgia">
                                <button onclick="changePrice(this, `+i+`)" class="doigiaNV" style="display:none">Đổi giá</button>
                            </p>
                        </div>
                    </div>`);
                    }
                    
                }
            // }else if(dssttkm.length<8){
            //     console.log("1");
            //     var mangtru=[];
            //     for(var i=0;i<dssttkm.length;i++){
            //         console.log(i+" va "+dskm[i]);
            //         mangtru.push(i);
                    
            //     }
            //     for(var i=0;i<dssttkkm.length;i++){
            //                 $("#dssp111").append(`<div class="sp" onmousemove="startShow(`+(i+mangtru.length)+`)" onmouseout="endShow(`+(i+mangtru.length)+`)">
            //                 <b class="slsp"><i>còn lại:</i><span class="slspcl">100</span></b>
            //                 <span >
            //                     <a onclick="xemchitiet(document.getElementsByClassName('masp')[`+(i+mangtru.length)+`].textContent)">
            //                         <img class="anhsp1" class="anh" src="`+tanhsp[dssttkkm[i]]+`" alt="anh"></a> 
            //                     <button class="them" onclick="chucnangthem(`+(i+mangtru.length)+`)">Thêm</button>
            //                     <button class="xem right" onclick="showDetail(`+(i+mangtru.length)+`)">Xem</button>
            //                     <input class="slmua" type="number" value="1" min="1" max="999"> 
            //                 </span>
            //                 <div>
            //                     <p class="masp" style="display: none">`+tmasp[dssttkkm[i]]+`</p>
            //                     <a href="./San pham/Ga_goc_tu.html">
            //                         <p class="tensp"  onmouseover="showgia(`+(i+mangtru.length)+`)">`+ttensp[dssttkkm[i]]+`</p>
            //                     </a>
            //                     <p class="gia">
            //                         <b class="giasp">`+tgiasp[dssttkkm[i]]+` VNĐ</b>
            //                         <input type="text" class="nhapgia">
            //                         <button onclick="changePrice(this, `+(i+mangtru.length)+`)" class="doigiaNV" style="display:none">Đổi giá</button>
            //                     </p>
            //                 </div>
            //             </div>`);
                            
                    
            //     }
            // }else{
            //     console.log("2");
            //     for(var i=0;i<8;i++){
            //         $("#dssp111").append(`<div class="sp" onmousemove="startShow(`+i+`)" onmouseout="endShow(`+i+`)">
            //        <div id="anhkm"><img class="anhsp2" src="http://localhost:3000/images/khuyenmai.png" alt="anh" style="width: 70px; height: 50px; margin-left: -110px;"><b class="kmmm" style="font-size: 30px; color: red">25%</b></div> <b class="slsp"><i>còn lại:</i><span class="slspcl">100</span></b>
            //     <span >
            //         <a onclick="xemchitiet(document.getElementsByClassName('masp')[`+i+`].textContent)">
            //             <img class="anhsp1" class="anh" src="`+tanhsp[i]+`" alt="anh"></a> 
            //         <button class="them" onclick="chucnangthem(`+i+`)">Thêm</button>
            //         <button class="xem right" onclick="showDetail(`+i+`)">Xem</button>
            //         <input class="slmua" type="number" value="1" min="1" max="999"> 
            //     </span>
            //     <div>
            //         <p class="masp" style="display: none">`+tmasp[i]+`</p>
            //         <a href="./San pham/Ga_goc_tu.html">
            //             <p class="tensp"  onmouseover="showgia(`+i+`)">`+ttensp[i]+`</p>
            //         </a>
            //         <p class="gia">
            //             <b class="giasp">`+tgiasp[i]+` VNĐ</b>
            //             <input type="text" class="nhapgia">
            //             <button onclick="changePrice(this, `+i+`)" class="doigiaNV" style="display:none">Đổi giá</button>
            //         </p>
            //     </div>
            // </div>`);
            //     }
            // }
            
            
            
        });
        
        capnhatgiohang();
        themsoluong();
        $.get("http://localhost:3000/test3",function(data){
                    if(data.giatrilg=="NVBH" || data.giatrilg=="AD"){
                        for(var j=0;j<8;j++){
                            document.getElementsByClassName("doigiaNV")[j].style.display="block";
                        }
                    }
        });
}
function laylaimatkhau(){
    document.getElementById("laylaimk").style.display="block";
}
 function xulymatkhau(){
    var email = document.getElementById('txtemail'); 
    var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter1.test(email.value)) { 
             alert('Hãy Nhập Địa Chỉ Email Hợp Lệ.\nVí dụ: Example@gmail.com');
             email.focus; 
             return false; 
    }
    else{
        $.get("http://localhost:3000/tk",function(data){
            var dsemail=[];
            data.danhsachemail.forEach(function(val){
                dsemail.push(val);
            })
            var bien=0;
            for (var i=0;i<dsemail.length;i++){
                if(dsemail[i]==email.value){
                    bien=1;
                }
            }
            
            if(bien==0){
                alert("Email không tồn tại");
            }else{
                $.post("http://localhost:3000/guiemailkhoiphuc",{emailkp:email.value},function(data){
                    console.log("da gui du lieu len server", data);
                });
                alert("Mật khẩu đã được gửi vào mail của bạn");
                window.location="../";
            }
        });
    }
     
 }
function capnhatgiohang(){
    $.get("http://localhost:3000/test6",function(data){
            if(data.giatrilg=="KH"){
                document.images["image3cham"].src="https://academy.spotonmedics.nl/wp-content/uploads/2017/02/red_user.png"
                $.get("http://localhost:3000/getgiohang",function(data){
                    var gttt=[];
                    data.spgh.forEach(function(val){
                        gttt.push(val);
                    });
                    var tt= gttt.length
                    document.getElementById("ttgiohang").textContent=tt;
                    document.getElementById("sosp").textContent=tt;
                });
            }else if(data.giatrilg=="AD"){
                document.images["image3cham"].src="https://st3.depositphotos.com/4326917/12573/v/950/depositphotos_125737266-stock-illustration-user-avatar-illustration-anonymous-sign.jpg"
            }else if(data.giatrilg=="NVBH"){
                //document.getElementsByClassName("sanpham sp")[0].
                document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                $.get("http://localhost:3000/getdonhang",function(data){
                    var tt= data.xdsdh.length
                    document.getElementById("tbdhcd").textContent=tt;
                    document.getElementById("sotb").textContent=tt;
                });
                document.getElementById("thongbaonhanvien").style.display="block";
                $.get("http://localhost:3000/getnoidungtb", function(data){
                    var dsm=[];
                    var dsnd=[];
                    data.hmanv.forEach(function(val){
                        dsm.push(val);
                    });
                    data.hnoidung.forEach(function(val){
                        dsnd.push(val);
                    });
                    for(var i=0;i<dsm.length;i++){
                        if(dsm[i]=="NVBH"){
                            document.getElementById("noidungthongbao").textContent=dsnd[i];
                        }
                    }
                });
            }else if(data.giatrilg=="NVGH"){
                document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                $.get("http://localhost:3000/getdonhang1",function(data){
                    var tt= data.xdsdh.length
                    document.getElementById("tbdhcd1").textContent=tt;
                    document.getElementById("sotb").textContent=tt;
                });
                document.getElementById("thongbaonhanvien").style.display="block";
                $.get("http://localhost:3000/getnoidungtb", function(data){
                    var dsm=[];
                    var dsnd=[];
                    data.hmanv.forEach(function(val){
                        dsm.push(val);
                    });
                    data.hnoidung.forEach(function(val){
                        dsnd.push(val);
                    });
                    for(var i=0;i<dsm.length;i++){
                        if(dsm[i]=="NVGH"){
                            document.getElementById("noidungthongbao").textContent=dsnd[i];
                        }
                    }
                });
            }else if(data.giatrilg=="NVKD"){
                document.images["image3cham"].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzRKsT254WCGs8It-TOsDeASPSnH1VSD0Oo-CziC-QwwKIWxg";
                
            }
        });
}

$(document).ready(function(){
    $("#btnkichhoat").click(function(){
        var makh=document.getElementById("txtmakichhoat");
        $.get("/getmakichhoat",function(data){
            if(data.giatrikh==makh.value){
                $.post("/khthanhcong",{makichhoat:makh.value},function(data){
                    console.log("gui du lieu thanh cong", data);
                });
                alert("Kích hoạt thành công tài khoản");
                window.location="../"
            }else{
                alert("Sai mã kích hoạt");
            }
        });
    });
    $("#btnReg").click(function(){
        if($("#txtId").val()=="" || $("#txtName").val()=="" || $("#txtEmail").val()=="" || $("#txtSodt").val()=="" || $("#txtDiachi").val()=="" || $("#txtPass").val()=="" || $("#txtrePass").val()==""){
            alert("Không được để trống thông tin");
        }else{
            $.get("http://localhost:3000/tk",function(data){

            var xetid=false;
            var xetemail=false;
            var xetsdt=false;

            data.danhsachid.forEach(function(val) {
                if(val==$("#txtId").val()){
                    xetid=true;
                }
            });
            data.danhsachemail.forEach(function(val) {
                if(val==$("#txtEmail").val()){
                    xetemail=true;
                }
            });
            data.danhsachsdt.forEach(function(val) {
                if(val==$("#txtSodt").val()){
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
                        if (!filter2.test(sdt.value) || sdt.value.length<10 || sdt.value.length >11 ) { 
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
                                var pa = document.getElementById('txtPass');
                                var repa = document.getElementById('txtrePass');
                                if (pa.value.length<6) { 
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
                                    var stknh = document.getElementById('txtTknh');
                                    var fax = document.getElementById('txtFax');
                                    var filter3 =  /^[0-9]+$/;
                                    if(stknh.value=="" && fax.value==""){
                                        $.post("http://localhost:3000/set/reg1",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                            console.log("da gui du lieu len server: ", data);
                                        });
                                        alert("Đăng ký thành công");
                                        window.location="http://localhost:3000";
                                    }else if(stknh.value != "" && fax.value== ""){
                                        if (!filter3.test(stknh.value) || stknh.value.length<12 || stknh.value.length>16) { 
                                            alert('Hãy nhập số tài khoản ngân hàng hợp lệ');
                                            stknh.focus; 
                                            return false; 
                                        }else{
                                            console.log("post len có tknh");
                                            $.post("http://localhost:3000/set/reg2",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),TKNH:$("#txtTknh").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                                console.log("da gui du lieu len server: ", data);
                                            });
                                            alert("Đăng ký thành công");
                                            window.location="http://localhost:3000";
                                        }
                                    }else if(stknh.value == "" && fax.value != "" ){
                                        if (!filter3.test(fax.value) || fax.value.length<8 || fax.value.length>11) { 
                                            alert('Hãy nhập số fax hợp lệ');
                                            fax.focus; 
                                            return false; 
                                        }else{
                                            console.log("post len có fax");
                                            $.post("http://localhost:3000/set/reg3",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),FAX:$("#txtFax").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                                console.log("da gui du lieu len server: ", data);
                                            });
                                            alert("Đăng ký thành công");
                                            window.location="http://localhost:3000";
                                        }
                                    }else{
                                        console.log("post lên có cả 2");
                                        $.post("http://localhost:3000/set/reg4",{ID:$("#txtId").val(),Hoten:$("#txtName").val(),Email:$("#txtEmail").val(),TKNH:$("#txtTknh").val(),FAX:$("#txtFax").val(),SDT:$("#txtSodt").val(),Diachi:$("#txtDiachi").val(),Pass1:$("#txtPass").val()},function(data){
                                            console.log("da gui du lieu len server: ", data);
                                        });
                                        alert("Đăng ký thành công");
                                        window.location="http://localhost:3000";
                                    }
                                }
                            } 
                        } 
                    } 
                } 
                
            }
        });
        }
    });
});

//khu vuc function

function chucnangthem(gtvt){
    $.get("http://localhost:3000/test2",function(data){
            if(data.giatrilg=="NULL"){
                alert("Bạn cần đăng nhập để thực hiện chức năng này");
            }else if(data.giatrilg=="KH"){
                if(Number(document.getElementsByClassName("slmua")[gtvt].value)>999){
                    alert("Số lượng không hợp lệ");
                    document.getElementsByClassName("slmua")[gtvt].value=1;
                }else if(Number(document.getElementsByClassName("slmua")[gtvt].value)>Number(document.getElementsByClassName("slspcl")[gtvt].textContent)){
                    alert("Số lượng trong kho không đủ");
                    document.getElementsByClassName("slmua")[gtvt].value=1;
                }else{
                    var giatri=document.getElementsByClassName("masp")[gtvt].textContent;
                    var soluong = document.getElementsByClassName("slmua")[gtvt].value;
                    $.get("http://localhost:3000/getgiohang",function(data){
                        if(data.spgh.length==0){
                            $.post("http://localhost:3000/guigiohang",{masp:giatri,soluongmua:soluong},function(data1){
                                console.log("da gui du lieu len server: ", data1);
                            });
                            alert("Thêm thành công !!");
                            capnhatgiohang();
                        }else{
                            console.log("đã vào đây")
                            var bienxet=false;
                            var sp=[];
                            var sl=[];
                            var vt=0;
                            data.spgh.forEach(function(gt){
                                sp.push(gt);
                                // if(gt==giatri){
                                //     bienxet=true;
                                // }
                            });
                            data.slgh.forEach(function(gt1){
                                sl.push(gt1);
                            });
                            for(var i=0;i<sp.length;i++){
                                if(sp[i]==giatri){
                                    vt=i;
                                    bienxet=true;
                                }
                            }
                            if(bienxet==true){
                                document.getElementById("vtthem").textContent=gtvt;
                                document.getElementById("xnsl").textContent=sl[vt];
                                document.getElementById("xacnhanthem").style.display="block";
                            }else{
                                $.post("http://localhost:3000/guigiohang",{masp:giatri,soluongmua:soluong},function(data){
                                    console.log("da gui du lieu len server: ", data);
                                });
                                alert("Thêm thành công !!");
                                capnhatgiohang();
                            }
                        }
                    });
                }
                
            }else{
                alert("Bạn không thực hiện được chức năng này !!");
            }
    });
   // window.location="./";
}
function chucnangthem1(gtvt){
    $.get("http://localhost:3000/test2",function(data){
            if(data.giatrilg=="NULL"){
                alert("Bạn cần đăng nhập để thực hiện chức năng này");
            }else if(data.giatrilg=="KH"){
                if(Number(document.getElementsByClassName("slmua")[gtvt].value)>999){
                    alert("Số lượng không hợp lệ");
                    document.getElementsByClassName("slmua")[gtvt].value=1;
                }else if(Number(document.getElementsByClassName("slmua")[gtvt].value)>Number(document.getElementsByClassName("slsp")[gtvt].textContent)){
                    alert("Số lượng trong kho không đủ");
                    document.getElementsByClassName("slmua")[gtvt].value=1;
                }else{
                    var giatri=document.getElementsByClassName("masp102")[gtvt].textContent;
                    var soluong = document.getElementsByClassName("slmua")[gtvt].value;
                    $.get("http://localhost:3000/getgiohang",function(data){
                        if(data.spgh.length==0){
                            $.post("http://localhost:3000/guigiohang",{masp:giatri,soluongmua:soluong},function(data1){
                                console.log("da gui du lieu len server: ", data1);
                            });
                            alert("Thêm thành công !!");
                            capnhatgiohang();
                        }else{
                            console.log("đã vào đây")
                            var bienxet=false;
                            var sp=[];
                            var sl=[];
                            var vt=0;
                            data.spgh.forEach(function(gt){
                                sp.push(gt);
                                // if(gt==giatri){
                                //     bienxet=true;
                                // }
                            });
                            data.slgh.forEach(function(gt1){
                                sl.push(gt1);
                            });
                            for(var i=0;i<sp.length;i++){
                                if(sp[i]==giatri){
                                    vt=i;
                                    bienxet=true;
                                }
                            }
                            if(bienxet==true){
                                document.getElementById("vtthem").textContent=gtvt;
                                document.getElementById("xnsl").textContent=sl[vt];
                                document.getElementById("xacnhanthem").style.display="block";
                            }else{
                                $.post("http://localhost:3000/guigiohang",{masp:giatri,soluongmua:soluong},function(data){
                                    console.log("da gui du lieu len server: ", data);
                                });
                                alert("Thêm thành công !!");
                                capnhatgiohang();
                            }
                        }
                    });
                }
                
            }else{
                alert("Bạn không thực hiện được chức năng này !!");
            }
    });
   // window.location="./";
}

function themluon(num){
    var giatri=document.getElementsByClassName("masp")[num].textContent;
    var soluong = document.getElementsByClassName("slmua")[num].value;
    var numtong = Number(soluong) + Number(document.getElementById("xnsl").textContent);
    $.post("http://localhost:3000/guigiohang1",{masp:giatri,soluongmua:numtong},function(data){
                                    console.log("da gui du lieu len server: ", data);
                                });
                                alert("Thêm thành công !!");
                                document.getElementById("xacnhanthem").style.display="none";
                                capnhatgiohang();
    
}
function themluon1(num){
    var giatri=document.getElementsByClassName("masp102")[num].textContent;
    var soluong = document.getElementsByClassName("slmua")[num].value;
    var numtong = Number(soluong) + Number(document.getElementById("xnsl").textContent);
    $.post("http://localhost:3000/guigiohang1",{masp:giatri,soluongmua:numtong},function(data){
                                    console.log("da gui du lieu len server: ", data);
                                });
                                alert("Thêm thành công !!");
                                document.getElementById("xacnhanthem").style.display="none";
                                capnhatgiohang();
    
}

function logout(){
    $.post("http://localhost:3000/set/logout",{Logout:"1"},function(data){
            console.log("da gui du lieu len server: ", data);
        });
}
function anhgiohang(){
    document.getElementById("giohang").style.display="block";
}
function EventHandler(){
    $.get("http://localhost:3000/test1",function(data){
            if(data.giatrilg=="AD"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("khachhang").style.display = "none";
                document.getElementById("nhanvienbanhang").style.display = "none";
                document.getElementById("formcuaadmin").style.display = "block";
                document.getElementById("chuadangnhap").style.display = "none";
                document.getElementById("nhanviengiaohang").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "none";
                document.getElementById("cankichhoat").style.display = "none";
            }else if(data.giatrilg=="KH"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("khachhang").style.display = "block";
                document.getElementById("nhanvienbanhang").style.display = "none";
                document.getElementById("formcuaadmin").style.display = "none";
                document.getElementById("chuadangnhap").style.display = "none";
                document.getElementById("nhanviengiaohang").style.display = "none";
                document.getElementById("cankichhoat").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "none";
                $.get("http://localhost:3000/getgiohang",function(data){});
            }else if(data.giatrilg=="NVBH"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("khachhang").style.display = "none";
                document.getElementById("nhanvienbanhang").style.display = "block";
                document.getElementById("formcuaadmin").style.display = "none";
                document.getElementById("chuadangnhap").style.display = "none";
                document.getElementById("nhanviengiaohang").style.display = "none";
                document.getElementById("cankichhoat").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "none";
            }else if(data.giatrilg=="NVGH"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("khachhang").style.display = "none";
                document.getElementById("nhanvienbanhang").style.display = "none";
                document.getElementById("formcuaadmin").style.display = "none";
                document.getElementById("chuadangnhap").style.display = "none";
                document.getElementById("nhanviengiaohang").style.display = "block";
                document.getElementById("cankichhoat").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "none";
            }else if(data.giatrilg=="NVKD"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("khachhang").style.display = "none";
                document.getElementById("nhanvienbanhang").style.display = "none";
                document.getElementById("formcuaadmin").style.display = "none";
                document.getElementById("chuadangnhap").style.display = "none";
                document.getElementById("nhanviengiaohang").style.display = "none";
                document.getElementById("cankichhoat").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "block";
            }else if(data.giatrilg=="CKH"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("khachhang").style.display = "none";
                document.getElementById("nhanvienbanhang").style.display = "none";
                document.getElementById("formcuaadmin").style.display = "none";
                document.getElementById("chuadangnhap").style.display = "none";
                document.getElementById("cankichhoat").style.display = "block";
                document.getElementById("nhanviengiaohang").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "none";
            }else if(data.giatrilg=="NULL"){
                // document.getElementById("formcuaadmin111").style.display = "none";
                document.getElementById("nhanviengiaohang").style.display = "none";
                document.getElementById("khachhang").style.display = "none";
                document.getElementById("nhanvienbanhang").style.display = "none";
                document.getElementById("formcuaadmin").style.display = "none";
                document.getElementById("chuadangnhap").style.display = "block";
                document.getElementById("cankichhoat").style.display = "none";
                document.getElementById("nhanvienkinhdoanh").style.display = "none";
            }
        });
}

function capnhattentk(){
    $.get("http://localhost:3000/test1",function(data){
            if(data.giatrilg=="AD"){
                var tendn = data.idlogin;
                var hienthiuser = document.getElementById("iduser");
                hienthiuser.textContent = tendn;
            }else if(data.giatrilg=="KH"){
                var tendn = data.idlogin;
                var hienthiuser = document.getElementById("iduser");
                hienthiuser.textContent = tendn;
            }else if(data.giatrilg=="NVBH"){
                var tendn = data.idlogin;
                var hienthiuser = document.getElementById("iduser");
                hienthiuser.textContent = tendn;
            }else if(data.giatrilg=="NVGH"){
                var tendn = data.idlogin;
                var hienthiuser = document.getElementById("iduser");
                hienthiuser.textContent = tendn;
            }else if(data.giatrilg=="NVKD"){
                var tendn = data.idlogin;
                var hienthiuser = document.getElementById("iduser");
                hienthiuser.textContent = tendn;
            }else if(data.giatrilg=="CKH"){
                var tendn = "Tài khoản cần kích hoạt";
                var hienthiuser = document.getElementById("lbxinchao");
                hienthiuser.textContent = tendn;
                hienthiuser.style.color="red";
            }else if(data.giatrilg=="NULL"){
            }
        });
}

function changePrice(bt, vt) {
    
    var giacu = document.getElementsByClassName("giasp")[vt];
    var giamoi = document.getElementsByClassName("nhapgia")[vt];
    var masp1 = document.getElementsByClassName("masp")[vt];
    // alert(doigia);
    if (doigia[vt] == 0) { // bat dau doi gia
        giamoi.style.display = "block";
        giamoi.value = giacu.textContent;
        giacu.style.display = "none";
        bt.innerHTML = "Xác nhận";
        doigia[vt] = 1;
        
    } else { // ket thuc doi gia 
        giacu.style.display = "block";
        giacu.textContent = giamoi.value;
        giamoi.style.display = "none";
        bt.innerHTML = "Đổi giá";
        doigia[vt] = 0;
        alert("Đổi giá thành công");
        $.post("http://localhost:3000/set/doigia",{masanpham:masp1.textContent,giasp1:giamoi.value},function(data){
            console.log("da gui du lieu len server: ", data);
        });
    }
}


function changePrice1(bt, vt) {
    
    var giacu = document.getElementsByClassName("giasp")[vt];
    var giamoi = document.getElementsByClassName("nhapgia")[vt];
    var masp1 = document.getElementsByClassName("masp102")[vt];
    // alert(doigia);
    if (doigia[vt] == 0) { // bat dau doi gia
        giamoi.style.display = "block";
        giamoi.value = giacu.textContent;
        giacu.style.display = "none";
        bt.innerHTML = "Xác nhận";
        doigia[vt] = 1;
        
    } else { // ket thuc doi gia 
        giacu.style.display = "block";
        giacu.textContent = giamoi.value;
        giamoi.style.display = "none";
        bt.innerHTML = "Đổi giá";
        doigia[vt] = 0;
        alert("Đổi giá thành công");
        $.post("http://localhost:3000/set/doigia",{masanpham:masp1.textContent,giasp1:giamoi.value},function(data){
            console.log("da gui du lieu len server: ", data);
        });
    }
}

function showgia(so) {
    $.get("http://localhost:3000/test2",function(data){
            if(data.giatrilg=="NV" || data.giatrilg=="AD"){
                document.getElementsByClassName("doigiaNV")[so].style.display = "block";
            }
    });
    
    
}

function startShow(num) {
                document.getElementsByClassName("xem")[num].style.display = "block";
                document.getElementsByClassName("them")[num].style.display = "block";
                document.getElementsByClassName("slmua")[num].style.display = "block"; // new
                document.getElementsByClassName("slsp")[num].getElementsByTagName("I")[0].style.display = "block"; // new
}


function endShow(num) {
                document.getElementsByClassName("xem")[num].style.display = "none";
                document.getElementsByClassName("them")[num].style.display = "none";
                document.getElementsByClassName("slmua")[num].style.display = "none"; // new
                document.getElementsByClassName("slsp")[num].getElementsByTagName("I")[0].style.display = "none"; // new
}

// Show button NV
function showChangePrice() {
    var i;
    var dgnv = document.getElementsByClassName("doigiaNV");
    if (taikhoan == "NV") {
        for (i = 0; i < dgnv.length; i++) {
            dgnv[i].style.display = "block";
        }
    } else {
        for (i = 0; i < dgnv.length; i++) {
            dgnv[i].style.display = "none";
        }
    }
}

// Slide show
var slideIndex = 1;

// showSlide(slideIndex);

function plusslide(n) {
    showSlide(slideIndex += n);
    aalert();
}

function currentslide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlideImg(n) {
    var i;
    var slides = document.getElementsByClassName("slideimg");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";    
}
// New
// "Xem" button
function showDetail(num) {
    $.get("http://localhost:3000/ttt",function(data){
            var dsgsp=[];
            var dsmsp=[];
            var dstsp=[];
            var dsasp=[];
            var dsqc=[];
            data.giasanpham.forEach(function(val) {
                dsgsp.push(val);
            });
            data.msp.forEach(function(val1){
                dsmsp.push(val1);
            });
            data.tensanpham.forEach(function(val2){
                dstsp.push(val2);
            });
            data.hinhanhsp.forEach(function(val3){
                dsasp.push(val3);
            });
            data.qcsp.forEach(function(val4){
                dsqc.push(val4);
            });
            var tsp = document.getElementsByClassName("tensp")[num].innerText;
            var gsp = document.getElementsByClassName("giasp")[num].innerText;
            document.getElementById('md').style.display = "block"; 
            document.getElementById("tenSanPham").innerText = tsp; // giá trị này có thế lấy dc
            document.getElementById("giaSanPham").innerText = gsp; // giá trị này có thế lấy dc
            document.getElementById("pageImg").src=dsasp[num];
            document.getElementById("dongSanPham").innerText = dsqc[num]; // còn các giá trị phía dưới thì phải tìm
            document.getElementById("hangTon").innerText = "Vẫn còn hàng"; // cách lấy từ csdl, giá trị hiện
            document.getElementById("giaVAT").innerText = dsgsp[num]; // tại ko chính xác, đặc biệt là hình ảnh sp
            // module.exports = {
            //     sayHello1 : function(){
            //         return 'dsmsp[0]';
            //     }
            // }
    });
    
    // image[0].src = image[5].src = ;
    // image[1].src = image[6].src = ;
    // image[2].src = image[7].src = ;
    // image[3].src = image[8].src = ;
    // image[4].src = image[9].src = ;

}

function showChangePrice(vt) {
    var i;
    var dgnv = document.getElementsByClassName("doigiaNV");
    if (taikhoan == "NV") {
        dgnv[vt].style.display = "block"; 
    } 
}

function hideChangePrice() {
    var i;
    var dgnv = document.getElementsByClassName("doigiaNV");
    for (i = 0; i < dgnv.length; i++) {
        dgnv[i].style.display = "none";
    }
}


// var md;
window.onclick = function(event) {
    var modal = document.getElementById('md');
    if (event.target == modal) {
        hideDetail();
    }
}

// Hide nav when scroll 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";

    } else {
        document.getElementById("navbar").style.top = "2000px";
    }
    prevScrollpos = currentScrollPos;
}

function hideDetail() {
    hideChangePrice();
    document.getElementById('md').style.display = "none";
    if (kmai == 1) {
        document.getElementsByClassName("tintuc")[vtri].style.display = "none";
        document.getElementById("addTtuc").style.display = "none"; // new
        kmai = 0;
    }
}

function hideDetail2() {
    document.getElementById('laylaimk').style.display = "none"; 
    document.getElementById('xacnhanthem').style.display = "none"; 
}


function hideDetail_sp() {
    resetAdd()
    document.getElementById('addForm').style.display = "none"; // new
}

window.onclick = function(event) {
    var modal1 = document.getElementById('md'); 
    var modal2 = document.getElementById('addForm'); 
    var modal3 = document.getElementById('exitWindow'); // new
    if (event.target == modal2) {
        hideDetail_sp();
    }
    if (event.target == modal1 || event.target == modal3) { //new
        hideDetail()
    } 
}

function addFood() {
    var masp = document.getElementById("mahang").value;
    var tensp = document.getElementById("tenhang").value;
    var gia = document.getElementById("giahang").value;
    var donvi = document.getElementById("donvi").value;
    var quycach = document.getElementById("quycach").value;
    var nsx = document.getElementById("nsx").value;
    var hsd = document.getElementById("hsd").value;
    var km = document.getElementById("km").value;
    var ngaykm = document.getElementById("ngaykm").value;
}

function resetAdd() {
    document.getElementById("mahang").value = "";
    document.getElementById("tenhang").value = "";
    document.getElementById("giahang").value = "";
    document.getElementById("quycach").value = "";
}
// New (
// Show "Tin tuc" content
var kmai, vtri;
function showContent(num) {
    kmai = 1;
    vtri = num;
    document.getElementById('md').style.display = "block";
    document.getElementsByClassName("tintuc")[num].style.display = "block";
}

// Cam nang nau an
var CNswitch, TNswitch;
function CamNang() {
    // alert(CNswitch+" "+num);
    if(CNswitch != 1) {
        document.getElementsByClassName("side-box")[0].style.bottom = "-270px"; // New: đổi 0 -> -270
        CNswitch = 1;
    } else {
        document.getElementsByClassName("side-box")[0].style.bottom = "0"; // New: đổi -270 -> 0
        CNswitch = 0;
    }
}

function TinNhan() {
    if(TNswitch != 1) {
        document.getElementsByClassName("side-box")[2].style.bottom = "0";
        document.getElementsByClassName("side-box")[2].style.width = "400px";
        TNswitch = 1;
    } else {
        document.getElementsByClassName("side-box")[2].style.bottom = "-270px";
        document.getElementsByClassName("side-box")[2].style.width = "200px";
        TNswitch = 0;
    }
}

var SubBoxSwitch;
function showSubBox(num) {
    if(SubBoxSwitch != num) {
        document.getElementsByClassName("side-box sub")[0].style.display = "block";
        document.getElementById("nguyenLieu").innerHTML = "<b>Nguyên liệu</b><br><br>" + nL_gaHap[num];
        document.getElementById("cachLam").innerHTML = "<b>Cách làm</b><br><br>" + cL_gaHap[num];
        SubBoxSwitch = num;
    } else {
        document.getElementsByClassName("side-box sub")[0].style.display = "none";
        SubBoxSwitch = -1;
    }
}



var nL_gaHap =  [
    "+ 1 con gà ta khoảng 1.3 kg.<br>+ 1 nhánh gừng gừng.<br>+ 30 ml rượu .<br>+ Xì dầu.<br>+ Gia vị: Muối, đường, bột nêm.<br>",
    "Gà 1 con<br>Mật ong 1 bát<br>Hoa hồi 8 chiếc<br>Thảo quả 2 chiếc<br>Quế 5 thanh<br>Tỏi 1 củ<br>Gừng 1 củ<br>Hành lá 1 nắm<br>Xì dầu 1 bát<br>Mạch nha 1/2 bát<br>Ngũ vị hương 1 thìa<br>Muối 1 thìa<br>Đường 1 thìa<br>Hạt tiêu 1 thìa<br>",
    "(Phần ăn dành cho 2 người)<br>Chân gà 500 g<br>Xả 3 củ<br>Gừng 3 củ<br>Muối 153/50 thìa<br>Nước mắm 1 bát<br>Dấm 1/2 bát<br>Đường 1 thìa<br>Tỏi 2 củ<br>Quất 8 quả<br>Lá chanh 5 lá<br>Ớt tươi 1 quả<br>",
    "",
    "Đùi gà góc tư 2 chiếc<br>Hành tây 1/2 củ<br>Ớt chuông xanh 1/4<br>Thơm (dứa) chín 1/4 trái<br>Ớt sừng 2 trái<br>Hành tím băm 1 muỗng<br>Nước tỏi 2 muỗng<br>Nước hành tím 2 muỗng<br>Nước dừa tươi 2 chén<br>Rau xà lách<br>Gia vị: Dầu ăn, dầu điều, tiêu, nước mắm, tương ớt, nước bột năng, nước tương, hạt nêm.<br>",
    "Gà ta 1 con khoảng dưới 1,5 kg(gà mái chuẩn bị đẻ)<br>Gừng, tỏi, ớt, chanh, muối đường, dầu hào.<br>Gạo bắc thơm (hoặc gạo tám thơm)",
    "Xiên tre<br>Đùi gà<br>Hành lá paro<br>Dầu thực vật<br>½ chén nước tương<br>½ chén Mirin<br>¼ chén rượu Sake<br>¼ chén nước<br>2 muỗng café đường nâu<br>Wasabi, mayonaise",
    "Cánh gà 800g<br>Tỏi 1,5 củ<br>Hành tím 5 củ<br>Ớt 4 trái<br>Tiêu 1 muỗng<br>Đường 5 muỗng<br>Nước mắm 1/2 chén",
    "– Thịt đùi gà 500g<br>– Lá chanh 5 lá không nên chọn lá quá già.<br>– Bột canh, nước mắm, mỳ chính, dầu ăn…",
    ""
];
var cL_gaHap = [
    "Gà đem rửa sạch lại rồi lau khô<br>Gừng rửa sạch, thái lát. Hành lá rửa sạch cắt riêng phần đầu trắng ra. Tỏi bóc vỏ, băm nhỏ.<br>Nhồi phần đầu trắng hành và gừng vào trong bụng con gà<br>Trộn đều 6 thìa canh xì dầu cùng với 1 thìa canh đường và tỏi băm<br>Sau đó, quét đều hỗn hợp xì dầu trên lên khắp mình con gà, để ướp khoảng 30 phút cho ngấm đều gia vị.<br>Sau khi ướp, cho gà vào lò vi sóng quay 2 phút cho mặt da gà se lại rồi đem gà đi hấp khoảng 30 phút cho gà chín là được<br>",
    "Sơ chế nguyên liệu:<br>- Gà vặt lông, rửa sạch, bỏ lòng mề. Để gà trắng, sạch và hết mùi hôi, bạn hãy dùng rượu trắng và muối xát đều lên toàn bộ con gà rồi xả lại với nước sạch.<br>- Tỏi bóc vỏ, gừng cạo vỏ rồi thái nhỏ, hành lá rửa sạch.<br>Bước 1: Bạn cho 1 thìa dầu ăn vào nồi, thêm hoa hồi, thảo quả, quế, tỏi, hành lá, gừng vào đảo đều.<br>Bước 2: Sau đó, bạn thêm 2 lít nước, 1 bát xì dầu, 1/2 bát mạch nha, 1 thìa ngũ vị hương, 1 thìa muối, 1 thìa hạt tiêu, 1 thìa đường vào nồi, khuấy đều tay. Đậy nắp vung lại rồi đun đến khi nước sôi thì thêm 1 bát mật ong và gà vào đun tiếp.<br>Bước 3: Đun sôi khoảng 5 phút thì vớt gà ra, bỏ vào lò quay 10 phút ở nhiệt độ 150 độ C. <br>Bước 4: Bạn cho dầu ăn vào chảo, đun sôi rồi tưới đều lên toàn bộ con gà. Cuối cùng, bạn chặt gà thành từng miếng vừa ăn ra đĩa và thưởng thức<br>",
    "Bước 1: Chân gà mua về rửa sạch, bỏ móng rồi chặt đôi cho ra bát.<br>Bước 2:Cho chân gà vào nồi, thêm 2 củ xả cắt đôi, 1 củ gừng thái lát, 2thìa muối rồi đổ nước xâm xấp mặt rồi đun sôi. Khi đun bạn nhớ hớt bọt đi nhé!<br>Bước 3: Vớt gà ra bát nước đá. Bạn ngâm chân gà với nước đá 5 phút rồi bỏ gà vào ngăn mát tủ lạnh 20 phút nữa.<br>Bước 4: Cho 2/3 bát nước mắm, 1/2 bát dấm, 2 bát nước, 1 thìa đường, 1 thìa muối vào nồi, khuấy đều rồi đun sôi.<br>Bước 5: Cho chân gà vào lọ, thêm xả, ớt, lá chanh thái nhỏ, tỏi bóc vỏ,quất cắt đôi, gừng thái lát và nước mắm ngâm chân gà vào, đậy kín nắp rồi ngâm trong 1 ngày là có thể ănđược rồi.<br>Bước 6: Bạn cho chân gà ra đĩa và thưởng thức thôi.<br><br><b style='padding-left: 170px'>Xem video hướng dẫn</b><br><iframe width='500' height='250' src='https://www.youtube.com/embed/-UmH-SplDu4' frameborder='0'allow='autoplay; encrypted-media' allowfullscreen></iframe>",
    "<b style='padding-left: 170px'>Xem video hướng dẫn</b> <iframe width='500' height='250' src='https://www.youtube.com/embed/wQA5lWHFruw' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
    "Đùi gà góc tư rửa sạch, lọc bỏ xương rồi bạn đem ướp với 2 nước hành tím + 2 nước tỏi + 1 nước mắm + ½ tiêu + 1 nước tương + 1 hạt nêm. Thời gian khoảng 15-10 phút để thịt gà ngấm gia vị.<br>Thơm (dứa): Gọt vỏ, bỏ phần mắt dứa, thái rẻ quạt.<br>Hành tây: Bóc vỏ, thái hình quả trám.<br>Gừng: Cạo vỏ, thái hình thoi.<br>Ớt chuông xanh, ớt sừng: Rửa sạch, thái hình quả trám.<br>Xà lách: Nhặt và rửa sạch, vớt ra để ráo.<br> Bắc nồi lên bếp, cho chút dầu và phi thơm hành tím, sau đó cho gừng + hành tây + ớt sừng + ớt chuông + thơm (dứa) cùng với 1 muỗng hạt nêm. Đảo đều và nhnh tay, bạn nên để lửa to khi xào để rau củ mướt và giòn. Khi phần rau củ chín, bạn trút ra đĩa.<br>Cho chảo lên bếp, làm nóng dầu ăn, bạn cho thịt gà vào áp chảo cho đến khi chín vàng đều 2 mặt. Khi chiên, bạn nên chiên phần mặt có da gà trước và nếu có mỡ ở phần da này sẽ chảy ra, như vậy món thịt gà áp chảo sẽ ngon và giòn, ăn không ngấy. Thịt gà chín, cho ra đĩa để ráo dầu.<br>Bắc nồi lên bếp và bạn cho 2 chén nước dừa + 2 tương ớt + 4 nước tương + 1 dầu điều, khuấy đều và bạn đun nhỏ lửa chừng 10 phút rồi cho phần rau củ đã được xào vào. Thêm 1 muỗng nước bột năng và khuấy đều 1, 2 lần nữa rồi tắt bếp.<br>",
    "Bước 1: Làm gà sạch rồi cho vào nồi luộc. Khi luộc cho vài lát gừng, chút muối và nhánh hành vào. Gừng, hành có tác dụng làm khử mùi cho gà và nồi nước dùng. Khi nồi luộc sôi được khoảng 10 phút thì bạn tắt bếp và cứ để ngâm gà như thế khoảng 30 – 40 phút là gà chín dừ mà không bị nát. Trong thời gian đó chúng ta chế biến nước tương.<br>Gà rửa sạch cho vào nồi luộc.<br>Luộc gà khoảng 10 phút rồi để ngâm cho gà chín dừ mà không bị nát<br>Bước 2: Nước tương bao gồm 2 thìa mắm, nửa thìa đường, 1/4 thìa chanh, 2 nhánh tỏi to băm nhuyễn, gừng 1 nhánh băm nhuyễn, 2 thìa súp tương ớt, 1/2 thìa nước sôi nguội. Đánh tan số gia vị này lên bạn sẽ có một bát súp chấm gà ngon tuyệt.<br>Pha nước chấm cho món cơm gà Hải Nam,nước tương pha vừa đủ cho các khẩu phần ăn.<br>Bước 3: Vớt gà ra để ráo. Cho 4 nhánh tỏi vào phi thơm cùng với mỡ gà, cho thêm chút dầu hào cho có màu và thơm. Phi xong đổ nước luộc gà vào vừa đủ để nấu cơm. Cho gạo vào và nấu cơm đến khi chín.<br>Gà vớt ra cho ráo để chuẩn bị làm cơm gà. Cho gạo vào nước luộc nấu cơm.<br>Bước 4: Chặt gà theo thớ ngang, chặt dứt khoát để thịt gà không bị nát. Phần nước gà còn lại bạn cho hành lá vào là được một bát canh ngọt và ngon. Xới cơm ra bát và thưởng thức thôi nào.Chặt gà dứt khoát để không bị nát<br>Chặt gà dứt khoát và ngang thớ thì khi ăn không bị dai Cách làm món cơm gà ngon<br>Để những món ăn chế biến với gà được phong phú bạn nên xem thêm cách làm lẩu gà nấm, ngải cứu, cánh gà kho khoai môn… cũng rất ngon, hấp dẫn đấy nhé. Hãy thay đổi cách chế biến thường xuyên để giúp gia đình ăn luôn được ngon miệng nhé.",
    "Bước 1: Ngâm xiên tre trong nước khoảng 30 phút.Bước 1: Ngâm xiên tre trong nước khoảng 30 phút. Bước 2: Lấy một cái chảo nhỏ, thêm mirin, nước tương, sake, nước, đường và phần hành lá, rồi đun sôi ở nhiệt độ cao. Sau khi sôi, sau đó giảm lửa, nấu liu riu 30 phút, để nước sốt sệt và bóng hơn.<br>Bước 3: Cắt hành lá paro thành từng khúc khoảng 2.5cm.<br>Bước 4: Cắt thịt gà dài khoảng 2.5cm<br>Bước 5: Gấp đôi miếng thịt gà và xiên vào que<br>Bước 6: Xiên xen kẻ 1 miếng gà, 1 miếng hành lá paro<br>Bước 7:: Quét một lớp mỡ lên vĩ nướng, đặt xiên que lên trên.<br>Bước 8: Nướng và trở đều 2 mặt trong vòng 6 phút.<br>Bước 9: Quét một lớp nước sốt Yakitori lên xiên thịt và nướng tiếp trong vòng 3~4 phút.<br>Bước 10: Lấy xiên gà ra khỏi lò nướng và quét thêm 1 lớp nước sốt Yakitori.<br>Món gà nướng xiên que chấm với washabi mayonnaise (trộn mù tạt và mayonnaise với nhau) càng làm tăng hương vị cho món ăn.<br>",
    "- Cánh gà: Rửa sạch, mỗi cánh gà chặt thành 2 khúc (không ướp gia vị).<br>Tỏi, hành tím, ớt: Băm nhuyễn.<br>- Chiên gà: Bắc chảo dầu thật nóng, sau đó chiên gà (chiên ngập dầu). Gà phải chiên thật là giòn, vàng, không bị ướt dính.<br>Áo nước mắm cho gà:<br>Lấy cái chảo khác để áo nước mắm cho gà vừa mới chiên xong.<br>Lấy nửa muỗng dầu ăn, đợi dầu ăn nóng, bỏ tỏi, hành tím, ớt đã băm nhuyễn vào, cho thêm 1 muỗng tiêu.<br>Khi làm thấy hành, tỏi, ớt hơi khô chuyển sang màu vàng thì cho nửa chén nước mắm nguyên chất, 5 muỗng đường vào.<br>Khuấy hỗn hợp đều tay, khi cảm thấy bắt đầu sệt lại thì cho gà đã chiên vào.<br>Tiếp tục đảo gà cho đến khi chuyển sang màu hơi đậm thì tắt bếp.<br>",
    "– Thịt gà rửa sạch, sau đó chặt miếng vừa ăn nhá.<br>– Cho thịt gà vào nồi và đun sôi, trong quá trình đun nếu có bọt nổi lên chúng ta dùng vá vớt ra, Sau khi nước sôi chúng ta vớt thịt ga ra sau đó rửa lại bằng nước sạch, cho thịt gà rớt hết cách mảnh xương vụn ra. Làm như thế gà trong lúc rang sẽ không ra nước và gà sẽ ngon và ngọt hơn.<br>– Cho thịt gà vào mọt cái tô sau đó cho 1 thìa café bột canh, mỳ cheính, dầu ăn và đào đều cho thịt gà ngấm gia vị.<br>– Lá chanh rửa sạch thái nhỏ.<br>– Chúng ta bắc chảo lên bếp sau đó cho thịt gà vào và rang khoảng 10 phút cho thịt săn lại và tiếp tục cho 2 thìa nước mắm vào và rang tiếp khi nào gà chín thì tắt bếp. Lúc gà đang nóng chúng ta cho lá chanh vào đảo sơ quá nhá.<br>– Múc gà ra đĩa và thưởng thức thôi.",
    "<iframe width='500' height='250' src='https://www.youtube.com/embed/rtOCcPSsoEM' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>",
];



// New : for (i = 1;...) thay cho i = 0 để tránh cho nút thêm bị dồn về sau, ngay = .. event-date đổi thành thoigian
function dateSort() { 
    var ngay, ptu, sortSwitch, i;
    sortSwitch = true; // dùng để điều khiển vòng lặp, giá trị ban đầu là true
    while (sortSwitch) {
        sortSwitch = false; // bên trong vòng lặp giá trị bị chuyển sang false, nếu ko có sự kiện
        // nào khác thay đổi nó thì khi tới cuối vòng lặp sẽ kết thúc
        ptu = document.getElementsByClassName("item");        // vị trí các phần tử cần sắp xếp
        ngay = document.getElementsByClassName("thoigian"); // vị trí lấy ngày của các phần tử đó
        for (i = 0; i < (ngay.length - 1); i++) { // duyệt lần lượt qua tất cả các phần tử 
            if (soSanh(ngay[i].innerHTML, ngay[i+1].innerHTML)) { // so sánh ngày hiện tại và ngày kế, xem hàm soSanh()
                ptu[i].parentNode.insertBefore(ptu[i + 1], ptu[i]); // đẩy phần tử kế ra trước p.tử hiện tại
                sortSwitch = true; //| kết thúc duyệt, nhưng lại lặp lại vòng lặp để tìm hai phần tử có
                break;             //| thể đổi vị trí khác
            }
        }
    } 
}
function soSanh(text1, text2) { // so sánh 2 ngày ở dạng text (DD/MM/YYYY, DD-MM-YYYY, DD,MM,YYYY) 
    var date1, date2;           // trả về giá trị boolean true nếu text1 < text2, ngược lại trả về false
    date1 = new Date();
    date2 = new Date();
    date1.setFullYear(text1.slice(6, 10));      //|
    date1.setMonth(text1.slice(3, 5));          //|
    date1.setDate(Number(text1.slice(0, 2))-1); //| sắp xếp vị trí ngày tháng năm phù hợp với định
    date2.setFullYear(text2.slice(6, 10));      //| dạng của Date()
    date2.setMonth(text2.slice(3, 5));          //|
    date2.setDate(Number(text2.slice(0, 2))-1); //|
    if (date1 < date2) {return true;} // so sánh
    else {return false;}
}
function xemchitiet(ma){
    $.post("/guimaxem",{tmaxem:ma},function(data){
        console.log("da gui du lieu len server",data);
    });
    window.location="../xemchitiet/chitietsanpham.html";
}

//phan moi

function setsizesearch(){
    document.getElementById("search1").style.width="250px";
    document.getElementById("menutimkiem").style.display="none";
}

function setsizeout(){
    var text = document.getElementById('search1').value;
    if (text == "") {
        document.getElementById("search1").style.marginLeft="-70px";
        document.getElementById("searchSpace").style.marginLeft="-70px";
        document.getElementById("search1").style.width="30px";
        document.getElementById("menutimkiem").style.marginTop="-20px"
        document.getElementById("menutimkiem").style.display="block";
    }
}

function onInputSearch() {
    var text = document.getElementById('search1').value;
    if (text != "") {
        document.getElementById("searchSpace").style.display = "block";
        search();
    } else {
        document.getElementById("searchSpace").style.display = "none";
    }
}

function hideSearch() {
    document.getElementById("searchSpace").style.display = "none";
}

function search() {
    var searchCharacter, searchElement, i, a;
    searchCharacter = document.getElementById('search1').value.toUpperCase();
    searchElement = document.getElementById("searchSpace").getElementsByTagName("P");
    

    for (i = 0; i < searchElement.length; i++) {
        var a = searchElement[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(searchCharacter) > -1) {
            searchElement[i].style.display = "";
        } else {
            searchElement[i].style.display = "none";
        }
    }
}
// Sự kiện khi nhấn phím enter trong khung tìm kiếm
var inputSpace = document.getElementById('search1');
inputSpace.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        hideSearch();
        alert("Search...");

    }
});

// function themtimkiem(){
//     $.get("http://localhost:3000/ttt",function(data){
//         var tmasp=[];
//         var tgiasp=[];
//         var ttensp=[];
//         var tanhsp=[];
//         var tqcsp=[];
//         var dskm=[];
//         var dsnkm=[];
//         var dsnktkm=[];
//             data.giasanpham.forEach(function(val) {
//                 tgiasp.push(val);
//             });
//             data.msp.forEach(function(val1){
//                 tmasp.push(val1);
//             });
//             data.tensanpham.forEach(function(val2){
//                 ttensp.push(val2);
//             });
//             data.hinhanhsp.forEach(function(val3){
//                 tanhsp.push(val3);
//             });
//             data.qcsp.forEach(function(val3){
//                 tqcsp.push(val3);
//             });
//             data.xdskm.forEach(function(val3){
//                 dskm.push(val3);
//             });
//             data.xdsnkm.forEach(function(val3){
//                 dsnkm.push(val3);
//             });
//             data.xdsnktkm.forEach(function(val3){
//                 dsnktkm.push(val3);
//             });
//             for(var i=0;i<tgiasp.length;i++){
//                 if(ttensp[i].length<15){
//                     $("#searchSpace").append(`<p><a onclick="xemchitiet('`+tmasp[i]+`')">`+ttensp[i]+`&emsp;&emsp;</a></p>`)
//                 }else{
//                     $("#searchSpace").append(`<p><a onclick="xemchitiet('`+tmasp[i]+`')">`+ttensp[i]+`</a></p>`)
//                 }
                
//             }
//         });
// }
function themtimkiem(){
    $.get("http://localhost:3000/laykhuyenmai",function(data){
        var tde=[];
        var stt=[];
        data.xtde.forEach(function(val) {
            tde.push(val);
        });
        data.xstt.forEach(function(val) {
            stt.push(val);
        });
        for (var j = 0; j < tde.length; j++) {
            if(tde[j].length<15){
                $("#searchSpace").append(`<p><a class="tdekm" href="../TinTuc/Khuyen_mai.html">`+tde[j]+`&emsp;&emsp;</a></p>`)
            }else{
                $("#searchSpace").append(`<p><a class="tdekm" href="../TinTuc/Khuyen_mai.html">`+tde[j]+`</a></p>`)
            }
        }
    });

    $.get("http://localhost:3000/laysukien",function(data){
        var tde=[];
        var stt=[];
        data.xtde.forEach(function(val) {
            tde.push(val);
        });
        data.xstt.forEach(function(val) {
            stt.push(val);
        });
        for (var k = 0; k < tde.length; k++) {
            if(tde[k].length<15){
                $("#searchSpace").append(`<p><a class="tdesk" href="../TinTuc/Su_kien.html">`+tde[k]+`&emsp;&emsp;</a></p>`)
            }else{
                $("#searchSpace").append(`<p><a class="tdesk" href="../TinTuc/Su_kien.html">`+tde[k]+`</a></p>`)
            }
        }  
    });

    $.get("http://localhost:3000/laybeplb",function(data){
        var tde=[];
        var stt=[];
        data.xtde.forEach(function(val) {
            tde.push(val);
        });
        data.xstt.forEach(function(val) {
            stt.push(val);
        });
        for (var h = 0; h < tde.length; h++) {
            if(tde[h].length<15){
                $("#searchSpace").append(`<p><a class="tdeblb" href="../TinTuc/Bep_lb.html">`+tde[h]+`&emsp;&emsp;</a></p>`)
            }else{
                $("#searchSpace").append(`<p><a class="tdeblb" href="../TinTuc/Bep_lb.html">`+tde[h]+`</a></p>`)
            }
        }  
    });

    $.get("http://localhost:3000/ttt",function(data){
        var tmasp=[];
        var tgiasp=[];
        var ttensp=[];
        var tanhsp=[];
        var tqcsp=[];
        var dskm=[];
        var dsnkm=[];
        var dsnktkm=[];
            data.giasanpham.forEach(function(val) {
                tgiasp.push(val);
            });
            data.msp.forEach(function(val1){
                tmasp.push(val1);
            });
            data.tensanpham.forEach(function(val2){
                ttensp.push(val2);
            });
            data.hinhanhsp.forEach(function(val3){
                tanhsp.push(val3);
            });
            data.qcsp.forEach(function(val3){
                tqcsp.push(val3);
            });
            data.xdskm.forEach(function(val3){
                dskm.push(val3);
            });
            data.xdsnkm.forEach(function(val3){
                dsnkm.push(val3);
            });
            data.xdsnktkm.forEach(function(val3){
                dsnktkm.push(val3);
            });
            for(var i=0;i<tgiasp.length;i++){
                if(ttensp[i].length<15){
                    $("#searchSpace").append(`<p><a class="ttensp" onclick="xemchitiet('`+tmasp[i]+`')">`+ttensp[i]+`&emsp;&emsp;</a></p>`)
                }else{
                    $("#searchSpace").append(`<p><a class="ttensp" onclick="xemchitiet('`+tmasp[i]+`')">`+ttensp[i]+`</a></p>`)
                }
                
            }
        });
}

function hientieude() {
    dstde = document.getElementById("menutimkiem");
    ttensp = document.getElementsByClassName("ttensp");
    tdekm = document.getElementsByClassName("tdekm"); 
    tdesk = document.getElementsByClassName("tdesk");
    tdeblb = document.getElementsByClassName("tdeblb");
    var i1, i2, i3, i4;
    if (dstde.value == 1) {
        for (i1 = 0; i1 < tdekm.length; i1++) {
            tdekm[i1].style.display = "none";
        }
        for (i2 = 0; i2 < tdesk.length; i2++) {
            tdesk[i2].style.display = "none";
        }
        for (i3 = 0; i3 < tdeblb.length; i3++) {
            tdeblb[i3].style.display = "none";
        }
        for (i4 = 0; i4 < ttensp.length; i4++) {
            ttensp[i4].style.display = "block";
        }
    } else if (dstde.value == 2) {
        for (i1 = 0; i1 < ttensp.length; i1++) {
            ttensp[i1].style.display = "none";
        }
        for (i2 = 0; i2 < tdesk.length; i2++) {
            tdesk[i2].style.display = "none";
        }
        for (i3 = 0; i3 < tdeblb.length; i3++) {
            tdeblb[i3].style.display = "none";
        }
        for (i4 = 0; i4 < tdekm.length; i4++) {
            tdekm[i4].style.display = "block";
        }
    } else if (dstde.value == 3) {
        for (i1 = 0; i1 < ttensp.length; i1++) {
            ttensp[i1].style.display = "none";
        }
        for (i2 = 0; i2 < tdekm.length; i2++) {
            tdekm[i2].style.display = "none";
        }
        for (i3 = 0; i3 < tdeblb.length; i3++) {
            tdeblb[i3].style.display = "none";
        }
        for (i4 = 0; i4 < tdesk.length; i4++) {
            tdesk[i4].style.display = "block";
        }
    } else if (dstde.value == 4) {
        for (i1 = 0; i1 < ttensp.length; i1++) {
            ttensp[i1].style.display = "none";
        }
        for (i2 = 0; i2 < tdekm.length; i2++) {
            tdekm[i2].style.display = "none";
        }
        for (i3 = 0; i3 < tdesk.length; i3++) {
            tdesk[i3].style.display = "none";
        }
        for (i4 = 0; i4 < tdeblb.length; i4++) {
            tdeblb[i4].style.display = "block";
        }
    } else {
        for (i1 = 0; i1 < ttensp.length; i1++) {
            ttensp[i1].style.display = "block";
        }
        for (i2 = 0; i2 < tdekm.length; i2++) {
            tdekm[i2].style.display = "block";
        }
        for (i3 = 0; i3 < tdesk.length; i3++) {
            tdesk[i3].style.display = "block";
        }
        for (i4 = 0; i4 < tdeblb.length; i4++) {
            tdeblb[i4].style.display = "block";
        }
    }
}
var x=false;
function hehe(so){
    $.post("http://localhost:3000/guisokm",{xso:so},function(data1){
        x=true;
    });
    if(x==true){
        window.location="../TinTuc/Khuyen_mai.html";
    }
    //window.location="../TinTuc/Khuyen_mai.html"
}
var y=false;
function haha(so){
    $.post("http://localhost:3000/guisosk",{xso:so},function(data1){
        y=true;
    });
    if(y==true){
        window.location="../TinTuc/Su_kien.html";
    }
    //window.location="../TinTuc/Khuyen_mai.html"
}

var z=false;
function hoho(so){
    $.post("http://localhost:3000/guisobep",{xso:so},function(data1){
        z=true;
    });
    if(z==true){
        window.location="../TinTuc/Bep_lb.html";
    }
    //window.location="../TinTuc/Khuyen_mai.html"
}

function themtimkiem(){
    $.get("http://localhost:3000/laykhuyenmai",function(data){
        var tde=[];
        var stt=[];
        data.xtde.forEach(function(val) {
            tde.push(val);
        });
        data.xstt.forEach(function(val) {
            stt.push(val);
        });
        for (var j = 0; j < tde.length; j++) {
            if(tde[j].length<15){
                $("#searchSpace").append(`<p onclick="hehe(`+stt[j]+`)"><a class="tdekm">`+tde[j]+`&emsp;&emsp;</a></p>`)
            }else{
                $("#searchSpace").append(`<p onclick="hehe(`+stt[j]+`)"><a class="tdekm">`+tde[j]+`</a></p>`)
            }
        }
    });

    $.get("http://localhost:3000/laysukien",function(data){
        var tde=[];
        var stt=[];
        data.xtde.forEach(function(val) {
            tde.push(val);
        });
        data.xstt.forEach(function(val) {
            stt.push(val);
        });
        for (var k = 0; k < tde.length; k++) {
            if(tde[k].length<15){
                $("#searchSpace").append(`<p onclick="haha(`+stt[k]+`)"><a class="tdesk" >`+tde[k]+`&emsp;&emsp;</a></p>`)
            }else{
                $("#searchSpace").append(`<p onclick="haha(`+stt[k]+`)"><a class="tdesk" >`+tde[k]+`</a></p>`)
            }
        }  
    });

    $.get("http://localhost:3000/laybeplb",function(data){
        var tde=[];
        var stt=[];
        data.xtde.forEach(function(val) {
            tde.push(val);
        });
        data.xstt.forEach(function(val) {
            stt.push(val);
        });
        for (var h = 0; h < tde.length; h++) {
            if(tde[h].length<15){
                $("#searchSpace").append(`<p onclick="hoho(`+stt[h]+`)"><a class="tdeblb" >`+tde[h]+`&emsp;&emsp;</a></p>`)
            }else{
                $("#searchSpace").append(`<p onclick="hoho(`+stt[h]+`)"><a class="tdeblb" >`+tde[h]+`</a></p>`)
            }
        }  
    });

    $.get("http://localhost:3000/ttt",function(data){
        var tmasp=[];
        var tgiasp=[];
        var ttensp=[];
        var tanhsp=[];
        var tqcsp=[];
        var dskm=[];
        var dsnkm=[];
        var dsnktkm=[];
            data.giasanpham.forEach(function(val) {
                tgiasp.push(val);
            });
            data.msp.forEach(function(val1){
                tmasp.push(val1);
            });
            data.tensanpham.forEach(function(val2){
                ttensp.push(val2);
            });
            data.hinhanhsp.forEach(function(val3){
                tanhsp.push(val3);
            });
            data.qcsp.forEach(function(val3){
                tqcsp.push(val3);
            });
            data.xdskm.forEach(function(val3){
                dskm.push(val3);
            });
            data.xdsnkm.forEach(function(val3){
                dsnkm.push(val3);
            });
            data.xdsnktkm.forEach(function(val3){
                dsnktkm.push(val3);
            });
            for(var i=0;i<tgiasp.length;i++){
                if(ttensp[i].length<15){
                    $("#searchSpace").append(`<p><a class="ttensp" onclick="xemchitiet('`+tmasp[i]+`')">`+ttensp[i]+`&emsp;&emsp;</a></p>`)
                }else{
                    $("#searchSpace").append(`<p><a class="ttensp" onclick="xemchitiet('`+tmasp[i]+`')">`+ttensp[i]+`</a></p>`)
                }
                
            }
        });
}
function guitinnhan(){
    $.get("http://localhost:3000/test3",function(data){
        if(data.giatrilg=="KH" || data.giatrilg=="NVBH"){
            window.location="../chat/chat.html"
        }else{
            alert("bạn chưa đăng nhập hoặc không có chức năng này");
        }
    });
}