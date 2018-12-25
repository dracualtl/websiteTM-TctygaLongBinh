//khai bao express
var express = require("express");
var app = express();
// app.listen(3000);
app.use(express.static("public"));
var bodyParser = require('body-parser');
const session = require("express-session");
const Passport = require("passport");
var multer = require('multer');
const LocalStrategy = require("passport-local").Strategy;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const fs = require('fs');
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);


var tdc="";
var tsdt=0;
var taikhoan=[];
var dsemail=[];
var dssdt=[];
var passw=[];
var vaitro=[];
var spgiohang = [];
var slgiohang=[];
var anhsp=[];
var madonhang=[];
var anhtt=[];
var tonggia= [];
var idkh = [];
var ngaytaodh=[];
var dsdh=[];
var ghichukh=[];
var ghichunv=[];
var dcdh=[];
var sdtdh=[];
var ttdh=[];
var dsten=[];
var dsqcsp=[];
var trangthaidh=[];
var madhct=[];
var tendhct=[];
var giact=[];
var slct=[];
var maxem="a1";
var dsdcuser=[];
var dstknh=[];
var dsfax=[];
var maspcanluu="";
var madhcanluu="";
var gtkm=[];
var tgkm=[];
var dskv=[];
var dsngayht=[];
var dsnktkm=[]
var idnd="";
var sttcanluu=0;
//kho
var dsmakho=[];
var dsmasp=[];
var dssl=[];
var dsnsx=[];
var dshsd=[];

//mang chua du lieu sp
var bienreg=0;
var giasp=[];
var dsstt=[];
var tensp=[];

var masp=[];
var bienlogout=false;
//cau hinh ejs

var nodemailer = require('nodemailer');

const option = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'duongvanlypro@gmail.com', // email hoặc username
        pass: '01678901263' // password
    }
};
var transporter = nodemailer.createTransport(option);

var sokm=-1;
var sosk=-1;
var sobep=-1;



app.set("view engine", "ejs");
app.set("views","./views");
var bienlogin = 0;

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "mysecret"}));
app.use(Passport.initialize());
app.use(Passport.session());

app.get("/",function(req,res){
    res.render("index",{value2:"0"});
});

var storage = multer.diskStorage({
    
    destination: function(req,file,cb){
        cb(null,"./public/uploads");
    },
    filename: function(req,file,cb){
        var n=file.originalname.length;
        if(file.originalname.slice(n-4,n).toLowerCase()==".png" || file.originalname.slice(n-4,n).toLowerCase()==".jpg"){
            cb(null,file.originalname);
        }else{
            console.log("sai file");
        }
    }
})

var upload = multer({storage:storage});

app.post("/San%20pham/tatcasp.html/guisanpham",upload.single("file"),function(req,res){
    console.log(req.file.filename);
    res.send("up load thành công");
})



// app.post("/guianh",urlencodedParser,function(req,res){
//     console.log(req.body.anhthu);
// })


