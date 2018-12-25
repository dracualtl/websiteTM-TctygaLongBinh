
// Hien form quy trinh
var switchBtn;
function showQuyTrinh() {
    document.getElementById("nbd").valueAsDate=new Date();
    document.getElementById("nxc").valueAsDate=new Date();
    var dot =[], loaiga =[], sluong =[], batdau =[], xchuong =[], cnang =[], dvi =[], hhut = [], cphi = [], tthai=[];
    var ngay1, ngay2, thang1, thang2, t3, t4;
    var ngayht = new Date(), ngaybd, ngayxc, pro, pronum, probar, display1, display2, dis, ttrang;
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
            // new (
            for(var i=0;i<tgiasp.length;i++){
                var dvi;
                if (tmasp[i] == "a9") {
                    dvi = "con";
                } else {
                    dvi = "kg";
                }
                $("#cbTable").append(`
                <tr>
                <td class="masp" style="display: none;">`+tmasp[i]+`</td>
                <td class="tensp">`+ttensp[i]+`</td>
                <td><input class="soluongsp" type="number" onchange="changeNumber()">`+dvi+`</td>
                <td><input class="haohut" type="number" onchange="changeNumber()">kg</td>
                <td><input class="hsdsp" type="date"></td>
                </tr>
            `)
            }
            $("#cbTable").append(`
                <tr>
                <td>Tổng</td>
                <td><span id="tongHt">1</span>/<span id="tongScb">1</span>kg</td>
                <td id="tongHh"></td>
                <td></td>
                </tr>
            `)
        });
        // new )
    $.get("http://localhost:3000/layquytrinh", function(data){
    var n;
    for (n = 0; n < data.xleng; n++) {
        dot.push(data.xdot[n]);
        loaiga.push(data.xloaiga[n]);
        sluong.push(data.xsluong[n]);
        batdau.push(data.xbatdau[n]);
        xchuong.push(data.xxchuong[n]);
        cnang.push(data.xcnang[n]);
        dvi.push(data.xdvi[n]);
        hhut.push(data.xhhut[n]);
        cphi.push(data.xcphi[n]);
        tthai.push(data.xtthai[n]);
        // định dạng thời gian cho suaSp
        var tg1 = new Date(batdau[n]);
        t1 = tg1.getDate()+"/"+(tg1.getMonth()+1)+"/"+tg1.getFullYear();
        var tg2 = new Date(xchuong[n]);
        t2 = tg2.getDate()+"/"+(tg2.getMonth()+1)+"/"+tg2.getFullYear();
        t3 = doiNgay1(batdau[n]);
        t4 = doiNgay1(xchuong[n]);
        // if (tg1.getDate() < 10) { ngay1 ="0"+tg1.getDate()} 
        // else {ngay1 = tg1.getDate()}
        // if (tg2.getDate() < 10) { ngay2 ="0"+tg2.getDate()} 
        // else {ngay2 = tg2.getDate()}
        // if ((tg1.getMonth()+1) < 10) { thang1 = "0"+(tg1.getMonth()+1)}
        // else {thang1 = (tg1.getMonth()+1)}
        // if ((tg2.getMonth()+1) < 10) { thang2 = "0"+(tg2.getMonth()+1)}
        // else {thang2 = (tg2.getMonth()+1)}
        // t3 = tg1.getFullYear()+"-"+thang1+"-"+ngay1;
        // t4 = tg2.getFullYear()+"-"+thang2+"-"+ngay2;

        // định dạng thanh tiến trình cho formCoBan
        // ttrang = "Đang tiến hành";
        ngaybd = new Date(t3);
        ngayxc = new Date(t4);
        pronum = Math.round((ngayht-ngaybd)/(24*60*60*1000));
        probar = (ngayxc-ngaybd)/(24*60*60*1000);
        if (pronum < 0) {pronum = 0}
        if (pronum >= probar) { 
            pro = "100%";
            pronum = probar;
            if (cnang[n] == 0) {
                display1 = "style='display: block'";
                display2 = "style='display: none'";
            } else {
                display1 = "style='display: none'";
                display2 = "style='display: block'";
            }
            
            dis = "";
        } else {
            pro = (Math.round(pronum/probar*100))+"%";
            display1 = "style='display: none'";
            display2 = "style='display: none'";
            dis = " style='background-color: gray' disabled";
        }
        var display3 = "";
        if (data.xtthai[n] == "Đã nhập kho") {
            display3 = "style='display: none'";
        }


        // tạo danh sách quy trình
        $(".appendSua").append(
            `<tr>
                <td>`+dot[n]+`</td>
                <td><input type="text" value="`+loaiga[n]+`"></td>
                <td><input type="number" min=0 value="`+sluong[n]+`"></td>
                <td><input type="date" class="nbd" value="`+t3+`"></td>
                <td><input type="date" class="nxc" value="`+t4+`"></td>
                <td><input type="number" min=0 `+dis+` value="`+cnang[n]+`"></td>
                <td><select>
                    <option>kg</option>
                    <option>g</option>
                </select></td>
                <td><input type="number" `+dis+` min=0 value="`+hhut[n]+`"></td>
                <td><input type="number" `+dis+` value="`+cphi[n]+`"></td>
                <td>
                    <button onclick="changeQuyTrinh(`+(n+1)+`); "><img src="../HinhAnh/modify.jpg" alt="modify"></button> 
                    <button onclick="resetChange(`+n+`)"><img src="../HinhAnh/reset.png" alt="reset"></button>
                </td>
            </tr> ` 
        )

        $(".appendXem").append(
           ` <tr>
                <td class="sodot">`+dot[n]+`</td>
                <td class="loaiga">`+loaiga[n]+`</td>
                <td class="soluong">`+sluong[n]+`</td>
                <td class="batdau">`+t1+`</td>
                <td class="xuatchuong">`+t2+`</td>
                <td class="cannang">`+cnang[n]+`</td>
                <td class="donvi">`+dvi[n]+`</td>
                <td class="haophi">`+hhut[n]+`</td>
                <td class="chiphi">`+cphi[n]+`</td>
            </tr>`
        )
        $(".formNhap").append(`
            <span class="form" `+display3+`>
                <div class="formCoBan row" style="padding: 0">
                    <div>
                        <p>Đợt:`+dot[n]+`</p>
                        <p>Loại gà:`+loaiga[n]+`</p>
                        <p>Số lượng:`+sluong[n]+`</p>
                    </div>
                    <div>
                        <p>Tình trạng: <span class="tinhTrang">`+tthai[n]+`</span></p>
                        <p class="progressBar">
                            <span class="progress" style="width: `+pro+`">
                                <span class="progressNumber">`+pronum+`</span>/<span class="progressBarNumber">`+probar+`</span>
                            </span>
                        </p>

                        <p style="margin-top: -15px; display: flex">
                            <button onclick="showComplete(`+n+`)" `+display1+`>Hoàn thành</button> 
                            <button onclick="showCheBien(`+n+`)" `+display2+`>Nhập kho</button>
                            <button onclick="showDelete(`+n+`)">Xóa</button> 
                        </p>
                    </div>
                </div>
            </span>
        `)
    }
    });
}

