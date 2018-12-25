var num=1;
var ngay10=10*24*60*60*1000;
var ngay20=20*24*60*60*1000;
$(document).ready(function(){
    $("#btnloc").click(function(){
        $("#tablechitiet").html(`<tr>
        <th>STT</th>
        <th>Mã đơn hàng</th>
        <th>ID Khách hàng</th>
        <th>Tổng tiền</th>
        <th>Tình Trạng</th>
        <th>ngày lập</th>
          </tr>`);
          $.get("http://localhost:3000/laythongtindonhang",function(data){
            var dsma=[];
            var dsidkh=[];
            var dstt=[];
            var dstttt=[];
            var dsngay=[];
           
            data.hmadh.forEach(function(val){
                dsma.push(val);
            });
            data.hidkh.forEach(function(val){
                dsidkh.push(val);
            });
            data.htongtien.forEach(function(val){
                dstt.push(val);
            });
            data.htrangthai.forEach(function(val){
                dstttt.push(val);
            });
            data.hngaytao.forEach(function(val){
                dsngay.push(val);
            });
            
            for(var i=0;i<dsma.length;i++){
                var date= new Date(document.getElementById("ngayloc").value);
                var ngaylay = new Date(new Date(dsngay[i]).getFullYear(),new Date(dsngay[i]).getMonth(),new Date(dsngay[i]).getDate());
                var n = Math.floor((date - ngaylay)/(24*60*60*1000));
                console.log(n);
                if(n==0){
                    $("#tablechitiet").append(`<tr>
                    <th>`+(i+1)+`</th>
                    <th>`+dsma[i]+`</th>
                    <th>`+dsidkh[i]+`</th>
                    <th>`+dstt[i]+`</th>
                    <th>`+dstttt[i]+`</th>
                    <th>`+new Date(dsngay[i]).toLocaleDateString()+" "+new Date(dsngay[i]).toLocaleTimeString()+`</th>
                    </tr>`);
                }
                
            }
        });
    });
    
});

