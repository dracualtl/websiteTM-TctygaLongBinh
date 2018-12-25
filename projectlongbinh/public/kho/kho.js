var num=1;
var ngay10=10*24*60*60*1000;
var ngay20=20*24*60*60*1000;
$(document).ready(function(){
    
    
});

function themngay(){
    themoption();
    var date= new Date();
        // document.getElementsByClassName("txtNSX")[0].value=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        document.getElementsByClassName("txtNSX")[0].valueAsDate=new Date;
    //     document.getElementsByClassName("txtHSD")[0].value=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    
    $.get("http://localhost:3000/gettttonkho",function(data){
        var dsma=[];
        var dssl=[];
        var dsmakho=[];
        var dsngaynhap=[];
        var dshansudung=[];
        var dsstt=[];
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
            var dsmasp=[];
            var dstensp=[];
            var dsanhsp=[];
            
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
            console.log(dsma.length+" va "+dsanhsp.length)
            for(var i=0;i<dsmasp.length;i++){
                var sl=0;
                for(j=0;j<dsma.length;j++){
                    if(dsma[j]==dsmasp[i]){
                        sl=sl+Number(dssl[j]);
                    }
                }
                $("#tableuser2").append(`<tr>
                <th><img src="`+dsanhsp[i]+`" style="width: 40px;height: 40px;"></th>
                <th>`+dstensp[i]+`</th>
                <th>`+dsmasp[i]+`</th>
                <th>`+sl+`</th>
              </tr>`);
            }
            for(var i=0;i<dsmasp.length;i++){
                    var sl=0;
                    for(j=0;j<dsma.length;j++){
                        if(dsma[j]==dsmasp[i] && dsmakho[j]=="K1"){
                            sl=sl+Number(dssl[j]);
                        }
                    }
                    m=0;
                    if(sl<=5){
                        m++;
                        $("#canhbaosoluongmn").append(`<p>Sản Phẩm: `+dstensp[i]+` cần nhập thêm hàng</p>`);
                    }
                    if(m>0){
                        document.getElementById("canhbaosoluongmn").style.display="block";
                    }
                    $("#tablemiennam").append(`<tr>
                    <th><img src="`+dsanhsp[i]+`" style="width: 40px;height: 40px;"></th>
                    <th>`+dstensp[i]+`</th>
                    <th>`+dsmasp[i]+`</th>
                    <th>`+sl+`</th>
                    </tr>`);
            }
            for(var i=0;i<dsmasp.length;i++){
                var sl=0;
                for(j=0;j<dsma.length;j++){
                    if(dsma[j]==dsmasp[i] && dsmakho[j]=="K2"){
                        sl=sl+Number(dssl[j]);
                    }
                }
                m=0;
                    if(sl<=5){
                        m++;
                        $("#canhbaosoluongmt").append(`<p>Sản Phẩm: `+dstensp[i]+` cần nhập thêm hàng</p>`);
                    }
                    if(m>0){
                        document.getElementById("canhbaosoluongmt").style.display="block";
                    }
                $("#tablemientrung").append(`<tr>
                <th><img src="`+dsanhsp[i]+`" style="width: 40px;height: 40px;"></th>
                <th>`+dstensp[i]+`</th>
                <th>`+dsmasp[i]+`</th>
                <th>`+sl+`</th>
                </tr>`);
        }
        for(var i=0;i<dsmasp.length;i++){
            var sl=0;
            for(j=0;j<dsma.length;j++){
                if(dsma[j]==dsmasp[i] && dsmakho[j]=="K3"){
                    sl=sl+Number(dssl[j]);
                }
            }
            m=0;
                    if(sl<=5){
                        m++;
                        $("#canhbaosoluongmb").append(`<p>Sản Phẩm: `+dstensp[i]+` cần nhập thêm hàng</p>`);
                    }
                    if(m>0){
                        document.getElementById("canhbaosoluongmb").style.display="block";
                    }
            $("#tablemienbac").append(`<tr>
            <th><img src="`+dsanhsp[i]+`" style="width: 40px;height: 40px;"></th>
            <th>`+dstensp[i]+`</th>
            <th>`+dsmasp[i]+`</th>
            <th>`+sl+`</th>
            </tr>`);
    }
    for(var i=0;i<dsma.length;i++){
        var anh1="";
        var tensp1="";
        var tenkho="";
        if(dsmakho[i]=="K1"){
            tenkho="Kho miền nam";
        }else if(dsmakho[i]=="K2"){
            tenkho="Kho miền trung";
        }else{
            tenkho="Kho miền bắc";
        }
        for(j=0;j<dsmasp.length;j++){
            if(dsma[i]==dsmasp[j]){
                anh1=dsanhsp[j];
                tensp1=dstensp[j];
            }
        }
        var dn = new Date(dsngaynhap[i]);
        var hsd = new Date(dshansudung[i]);
        var nht= new Date();
        var date20 =new Date(nht.getFullYear(),(nht.getMonth()),nht.getDate()+365);
        console.log("ac"+date20);
        var nn = dn.getDate()+"-"+(dn.getMonth()+1)+"-"+dn.getFullYear();
        var nhsd = hsd.getDate()+"-"+(hsd.getMonth()+1)+"-"+hsd.getFullYear();
        var va = Math.ceil((hsd-nht)/(24*60*60*1000));
        m=0;
                    //console.log(va);
                    if(va<=5 && va>0){
                        m++;
                        $("#canhbaohansudung").append(`<p style="color= red;">`+tensp1+` tại `+tenkho+` stt:  `+dsstt[i]+` sắp hết hạn</p>`);
                    }else if(va<=0){
                        m++;
                        $("#canhbaohansudung").append(`<p style="color= red;">`+tensp1+` tại `+tenkho+` stt:  `+dsstt[i]+` đã hết hạn</p>`);
                    }
                    if(m>0){
                        document.getElementById("canhbaohansudung").style.display="block";
                    }
        $("#tablechitiet").append(`<tr>
        <th>`+dsstt[i]+`</th>
        <th><img src="`+anh1+`" style="width: 40px;height: 40px;"></th>
        <th>`+tensp1+`</th>
        <th>`+dsma[i]+`</th>
        <th>`+dssl[i]+`</th>
        <th>`+tenkho+`</th>
        <th>`+nn+`</th>
        <th>`+nhsd+`</th>
        </tr>`);
}
        });
    });
}

