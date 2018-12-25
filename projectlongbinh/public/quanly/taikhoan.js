function loadquyen(){
    $.get("http://localhost:3000/test3",function(data){
        if(data.giatrilg!="AD"){

        }else{
            document.getElementById("thongtinmacdinh").style.display="none";
            $.get("http://localhost:3000/danhsachtaikhoan",function(data1){
                var listid=[];
                var listma=[];
                var listten=[];
                var listemail=[];
                var listsdt=[];
                var listtknh=[];
                var listfax=[];
                var listpass=[];
                var listdc=[];
                data1.idu.forEach(function(val){
                    listid.push(val);
                });
                data1.mau.forEach(function(val){
                    listma.push(val);
                });
                data1.hotenu.forEach(function(val){
                    listten.push(val);
                });
                data1.emailu.forEach(function(val){
                    listemail.push(val);
                });
                data1.sdtu.forEach(function(val){
                    listsdt.push(val);
                });
                data1.tknhu.forEach(function(val){
                    listtknh.push(val);
                });
                data1.faxu.forEach(function(val){
                    listfax.push(val);
                });
                data1.passu.forEach(function(val){
                    listpass.push(val);
                });
                data1.dcu.forEach(function(val){
                    listdc.push(val);
                });
                var n=0;
                for(var i=0;i<listdc.length;i++){
                    if(listma[i]=="AD"){
                        $("#tableuser").append(`<tr>
                        <td>`+listid[i]+`</td>
                        <td>`+listma[i]+`</td>
                        <td>`+listten[i]+`</td>
                        <td>`+listemail[i]+`</td>
                        <td>`+listsdt[i]+`</td>
                        <td>`+listdc[i]+`</td>
                        <td><img src="http://localhost:3000/images/view.png" onclick="xem(`+n+`)" style="margin-left: 15%" width="30px" height="30px"><img src="http://localhost:3000/images/edit.png" onclick="edit(`+n+`)" style="margin-left: 15px" width="30px" height="30px"><img src="http://localhost:3000/images/delete.png" onclick="delete1(`+n+`)" style="margin-left: 15px" width="30px" height="30px"></td>
                    </tr>`);
                        n++;
                    }
                }
                for(var j=0;j<listdc.length;j++){
                    if(listma[j]!="AD" && listma[j]!="KH" && listma[j]!="CKH"){
                        $("#tableuser").append(`<tr>
                        <td>`+listid[j]+`</td>
                        <td>`+listma[j]+`</td>
                        <td>`+listten[j]+`</td>
                        <td>`+listemail[j]+`</td>
                        <td>`+listsdt[j]+`</td>
                        <td>`+listdc[j]+`</td>
                        <td><img src="http://localhost:3000/images/view.png" onclick="xem(`+n+`)" style="margin-left: 15%" width="30px" height="30px"><img src="http://localhost:3000/images/edit.png" onclick="edit(`+n+`)" style="margin-left: 15px" width="30px" height="30px"><img src="http://localhost:3000/images/delete.png" onclick="delete1(`+n+`)" style="margin-left: 15px" width="30px" height="30px"></td>
                    </tr>`)
                        n++;
                    }
                }
                for(var i=0;i<listdc.length;i++){
                    if(listma[i]=="KH" || listma[i]=="CKH"){
                        $("#tableuser").append(`<tr>
                        <td>`+listid[i]+`</td>
                        <td>`+listma[i]+`</td>
                        <td>`+listten[i]+`</td>
                        <td>`+listemail[i]+`</td>
                        <td>`+listsdt[i]+`</td>
                        <td>`+listdc[i]+`</td>
                        <td><img src="http://localhost:3000/images/view.png" onclick="xem(`+n+`)" style="margin-left: 15%" width="30px" height="30px"><img src="http://localhost:3000/images/edit.png" onclick="edit(`+n+`)" style="margin-left: 15px" width="30px" height="30px"><img src="http://localhost:3000/images/delete.png" onclick="delete1(`+n+`)" style="margin-left: 15px" width="30px" height="30px"></td>
                    </tr>`)
                        n++;
                    }
                }
            });


            document.getElementById("thongtintaikhoan").style.display="block";
        }
    })
}

