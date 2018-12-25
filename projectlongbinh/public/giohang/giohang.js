var danhsachtong=[];
var danhsachmiennam=[];
var danhsachmientrung = [];
var danhsachmienbac = [];
var bientttt = [];
var bienttnh = [];


function kiemtrasoluong(){
    
    
}


$(document).ready(function(){
    $("#btnExit").click(function(){
        window.location="../"
    });
    $("#btnPay").click(function(){
        $.get("http://localhost:3000/getgiohang",function(data1){
            var dssp=[];
            data1.spgh.forEach(function(val){
                dssp.push(val);
            });
            var so=0;
            var mangso=[];
            for(var i=0;i<dssp.length;i++){
                if(document.getElementsByClassName("cbtt")[i].checked){
                    so++;
                    mangso.push(i);
                }
            }
            if(so==0){
                alert("bạn chưa chọn sản phẩm để thanh toán");
            }else{
                var hinhthucthanhtoan = "";
                var gttt = document.getElementById("tt");
                if(gttt.checked==true){
                    hinhthucthanhtoan="TRUCTIEP";
                    var tdc = document.getElementById("txtdc");
                    var tsdt = document.getElementById("txtsdt");
                    var tgc = document.getElementById("txtgc");
                    var el=document.getElementById("mySelect2").options[document.getElementById("mySelect2").selectedIndex].innerHTML;
                    if(tdc.value.length==0 || tsdt.value.length==0){
                        alert("Vui lòng nhập đủ thông tin");
                    }else{
                        var d = new Date();
                        var ngay = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
                        var mangten = [];
                        var mangma = [];
                        var manggia = [];
                        var mangsoluong=[];
                        var tonggia = Number(document.getElementsByClassName("tongtien")[0].textContent)+Number(document.getElementsByClassName("phiship")[0].textContent);
                        var dsma=[];
                        var dssl=[];
                        var dsmakho=[];
                        var dsngaynhap=[];
                        var dshansudung=[];
                        var dsstt=[];
                        var dsmasp=[];
                                        var dstensp=[];
                                        var dsanhsp=[];
                                        
                        $.get("http://localhost:3000/gettttonkho",function(data){
                            data.dmasp.forEach(function(val){
                                dsma.push(val);
                            });
                            data.dsl.forEach(function(val){
                                dssl.push(val);
                            });
                            data.dmakho.forEach(function(val){
                                dsmakho.push(val);
                            });
                            data.dnsx.forEach(function(val){
                                dsngaynhap.push(val);
                            });
                            data.dhsd.forEach(function(val){
                                dshansudung.push(val);
                            });
                            data.dstt.forEach(function(val){
                                dsstt.push(val);
                            });
                            $.get("http://localhost:3000/ttt",function(data1){
                                        
                                        data1.msp.forEach(function(val){
                                            dsmasp.push(val);
                                        });
                                        data1.tensanpham.forEach(function(val){
                                            dstensp.push(val);
                                        });
                                        data1.hinhanhsp.forEach(function(val){
                                            dsanhsp.push(val);
                                        });
                                        data1.hinhanhsp.forEach(function(val){
                                            dsanhsp.push(val);
                                        });
                            for(var k=0;k<mangso.length;k++){
                                bientttt[k]=false;
                                var sl=0;
                                var masp1 = document.getElementsByClassName("tmasp")[mangso[k]];
                                var tensp1 = document.getElementsByClassName("ttensp")[mangso[k]];
                                var giasp1 = document.getElementsByClassName("tgiasp")[mangso[k]];
                                var soluongsp1 = document.getElementsByClassName("txtsoluong")[mangso[k]];
                                var makho="";
                                if(el=="Miền Nam"){
                                    makho="K1";
                                }else if(el=="Miền Trung"){
                                    makho="K2";
                                }else{
                                    makho="K3";
                                }
                                for (var i=0;i<dsma.length;i++){
                                    if(masp1.textContent==dsma[i] && makho==dsmakho[i]){
                                        sl=sl+dssl[i];
                                    }
                                }
                                if(soluongsp1.value>sl){
                                        for(l=0;l<dsmasp.length;l++){
                                            if(masp1.textContent==dsmasp[l]){
                                                alert("Sản phẩm "+dstensp[l]+" ở khu vực "+el+" hiện chỉ còn "+sl);
                                            }
                                        }
                                }else{
                                    bientttt[k]=true;
                                    if(Number(soluongsp1.value)>1){
                                        var gia=Number(giasp1.textContent)/Number(soluongsp1.value);
                                        mangten.push(tensp1.textContent);
                                        mangma.push(masp1.textContent);
                                        manggia.push(gia);
                                        mangsoluong.push(soluongsp1.value);
                                    }else{
                                        mangten.push(tensp1.textContent);
                                        mangma.push(masp1.textContent);
                                        manggia.push(giasp1.textContent);
                                        mangsoluong.push(soluongsp1.value);
                                    }
                                }
                            }
                            var n=0;
                            for(var k=0;k<mangso.length;k++){
                                console.log(bientttt[k]);
                                if(bientttt[k]==true){
                                    n++;
                                }
                            }
                            if(n==mangso.length){
                                var sorandom =0;
                                $.get("http://localhost:3000/laymadh",function(data8){
                                    sorandom = Number(data8.soluongdh)+1;
                                        console.log("dsfd"+sorandom+";"+ngay);
                                        $.post("/guitttt",{xdonhang:sorandom,xtonggia:tonggia,xthanhtoan:hinhthucthanhtoan,xkhuvuc:el,xdiachi:tdc.value,xsdt:tsdt.value,xngay:ngay,xghichu:tgc.value,xtensp:mangten,xgiasp:manggia,xsoluong:mangsoluong,xmasp:mangma},function(data){
                                            console.log("da gui du lieu len server: ", data);   ``
                                        });
                                        capnhatgiohang();
                                        alert("Tạo đơn hàng thành công có mã: "+sorandom);
                                        window.location="../giohang/giohang.html";
                                });
                            }
                        });
                    });
                    }
                }else{
                    hinhthucthanhtoan="NGANHANG";
                    var tdc1 = document.getElementById("txtdc1");
                    var tsdt1 = document.getElementById("txtsdt1");
                    var tgc1 = document.getElementById("txtgc1");
                    var el1=document.getElementById("mySelect3").options[document.getElementById("mySelect3").selectedIndex].innerHTML;
                    if(tdc1.value.length==0 || tsdt1.value.length==0){
                        alert("Vui lòng nhập đủ thông tin");
                    }else{
                        var d = new Date();
                        var ngay = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
                        var mangten = [];
                        var mangma = [];
                        var manggia = [];
                        var mangsoluong=[];
                        var tonggia = Number(document.getElementsByClassName("tongtien")[0].textContent)+Number(document.getElementsByClassName("phiship")[0].textContent);
                        var dsma=[];
                        var dssl=[];
                        var dsmakho=[];
                        var dsngaynhap=[];
                        var dshansudung=[];
                        var dsstt=[];
                        var dsmasp=[];
                        var dstensp=[];
                        var dsanhsp=[];
                        
                        $.get("http://localhost:3000/gettttonkho",function(data){
                            data.dmasp.forEach(function(val){
                                dsma.push(val);
                            });
                            data.dsl.forEach(function(val){
                                dssl.push(val);
                            });
                            data.dmakho.forEach(function(val){
                                dsmakho.push(val);
                            });
                            data.dnsx.forEach(function(val){
                                dsngaynhap.push(val);
                            });
                            data.dhsd.forEach(function(val){
                                dshansudung.push(val);
                            });
                            data.dstt.forEach(function(val){
                                dsstt.push(val);
                            });
                            $.get("http://localhost:3000/ttt",function(data1){
                                        
                                        data1.msp.forEach(function(val){
                                            dsmasp.push(val);
                                        });
                                        data1.tensanpham.forEach(function(val){
                                            dstensp.push(val);
                                        });
                                        data1.hinhanhsp.forEach(function(val){
                                            dsanhsp.push(val);
                                        });
                                        data1.hinhanhsp.forEach(function(val){
                                            dsanhsp.push(val);
                                        });
                            for(var k=0;k<mangso.length;k++){
                                bientttt[k]=false;
                                var sl=0;
                                var masp1 = document.getElementsByClassName("tmasp")[mangso[k]];
                                var tensp1 = document.getElementsByClassName("ttensp")[mangso[k]];
                                var giasp1 = document.getElementsByClassName("tgiasp")[mangso[k]];
                                var soluongsp1 = document.getElementsByClassName("txtsoluong")[mangso[k]];
                                var makho="";
                                if(el1=="Miền Nam"){
                                    makho="K1";
                                }else if(el1=="Miền Trung"){
                                    makho="K2";
                                }else{
                                    makho="K3";
                                }
                                for (var i=0;i<dsma.length;i++){
                                    if(masp1.textContent==dsma[i] && makho==dsmakho[i]){
                                        console.log(masp1.textContent+""+dsma[i]+""+makho)
                                        sl=sl+dssl[i];
                                    }
                                }
                                if(soluongsp1.value>sl){
                                        for(l=0;l<dsmasp.length;l++){
                                            if(masp1.textContent==dsmasp[l]){
                                                alert("Sản phẩm "+dstensp[l]+" ở khu vực "+el1+" hiện chỉ còn "+sl);
                                            }
                                        }
                                }else{
                                    bientttt[k]=true;
                                    if(Number(soluongsp1.value)>1){
                                        var gia=Number(giasp1.textContent)/Number(soluongsp1.value);
                                        mangten.push(tensp1.textContent);
                                        mangma.push(masp1.textContent);
                                        manggia.push(gia);
                                        mangsoluong.push(soluongsp1.value);
                                    }else{
                                        mangten.push(tensp1.textContent);
                                        mangma.push(masp1.textContent);
                                        manggia.push(giasp1.textContent);
                                        mangsoluong.push(soluongsp1.value);
                                    }
                                }
                            }
                            var n=0;
                            for(var k=0;k<mangso.length;k++){
                                console.log(bientttt[k]);
                                if(bientttt[k]==true){
                                    n++;
                                }
                            }
                            if(n==mangso.length){
                                var sorandom =0;
                                $.get("http://localhost:3000/laymadh",function(data8){
                                    sorandom = Number(data8.soluongdh)+1;
                                        console.log("dsfd"+sorandom+";"+ngay);
                                        $.post("/guitttt",{xdonhang:sorandom,xtonggia:tonggia,xthanhtoan:hinhthucthanhtoan,xkhuvuc:el1,xdiachi:tdc1.value,xsdt:tsdt1.value,xngay:ngay,xghichu:tgc1.value,xtensp:mangten,xgiasp:manggia,xsoluong:mangsoluong,xmasp:mangma},function(data){
                                            console.log("da gui du lieu len server: ", data);   ``
                                        });
                                        alert("Tạo đơn hàng thành công có mã: "+sorandom);
                                        document.getElementById("btnanh1").click();
                                        capnhatgiohang();
                                        
                                });
                            }
                        });
                    });
                        
                    }
                }
                
            }
        });
    });
});