var mysql = require('mysql','uft8');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "longbinh"
  });
  con.connect(function(err){
    if (err) throw err;
    var sql = "SELECT * FROM tuser";
        con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var n = result.length;
        for(var i = 0; i<n; i++){
            taikhoan.push(result[i].ID);
            passw.push(result[i].PASS);
            vaitro.push(result[i].MAND);
            dsemail.push(result[i].EMAIL);
            dssdt.push(result[i].SODT);
            dsten.push(result[i].HOTEN);
            dsdcuser.push(result[i].DIACHI);
            dstknh.push(result[i].TKNH);
            dsfax.push(result[i].SOFAX);
        }
        });

        if (err) throw err;
        var sql = "SELECT * FROM tsanpham";
        con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var cc = result.length;
        for(var i = 0; i<cc; i++){
            giasp.push(result[i].GIAHT);
            masp.push(result[i].MASP);
            tensp.push(result[i].TENSP);
            anhsp.push(result[i].HINHANH);
            dsqcsp.push(result[i].QUYCACH);
            gtkm.push(result[i].KM);
            tgkm.push(result[i].BATDAUKM);
        }
        });
        if (err) throw err;
        var sql = "SELECT * FROM tdonhang";
        con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var cc = result.length;
        for(var i = 0; i<cc; i++){
            anhtt.push(result[i].HINHANH);
            madonhang.push(result[i].MADH);
            idkh.push(result[i].ID);
            tonggia.push(result[i].TONGTIEN);
            ngaytaodh.push(result[i].NGAYTAO);
            ghichukh.push(result[i].GHICHUKH);
            ghichunv.push(result[i].GHICHUNV);
            dcdh.push(result[i].DIACHI);
            sdtdh.push(result[i].SDT);
            ttdh.push(result[i].THANHTOAN);
            dskv.push(result[i].KHUVUC);
            trangthaidh.push(result[i].TRANGTHAI);
        }
        });
        if (err) throw err;
        var sql = "SELECT * FROM tdonhangct";
        con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var cc = result.length;
        for(var i = 0; i<cc; i++){
            madhct.push(result[i].MADH);
            tendhct.push(result[i].TENSP);
            giact.push(result[i].GIA);
            slct.push(result[i].SOLUONG);
        }
        });
        if (err) throw err;
        var sql = "SELECT * FROM ttonkho";
        con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var cc = result.length;
        for(var i = 0; i<cc; i++){
            dsmakho.push(result[i].MAKHO);
            dsmasp.push(result[i].MASP);
            dssl.push(result[i].SOLUONG);
            dsnsx.push(result[i].NGAYSX);
            dshsd.push(result[i].HANSD);
            dsstt.push(result[i].STT);
        }
        });
        app.route("/login")
        .post(Passport.authenticate("local",{failureRedirect: "./",
                                            successRedirect: "./"}));
            // app.post("/set/test/test",Passport.authenticate("local",{failureRedirect: "/login",
            // successRedirect: "/loginok"}));
            // app.post("/set/test/test",function(data){console.log("cc")});
            Passport.use(new LocalStrategy((username,password,done)=>{
                if (err) throw err;
                var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        const userRecord = result.find(user => user.ID==username);
                        if(userRecord && userRecord.PASS==password){
                            bienlogout=false;
                            return done(null, userRecord);
                            res.render("./");
                        }else{
                            return done(null,false);
                        }
                    });
            }));
            Passport.serializeUser((user,done)=>{
                done(null,user.ID);
            });
            
            Passport.deserializeUser((name,done)=>{
                if (err) throw err;
                var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        const userRecord = result.find(user => user.ID==name);
                        if(userRecord){
                            return done(null,userRecord);
                        }else{
                            return done(null,false);
                        }
                    });
            });


            app.post("/upload",upload.single("file"),function(req,res){
                var linkanh="http://localhost:3000/uploads/"+req.file.filename;
                if (err) throw err;
                var sql = "UPDATE tsanpham SET HINHANH='"+linkanh+"' where MASP='"+maspcanluu+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    var stk=giasp.length;
                    giasp.splice(0,stk);
                    masp.splice(0,stk);
                    tensp.splice(0,stk);
                    anhsp.splice(0,stk);
                    dsqcsp.splice(0,stk);
                    gtkm.splice(0,stk)
                    tgkm.splice(0,stk);
                    if (err) throw err;
                        var sql = "SELECT * FROM tsanpham";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                            var n=result.length;
                            for(var i=0;i<n;i++){
                                giasp.push(result[i].GIAHT);
                                masp.push(result[i].MASP);
                                tensp.push(result[i].TENSP);
                                anhsp.push(result[i].HINHANH);
                                dsqcsp.push(result[i].QUYCACH);
                                gtkm.push(result[i].KM);
                                tgkm.push(result[i].BATDAUKM);
                            }
                            maspcanluu="";
                            res.redirect("/San%20pham/tatcasp.html")
                        });
                });
                
                
            })
            app.post("/upload2",upload.single("file2"),function(req,res){
                var linkanh="http://localhost:3000/uploads/"+req.file.filename;
                if (err) throw err;
                var sql = "UPDATE tsanpham SET HINHANH='"+linkanh+"' where MASP='"+maspcanluu+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    var stk=giasp.length;
                    anhsp.splice(0,stk);
                    if (err) throw err;
                        var sql = "SELECT * FROM tsanpham";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                            var n=result.length;
                            for(var i=0;i<n;i++){
                                anhsp.push(result[i].HINHANH);
                            }
                            maspcanluu="";
                            res.redirect("/San%20pham/tatcasp.html")
                        });
                });
                
                
            })

            app.post("/upload10",upload.single("file"),function(req,res){
                var linkanh="http://localhost:3000/uploads/"+req.file.filename;
                if (err) throw err;
                var sql = "UPDATE tkhuyenmai SET HINHANH='"+linkanh+"' where STT='"+(Number(sttcanluu)+1)+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    var stk=giasp.length;
                    anhsp.splice(0,stk);
                    if (err) throw err;
                        var sql = "SELECT * FROM tsanpham";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                            var n=result.length;
                            for(var i=0;i<n;i++){
                                anhsp.push(result[i].HINHANH);
                            }
                            sttcanluu=0;
                            res.redirect("/TinTuc/Khuyen_mai.html")
                        });
                });
                
                
            })

            app.post("/upload1",upload.single("file1"),function(req,res){
                console.log("vao upload 1");
                var linkanh="http://localhost:3000/uploads/"+req.file.filename;
                if (err) throw err;
                var sql = "UPDATE tdonhang SET HINHANH='"+linkanh+"' where MADH='"+madhcanluu+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    // var stk=giasp.length;
                    // giasp.splice(0,stk);
                    // masp.splice(0,stk);
                    // tensp.splice(0,stk);
                    // anhsp.splice(0,stk);
                    // dsqcsp.splice(0,stk);
                    // if (err) throw err;
                    //     var sql = "SELECT * FROM tsanpham";
                    //     con.query(sql, function (err, result, fields) {
                    //     if (err) throw err;
                    //         var n=result.length;
                    //         for(var i=0;i<n;i++){
                    //             giasp.push(result[i].GIAHT);
                    //             masp.push(result[i].MASP);
                    //             tensp.push(result[i].TENSP);
                    //             anhsp.push(result[i].HINHANH);
                    //             dsqcsp.push(result[i].QUYCACH);
                    //         }
                            madhcanluu="";
                            res.redirect("/giohang/giohang.html")
                        //});
                });
                
                
            })

            //đăng ký stknh va fax null
            app.post("/set/reg1",urlencodedParser,function(req,res){
                var sorandom = Math.floor(Math.random() * (999999 - 000000 + 1)) + 000000;
                if (err) throw err;
                var sql = "INSERT INTO tuser (ID,HOTEN,EMAIL,SODT,DIACHI,PASS,MAKH) VALUES ('"+req.body.ID+ "','"+req.body.Hoten+"','"+req.body.Email+"',"+req.body.SDT+",'"+req.body.Diachi+"','"+req.body.Pass1+"',"+sorandom+")";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    transporter.verify(function(error, success) {
                        // Nếu có lỗi.
                        if (error) {
                            console.log(error);
                        } else { //Nếu thành công.
                            console.log('Kết nối thành công!');
                            var mail = {
                                from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                                to: ''+req.body.Email, // Địa chỉ email của người gửi
                                subject: 'Longbinhfood chúc mừng bạn đăng ký tài khoản thành công', // Tiêu đề mail
                                text: 'Chào Bạn '+req.body.Hoten+'.Long Bình chúc mừng bạn đã đăng ký thành công tài khoản với id là: '+req.body.ID+' và mật khẩu là: '+req.body.Pass1+'. Bạn cần kích hoạt để tiếp tục sử dụng, mã kích hoạt của bạn là: '+sorandom, // Nội dung mail dạng text
                            };
                            //Tiến hành gửi email
                            transporter.sendMail(mail, function(error, info) {
                                if (error) { // nếu có lỗi
                                    console.log(error);
                                } else { //nếu thành công
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                        }
                    });
                    bienreg=1;
                    var sotk = taikhoan.length;
                    taikhoan.splice(0,sotk);
                    passw.splice(0,sotk);
                    vaitro.splice(0,sotk);
                    dssdt.splice(0,sotk);
                    dsemail.splice(0,sotk);
                    dsten.splice(0,sotk);
                    dsdcuser.splice(0,sotk);
                    dstknh.splice(0,sotk);
                    dsfax.splice(0,sotk);
                    if (err) throw err;
                    var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var n = result.length;
                    for(var i = 0; i<n; i++){
                        dsdcuser.push(result[i].DIACHI);
                        dstknh.push(result[i].TKNH);
                        dsfax.push(result[i].SOFAX);
                        dsten.push(result[i].HOTEN);
                        taikhoan.push(result[i].ID);
                        passw.push(result[i].PASS);
                        vaitro.push(result[i].MAND);
                        dsemail.push(result[i].EMAIL);
                        dssdt.push(result[i].SODT);
                    }
                    });
                });
                    
            });

            //lay dia chi sdt

            app.get("/dcsdt",function(req,res){
                    if (err) throw err;
                    var sql = "SELECT * FROM tuser where ID='"+req.user.ID+"'";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        tdc=result[0].DIACHI;
                        tsdt=result[0].SODT;
                    });
                    res.send({cdc:tdc,csdt:tsdt});
            });


            app.get("/danhsachtaikhoan",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tuser ";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    res.send({idu:taikhoan,hotenu:dsten,emailu:dsemail,sdtu:dssdt,passu:passw,mau:vaitro,dcu:dsdcuser,tknhu:dstknh,faxu:dsfax});
                });
                
        });

            app.get("/laymaxem",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tsanpham where MASP='"+maxem+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    console.log(""+result[0].TENSP);
                    res.send({gmasp:maxem,gtensp:result[0].TENSP,gloaisp:result[0].QUYCACH,ggiasp:result[0].GIAHT,ganhsp:result[0].HINHANH});
                });
                
            });

            //lay thong tin ton kho

            app.get("/gettttonkho",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM ttonkho";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var cc = result.length;
                dsmakho.splice(0,cc);
                dsmasp.splice(0,cc);
                dssl.splice(0,cc);
                dsnsx.splice(0,cc);
                dshsd.splice(0,cc);
                dsstt.splice(0,cc);
                for(var i = 0; i<cc; i++){
                    dsmakho.push(result[i].MAKHO);
                    dsmasp.push(result[i].MASP);
                    dssl.push(result[i].SOLUONG);
                    dsnsx.push(result[i].NGAYSX);
                    dshsd.push(result[i].HANSD);
                    dsstt.push(result[i].STT);
                }
                res.send({dmakho:dsmakho,dmasp:dsmasp,dsl:dssl,dnsx:dsnsx,dhsd:dshsd,dstt:dsstt});
                });
            });

            //lay thong tin gio hang

            app.get("/getgiohang",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var cc = result.length;
                spgiohang.splice(0,cc);
                slgiohang.splice(0,cc);
                
                for(var i = 0; i<cc; i++){
                    spgiohang.push(result[i].MASP);
                    slgiohang.push(result[i].SOLUONG);
                }
                });
                if(bienlogout==true){
                    res.send({spgh:"",slgh:""});
                }else{
                    res.send({spgh:spgiohang,slgh:slgiohang});
                }
            });

            // app.get("/laythungay",function(req,res){
            //     if (err) throw err;
            //     var sql = "SELECT NGAYSX FROM tsanpham where MASP='a1'";
            //     con.query(sql, function (err, result, fields) {
            //     if (err) throw err;
            //         res.send({xxngay:result[0].NGAYSX})
            //     })
            // });
            
            //lay thong tin don hang

            app.get("/getdonhang",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madonhang.length;
                anhtt.splice(0,sodh);
                madonhang.splice(0,sodh);
                idkh.splice(0,sodh);
                tonggia.splice(0,sodh);
                ngaytaodh.splice(0,sodh);
                ghichukh.splice(0,sodh);
                dcdh.splice(0,sodh);
                sdtdh.splice(0,sodh);
                ttdh.splice(0,sodh);
                dskv.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    anhtt.push(result[i].HINHANH);
                    madonhang.push(result[i].MADH);
                    idkh.push(result[i].ID);
                    tonggia.push(result[i].TONGTIEN);
                    ngaytaodh.push(result[i].NGAYTAO);
                    ghichukh.push(result[i].GHICHUKH);
                    dcdh.push(result[i].DIACHI);
                    sdtdh.push(result[i].SDT);
                    ttdh.push(result[i].THANHTOAN);
                    dskv.push(result[i].KHUVUC);
                }
                });
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang where TRANGTHAI='MOITAO'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=dsdh.length;
                dsdh.splice(0,stk);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    dsdh.push(result[i].MADH);
                }
                });
                if(bienlogout==true){
                    res.send({xdsdh:""});
                }else{
                    res.send({xdsdh:dsdh});
                }
            });
            app.get("/getdonhang1",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madonhang.length;
                anhtt.splice(0,sodh);
                madonhang.splice(0,sodh);
                idkh.splice(0,sodh);
                tonggia.splice(0,sodh);
                ngaytaodh.splice(0,sodh);
                ghichukh.splice(0,sodh);
                dcdh.splice(0,sodh);
                sdtdh.splice(0,sodh);
                ttdh.splice(0,sodh);
                dskv.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    anhtt.push(result[i].HINHANH);
                    madonhang.push(result[i].MADH);
                    idkh.push(result[i].ID);
                    tonggia.push(result[i].TONGTIEN);
                    ngaytaodh.push(result[i].NGAYTAO);
                    ghichukh.push(result[i].GHICHUKH);
                    dcdh.push(result[i].DIACHI);
                    sdtdh.push(result[i].SDT);
                    ttdh.push(result[i].THANHTOAN);
                    dskv.push(result[i].KHUVUC);
                }
                });
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang where TRANGTHAI='CHUYENHANG'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=dsdh.length;
                dsdh.splice(0,stk);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    dsdh.push(result[i].MADH);
                }
                });
                if(bienlogout==true){
                    res.send({xdsdh:""});
                }else{
                    res.send({xdsdh:dsdh});
                }
            });

            app.get("/getdonhang2",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madonhang.length;
                anhtt.splice(0,sodh);
                madonhang.splice(0,sodh);
                idkh.splice(0,sodh);
                tonggia.splice(0,sodh);
                ngaytaodh.splice(0,sodh);
                ghichunv.splice(0,sodh);
                dcdh.splice(0,sodh);
                sdtdh.splice(0,sodh);
                ttdh.splice(0,sodh);
                trangthaidh.splice(0,sodh);
                dskv.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    anhtt.push(result[i].HINHANH);
                    madonhang.push(result[i].MADH);
                    idkh.push(result[i].ID);
                    tonggia.push(result[i].TONGTIEN);
                    ngaytaodh.push(result[i].NGAYTAO);
                    ghichunv.push(result[i].GHICHUNV);
                    dcdh.push(result[i].DIACHI);
                    sdtdh.push(result[i].SDT);
                    ttdh.push(result[i].THANHTOAN);
                    trangthaidh.push(result[i].TRANGTHAI);
                    dskv.push(result[i].KHUVUC);
                }
                });
                if (err) throw err;
                var sql = "SELECT MADH FROM tdonhang where ID='"+req.user.ID+"' AND (TRANGTHAI='HOANTHANH' OR TRANGTHAI='HUY')";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=dsdh.length;
                dsdh.splice(0,stk);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    dsdh.push(result[i].MADH);
                }
                if(bienlogout==true){
                    res.send({xdsdh:""});
                }else{
                    res.send({xdsdh:dsdh});
                }
                });
                
            });

            app.get("/getdonhang3",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madonhang.length;
                anhtt.splice(0,sodh);
                madonhang.splice(0,sodh);
                idkh.splice(0,sodh);
                tonggia.splice(0,sodh);
                ngaytaodh.splice(0,sodh);
                ghichunv.splice(0,sodh);
                dcdh.splice(0,sodh);
                sdtdh.splice(0,sodh);
                ttdh.splice(0,sodh);
                trangthaidh.splice(0,sodh);
                dskv.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    anhtt.push(result[i].HINHANH);
                    madonhang.push(result[i].MADH);
                    idkh.push(result[i].ID);
                    tonggia.push(result[i].TONGTIEN);
                    ngaytaodh.push(result[i].NGAYTAO);
                    ghichunv.push(result[i].GHICHUNV);
                    dcdh.push(result[i].DIACHI);
                    sdtdh.push(result[i].SDT);
                    ttdh.push(result[i].THANHTOAN);
                    trangthaidh.push(result[i].TRANGTHAI);
                    dskv.push(result[i].KHUVUC);
                }
                if (err) throw err;
                var sql = "SELECT MADH FROM tdonhang where ID='"+req.user.ID+"' AND (TRANGTHAI='MOITAO' OR TRANGTHAI='CHUYENHANG')";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=dsdh.length;
                dsdh.splice(0,stk);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    dsdh.push(result[i].MADH);
                }
                if(bienlogout==true){
                    res.send({xdsdh:""});
                }else{
                    res.send({xdsdh:dsdh});
                }
                });
                });
                
                
            });

            app.get("/getdonhangct",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhangct";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madhct.length;
                madhct.splice(0,sodh);
                tendhct.splice(0,sodh);
                giact.splice(0,sodh);
                slct.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    madhct.push(result[i].MADH);
                    tendhct.push(result[i].TENSP);
                    giact.push(result[i].GIA);
                    slct.push(result[i].SOLUONG);
                }
                res.send({xmadhct:madhct,xtendhct:tendhct,xgiact:giact,xslct:slct});
                });
            });

            //đăng ký có stknh

            //lấy ttmua hàng

            app.post("/guitttt",urlencodedParser,function(req,res){
                
                if(req.body.xghichu.length==0){
                    if (err) throw err;
                    var sql = "INSERT INTO tdonhang (MADH,ID,TONGTIEN,THANHTOAN,KHUVUC,DIACHI,SDT) VALUES ("+req.body.xdonhang+ ",'"+req.user.ID+"',"+req.body.xtonggia+",'"+req.body.xthanhtoan+"','"+req.body.xkhuvuc+"','"+req.body.xdiachi+"','"+req.body.xsdt+"')";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        madhcanluu=req.body.xdonhang;
                        console.log("them thanh cong");
                    });
                }else{
                    if (err) throw err;
                    var sql = "INSERT INTO tdonhang (MADH,ID,TONGTIEN,THANHTOAN,KHUVUC,DIACHI,SDT,GHICHUKH) VALUES ("+req.body.xdonhang+ ",'"+req.user.ID+"',"+req.body.xtonggia+",'"+req.body.xthanhtoan+"','"+req.body.xkhuvuc+"','"+req.body.xdiachi+"','"+req.body.xsdt+"','"+req.body.xghichu+"')";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        madhcanluu=req.body.xdonhang;
                        console.log("them thanh cong1");
                    });

                }
                var sosp = req.body.xmasp.length;
                if(sosp==1){
                    var makho="";
                    if(req.body.xkhuvuc=="Miền Nam"){
                        makho="K1";
                    }else if(req.body.xkhuvuc=="Miền Trung"){
                        makho="K2";
                    }else{
                        makho="K3";
                    }
                    if (err) throw err;
                    var sql = "SELECT * FROM ttonkho where MAKHO='"+makho+"' AND MASP='"+req.body.xmasp+"' ORDER BY HANSD ASC";
                    con.query(sql, function (err, result){
                    if (err) throw err;
                        var n=result.length;
                        if(n==1){
                            var so = Number(result[0].SOLUONG)-Number(req.body.xsoluong);
                            if (err) throw err;
                            var sql = "UPDATE ttonkho SET SOLUONG="+so+" where MAKHO='"+makho+"' AND MASP='"+req.body.xmasp+"'";
                            con.query(sql, function (err, result) {
                            if (err) throw err;
                            })
                            if (err) throw err;
                            var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[0].STT+","+req.body.xsoluong+")";
                            con.query(sql, function (err, result) {
                            if (err) throw err;
                            })
                        }else{
                            var so1= Number(req.body.xsoluong);
                            for(var i=0;i<n;i++){
                                if(Number(result[i].SOLUONG)<so1){
                                    so1 = so1 - Number(result[i].SOLUONG);
                                    if (err) throw err;
                                    var sql = "UPDATE ttonkho SET SOLUONG=0 where STT='"+result[i].STT+"'";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    });
                                    if (err) throw err;
                                    var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[i].STT+","+result[i].SOLUONG+")";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    })
                                }else if(Number(result[i].SOLUONG)==so1){
                                    so1=0;
                                    if (err) throw err;
                                    var sql = "UPDATE ttonkho SET SOLUONG=0 where STT='"+result[i].STT+"'";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    });
                                    if (err) throw err;
                                    var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[i].STT+","+Number(result[i].SOLUONG)+")";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    })
                                }else if(Number(result[i].SOLUONG)>so1){
                                    if (err) throw err;
                                    var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[i].STT+","+so1+")";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    })
                                    so1= Number(result[i].SOLUONG)-so1;
                                    if (err) throw err;
                                    var sql = "UPDATE ttonkho SET SOLUONG="+so1+" where STT='"+result[i].STT+"'";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                    });
                                }
                                
                            }
                        }
                    });
                    if (err) throw err;
                    var sql = "INSERT INTO tdonhangct (MADH,TENSP,GIA,SOLUONG) values ("+req.body.xdonhang+",'"+req.body.xtensp[0]+"',"+req.body.xgiasp[0]+","+req.body.xsoluong[0]+")";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    });
                    if (err) throw err;
                    var sql = "DELETE FROM tgiohang where ID='"+req.user.ID+"' AND MASP='"+req.body.xmasp[0]+"'";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        spgiohang.splice(0,spgiohang.length);
                        slgiohang.splice(0,slgiohang.length);
                        var cc = result.length;
                        for(var i = 0; i<cc; i++){
                            spgiohang.push(result[i].MASP);
                            slgiohang.push(result[i].SOLUONG);
                        }
                        });
                        console.log("xoa thanh cong");
                    });
                    res.redirect("http://localhost:3000/giohang/giohang.html");
                }else{
                    var makho1="";
                        if(req.body.xkhuvuc=="Miền Nam"){
                            makho1="K1";
                        }else if(req.body.xkhuvuc=="Miền Trung"){
                            makho1="K2";
                        }else{
                            makho1="K3";
                    }
                    if (err) throw err;
                    var sql = "SELECT * FROM ttonkho  where MAKHO='"+makho1+"' ORDER BY HANSD ASC";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        var n = result.length;
                        for(var k=0;k<sosp;k++){
                            var nu=[];
                            for(var i=0;i<n;i++){
                                if(req.body.xmasp[k]==result[i].MASP){
                                    nu.push(i);
                                }
                            }
                            if(nu.length==1){
                                var so2 = Number(result[nu[0]].SOLUONG)-Number(req.body.xsoluong[k]);
                                if (err) throw err;
                                var sql = "UPDATE ttonkho SET SOLUONG="+so2+" where MAKHO='"+makho1+"' AND MASP='"+req.body.xmasp[k]+"'";
                                con.query(sql, function (err, result) {
                                if (err) throw err;
                                    
                                });
                                if (err) throw err;
                                    var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[nu[0]].STT+","+Number(req.body.xsoluong[k])+")";
                                    con.query(sql, function (err, result) {
                                    if (err) throw err;
                                })
                            }else{
                                console.log("vao day" +result[nu[0]].STT);
                                console.log(req.body.xsoluong.length+"  "+req.body.xsoluong[0]+"  "+req.body.xsoluong[1] +" "+k);
                                var so3= Number(req.body.xsoluong[k]);
                                for(var i=0;i<nu.length;i++){
                                    console.log(so3+" where MAKHO='"+result[nu[i]].STT);
                                    if(Number(result[nu[i]].SOLUONG)<so3){
                                        so3 = so3 - Number(result[nu[i]].SOLUONG);
                                        if (err) throw err;
                                        var sql = "UPDATE ttonkho SET SOLUONG=0 where STT='"+result[nu[i]].STT+"'";
                                        con.query(sql, function (err, result) {
                                        if (err) throw err;
                                        });
                                        if (err) throw err;
                                            var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[nu[i]].STT+","+Number(result[nu[i]].SOLUONG)+")";
                                            con.query(sql, function (err, result) {
                                            if (err) throw err;
                                        })
                                    }else if(Number(result[nu[i]].SOLUONG)==so3){
                                        so3=0;
                                        if (err) throw err;
                                        var sql = "UPDATE ttonkho SET SOLUONG=0 where STT='"+result[nu[i]].STT+"'";
                                        con.query(sql, function (err, result) {
                                        if (err) throw err;
                                        });
                                        if (err) throw err;
                                            var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[nu[i]].STT+","+Number(result[nu[i]].SOLUONG)+")";
                                            con.query(sql, function (err, result) {
                                            if (err) throw err;
                                        })
                                    }else if(Number(result[nu[i]].SOLUONG)>so3){
                                        if (err) throw err;
                                            var sql = "INSERT INTO thuyhang (MADH,STTTONKHO,SOLUONG) VALUES ("+req.body.xdonhang+","+result[nu[i]].STT+","+so3+")";
                                            con.query(sql, function (err, result) {
                                            if (err) throw err;
                                        })
                                        so3= Number(result[nu[i]].SOLUONG)-so3;
                                        if (err) throw err;
                                        var sql = "UPDATE ttonkho SET SOLUONG="+so3+" where STT='"+result[nu[i]].STT+"'";
                                        con.query(sql, function (err, result) {
                                        if (err) throw err;
                                        });
                                        
                                    }
                                    
                                }
                            }
                            if (err) throw err;
                            var sql = "INSERT INTO tdonhangct (MADH,TENSP,GIA,SOLUONG) values ("+req.body.xdonhang+",'"+req.body.xtensp[k]+"',"+req.body.xgiasp[k]+","+req.body.xsoluong[k]+")";
                            con.query(sql, function (err, result) {
                            if (err) throw err;
                            });
                            if (err) throw err;
                            var sql = "DELETE FROM tgiohang where ID='"+req.user.ID+"' AND MASP='"+req.body.xmasp[k]+"'";
                            con.query(sql, function (err, result) {
                            if (err) throw err;
                                console.log("xoa thanh cong");
                            });
                        }
                        if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        spgiohang.splice(0,spgiohang.length);
                        slgiohang.splice(0,slgiohang.length);
                        var cc = result.length;
                        for(var i = 0; i<cc; i++){
                            spgiohang.push(result[i].MASP);
                            slgiohang.push(result[i].SOLUONG);
                        }
                        });
                        res.redirect("http://localhost:3000/giohang/giohang.html");
                    });
                    // for(var k=0;k<sosp;k++){
                    //     var n1=0;
                    //     if (err) throw err;
                    //     var sql = "SELECT * FROM ttonkho where MAKHO='"+makho1+"' AND MASP='"+req.body.xmasp[k]+"' ORDER BY HANSD ASC";
                    //     con.query(sql, function (err, result) {
                    //     if (err) throw err;
                    //         n1=result.length;
                    //     console.log(n1);
                        
                    //     });
                        
                    // }
                    // for(var k=0;k<sosp;k++){
                    //     console.log(req.body.xdonhang+",'"+req.body.xtensp[k]+"',"+req.body.xgiasp[k]+","+req.body.xsoluong[k])
                        
                    // }
                    
                }
            });

            app.post("/guitttt1",urlencodedParser,function(req,res){
                if(req.body.xghichu.length==0){
                    if (err) throw err;
                    var sql = "INSERT INTO tdonhang (MADH,ID,TONGTIEN,THANHTOAN,KHUVUC,DIACHI,SDT) VALUES ("+req.body.xdonhang+ ",'"+req.user.ID+"',"+req.body.xtonggia+",'"+req.body.xthanhtoan+"','"+req.body.xkhuvuc+"','"+req.body.xdiachi+"','"+req.body.xsdt+"')";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    madhcanluu=req.body.xdonhang;
                        console.log("them thanh cong2");
                    });
                }else{
                    if (err) throw err;
                    var sql = "INSERT INTO tdonhang (MADH,ID,TONGTIEN,THANHTOAN,KHUVUC,DIACHI,SDT,GHICHUKH) VALUES ("+req.body.xdonhang+ ",'"+req.user.ID+"',"+req.body.xtonggia+",'"+req.body.xthanhtoan+"','"+req.body.xkhuvuc+"','"+req.body.xdiachi+"','"+req.body.xsdt+"','"+req.body.xghichu+"')";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        madhcanluu=req.body.xdonhang;
                        console.log("them thanh cong3");
                    });
                }
                var sosp = req.body.xmasp.length;
                if(sosp==1){
                    if (err) throw err;
                    var sql = "INSERT INTO tdonhangct (MADH,TENSP,GIA,SOLUONG) values ("+req.body.xdonhang+",'"+req.body.xtensp[0]+"',"+req.body.xgiasp[0]+","+req.body.xsoluong[0]+")";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        console.log("them thanh cong");
                    });
                    if (err) throw err;
                    var sql = "DELETE FROM tgiohang where ID='"+req.user.ID+"' AND MASP='"+req.body.xmasp[0]+"'";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        spgiohang.splice(0,spgiohang.length);
                        slgiohang.splice(0,slgiohang.length);
                        var cc = result.length;
                        for(var i = 0; i<cc; i++){
                            spgiohang.push(result[i].MASP);
                            slgiohang.push(result[i].SOLUONG);
                        }
                        });
                        console.log("xoa thanh cong");
                    });
                }else{
                    for(var j=0;j<sosp;j++){
                        if (err) throw err;
                        var sql = "INSERT INTO tdonhangct (MADH,TENSP,GIA,SOLUONG) values ("+req.body.xdonhang+",'"+req.body.xtensp[j]+"',"+req.body.xgiasp[j]+","+req.body.xsoluong[j]+")";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                            console.log("them thanh cong");
                        });
                        if (err) throw err;
                        var sql = "DELETE FROM tgiohang where ID='"+req.user.ID+"' AND MASP='"+req.body.xmasp[j]+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                            
                            console.log("xoa thanh cong" +j);
                        });
                    }
                    if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        spgiohang.splice(0,spgiohang.length);
                        slgiohang.splice(0,slgiohang.length);
                        var cc = result.length;
                        for(var i = 0; i<cc; i++){
                            spgiohang.push(result[i].MASP);
                            slgiohang.push(result[i].SOLUONG);
                        }
                        });
                }
            });

            //duyet thong tin don hang

            app.post("/guilenmadh",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tdonhang SET TRANGTHAI= 'CHUYENHANG' where MADH='"+req.body.jmadh+"';";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    console.log("da duyet");
                });
            });

            app.post("/thanhlykho",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM ttonkho where STT="+req.body.tlstt;
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    if(req.body.tlsl==result[0].SOLUONG){
                        if (err) throw err;
                        var sql = "DELETE FROM ttonkho where STT="+req.body.tlstt;
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                            console.log("da xoa sp");
                            if (err) throw err;
                            var sql = "SELECT * FROM ttonkho";
                            con.query(sql, function (err, result, fields) {
                            if (err) throw err;
                            var cc = result.length;
                            dsmakho.splice(0,cc);
                            dsmasp.splice(0,cc);
                            dssl.splice(0,cc);
                            dsnsx.splice(0,cc);
                            dshsd.splice(0,cc);
                            dsstt.splice(0,cc);
                            for(var i = 0; i<cc; i++){
                                dsmakho.push(result[i].MAKHO);
                                dsmasp.push(result[i].MASP);
                                dssl.push(result[i].SOLUONG);
                                dsnsx.push(result[i].NGAYSX);
                                dshsd.push(result[i].HANSD);
                                dsstt.push(result[i].STT);
                            }
                            });
                        });
                    }else{
                        var sl = result[0].SOLUONG - req.body.tlsl;
                        if (err) throw err;
                        var sql = "UPDATE ttonkho SET SOLUONG="+sl+" where STT="+req.body.tlstt;
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                            console.log("da tru sp");
                            if (err) throw err;
                            var sql = "SELECT * FROM ttonkho";
                            con.query(sql, function (err, result, fields) {
                            if (err) throw err;
                            var cc = result.length;
                            dsmakho.splice(0,cc);
                            dsmasp.splice(0,cc);
                            dssl.splice(0,cc);
                            dsnsx.splice(0,cc);
                            dshsd.splice(0,cc);
                            dsstt.splice(0,cc);
                            for(var i = 0; i<cc; i++){
                                dsmakho.push(result[i].MAKHO);
                                dsmasp.push(result[i].MASP);
                                dssl.push(result[i].SOLUONG);
                                dsnsx.push(result[i].NGAYSX);
                                dshsd.push(result[i].HANSD);
                                dsstt.push(result[i].STT);
                            }
                            });
                        });
                    }
                });
            });

            app.post("/guidonhanghuy",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tdonhang SET TRANGTHAI= 'HUY', GHICHUNV='"+req.body.xxxlidohuy+"' where MADH='"+req.body.xxxmadh+"';";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                });
                var dsstttk=[];
                var dssltk=[];
                if (err) throw err;
                var sql = "SELECT * FROM ttonkho";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    var n=result.length;
                    for(var i=0;i<n;i++){
                        dsstttk.push(result[i].STT);
                        dssltk.push(result[i].SOLUONG);
                    }
                    if (err) throw err;
                    var sql = "SELECT * FROM thuyhang where MADH='"+req.body.xxxmadh+"';";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        var n=result.length;
                        for(var i=0;i<n;i++){
                            for(var j=0;j<dsstttk.length;j++){
                                if(result[i].STTTONKHO==dsstttk[j]){
                                    var sl = Number(result[i].SOLUONG) + Number(dssltk[j]);
                                    if (err) throw err;
                                    var sql = "UPDATE ttonkho SET SOLUONG="+sl+" where STT="+dsstttk[j]+"";
                                    con.query(sql, function (err, result, fields) {
                                    if (err) throw err;
                                    });
                                    if (err) throw err;
                                    var sql = "DELETE FROM thuyhang where STTTONKHO="+dsstttk[j]+"";
                                    con.query(sql, function (err, result, fields) {
                                    if (err) throw err;
                                    });
                                    console.log(dsstttk[j]+" v "+sl);
                                }
                            }
                        }
                    });

                });
                
                
            });

            app.post("/guilenmadh1",urlencodedParser,function(req,res){
                var date= new Date();

                if (err) throw err;
                var sql = "UPDATE tdonhang SET TRANGTHAI= 'HOANTHANH',NGAYHT='"+date.toLocaleDateString()+"' where MADH='"+req.body.jmadh+"';";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    console.log("don hang thang cong");
                });
            });

            app.post("/set/reg2",urlencodedParser,function(req,res){
                var sorandom = Math.floor(Math.random() * (999999 - 000000 + 1)) + 000000;
                if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO tuser (ID,HOTEN,EMAIL,SODT,DIACHI,TKNH,PASS,MAKH) VALUES ('"+req.body.ID+ "','"+req.body.Hoten+"','"+req.body.Email+"',"+req.body.SDT+",'"+req.body.Diachi+"','"+req.body.TKNH+"','"+req.body.Pass1+"',"+sorandom+")";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    transporter.verify(function(error, success) {
                        // Nếu có lỗi.
                        if (error) {
                            console.log(error);
                        } else { //Nếu thành công.
                            console.log('Kết nối thành công!');
                            var mail = {
                                from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                                to: ''+req.body.Email, // Địa chỉ email của người gửi
                                subject: 'Longbinhfood chúc mừng bạn đăng ký tài khoản thành công', // Tiêu đề mail
                                text: 'Chào Bạn '+req.body.Hoten+'.Long Bình chúc mừng bạn đã đăng ký thành công tài khoản với id là: '+req.body.ID+' và mật khẩu là: '+req.body.Pass1+'. Bạn cần kích hoạt để tiếp tục sử dụng, mã kích hoạt của bạn là: '+sorandom, // Nội dung mail dạng text
                            };
                            //Tiến hành gửi email
                            transporter.sendMail(mail, function(error, info) {
                                if (error) { // nếu có lỗi
                                    console.log(error);
                                } else { //nếu thành công
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                        }
                    });
                    bienreg=1;
                    var sotk = taikhoan.length;
                    dsten.splice(0,sotk);
                    taikhoan.splice(0,sotk);
                    passw.splice(0,sotk);
                    vaitro.splice(0,sotk);
                    dssdt.splice(0,sotk);
                    dsemail.splice(0,sotk);
                    dsdcuser.splice(0,sotk);
                    dstknh.splice(0,sotk);
                    dsfax.splice(0,sotk);
                    if (err) throw err;
                    var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var n = result.length;
                    for(var i = 0; i<n; i++){
                        dsten.push(result[i].HOTEN);
                        taikhoan.push(result[i].ID);
                        passw.push(result[i].PASS);
                        vaitro.push(result[i].MAND);
                        dsemail.push(result[i].EMAIL);
                        dssdt.push(result[i].SODT);
                        dsdcuser.push(result[i].DIACHI);
                        dstknh.push(result[i].TKNH);
                        dsfax.push(result[i].SOFAX);
                    }
                    });
                });
                    
            });

            //có fax

            app.post("/capnhattaikhoan1",urlencodedParser,function(req,res){
                var sorandom = Math.floor(Math.random() * (999999 - 000000 + 1)) + 000000;
                if (err) throw err;
                var sql = "SELECT * FROM tuser where ID='"+req.user.ID+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    if(req.body.Email==result[0].EMAIL){
                        if (err) throw err;
                        var sql = "UPDATE tuser SET HOTEN='"+req.body.Hoten+"',SODT="+req.body.SDT+",DIACHI='"+req.body.Diachi+"',TKNH = '"+req.body.Tknh+"',SOFAX='"+req.body.Fax+"' where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        })
                    }else{
                        if (err) throw err;
                        var sql = "UPDATE tuser SET HOTEN='"+req.body.Hoten+"',EMAIL='"+req.body.Email+"',SODT="+req.body.SDT+",DIACHI='"+req.body.Diachi+"',TKNH = '"+req.body.Tknh+"',SOFAX='"+req.body.Fax+"' ,MAND='CKH', MAKH="+sorandom+" where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                            transporter.verify(function(error, success) {
                                // Nếu có lỗi.
                                if (error) {
                                    console.log(error);
                                } else { //Nếu thành công.
                                    console.log('Kết nối thành công!');
                                    var mail = {
                                        from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                                        to: ''+req.body.Email, // Địa chỉ email của người gửi
                                        subject: 'Longbinhfood chúc mừng bạn đã thay đổi email thành công', // Tiêu đề mail
                                        text: 'Chào Bạn '+req.body.Hoten+'.mã kích hoạt để sử dụng email của bạn là: '+sorandom, // Nội dung mail dạng text
                                    };
                                    //Tiến hành gửi email
                                    transporter.sendMail(mail, function(error, info) {
                                        if (error) { // nếu có lỗi
                                            console.log(error);
                                        } else { //nếu thành công
                                            console.log('Email sent: ' + info.response);
                                        }
                                    });
                                }
                            });
                            var sotk = taikhoan.length;
                            dsten.splice(0,sotk);
                            taikhoan.splice(0,sotk);
                            passw.splice(0,sotk);
                            vaitro.splice(0,sotk);
                            dssdt.splice(0,sotk);
                            dsemail.splice(0,sotk);
                            dsdcuser.splice(0,sotk);
                            dstknh.splice(0,sotk);
                            dsfax.splice(0,sotk);
                            if (err) throw err;
                            var sql = "SELECT * FROM tuser";
                            con.query(sql, function (err, result, fields) {
                            if (err) throw err;
                            var n = result.length;
                            for(var i = 0; i<n; i++){
                                dsten.push(result[i].HOTEN);
                                taikhoan.push(result[i].ID);
                                passw.push(result[i].PASS);
                                vaitro.push(result[i].MAND);
                                dsemail.push(result[i].EMAIL);
                                dssdt.push(result[i].SODT);
                                dsdcuser.push(result[i].DIACHI);
                                dstknh.push(result[i].TKNH);
                                dsfax.push(result[i].SOFAX);
                                }
                                });
                        })
                    }
                });
                // if (err) throw err;
                // var sql = "INSERT INTO tuser (ID,HOTEN,EMAIL,SODT,DIACHI,SOFAX,PASS,MAKH) VALUES ('"+req.body.ID+ "','"+req.body.Hoten+"','"+req.body.Email+"',"+req.body.SDT+",'"+req.body.Diachi+"','"+req.body.FAX+"','"+req.body.Pass1+"',"+sorandom+")";
                // con.query(sql, function (err, result) {
                //     if (err) throw err;
                    
                //     bienreg=1;
                //     var sotk = taikhoan.length;
                //     dsten.splice(0,sotk);
                //     taikhoan.splice(0,sotk);
                //     passw.splice(0,sotk);
                //     vaitro.splice(0,sotk);
                //     dssdt.splice(0,sotk);
                //     dsemail.splice(0,sotk);
                //     if (err) throw err;
                //     var sql = "SELECT * FROM tuser";
                //     con.query(sql, function (err, result, fields) {
                //     if (err) throw err;
                //     var n = result.length;
                //     for(var i = 0; i<n; i++){
                //         dsten.push(result[i].HOTEN);
                //         taikhoan.push(result[i].ID);
                //         passw.push(result[i].PASS);
                //         vaitro.push(result[i].MAND);
                //         dsemail.push(result[i].EMAIL);
                //         dssdt.push(result[i].SODT);
                //     }
                //     });
                //});
                    
            });

            app.post("/capnhattaikhoan",urlencodedParser,function(req,res){
                var sorandom = Math.floor(Math.random() * (999999 - 000000 + 1)) + 000000;
                if (err) throw err;
                var sql = "SELECT * FROM tuser where ID='"+req.user.ID+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    if(req.body.Email==result[0].EMAIL){
                        if (err) throw err;
                        var sql = "UPDATE tuser SET HOTEN='"+req.body.Hoten+"',SODT="+req.body.SDT+",DIACHI='"+req.body.Diachi+"',TKNH = '"+req.body.Tknh+"',SOFAX="+req.body.Fax+",PASS='"+req.body.Pass1+"' where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        })
                    }else{
                        if (err) throw err;
                        var sql = "UPDATE tuser SET HOTEN='"+req.body.Hoten+"',EMAIL='"+req.body.Email+"',SODT="+req.body.SDT+",DIACHI='"+req.body.Diachi+"',TKNH = '"+req.body.Tknh+"',SOFAX="+req.body.Fax+",PASS='"+req.body.Pass1+"',MAND='CKH', MAKH="+sorandom+" where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                            transporter.verify(function(error, success) {
                                // Nếu có lỗi.
                                if (error) {
                                    console.log(error);
                                } else { //Nếu thành công.
                                    console.log('Kết nối thành công!');
                                    var mail = {
                                        from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                                        to: ''+req.body.Email, // Địa chỉ email của người gửi
                                        subject: 'Longbinhfood chúc mừng bạn đã thay đổi email thành công', // Tiêu đề mail
                                        text: 'Chào Bạn '+req.body.Hoten+'.mã kích hoạt để sử dụng email của bạn là: '+sorandom, // Nội dung mail dạng text
                                    };
                                    //Tiến hành gửi email
                                    transporter.sendMail(mail, function(error, info) {
                                        if (error) { // nếu có lỗi
                                            console.log(error);
                                        } else { //nếu thành công
                                            console.log('Email sent: ' + info.response);
                                        }
                                    });
                                }
                            });
                            var sotk = taikhoan.length;
                            dsten.splice(0,sotk);
                            taikhoan.splice(0,sotk);
                            passw.splice(0,sotk);
                            vaitro.splice(0,sotk);
                            dssdt.splice(0,sotk);
                            dsemail.splice(0,sotk);
                            dsdcuser.splice(0,sotk);
                            dstknh.splice(0,sotk);
                            dsfax.splice(0,sotk);
                            if (err) throw err;
                            var sql = "SELECT * FROM tuser";
                            con.query(sql, function (err, result, fields) {
                            if (err) throw err;
                            var n = result.length;
                            for(var i = 0; i<n; i++){
                                dsten.push(result[i].HOTEN);
                                taikhoan.push(result[i].ID);
                                passw.push(result[i].PASS);
                                vaitro.push(result[i].MAND);
                                dsemail.push(result[i].EMAIL);
                                dssdt.push(result[i].SODT);
                                dsdcuser.push(result[i].DIACHI);
                                dstknh.push(result[i].TKNH);
                                dsfax.push(result[i].SOFAX);
                                }
                                });
                        })
                    }
                });
                // if (err) throw err;
                // var sql = "INSERT INTO tuser (ID,HOTEN,EMAIL,SODT,DIACHI,SOFAX,PASS,MAKH) VALUES ('"+req.body.ID+ "','"+req.body.Hoten+"','"+req.body.Email+"',"+req.body.SDT+",'"+req.body.Diachi+"','"+req.body.FAX+"','"+req.body.Pass1+"',"+sorandom+")";
                // con.query(sql, function (err, result) {
                //     if (err) throw err;
                    
                //     bienreg=1;
                //     var sotk = taikhoan.length;
                //     dsten.splice(0,sotk);
                //     taikhoan.splice(0,sotk);
                //     passw.splice(0,sotk);
                //     vaitro.splice(0,sotk);
                //     dssdt.splice(0,sotk);
                //     dsemail.splice(0,sotk);
                //     if (err) throw err;
                //     var sql = "SELECT * FROM tuser";
                //     con.query(sql, function (err, result, fields) {
                //     if (err) throw err;
                //     var n = result.length;
                //     for(var i = 0; i<n; i++){
                //         dsten.push(result[i].HOTEN);
                //         taikhoan.push(result[i].ID);
                //         passw.push(result[i].PASS);
                //         vaitro.push(result[i].MAND);
                //         dsemail.push(result[i].EMAIL);
                //         dssdt.push(result[i].SODT);
                //     }
                //     });
                //});
                    
            });

            app.post("/set/reg3",urlencodedParser,function(req,res){
                var sorandom = Math.floor(Math.random() * (999999 - 000000 + 1)) + 000000;
                if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO tuser (ID,HOTEN,EMAIL,SODT,DIACHI,SOFAX,PASS,MAKH) VALUES ('"+req.body.ID+ "','"+req.body.Hoten+"','"+req.body.Email+"',"+req.body.SDT+",'"+req.body.Diachi+"','"+req.body.FAX+"','"+req.body.Pass1+"',"+sorandom+")";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    transporter.verify(function(error, success) {
                        // Nếu có lỗi.
                        if (error) {
                            console.log(error);
                        } else { //Nếu thành công.
                            console.log('Kết nối thành công!');
                            var mail = {
                                from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                                to: ''+req.body.Email, // Địa chỉ email của người gửi
                                subject: 'Longbinhfood chúc mừng bạn đăng ký tài khoản thành công', // Tiêu đề mail
                                text: 'Chào Bạn '+req.body.Hoten+'.Long Bình chúc mừng bạn đã đăng ký thành công tài khoản với id là: '+req.body.ID+' và mật khẩu là: '+req.body.Pass1+'. Bạn cần kích hoạt để tiếp tục sử dụng, mã kích hoạt của bạn là: '+sorandom, // Nội dung mail dạng text
                            };
                            //Tiến hành gửi email
                            transporter.sendMail(mail, function(error, info) {
                                if (error) { // nếu có lỗi
                                    console.log(error);
                                } else { //nếu thành công
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                        }
                    });
                    bienreg=1;
                    var sotk = taikhoan.length;
                    dsten.splice(0,sotk);
                    taikhoan.splice(0,sotk);
                    passw.splice(0,sotk);
                    vaitro.splice(0,sotk);
                    dssdt.splice(0,sotk);
                    dsemail.splice(0,sotk);
                    dsdcuser.splice(0,sotk);
                    dstknh.splice(0,sotk);
                    dsfax.splice(0,sotk)
                    if (err) throw err;
                    var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var n = result.length;
                    for(var i = 0; i<n; i++){
                        dsten.push(result[i].HOTEN);
                        taikhoan.push(result[i].ID);
                        passw.push(result[i].PASS);
                        vaitro.push(result[i].MAND);
                        dsemail.push(result[i].EMAIL);
                        dssdt.push(result[i].SODT);
                        dsdcuser.push(result[i].DIACHI);
            dstknh.push(result[i].TKNH);
            dsfax.push(result[i].SOFAX);
                    }
                    });
                });
                    
            });
            //co ca 2

            app.post("/set/reg4",urlencodedParser,function(req,res){
                var sorandom = Math.floor(Math.random() * (999999 - 000000 + 1)) + 000000;
                if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO tuser (ID,HOTEN,EMAIL,SODT,DIACHI,TKNH,SOFAX,PASS,MAKH) VALUES ('"+req.body.ID+ "','"+req.body.Hoten+"','"+req.body.Email+"',"+req.body.SDT+",'"+req.body.Diachi+"','"+req.body.TKNH+"',"+req.body.FAX+",'"+req.body.Pass1+"',"+sorandom+"')";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    transporter.verify(function(error, success) {
                        // Nếu có lỗi.
                        if (error) {
                            console.log(error);
                        } else { //Nếu thành công.
                            console.log('Kết nối thành công!');
                            var mail = {
                                from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                                to: ''+req.body.Email, // Địa chỉ email của người gửi
                                subject: 'Longbinhfood chúc mừng bạn đăng ký tài khoản thành công', // Tiêu đề mail
                                text: 'Chào Bạn '+req.body.Hoten+'.Long Bình chúc mừng bạn đã đăng ký thành công tài khoản với id là: '+req.body.ID+' và mật khẩu là: '+req.body.Pass1+'. Bạn cần kích hoạt để tiếp tục sử dụng, mã kích hoạt của bạn là: '+sorandom, // Nội dung mail dạng text
                            };
                            //Tiến hành gửi email
                            transporter.sendMail(mail, function(error, info) {
                                if (error) { // nếu có lỗi
                                    console.log(error);
                                } else { //nếu thành công
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                        }
                    });
                    bienreg=1;
                    var sotk = taikhoan.length;
                    dsten.splice(0,sotk);
                    taikhoan.splice(0,sotk);
                    passw.splice(0,sotk);
                    vaitro.splice(0,sotk);
                    dssdt.splice(0,sotk);
                    dsemail.splice(0,sotk);
                    dsdcuser.splice(0,sotk);
                    dstknh.splice(0,sotk);
                    dsfax.splice(0,sotk);
                    if (err) throw err;
                    var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var n = result.length;
                    for(var i = 0; i<n; i++){
                        dsten.push(result[i].HOTEN);
                        taikhoan.push(result[i].ID);
                        passw.push(result[i].PASS);
                        vaitro.push(result[i].MAND);
                        dsemail.push(result[i].EMAIL);
                        dssdt.push(result[i].SODT);
                        dsdcuser.push(result[i].DIACHI);
            dstknh.push(result[i].TKNH);
            dsfax.push(result[i].SOFAX);
                    }
                    });
                });
                    
            });

            app.post("/set/doigia",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tsanpham SET GIAHT= "+req.body.giasp1+" where MASP='"+req.body.masanpham+"';";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    var sosp=giasp.length;
                    giasp.splice(0,sosp);
                    if (err) throw err;
                    var sql = "SELECT * FROM tsanpham";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var cc = result.length;
                    console.log(""+cc)
                    for(var i = 0; i<cc; i++){
                        giasp.push(result[i].GIAHT);
                    }
                    });
                });
            });

            app.post("/guisanpham",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "INSERT INTO tsanpham (MASP,TENSP,GIAHT,QUYCACH) VALUES ('"+req.body.xmahang+"','"+req.body.xtenhang+"',"+req.body.xgia+",'"+req.body.xquycach+"')";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                maspcanluu=req.body.xmahang;
                console.log("thêm thành công");
                
                });
            });

            app.post("/themkhuyenmai",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tsanpham SET KM="+req.body.giatrikhuyenmai+", BATDAUKM='"+req.body.thoigiankhuyenmai+"' , KTKM='"+req.body.tgktkm+"' where MASP='"+req.body.makhuyenmai+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=gtkm.length;
                gtkm.splice(0,stk);
                tgkm.splice(0,stk);
                if (err) throw err;
                    var sql = "SELECT * FROM tsanpham";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        var n=result.length;
                        for(var i=0;i<n;i++){
                            gtkm.push(result[i].KM);
                            tgkm.push(result[i].BATDAUKM);
                        }
                    });
                
                });
            });

            app.post("/guisanphamluu",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tsanpham SET TENSP='"+req.body.xtenhang+"',GIAHT="+req.body.xgia+",QUYCACH='"+req.body.xquycach+"' where MASP='"+req.body.xmahang+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=giasp.length;
                giasp.splice(0,stk);
                masp.splice(0,stk);
                tensp.splice(0,stk);
                anhsp.splice(0,stk);
                dsqcsp.splice(0,stk);
                gtkm.splice(0,stk);
                tgkm.splice(0,stk);
                if (err) throw err;
                    var sql = "SELECT * FROM tsanpham";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        var n=result.length;
                        for(var i=0;i<n;i++){
                            giasp.push(result[i].GIAHT);
                            masp.push(result[i].MASP);
                            tensp.push(result[i].TENSP);
                            anhsp.push(result[i].HINHANH);
                            dsqcsp.push(result[i].QUYCACH);
                            gtkm.push(result[i].KM);
                            tgkm.push(result[i].BATDAUKM);
                        }
                    });
                console.log("thêm thành công");
                
                });
            });

            //new 
            
            // app.post("/guilienhe",urlencodedParser,function(req,res){
            //     if (err) throw err;
            //     var sql = "INSERT INTO tlienhe (HOTEN, EMAIL, NOIDUNG, THOIGIAN, TRANGTHAI) VALUES ('"+req.body.xten+"', '"+req.body.xmail+"', '"+req.body.xndung+"', '"+req.body.xtgian+"', '"+req.body.xtthai+"')";
            //     con.query(sql, function (err, result) {
            //     if (err) throw err;
            //         console.log("da gui tin");
            //     });
            // });

            app.post("/guiquytrinh",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "INSERT INTO tquytrinh (DOT, LOAIGA, SOLUONG, NGAYBATDAUNUOI, XUATCHUONG, CANNANGTB, DONVI, HAOHUT, CHIPHI, TRANGTHAI) VALUES ('"+req.body.xsodot+"', '"+req.body.xloaiga+"', '"+req.body.xsluong+"', '"+req.body.xbatdau+"', '"+req.body.xxchuong+"', '"+req.body.xcnang+"', '"+req.body.xdvi+"', '"+req.body.xhhut+"', '"+req.body.xcphi+"', '"+req.body.xtthai+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("da gui quy trinh thanh cong");
                });
            });

            app.get("/layquytrinh", function(req, res) {
                if (err) throw err;
                var sql = "SELECT * FROM tquytrinh ORDER BY DOT, LOAIGA" ;
                con.query(sql, function (err, result) {
                if (err) throw err;
                    var num, leng = result.length;
                    var dot =[], loaiga =[], sluong =[], batdau =[], xchuong =[], cnang =[], dvi =[], hhut = [], cphi =[], tthai=[];
                    for (num = 0; num < leng; num++) {
                        dot.push(result[num].DOT);
                        loaiga.push(result[num].LOAIGA);
                        sluong.push(result[num].SOLUONG);
                        batdau.push(result[num].NGAYBATDAUNUOI);
                        xchuong.push(result[num].XUATCHUONG);
                        cnang.push(result[num].CANNANGTB);
                        dvi.push(result[num].DONVI);
                        hhut.push(result[num].HAOHUT);
                        cphi.push(result[num].CHIPHI);
                        tthai.push(result[num].TRANGTHAI)
                    }
                    res.send({xleng: leng, xdot: dot, xloaiga: loaiga, xsluong: sluong, xbatdau: batdau, xxchuong: xchuong, xcnang: cnang, xdvi: dvi, xhhut: hhut, xcphi: cphi, xtthai: tthai})
                });
            });

            app.post("/suaquytrinh",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tquytrinh SET DOT = '"+req.body.xdot+"', LOAIGA = '"+req.body.xloaiga+"', SOLUONG = '"+req.body.xsluong+"', NGAYBATDAUNUOI = '"+req.body.xbatdau+"', XUATCHUONG = '"+req.body.xxchuong+"', CANNANGTB = '"+req.body.xcnang+"', DONVI = '"+req.body.xdvi+"', HAOHUT = '"+req.body.xhhut+"', CHIPHI = '"+req.body.xcphi+"' WHERE DOT = '"+req.body.xdot+"' AND LOAIGA = '"+req.body.xloaiga+"';";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("thong tin quy trinh da dc sua");
                });
            });

            app.post("/suatrangthaiquytrinh",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tquytrinh SET TRANGTHAI = '"+req.body.xtthai+"' WHERE DOT = '"+req.body.xdot+"' AND LOAIGA = '"+req.body.xloaiga+"';";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("trang thai da duoc cap nhat");
                });
            });

            app.post("/hoanthanhquytrinh",urlencodedParser,function(req,res){
                if (err) throw err;
                var tthai = "Đã hoàn thành";
                var sql = "UPDATE tquytrinh SET CANNANGTB = '"+req.body.xcnang+"', DONVI = '"+req.body.xdvi+"', HAOHUT = '"+req.body.xhhut+"', CHIPHI = '"+req.body.xcphi+"', TRANGTHAI='"+tthai+"' WHERE DOT = '"+req.body.xdot+"' AND LOAIGA = '"+req.body.xloaiga+"';";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("thong tin quy trinh da dc sua");
                });
            });

            app.post("/xoaquytrinh",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "DELETE FROM tquytrinh WHERE tquytrinh.DOT = '"+req.body.xdot+"' AND tquytrinh.LOAIGA = '"+req.body.xloaiga+"';";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("xoa quy trinh thanh cong");
                });
            });
            
            app.post("/nhaptonkho",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "INSERT INTO ttonkho (MASP, MAKHO, SOLUONG, NGAYSX, HANSD) VALUES ('"+req.body.xmasp+"', '"+req.body.xmakho+"', '"+req.body.xsl+"', '"+req.body.xnsx+"', '"+req.body.xhsd+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("da nhap kho");
                });
            });

            app.post("/guilienhe",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "INSERT INTO tlienhe (HOTEN, EMAIL, NOIDUNG, THOIGIAN, TRANGTHAI) VALUES ('"+req.body.xhoten+"', '"+req.body.xemail+"', '"+req.body.xnoidung+"', '"+req.body.xtgian+"', '"+req.body.xtthai+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("da nhap kho");
                });
            });
            //new 

            app.post("/guisanphamluu1",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tsanpham SET TENSP='"+req.body.xtenhang+"',GIAHT="+req.body.xgia+",QUYCACH='"+req.body.xquycach+"' where MASP='"+req.body.xmahang+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                maspcanluu=req.body.xmahang;
                var stk=giasp.length;
                giasp.splice(0,stk);
                masp.splice(0,stk);
                tensp.splice(0,stk);
                anhsp.splice(0,stk);
                dsqcsp.splice(0,stk);
                gtkm.splice(0,stk);
                tgkm.splice(0,stk);
                if (err) throw err;
                    var sql = "SELECT * FROM tsanpham";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        var n=result.length;
                        for(var i=0;i<n;i++){
                            giasp.push(result[i].GIAHT);
                            masp.push(result[i].MASP);
                            tensp.push(result[i].TENSP);
                            anhsp.push(result[i].HINHANH);
                            dsqcsp.push(result[i].QUYCACH);
                            gtkm.push(result[i].KM);
            tgkm.push(result[i].BATDAUKM);
                        }
                    });
                console.log("thêm thành công");
                
                });
            });

            app.post("/xoasanpham",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "DELETE FROM tsanpham where MASP='"+req.body.sanphamcanxoa+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var stk=giasp.length;
                giasp.splice(0,stk);
                masp.splice(0,stk);
                tensp.splice(0,stk);
                anhsp.splice(0,stk);
                dsqcsp.splice(0,stk);
                gtkm.splice(0,stk);
                tgkm.splice(0,stk);
                if (err) throw err;
                    var sql = "SELECT * FROM tsanpham";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        var n=result.length;
                        for(var i=0;i<n;i++){
                            giasp.push(result[i].GIAHT);
                            masp.push(result[i].MASP);
                            tensp.push(result[i].TENSP);
                            anhsp.push(result[i].HINHANH);
                            dsqcsp.push(result[i].QUYCACH);
                            gtkm.push(result[i].KM);
                            tgkm.push(result[i].BATDAUKM);
                        }
                    });
                });
            });

            app.post("/posttkxoa",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "DELETE FROM tuser where id='"+req.body.tkcanxoa+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sotk = taikhoan.length;
                dsten.splice(0,sotk);
                taikhoan.splice(0,sotk);
                passw.splice(0,sotk);
                vaitro.splice(0,sotk);
                dssdt.splice(0,sotk);
                dsemail.splice(0,sotk);
                dsdcuser.splice(0,sotk);
                dstknh.splice(0,sotk);
                dsfax.splice(0,sotk);
                if (err) throw err;
                var sql = "SELECT * FROM tuser";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var n = result.length;
                for(var i = 0; i<n; i++){
                    dsten.push(result[i].HOTEN);
                    taikhoan.push(result[i].ID);
                    passw.push(result[i].PASS);
                    vaitro.push(result[i].MAND);
                    dsemail.push(result[i].EMAIL);
                    dssdt.push(result[i].SODT);
                    dsdcuser.push(result[i].DIACHI);
                    dstknh.push(result[i].TKNH);
                    dsfax.push(result[i].SOFAX);
                    }
                    });
                });
            });
            app.post("/posttksua",urlencodedParser,function(req,res){
                if(req.body.xmatkhau.length==0){
                    if (err) throw err;
                    var sql = "UPDATE tuser SET MAND='"+req.body.xquyen+"' where ID='"+req.body.tkcansua+"'";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    console.log("vao 1")
                    var sotk = taikhoan.length;
                    dsten.splice(0,sotk);
                    taikhoan.splice(0,sotk);
                    passw.splice(0,sotk);
                    vaitro.splice(0,sotk);
                    dssdt.splice(0,sotk);
                    dsemail.splice(0,sotk);
                    dsdcuser.splice(0,sotk);
                    dstknh.splice(0,sotk);
                    dsfax.splice(0,sotk);
                    if (err) throw err;
                    var sql = "SELECT * FROM tuser";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var n = result.length;
                    for(var i = 0; i<n; i++){
                        dsten.push(result[i].HOTEN);
                        taikhoan.push(result[i].ID);
                        passw.push(result[i].PASS);
                        vaitro.push(result[i].MAND);
                        dsemail.push(result[i].EMAIL);
                        dssdt.push(result[i].SODT);
                        dsdcuser.push(result[i].DIACHI);
                        dstknh.push(result[i].TKNH);
                        dsfax.push(result[i].SOFAX);
                        }
                        });
                    });
                }else{
                    if (err) throw err;
                var sql = "UPDATE tuser SET MAND='"+req.body.xquyen+"',PASS='"+req.body.xmatkhau+"' where ID='"+req.body.tkcansua+"'"
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                console.log("vao 2")
                var sotk = taikhoan.length;
                dsten.splice(0,sotk);
                taikhoan.splice(0,sotk);
                passw.splice(0,sotk);
                vaitro.splice(0,sotk);
                dssdt.splice(0,sotk);
                dsemail.splice(0,sotk);
                dsdcuser.splice(0,sotk);
                dstknh.splice(0,sotk);
                dsfax.splice(0,sotk);
                if (err) throw err;
                var sql = "SELECT * FROM tuser";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var n = result.length;
                for(var i = 0; i<n; i++){
                    dsten.push(result[i].HOTEN);
                    taikhoan.push(result[i].ID);
                    passw.push(result[i].PASS);
                    vaitro.push(result[i].MAND);
                    dsemail.push(result[i].EMAIL);
                    dssdt.push(result[i].SODT);
                    dsdcuser.push(result[i].DIACHI);
                    dstknh.push(result[i].TKNH);
                    dsfax.push(result[i].SOFAX);
                    }
                    });
                });
                }
                
            });
            app.post("/guigiohang",urlencodedParser,function(req,res){
                if (err) throw err;
                    var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    spgiohang.splice(0,spgiohang.length);
                    slgiohang.splice(0,slgiohang.length);
                    var cc = result.length;
                    var biengiohang=false;
                    for(var i = 0; i<cc; i++){
                        if(req.body.masp==result[i].MASP){
                            biengiohang=true;
                        }
                    }
                    if(biengiohang==true){

                    }else{
                        if (err) throw err;
                        var sql = "INSERT INTO tgiohang (ID,MASP,SOLUONG) VALUES ('"+req.user.ID+"','"+req.body.masp+"','"+req.body.soluongmua+"')";
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("da them gio hang thanh cong");
                        if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                        spgiohang.splice(0,spgiohang.length);
                        slgiohang.splice(0,slgiohang.length);
                            var cc = result.length;
                            for(var i = 0; i<cc; i++){
                                spgiohang.push(result[i].MASP);
                                slgiohang.push(result[i].SOLUONG);
                            }
                            });
                        });

                    }

                });
                
            });
            app.post("/guigiohang1",urlencodedParser,function(req,res){
                if (err) throw err;
                    var sql = "UPDATE tgiohang SET SOLUONG="+req.body.soluongmua+" where ID='"+req.user.ID+"' AND MASP='"+req.body.masp+"'";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                        spgiohang.splice(0,spgiohang.length);
                        slgiohang.splice(0,slgiohang.length);
                            var cc = result.length;
                            for(var i = 0; i<cc; i++){
                                spgiohang.push(result[i].MASP);
                                slgiohang.push(result[i].SOLUONG);
                            }
                            });

                });
                
            });
            app.get("/test6",function(req,res){
    
                if(req.isAuthenticated()){
                    if(bienlogout==true){
                        res.send({giatrilg:"NULL"});
                    }else{
                        if (err) throw err;
                        var sql = "SELECT * FROM tgiohang where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                        var stk=spgiohang.length;
                        spgiohang.splice(0,stk);
                        var cc = result.length;
                        for(var i = 0; i<cc; i++){
                            spgiohang.push(result[i].MASP);
                        }
                        });
                        res.send({giatrilg:req.user.MAND});
                    }
                }else{
                    res.send({giatrilg:"NULL"});
                }
            });
            app.get("/getmakichhoat",function(req,res){
                    var makhtk=0;
                        if (err) throw err;
                        var sql = "SELECT MAKH FROM tuser where ID='"+req.user.ID+"'";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                        makhtk=result[0].MAKH;
                        res.send({giatrikh:makhtk});
                        });
                    // res.render("/getmakichhoat");
                    
            });
            app.get("/laymadh",function(req,res){
                    console.log("vao day nef");
                    if (err) throw err;
                    var sql = "SELECT MADH FROM tdonhang ORDER BY MADH ASC";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    var somadh=Number(result.length);
                    res.send({soluongdh:result[somadh-1].MADH});
                    });
        });

        app.get("/laythongtintk",function(req,res){
            console.log("vao day nef");
            if (err) throw err;
            var sql = "SELECT * FROM tuser where ID='"+req.user.ID+"'";
            con.query(sql, function (err, result, fields) {
            if (err) throw err;
                res.send({idget:req.user.ID,hotenget:result[0].HOTEN,emailget:result[0].EMAIL,sdtget:result[0].SODT,dcget:result[0].DIACHI,stkget:result[0].TKNH,faxget:result[0].SOFAX,vaitroget:result[0].VAITRO,passget:result[0].PASS});
            });
        });
            app.post("/khthanhcong",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "UPDATE tuser SET MAND= 'KH' where MAKH= '"+req.body.makichhoat+"';";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    console.log("kich hoat thanh cong");
                });
            });
            app.post("/guimaxem",urlencodedParser,function(req,res){
                maxem=req.body.tmaxem;
            });
            app.post("/guittnhapkho",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM ttonkho";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                if(result.length==0){
                    for(var k=0;k<req.body.postmakho.length;k++){
                        if (err) throw err;
                        console.log(req.body.postnsx[k]+" " +req.body.posthsd[k]);
                        var sql = "INSERT INTO ttonkho (MAKHO,MASP,SOLUONG,NGAYSX,HANSD) VALUES ('"+req.body.postmakho[k]+"','"+req.body.postmasp[k]+"',"+req.body.postsoluong[k]+",'"+req.body.postnsx[k]+"','"+req.body.posthsd[k]+"')";
                        con.query(sql, function (err, result, fields) {
                        if (err) throw err;
                            console.log("them kho thanh cong");
                        });
                    }
                }else{
                    for(var i=0;i<req.body.postmakho.length;i++){
                        var xet=0;
                        var soluong=0
                        for(var j=0;j<result.length;j++){
                            var datensx= new Date(result[j].NGAYSX);
                            var datehsd= new Date(result[j].HANSD);
                            var ngaysx=datensx.getFullYear()+"-"+(datensx.getMonth()+1)+"-"+datensx.getDate();
                            var hansd=datehsd.getFullYear()+"-"+(datehsd.getMonth()+1)+"-"+datehsd.getDate();
                            if(req.body.postmakho[i]==result[j].MAKHO && req.body.postmasp[i]==result[j].MASP && req.body.postnsx[i]===ngaysx && req.body.posthsd[i]===hansd){
                                xet=1;
                                 soluong = Number(req.body.postsoluong[i])+Number(result[j].SOLUONG);
                            }
                        }
                        if(xet==1){
                            if (err) throw err;
                                var sql = "UPDATE ttonkho SET SOLUONG="+soluong+" where MAKHO= '"+req.body.postmakho[i]+"' AND MASP='"+req.body.postmasp[i]+"' AND NGAYSX='"+req.body.postnsx[i]+"' AND HANSD='"+req.body.posthsd[i]+"';";
                                con.query(sql, function (err, result, fields) {
                                if (err) throw err;
                                    console.log("update thanh cong");
                                });
                        }else{
                            if (err) throw err;
                                var sql = "INSERT INTO ttonkho (MAKHO,MASP,SOLUONG,NGAYSX,HANSD) VALUES ('"+req.body.postmakho[i]+"','"+req.body.postmasp[i]+"',"+req.body.postsoluong[i]+",'"+req.body.postnsx[i]+"','"+req.body.posthsd[i]+"')";
                                con.query(sql, function (err, result, fields) {
                                if (err) throw err;
                                    console.log("them kho thanh cong");
                                });
                        }
                    }
                }
                });
            });
            app.post("/guiemailkhoiphuc",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tuser where EMAIL='"+req.body.emailkp+"'";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                transporter.verify(function(error, success) {
                    // Nếu có lỗi.
                    if (error) {
                        console.log(error);
                    } else { //Nếu thành công.
                        console.log('Kết nối thành công!');
                        var mail = {
                            from: 'duongvanlypro@gmail.com', // Địa chỉ email của người gửi
                            to: ''+req.body.emailkp, // Địa chỉ email của người gửi
                            subject: 'Longbinhfood Yêu cầu cấp lại mật khẩu từ người dùng '+result[0].ID, // Tiêu đề mail
                            text: 'Chào Bạn '+result[0].ID+ ", mật khẩu hiện tại của bạn là: "+result[0].PASS, // Nội dung mail dạng text
                        };
                        //Tiến hành gửi email
                        transporter.sendMail(mail, function(error, info) {
                            if (error) { // nếu có lỗi
                                console.log(error);
                            } else { //nếu thành công
                                console.log('Email sent: ' + info.response);
                            }
                        });
                    }
                });
                console.log("them kho thanh cong" + result[0].PASS);
                });
            });
            app.post("/guikhuyenmai",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tkhuyenmai";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    sttcanluu=result[Number(result.length)-1].STT;
                    if (err) throw err;
                    var sql = "INSERT INTO tkhuyenmai (TIEUDE, GIOITHIEU, NOIDUNG, HINHANH, THOIGIAN) VALUES ('"+req.body.xtde+"', '"+req.body.xgthieu+"', '"+req.body.xndung+"', '"+req.body.xhanh+"', '"+req.body.xtgian+"')";
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                        console.log("them khuyen mai thanh cong");
                    });
                });
            });
            

            app.get("/laykhuyenmai", function(req, res) {
                if (err) throw err;
                var sql = "SELECT * FROM tkhuyenmai ORDER BY THOIGIAN DESC, STT DESC" ;
                con.query(sql, function (err, result) {
                if (err) throw err;
                    var num, leng = result.length;
                    var stt =[], tde =[], gthieu =[], ndung =[], hanh =[], tgian =[];
                    for (num = 0; num < leng; num++) {
                        stt.push(result[num].STT);
                        tde.push(result[num].TIEUDE);
                        gthieu.push(result[num].GIOITHIEU);
                        ndung.push(result[num].NOIDUNG);
                        hanh.push(result[num].HINHANH);
                        tgian.push(result[num].THOIGIAN);
                    }
                    res.send({xleng: leng, xstt: stt, xtde: tde, xgthieu: gthieu, xndung: ndung, xhanh: hanh, xtgian: tgian})
                });
            });

            app.post("/xoakhuyenmai",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "DELETE FROM tkhuyenmai WHERE tkhuyenmai.STT = "+req.body.xstt+";";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("xoa khuyen mai thanh cong");
                });
            });
            
            // New (
            app.post("/guisukien",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "INSERT INTO tsukien (TIEUDE, GIOITHIEU, NOIDUNG, HINHANH, THOIGIAN) VALUES ('"+req.body.xtde+"', '"+req.body.xgthieu+"', '"+req.body.xndung+"', '"+req.body.xhanh+"', '"+req.body.xtgian+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("them su kien thanh cong");
                });
            });

            app.post("/xoasukien",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "DELETE FROM tsukien WHERE tsukien.STT = "+req.body.xstt+";";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("xoa su kien thanh cong");
                });
            }); 
            
            app.get("/laysukien", function(req, res) {
                if (err) throw err;
                var sql = "SELECT * FROM tsukien ORDER BY THOIGIAN DESC" ;
                con.query(sql, function (err, result) {
                if (err) throw err;
                    var num, leng = result.length;
                    var stt =[], tde =[], gthieu =[], ndung =[], hanh =[], tgian =[];
                    for (num = 0; num < leng; num++) {
                        stt.push(result[num].STT);
                        tde.push(result[num].TIEUDE);
                        gthieu.push(result[num].GIOITHIEU);
                        ndung.push(result[num].NOIDUNG);
                        hanh.push(result[num].HINHANH);
                        tgian.push(result[num].THOIGIAN);
                    }
                    res.send({xleng: leng, xstt: stt, xtde: tde, xgthieu: gthieu, xndung: ndung, xhanh: hanh, xtgian: tgian})
                });
            });

            app.post("/guibeplb",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "INSERT INTO tbeplb (TIEUDE, GIOITHIEU, NOIDUNG, HINHANH, THOIGIAN) VALUES ('"+req.body.xtde+"', '"+req.body.xgthieu+"', '"+req.body.xndung+"', '"+req.body.xhanh+"', '"+req.body.xtgian+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("them su kien thanh cong");
                });
            });

            app.post("/xoabeplb",urlencodedParser,function(req,res){
                if (err) throw err;
                var sql = "DELETE FROM tbeplb WHERE tbeplb.STT = "+req.body.xstt+";";
                con.query(sql, function (err, result) {
                if (err) throw err;
                    console.log("xoa su kien thanh cong");
                });
            }); 
            
            app.get("/laybeplb", function(req, res) {
                if (err) throw err;
                var sql = "SELECT * FROM tbeplb ORDER BY THOIGIAN DESC" ;
                con.query(sql, function (err, result) {
                if (err) throw err;
                    var num, leng = result.length;
                    var stt =[], tde =[], gthieu =[], ndung =[], hanh =[], tgian =[];
                    for (num = 0; num < leng; num++) {
                        stt.push(result[num].STT);
                        tde.push(result[num].TIEUDE);
                        gthieu.push(result[num].GIOITHIEU);
                        ndung.push(result[num].NOIDUNG);
                        hanh.push(result[num].HINHANH);
                        tgian.push(result[num].THOIGIAN);
                    }
                    res.send({xleng: leng, xstt: stt, xtde: tde, xgthieu: gthieu, xndung: ndung, xhanh: hanh, xtgian: tgian})
                });
            });
            // New )
            app.get("/laythongtindonhang",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madonhang.length;
                anhtt.splice(0,sodh);
                madonhang.splice(0,sodh);
                idkh.splice(0,sodh);
                tonggia.splice(0,sodh);
                ngaytaodh.splice(0,sodh);
                ghichunv.splice(0,sodh);
                dcdh.splice(0,sodh);
                sdtdh.splice(0,sodh);
                ttdh.splice(0,sodh);
                trangthaidh.splice(0,sodh);
                dskv.splice(0,sodh);
                dsngayht.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    anhtt.push(result[i].HINHANH);
                    madonhang.push(result[i].MADH);
                    idkh.push(result[i].ID);
                    tonggia.push(result[i].TONGTIEN);
                    ngaytaodh.push(result[i].NGAYTAO);
                    ghichunv.push(result[i].GHICHUNV);
                    dcdh.push(result[i].DIACHI);
                    sdtdh.push(result[i].SDT);
                    ttdh.push(result[i].THANHTOAN);
                    trangthaidh.push(result[i].TRANGTHAI);
                    dskv.push(result[i].KHUVUC);
                    dsngayht.push(result[i].NGAYHT);
                }
                res.send({hanhtt:anhtt,hmadh:madonhang,hngayht:dsngayht,hidkh:idkh,htongtien:tonggia,htrangthai:trangthaidh,hghichu:ghichukh,hghichunv:ghichunv,hngaytao:ngaytaodh,hdcdh:dcdh,hdskv:dskv,hsdtdh:sdtdh,httdh:ttdh,hdsid:taikhoan,hdsten:dsten});
                });
            });
            app.get("/laythongtindonhang1",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tdonhang ORDER BY NGAYTAO DESC";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                var sodh=madonhang.length;
                anhtt.splice(0,sodh);
                madonhang.splice(0,sodh);
                idkh.splice(0,sodh);
                tonggia.splice(0,sodh);
                ngaytaodh.splice(0,sodh);
                ghichunv.splice(0,sodh);
                dcdh.splice(0,sodh);
                sdtdh.splice(0,sodh);
                ttdh.splice(0,sodh);
                trangthaidh.splice(0,sodh);
                dskv.splice(0,sodh);
                dsngayht.splice(0,sodh);
                var cc = result.length;
                for(var i = 0; i<cc; i++){
                    anhtt.push(result[i].HINHANH);
                    madonhang.push(result[i].MADH);
                    idkh.push(result[i].ID);
                    tonggia.push(result[i].TONGTIEN);
                    ngaytaodh.push(result[i].NGAYTAO);
                    ghichunv.push(result[i].GHICHUNV);
                    dcdh.push(result[i].DIACHI);
                    sdtdh.push(result[i].SDT);
                    ttdh.push(result[i].THANHTOAN);
                    trangthaidh.push(result[i].TRANGTHAI);
                    dskv.push(result[i].KHUVUC);
                    dsngayht.push(result[i].NGAYHT);
                }
                res.send({hanhtt:anhtt,hmadh:madonhang,hngayht:dsngayht,hidkh:idkh,htongtien:tonggia,htrangthai:trangthaidh,hghichu:ghichukh,hghichunv:ghichunv,hngaytao:ngaytaodh,hdcdh:dcdh,hdskv:dskv,hsdtdh:sdtdh,httdh:ttdh,hdsid:taikhoan,hdsten:dsten});
                });
            });

            app.post("/guithongbaonv",urlencodedParser,function(req,res){
                if(req.body.xsomanv==0){
                    if (err) throw err;
                    var sql = "UPDATE tthongbao SET NOIDUNG='"+req.body.xnoidung+"' where MANV='NVBH'" ;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("luu vao bh")
                    });
                }else{
                    if (err) throw err;
                    var sql = "UPDATE tthongbao SET NOIDUNG='"+req.body.xnoidung+"' where MANV='NVGH'" ;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("luu vao gh")
                    });
                }
                
            });
            app.get("/getnoidungtb",function(req,res){
                if (err) throw err;
                var sql = "SELECT * FROM tthongbao";
                con.query(sql, function (err, result, fields) {
                if (err) throw err;
                    var dsmanv=[];
                    var dsnoidung=[];
                    var n=result.length;
                    for(var i=0;i<n;i++){
                        dsmanv.push(result[i].MANV);
                        dsnoidung.push(result[i].NOIDUNG);
                    }
                    res.send({hmanv:dsmanv,hnoidung:dsnoidung});
                });
            })
            app.get("/ttt",function(req,res){
                if (err) throw err;
                    var sql = "SELECT * FROM tsanpham";
                    con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                        var stk=giasp.length;
                        giasp.splice(0,stk);
                        masp.splice(0,stk);
                        tensp.splice(0,stk);
                        anhsp.splice(0,stk);
                        dsqcsp.splice(0,stk);
                        gtkm.splice(0,stk);
                        tgkm.splice(0,stk);
                        dsnktkm.splice(0,stk);
                        var n=result.length;
                        for(var i=0;i<n;i++){
                            giasp.push(result[i].GIAHT);
                            masp.push(result[i].MASP);
                            tensp.push(result[i].TENSP);
                            anhsp.push(result[i].HINHANH);
                            dsqcsp.push(result[i].QUYCACH);
                            gtkm.push(result[i].KM);
                            tgkm.push(result[i].BATDAUKM);
                            dsnktkm.push(result[i].KTKM);
                        }
                    });
                res.send({giasanpham:giasp,msp:masp,tensanpham:tensp,hinhanhsp:anhsp,qcsp:dsqcsp,xdskm:gtkm,xdsnkm:tgkm,xdsnktkm:dsnktkm});
            });
            app.post("/guisokm",urlencodedParser,function(req,res){
                console.log(req.body.xso)
                sokm=req.body.xso;
                res.redirect("/");
            });
            app.post("/guisosk",urlencodedParser,function(req,res){
                console.log(req.body.xso)
                sosk=req.body.xso;
                res.redirect("/");
            });
            app.post("/guisobep",urlencodedParser,function(req,res){
                console.log(req.body.xso)
                sobep=req.body.xso;
                res.redirect("/");
            });
});