function xem(num){
    var rows = document.getElementsByTagName("table")[0].rows;
    var last = rows[num+1];
    var cell = last.cells[0];
    var value1 = cell.innerHTML;
    $.get("http://localhost:3000/danhsachtaikhoan",function(data1){
                var listid=[];
                var listma=[];
                var listten=[];
                var listemail=[];
                var listsdt=[];
                var listtknh=[];
                var listfax=[];
                var listpass=[];
                var listdc=[];
                data1.idu.forEach(function(val){
                    listid.push(val);
                });
                data1.mau.forEach(function(val){
                    listma.push(val);
                });
                data1.hotenu.forEach(function(val){
                    listten.push(val);
                });
                data1.emailu.forEach(function(val){
                    listemail.push(val);
                });
                data1.sdtu.forEach(function(val){
                    listsdt.push(val);
                });
                data1.tknhu.forEach(function(val){
                    listtknh.push(val);
                });
                data1.faxu.forEach(function(val){
                    listfax.push(val);
                });
                data1.passu.forEach(function(val){
                    listpass.push(val);
                });
                data1.dcu.forEach(function(val){
                    listdc.push(val);
                });
                document.getElementById("md1").style.display="block";
                for(var i=0;i<listdc.length;i++){
                    if(listid[i]==value1){
                        document.getElementsByClassName("lid")[0].textContent=listid[i];
                        document.getElementsByClassName("lten")[0].textContent=listten[i];
                        document.getElementsByClassName("lma")[0].textContent=listma[i];
                        document.getElementsByClassName("lemail")[0].textContent=listemail[i];
                        document.getElementsByClassName("lsdt")[0].textContent=listsdt[i];
                        document.getElementsByClassName("ldc")[0].textContent=listdc[i];
                        document.getElementsByClassName("ltknh")[0].textContent=listtknh[i];
                        document.getElementsByClassName("lfax")[0].textContent=listfax[i];
                    };
                }
                
        });
        
    // if(num==1){
    //     
    // }
}

function delete1(num){
    var rows = document.getElementsByTagName("table")[0].rows;
    var last = rows[num+1];
    var cell = last.cells[1];
    var cell2 = last.cells[0];
    var value1 = cell.innerHTML;
    var value2 = cell2.innerHTML;
    if(value1=="AD"){
        alert("Không thể xóa Admin");
    }else{
        document.getElementsByClassName("iduser")[0].textContent=value2;
        document.getElementById("xacnhanxoa").style.display="block";
    }
}

function xoa(value){
    $.post("http://localhost:3000/posttkxoa",{tkcanxoa:value},function(data){
           console.log("da gui du lieu len server", data); 
        });
        alert("Xóa thành công");
        window.location="../quanly/taikhoan.html"
}
function sua(value){
    var quyen="";
    var el1=document.getElementById("menuquyen").selectedIndex;
    if(el1=="0"){
        quyen="CKH"
    }else if(el1=="1"){
        quyen="KH"
    }else if(el1=="2"){
        quyen="NVBH"
    }else if(el1=="3"){
        quyen="NVGH"
    }else if(el1=="4"){
        quyen="NVKD"
    }
    var matkhau=document.getElementById("txtpass").value;
    if(matkhau.length==0){
        $.post("http://localhost:3000/posttksua",{tkcansua:value,xquyen:quyen,xmatkhau:matkhau},function(data){
           console.log("da gui du lieu len server", data); 
        });
        alert("Sửa thành công");
        window.location="../quanly/taikhoan.html"
    }else if(matkhau.length<6){
        alert("Mật khẩu quá ngắn");
    }else{
        $.post("http://localhost:3000/posttksua",{tkcansua:value,xquyen:quyen,xmatkhau:matkhau},function(data){
           console.log("da gui du lieu len server", data); 
        });
        alert("sửa thành công");
        window.location="../quanly/taikhoan.html"
    }
    
        
}

