var socket = io("http://localhost:3000");

$(document).ready(function(){
    $("#btnPress").click(function(){
        var el1=document.getElementById("dsnd").options[document.getElementById("dsnd").selectedIndex].innerHTML;
        if(el1==""){
            alert("Hiện không có ai online");
        }else{
            $.get("http://localhost:3000/Login2",function(data){
                console.log(data);
                $("#hienthinoidung").append(`<p><b>`+data.gtlogin+`[`+el1+`]:</b> <span>`+$("#txtnoidung").val()+`</span></p>`);
                socket.emit("client-send-chat", [el1,data.gtlogin,$("#txtnoidung").val()]);
                document.getElementById("txtnoidung").value="";
            })
        }
    });
});

socket.on("private-send",function(data){
    $("#hienthinoidung").append(`<p><b>`+data[1]+`:</b> <span>`+data[2]+`</span></p>`);
});
var dsidon=[];
var dsidsk=[];
socket.on("server-send-ds",function(data2){
    $.get("http://localhost:3000/test10",function(data){
        $.get("http://localhost:3000/danhsachtaikhoan",function(data1){
                var listid=[];
                var listma=[];
                data1.idu.forEach(function(val){
                    listid.push(val);
                });
                data1.mau.forEach(function(val){
                    listma.push(val);
                });
                if(data.giatrilg=="KH"){
                   for(var i=0;i<listid.length;i++){
                       for(var j=0;j<data2.length;j++){
                           if(listid[i]==data2[j][0] && listma[i]=="NVBH"){
                                $("#danhsachnv").append(`<center><p><b style="background-color: red;">`+listid[i]+`</b></p></center>`);
                                $("#dsnd").append(`<option>`+listid[i]+`</option>`);
                           }
                       }
                   } 
                }else if(data.giatrilg=="NVBH"){
                    for(var i=0;i<listid.length;i++){
                        for(var j=0;j<data2.length;j++){
                            if(listid[i]==data2[j][0] && listma[i]=="KH"){
                                 $("#danhsachnv").append(`<center><p><b style="background-color: blue;">`+listid[i]+`</b></p></center>`);
                                 $("#dsnd").append(`<option>`+listid[i]+`</option>`);
                            }
                        }
                    } 
                }
        });
    });
});

function loadchung(){
    $.get("http://localhost:3000/test10",function(data){
        if(data.giatrilg=="KH" || data.giatrilg=="NVBH"){
            socket.emit("client-vao-chat");
            document.getElementById("khungmacdinh").style.display="none";
            document.getElementById("khungnhantin").style.display="block";
            if(data.giatrilg=="KH"){
                document.getElementById("chonnvkh").textContent="Chọn Nhân Viên: "
                document.getElementById("tenonline").textContent="Nhân Viên Online"
            }else{
                document.getElementById("chonnvkh").textContent="Chọn Khách Hàng: "
                document.getElementById("tenonline").textContent="Khách Hàng Online"
            }
        }else{
            document.getElementById("khungmacdinh").style.display="block";
            document.getElementById("khungnhantin").style.display="none";
        }
    });
}
 