app.get("/trasokm",function(req,res){
    res.send({xsokm:sokm});
    sokm=-1;
});

app.get("/trasosk",function(req,res){
    res.send({xsosk:sosk});
    sosk=-1;
});

app.get("/trasobep",function(req,res){
    res.send({xsobep:sobep});
    sobep=-1;
});


app.post("/set/logout",urlencodedParser,function(req,res){
    if(req.body.Logout==1){
        bienlogout=true;
        res.redirect("/");
    }
});


                
app.get("/test1",function(req,res){
    
    if(req.isAuthenticated()){
        if(bienlogout==true){
            res.send({giatrilg:"NULL"});
        }else{
            res.send({giatrilg:req.user.MAND,idlogin:req.user.ID});
        }
    }else{
        res.send({giatrilg:"NULL"});
    }
});

app.get("/test2",function(req,res){
    
    if(req.isAuthenticated()){
        if(bienlogout==true){
            res.send({giatrilg:"NULL"});
        }else{
            res.send({giatrilg:req.user.MAND,idlogin:req.user.ID});
        }
    }else{
        res.send({giatrilg:"NULL"});
    }
});



app.get("/test3",function(req,res){
    
    if(req.isAuthenticated()){
        if(bienlogout==true){
            res.send({giatrilg:"NULL"});
        }else{
            res.send({giatrilg:req.user.MAND});
        }
    }else{
        res.send({giatrilg:"NULL"});
    }
});