function doiNgay1(date) {
    var tgian = new Date(date);
    var tg, ngay, thang;
    if (tgian.getDate() < 10) {
        ngay = "0"+tgian.getDate();
    } else {
        ngay = tgian.getDate();
        
    }
    if (tgian.getMonth() < 9) {
        thang = "0"+(tgian.getMonth()+1);
    } else {
        thang = tgian.getMonth()+1;
    }
    tg = tgian.getFullYear()+"-"+thang+"-"+ngay;
    return tg;
}

function showThem() {
    var i, formCb, formXem, formSua, sl;
    formXem = document.getElementsByClassName("xemSp");
    formSua = document.getElementsByClassName("suaSp");
    formCb = document.getElementsByClassName("formNhap");
    formThem = document.getElementById("themQuyTrinh");
    sl = document.getElementsByClassName("sodot");
    document.getElementById("sd").value = parseInt(sl[sl.length-1].innerHTML);
    document.getElementById("sd").min = parseInt(sl[sl.length-1].innerHTML);
    document.getElementById("sl").value = 0;
    if (switchBtn != 3) {
        for (i = 0; i < formCb.length; i++) {
            formCb[i].style.display = "flex";
            formSua[i].style.display = "none";
            formXem[i].style.display = "none"; 
        }
        formThem.style.display = "block ";
        switchBtn = 3;
    } else {
        for (i = 0; i < formCb.length; i++) {
            formCb[i].style.display = "flex";
            formSua[i].style.display = "none";
            formThem.style.display = "none";
        }
        formThem.style.display = "none";
        switchBtn = 0;
    }
    
}

