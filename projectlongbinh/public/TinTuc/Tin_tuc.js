// Them khuyen mai
function addTinTuc() {
    var tde, gthieu, ndung, hanh, tg, tgian, tbao, nhandang;
    nhandang = document.getElementById("nhanDangLoaiTT").innerHTML;
    tde = document.getElementById("tde").value;
    gthieu = document.getElementById("gthieu").value;
    ndung = document.getElementById("ndung").value;
    hanh = document.getElementById("hanh").src;
    tg = new Date();
    tgian = tg.getFullYear()+"/"+(tg.getMonth()+1)+"/"+tg.getDate();
    tbao = document.getElementById("thongbao");
    // kiem tra
    if (tde == 0 || tde.length < 15 || tde.length > 100) {
        tbao.innerHTML = "Dòng tiêu đề vẫn còn trống hoặc nội dung bên trong không phù hợp quy định (ít hơn 15 hoặc nhiều hơn 100 kí tự)";
    } else if (gthieu.length == 0 || gthieu.length < 100) {
        tbao.innerHTML = "Dòng giới thiệu vẫn còn trống hoặc ít hơn độ dài quy định (100 kí tự)";
    } else if (ndung.length == 0) {
        tbao.innerHTML = "Dòng nội dung vẫn còn trống ";
    } else if (hanh.innerHTML == "") {
        tbao.innerHTML = "Dòng giới thiệu vẫn còn trống";
    } else {
        tbao.innerHTML = "";
        if (nhandang == "THÊM KHUYẾN MÃI") {
            // gửi khuyến mãi
            $.post("http://localhost:3000/guikhuyenmai", {xtde:tde, xgthieu:gthieu, xndung:ndung, xhanh:hanh, xtgian:tgian}, function(data){
                console.log("da gui du lieu", data)
            });
            alert("Thêm thành công");
            document.getElementById("btnanh1").click();
            //window.location = "../TinTuc/Khuyen_mai.html"
            hideDetail();            
        } else if (nhandang == "THÊM SỰ KIỆN") {
            // gửi sự kiện
            $.post("http://localhost:3000/guisukien", {xtde:tde, xgthieu:gthieu, xndung:ndung, xhanh:hanh, xtgian:tgian}, function(data){
                console.log("da gui du lieu", data)
            });

            alert("Thêm thành công");
            window.location = "../TinTuc/Su_kien.html"
            hideDetail();   
        } else if (nhandang == "THÊM CÔNG THỨC NẤU ĂN") {
            // gửi công thức
            $.post("http://localhost:3000/guibeplb", {xtde:tde, xgthieu:gthieu, xndung:ndung, xhanh:hanh, xtgian:tgian}, function(data){
                console.log("da gui du lieu", data)
            });

            alert("Thêm thành công");
            window.location = "../TinTuc/Bep_lb.html"
            hideDetail();  
        }

    }
}

function moreHeight() {
    var text = document.getElementById("IconBtn1");
    if (text.title == "0") {
        document.getElementById("addTtuc").getElementsByTagName("textarea")[1].style.height = "700px";
        text.getElementsByTagName("IMG")[0].src = "../HinhAnh/Double Up Icon.png";
        text.title = "1";
    } else {
        document.getElementById("addTtuc").getElementsByTagName("textarea")[1].style.height = "100px";
        text.getElementsByTagName("IMG")[0].src = "../HinhAnh/Double Down Icon.png";
        text.title = "0";
    }
}

// Hien Tin tuc

function showAddContent() {
    document.getElementById('md').style.display = "block";
    document.getElementById("addTtuc").style.display = "block";
    document.getElementById("tde").value = "";
    document.getElementById("gthieu").value = "";
    document.getElementById("ndung").value = "";
    
}

function showNewContent(num) {
    document.getElementById('md').style.display = "block";
    document.getElementsByClassName("tintuc")[0].style.display = "block";
    
    document.getElementById("ntde").innerHTML = (document.getElementsByClassName("tieude")[num].innerHTML).toUpperCase();
    document.getElementById("nhanh").src = document.getElementsByClassName("hinhanh")[num].src;
    document.getElementById("nndung").innerHTML = document.getElementsByClassName("noidung")[num].innerHTML;
    document.getElementById("ntgian").innerHTML = document.getElementsByClassName("thoigian")[num].innerHTML;
    
}

