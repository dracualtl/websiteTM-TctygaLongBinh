
function mydelete1(num){
    alert("chon nut xoa tai "+num);
}

function myview(num){

    document.getElementsByClassName("hienthilido")[0].style.display="none";
    var aamadh=document.getElementsByClassName("jmadh")[num].textContent;
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
        var tongconggia=0;
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
        for(var i=0;i<tmadh.length;i++){
            if(aamadh==tmadh[i]){
                tongconggia=ttg[i];
                var hinhthuc="";
                var trangthai="";
                if(tttdh[i]=="TRUCTIEP"){
                    hinhthuc="Thanh toán trực tiếp"
                    document.getElementsByClassName("anhthanhtoan")[0].style.display="none";
                }else{
                    document.images["imagesp3"].src= anhttt[i];
                    document.getElementsByClassName("anhthanhtoan")[0].style.display="block";
                    hinhthuc="Thanh toán qua ngân hàng"
                }
                if(ttrangthai[i]=="HUY"){
                    document.getElementsByClassName("llddh")[0].textContent=tgcnv[i];
                    document.getElementsByClassName("hienthilido")[0].style.display="block";
                    trangthai="Đơn hàng đã bị hủy";
                }else if(ttrangthai[i]=="MOITAO"){
                    trangthai="Đơn hàng Chờ duyệt";
                }else if(ttrangthai[i]=="CHUYENHANG"){
                    trangthai="Đơn hàng đang vận chuyển";
                }else{
                    trangthai="Đơn hàng đã hoàn thành";
                }
                var hotenkh="";
                for (var k=0;k<tdsid.length;k++){
                    if(tdsid[k]==tidkh[i]){
                        hotenkh=tdsten[k];
                    }
                }
                document.getElementsByClassName("lmadh")[0].textContent=tmadh[i];
                document.getElementsByClassName("lngaydh")[0].textContent=new Date(tngay[i]).toLocaleDateString()+" "+new Date(tngay[i]).toLocaleTimeString();
                document.getElementsByClassName("lhtdh")[0].textContent=hinhthuc;
                document.getElementsByClassName("lttdh")[0].textContent=trangthai;
                document.getElementsByClassName("tenkh")[0].textContent=hotenkh;
                document.getElementsByClassName("dckh")[0].textContent=tdcdh[i];
                document.getElementsByClassName("sdtkh")[0].textContent=tsdtdh[i];
                document.getElementsByClassName("gckh")[0].textContent=tgc[i];
                $.get("http://localhost:3000/getdonhangct",function(data1){
                    var tmadhct=[];
                    var ttendhct=[];
                    var tgiact=[];
                    var tslct=[];
                    data1.xmadhct.forEach(function(val1){
                        tmadhct.push(val1);
                    });
                    data1.xtendhct.forEach(function(val1){
                        ttendhct.push(val1);
                    });
                    data1.xgiact.forEach(function(val1){
                        tgiact.push(val1);
                    });
                    data1.xslct.forEach(function(val1){
                        tslct.push(val1);
                    });
                    var ttonggia=0;
                    $("#tablesanpham").html("");
                    $("#tablesanpham").append(`<tr>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Số lượng</th>
                  </tr>`);
                    for(var j=0;j<tmadhct.length;j++){
                        if(tmadhct[j]==aamadh){
                            ttonggia=ttonggia+Number(tgiact[j])*Number(tslct[j]);
                            $("#tablesanpham").append(`<tr>
                            <th>`+ttendhct[j]+`</th>
                            <th>`+tgiact[j]+`</th>
                            <th>`+tslct[j]+`</th>
                          </tr>`);
                        }
                    }
                    document.getElementsByClassName("tongcong")[0].textContent=tongconggia;
                    document.getElementsByClassName("tongtien")[0].textContent=ttonggia;
                    document.getElementsByClassName("phiship")[0].textContent=Number(tongconggia-ttonggia);
                    document.getElementById("md").style.display="block";
                });
                
            }
        }
    });
}

function mycancel(num){
    document.getElementsByClassName("sttxoa")[0].textContent=num;
    document.getElementsByClassName("stylexoa")[0].textContent=0;
    document.getElementById("exitWindow").style.display="block";
}



function myaccept(num){
    var kmadh = document.getElementsByClassName("jmadh")[num];
    $.post("/guilenmadh",{jmadh:kmadh.textContent},function(){
        console.log("da gui du lieu len server: ", data);
    });
    alert("Duyệt thành công đơn hàng: "+kmadh.textContent);
    window.location="../donhang/donhang.html";
}

function mydelete2(num){
    
}