function limit() {
    var sd = document.getElementById("sd");
    var sl = document.getElementsByClassName("sodot");
    var l = document.getElementById("sl"); 
    if (sd.value < parseInt(sl[sl.length-1].innerHTML)) {
        sd.value = parseInt(sl[sl.length-1].innerHTML);
    }
    if (l.value < 0) {
        l.value = 0;
    }
}



function showXemForm() {
    var i, formCb, formXem, formSua, sl;
    formXem = document.getElementsByClassName("xemSp");
    formSua = document.getElementsByClassName("suaSp");
    formCb = document.getElementsByClassName("formNhap");
    formThem = document.getElementById("themQuyTrinh");
    formThem.style.display = "none";
    if (switchBtn != 1) {
        for (i = 0; i < formCb.length; i++) {
            formCb[i].style.display = "none";
            formSua[i].style.display = "none";
            formXem[i].style.display = "block";
        }
        switchBtn = 1;
    } else {
        for (i = 0; i < formCb.length; i++) {
            formCb[i].style.display = "flex";
            formSua[i].style.display = "none";
            formXem[i].style.display = "none";
        }
        switchBtn = 0;
    }
}

function showSuaForm() {
    var i, formCb, formXem, formSua, sl;
    formXem = document.getElementsByClassName("xemSp");
    formSua = document.getElementsByClassName("suaSp");
    formCb = document.getElementsByClassName("formNhap");
    formThem = document.getElementById("themQuyTrinh");
    formThem.style.display = "none";
    if (switchBtn != 2) {
        for (i = 0; i < formCb.length; i++) {
        formCb[i].style.display = "none";
        formSua[i].style.display = "block";
        formXem[i].style.display = "none";
        }
        switchBtn = 2;
    } else {
        for (i = 0; i < formSua.length; i++) {
        formCb[i].style.display = "flex";
        formSua[i].style.display = "none";
        formXem[i].style.display = "none";
        }
        switchBtn = 0;
    }
}

// Thêm một quy trình
function addQuyTrinh() {
    var sodot, loaiga, sluong, batdau, xchuong, cnang, dvi, hhut, cphi, tthai, t1, t2;
    sodot = document.getElementById("sd").value;
    loaiga = document.getElementById("lg").value; 
    sluong = document.getElementById("sl").value; 
    batdau = document.getElementById("nbd").value; 
    xchuong = document.getElementById("nxc").value; 
    cnang = 0;
    dvi = "kg";
    hhut = 0;
    cphi = 0;
    tthai = "Đang tiến hành";
    // định dạng thời gian
    var tg1 = new Date(batdau);
    var tg2 = new Date(xchuong);
    if (loaiga == "") {
        alert("Thông tin loại gà vẫn còn trống");
    } else if (sluong == 0) {
        alert("Thông tin số lượng phải lớn hơn 0");
    } else if (batdau == "") {
        alert("Vẫn chưa đặt ngày bắt đầu nuôi");
    } else if (xchuong == "") {
        alert("Vẫn chưa đặt ngày xuất chuồng");
    } else if (tg1 > tg2) {
        alert("Thiết lập thời gian không phù hợp, ngày bắt đầu nuôi phải nhỏ hơn ngày xuất chuồng");
    } else {
        t1 = tg1.getFullYear()+"/"+(tg1.getMonth()+1)+"/"+tg1.getDate();
        t2 = tg2.getFullYear()+"/"+(tg2.getMonth()+1)+"/"+tg2.getDate();
        $.post("http://localhost:3000/guiquytrinh", {xsodot: sodot, xloaiga: loaiga, xsluong: sluong, xbatdau: t1, xxchuong: t2, xcnang: cnang, xdvi: dvi, xhhut: hhut, xcphi: cphi, xtthai: tthai}, function(data){
            console.log("da gui quy trinh", data)
        });
        alert("Thêm quy trình thành công");
        window.location = "../QuyTrinh/Nhap_quy_trinh.html";
    }
    
}

function resetQuyTrinh() {
    var loaiga, sluong, batdau, xchuong;
    loaiga = document.getElementById("lg"); 
    sluong = document.getElementById("sl"); 
    batdau = document.getElementById("nbd"); 
    xchuong = document.getElementById("nxc"); 
    loaiga.value = sluong.value  = "";
    batdau.value = xchuong.value = "dd/mm/yyyy";
}