var el1=document.getElementById("mySelect3").options[document.getElementById("mySelect3").selectedIndex].innerHTML;

function edit(num){
    var rows = document.getElementsByTagName("table")[0].rows;
    var last = rows[num+1];
    var cell = last.cells[1];
    var cell2 = last.cells[0];
    var value1 = cell.innerHTML;
    var value2 = cell2.innerHTML;
    if(value1=="AD"){
        document.getElementsByClassName("iduser2")[0].textContent=value2;
        document.getElementById("quyentruycap").style.display="none";
        document.getElementById("formsua").style.display="block";
    }else{
        if(value1=="CKH"){
            document.getElementById("menuquyen").selectedIndex="0";
        }else if(value1=="KH"){
            document.getElementById("menuquyen").selectedIndex="1";
        }
        else if(value1=="NVBH"){
            document.getElementById("menuquyen").selectedIndex="2";
        }else if(value1=="NVGH"){
            document.getElementById("menuquyen").selectedIndex="3";
        }else if(value1=="NVKD"){
            document.getElementById("menuquyen").selectedIndex="4";
        }
        document.getElementsByClassName("iduser2")[0].textContent=value2;
        document.getElementById("quyentruycap").style.display="block";
        document.getElementById("formsua").style.display="block";
    }
    // var rows = document.getElementsByTagName("table")[0].rows;
    // var last = rows[num+1];
    // var cell = last.cells[0];
    // var value1 = cell.innerHTML;
    // $.get("http://localhost:3000/danhsachtaikhoan",function(data1){
    //             var listid=[];
    //             var listma=[];
    //             var listten=[];
    //             var listemail=[];
    //             var listsdt=[];
    //             var listtknh=[];
    //             var listfax=[];
    //             var listpass=[];
    //             var listdc=[];
    //             data1.idu.forEach(function(val){
    //                 listid.push(val);
    //             });
    //             data1.mau.forEach(function(val){
    //                 listma.push(val);
    //             });
    //             data1.hotenu.forEach(function(val){
    //                 listten.push(val);
    //             });
    //             data1.emailu.forEach(function(val){
    //                 listemail.push(val);
    //             });
    //             data1.sdtu.forEach(function(val){
    //                 listsdt.push(val);
    //             });
    //             data1.tknhu.forEach(function(val){
    //                 listtknh.push(val);
    //             });
    //             data1.faxu.forEach(function(val){
    //                 listfax.push(val);
    //             });
    //             data1.passu.forEach(function(val){
    //                 listpass.push(val);
    //             });
    //             data1.dcu.forEach(function(val){
    //                 listdc.push(val);
    //             });
    //             document.getElementById("md1").style.display="block";
    //             for(var i=0;i<listdc.length;i++){
    //                 if(listid[i]==value1){
    //                     document.getElementsByClassName("lid")[0].textContent=listid[i];
    //                     document.getElementsByClassName("lten")[0].textContent=listten[i];
    //                     document.getElementsByClassName("lma")[0].textContent=listma[i];
    //                     document.getElementsByClassName("lemail")[0].textContent=listemail[i];
    //                     document.getElementsByClassName("lsdt")[0].textContent=listsdt[i];
    //                     document.getElementsByClassName("ldc")[0].textContent=listdc[i];
    //                     document.getElementsByClassName("ltknh")[0].textContent=listtknh[i];
    //                     document.getElementsByClassName("lfax")[0].textContent=listfax[i];
    //                 };
    //             }
                
    //     });
        
    // if(num==1){
    //     
    // }
}

function hideDetail1() {
    document.getElementById('md1').style.display = "none";
    document.getElementById('xacnhanxoa').style.display = "none";
    document.getElementById('formsua').style.display = "none";
}

function testthu(){
    

}