function themngay(){
    //themoption();
    var ngay="2018-1-1"
    var date= new Date();
   // document.getElementsByClassName("txtNSX")[0].value=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    document.getElementById("ngayloc").valueAsDate=new Date();
    document.getElementById("chonngay").valueAsDate=new Date();
    document.getElementById("chonthang").selectedIndex=date.getMonth();
    var so=0;
    if(date.getFullYear()=="2016"){
        so=0;
    }else if(date.getFullYear()=="2017"){
        so=1;
    }else if(date.getFullYear()=="2018"){
        so=2;
    }else if(date.getFullYear()=="2019"){
        so=3;
    }else{
        so=4;
    }
    document.getElementById("chonnam").selectedIndex=so;

    document.getElementById("btntheongay").disabled=true;
    document.getElementById("btntheothang").disabled=false;
    document.getElementById("btntheonam").disabled=false;
    document.getElementById("chonngay").style.display="block";
    document.getElementById("chonthang").style.display="none";
    document.getElementById("chonnam").style.display="none";
    //     document.getElementsByClassName("txtHSD")[0].value=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var dsma=[];
        var dsidkh=[];
        var dstt=[];
        var dstttt=[];
        var dsngay=[];
        var dskho=[];
        var dsngayht=[];
        data.hmadh.forEach(function(val){
            dsma.push(val);
        });
        data.hidkh.forEach(function(val){
            dsidkh.push(val);
        });
        data.htongtien.forEach(function(val){
            dstt.push(val);
        });
        data.htrangthai.forEach(function(val){
            dstttt.push(val);
        });
        data.hngaytao.forEach(function(val){
            dsngay.push(val);
        });
        data.hdskv.forEach(function(val){
            dskho.push(val);
        });
        data.hngayht.forEach(function(val){
            dsngayht.push(val);
        });
        for(var i=0;i<dsma.length;i++){
            $("#tableuser2").append(`<tr>
                <th>`+(i+1)+`</th>
                <th>`+dsma[i]+`</th>
                <th>`+dsidkh[i]+`</th>
                <th>`+dstt[i]+`</th>
                <th>`+dstttt[i]+`</th>
                <th>`+dskho[i]+`</th>
                <th>`+new Date(dsngay[i]).toLocaleDateString()+" "+new Date(dsngay[i]).toLocaleTimeString()+`</th>
              </tr>`);   
        }
        for(var i=0;i<dsma.length;i++){
            if(dstttt[i]=="HOANTHANH"){
                $("#tablemiennam").append(`<tr>
                <th>`+(i+1)+`</th>
                <th>`+dsma[i]+`</th>
                <th>`+dsidkh[i]+`</th>
                <th>`+dstt[i]+`</th>
                <th>`+dstttt[i]+`</th>
                <th>`+dskho[i]+`</th>
                <th>`+new Date(dsngay[i]).toLocaleDateString()+" "+new Date(dsngay[i]).toLocaleTimeString()+`</th>
                <th>`+new Date(dsngayht[i]).toLocaleDateString()+`</th>
                </tr>`);
            }
        }
        for(var i=0;i<dsma.length;i++){
            if(dstttt[i]=="HUY"){
                $("#tablemientrung").append(`<tr>
                <th>`+(i+1)+`</th>
                <th>`+dsma[i]+`</th>
                <th>`+dsidkh[i]+`</th>
                <th>`+dstt[i]+`</th>
                <th>`+dstttt[i]+`</th>
                <th>`+dskho[i]+`</th>
                <th>`+new Date(dsngay[i]).toLocaleDateString()+" "+new Date(dsngay[i]).toLocaleTimeString()+`</th>
                </tr>`);
            }
        }
        for(var i=0;i<dsma.length;i++){
            if(dstttt[i]!="HOANTHANH" && dstttt[i]!="HUY"){
                $("#tablemienbac").append(`<tr>
                <th>`+(i+1)+`</th>
                <th>`+dsma[i]+`</th>
                <th>`+dsidkh[i]+`</th>
                <th>`+dstt[i]+`</th>
                <th>`+dstttt[i]+`</th>
                <th>`+dskho[i]+`</th>
                <th>`+new Date(dsngay[i]).toLocaleDateString()+" "+new Date(dsngay[i]).toLocaleTimeString()+`</th>
                </tr>`);
            }
        }
        for(var i=0;i<dsma.length;i++){
                var date= new Date();
                document.getElementById("ngayloc").valueAsDate=new Date();
                var date1 = new Date(document.getElementById("ngayloc").value);
                var ngaylay = new Date(dsngay[i]);
                var n = Math.ceil((date1 - ngaylay)/(24*60*60*1000));
                if(n==0){
                    $("#tablechitiet").append(`<tr>
                    <th>`+(i+1)+`</th>
                    <th>`+dsma[i]+`</th>
                    <th>`+dsidkh[i]+`</th>
                    <th>`+dstt[i]+`</th>
                    <th>`+dstttt[i]+`</th>
                    <th>`+new Date(dsngay[i]).toLocaleDateString()+" "+new Date(dsngay[i]).toLocaleTimeString()+`</th>
                    </tr>`);
                }
                
            }
        for(var i=0;i<30;i++){
            var date= new Date();
            var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate()-i);
            
            var x=0;
            var sohuy=0;
            var sodangban=0;
            var tongtien=0;
            for(j=0;j<dsma.length;j++){
                var ngaytru = new Date(dsngayht[j]);
                var ngaytru1 = new Date(dsngay[j]);
                
                if(dstttt[j]=="HOANTHANH"){
                    var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                    if(n==0){
                        console.log(ngaytru+" va "+ngaylay +" va "+j);
                        console.log("da vao" +n);
                        x++;
                        tongtien=tongtien+Number(dstt[j])
                    }
                }else if(dstttt[j]=="HUY"){
                    var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                    if(n==0){
                        sohuy++;
                    }
                }else{
                    var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                    if(n==0){
                        sodangban++;
                    }
                    
                }
            }
            $("#tablesoluong").append(`<tr>
                    <th>`+(i+1)+`</th>
                    <th>`+ngaylay.toLocaleDateString()+`</th>
                    <th>`+x+`</th>
                    <th>`+sohuy+`</th>
                    <th>`+sodangban+`</th>
                    <th>`+tongtien+`</th>
                    </tr>`);
        }
    });
    

}