function kiemtraNSX(so){
    var date= new Date();
    var ngayht=new Date(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
    
     console.log(document.getElementsByClassName("txtHSD")[0].value);
    console.log( Math.floor((ngayht - new Date(document.getElementsByClassName("txtNSX")[so].value))/(60*60*24*1000)));
    var date=new Date();
    var date20 =new Date(date+(20*24*60*60*1000));
    var dateht= new Date(2018,11,10);
    var datesx= new Date(document.getElementsByClassName("txtNSX")[so].value);
    console.log("ac"+date20);
}
function luuhang(){
            // var dateht= new Date(document.getElementsByClassName("txtNSX")[0].value);
            // document.getElementsByClassName("txtHSD")[0].value=dateht.getFullYear()+"-"+(dateht.getMonth()+1)+"-"+dateht.getDate();
            // document.getElementsByClassName("txtHSD")[0].min=dateht.getFullYear()+"-"+(dateht.getMonth()+1)+"-"+dateht.getDate();

            // $.get("http://localhost:3000/laythungay",function(data){
            //     // if("2018-11-01"<document.getElementsByClassName("txtNSX")[0].value){
            //     //     alert("dung ngay")
            //     // }else{
            //     //     alert("sai ngay")
            //     // }
            //     var dateht= new Date(document.getElementsByClassName("txtNSX")[0].value);
            //     var datect= new Date("2018-10-21");
            //     console.log(new Date(dateht.getFullYear(),dateht.getMonth()+1,dateht.getDate()-7));
            //     console.log( (dateht - datect)/(60*60*24*1000));
            // });
            var pmakho=[];
            var pmasp=[];
            var psoluong=[];
            var mangten=[];
            var mangma=[];
            var pnsx=[];
            var phsd=[];
            $.get("http://localhost:3000/ttt",function(data){
                        data.msp.forEach(function(val){
                            mangma.push(val);
                        });
                        data.tensanpham.forEach(function(val1){
                            mangten.push(val1);
                        });
            var sok0=0;
            var songay=0;
            for(var j=0;j<mangma.length;j++){
                var psl1=document.getElementsByClassName("txtsoluong")[j].value;
                var ngayhsd=document.getElementsByClassName("txtHSD")[j].value;
                var ngayhansudung= new Date(ngayhsd);
                var date= new Date();
                //var date365 =new Date(nht.getFullYear(),(nht.getMonth()),nht.getDate()+365);
                var ngayht=new Date(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
                var gtsosanh=Math.ceil((ngayhansudung -ngayht)/(24*60*60*1000));
                console.log(gtsosanh);
                if(psl1!=0){
                    sok0++;
                    songay++;
                    if(gtsosanh<10 || gtsosanh>365){
                        alert(mangten[j]+" có hạn sử dụng nhỏ hơn 10 ngày hoặc lớn hơn 1 năm");
                        songay--;
                    }
                    if(sok0==songay){
                        var el=document.getElementById("selectKhuvuc").options[document.getElementById("selectKhuvuc").selectedIndex].innerHTML;
                        var pmakho1="";
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        pmakho.push(pmakho1);
                        pmasp.push(mangma[j]);
                        psoluong.push(psl1);
                        pnsx.push(document.getElementsByClassName("txtNSX")[0].value);
                        phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                    }
                    //console.log("post len : "+pmakho1+" va "+mangma[j]+" va "+psl1);
                }
            }
            if(sok0==songay){
                if(pmakho.length==0){
                    alert("Bạn chưa nhập gì để lưu");
                }else{
                    $.post("http://localhost:3000/guittnhapkho",{postmakho:pmakho,postmasp:pmasp,postsoluong:psoluong,postnsx:pnsx,posthsd:phsd},function(data){
                        console.log("gui du lieu len server",data);
                    });
                    alert("Lưu vào kho thành công !!!");
                    window.location="../kho/kho.html";
                }
            }
            
            });
        
    }

function kiemtrastt(){
        if(document.getElementsByClassName("txtstt")[0].value!=0){
            $.get("http://localhost:3000/gettttonkho",function(data){
            var dsma=[];
            var dssl=[];
            var dsmakho=[];
            var dsngaynhap=[];
            var dshansudung=[];
            var dsstt=[];
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
            var x=0;
            var masp="";
            for(var i=0;i<dsstt.length;i++){
                if(dsstt[i]==document.getElementsByClassName("txtstt")[0].value){
                    x++;
                    masp=dsma[i];
                    document.getElementsByClassName("txtsl")[0].value=dssl[i];
                }
            }
            if(x==0){
                document.getElementsByClassName("txtsl")[0].value=0;
                document.getElementById("tttensp").style.display="none";
            }else{
                $.get("http://localhost:3000/ttt",function(data1){
                    var dsmasp=[];
                    var dstensp=[];
                    var dsanhsp=[];
                    
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
                    for(var j=0;j<dsmasp.length;j++){
                        if(dsmasp[j]==masp){
                            document.getElementById("tttensp").style.display="block";
                            document.getElementById("tttensp").textContent="Tên sản phẩm: "+dstensp[j];
                        }
                    }
                });
            }
        });
        }
    }
function thanhly(){
    var stt=document.getElementsByClassName("txtstt")[0].value;
    var sl=document.getElementsByClassName("txtsl")[0].value;
    var lido=document.getElementById("txtlido").value;
    $.get("http://localhost:3000/gettttonkho",function(data){
        var dsma=[];
        var dssl=[];
        var dsmakho=[];
        var dsngaynhap=[];
        var dshansudung=[];
        var dsstt=[];
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
        var gt=false;
        var vt=0
        for(var i=0;i<dsstt.length;i++){
            if(dsstt[i]==stt){
                vt=i;
                gt=true;
            }
        }
        if(gt==false){
            alert("không tồn tại sản phẩm có STT đó");
        }else{
            if(sl==0){
                alert("Số lượng nhập phải lớn hơn 0");
            }else if(sl>dssl[vt]){
                alert("Số lượng bạn nhập vượt quá số lượng trong kho, số lượng còn lại: "+dssl[vt]);
            }else{
                if(lido.length<10){
                    alert("Lí do quá ngắn hoặc bạn chưa nhập");
                }else{
                    $.post("http://localhost:3000/thanhlykho",{tlstt:stt,tlsl:sl},function(data){
                        console.log("da gui du lieu len server", data);
                    });
                    alert("Đã thanh lý xong");
                    window.location="../kho/kho.html"
                }
            }
        }
    });
}
function luuvaokho(){
    var pmakho=[];
            var pmasp=[];
            var psoluong=[];
            var mangten=[];
            var mangma=[];
            var pnsx=[];
            var phsd=[];
            $.get("http://localhost:3000/ttt",function(data){
                        data.msp.forEach(function(val){
                            mangma.push(val);
                        });
                        data.tensanpham.forEach(function(val1){
                            mangten.push(val1);
                        });
            
            for(var j=0;j<num;j++){
                if(j==0 && document.getElementsByClassName("txtsoluong")[0].value!=0){
                    var el=document.getElementById("selectKhuvuc").options[document.getElementById("selectKhuvuc").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham").options[document.getElementById("selectSanpham").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[0].value;
                    var pmakho1="";
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==1 && document.getElementsByClassName("txtsoluong")[1].value!=0){
                    var el=document.getElementById("selectKhuvuc1").options[document.getElementById("selectKhuvuc1").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham1").options[document.getElementById("selectSanpham1").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[1].value;
                    var pmakho1="";
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==2 && document.getElementsByClassName("txtsoluong")[2].value!=0){
                    var el=document.getElementById("selectKhuvuc2").options[document.getElementById("selectKhuvuc2").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham2").options[document.getElementById("selectSanpham2").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[2].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==3 && document.getElementsByClassName("txtsoluong")[3].value!=0){
                    var el=document.getElementById("selectKhuvuc3").options[document.getElementById("selectKhuvuc3").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham3").options[document.getElementById("selectSanpham3").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[3].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                            }
                        }
                }
                if(j==4 && document.getElementsByClassName("txtsoluong")[4].value!=0){
                    var el=document.getElementById("selectKhuvuc4").options[document.getElementById("selectKhuvuc4").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham4").options[document.getElementById("selectSanpham4").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[4].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==5 && document.getElementsByClassName("txtsoluong")[5].value!=0){
                    var el=document.getElementById("selectKhuvuc5").options[document.getElementById("selectKhuvuc5").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham5").options[document.getElementById("selectSanpham5").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[5].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==6 && document.getElementsByClassName("txtsoluong")[6].value!=0){
                    var el=document.getElementById("selectKhuvuc6").options[document.getElementById("selectKhuvuc6").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham6").options[document.getElementById("selectSanpham6").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[6].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==7 && document.getElementsByClassName("txtsoluong")[7].value!=0){
                    var el=document.getElementById("selectKhuvuc7").options[document.getElementById("selectKhuvuc7").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham7").options[document.getElementById("selectSanpham7").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[7].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==8 && document.getElementsByClassName("txtsoluong")[8].value!=0){
                    var el=document.getElementById("selectKhuvuc8").options[document.getElementById("selectKhuvuc8").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham8").options[document.getElementById("selectSanpham8").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[8].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
                if(j==9 && document.getElementsByClassName("txtsoluong")[9].value!=0){
                    var el=document.getElementById("selectKhuvuc9").options[document.getElementById("selectKhuvuc9").selectedIndex].innerHTML;
                    var el1=document.getElementById("selectSanpham9").options[document.getElementById("selectSanpham9").selectedIndex].innerHTML;
                    var psl=document.getElementsByClassName("txtsoluong")[9].value;
                    var pmakho1="";
                    
                   
                        if(el=="Kho Miền Nam"){
                            pmakho1="K1";
                        }else if(el=="Kho Miền Trung"){
                            pmakho1="K2";
                        }else{
                            pmakho1="K3";
                        }
                        for(var k=0;k<mangten.length;k++){
                            if(mangten[k]==el1){
                                pmakho.push(pmakho1);
                                pmasp.push(mangma[k]);
                                psoluong.push(psl);
                                pnsx.push(document.getElementsByClassName("txtNSX")[j].value);
                                phsd.push(document.getElementsByClassName("txtHSD")[j].value);
                            }
                        }
                }
            }
            $.post("http://localhost:3000/guittnhapkho",{postmakho:pmakho,postmasp:pmasp,postsoluong:psoluong,postnsx:pnsx,posthsd:phsd},function(data){
                console.log("gui du lieu len server",data);
            });
            alert("Lưu vào kho thành công !!!");
            window.location="../kho/kho.html";
            });
}



function clickxem(){
    document.getElementById("nutxem").disabled=true;
    document.getElementById("nutnhap").disabled=false;
    document.getElementById("nutxuat").disabled=false;
    document.getElementById("chucnangxemhang").style.display="block";
    document.getElementById("chucnangnhaphang").style.display="none";
    document.getElementById("chucnangxuathang").style.display="none";
    document.getElementById("nutchucnang").style.display="block";
    tongkho();
}

function tongkho(){
    document.getElementById("tongkho").disabled=true;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("dstongsanpham").style.display="block";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="none";
    
}
function miennam(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=true;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("dstongsanpham").style.display="none";
    document.getElementById("dsmiennam").style.display="block";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="none";
}

function mientrung(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=true;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("dstongsanpham").style.display="none";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="block";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="none";
    
}

function mienbac(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=true;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("dstongsanpham").style.display="none";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="block";
    document.getElementById("dschitiet").style.display="none";
}

function xemchitiet1(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=true;
    document.getElementById("dstongsanpham").style.display="none";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="block";
}


function clicknhap(){
    document.getElementById("nutxem").disabled=false;
    document.getElementById("nutnhap").disabled=true;
    document.getElementById("nutxuat").disabled=false;
    document.getElementById("chucnangxemhang").style.display="none";
    document.getElementById("chucnangnhaphang").style.display="block";
    document.getElementById("chucnangxuathang").style.display="none";
    document.getElementById("nutchucnang").style.display="none";
}
function clickxuat(){
    document.getElementById("nutxem").disabled=false;
    document.getElementById("nutnhap").disabled=false;
    document.getElementById("nutxuat").disabled=true;
    document.getElementById("chucnangxemhang").style.display="none";
    document.getElementById("chucnangnhaphang").style.display="none";
    document.getElementById("chucnangxuathang").style.display="block";
    document.getElementById("nutchucnang").style.display="none";
}

function vetrangchu(){
    var bien=0;
    for(var i=0;i<num;i++){
        if(document.getElementsByClassName("txtsoluong")[i].value!=0){
            bien++;
        }
    }
    if(bien==0){
        window.location="../";
    }else{
        document.getElementById("exitWindow1").style.display="block";
    }
}


function hideDetail1() {
    document.getElementById('exitWindow').style.display = "none"; // new
    document.getElementById('exitWindow1').style.display = "none";
    if (kmai == 1) {
        document.getElementsByClassName("tintuc")[vtri].style.display = "none";
        kmai = 0;
    }
}

function thoat(){
    window.location="../";
}


function chucnangthem1(){
    document.getElementById("txtsoform").disabled=true;
    document.getElementById("btnBD").disabled=true;
    var slform1 = document.getElementById("txtsoform").value;
    for(var i=1;i<slform1;i++){
        $("#formNhap").append(`<form class="nhapHang">
        <span class="close">&times;</span>
        <p>Form nhập thứ: <span class="sttform">1</span> </p>
        
        <p>Mã kho: <select id="selectKhuvuc`+i+`">
                <option>Kho Miền Nam</option>
                <option>Kho Miền Trung</option>
                <option>Kho Miền Bắc</option>
            </select></p>
        <p>Sản phẩm: <select id="selectSanpham`+i+`">

            </select></p>
            <p>Số lượng: <input type="number" class="txtsoluong" value="0" min="0"></p><br>
        <p onmouseout="kiemtraNSX(0)">Ngày SX: <input type="date" class="txtNSX" value="2018-10-31" min="2018-10-31" ></p>
            <p>Hạn SD: <input type="date" class="txtHSD" ></p>
    </form>`);
        themoption(num);
        var date= new Date();
        document.getElementsByClassName("txtNSX")[num].value=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        document.getElementsByClassName("txtHSD")[num].value=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
        num++;
        document.getElementsByClassName("sttform")[num-1].textContent=num;
    }
    // }else if(num>=10){
    //     alert("Bạn chỉ được lưu tối đa 10 form");
    // }else{
    //     var slform=document.getElementsByClassName("txtsoluong")[0].textContent;
    //     if(slform==1){
    //         alert("them 1 form")
    //     }
        
        
    
}

function themoption(){
    var dsma=[];
        var dsten=[];
        $.get("http://localhost:3000/ttt",function(data){
            data.msp.forEach(function(val){
                dsma.push(val);
            });
            data.tensanpham.forEach(function(val1){
                dsten.push(val1);
            });
            for(var i=0;i<dsma.length;i++){
                $("#tablenhap").append(`<tr>
                <th>`+dsten[i]+`</th>
                <th><input type="number" class="txtsoluong" value="0" min="0" style="width: 100px"></th>
                <th><input type="date" class="txtHSD" ></th>
              </tr>`);
                var date=new Date();
                document.getElementsByClassName("txtHSD")[i].valueAsDate=new Date();
            }
        
            
        });
    
}