function previewFile2(){
    
    var preview = document.getElementById('imagesp2');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    if(file.name.length==0){
        alert("bạn chưa chọn ảnh");
    }else{
        reader.onloadend = function () {
            preview.src = reader.result;
            document.getElementById("btnPay").disabled=false;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
}



function thaydoisoluong(val,gsp){
    var soluong=0
    soluong=document.getElementsByClassName("txtsoluong")[val];
    var giacu=document.getElementsByClassName("tgiasp")[val];
    console.log(soluong.value);
    if(soluong.value<=0){
        alert("Số lượng không hợp lệ");
        soluong.value=1;
        var xx=gsp*soluong.value
        giacu.textContent=""+xx;
    }else{
        var xx=gsp*soluong.value
        giacu.textContent=""+xx;
    }
}

function choncb1(){
    $.get("http://localhost:3000/dcsdt",function(data1){
        if(document.getElementsByName("cbldl")[0].checked){
                document.getElementById("txtdc").value=data1.cdc;
                document.getElementById("txtdc").disabled=true;
        }else{
            document.getElementById("txtdc").value="";
            document.getElementById("txtdc").disabled=false;
        }
        if(document.getElementsByName("cbldl")[1].checked){
            document.getElementById("txtsdt").value=data1.csdt;
            document.getElementById("txtsdt").disabled=true;
        }else{
            document.getElementById("txtsdt").value="";
            document.getElementById("txtsdt").disabled=false;
        }
    });
}

function choncb2(){
    $.get("http://localhost:3000/dcsdt",function(data1){
        if(document.getElementsByName("cbldl1")[0].checked){
                document.getElementById("txtdc1").value=data1.cdc;
                document.getElementById("txtdc1").disabled=true;
        }else{
            document.getElementById("txtdc1").value="";
            document.getElementById("txtdc1").disabled=false;
        }
        if(document.getElementsByName("cbldl1")[1].checked){
            document.getElementById("txtsdt1").value=data1.csdt;
            document.getElementById("txtsdt1").disabled=true;
        }else{
            document.getElementById("txtsdt1").value="";
            document.getElementById("txtsdt1").disabled=false;
        }
    });
}

function choncb(){

    var tonggia=0;
    var gia = document.getElementsByClassName("tgiasp");
    var kk=document.getElementsByClassName("tongtien");
    var tc=document.getElementsByClassName("tongcong");
    var ps=document.getElementsByClassName("phiship");
    $.get("http://localhost:3000/getgiohang",function(data1){
            var dssp=[];
            data1.spgh.forEach(function(val){
                dssp.push(val);
            });
            for(var j=0;j<dssp.length;j++){
                if(document.getElementsByClassName("cbtt")[j].checked==true){
                    document.getElementsByClassName("txtsoluong")[j].disabled=true;
                    tonggia=tonggia+Number(gia[j].textContent);
                }else{
                    document.getElementsByClassName("txtsoluong")[j].disabled=false;
                }
            }
            
            kk[0].textContent=""+tonggia;
            var vk=Number(kk[0].textContent)+Number(ps[0].textContent);
            tc[0].textContent=""+vk
            console.log(kk[0].textContent);
    });
    //tonggia = document.getElementById("")
}
function kiemtraradio(){
    if(document.getElementById("tt").checked==true){
        chonkv2();
        document.getElementById("tt").checked=false;
        document.getElementById("nh").checked=true;
        document.getElementById("tttt").style.display="none";
        document.getElementById("ttnh").style.display="block";
        document.getElementById("imagesp2").style.display="block";
        document.getElementById("btnPay").disabled=true;
        
    }else{
        chonkv1();
        document.getElementById("tt").checked=true;
        document.getElementById("nh").checked=false;
        document.getElementById("tttt").style.display="block";
        document.getElementById("ttnh").style.display="none";
        document.getElementById("imagesp2").style.display="none";
        document.getElementById("btnPay").disabled=false;
    }
}
function chonnh(){
    var el=document.getElementById("mySelect1").options[document.getElementById("mySelect1").selectedIndex].innerHTML;
    if(el=="Agribank"){
        document.getElementById("agri").style.display="block";
        document.getElementById("sac").style.display="none";
        document.getElementById("vietc").style.display="none";
        document.getElementById("viett").style.display="none";
    }else if(el=="Sacombank"){
        document.getElementById("agri").style.display="none";
        document.getElementById("sac").style.display="block";
        document.getElementById("vietc").style.display="none";
        document.getElementById("viett").style.display="none";
    }else if(el=="Vietcombank"){
        document.getElementById("agri").style.display="none";
        document.getElementById("sac").style.display="none";
        document.getElementById("vietc").style.display="block";
        document.getElementById("viett").style.display="none";
    }else{
        document.getElementById("agri").style.display="none";
        document.getElementById("sac").style.display="none";
        document.getElementById("vietc").style.display="none";
        document.getElementById("viett").style.display="block";
    }
}
function chonkv1(){
    choncb();
    var el=document.getElementById("mySelect2").options[document.getElementById("mySelect2").selectedIndex].innerHTML;
    if(el=="Miền Nam"){
        document.getElementsByClassName("phiship")[0].textContent="15000";
    }else if(el=="Miền Trung"){
        document.getElementsByClassName("phiship")[0].textContent="20000";
    }else if(el=="Miền Bắc"){
        document.getElementsByClassName("phiship")[0].textContent="25000";
    }
}
function chonkv2(){
    choncb();
    var el=document.getElementById("mySelect3").options[document.getElementById("mySelect3").selectedIndex].innerHTML;
    if(el=="Miền Nam"){
        document.getElementsByClassName("phiship")[0].textContent="15000";
    }else if(el=="Miền Trung"){
        document.getElementsByClassName("phiship")[0].textContent="20000";
    }else if(el=="Miền Bắc"){
        document.getElementsByClassName("phiship")[0].textContent="25000";
    }
}