function setngay(){
    document.getElementById("ngaytest").valueAsDate=new Date();
}

function batdauloc(){
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var dsma=[];
        var dsidkh=[];
        var dstt=[];
        var dstttt=[];
        var dsngay=[];
        var dskho=[];
        var dsngayht=[];
        data.hmadh.forEach(function(val){
            dsma.push(val);
        });
        data.hidkh.forEach(function(val){
            dsidkh.push(val);
        });
        data.htongtien.forEach(function(val){
            dstt.push(val);
        });
        data.htrangthai.forEach(function(val){
            dstttt.push(val);
        });
        data.hngaytao.forEach(function(val){
            dsngay.push(val);
        });
        data.hdskv.forEach(function(val){
            dskho.push(val);
        });
        data.hngayht.forEach(function(val){
            dsngayht.push(val);
        });
        if(document.getElementById("btntheongay").disabled==true){
            $("#tablesoluong").html(`<tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>Tổng ĐH hoàn thành</th>
                <th>Tổng ĐH bị hủy</th>
                <th>Tổng ĐH đang thực hiện</th>
                <th>Tổng Doanh Thu</th>
            </tr>`);
            for(var i=0;i<30;i++){
                var date= new Date(document.getElementById("chonngay").value);
                var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate()-i);
                
                var x=0;
                var sohuy=0;
                var sodangban=0;
                var tongtien=0;
                for(j=0;j<dsma.length;j++){
                    var ngaytru = new Date(dsngayht[j]);
                    var ngaytru1 = new Date(dsngay[j]);
                    
                    if(dstttt[j]=="HOANTHANH"){
                        var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                        if(n==0){
                            console.log(ngaytru+" va "+ngaylay +" va "+j);
                            console.log("da vao" +n);
                            x++;
                            tongtien=tongtien+Number(dstt[j])
                        }
                    }else if(dstttt[j]=="HUY"){
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(n==0){
                            sohuy++;
                        }
                    }else{
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(n==0){
                            sodangban++;
                        }
                        
                    }
                }
                $("#tablesoluong").append(`<tr>
                        <th>`+(i+1)+`</th>
                        <th>`+ngaylay.toLocaleDateString()+`</th>
                        <th>`+x+`</th>
                        <th>`+sohuy+`</th>
                        <th>`+sodangban+`</th>
                        <th>`+tongtien+`</th>
                        </tr>`);
            }
        }else if(document.getElementById("btntheothang").disabled==true){
            var el=document.getElementById("chonthang").options[document.getElementById("chonthang").selectedIndex].innerHTML;
            var el1=document.getElementById("chonnam").options[document.getElementById("chonnam").selectedIndex].innerHTML;
            var ngayssnho="";
            if(el1=="năm 2016"){
                ngayssnho="2016";
            }else if(el1=="năm 2017"){
                ngayssnho="2017";
            }else if(el1=="năm 2018"){
                ngayssnho="2018";
            }else if(el1=="năm 2019"){
                ngayssnho="2019";
            }else{
                ngayssnho="2020";
            }
            
            $("#tablesoluong").html(`<tr>
                <th>STT</th>
                <th>Tháng</th>
                <th>Tổng ĐH hoàn thành</th>
                <th>Tổng ĐH bị hủy</th>
                <th>Tổng ĐH đang thực hiện</th>
                <th>Tổng Doanh Thu</th>
            </tr>`);
            for(var i=0;i<12;i++){
                var date= new Date(document.getElementById("chonngay").value);
                var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate());
                var ngayn = new Date(ngayssnho,document.getElementById("chonthang").selectedIndex-i,1);
                var ngayl = new Date(ngayssnho,(document.getElementById("chonthang").selectedIndex+1)-i,1);
                var x=0;
                var sohuy=0;
                var sodangban=0;
                var tongtien=0;
                for(j=0;j<dsma.length;j++){
                    var ngaytru = new Date(dsngayht[j]);
                    var ngaytru1 = new Date(dsngay[j]);
                    
                    if(dstttt[j]=="HOANTHANH"){
                        var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                        if(ngaytru>=ngayn && ngaytru<ngayl){
                            x++;
                            tongtien=tongtien+Number(dstt[j])
                        }
                    }else if(dstttt[j]=="HUY"){
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(ngaytru1>=ngayn && ngaytru1<ngayl){
                            sohuy++;
                        }
                    }else{
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(ngaytru1>=ngayn && ngaytru1<ngayl){
                            sodangban++;
                        }
                        
                    }
                }
                $("#tablesoluong").append(`<tr>
                        <th>`+(i+1)+`</th>
                        <th>`+(ngayn.getMonth()+1)+"/"+ngayn.getFullYear()+`</th>
                        <th>`+x+`</th>
                        <th>`+sohuy+`</th>
                        <th>`+sodangban+`</th>
                        <th>`+tongtien+`</th>
                        </tr>`);
            }
        }else{
            var el2=document.getElementById("chonnam").options[document.getElementById("chonnam").selectedIndex].innerHTML;
            var ngaysosanhnho="";
            var ngaysosanhlon="";
            if(el2=="năm 2016"){
                ngaysosanhnho="2016-01-01";
                ngaysosanhlon="2017-01-01"
            }else if(el2=="năm 2017"){
                ngaysosanhnho="2017-01-01";
                ngaysosanhlon="2018-01-01"
            }else if(el2=="năm 2018"){
                ngaysosanhnho="2018-01-01";
                ngaysosanhlon="2019-01-01"
            }else if(el2=="năm 2019"){
                ngaysosanhnho="2019-01-01";
                ngaysosanhlon="2020-01-01"
            }else{
                ngaysosanhnho="2020-01-01";
                ngaysosanhlon="2021-01-01"
            }            
            $("#tablesoluong").html(`<tr>
                <th>STT</th>
                <th>Năm</th>
                <th>Tổng ĐH hoàn thành</th>
                <th>Tổng ĐH bị hủy</th>
                <th>Tổng ĐH đang thực hiện</th>
                <th>Tổng Doanh Thu</th>
            </tr>`);
            for(var i=0;i<3;i++){
                var date= new Date(document.getElementById("chonngay").value);
                var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate());
                var ngaysosanhnho1=new Date(ngaysosanhnho);
                var ngaysosanhlon1=new Date(ngaysosanhlon);
                var ngaynho=new Date(ngaysosanhnho1.getFullYear()-i,ngaysosanhnho1.getMonth(),ngaysosanhnho1.getDate());
                var ngaylon = new Date(ngaysosanhlon1.getFullYear()-i,ngaysosanhlon1.getMonth(),ngaysosanhlon1.getDate());
                console.log(ngaynho+" va "+ngaylon);
                var x=0;
                var sohuy=0;
                var sodangban=0;
                var tongtien=0;
                for(j=0;j<dsma.length;j++){
                    var ngaytru = new Date(dsngayht[j]);
                    var ngaytru1 = new Date(dsngay[j]);
                    
                    if(dstttt[j]=="HOANTHANH"){
                        var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                        if(ngaytru>ngaynho && ngaytru<ngaylon){
                            x++;
                            tongtien=tongtien+Number(dstt[j])
                        }
                    }else if(dstttt[j]=="HUY"){
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(ngaytru1>ngaynho && ngaytru1<ngaylon){
                            sohuy++;
                        }
                    }else{
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(ngaytru1>ngaynho && ngaytru1<ngaylon){
                            sodangban++;
                        }
                        
                    }
                }
                $("#tablesoluong").append(`<tr>
                        <th>`+(i+1)+`</th>
                        <th>`+ngaynho.getFullYear()+`</th>
                        <th>`+x+`</th>
                        <th>`+sohuy+`</th>
                        <th>`+sodangban+`</th>
                        <th>`+tongtien+`</th>
                        </tr>`);
            }
        }
    ;})
}