function myview2(num){
    document.getElementsByClassName("hienthilido")[0].style.display="none";
    var aamadh=document.getElementsByClassName("xxmadh")[num].textContent;
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
        var tongconggia=0;
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
        for(var i=0;i<tmadh.length;i++){
            if(aamadh==tmadh[i]){
                tongconggia=ttg[i];
                var hinhthuc="";
                var trangthai="";
                if(tttdh[i]=="TRUCTIEP"){
                    hinhthuc="Thanh toán trực tiếp"
                }else{
                    document.images["imagesp3"].src= anhttt[i];
                    document.getElementsByClassName("anhthanhtoan")[0].style.display="block";
                    hinhthuc="Thanh toán qua ngân hàng"
                }
                if(ttrangthai[i]=="HUY"){
                    document.getElementsByClassName("llddh")[0].textContent=tgcnv[i];
                    document.getElementsByClassName("hienthilido")[0].style.display="block";
                    trangthai="Đơn hàng đã bị hủy";
                }else if(ttrangthai[i]=="MOITAO"){
                    trangthai="Đơn hàng Chờ duyệt";
                }else if(ttrangthai[i]=="CHUYENHANG"){
                    trangthai="Đơn hàng đang vận chuyển";
                }else{
                    trangthai="Đơn hàng đã hoàn thành";
                }
                var hotenkh="";
                for (var k=0;k<tdsid.length;k++){
                    if(tdsid[k]==tidkh[i]){
                        hotenkh=tdsten[k];
                    }
                }
                document.getElementsByClassName("lmadh")[0].textContent=tmadh[i];
                document.getElementsByClassName("lngaydh")[0].textContent=new Date(tngay[i]).toLocaleDateString()+" "+new Date(tngay[i]).toLocaleTimeString();
                document.getElementsByClassName("lhtdh")[0].textContent=hinhthuc;
                document.getElementsByClassName("lttdh")[0].textContent=trangthai;
                document.getElementsByClassName("tenkh")[0].textContent=hotenkh;
                document.getElementsByClassName("dckh")[0].textContent=tdcdh[i];
                document.getElementsByClassName("sdtkh")[0].textContent=tsdtdh[i];
                document.getElementsByClassName("gckh")[0].textContent=tgc[i];
                $.get("http://localhost:3000/getdonhangct",function(data1){
                    var tmadhct=[];
                    var ttendhct=[];
                    var tgiact=[];
                    var tslct=[];
                    data1.xmadhct.forEach(function(val1){
                        tmadhct.push(val1);
                    });
                    data1.xtendhct.forEach(function(val1){
                        ttendhct.push(val1);
                    });
                    data1.xgiact.forEach(function(val1){
                        tgiact.push(val1);
                    });
                    data1.xslct.forEach(function(val1){
                        tslct.push(val1);
                    });
                    var ttonggia=0;
                    $("#tablesanpham").html("");
                    $("#tablesanpham").append(`<tr>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Số lượng</th>
                  </tr>`);
                    for(var j=0;j<tmadhct.length;j++){
                        if(tmadhct[j]==aamadh){
                            ttonggia=ttonggia+Number(tgiact[j])*Number(tslct[j]);
                            $("#tablesanpham").append(`<tr>
                            <th>`+ttendhct[j]+`</th>
                            <th>`+tgiact[j]+`</th>
                            <th>`+tslct[j]+`</th>
                          </tr>`);
                        }
                    }
                    document.getElementsByClassName("tongcong")[0].textContent=tongconggia;
                    document.getElementsByClassName("tongtien")[0].textContent=ttonggia;
                    document.getElementsByClassName("phiship")[0].textContent=Number(tongconggia-ttonggia);
                    document.getElementById("md").style.display="block";
                });
                
            }
        }
    });
}

function mycancel2(num){
    document.getElementsByClassName("sttxoa")[0].textContent=num;
    document.getElementsByClassName("stylexoa")[0].textContent=1;
    document.getElementById("exitWindow").style.display="block";
}

function cancel(so1,so2){
    if(so2==0){
        var madh = document.getElementsByClassName("jmadh")[so1].textContent;
        var lidohuy = document.getElementById("txtHuy").value;
        if(lidohuy.length<=0){
            alert("Hãy nhập vào lí do hủy");
        }else if(lidohuy.length<10){
            alert("Lí do hủy quá ngắn");
        }else{
            $.post("http://localhost:3000/guidonhanghuy",{xxxmadh:madh,xxxlidohuy:lidohuy},function(data){
                console.log("da gui du lieu len server",data);
            });
            alert("Đơn hàng "+madh+" đã hủy thành công");
            window.location="../donhang/donhang.html"
        }
    }else{
        var madh = document.getElementsByClassName("xxmadh")[so1].textContent;
        var lidohuy = document.getElementById("txtHuy").value;
        if(lidohuy.length<=0){
            alert("Hãy nhập vào lí do hủy");
        }else if(lidohuy.length<10){
            alert("Lí do hủy quá ngắn");
        }else{
            $.post("http://localhost:3000/guidonhanghuy",{xxxmadh:madh,xxxlidohuy:lidohuy},function(data){
                console.log("da gui du lieu len server",data);
            });
            alert("Đơn hàng "+madh+" đã hủy thành công");
            window.location="../donhang/donhang.html"
        }
    }
    
}

function myaccept2(num){
    var kmadh = document.getElementsByClassName("xxmadh")[num];
    $.post("/guilenmadh1",{jmadh:kmadh.textContent},function(){
        console.log("da gui du lieu len server: ", data);
    });
    alert("Đơn hàng: "+kmadh.textContent+" đã hoàn thành");
    window.location="../donhang/donhang.html";
}

$(document).ready(function(){
});