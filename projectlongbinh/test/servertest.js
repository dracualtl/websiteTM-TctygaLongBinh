const assert = require('chai').assert;
//const sayHello1 = require('../public/test_test').sayHello1;
const checkLogin = require('../public/test_test').checkLogin;
const checkRegister = require('../public/test_test').checkRegister;
const forgetPassword = require('../public/test_test').forgetPassword;
const changeInfoUser = require('../public/test_test').changeInfoUser;
const inputItem = require('../public/test_test').inputItem;
const editItem = require('../public/test_test').editItem;
const insertItem = require('../public/test_test').insertItem;
// const fs = require('fs');



        describe('CheckLogin', function (){
            it('check login admin',function(){
                let result=checkLogin("admin","admin");
                assert.equal(result, "AD" );
            });
            it('check login khachhang',function(){
                let result=checkLogin("khachhang","khachhang");
                assert.equal(result, "KH" );
            });
            it('check login nhan vien ban hang',function(){
                let result=checkLogin("nhanvienbh","nhanvienbh");
                assert.equal(result, "NVBH" );
            });
            it('check login nhan vien giao hang',function(){
                let result=checkLogin("nhanviengh","nhanviengh");
                assert.equal(result, "NVGH" );
            });
            it('check login nhan vien kinh doanh',function(){
                let result=checkLogin("nhanvienkd","nhanvienkd");
                assert.equal(result, "NVKD" );
            });
            it('check login user pass null',function(){
                let result=checkLogin('','');
                assert.equal(result, 'user or pass null' );
            });
            it('check login user or pass wrong',function(){
                let result=checkLogin('khachhang','jhdshfsm');
                assert.equal(result, 'user or pass wrong' );
            });
        });
        describe('CheckRegister', function (){
            it('check email rong',function(){
                let result=checkRegister("abc","nguyen van a","","0974898072","dsfdsdf","82348283828","8348283842984","abc123","abc123");
                assert.equal(result, 'thong tin ban nhap con thieu');
            });
            it('check dia chi rong',function(){
                let result=checkRegister("abc","nguyen van a","abc@gmail.com","0974898072","","82348283828","8348283842984","abc123","abc123");
                assert.equal(result, 'thong tin ban nhap con thieu');
            });
            it('check ten tai khoan ton tai',function(){
                let result=checkRegister("duongvanly","nguyen van a","dvl@gmail.com","0974898071","3/2 ninh kieu","82348283828","8348283842984","abc123","abc123");
                assert.equal(result, 'ten tai khoan da ton tai');
            });
            it('check email sai dinh dang',function(){
                let result=checkRegister("duongvanly","nguyen van a","dshfhshfdhs","0974898071","3/2 ninh kieu","82348283828","8348283842984","abc123","abc123");
                assert.equal(result, 'email sai dinh dang');
            });
            it('check email khoan ton tai',function(){
                let result=checkRegister("duongvanly123","nguyen van a","khachhang@gmail.com","0974898072","3/2 ninh kieu","82348283828","8348283842984","abc123","abc123");
                assert.equal(result, 'email da ton tai');
            });
            it('check pass va repass',function(){
                let result=checkRegister("duongvanly123","nguyen van a","duongvanly123@gmail.com","0974898072","3/2 ninh kieu","82348283828","8348283842984","abc1234","abc123");
                assert.equal(result, '2 mat khau khong khop');
            });
            it('check dang ky thanh cong',function(){
                let result=checkRegister("duongvanly123","nguyen van a","duongvanly123@gmail.com","0974898072","3/2 ninh kieu","","","abc123","abc123");
                assert.equal(result, 'dang ky thanh cong');
            });
        });
        describe('lay lai mat khau', function (){
            it('check email',function(){
                let result=forgetPassword("duongvanly","");
                assert.equal(result, 'email khong duoc trong');
            });
            it('check dung thong tin tai khoan 1',function(){
                let result=forgetPassword("duongvanly","duongvanly@gmail.com");
                assert.equal(result, 'mat khau da duoc gui ve mail');
            });
            it('check dung thong tin tai khoan 2',function(){
                let result=forgetPassword("khachhang","khachhang@gmail.com");
                assert.equal(result, 'mat khau da duoc gui ve mail');
            });
            it('check sai email',function(){
                let result=forgetPassword("duongvanly","abcxyz@gmail.com");
                assert.equal(result, 'email khong dung hoac khong ton tai');
            });
        });
        describe('cap nhat thong tin tai khoan', function (){
            it('check sdt trong',function(){
                let result=changeInfoUser("duongvanly","nguyen van a","duongvanly123@gmail.com","","3/2 ninh kieu","","","","abc123","abc123");
                assert.equal(result, 'thong tin ban nhap con thieu');
            });
            it('check email ton tai',function(){
                let result=changeInfoUser("duongvanly","nguyen van a","duongvanly@gmail.com","0974898072","3/2 ninh kieu","","","","abc123","abc123");
                assert.equal(result, 'email da ton tai');
            });
            it('doi thanh cong khong doi pass',function(){
                let result=changeInfoUser("duongvanly","nguyen van a","duongvanly123@gmail.com","0974898072","3/2 ninh kieu","","","","abc123","abc123");
                assert.equal(result, 'doi thong tin thanh cong khong doi pass');
            });
            it('check mat khau cu sai',function(){
                let result=changeInfoUser("duongvanly","nguyen van a","duongvanly123@gmail.com","0974898072","3/2 ninh kieu","","","abcxyz","abc123","abc123");
                assert.equal(result, 'mat khau cu sai');
            });
            it('check mat khau moi khong khop',function(){
                let result=changeInfoUser("duongvanly","nguyen van a","duongvanly123@gmail.com","0974898072","3/2 ninh kieu","","","abc123","abc1234","abc123");
                assert.equal(result, 'mat khau moi khong khop');
            });
            it('check doi thanh cong luon pass',function(){
                let result=changeInfoUser("duongvanly","nguyen van a","duongvanly123@gmail.com","0974898072","3/2 ninh kieu","","","abc123","abc123","abc123");
                assert.equal(result, 'doi thong tin thanh cong co doi pass');
            });
        });
        describe('check nhap san pham', function (){
            it('check ten san pham rong',function(){
                let result=inputItem("a3","", 10000, "Cánh");
                assert.equal(result, 'thong tin khong duoc de trong');
            });
            it('check gia khong hop le',function(){
                let result=inputItem("a3","Cánh gà", 0, "Cánh");
                assert.equal(result, 'gia san pham khong hop le');
            });
            it('check ma san pham da ton tai',function(){
                let result=inputItem("a2","Cánh gà", 10000, "Cánh");
                assert.equal(result, 'ma san pham da ton tai');
            });
            it('check them thanh cong',function(){
                let result=inputItem("a3","Cánh gà", 10000, "Cánh");
                assert.equal(result, 'them san pham thanh cong');
            });
        });
        describe('check sua thong tin san pham', function (){
            it('check ten san pham rong',function(){
                let result=editItem("", 10000, "Cánh");
                assert.equal(result, 'thong tin khong duoc de trong');
            });
            it('check gia khong hop le',function(){
                let result=editItem("Cánh gà", 0, "Cánh");
                assert.equal(result, 'gia san pham khong hop le');
            });
            it('check sua thanh cong',function(){
                let result=inputItem("Cánh gà1", 12000, "Cánh");
                assert.equal(result, 'them san pham thanh cong');
            });
        });
        describe('check them san pham vao gio hang', function (){
            it('check tai khoan cho kich hoat',function(){
                let result=insertItem("a1", 200, "CKH");
                assert.equal(result, 'ban khong thuc hien duoc chuc nang nay');
            });
            it('check tai khoan nhan vien giao hang',function(){
                let result=insertItem("a1", 200, "NVGH");
                assert.equal(result, 'ban khong thuc hien duoc chuc nang nay');
            });
            it('check tai khoan nhan vien kinh doanh',function(){
                let result=insertItem("a1", 200, "NVKD");
                assert.equal(result, 'ban khong thuc hien duoc chuc nang nay');
            });
            it('check so luong nho hon 1',function(){
                let result=insertItem("a1", 0 , "KH");
                assert.equal(result, 'so luong khong duoc nho hon 1');
            });
            it('check so luong lon hon tong hang trong kho',function(){
                let result=insertItem("a1", 500, "KH");
                assert.equal(result, 'so luong trong kho khong du');
            });
            it('check them vao gio hang thanh cong',function(){
                let result=insertItem("a1", 200, "KH");
                assert.equal(result, 'them vao gio hang thanh cong');
            });
        });