function chontheongay(){
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var dsma=[];
        var dsidkh=[];
        var dstt=[];
        var dstttt=[];
        var dsngay=[];
        var dskho=[];
        var dsngayht=[];
        data.hmadh.forEach(function(val){
            dsma.push(val);
        });
        data.hidkh.forEach(function(val){
            dsidkh.push(val);
        });
        data.htongtien.forEach(function(val){
            dstt.push(val);
        });
        data.htrangthai.forEach(function(val){
            dstttt.push(val);
        });
        data.hngaytao.forEach(function(val){
            dsngay.push(val);
        });
        data.hdskv.forEach(function(val){
            dskho.push(val);
        });
        data.hngayht.forEach(function(val){
            dsngayht.push(val);
        });
        $("#tablesoluong").html(`<tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>Tổng ĐH hoàn thành</th>
                <th>Tổng ĐH bị hủy</th>
                <th>Tổng ĐH đang thực hiện</th>
                <th>Tổng Doanh Thu</th>
            </tr>`);
            for(var i=0;i<30;i++){
                var date= new Date(document.getElementById("chonngay").value);
                var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate()-i);
                
                var x=0;
                var sohuy=0;
                var sodangban=0;
                var tongtien=0;
                for(j=0;j<dsma.length;j++){
                    var ngaytru = new Date(dsngayht[j]);
                    var ngaytru1 = new Date(dsngay[j]);
                    
                    if(dstttt[j]=="HOANTHANH"){
                        var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                        if(n==0){
                            console.log(ngaytru+" va "+ngaylay +" va "+j);
                            console.log("da vao" +n);
                            x++;
                            tongtien=tongtien+Number(dstt[j])
                        }
                    }else if(dstttt[j]=="HUY"){
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(n==0){
                            sohuy++;
                        }
                    }else{
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(n==0){
                            sodangban++;
                        }
                        
                    }
                }
                $("#tablesoluong").append(`<tr>
                        <th>`+(i+1)+`</th>
                        <th>`+ngaylay.toLocaleDateString()+`</th>
                        <th>`+x+`</th>
                        <th>`+sohuy+`</th>
                        <th>`+sodangban+`</th>
                        <th>`+tongtien+`</th>
                        </tr>`);
            }
        });
    document.getElementById("btntheongay").disabled=true;
    document.getElementById("btntheothang").disabled=false;
    document.getElementById("btntheonam").disabled=false;
    document.getElementById("chonngay").style.display="block";
    document.getElementById("chonthang").style.display="none";
    document.getElementById("chonnam").style.display="none";
}