function showKhuyenMai() {
    // lay khuyen mai
    var stt =[], tde =[], gthieu =[], ndung =[], hanh =[], tgian =[];
    $.get("http://localhost:3000/laykhuyenmai", function(data){
        $.get("http://localhost:3000/test3",function(data1){
        var n;
        for (n = 0; n < data.xleng; n++) {
            stt.push(data.xstt[n]);
            tde.push(data.xtde[n]);
            gthieu.push(data.xgthieu[n]);
            ndung.push(data.xndung[n]);
            hanh.push(data.xhanh[n]);
            tgian.push(data.xtgian[n]);
            var tg = new Date(tgian[n])
            var t = tg.getDate()+"/"+(tg.getMonth()+1)+"/"+tg.getFullYear();
            $(".flex-container").append(
            `<div class="item">
                <a onclick="showNewContent(`+(n)+`)">
                    <img class="hinhanh" src="`+hanh[n]+`" alt="anh" width="auto" height="auto">
                </a>
                <div>
                    <a onclick="showNewContent(`+(n)+`)">
                        <p class="tieude">`+tde[n].toUpperCase()+`</p>
                    </a>
                    <p class="gioithieu">`+gthieu[n]+`<br></p>
                    <p class="noidung" style="display: none">`+ndung[n]+`</p>
                    <button onclick="xacNhanXoa(`+(n)+`)" class="nutxoakm">Xóa</button>
                    <i class="thoigian">`+t+`</i>
                    <p class="stt" style="display: none">`+stt[n]+`</p>
                </div>
            </div>`
            );
            if(n==(data.xleng-1)){
                $.get("http://localhost:3000/trasokm",function(data2){
                    if(data2.xsokm!=-1){
                        for(var io=0;io<stt.length;io++){
                            if(stt[io]==data2.xsokm){
                                showNewContent(io);
                            }
                        }
                    }
                });
            }
        }
        if(data1.giatrilg=="NVBH" || data1.giatrilg=="AD"){
            console.log("aa");
            for(var i=0;i<data.xleng;i++){
                document.getElementsByClassName("nutxoakm")[i].style.display="block";
            }
            document.getElementsByClassName("item")[0].style.display="block";
        }else{
            for(var j=0;j<data.xleng;j++){
                document.getElementsByClassName("nutxoakm")[j].style.display="none";
            }
            document.getElementsByClassName("item")[0].style.display="none";
        }
                
        })
        
    });
}
function testthune(){
    showNewContent(1);
}

function showSuKien() {
    // lay khuyen mai
    var stt =[], tde =[], gthieu =[], ndung =[], hanh =[], tgian =[];
    $.get("http://localhost:3000/laysukien", function(data){
        $.get("http://localhost:3000/test3",function(data1){
        var n;
        for (n = 0; n < data.xleng; n++) {
            stt.push(data.xstt[n]);
            tde.push(data.xtde[n]);
            gthieu.push(data.xgthieu[n]);
            ndung.push(data.xndung[n]);
            hanh.push(data.xhanh[n]);
            tgian.push(data.xtgian[n]);
            var tg = new Date(tgian[n])
            var t = tg.getDate()+"/"+(tg.getMonth()+1)+"/"+tg.getFullYear();
            $(".flex-container").append(
            `<div class="item">
                <a onclick="showNewContent(`+(n)+`)">
                    <img class="hinhanh" src="`+hanh[n]+`" alt="anh" width="auto" height="auto">
                </a>
                <div>
                    <a onclick="showNewContent(`+(n)+`)">
                        <p class="tieude">`+tde[n].toUpperCase()+`</p>
                    </a>
                    <p class="gioithieu">`+gthieu[n]+`<br></p>
                    <p class="noidung" style="display: none">`+ndung[n]+`</p>
                    <button onclick="xacNhanXoa(`+(n)+`)" class="nutxoask">Xóa</button>
                    <i class="thoigian">`+t+`</i>
                    <p class="stt" style="display: none">`+stt[n]+`</p>
                </div>
            </div>`
            );
            if(n==(data.xleng-1)){
                $.get("http://localhost:3000/trasosk",function(data2){
                    if(data2.xsosk!=-1){
                        console.log("da vao đây")
                        for(var io=0;io<stt.length;io++){
                            if(stt[io]==data2.xsosk){
                                showNewContent(io);
                            }
                        }
                    }
                });
            }
        }
        
        if(data1.giatrilg=="NVBH" || data1.giatrilg=="AD"){
            for(var i=0;i<data.xleng;i++){
                document.getElementsByClassName("nutxoask")[i].style.display="block";
            }
            document.getElementsByClassName("item")[0].style.display="block;"
        }else{
            console.log("hsdfdsbn")
            for(var j=0;j<data.xleng;j++){
                document.getElementsByClassName("nutxoask")[j].style.display="none";
            }
            document.getElementsByClassName("item")[0].style.display="none";
        }
                
        })
    });
}