// Xóa một quy trình
function showDelete(num) {
    document.getElementById("formXoa").style.display = "block";
    document.getElementById("xoadot").innerHTML = document.getElementsByClassName("sodot")[num].innerHTML;
    document.getElementById("xoaloaiga").innerHTML = document.getElementsByClassName("loaiga")[num].innerHTML;

}

function deleteQuyTrinh() {
    var dot = document.getElementById("xoadot").innerHTML;
    var lga = document.getElementById("xoaloaiga").innerHTML;

    $.post("http://localhost:3000/xoaquytrinh", {xdot: dot, xloaiga: lga}, function(data){
        console.log("da xoa quy trinh", data)
    }); 
    alert("Xóa quy trình thành công");
    window.location = "../QuyTrinh/Nhap_quy_trinh.html"; 
}

// Hoàn thành quy trình
function showComplete(num) {
    document.getElementById("formHoanThanh").style.display = "block";
    document.getElementById("thanhdot").innerHTML = document.getElementsByClassName("sodot")[num].innerHTML;
    document.getElementById("thanhloaiga").innerHTML = document.getElementsByClassName("loaiga")[num].innerHTML;
}

function completeQuyTrinh() {
    var dot, loaiga, cnang, dvi, hhut, cphi;
    dot = document.getElementById("thanhdot").innerHTML;
    loaiga = document.getElementById("thanhloaiga").innerHTML;
    cnang = document.getElementById("cn").value;
    dvi = document.getElementById("dv").value;
    hhut = document.getElementById("hh").value;
    cphi = document.getElementById("cp").value;
    tthai = "Đã hoàn thành";
    if (cnang == "") {
        alert("Thông tin về cân nặng vẫn còn trống");
    } else if (cphi == "") {
        alert("Thông tin chi phí sản xuất vẫn còn trống");
    } else {
        $.post("http://localhost:3000/hoanthanhquytrinh", {xdot: dot, xloaiga: loaiga, xcnang: cnang, xdvi: dvi, xhhut: hhut, xcphi: cphi, xtthai: tthai}, function(data){
            console.log("da chinh sua quy trinh", data)
        });
        alert("Thông tin quy trình đã được chỉnh sửa");
        window.location = "../QuyTrinh/Nhap_quy_trinh.html"; 
    }
}

// Sửa quy trình
function changeQuyTrinh(num) {
    var qtrinh, dot, loaiga, sluong, batdau, xchuong, cnang, dvi, hhut, cphi, t1, t2;
    
    qtrinh = document.getElementsByClassName("appendSua")[0].getElementsByTagName("TR")[num];
    dot = qtrinh.getElementsByTagName("TD")[0].innerHTML;
    loaiga = qtrinh.getElementsByTagName("INPUT")[0].value;
    sluong = qtrinh.getElementsByTagName("INPUT")[1].value;
    batdau = qtrinh.getElementsByTagName("INPUT")[2].value;
    xchuong = qtrinh.getElementsByTagName("INPUT")[3].value;
    cnang = qtrinh.getElementsByTagName("INPUT")[4].value;
    dvi = qtrinh.getElementsByTagName("SELECT")[0].value;
    hhut = qtrinh.getElementsByTagName("INPUT")[5].value;
    cphi = qtrinh.getElementsByTagName("INPUT")[6].value;
    

    // định dạng thời gian
    var tg1 = new Date(batdau);
    t1 = tg1.getFullYear()+"/"+(tg1.getMonth()+1)+"/"+tg1.getDate();
    var tg2 = new Date(xchuong);
    t2 = tg2.getFullYear()+"/"+(tg2.getMonth()+1)+"/"+tg2.getDate();

    var htai = new Date();
    if (tg2 > htai) {
        cnang = 0;
        hhut = 0;
        cphi = 0;
    }
    $.post("http://localhost:3000/suaquytrinh", {xdot: dot, xloaiga: loaiga, xsluong: sluong, xbatdau: t1, xxchuong: t2, xcnang: cnang, xdvi: dvi, xhhut: hhut, xcphi: cphi}, function(data){
        console.log("da chinh sua quy trinh", data)
    }); 
    alert("Thông tin quy trình đã được chỉnh sửa");
    window.location = "../QuyTrinh/Nhap_quy_trinh.html"; 
}