function chontheothang(){
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var dsma=[];
        var dsidkh=[];
        var dstt=[];
        var dstttt=[];
        var dsngay=[];
        var dskho=[];
        var dsngayht=[];
        data.hmadh.forEach(function(val){
            dsma.push(val);
        });
        data.hidkh.forEach(function(val){
            dsidkh.push(val);
        });
        data.htongtien.forEach(function(val){
            dstt.push(val);
        });
        data.htrangthai.forEach(function(val){
            dstttt.push(val);
        });
        data.hngaytao.forEach(function(val){
            dsngay.push(val);
        });
        data.hdskv.forEach(function(val){
            dskho.push(val);
        });
        data.hngayht.forEach(function(val){
            dsngayht.push(val);
        });
        var el=document.getElementById("chonthang").options[document.getElementById("chonthang").selectedIndex].innerHTML;
        var el1=document.getElementById("chonnam").options[document.getElementById("chonnam").selectedIndex].innerHTML;
        var ngayssnho="";
        if(el1=="năm 2016"){
            ngayssnho="2016";
        }else if(el1=="năm 2017"){
            ngayssnho="2017";
        }else if(el1=="năm 2018"){
            ngayssnho="2018";
        }else if(el1=="năm 2019"){
            ngayssnho="2019";
        }else{
            ngayssnho="2020";
        }
        
        $("#tablesoluong").html(`<tr>
            <th>STT</th>
            <th>Tháng</th>
            <th>Tổng ĐH hoàn thành</th>
            <th>Tổng ĐH bị hủy</th>
            <th>Tổng ĐH đang thực hiện</th>
            <th>Tổng Doanh Thu</th>
        </tr>`);
        for(var i=0;i<12;i++){
            var date= new Date(document.getElementById("chonngay").value);
            var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate());
            var ngayn = new Date(ngayssnho,document.getElementById("chonthang").selectedIndex-i,1);
            var ngayl = new Date(ngayssnho,(document.getElementById("chonthang").selectedIndex+1)-i,1);
            var x=0;
            var sohuy=0;
            var sodangban=0;
            var tongtien=0;
            for(j=0;j<dsma.length;j++){
                var ngaytru = new Date(dsngayht[j]);
                var ngaytru1 = new Date(dsngay[j]);
                
                if(dstttt[j]=="HOANTHANH"){
                    var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                    if(ngaytru>=ngayn && ngaytru<ngayl){
                        x++;
                        tongtien=tongtien+Number(dstt[j])
                    }
                }else if(dstttt[j]=="HUY"){
                    var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                    if(ngaytru1>=ngayn && ngaytru1<ngayl){
                        sohuy++;
                    }
                }else{
                    var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                    if(ngaytru1>=ngayn && ngaytru1<ngayl){
                        sodangban++;
                    }
                    
                }
            }
            $("#tablesoluong").append(`<tr>
                    <th>`+(i+1)+`</th>
                    <th>`+(ngayn.getMonth()+1)+"/"+ngayn.getFullYear()+`</th>
                    <th>`+x+`</th>
                    <th>`+sohuy+`</th>
                    <th>`+sodangban+`</th>
                    <th>`+tongtien+`</th>
                    </tr>`);
        }
        });
    document.getElementById("btntheongay").disabled=false;
    document.getElementById("btntheothang").disabled=true;
    document.getElementById("btntheonam").disabled=false;
    document.getElementById("chonngay").style.display="none";
    document.getElementById("chonthang").style.display="block";
    document.getElementById("chonnam").style.display="block";
}