function showBeplb() {
    // lay khuyen mai
    var stt =[], tde =[], gthieu =[], ndung =[], hanh =[], tgian =[];
    $.get("http://localhost:3000/laybeplb", function(data){
        $.get("http://localhost:3000/test3",function(data1){
        var n;
        for (n = 0; n < data.xleng; n++) {
            stt.push(data.xstt[n]);
            tde.push(data.xtde[n]);
            gthieu.push(data.xgthieu[n]);
            ndung.push(data.xndung[n]);
            hanh.push(data.xhanh[n]);
            tgian.push(data.xtgian[n]);
            var tg = new Date(tgian[n])
            var t = tg.getDate()+"/"+(tg.getMonth()+1)+"/"+tg.getFullYear();
            $(".flex-container").append(
            `<div class="item">
                <a onclick="showNewContent(`+(n)+`)">
                    <img class="hinhanh" src="`+hanh[n]+`" alt="anh" width="auto" height="auto">
                </a>
                <div>
                    <a onclick="showNewContent(`+(n)+`)">
                        <p class="tieude">`+tde[n].toUpperCase()+`</p>
                    </a>
                    <p class="gioithieu">`+gthieu[n]+`<br></p>
                    <p class="noidung" style="display: none">`+ndung[n]+`</p>
                    <button onclick="xacNhanXoa(`+(n)+`)" class="nutxoabep">Xóa</button>
                    <i class="thoigian">`+t+`</i>
                    <p class="stt" style="display: none">`+stt[n]+`</p>
                </div>
            </div>`
            );
            if(n==(data.xleng-1)){
                $.get("http://localhost:3000/trasobep",function(data2){
                    if(data2.xsobep!=-1){
                        for(var io=0;io<stt.length;io++){
                            if(stt[io]==data2.xsobep){
                                showNewContent(io);
                            }
                        }
                    }
                });
            }
        }
        
        if(data1.giatrilg=="NVBH" || data1.giatrilg=="AD"){
            console.log("aa");
            for(var i=0;i<data.xleng;i++){
                document.getElementsByClassName("nutxoabep")[i].style.display="flex";
            }
            document.getElementsByClassName("item")[0].style.display="flex";
        }else{
            for(var j=0;j<data.xleng;j++){
                document.getElementsByClassName("nutxoabep")[j].style.display="none";
            }
            document.getElementsByClassName("item")[0].style.display="none";
        }
                
        })
    });
}

function hideTinTuc() {
    document.getElementById('md').style.display = "none";
    document.getElementById("addTtuc").style.display = "none";
    for (var i = 0; i < document.getElementsByClassName("tintuc").length; i++) {
        document.getElementsByClassName("tintuc")[i].style.display = "none";
    }
}

function xacNhanXoa(num) {
    document.getElementById("formXoa").style.display = "block";
    document.getElementById("formXoa").getElementsByTagName("SPAN")[0].innerHTML = document.getElementsByClassName("tieude")[num].innerHTML;
    document.getElementById("sothutu").innerHTML = document.getElementsByClassName("stt")[num+1].innerHTML;
    // alert(stt);
    
}

function xoaKhuyenMai() {
    var stt = document.getElementById("sothutu").innerHTML;
    // gui stt de xoa khuyenmai
    $.post("http://localhost:3000/xoakhuyenmai", {xstt: stt}, function(data){
        console.log("da gui du lieu", data)
    });    
    alert("Xóa thành công");
    window.location = "../TinTuc/Khuyen_mai.html"
}

function xoaSuKien() {
    var stt = document.getElementById("sothutu").innerHTML;
    // gui stt de xoa sukien
    $.post("http://localhost:3000/xoasukien", {xstt: stt}, function(data){
        console.log("da gui du lieu", data)
    });    
    alert("Xóa thành công");
    window.location = "../TinTuc/Su_kien.html"
}

function xoaBeplb() {
    var stt = document.getElementById("sothutu").innerHTML;
    // gui stt de xoa sukien
    $.post("http://localhost:3000/xoabeplb", {xstt: stt}, function(data){
        console.log("da gui du lieu", data)
    });    
    alert("Xóa thành công");
    window.location = "../TinTuc/Bep_lb.html"
}


function previewFile(){
    var preview = document.getElementById('hanh');
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
    