function resetChange(num) {
    var qtrinh, dot, loaiga, sluong, batdau, xchuong, cnang, dvi, hhut, cphi, ngay1, ngay2, thang1, thang2, t1, t2;
    qtrinh = document.getElementsByClassName("appendSua")[0].getElementsByTagName("TR")[num+1];
    $.get("http://localhost:3000/layquytrinh", function(data){
        var tg1 = new Date(data.xbatdau[num]);
        t1 = tg1.getFullYear()+"-"+(tg1.getMonth()+1)+"-"+tg1.getDate();
        var tg2 = new Date(data.xxchuong[num]);
        t2 = tg2.getFullYear()+"-"+(tg2.getMonth()+1)+"-"+tg2.getDate();
        if (tg1.getDate() < 10) { ngay1 ="0"+tg1.getDate()} 
        else {ngay1 = tg1.getDate()}
        if (tg2.getDate() < 10) { ngay2 ="0"+tg2.getDate()} 
        else {ngay2 = tg2.getDate()}
        if ((tg1.getMonth()+1) < 10) { thang1 = "0"+(tg1.getMonth()+1)}
        else {thang1 = (tg1.getMonth()+1)}
        if ((tg2.getMonth()+1) < 10) { thang2 = "0"+(tg2.getMonth()+1)}
        else {thang2 = (tg2.getMonth()+1)}
        t1 = 
        t1 = tg1.getFullYear()+"-"+thang1+"-"+ngay1;
        t2 = tg2.getFullYear()+"-"+thang2+"-"+ngay2;

        qtrinh.getElementsByTagName("TD")[0].innerHTML = data.xdot[num];
        qtrinh.getElementsByTagName("INPUT")[0].value = data.xloaiga[num];
        qtrinh.getElementsByTagName("INPUT")[1].value = data.xsluong[num];
        qtrinh.getElementsByTagName("INPUT")[2].value = t1;
        qtrinh.getElementsByTagName("INPUT")[3].value = t2;
        qtrinh.getElementsByTagName("INPUT")[4].value = data.xcnang[num];
        qtrinh.getElementsByTagName("SELECT")[0].value = data.xdvi[num];
        qtrinh.getElementsByTagName("INPUT")[5].value = data.xhhut[num];
        qtrinh.getElementsByTagName("INPUT")[6].value = data.xcphi[num];
    });
}
// new (
// Nhap kho san pham
function changeNumber() {
    var i, j, tsl, sl, cnang, masp, hh, thh, tongcb, tonghh = 0, tongkg = 0;
    sl = document.getElementsByClassName("soluongsp");
    tsl = document.getElementById("tongHt");
    hh = document.getElementsByClassName("haohut");
    thh = document.getElementById("tongHh");
    cnang = document.getElementById("cnangtb");
    masp = document.getElementsByClassName("masp");
    tongcb = document.getElementById("tongScb");
    for (i = 0; i < sl.length; i++) {
        if (masp[i].innerHTML == "a9") {
            tongkg = parseFloat(tongkg) + parseFloat(sl[i].value*cnang.innerHTML);
        } else {
            tongkg = parseFloat(tongkg) + parseFloat(sl[i].value);
        }
        tonghh = parseFloat(tonghh) + parseFloat(hh[i].value);

    }
    tsl.innerHTML = tongkg;
    thh.innerHTML = tonghh;
    tongcb.innerHTML = parseFloat(document.getElementById("sluong").innerHTML*document.getElementById("cnangtb").innerHTML) - parseFloat(thh.innerHTML); 
}

window.onclick = function(event) {
    var cb = document.getElementById("cheBien");
    if (event.target == cb) {
        hideCheBien();
    }
}

function showCheBien(num) {
    var i, dateht, ngay, sluong;
    cnang = document.getElementsByClassName("cannang")[num].innerHTML;
    document.getElementById("cnangtb").innerHTML = cnang;
    document.getElementById("cheBien").style.display = "block";
    document.getElementById("dotCb").innerHTML = document.getElementsByClassName("sodot")[num].innerHTML;
    document.getElementById("lgaCb").innerHTML =  document.getElementsByClassName("loaiga")[num].innerHTML; 
    sluong = document.getElementsByClassName("soluongsp");
    hhut = document.getElementsByClassName("haohut");
    document.getElementById("sluong").innerHTML = document.getElementsByClassName("soluong")[num].innerHTML;
    dateht = new Date();
    ngay = doiNgay1(dateht);
    ngay10 = doiNgay1(dateht.setDate(dateht.getDate()+10))
    document.getElementById("ngaynhap").value = ngay;
    for (var i = 0; i < sluong.length; i++) {
        sluong[i].value = 0;
        sluong[i].min = 0;
        hhut[i].value = 0;
        document.getElementsByClassName("hsdsp")[i].value = ngay10;
    }
    document.getElementById("tongScb").innerHTML = parseFloat((document.getElementsByClassName("soluong")[num].innerHTML)*cnang);
    changeNumber();
}
// new )
function hideCheBien() {
    document.getElementById("cheBien").style.display = "none";
}