function chontheonam(){
    $.get("http://localhost:3000/laythongtindonhang",function(data){
        var dsma=[];
        var dsidkh=[];
        var dstt=[];
        var dstttt=[];
        var dsngay=[];
        var dskho=[];
        var dsngayht=[];
        data.hmadh.forEach(function(val){
            dsma.push(val);
        });
        data.hidkh.forEach(function(val){
            dsidkh.push(val);
        });
        data.htongtien.forEach(function(val){
            dstt.push(val);
        });
        data.htrangthai.forEach(function(val){
            dstttt.push(val);
        });
        data.hngaytao.forEach(function(val){
            dsngay.push(val);
        });
        data.hdskv.forEach(function(val){
            dskho.push(val);
        });
        data.hngayht.forEach(function(val){
            dsngayht.push(val);
        });
    var el2=document.getElementById("chonnam").options[document.getElementById("chonnam").selectedIndex].innerHTML;
            var ngaysosanhnho="";
            var ngaysosanhlon="";
            if(el2=="năm 2016"){
                ngaysosanhnho="2016-01-01";
                ngaysosanhlon="2017-01-01"
            }else if(el2=="năm 2017"){
                ngaysosanhnho="2017-01-01";
                ngaysosanhlon="2018-01-01"
            }else if(el2=="năm 2018"){
                ngaysosanhnho="2018-01-01";
                ngaysosanhlon="2019-01-01"
            }else if(el2=="năm 2019"){
                ngaysosanhnho="2019-01-01";
                ngaysosanhlon="2020-01-01"
            }else{
                ngaysosanhnho="2020-01-01";
                ngaysosanhlon="2021-01-01"
            }            
            $("#tablesoluong").html(`<tr>
                <th>STT</th>
                <th>Năm</th>
                <th>Tổng ĐH hoàn thành</th>
                <th>Tổng ĐH bị hủy</th>
                <th>Tổng ĐH đang thực hiện</th>
                <th>Tổng Doanh Thu</th>
            </tr>`);
            for(var i=0;i<3;i++){
                var date= new Date(document.getElementById("chonngay").value);
                var ngaylay = new Date(date.getFullYear(),date.getMonth(),date.getDate());
                var ngaysosanhnho1=new Date(ngaysosanhnho);
                var ngaysosanhlon1=new Date(ngaysosanhlon);
                var ngaynho=new Date(ngaysosanhnho1.getFullYear()-i,ngaysosanhnho1.getMonth(),ngaysosanhnho1.getDate());
                var ngaylon = new Date(ngaysosanhlon1.getFullYear()-i,ngaysosanhlon1.getMonth(),ngaysosanhlon1.getDate());
                console.log(ngaynho+" va "+ngaylon);
                var x=0;
                var sohuy=0;
                var sodangban=0;
                var tongtien=0;
                for(j=0;j<dsma.length;j++){
                    var ngaytru = new Date(dsngayht[j]);
                    var ngaytru1 = new Date(dsngay[j]);
                    
                    if(dstttt[j]=="HOANTHANH"){
                        var n = Math.floor((ngaytru - ngaylay)/(24*60*60*1000));
                        if(ngaytru>ngaynho && ngaytru<ngaylon){
                            x++;
                            tongtien=tongtien+Number(dstt[j])
                        }
                    }else if(dstttt[j]=="HUY"){
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(ngaytru1>ngaynho && ngaytru1<ngaylon){
                            sohuy++;
                        }
                    }else{
                        var n = Math.floor((ngaytru1 - ngaylay)/(24*60*60*1000));
                        if(ngaytru1>ngaynho && ngaytru1<ngaylon){
                            sodangban++;
                        }
                        
                    }
                }
                $("#tablesoluong").append(`<tr>
                        <th>`+(i+1)+`</th>
                        <th>`+ngaynho.getFullYear()+`</th>
                        <th>`+x+`</th>
                        <th>`+sohuy+`</th>
                        <th>`+sodangban+`</th>
                        <th>`+tongtien+`</th>
                        </tr>`);
            }
        });
    document.getElementById("btntheongay").disabled=false;
    document.getElementById("btntheothang").disabled=false;
    document.getElementById("btntheonam").disabled=true;
    document.getElementById("chonngay").style.display="none";
    document.getElementById("chonthang").style.display="none";
    document.getElementById("chonnam").style.display="block";
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

function guithongbao(){
    if(document.getElementById("txtThongbao").value.length<20){
        alert("nội dung quá ngắn");
    }else{
        var somanv=0;
        var el2=document.getElementById("chonnv").options[document.getElementById("chonnv").selectedIndex].innerHTML;
        if(el2=="Nhân Viên Bán Hàng"){
            somanv=0;
        }else{
            somanv=1;
        }
        $.post("http://localhost:3000/guithongbaonv",{xsomanv:somanv,xnoidung:document.getElementById("txtThongbao").value},function(data){
            console.log("da gui du lieu",data);
        });
        alert("Gửi Thành Công");
        window.location="../kinhdoanh/tkdonhang.html";
    }
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
    document.getElementById("bieudongay").style.display="block";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="none";
    document.getElementById("ngayloc").style.display="none";
    document.getElementById("btnloc").style.display="none";
}
function miennam(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=true;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("bieudongay").style.display="none";
    document.getElementById("dsmiennam").style.display="block";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="none";
    document.getElementById("ngayloc").style.display="none";
    document.getElementById("btnloc").style.display="none";
}

function mientrung(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=true;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("bieudongay").style.display="none";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="block";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="none";
    document.getElementById("ngayloc").style.display="none";
    document.getElementById("btnloc").style.display="none";
}

function mienbac(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=true;
    document.getElementById("xemchitiet1").disabled=false;
    document.getElementById("bieudongay").style.display="none";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="block";
    document.getElementById("dschitiet").style.display="none";
    document.getElementById("ngayloc").style.display="none";
    document.getElementById("btnloc").style.display="none";
}

function xemchitiet1(){
    document.getElementById("tongkho").disabled=false;
    document.getElementById("miennam").disabled=false;
    document.getElementById("mientrung").disabled=false;
    document.getElementById("mienbac").disabled=false;
    document.getElementById("xemchitiet1").disabled=true;
    document.getElementById("bieudongay").style.display="none";
    document.getElementById("dsmiennam").style.display="none";
    document.getElementById("dsmientrung").style.display="none";
    document.getElementById("dsmienbac").style.display="none";
    document.getElementById("dschitiet").style.display="block";
    document.getElementById("ngayloc").style.display="block";
    document.getElementById("btnloc").style.display="block";
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
        
    
}
