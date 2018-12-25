module.exports = {

    checkLogin : function(id,pass){
        var tableuser = [['admin','admin','AD'],['khachhang','khachhang','KH'],['nhanvienbh','nhanvienbh','NVBH'],['nhanviengh','nhanviengh','NVGH'],['nhanvienkd','nhanvienkd','NVKD']];
        // 
        if(id==tableuser[0][0] && pass==tableuser[0][1]){
            return tableuser[0][2]
        }else if(id==tableuser[1][0] && pass==tableuser[1][1]){
            return tableuser[1][2]
        }else if(id==tableuser[2][0] && pass==tableuser[2][1]){
            return tableuser[2][2]
        }else if(id==tableuser[3][0] && pass==tableuser[3][1]){
            return tableuser[3][2]
        }else if(id==tableuser[4][0] && pass==tableuser[4][1]){
            return tableuser[4][2]
        }
        for(var i=0;i<tableuser.length;i++){
                if(id=="" || pass==""){
                    return 'user or pass null'
                }else if(id!=tableuser[i][0] || pass!=tableuser[i][1]){
                    return 'user or pass wrong'
                }
            }
    },
    checkRegister : function(id,hoten,email,sdt,dc,sotknh, sofax, pass, repass){
        var usermau=[["duongvanly","Dương Văn Lý", "duongvanly@gmail.com", "0974898072", "duong 3/2, can tho", "", "","abc123" ],["khachhang","Khách Hàng", "khachhang@gmail.com", "0974898073", "duong 3/2, can tho", "", "","abcxyz" ]]
        var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        
            if(id=="" || hoten=="" || email=="" || sdt=="" || dc=="" || pass=="" ||repass==""){
                return 'thong tin ban nhap con thieu'
            }else if(repass!=pass){
                return '2 mat khau khong khop'
            }else if(!filter1.test(email)){
                return 'email sai dinh dang'
            }else{
                var a=0;
                for(var i=0;i<usermau.length;i++){
                    if(id==usermau[i][0]){
                        a++
                    }
                }
                if(a!=0){
                    return 'ten tai khoan da ton tai'
                }else{
                    var b=0;
                    for(var i=0;i<usermau.length;i++){
                        if(email==usermau[i][2]){
                            b++;
                        }
                    }
                    if(b!=0){
                        return 'email da ton tai'
                    }else{
                        return 'dang ky thanh cong'
                    }
                }
            }
        
    },
    forgetPassword : function(id, email){
        var usermau=[["duongvanly","Dương Văn Lý", "duongvanly@gmail.com", "0974898072", "duong 3/2, can tho", "", "","abc123" ],["khachhang","Khách Hàng", "khachhang@gmail.com", "0974898073", "duong 3/2, can tho", "", "","abcxyz" ]]
        for(var i=0;i<usermau.length;i++){
            if(id==usermau[i][0] && email==""){
                return 'email khong duoc trong'
            }else if(id==usermau[i][0] && email==usermau[i][2]){
                return 'mat khau da duoc gui ve mail'
            }else if(id==usermau[i][0] && email!=usermau[i][2]){
                return 'email khong dung hoac khong ton tai'
            }
        }
        
    },
    changeInfoUser : function(id,hoten,email,sdt,dc,sotknh, sofax, oldpass, pass, repass){
        var usermau=[["duongvanly","Dương Văn Lý", "duongvanly@gmail.com", "0974898072", "duong 3/2, can tho", "", "","abc123" ],["khachhang","Khách Hàng", "khachhang@gmail.com", "0974898073", "duong 3/2, can tho", "", "","abcxyz" ]]
        for(var i=0;i<usermau.length;i++){
            if(hoten=="" || email=="" || sdt=="" || dc==""){
                return 'thong tin ban nhap con thieu'
            }else if(email==usermau[i][2]){
                return 'email da ton tai'
            }else if(oldpass==""){
                return 'doi thong tin thanh cong khong doi pass'
            }else if(id==usermau[i][0] && oldpass != usermau[i][7]){
                return 'mat khau cu sai'
            }else if(id==usermau[i][0] && oldpass == usermau[i][7] && pass != repass){
                return 'mat khau moi khong khop'
            }else if(id==usermau[i][0] && oldpass == usermau[i][7] && pass == repass){
                return 'doi thong tin thanh cong co doi pass'
            }
        }
        
    },
    inputItem : function(masp,tensp,giasp,quycachsp){
        var dssanpham=[["a1","Gà góc tư", 50000, "Góc Tư"],["a2", "Đùi tỏi", 35000, "Đùi"]]
        if(masp=="" || tensp =="" || quycachsp==""){
            return 'thong tin khong duoc de trong'
        }else if(giasp<=0){
            return 'gia san pham khong hop le'
        }else{
            var a=0;
            for (var i=0;i<dssanpham.length;i++){
                if(masp==dssanpham[i][0]){
                    a++
                }
            }
            if(a!=0){
                return 'ma san pham da ton tai'
            }else{
                return 'them san pham thanh cong'
            }
        }
        
    },
    editItem : function(tensp,giasp,quycachsp){
        var dssanpham=[["a1","Gà góc tư", 50000, "Góc Tư"],["a2", "Đùi tỏi", 35000, "Đùi"]]
        if( tensp =="" || quycachsp==""){
            return 'thong tin khong duoc de trong'
        }else if(giasp<=0){
            return 'gia san pham khong hop le'
        }else{
            return 'them san pham thanh cong'
        }
        
    },
    insertItem : function(masp,soluong,mand){
        var dskho=[["K1","Miền Nam", 200, "a1"],["K2", "Miền Trung", 150, "a1"],["K2", "Miền Trung", 150, "a2"]]
        var so=0;
            for(var i=0;i<dskho.length;i++){
                if(dskho[i][3]==masp){
                    so=so+Number(dskho[i][2]);
                }
        }
        if(mand!="KH"){
            return 'ban khong thuc hien duoc chuc nang nay'
        }else{
            if(soluong<1){
                return 'so luong khong duoc nho hon 1'
            }else if(soluong>so){
                return 'so luong trong kho khong du'
            }else{
                return 'them vao gio hang thanh cong'
            }
        }
        
    }
}