function nhapKho() {
    var i, num, masp, makho, sl, nsx, hsd, ten, dsten, sl1, sl2;
    makho = document.getElementById("makho");
    nsx = document.getElementById("ngaynhap");
    hsd = document.getElementsByClassName("hsdsp");
    sl = document.getElementsByClassName("soluongsp");
    ten = document.getElementsByClassName("tensp");
    dot = document.getElementById("dotCb").innerHTML;
    lga = document.getElementById("lgaCb").innerHTML;
    sl1 = document.getElementById("tongHt").innerHTML;
    sl2 = document.getElementById("tongScb").innerHTML;
    num = 0;
    dsten = "";
    // nhap hang vao kho
    var date1 = new Date(nsx.value);
    date1.setDate(date1.getDate()+10);
    for (i = 0; i < ten.length; i++){
        var date2 = new Date(hsd[i].value);
        if ((sl[i].value > 0) && (date2 >= date1) && sl1 == sl2) {
            num = 100;
            masp=document.getElementsByClassName("masp")[i].textContent;
            // nhap vao CSDL
            // $.post("http://localhost:3000/nhaptonkho", {xmasp: masp, xmakho: makho.value, xsl: sl[i].value, xnsx: nsx.value, xhsd: hsd[i].value}, function(data){
            // console.log("da nhap kho", data)
            // });
            var tthai = "Đã nhập kho"
            $.post("http://localhost:3000/suatrangthaiquytrinh", {xtthai: tthai, xdot: dot, xloaiga: lga}, function(data){
            console.log("da sua trang thai", data)
            });
            dsten = dsten + ten[i].innerHTML +", ";
        } else if ((sl[i].value < 0)) {
            alert("Giá trị số lượng của "+ten[i].innerHTML+" không hợp lệ.");
            num = num - 1;
        } else if ((sl[i].value > 0) && (date2 < date1)) {
            num = num - 1;
            alert("Hạn sử dụng của "+ten[i].innerHTML+" phải lớn hơn ngày nhập ít nhất 10 ngày.");
        } 
    }
    if (num > 0) {
        tthai = "Đã nhập kho";
            $.post("http://localhost:3000/suatrangthaiquytrinh", {xdot: dot, xloaiga: lga, xtthai: tthai}, function(data){
            console.log("da chinh sua trang thai quy trinh", data)
        });
        alert("Đã nhập hàng vào kho: "+dsten);
        window.location = "../QuyTrinh/Nhap_quy_trinh.html"; 
    } else if (num == 0) {
        alert("Số lượng nhập vào không bằng số lượng sản phẩm chế biến.")
    }
    
}

// Search
// function onInputSearch() {
//     var text = document.getElementById('search').value;
//     if (text != "") {
//         document.getElementById("searchSpace").style.display = "block";
//         search();
//     } else {
//         document.getElementById("searchSpace").style.display = "none";
//     }
    
// }

// function hideSearch() {
//     document.getElementById("searchSpace").style.display = "none";
// }

// function search() {
//     var searchCharacter, searchElement, i, a;
//     searchCharacter = document.getElementById('search').value.toUpperCase();
//     searchElement = document.getElementById("searchSpace").getElementsByTagName("P");
    

//     for (i = 0; i < searchElement.length; i++) {
//         var a = searchElement[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(searchCharacter) > -1) {
//             searchElement[i].style.display = "";
//         } else {
//             searchElement[i].style.display = "none";
//         }
//     }
// }
// // Sự kiện khi nhấn phím enter trong khung tìm kiếm
// var inputSpace = document.getElementById('search');
// inputSpace.addEventListener("keyup", function(event){
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         hideSearch();
//         alert("Search...");

//     }
// });