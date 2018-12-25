function themsoluong1(){
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
                if(document.getElementById('masp123').textContent==dsmasp[j]){
                    sl=sl+Number(dssl[j]);
                }
            }
            document.getElementById("slSp").textContent=sl;
        }
    });
}
function chucnangthem1(gtvt){
    $.get("http://localhost:3000/test2",function(data){
            if(data.giatrilg=="NULL"){
                alert("Bạn cần đăng nhập để thực hiện chức năng này");
            }else if(data.giatrilg=="KH"){
                if(Number(document.getElementsByClassName("soluongmua")[gtvt].value)>999){
                    alert("Số lượng không hợp lệ");
                    document.getElementsByClassName("soluongmua")[gtvt].value=1;
                }else if(Number(document.getElementsByClassName("soluongmua")[gtvt].value)>Number(document.getElementById("slSp").textContent)){
                    alert("Số lượng trong kho không đủ");
                    document.getElementsByClassName("soluongmua")[gtvt].value=1;
                }else{
                    var giatri=document.getElementById("masp123").textContent;
                    var soluong = document.getElementsByClassName("soluongmua")[gtvt].value;
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
                            data.spgh.forEach(function(gt){
                                if(gt==giatri){
                                    bienxet=true;
                                }
                            });
                            if(bienxet==true){
                                alert("Giỏ hàng đã có sản phẩm này!");
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