app.get("/test4",function(req,res){
    
    if(req.isAuthenticated()){
        if(bienlogout==true){
            res.send({giatrilg:"NULL"});
        }else{
            res.send({giatrilg:req.user.MAND});
        }
    }else{
        res.send({giatrilg:"NULL"});
    }
});

app.get("/test",function(req,res){
    if(req.isAuthenticated()){
        res.render("test",{value1:req.user.MAND});
    }else{
        res.render("test",{value1:"NULL"});
    }
});

app.get("/Khuyenmai/Khuyen_mai",function(req,res){
    res.render("Khuyenmai/Khuyen_mai",{value1:"1"});
});

app.get("/testthu",function(req,res){
    res.render("testthu",{giatri1:[1456,26,3]});
});

app.get("/Login2",function(req,res){
    res.send({gtlogin:req.user.ID});
});
//bao dang ky thanh cong


app.get("/tk",function(req,res){
    res.send({danhsachid:taikhoan,danhsachemail:dsemail,danhsachsdt:dssdt});
});

app.get("/dangky",function(req,res){
    if(req.isAuthenticated()){
        res.render("dangky.html");
    }else{
        res.send("Bạn cần đăng nhập");
    }
    
});

module.exports = {
    sayHello : function(){
        return 'hello';
    }
}

app.get("/test10",function(req,res){
    if(req.isAuthenticated()){
        if(bienlogout==true){
            res.send({giatrilg:"NULL"});
        }else{
            idnd=req.user.ID;
            res.send({giatrilg:req.user.MAND});
        }
    }else{
        res.send({giatrilg:"NULL"});
    }
});
var dsidnd=[];
var dsidsocket=[];
io.on("connection", function(socket){
    socket.on("client-vao-chat",function(data){
        
        dsidnd.push(idnd);
        dsidsocket.push(socket.id);
        for(i=0;i<dsidnd.length;i++){
            console.log("co nguoi ket noi " +dsidsocket[i]+" va "+dsidnd[i]);
        }
        socket.emit("server-send-ds",[dsidnd,dsidsocket]);
    })
    socket.on("client-send-chat",function(data){
        for(var i=0;i<dsidnd.length;i++){
            if(dsidnd[i]==data[0]){
                io.to(dsidsocket[i]).emit("private-send",data);
            }
        }
    });
    socket.on("disconnect",function(){
        for(i=0;i<dsidnd.length;i++){
            if(dsidsocket[i]==socket.id){
                console.log("ngat tại"+socket.id);
                dsidnd.splice(i,1);
                dsidsocket.splice(i,1);
            }
        }
        socket.emit("server-send-ds",[dsidnd,dsidsocket]);
    });
});
