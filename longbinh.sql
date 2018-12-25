-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 18, 2018 lúc 08:13 AM
-- Phiên bản máy phục vụ: 10.1.33-MariaDB
-- Phiên bản PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `longbinh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbeplb`
--

CREATE TABLE `tbeplb` (
  `STT` int(5) NOT NULL,
  `TIEUDE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GIOITHIEU` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NOIDUNG` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `HINHANH` varchar(100) NOT NULL,
  `THOIGIAN` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tbeplb`
--

INSERT INTO `tbeplb` (`STT`, `TIEUDE`, `GIOITHIEU`, `NOIDUNG`, `HINHANH`, `THOIGIAN`) VALUES
(5, 'GÀ HẤP XÌ DẦU CHO NGÀY CUỐI TUẦN', 'Gà hấp xì dầu . Khá đơn giản . \r\n\r\nThịt gà chín mềm, ngấm đều gia vị xì dầu rất đậm đà và ngon miệng .\r\n\r\nChúc các bạn có món ăn ngon cuối tuần cùng với gia đình.', 'GÀ HẤP XÌ DẦU CHO NGÀY CUỐI TUẦN\r\n\r\n- Gà hấp xì dầu cũng là một món ăn khá đơn giản chỉ việc đem gà ướp với xì dầu rồi đem hấp là có một món ăn rất hấp dẫn có thịt mềm, vị đậm đà cho bữa cơm gia đình bạn rồi \r\n\r\n- Các nguyên liệu cần chuẩn bị bao gồm:\r\n\r\n+ 1 con gà ta khoảng 1.3 kg.\r\n\r\n+ 1 nhánh gừng gừng.\r\n\r\n+ 30 ml rượu .\r\n\r\n+ Xì dầu.\r\n\r\n+ Gia vị: Muối, đường, bột nêm.\r\n\r\n- Cách làm món gà hấp xì dầu như sau:\r\n\r\nGà đem rửa sạch lại rồi lau khô\r\n\r\nGừng rửa sạch, thái lát. Hành lá rửa sạch cắt riêng phần đầu trắng ra. Tỏi bóc vỏ, băm nhỏ.\r\n\r\nNhồi phần đầu trắng hành và gừng vào trong bụng con gà\r\n\r\nTrộn đều 6 thìa canh xì dầu cùng với 1 thìa canh đường và tỏi băm\r\n\r\nSau đó, quét đều hỗn hợp xì dầu trên lên khắp mình con gà, để ướp khoảng 30 phút cho ngấm đều gia vị.\r\n\r\nSau khi ướp, cho gà vào lò vi sóng quay 2 phút cho mặt da gà se lại rồi đem gà đi hấp khoảng 30 phút cho gà chín là được\r\n\r\nGà hấp xì dầu . Khá đơn giản . \r\n\r\nThịt gà chín mềm, ngấm đều gia vị xì dầu rất đậm đà và ngon miệng .\r\n\r\nChúc các bạn có món ăn ngon cuối tuần cùng với gia đình.\r\n\r\nXem thêm nhiều món ăn :\r\n\r\nhttp://longbinhfood.vn/bep-an-long-binh\r\n\r\n-----------------------------------------\r\n\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.\r\n\r\nMọi thông tin về sử dụng sản phẩm của công ty Long Bình vui lòng liên hệ:\r\n\r\nCông Ty TNHH Chăn Nuôi Long Bình( chi nhánh 1)\r\n\r\nSố 438, Võ Văn Kiệt, F Cô Giang , Quận 1, TP HCM\r\n\r\nHotline: 0916.610.228\r\n\r\nWebsite: http://www.longbinhfood.vn\r\n\r\nRất hân hạnh phục vụ quý khách hàng.', '../HinhAnh/ga-hap-xi-dau-long-binh.jpg', '2016-08-13'),
(6, 'GÀ NƯỚNG MẬT ONG NGON MÊ LY', 'Gà nướng mật ong kích thích những ai kén ăn.\r\n\r\nVới cách làm mới lạ và đơn giản này, món gà quay mật ong sẽ trở nên thơm ngon và cực hấp dẫn. Cả nhà bạn chắc chắn sẽ thích mê.', 'Gà nướng mật ong ngon mê ly\r\n\r\nGà nướng mật ong kích thích những ai kén ăn.\r\n\r\nVới cách làm mới lạ và đơn giản này, món gà quay mật ong sẽ trở nên thơm ngon và cực hấp dẫn. Cả nhà bạn chắc chắn sẽ thích mê.\r\n\r\nNguyên liệu\r\n\r\nGà 1 con\r\nMật ong 1 bát\r\nHoa hồi 8 chiếc\r\nThảo quả 2 chiếc\r\nQuế 5 thanh\r\nTỏi 1 củ\r\nGừng 1 củ\r\nHành lá 1 nắm\r\nXì dầu 1 bát\r\nMạch nha 1/2 bát\r\nNgũ vị hương 1 thìa\r\nMuối 1 thìa\r\nđường 1 thìa\r\nHạt tiêu 1 thìa\r\n\r\nHướng Dẫn\r\n\r\nSơ chế nguyên liệu:\r\n\r\n- Gà vặt lông, rửa sạch, bỏ lòng mề. Để gà trắng, sạch và hết mùi hôi, bạn hãy dùng rượu trắng và muối xát đều lên toàn bộ con gà rồi xả lại với nước sạch. \r\n\r\n- Tỏi bóc vỏ, gừng cạo vỏ rồi thái nhỏ, hành lá rửa sạch.\r\n\r\nCách làm: \r\n\r\nBước 1: Bạn cho 1 thìa dầu ăn vào nồi, thêm hoa hồi, thảo quả, quế, tỏi, hành lá, gừng vào đảo đều.\r\nBước 2: Sau đó, bạn thêm 2 lít nước, 1 bát xì dầu, 1/2 bát mạch nha, 1 thìa ngũ vị hương, 1 thìa muối, 1 thìa hạt tiêu, 1 thìa đường vào nồi, khuấy đều tay. Đậy nắp vung lại rồi đun đến khi nước sôi thì thêm 1 bát mật ong và gà vào đun tiếp. \r\nBước 3: Đun sôi khoảng 5 phút thì vớt gà ra, bỏ vào lò quay 10 phút ở nhiệt độ 150 độ C. \r\nBước 4: Bạn cho dầu ăn vào chảo, đun sôi rồi tưới đều lên toàn bộ con gà. Cuối cùng, bạn chặt gà thành từng miếng vừa ăn ra đĩa và thưởng thức\r\nnguồn feedy.vn', '../HinhAnh/gaquay4.png', '2016-07-22'),
(7, 'CHÂN GÀ NGÂM MẮM ỚT CHUA NGỌT TÔI CŨNG MÊ, BẠN THÌ SAO?', 'Những chiếc chân gà có vị chua - cay - mặn - ngọt, thêm vị nồng của xả sẽ khiến bất cứ ai cũng muốn ăn mãi không thôi.', 'Những chiếc chân gà có vị chua - cay - mặn - ngọt, thêm vị nồng của xả sẽ khiến bất cứ ai cũng muốn ăn mãi không thôi.\r\n\r\nNguyên liệu\r\n\r\n(Phần ăn dành cho 2 người)\r\n\r\nChân gà 500 g\r\nXả 3 củ\r\nGừng 3 củ\r\nMuối 153/50 thìaNước mắm 1 bátDấm 1/2 bátđường 1 thìa\r\nTỏi 2 củ\r\nQuất 8 quả\r\nLá chanh 5 lá\r\nớt tươi 1 quả\r\n\r\nHướng dẫn\r\n\r\nBước 1: Chân gà mua về rửa sạch, bỏ móng rồi chặt đôi cho ra bát.\r\nBước 2: Cho chân gà vào nồi, thêm 2 củ xả cắt đôi, 1 củ gừng thái lát, 2 thìa muối rồi đổ nước xâm xấp mặt rồi đun sôi. Khi đun bạn nhớ hớt bọt đi nhé!\r\nBước 3: Vớt gà ra bát nước đá. Bạn ngâm chân gà với nước đá 5 phút rồi bỏ gà vào ngăn mát tủ lạnh 20 phút nữa. \r\nBước 4: Cho 2/3 bát nước mắm, 1/2 bát dấm, 2 bát nước, 1 thìa đường, 1 thìa muối vào nồi, khuấy đều rồi đun sôi.\r\nBước 5: Cho chân gà vào lọ, thêm xả, ớt, lá chanh thái nhỏ, tỏi bóc vỏ, quất cắt đôi, gừng thái lát và nước mắm ngâm chân gà vào, đậy kín nắp rồi ngâm trong 1 ngày là có thể ăn được rồi.\r\nBước 6: Bạn cho chân gà ra đĩa và thưởng thức thôi. \r\nnguồn feedy.vn', '../HinhAnh/chan6.jpg', '2016-07-19'),
(8, 'GÀ RÁN TẠI NHÀ - NGON NHƯ NGOÀI TIỆM', 'Gà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.', '\r\nLong Bình foods hướng dẫn bạn làm gà rán tại nhà - ngon như ngoài tiệm.\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.\r\nMọi thông tin về sử dụng sản phẩm của công ty Long Bình vui lòng liên hệ:\r\nCông Ty TNHH Chăn Nuôi Long Bình( chi nhánh 1)\r\nSố 438, Võ Văn Kiệt, F Cô Giang , Quận 1, TP HCM\r\nHotline: 0916.610.228\r\nWebsite: http://www.longbinhfood.vn\r\nRất hân hạnh phục vụ quý khách hàng.', '../HinhAnh/mon-ngon-long-binh-food.jpg', '2016-07-15'),
(9, 'ĐÙI GÀ ÁP CHẢO XỐT THƠM', 'Đùi gà áp chảo xốt thơm.\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.', '* Nguyên liệu:\r\n\r\n2 chiếc đùi gà góc tư\r\n½ củ hành tây\r\n¼ ớt chuông xanh\r\n¼ trái thơm (dứa) chín\r\n2 trái ớt sừng\r\n15 gam gừng\r\n1 muỗng hành tím băm\r\n2 muỗng nước tỏi\r\n2 muỗng nước hành tím\r\n2 chén nước dừa tươi\r\nRau xà lách\r\nGia vị: Dầu ăn, dầu điều, tiêu, nước mắm, tương ớt, nước bột năng, nước tương, hạt nêm.\r\nCác bước thực hiện món đùi gà áp chảo xốt thơm:\r\n\r\n\r\n* Cách làm: \r\nĐùi gà góc tư rửa sạch, lọc bỏ xương rồi bạn đem ướp với 2 nước hành tím + 2 nước tỏi + 1 nước mắm + ½ tiêu + 1 nước tương + 1 hạt nêm. Thời gian khoảng 15-10 phút để thịt gà ngấm gia vị.\r\nThơm (dứa): Gọt vỏ, bỏ phần mắt dứa, thái rẻ quạt\r\nHành tây: Bóc vỏ, thái hình quả trám.\r\nGừng: Cạo vỏ, thái hình thoi.\r\nỚt chuông xanh, ớt sừng: Rửa sạch, thái hình quả trám.\r\nXà lách: Nhặt và rửa sạch, vớt ra để ráo.\r\nBắc nồi lên bếp, cho chút dầu và phi thơm hành tím, sau đó cho gừng + hành tây + ớt sừng + ớt chuông + thơm (dứa) cùng với 1 muỗng hạt nêm. Đảo đều và nhnh tay, bạn nên để lửa to khi xào để rau củ mướt và giòn. Khi phần rau củ chín, bạn trút ra đĩa.\r\nCho chảo lên bếp, làm nóng dầu ăn, bạn cho thịt gà vào áp chảo cho đến khi chín vàng đều 2 mặt. Khi chiên, bạn nên chiên phần mặt có da gà trước và nếu có mỡ ở phần da này sẽ chảy ra, như vậy món thịt gà áp chảo sẽ ngon và giòn, ăn không ngấy. Thịt gà chín, cho ra đĩa để ráo dầu.\r\nBắc nồi lên bếp và bạn cho 2 chén nước dừa + 2 tương ớt + 4 nước tương + 1 dầu điều, khuấy đều và bạn đun nhỏ lửa chừng 10 phút rồi cho phần rau củ đã được xào vào. Thêm 1 muỗng nước bột năng và khuấy đều 1, 2 lần nữa rồi tắt bếp.', '../HinhAnh/dui-ga-ap-chao-xop-thom-long-binh.jpg', '2016-07-08'),
(10, 'CƠM GÀ HẢI NAM', 'Khi ăn cơm gà, bạn sẽ bị cuốn hút bởi vị ngọt đậm đà từ cơm cho đến gà và nước canh luộc. Nước chấm sột sệt cay cay làm cho miếng thịt gà ngon đều và ngọt lịm. Chỉ với cách nấu cơm gà Hải Nam cực ngon và đơn giản này thôi bạn cũng đã kéo được ông xã ở nhà rồi đấy. Hãy bắt đầu đi thôi các bà nội trợ đảm đang!', 'Nguyên liệu làm cơm gà\r\nGà ta 1 con khoảng dưới 1,5 kg(gà mái chuẩn bị đẻ)\r\nGừng, tỏi, ớt, chanh, muối đường, dầu hào.\r\nGạo bắc thơm (hoặc gạo tám thơm)\r\n\r\nCách làm :\r\n\r\nBước 1: Làm gà sạch rồi cho vào nồi luộc. Khi luộc cho vài lát gừng, chút muối và nhánh hành vào. Gừng, hành có tác dụng làm khử mùi cho gà và nồi nước dùng. Khi nồi luộc sôi được khoảng 10 phút thì bạn tắt bếp và cứ để ngâm gà như thế khoảng 30 – 40 phút là gà chín dừ mà không bị nát. Trong thời gian đó chúng ta chế biến nước tương.\r\n\r\nGà rửa sạch cho vào nồi luộc\r\n\r\nLuộc gà khoảng 10 phút rồi để ngâm cho gà chín dừ mà không bị nát\r\n\r\nBước 2: Nước tương bao gồm 2 thìa mắm, nửa thìa đường, 1/4 thìa chanh, 2 nhánh tỏi to băm nhuyễn, gừng 1 nhánh băm nhuyễn, 2 thìa súp tương ớt, 1/2 thìa nước sôi nguội. Đánh tan số gia vị này lên bạn sẽ có một bát súp chấm gà ngon tuyệt.\r\n\r\nPha nước chấm cho món cơm gà Hải Nam\r\n\r\nnước tương pha vừa đủ cho các khẩu phần ăn\r\n\r\nBước 3: Vớt gà ra để ráo. Cho 4 nhánh tỏi vào phi thơm cùng với mỡ gà, cho thêm chút dầu hào cho có màu và thơm. Phi xong đổ nước luộc gà vào vừa đủ để nấu cơm. Cho gạo vào và nấu cơm đến khi chín.\r\n\r\nGà vớt ra cho ráo để chuẩn bị làm cơm gà\r\n\r\nCho gạo vào nước luộc nấu cơm\r\n\r\nBước 4: Chặt gà theo thớ ngang, chặt dứt khoát để thịt gà không bị nát. Phần nước gà còn lại bạn cho hành lá vào là được một bát canh ngọt và ngon. Xới cơm ra bát và thưởng thức thôi nào.Chặt gà dứt khoát để không bị nát\r\n\r\nChặt gà dứt khoát và ngang thớ thì khi ăn không bị dai Cách làm món cơm gà ngon\r\n\r\nĐể những món ăn chế biến với gà được phong phú bạn nên xem thêm cách làm lẩu gà nấm, ngải cứu, cánh gà kho khoai môn… cũng rất ngon, hấp dẫn đấy nhé. Hãy thay đổi cách chế biến thường xuyên để giúp gia đình ăn luôn được ngon miệng nhé.\r\n\r\nNhư vậy là món cơm gà đã xong. Nó không hề khó đúng không nào? Ngược lại khi ăn cơm gà, bạn sẽ bị cuốn hút bởi vị ngọt đậm đà từ cơm cho đến gà và nước canh luộc. Nước chấm sột sệt cay cay làm cho miếng thịt gà ngon đều và ngọt lịm. Chỉ với cách nấu cơm gà Hải Nam cực ngon và đơn giản này thôi bạn cũng đã kéo được ông xã ở nhà rồi đấy. Hãy bắt đầu đi thôi các bà nội trợ đảm đang!\r\n\r\n', '../HinhAnh/com-ga-hai-nam-long-binh.jpg ', '2016-07-14'),
(11, 'GÀ NƯỚNG XIÊN QUE', 'Món gà nướng xiên que chấm với washabi mayonnaise (trộn mù tạt và mayonnaise với nhau) càng làm tăng hương vị cho món ăn.\r\nChúc các bạn ngon miệng với món gà nướng xiên que Yakitori nhé! ', 'Nguyên liệu\r\n\r\nXiên tre\r\nĐùi gà\r\nHành lá paro\r\nDầu thực vật \r\n½ chén nước tương\r\n½ chén Mirin\r\n¼ chén rượu Sake\r\n¼ chén nước\r\n2 muỗng café đường nâu \r\nWasabi, mayonaise \r\ncách làm \r\n\r\nBước 1: Ngâm xiên tre trong nước khoảng 30 phút. \r\n\r\nBước 2: Lấy một cái chảo nhỏ, thêm mirin, nước tương, sake, nước, đường và phần hành lá, rồi đun sôi ở nhiệt độ cao. Sau khi sôi, sau đó giảm lửa, nấu liu riu 30 phút, để nước sốt sệt và bóng hơn. \r\n\r\nBước 3: Cắt hành lá paro thành từng khúc khoảng 2.5cm.\r\nBước 4: Cắt thịt gà dài khoảng 2.5cm\r\n\r\nBước 5: Gấp đôi miếng thịt gà và xiên vào que\r\nBước 6: Xiên xen kẻ 1 miếng gà, 1 miếng hành lá paro\r\nBước 7: Quét một lớp mỡ lên vĩ nướng, đặt xiên que lên trên.\r\n\r\nBước 8: Nướng và trở đều 2 mặt trong vòng 6 phút.\r\n\r\nBước 9: Quét một lớp nước sốt Yakitori lên xiên thịt và nướng tiếp trong vòng 3~4 phút.\r\nBước 10: Lấy xiên gà ra khỏi lò nướng và quét thêm 1 lớp nước sốt Yakitori.\r\nMón gà nướng xiên que chấm với washabi mayonnaise (trộn mù tạt và mayonnaise với nhau) càng làm tăng hương vị cho món ăn.\r\nChúc các bạn ngon miệng với món gà nướng xiên que Yakitori nhé! \r\n\r\nTheo Justonecookbook.com', '../HinhAnh/ga-nuong-xien-que-long-binh.jpg', '2016-06-29'),
(12, 'CÁNH GÀ CHIÊN NƯỚC MẮM', 'Cánh gà chiên nước mắm.\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.', '* Nguyên liệu\r\n800g cánh gà\r\n1,5 củ tỏi\r\n5 củ hành tím\r\n4 trái ớt\r\n1 muỗng tiêu\r\n5 muỗng đường\r\nNửa chén nước mắm\r\n* Cách làm\r\n - Cánh gà: Rửa sạch, mỗi cánh gà chặt thành 2 khúc (không ướp gia vị).\r\nTỏi, hành tím, ớt: Băm nhuyễn.\r\n- Chiên gà: Bắc chảo dầu thật nóng, sau đó chiên gà (chiên ngập dầu). Gà phải chiên thật là giòn, vàng, không bị ướt dính.\r\nÁo nước mắm cho gà:\r\nLấy cái chảo khác để áo nước mắm cho gà vừa mới chiên xong.\r\nLấy nửa muỗng dầu ăn, đợi dầu ăn nóng, bỏ tỏi, hành tím, ớt đã băm nhuyễn vào, cho thêm 1 muỗng tiêu.\r\nKhi làm thấy hành, tỏi, ớt hơi khô chuyển sang màu vàng thì cho nửa chén nước mắm nguyên chất, 5 muỗng đường vào.\r\nKhuấy hỗn hợp đều tay, khi cảm thấy bắt đầu sệt lại thì cho gà đã chiên vào.\r\nTiếp tục đảo gà cho đến khi chuyển sang màu hơi đậm thì tắt bếp.\r\n\r\ntheo Nhungnina', '../HinhAnh/ga-chien-nuoc-mam.jpg', '2016-07-08'),
(13, 'GÀ RANG LÁ CHANH THƠM NGON', 'Gà rang lá chanh thơm ngon.\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.', 'Nguyên liệu cần chuẩn bị:\r\n\r\n– Thịt đùi gà 500g\r\n\r\n– Lá chanh 5 lá không nên chọn lá quá già.\r\n\r\n– Bột canh, nước mắm, mỳ chính, dầu ăn…\r\nCách làm như sau:\r\n\r\n– Thit ga rửa sạch, sau đó chặt miếng vừa ăn nhá.\r\n\r\n– Cho thịt gà vào nồi và đun sôi, trong quá trình đun nếu có bọt nổi lên chúng ta dùng vá vớt ra, Sau khi nước sôi chúng ta vớt thịt ga ra sau đó rửa lại bằng nước sạch, cho thịt gà rớt hết cách mảnh xương vụn ra. Làm như thế gà trong lúc rang sẽ không ra nước và gà sẽ ngon và ngọt hơn.\r\n\r\n– Cho thịt gà vào mọt cái tô sau đó cho 1 thìa café bột canh, mỳ cheính, dầu ăn và đào đều cho thịt gà ngấm gia vị.\r\n\r\n– Lá chanh rửa sạch thái nhỏ.\r\n\r\n– Chúng ta bắc chảo lên bếp sau đó cho thịt gà vào và rang khoản g 10 phút cho thịt săn lại và tiếp tục cho 2 thìa nước mắm vào và rang tiếp khi nào gà chín thì tắt bếp. Lúc gà đang nóng chúng ta cho lá chanh vào đảo sơ quá nhá.\r\n\r\n– Múc gà ra đĩa và thưởng thức thôi.\r\n\r\nNhư thế là chúng ta đã hoàn thành món gà rang là chanh thơm ngon rồi. Chúc mọi người thành công nhá!\r\n\r\ntheo nauan9', '../HinhAnh/13510873_265553337141339_1399069424200494536_n.jpg', '2016-07-04'),
(14, 'MÓN GÀ KHO ME CỰC KỲ NGON', 'Gà Tươi Long Bình hướng dẫn bạn cách làm món gà kho me cực kỳ ngon nhé.\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.', 'Gà Tươi Long Bình hướng dẫn bạn cách làm món gà kho me cực kỳ ngon nhé.\r\nGà Tươi Long Bình, Tươi Ngon Mỗi Ngày luôn mang đến sự hoàn hảo trong từng món ăn.\r\nMọi thông tin về sử dụng sản phẩm của công ty Long Bình vui lòng liên hệ:\r\nCông Ty TNHH Chăn Nuôi Long Bình( chi nhánh 1)\r\nSố 438, Võ Văn Kiệt, F Cô Giang , Quận 1, TP HCM\r\nHotline: 0916.610.228\r\nWebsite: longbinhfood.vn\r\nRất hân hạnh phục vụ quý khách hàng.', '../HinhAnh/mon-ngon-long-binh-food.jpg', '2016-08-22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tdonhang`
--

CREATE TABLE `tdonhang` (
  `MADH` int(6) NOT NULL,
  `ID` varchar(16) NOT NULL,
  `TONGTIEN` int(10) NOT NULL,
  `THANHTOAN` varchar(20) NOT NULL,
  `KHUVUC` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `DIACHI` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `SDT` int(11) NOT NULL,
  `NGAYHT` date DEFAULT NULL,
  `TRANGTHAI` char(15) NOT NULL DEFAULT 'MOITAO',
  `NGAYTAO` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `GHICHUKH` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `GHICHUNV` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HINHANH` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tdonhang`
--

INSERT INTO `tdonhang` (`MADH`, `ID`, `TONGTIEN`, `THANHTOAN`, `KHUVUC`, `DIACHI`, `SDT`, `NGAYHT`, `TRANGTHAI`, `NGAYTAO`, `GHICHUKH`, `GHICHUNV`, `HINHANH`) VALUES
(111158, 'vanlypro', 1296000, 'NGANHANG', 'Miền Trung', 'Ninh Kiều, Cần Thơ', 973918238, '2018-12-09', 'HOANTHANH', '2018-12-09 23:09:50', 'giao hàng nhanh nhé', NULL, 'http://localhost:3000/uploads/images.jpg'),
(111159, 'duongvanly1', 956400, 'NGANHANG', 'Miền Nam', 'da nang', 973918239, '2018-12-10', 'HOANTHANH', '2018-12-10 07:59:39', NULL, NULL, 'http://localhost:3000/uploads/images.jpg'),
(111160, 'duongvanly', 104000, 'TRUCTIEP', 'Miền Bắc', 'Đường 3/2, Xuân khánh, Ninh Kiều, Cần Thơ', 973918234, '2018-12-10', 'HOANTHANH', '2018-12-10 23:52:23', NULL, NULL, NULL),
(111161, 'duongvanly', 146400, 'NGANHANG', 'Miền Nam', 'Đường 3/2, Xuân khánh, Ninh Kiều, Cần Thơ', 973918234, NULL, 'HUY', '2018-12-10 23:52:43', NULL, 'hình không đúng', 'http://localhost:3000/uploads/t?i xu?ng.png'),
(111162, 'duongvanly', 87000, 'TRUCTIEP', 'Miền Nam', 'Đường 3/2, Xuân khánh, Ninh Kiều, Cần Thơ', 973918234, '2018-12-10', 'HOANTHANH', '2018-12-10 23:52:55', NULL, NULL, NULL),
(111163, 'duongvanly', 85000, 'TRUCTIEP', 'Miền Trung', 'Đường 3/2, Xuân khánh, Ninh Kiều, Cần Thơ', 973918234, '2018-12-10', 'HOANTHANH', '2018-12-10 23:53:06', NULL, NULL, NULL),
(111164, 'duongvanly', 55000, 'TRUCTIEP', 'Miền Nam', 'Đường 3/2, Xuân khánh, Ninh Kiều, Cần Thơ', 973918234, '2018-12-10', 'HOANTHANH', '2018-12-10 23:53:18', NULL, NULL, NULL),
(111165, 'duongvanly1', 87000, 'TRUCTIEP', 'Miền Nam', 'da nang', 973918239, '2018-12-10', 'HOANTHANH', '2018-12-10 23:54:14', NULL, NULL, NULL),
(111166, 'duongvanly1', 67600, 'NGANHANG', 'Miền Trung', 'da nang', 973918239, '2018-12-10', 'HOANTHANH', '2018-12-10 23:54:31', NULL, NULL, 'http://localhost:3000/uploads/CSDLv3.png'),
(111167, 'duongvanly1', 118000, 'TRUCTIEP', 'Miền Trung', 'da nang', 973918239, NULL, 'MOITAO', '2018-12-10 23:54:45', NULL, NULL, NULL),
(111168, 'duongvanly1', 55000, 'TRUCTIEP', 'Miền Nam', 'da nang', 973918239, NULL, 'CHUYENHANG', '2018-12-10 23:54:52', NULL, NULL, NULL),
(111169, 'vanly', 1032000, 'NGANHANG', 'Miền Nam', 'Đường 3/2, Ninh Kiều, Cần Thơ', 974898072, '2018-12-11', 'HOANTHANH', '2018-12-11 13:55:21', NULL, NULL, 'http://localhost:3000/uploads/anh2.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tdonhangct`
--

CREATE TABLE `tdonhangct` (
  `STT` int(5) NOT NULL,
  `MADH` int(6) NOT NULL,
  `TENSP` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GIA` int(10) NOT NULL,
  `SOLUONG` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tdonhangct`
--

INSERT INTO `tdonhangct` (`STT`, `MADH`, `TENSP`, `GIA`, `SOLUONG`) VALUES
(176, 111158, 'Ức Gà FILLET (Không Xương Da)', 40000, 20),
(177, 111158, 'Chân Gà Long Bình', 47600, 10),
(178, 111159, 'Gà Góc Tư', 90000, 9),
(179, 111159, 'Đùi Tỏi', 65700, 2),
(182, 111160, 'Đầu gà', 79000, 1),
(183, 111161, 'Đùi Tỏi', 65700, 2),
(184, 111162, 'Gà Góc Tư', 72000, 1),
(185, 111163, 'Cánh Gà Tươi', 65000, 1),
(186, 111164, 'Ức Gà FILLET (Không Xương Da)', 40000, 1),
(187, 111165, 'Gà Góc Tư', 72000, 1),
(188, 111166, 'Chân Gà Long Bình', 47600, 1),
(189, 111167, 'Ức Gà (Có Da)', 42000, 1),
(190, 111167, 'Ức Gà (Nguyên Xương Da)', 56000, 1),
(191, 111168, 'Ức Gà FILLET (Không Xương Da)', 40000, 1),
(192, 111169, 'Gà Góc Tư', 72000, 5),
(193, 111169, 'Đùi Tỏi', 65700, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tgiohang`
--

CREATE TABLE `tgiohang` (
  `STT` int(5) NOT NULL,
  `ID` varchar(16) NOT NULL,
  `MASP` char(8) NOT NULL,
  `SOLUONG` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tgiohang`
--

INSERT INTO `tgiohang` (`STT`, `ID`, `MASP`, `SOLUONG`) VALUES
(3, 'vanly', 'a10', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thuyhang`
--

CREATE TABLE `thuyhang` (
  `STT` int(5) NOT NULL,
  `MADH` int(6) NOT NULL,
  `STTTONKHO` int(6) NOT NULL,
  `SOLUONG` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `thuyhang`
--

INSERT INTO `thuyhang` (`STT`, `MADH`, `STTTONKHO`, `SOLUONG`) VALUES
(1, 111138, 57, 110),
(8, 111142, 57, 300),
(9, 111142, 58, 160),
(18, 111145, 57, 500),
(19, 111146, 62, 530),
(24, 111149, 58, 1),
(25, 111150, 58, 1),
(28, 111152, 63, 1),
(29, 111153, 81, 1),
(30, 111156, 79, 1),
(31, 111156, 53, 10),
(33, 111157, 81, 7),
(34, 111158, 64, 20),
(35, 111158, 67, 10),
(36, 111159, 79, 9),
(37, 111159, 53, 2),
(39, 111160, 79, 0),
(40, 111160, 90, 5),
(41, 111160, 53, 10),
(43, 111160, 89, 1),
(46, 111162, 79, 0),
(47, 111162, 90, 1),
(48, 111163, 63, 1),
(49, 111164, 55, 1),
(50, 111165, 79, 0),
(51, 111165, 90, 1),
(52, 111166, 67, 1),
(53, 111167, 66, 1),
(54, 111167, 65, 1),
(55, 111168, 55, 1),
(56, 111169, 79, 0),
(57, 111169, 90, 3),
(58, 111169, 83, 0),
(59, 111169, 91, 10),
(60, 111169, 79, 0),
(61, 111169, 90, 5),
(62, 111169, 83, 0),
(63, 111169, 91, 10),
(64, 111169, 79, 0),
(65, 111169, 90, 0),
(66, 111169, 94, 5),
(67, 111169, 83, 0),
(68, 111169, 91, 10),
(69, 111169, 79, 0),
(70, 111169, 90, 0),
(71, 111169, 94, 5),
(72, 111169, 83, 0),
(73, 111169, 91, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tkho`
--

CREATE TABLE `tkho` (
  `MAKHO` char(12) NOT NULL,
  `VITRIKHO` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tkho`
--

INSERT INTO `tkho` (`MAKHO`, `VITRIKHO`) VALUES
('K1', 'KHU 1'),
('K2', 'KHU 2'),
('K3', 'KHU 3');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tkhuyenmai`
--

CREATE TABLE `tkhuyenmai` (
  `STT` int(5) NOT NULL,
  `TIEUDE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GIOITHIEU` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NOIDUNG` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `HINHANH` varchar(100) NOT NULL,
  `THOIGIAN` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tkhuyenmai`
--

INSERT INTO `tkhuyenmai` (`STT`, `TIEUDE`, `GIOITHIEU`, `NOIDUNG`, `HINHANH`, `THOIGIAN`) VALUES
(1, 'Mừng ngày quốc khánh 2/9', 'Công Ty TNHH Chăn Nuôi Long Bình gửi lời chúc tới tất cả khách hàng ngày lễ quốc khánh 2/9 nhiều niềm vui và thành công....', 'Công Ty TNHH Chăn Nuôi Long Bình gửi lời chúc tới tất cả khách hàng ngày lễ quốc khánh 2/9 nhiều niềm vui và thành công.', '../HinhAnh/le-2-9-ga-tuoi-long-binh.png', '2016-01-09'),
(2, 'KHAI TRƯƠNG CỬA HÀNG PHÚ LÂM QUẬN 6', 'Khai trương......Khuyến Mãi......Khuyến Mãi........!Ngày 23/08/2016 Công Ty TNHH Chăn Nuôi Long Bình khai trương cửa hàng bán gà tươi tại: 35B Tân Hòa Đông, P 14 Quận 6 TP Hồ Chí Minh( Cổng Chợ Phú Lâ', 'Khai trương......Khuyến Mãi......Khuyến Mãi........!\r\n\r\nNgày 23/08/2016 Công Ty TNHH Chăn Nuôi Long Bình khai trương cửa hàng bán gà tươi tại: 35B Tân Hòa Đông, P 14 Quận 6 TP Hồ Chí Minh( Cổng Chợ Phú Lâm).\r\nCông Ty có áp dụng chương trình khuyến mãi cho khách hàng, quý khách hãy nhanh tay đến và mang về những sản phẩm thịt gà tuơi ngon nhất cho gia đình mình.\r\nMọi thông tin về sản phẩm và chương trình khuyến mãi của Long Bình khu vực Quận 6 vui lòng liên hệ:\r\nHotline: 0916.660.228( Mr. Hạ)', '../HinhAnh/bai-viet-khai-truong-phu-lam-long-binh.png', '2016-08-25'),
(3, 'GÀ RÁN LONG BÌNH CỨ ĂN ĐI KHÔNG LO VỀ GIÁ', 'Gà rán Long Bình được làm từ gà chọn lọc tươi ngon nhất. có 4 loại combo cho khách hàng lựa chọn', 'Gà rán Long Bình được làm từ gà chọn lọc tươi ngon nhất. có 4 loại combo cho khách hàng lựa chọn :\r\n\r\n 1 miếng gà giòn\r\n 1 khoai tây chiên\r\n Tặng 1 nước ngọt \r\n28.000 vnd (combo A)\r\n 2 miếng gà giòn\r\n 1 khoai tây chiên\r\n Tặng 1 nước ngọt \r\n48.000 vnd (combo B)\r\n 3 miếng gà giòn\r\n 1 khoai tây chiên\r\n Tặng 1 nước ngọt \r\n67.000 vnd (combo C)\r\n 4 miếng gà giòn\r\n Tặng 2 nước ngọt \r\n85.000 vnd (combo D)\r\nĐịa chỉ Gà Rán Long Bình Foods : 438 võ văn kiệt, Phường Cô Giang, Quận 1 , TP.HCM\r\n\r\nHotline : 0919.118.288\r\n\r\nFacebook : Gà Tươi Long Bình', '../HinhAnh/banner-ga-ran-2.jpg', '2016-06-22'),
(4, 'KHAI TRƯƠNG GÀ RÁN TẠI CHI NHÁNH SỐ 438 VÕ VĂN KIỆT, F.CÔ GIANG ,QUẬN 1', 'Tiện Lợi Hơn - Nhanh Chóng Hơn - An Toàn Hơn - Ngon Miệng Hơn.( Take Away)Gà Rán Của Người Việt Nam - Cho Tất Cả Mọi Người.Nhân Dịp Khai Trương Ngày 29/04/2016 và Chương Trình Lễ 30/04, 01/05.\"Gà Rán ', 'Tiện Lợi Hơn - Nhanh Chóng Hơn - An Toàn Hơn - Ngon Miệng Hơn.( Take Away)\r\n\r\nGà Rán Của Người Việt Nam - Cho Tất Cả Mọi Người.\r\n\r\nNhân Dịp Khai Trương Ngày 29/04/2016 và Chương Trình Lễ 30/04, 01/05.\r\n\r\n\"Gà Rán Long Bình, Thơm Ngon Mỗi Ngày\" có nhiều ưu đãi về giá cho khách hàng.\r\n\r\nXin mời mọi người đến dùng thử và trải nghiệm sản phẩm của Long Bình với giá cả hợp lý nhất.\r\n\r\nMọi thông tin về sản phẩm và dịch vụ quý khách hàng vui lòng liên hệ Hotline: 0919.118.288\r\n\r\nHoặc SĐT: 0916.610.228\r\n\r\nTại Công Ty TNHH Chăn Nuôi Long Bình.\r\n\r\nSố 438 Võ Văn Kiệt,F Cô Giang ,Quận 1( góc Trần Đình Xu).', '../HinhAnh/ga-ran-longbinhfood.jpg', '2016-04-29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tlienhe`
--

CREATE TABLE `tlienhe` (
  `STT` int(5) NOT NULL,
  `HOTEN` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `EMAIL` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NOIDUNG` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `THOIGIAN` date NOT NULL,
  `TRANGTHAI` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tlienhe`
--

INSERT INTO `tlienhe` (`STT`, `HOTEN`, `EMAIL`, `NOIDUNG`, `THOIGIAN`, `TRANGTHAI`) VALUES
(1, 'duong van Ly', 'duongvanly96@gmail.com', 'dgdfjygfyjfg', '2018-12-09', 'Chưa trả l'),
(2, 'duong van Ly', 'duongvanly96@gmail.com', 'Nội dung liên hệ', '2018-12-10', 'Chưa trả l');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tquytrinh`
--

CREATE TABLE `tquytrinh` (
  `DOT` int(5) NOT NULL,
  `LOAIGA` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `SOLUONG` int(4) NOT NULL,
  `NGAYBATDAUNUOI` date NOT NULL,
  `XUATCHUONG` date NOT NULL,
  `CANNANGTB` int(4) DEFAULT NULL,
  `DONVI` varchar(5) DEFAULT NULL,
  `HAOHUT` int(4) DEFAULT NULL,
  `CHIPHI` int(15) DEFAULT NULL,
  `TRANGTHAI` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tquytrinh`
--

INSERT INTO `tquytrinh` (`DOT`, `LOAIGA`, `SOLUONG`, `NGAYBATDAUNUOI`, `XUATCHUONG`, `CANNANGTB`, `DONVI`, `HAOHUT`, `CHIPHI`, `TRANGTHAI`) VALUES
(1, 'Gà công nghiệp loại 1', 150, '2018-11-01', '2018-11-27', 4, 'kg', 4, 7000000, 'Đã nhập kho'),
(2, 'Gà ác', 80, '2018-11-01', '2018-11-27', 4, 'kg', 0, 800000, 'Đã nhập kho'),
(2, 'Gà công nghiệp loại 2', 154, '2017-02-05', '2017-05-10', 3, 'kg', 4, 8000000, 'Đã nhập kho'),
(3, 'Gà tre', 50, '2018-11-30', '2018-12-31', 0, 'kg', 0, 0, 'Đang tiến hành'),
(4, 'Gà Tây', 80, '2018-12-01', '2018-12-31', 0, 'kg', 0, 0, 'Đang tiến hành'),
(4, 'Gà tre', 100, '2018-12-01', '2018-12-12', 0, 'kg', 0, 0, 'Đã hoàn thành'),
(5, 'gà công nghiệp loại 1', 500, '2018-12-08', '2019-02-08', 0, 'kg', 0, 0, 'Đang tiến hành'),
(5, 'Gà mới', 100, '2018-11-01', '2018-12-09', 3, 'kg', 2, 7000000, 'Đã nhập kho'),
(6, 'Gà ác', 60, '2018-11-01', '2018-12-10', 4, 'kg', 0, 7000000, 'Đã hoàn thành'),
(6, 'Gà công nghiệp loại 1', 50, '2018-11-01', '2018-12-10', 3, 'kg', 0, 3000000, 'Đã hoàn thành'),
(6, 'Tây', 100, '2018-11-01', '2018-12-10', 3, 'kg', 2, 3000000, 'Đã nhập kho'),
(7, 'Gà Tây', 100, '2018-12-11', '2018-12-30', 0, 'kg', 0, 0, 'Đang tiến hành'),
(7, 'Gà Tre', 100, '2018-12-11', '2018-12-30', 0, 'kg', 0, 0, 'Đang tiến hành'),
(8, 'Gà Tre', 100, '2018-12-01', '2018-12-11', 3, 'kg', 0, 8000000, 'Đã nhập kho');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tsanpham`
--

CREATE TABLE `tsanpham` (
  `MASP` char(8) NOT NULL,
  `TENSP` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GIAHT` int(7) NOT NULL,
  `DONVI` char(5) NOT NULL DEFAULT 'KG',
  `QUYCACH` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `KM` int(5) DEFAULT '0',
  `BATDAUKM` date DEFAULT NULL,
  `KTKM` date DEFAULT NULL,
  `HINHANH` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tsanpham`
--

INSERT INTO `tsanpham` (`MASP`, `TENSP`, `GIAHT`, `DONVI`, `QUYCACH`, `KM`, `BATDAUKM`, `KTKM`, `HINHANH`) VALUES
('a1', 'Gà Góc Tư', 80000, 'KG', 'GÓC TƯ', 10, '2018-12-11', '2018-12-11', 'http://localhost:3000/uploads/14579499249632_ga-goc-tu-2-s-500x500.jpg'),
('a10', 'Đầu gà', 79000, 'KG', 'Đầu', 0, NULL, NULL, 'http://localhost:3000/uploads/dau-ga-s-500x500.jpg'),
('a2', 'Đùi Tỏi', 73000, 'KG', 'Đùi', 10, '2018-12-07', '2018-12-08', 'http://localhost:3000/uploads/dui-toi-s-500x500.jpg'),
('a3', 'Cánh Gà Tươi', 65000, 'KG', 'CÁNH', 0, NULL, NULL, 'http://localhost:3000/uploads/canh-ga-1-s-500x500.jpg'),
('a4', 'Ức Gà FILLET (Không Xương Da)', 50000, 'KG', 'Ức', 0, '2018-12-11', '2018-12-11', 'http://localhost:3000/uploads/14580968004531_uc-fillet-no-skin-1-s-500x500.jpg'),
('a5', 'Ức Gà (Nguyên Xương Da)', 56000, 'KG', 'ỨC', 10, '2018-12-11', '2018-12-30', 'http://localhost:3000/uploads/Uc-ga-co-xuong-1-s-500x500.jpg'),
('a6', 'Ức Gà (Có Da)', 42000, 'KG', 'Ức', 0, NULL, NULL, 'http://localhost:3000/uploads/Uc-fillet-skin-2-s-500x500.jpg'),
('a7', 'Chân Gà Long Bình', 68000, 'KG', 'CHÂN', 30, '2018-12-07', '2018-12-09', 'http://localhost:3000/uploads/chan-ga-4-s-500x500.jpg'),
('a8', 'Sản Phẩm Phụ', 9000, 'KG', 'PHỤ', 0, NULL, NULL, 'http://localhost:3000/uploads/14580985235725_gan-tim-me--liver-heart-gizzard-1-s-500x500.jpg'),
('a9', 'Gà nguyên con', 200000, 'CON', 'Nguyên con', 0, NULL, NULL, 'http://localhost:3000/uploads/nguyen-con-6-s-500x500.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tsukien`
--

CREATE TABLE `tsukien` (
  `STT` int(5) NOT NULL,
  `TIEUDE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `GIOITHIEU` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `NOIDUNG` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `HINHANH` varchar(100) NOT NULL,
  `THOIGIAN` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tsukien`
--

INSERT INTO `tsukien` (`STT`, `TIEUDE`, `GIOITHIEU`, `NOIDUNG`, `HINHANH`, `THOIGIAN`) VALUES
(1, 'DÂY CHUYỀN KHÉP KÍN LONG BÌNH CHẾ BIẾN 6.000 CON GÀ MỖI NGÀY', 'Nhà máy ấp trứng nở tự động, chăn nuôi, giết mổ và đóng gói 4.800 tấn thịt gà mỗi năm.Nhà máy giết mổ và đóng gói gà thịt Long Bình ở xã Sông Thao, huyện Trảng Bom, Đồng Nai có công suất 4.000-6.000 con mỗi ngày. Nguồn nguyên liệu thu gom từ 10 trang trại chăn nuôi với tổng đàn 275.000 con gà nằm ng...', 'Nhà máy ấp trứng nở tự động, chăn nuôi, giết mổ và đóng gói 4.800 tấn thịt gà mỗi năm.\r\nNhà máy giết mổ và đóng gói gà thịt Long Bình ở xã Sông Thao, huyện Trảng Bom, Đồng Nai có công suất 4.000-6.000 con mỗi ngày. Nguồn nguyên liệu thu gom từ 10 \r\ntrang trại chăn nuôi với tổng đàn 275.000 con gà nằm ngay trên địa bàn huyện.\r\nChuỗi sản xuất thịt gà thương phẩm khép kín được đơn vị kiểm soát mọi công đoạn từ đầu đến cuối. Giống gà lông trắng (Rosh) của Mỹ được cung cấp \r\nbởi nhà máy ấp trứng tự động Long Bình tại Xuyên Mộc (Bà Rịa Vũng Tàu). Gà con một ngày tuổi được tiêm phòng, chuyển về nuôi tại các trang trại ở Trảng Bom (Đồng\r\n Nai). Trong khi gà bố mẹ tiếp tục được nuôi ở Xuyên Mộc để nhân giống cho lứa tiếp theo.\r\nMô hình nuôi gà ở Trảng Bom\r\nTừ năm 2010, cả 10 trang trại đều thực hiện chăn nuôi theo tiêu chuẩn GAHP. Tại Trảng Bom, gà được nuôi trong chuồng lạnh thiết kế kín, mỗi chuồng có sức chứa \r\n10.000-20.000 con. Hệ thống thông gió, làm mát giúp điều hòa nhiệt độ chuồng nuôi, tạo môi trường sống sạch an toàn cho đàn gà, đồng thời ngăn ngừa lây lan\r\ndịch bệnh.\r\nThức ăn cho gà được tính toán phù hợp theo từng thời điểm, nhập từ các công ty lớn như CP Group, Deheus (Hà Lan)… Sau mỗi lứa xuất chuồng, toàn bộ chuồng nuôi, \r\nmáng ăn uống đều được khử trùng sạch sẽ, phơi 10-15 ngày nhằm loại bỏ các mầm bệnh từ lứa gà trước, rồi mới thả đàn mới vào.\r\nCác chất thải (phân gà và lớp đệm trấu) được thu gom, đưa về xử lý tại công ty sản xuất phân vi hữu cơ sinh trên địa bàn tỉnh. Nước thải chăn\r\nnuôi được thu gom về hồ lắng lọc trước khi thải ra môi trường.\r\nGà thương phẩm sau 45 ngày tuổi được cơ quan thú y tỉnh Đồng Nai kiểm tra dư lượng thuốc kháng sinh, dịch bệnh… trước khi đưa về nhà máy giết mổ \r\ntheo tiêu chuẩn HACCP. Tại đây, gà nguyên con cắt tiết, đánh lông, lấy nội tạng, rửa sạch được nhúng qua bồn nước đá có sục khí và clorine\r\nđể khử trùng.\r\nThịt gà đóng gói, dán nhãn, bảo quản lạnh hoặc cấp đông.\r\nThịt gà thành phẩm sẽ được phân loại (gà nguyên con, đùi, cánh, chân...), đóng dấu kiểm dịch, đóng gói, dán nhãn. Sau đó, đưa vào kho lạnh từ 0 đến -4 độ C để \r\nbảo quản được năm ngày, hoặc chuyển vào kho cấp đông -40 độ C để trữ 6-12 tháng.\r\nTheo đơn đặt hàng, gà thịt chuyển đến các cửa hàng bằng xe đông lạnh chuyên dụng. Để tránh nhiễm khuẩn ngược, sau mỗi ca giết mổ, nhà xưởng đều được \r\nvệ sinh khử trùng. Nước thải được xử lý qua hệ thống công suất 100 m3 mỗi ngày đêm theo quy chuẩn QCVN 40:2011/BTNMT. Đây là yêu cầu quan\r\n trọng để đảm bảo vệ sinh an toàn thực phẩm trong sản xuất chuỗi.\r\nÔng Nguyễn Như Sinh - Giám đốc Công ty Long Bình cho biết, nhờ sản xuất theo chuỗi nên giá thịt gà khá ổn định. Công ty phân phối qua hệ \r\nthống tám cửa hàng và chợ đầu mối nông sản Bình Điền (TP HCM).\r\nNguồn Vnexpress', '../HinhAnh/buoc-ngoac-chan-nuoi-viet-nam.jpg', '2017-12-24'),
(2, 'KIỂM SOÁT HOẠT ĐỘNG GIẾT MỔ GIA SÚC, GIA CẦM: NHU CẦU TĂNG - NỖI LO TĂNG', 'Trên địa bàn TP Hà Nội hiện có 1.070 cơ sở, điểm giết mổ gia súc, gia cầm, vậy nhưng chỉ có 168 cơ sở có giấy phép đăng ký kinh doanh. Sự bất cập trong kiểm soát hoạt động này kéo theo nỗi lo về mất vệ sinh an toàn thực phẩm, đặc biệt là vào thời điểm cuối năm khi nhu cầu tiêu dùng của người dân ', 'Trên địa bàn TP Hà Nội hiện có 1.070 cơ sở, điểm giết mổ gia súc, gia cầm, vậy nhưng chỉ có 168 cơ sở có giấy phép đăng ký kinh doanh. Sự bất cập trong kiểm soát hoạt động này kéo theo nỗi lo về mất vệ sinh an toàn thực phẩm, đặc biệt là vào thời điểm cuối năm khi nhu cầu tiêu dùng của người dân tăng cao.\r\n\r\nPhần lớn hoạt động không phép\r\n\r\nTheo thống kê của ngành Nông nghiệp Hà Nội, hiện nay trên địa bàn thành phố có 1.070 cơ sở giết mổ gia súc, gia cầm, trong đó có 1.048 cơ sở giết mổ nhỏ lẻ, thủ công; 15 cơ sở giết mổ bán công nghiệp và 7 cơ sở giết mổ công nghiệp. Tuy nhiên, chỉ có 168 cơ sở có giấy phép đăng ký kinh doanh và 128 cơ sở được kiểm soát. Nguyên nhân là nhiều cơ sở đăng ký nhưng đã ngừng hoạt động hoặc tạm ngừng hoạt động do không cạnh tranh được với các cơ sở giết mổ nhỏ lẻ trong khu dân cư. \r\n\r\nTrong khi đó, số cơ sở bị kiểm tra, xử lý rất ít. Từ đầu năm đến nay, Chi cục Thú y Hà Nội phối hợp với Phòng Cảnh sát môi trường (Công an TP Hà Nội) kiểm tra xử phạt 2 cơ sở giết mổ không đạt tiêu chuẩn về vệ sinh thú y và an toàn thực phẩm. Theo đánh giá của ngành Nông nghiệp, đây chỉ là phần kiểm soát ở các cơ sở đã đăng ký, còn số cơ sở nhỏ lẻ tại khu dân cư, đã được phân cấp quản lý cho chính quyền cấp cơ sở thì hầu như đang bị buông lỏng. \r\n\r\nQua khảo sát, hầu hết cơ sở giết mổ gia súc, gia cầm nhỏ lẻ trong khu dân cư hoặc ngay tại cơ sở chăn nuôi đều tiến hành công việc trên nền xi măng, không có khu xử lý thịt và phụ phẩm riêng biệt, nước xả, nước thải tràn lan trên nền nhà... Trong quá trình giết mổ, thịt lợn, nội tạng, phân, nước thải... lẫn với nhau nên việc thịt lợn, thịt gia cầm có nguy cơ cao bị nhiễm vi sinh vật. Bà Nguyễn Thị Lan, chủ một cơ sở giết mổ gia cầm tại xã Bình Minh, huyện Thanh Oai thừa nhận, cơ sở mới chỉ thu gom được chất thải rắn, còn toàn bộ nước thải trong quá trình giết mổ đều xả trực tiếp ra môi trường... \r\n\r\nĐó là chưa kể tình trạng vào buổi sáng sớm hoặc đầu giờ chiều hằng ngày, trên nhiều tuyến đường nội đô của Hà Nội, người đi đường thường bắt gặp cảnh những chiếc xe máy chở gia súc đã được giết mổ mà không che đậy lưu thông tự do. Còn tại chợ cóc, chợ dân sinh, chợ truyền thống, nhiều người bán hàng vẫn tùy tiện giết mổ gia cầm tại chỗ, xả nước thải bừa bãi... Điển hình như tại chợ dân sinh La Khê thuộc phường La Khê, quận Hà Đông có tới 3 cửa hàng giết mổ gia cầm trực tiếp ngay tại chợ. Theo một chủ cửa hàng bán gà ở đây, từ nhiều năm nay, cửa hàng đều bán các loại gia cầm chưa qua giết mổ. Nếu khách hàng có nhu cầu, cửa hàng sẽ giết mổ trực tiếp... \r\n\r\nTại huyện Sóc Sơn, lãnh đạo Trạm Thú y huyện cũng thừa nhận: Các điểm giết mổ được kiểm soát trên địa bàn huyện rất ít, các cơ sở đã đăng ký thì quy mô nhỏ lẻ. Điểm giết mổ tập trung lớn nhất của huyện Sóc Sơn cũng chỉ có công suất 10 con lợn/ngày. Thế nhưng, trên địa bàn huyện đang tồn tại hàng trăm điểm giết mổ gia súc, gia cầm chưa thể kiểm soát. Đây cũng là thực trạng chung của nhiều huyện ngoại thành...\r\n\r\nChia sẻ những khó khăn trong kiểm soát giết mổ, Phó Trưởng trạm Thú y huyện Đông Anh Hoàng Đình Lân cho hay: Hoạt động giết mổ nhỏ lẻ, thủ công đa dạng, không có địa điểm cố định mà rải rác ở hầu hết các khu dân cư. Chưa kể một số cơ sở hoạt động theo mùa vụ. Đáng chú ý là hầu hết các điểm giết mổ không được chính quyền địa phương cấp phép hoạt động nên cơ quan thú y rất khó kiểm tra, kiểm soát. \r\n\r\nÔng Nguyễn Hữu Chi, Trưởng phòng Kinh tế huyện Phú Xuyên cho biết, thói quen tiêu dùng dễ dãi của người dân cũng góp phần \"tiếp tay\" cho sự tồn tại của các cơ sở giết mổ nhỏ lẻ... Ngoài ra, do chính sách khuyến khích, hỗ trợ hoạt động giết mổ, kinh doanh, vận chuyển gia súc, gia cầm thiếu đồng bộ, hiệu quả nên các điểm giết mổ tập trung trên địa bàn huyện Phú Xuyên đã có quy hoạch, có dự án nhưng vẫn chưa thể đi vào hoạt động.\r\nSiết, liệu có... chặt?\r\n\r\nDịp cuối năm nhu cầu tiêu thụ thực phẩm tăng cao kéo theo công suất giết mổ gia súc, gia cầm tăng gấp 2-3 lần so với ngày thường. Ước tính, lượng gia súc, gia cầm xuất, nhập vào địa bàn thành phố thời điểm từ tháng 12-2017 đến tháng 3-2018 tăng hơn 30% so với trung bình các tháng trong năm. Ông Trần Anh Cường, chủ cơ sở giết mổ gia súc tại thôn Vệ, xã Nam Hồng, huyện Đông Anh kiến nghị: Để đáp ứng nhu cầu tiêu dùng của nhân dân Thủ đô, trong khi chờ quy hoạch và đưa các cơ sở giết mổ tập trung vào hoạt động, đối với các cơ sở giết mổ nhỏ lẻ, nếu chấp hành tốt về vấn đề vệ sinh thú y, môi trường nên cho phép thực hiện việc giết mổ tạm thời (có thời hạn) và có sự quản lý của cơ quan chuyên môn và chính quyền địa phương.\r\n\r\nTrước thực trạng trên, ông Nguyễn Ngọc Sơn, Chi cục trưởng Chi cục Thú y Hà Nội cho biết, từ nay đến Tết Nguyên đán Mậu Tuất 2018, lực lượng thú y sẽ tập trung cao độ, bố trí đủ cán bộ thú y để kiểm tra, kiểm soát chặt chẽ tại các cơ sở giết mổ đã được chính quyền cho phép; tăng cường hướng dẫn các cơ sở nhỏ lẻ vào các khu giết mổ tập trung nhằm từng bước giảm tình trạng hoạt động tự phát... Đồng thời, nâng cao năng lực hoạt động của 9 chốt kiểm dịch liên ngành nhằm ngăn chặn gia súc, gia cầm không đủ điều kiện vào các lò mổ. \r\n\r\nLực lượng thú y phối hợp tích cực với quản lý thị trường, công an... tăng cường kiểm tra, xử lý, đề xuất dừng hoạt động các cơ sở không bảo đảm điều kiện vệ sinh thú y, chưa được chính quyền địa phương cho phép. Cùng với đó, tổ chức quản lý chặt chẽ các hộ kinh doanh tại các quận nội thành, kiên quyết xử lý sản phẩm động vật không có dấu kiểm soát giết mổ. Tăng cường công tác thông tin, tuyên truyền nhằm phổ biến pháp luật, các chế độ chính sách, các quy định đối với người sản xuất kinh doanh có hoạt động giết mổ; định hướng người tiêu dùng thay đổi thói quen tiêu dùng chuyển sang lựa chọn sản phẩm có nguồn gốc rõ ràng, có bao gói, tem nhãn... \r\n\r\nCác cơ quan chức năng đã tỏ rõ quyết tâm, nhưng với thực trạng nêu trên, người tiêu dùng vẫn không khỏi lo lắng: Siết liệu có... chặt?', '../HinhAnh/gia cam.jpg', '2017-12-24'),
(3, 'KỲ CÔNG XUẤT THỊT GÀ SANG NHẬT', 'Sản phẩm chăn nuôi trước giờ cạnh tranh chật vật với hàng ngoại tại thị trường nội địa, nay xuất khẩu sang Nhật đánh dấu một bước chuyển mình lớnLô thịt gà chế biến đầu tiên đưa xuống Cảng Quốc tế Long An (tỉnh Long An) xuất khẩu sang Nhật ngày 9-9 sẽ mở đầu có nhiều lô hàng tiếp theo', 'Sản phẩm chăn nuôi trước giờ cạnh tranh chật vật với hàng ngoại tại thị trường nội địa, nay xuất khẩu sang Nhật đánh dấu một bước chuyển mình lớn\r\nLô thịt gà chế biến đầu tiên đưa xuống Cảng Quốc tế Long An (tỉnh Long An) xuất khẩu sang Nhật ngày 9-9 sẽ mở đầu có nhiều lô hàng tiếp theo. Dự tính, đến cuối năm 2017, chuỗi thịt gà đầu tiên sẽ xuất khẩu khoảng 2.000 tấn. Hiện có nhiều doanh nghiệp (DN) chuẩn bị kế hoạch xuất khẩu sản phẩm chăn nuôi hoặc cung ứng nguyên liệu cho các DN xuất khẩu.\r\n\r\nCó khả năng cạnh tranh\r\n\r\nTheo Bộ trưởng Bộ Nông nghiệp và Phát triển nông thôn (NN-PTNT) Nguyễn Xuân Cường, ngành nông nghiệp mỗi năm xuất khẩu trên 30 tỉ USD, trong đó 10 ngành hàng chủ lực đạt kim ngạch trên 1 tỉ USD nhưng sản phẩm chăn nuôi lại vắng bóng. Đây là trăn trở lớn khi chăn nuôi tăng mạnh trong thời gian qua. Hiện cả nước có khoảng 30 triệu con heo, 300 triệu con gia cầm, nửa triệu bò sữa…, vượt nhu cầu tiêu dùng trong nước nhưng chỉ xuất khẩu được một lượng nhỏ qua đường tiểu ngạch. Sản phẩm chăn nuôi xuất khẩu phải đáp ứng yêu cầu khắt khe về an toàn thực phẩm, kiểm dịch động vật và nhất là cạnh tranh về giá.\r\nTại buổi xuất khẩu lô thịt gà đầu tiên, ông Cường cho rằng ngô (nguyên liệu thức ăn chăn nuôi) Việt Nam trồng có giá 5.000 đồng/kg, trong khi Thái Lan chỉ 4.000 đồng/kg. Việt Nam phải nhập khẩu giống gà. Do đó, sự kiện Việt Nam có lô gà xuất khẩu thành công sang Nhật khẳng định ngành chăn nuôi có thể làm ra sản phẩm sạch và giá cạnh tranh.\r\n\r\nQuá trình chuẩn bị cho lô gà đầu tiên xuất khẩu chính thức sang Nhật mất khoảng 3 năm để hình thành chuỗi liên kết gồm: Công ty Bel Gà (Bỉ) cung cấp con giống, Tập đoàn De Heus (Hà Lan) cung cấp thức ăn, Tập đoàn Hùng Nhơn (đại diện các trang trại nuôi gà đạt chuẩn) và Công ty TNHH Koyu & Unitek (Nhật) thu mua, giết mổ và chế biến xuất khẩu. Sản phẩm xuất khẩu sang Nhật là thịt gà công nghiệp đã qua chế biến (xử lý nhiệt) thành nhiều món, nướng hoặc chiên trong 5 phút là có thể dùng.\r\n\r\nTrả lời thắc mắc của phóng viên vì sao một DN Nhật trong lĩnh vực chăn nuôi và chế biến gà sạch vẫn phải mất nhiều năm mới xuất khẩu được thịt gà về Nhật, ông Muneyuki Todaka, Phó Tổng giám đốc Công ty TNHH Koyu & Unitek, giải thích do Việt Nam - Nhật chưa ký kết thỏa thuận xuất khẩu sản phẩm gia cầm. Hơn nữa, Nhật Bản là thị trường khó tính, tiêu chuẩn khắt khe. Trước tiên, công ty phải đạt các tiêu chuẩn của Việt Nam cho quy trình từ trang trại chăn nuôi đến nhà máy chế biến, sau đó theo tiêu chuẩn Nhật nên mất nhiều thời gian.\r\n\r\nCơ hội rộng mở\r\n\r\nÔng Vũ Mạnh Hùng, Chủ tịch HĐQT Tập đoàn Hùng Nhơn, cho biết để xuất khẩu được lô thịt gà đầu tiên, các trang trại đã chuẩn bị từ 10-20 năm bằng việc áp dụng các tiêu chuẩn, quy chuẩn của quốc tế. Chuỗi liên kết thịt gà dự kiến xuất khẩu từ 300-360 tấn/tháng.\r\n\r\nNgoài gà, chuỗi thịt heo cũng được các DN chuẩn bị tích cực để xuất khẩu sang Hà Lan. Việc xuất khẩu thành công sản phẩm chăn nuôi vào những thị trường khó tính như Nhật, châu Âu khẳng định Việt Nam đủ sức cạnh tranh trên thị trường quốc tế. Quá trình xây dựng chuỗi liên kết, ông Hùng khẳng định sẽ cố gắng đưa nhiều nông dân, HTX tham gia xuất khẩu.\r\n\r\nÔng Gabor Fluit, Tổng Giám đốc De Heus khu vực châu Á, nhấn mạnh tiêu chuẩn của Nhật rất cao. Trong 2-3 năm chuẩn bị xuất khẩu, phía Nhật đã rất nhiều lần đến Việt Nam để đánh giá quy trình sản xuất từ con giống, thức ăn, chăn nuôi đến nhà máy, đồng thời tư vấn việc thực hiện và xác nhận đáp ứng yêu cầu của Nhật. Từ đây, không chỉ đáp ứng nhu cầu trong nước, ngành chăn nuôi Việt Nam có thể tự tin xuất những sản phẩm chất lượng cao ra thế giới.\r\n\r\nLà một DN xây dựng thành công chuỗi thịt gà, có chứng nhận tham gia \"Chuỗi thực phẩm an toàn TP HCM\", ông Nguyễn Như Sinh, Giám đốc kinh doanh Công ty TNHH Chăn nuôi Long Bình, nhìn nhận DN Việt không có lợi thế bằng các tập đoàn toàn cầu. Do vậy, để xuất khẩu được sản phẩm chăn nuôi mang thương hiệu của mình phải có quá trình chuẩn bị lâu dài. Trước mắt, công ty có thể cung cấp gà lông (đạt tiêu chuẩn VietGAP) cho DN xuất khẩu.\r\n\r\nTheo ông Bạch Đức Lữu, Giám đốc Cơ quan Thú y vùng 6 (Cục Thú y), mỗi năm, Nhật nhập khẩu khoảng 930.000 tấn sản phẩm gia cầm, một thị trường rất rộng lớn cho Việt Nam sau khi mở cửa thành công. Sau lô đầu tiên, Công ty TNHH Koyu & Unitek đã có kế hoạch cụ thể xuất khẩu nhiều container sản phẩm trong các tháng tiếp theo.\r\n\r\nNguồn: http://nld.com.vn \r\n\r\nNhiều nguồn nguyên liệu đạt chuẩn\r\n\r\nTheo Cơ quan Thú y vùng 6, địa bàn quản lý của cơ quan này gồm: TP HCM, Bà Rịa - Vũng Tàu, Đồng Nai, Ninh Thuận, Bình Thuận, Bình Dương, Bình Phước, Tây Ninh, Long An, Tiền Giang và Bến Tre. Đây là vùng chăn nuôi tập trung lớn nhất cả nước, đã xây dựng thành công 2 vùng an toàn dịch bệnh là huyện Thống Nhất và huyện Trảng Bom, tỉnh Đồng Nai. Về cơ sở an toàn dịch bệnh, 542 cơ sở chăn nuôi gia cầm đạt chứng nhận an toàn với bệnh Newcastle và cúm gia cầm, 452 cơ sở chăn nuôi gia súc đạt chứng nhận an toàn với bệnh lở mồm long móng và tả. Đây là nguồn nguyên liệu để các cơ sở giết mổ, chế biến (đạt tiêu chuẩn theo yêu cầu thị trường nhập khẩu) thu mua, chế biến thành các sản phẩm xuất khẩu.', '../HinhAnh/ga1-1505141112118.jpg', '2017-11-14'),
(4, 'BƯỚC NGOẶT CỦA SẢN PHẨM CHĂN NUÔI VIỆT NAM', 'Quá trình chuẩn bị cho lô gà đầu tiên xuất khẩu chính thức sang Nhật mất khoảng 3 năm để hình thành chuỗi liên kết gồm: Công ty Bel Gà (Bỉ) cung cấp con giống, Tập đoàn De Heus (Hà Lan) cung cấp thức ăn, Tập đoàn Hùng Nhơn (đại diện các trang trại nuôi gà đạt chuẩn) và Công ty TNHH Koyu & Unitek (Nhật) thu mua, giết mổ và chế biến xuất khẩu.', 'Gian nan\r\nQuá trình chuẩn bị cho lô gà đầu tiên xuất khẩu chính thức sang Nhật mất khoảng 3 năm để hình thành chuỗi liên kết gồm: Công ty Bel Gà (Bỉ) cung cấp con giống, Tập đoàn De Heus (Hà Lan) cung cấp thức ăn, Tập đoàn Hùng Nhơn (đại diện các trang trại nuôi gà đạt chuẩn) và Công ty TNHH Koyu & Unitek (Nhật) thu mua, giết mổ và chế biến xuất khẩu. Sản phẩm xuất khẩu sang Nhật là thịt gà công nghiệp đã qua chế biến (xử lý nhiệt) thành nhiều món, nướng hoặc chiên trong 5 phút là có thể dùng.\r\n\r\nÔng Vũ Mạnh Hùng, Chủ tịch HĐQT Tập đoàn Hùng Nhơn, cho biết để xuất khẩu được lô thịt gà đầu tiên, các trang trại đã chuẩn bị từ 10 - 20 năm bằng việc áp dụng các tiêu chuẩn, quy chuẩn quốc tế. Chuỗi liên kết thịt gà dự kiến xuất khẩu 300 - 360 tấn/tháng.\r\n\r\nMột doanh nghiệp Nhật trong lĩnh vực chăn nuôi và chế biến gà sạch vẫn phải mất nhiều năm mới xuất khẩu được thịt gà về Nhật, ông Muneyuki Todaka, Phó Tổng Giám đốc Công ty TNHH Koyu & Unitek, giải thích do Việt Nam - Nhật chưa ký kết thỏa thuận xuất khẩu sản phẩm gia cầm. Hơn nữa, Nhật Bản là thị trường khó tính, tiêu chuẩn khắt khe. Trước tiên, công ty phải đạt các tiêu chuẩn của Việt Nam cho quy trình từ trang trại chăn nuôi đến nhà máy chế biến, sau đó theo tiêu chuẩn Nhật nên mất nhiều thời gian.\r\n\r\nNhìn lại, ngành chăn nuôi gà công nghiệp của Việt Nam mỗi năm sản xuất khoảng 150 triệu con, mỗi con có trọng lượng trung bình 2,5 kg, nếu tính giá thành 24.500 đồng/kg (gà lông) thì chí ít cũng có giá trị gần nửa tỷ USD.\r\n\r\nDù giá trị lớn như vậy, nhưng lâu nay chúng ta nuôi gà chỉ theo dạng “tự sản tự tiêu”. Sở dĩ gà nội không thể xuất khẩu được là do chưa được quan tâm đúng mức. Liệu có vô lý và thiếu công bằng khi thủ tục xuất khẩu gà đi khó vạn lần cho nhập? Người chăn nuôi chưa tiếp cận vốn cho chăn nuôi. Các chính sách đất đai, hỗ trợ con giống, thức ăn, công nghệ, kỹ thuật cũng… khiêm tốn, khiến giá thành không thể cạnh tranh. Ngoài ra, các chính sách bảo hộ thương mại, hàng rào kỹ thuật lại càng lỏng lẻo khi hàng năm chúng ta vẫn hào phóng mở cửa cho nhập khẩu ồ ạt lượng lớn thịt ngoại tràn ngập Việt Nam.\r\n\r\nTương lai rộng mở\r\n\r\nTheo Bộ trưởng Bộ NN&PTNT Nguyễn Xuân Cường, ngành nông nghiệp mỗi năm xuất khẩu trên 30 tỷ USD, trong đó 10 ngành hàng chủ lực đạt kim ngạch trên 1 tỷ USD nhưng sản phẩm chăn nuôi lại vắng bóng. Đây là trăn trở lớn khi chăn nuôi tăng mạnh trong thời gian qua. Hiện cả nước có khoảng 30 triệu con heo, 300 triệu con gia cầm, nửa triệu bò sữa… vượt nhu cầu tiêu dùng trong nước nhưng chỉ xuất khẩu được một lượng nhỏ qua đường tiểu ngạch. Sản phẩm chăn nuôi xuất khẩu phải đáp ứng yêu cầu khắt khe về an toàn thực phẩm, kiểm dịch động vật và nhất là cạnh tranh về giá.\r\n\r\nBộ trưởng cho rằng Việt Nam phải nhập khẩu giống gà. Do đó, sự kiện Việt Nam có lô gà xuất khẩu thành công sang Nhật khẳng định ngành chăn nuôi có thể làm ra sản phẩm sạch và giá cạnh tranh\r\n\r\nÔng Vũ Mạnh Hùng cho biết, Công ty dự kiến mỗi tháng xuất khẩu khoảng 360 tấn gà đi Nhật, đặt mục tiêu từ nay đến cuối năm đạt khối lượng 2.000 tấn. Mặc dù, chi phí đầu tư để xuất khẩu thành công thịt gà sang Nhật cao gấp 3 lần bán trong nước, nhưng lợi nhuận sẽ tăng thêm khoảng 20%. Trong thời gian tới, doanh nghiệp cũng sẽ xuất khẩu thịt heo đi Hà Lan. Khối lượng heo dự kiến xuất khẩu đạt khoảng 10.000 tấn/năm.\r\n\r\nÔng Nguyễn Quang Toản, Phó Cục trưởng Cục Chế biến và Phát triển thị trường Nông sản (Bộ NN&PTNT), cho biết, việc xuất khẩu thành công thịt gà sang Nhật Bản chứng tỏ trình độ tổ chức sản xuất, khả năng đáp ứng nhu cầu thị trường của nền chăn nuôi trong nước.\r\n\r\nBộ trưởng Nguyễn Xuân Cường nhấn mạnh, ý nghĩa của sự kiện không phải ở giá trị một container mà là mở ra một triển vọng. Thị trường khó tính nhất còn vào được thì không sợ thị trường nào không vào được. “Những việc khó như thế này, nếu chúng ta đồng hành, chung tay kiến tạo ở giai đoạn hội nhập thì mọi khó khăn đều có thể vượt qua”, Bộ trưởng chia sẻ.\r\n\r\nÔng Gabor Fluit, Tổng Giám đốc Công ty De Heus châu Á: “Đây là sự kiện đáng tự hào vì lâu nay nhiều người nghĩ hàng Việt Nam không thể cạnh tranh được với các nước trên thế giới. Một khi chất lượng được Nhật Bản chấp nhận, thì bất kỳ nước nào sản phẩm của Việt Nam cũng tiếp cận được. Từ đây, người chăn nuôi hoàn toàn tự tin để tạo ra sản phẩm sạch cho người dùng trong nước và thế giới”.\r\nNguồn: nguoichannuoi.com', '../HinhAnh/buoc-ngoac-chan-nuoi-viet-nam.jpg', '2017-10-13'),
(5, 'DÙNG TIA HỒNG NGOẠI XÁC ĐỊNH GIỚI TÍNH TRỨNG GÀ', 'Công nghệ TeraEgg sử dụng ánh sáng hồng ngoại kết hợp cùng thuật toán phức tạp cho phép phân tích các dấu hiệu về giới tính và sinh sản ngay từ giai đoạn đầu phát triển phôi của trứng gà.', 'Công nghệ TeraEgg sử dụng ánh sáng hồng ngoại kết hợp cùng thuật toán phức tạp cho phép phân tích các dấu hiệu về giới tính và sinh sản ngay từ giai đoạn đầu phát triển phôi của trứng gà.\n\nMỗi năm có khoảng 300 triệu gà con đực bị giết ngay khi vừa nở tại trang trại ấp trứng, còn trên toàn cầu ước lượng khoảng 7 tỷ con. Đây được xem như quá trình chọn lọc của ngành chăn nuôi ưu tiên cho gà mái có khả năng đẻ trứng, thải loại những con sức khỏe yếu… Gà trống con bị xem như “vô dụng” vì không thể đẻ trứng, chậm tăng trưởng, không cho nhiều thịt khi nuôi trong môi trường công nghiệp.\nĐiều này khiến Matt O’Hayer – chủ trang trại Vital Farms tại vùng Austin (bang Texas, Mỹ) cảm thấy sốc vì ông đang xây dựng mô hình nuôi gà quy mô lớn ngay trên đồng cỏ giúp chúng thoải mái đi dạo, hưởng nhiều “tiêu chuẩn phúc lợi”. O’Hayer đã liên hệ với nhiều trại ấp trứng khác để tìm cách cứu gà con nhưng không nhận được bất kỳ sự hưởng ứng nào. Vì vậy ông chuyển sang tìm giải pháp bằng nền tảng công nghệ.\n\nKết quả O’Hayer đã phát triển công nghệ TeraEgg sử dụng ánh sáng hồng ngoại kết hợp cùng thuật toán phức tạp cho phép phân tích các dấu hiệu về giới tính và sinh sản ngay từ giai đoạn đầu phát triển phôi. Nhờ vậy các trang trại có thể loại bỏ trứng giống đực hay khả năng vô sinh cao trước khi đưa vào lò ấp. Những quả trứng này sẽ được đưa ngược ra thị trường bán cho người dân sử dụng bình thường.\n\n \n\n“Điều này mang đến nhiều lợi ích từ đảm bảo quyền lợi cho động vật, tối ưu hóa sản xuất cho đến giảm thiểu chất thải thực phẩm. Chúng tôi đang hợp tác với công ty công nghệ cao Novatrans của Israel thành lập công ty con Ovabrite để có thể thương mại hóa TeraEgg vào cuối năm 2017”, ông O’Hayer chia sẻ.\n\n \n\nPaul Shapiro – Phó chủ tịch chính sách Hội Nhân đạo Mỹ cho rằng TeraEgg là một công nghệ hứa hẹn giúp hàng triệu con vật tránh được số phận khủng khiếp. Ông Shapiro cho biết thêm Hiệp hội các nhà sản xuất trứng, chiếm 95% trang trại nuôi gà trên toàn quốc, đã quyết định sẽ sử dụng công nghệ này khi nó hoàn thiện kỹ thuật và khả thi về mặt kinh tế nhằm kết thúc việc tiêu hủy gà con vào năm 2020.\n\nTeraEgg không phải là công nghệ duy nhất được phát triển nhằm ngăn chặn việc tàn sát gà con. Đơn cử như công ty Egg Farmers of Ontario hợp tác cùng giáo sư Michael Ngadi thuộc đại học McGill University nghiên cứu kỹ thuật xác định giới tính phôi, dự kiến sẽ ra mắt vào cuối năm nay. Chính phủ Đức cũng tài trợ một dự án nghiên cứu công nghệ tương tự. Hay một công ty khởi nghiệp ở Hà Lan đang bắt tay vào dự án In Vovo với tham vọng nếu thành công sẽ cứu hơn 3 tỷ gà trống con trên toàn cầu.\n\nNguồn: VnExpress', '../HinhAnh/ga-con.jpg', '2017-10-13'),
(6, 'TP.HCM: CÔNG BỐ TRÊN 1.700 ĐIỂM BÁN THỊT, TRỨNG GIA CẦM TRUY XUẤT NGUỒN GỐC', 'Ngày 3/10, Sở Công Thương TP.HCM đã tổ chức lễ công bố chính thức đề án quản lý và truy xuất nguồn gốc thịt gia cầm, trứng gia cầm với 1.749 điểm bán trên địa bàn thành phố có truy xuất nguồn gốc.', 'Ngày 3/10, Sở Công Thương TP.HCM đã tổ chức lễ công bố chính thức đề án quản lý và truy xuất nguồn gốc thịt gia cầm, trứng gia cầm với 1.749 điểm bán trên địa bàn thành phố có truy xuất nguồn gốc.\r\nTheo đó, 1.749 điểm bán, bao gồm hệ thống các siêu thị, các chợ, cửa hàng thực phẩm tiện lợi, các điểm bán hàng của doanh nghiệp, các cửa hàng bình ổn thị trường… sẽ bán thịt gà, trứng gà và vịt có gắn tem truy xuất nguồn gốc.\r\n\r\nNgười tiêu dùng có thể dùng chương trình quét mã QR code bất kỳ, chẳng hạn như ứng dụng quét QR code của Zalo, quét lên tem để biết thông tin về con giống, thức ăn, quy trình chăn nuôi, tiêm phòng, cơ sở xử lý, đóng gói… Nếu cài đặt chương trình TE-FOOD, ngoài các thông tin trên, người tiêu dùng còn biết thêm địa chỉ mua trứng sạch ở đâu, nhận thông tin cảnh báo về sản phẩm trứng không an toàn (nếu có).\r\n\r\nThịt và trứng gia cầm có truy xuất nguồn gốc là sản phẩm của các nhà sản xuất như Bel gà, CP, Emivest, CJ, JapFa, San Hà, 3F Việt, Long Bình, Sagri, Bình Minh, Vĩnh Thành Đạt, Adeco, Ba Huân, Dư Hoài, Bảo Long, HTX Chăn nuôi gà Đất Việt, Tiến Hiệp, Tân Mỹ Châu, Mạnh Thắng, Phạm Tôn, An Long… Riêng trứng vịt, thời điểm này mới có sản phẩm của Công ty Vĩnh Thành Đạt có gắn tem truy xuất nguồn gốc.\r\n\r\nTheo số liệu từ Sở Công Thương TPHCM, hiện nay đã có 35 trang trại gà giống; 431 trang trại gà lấy thịt; 61 trang trại gà, vịt lấy trứng (sản lượng gần 80.000.000 quả/tháng); 17 cơ sở giết mổ đóng gói thịt gia cầm (sản lượng hơn 6.300.000 con gia cầm/tháng); 9 cơ sở xử lý đóng gói trứng gia cầm (sản lượng gần 75.000.000 quả/ngày) đã đăng ký tham gia đề án truy xuất nguồn gốc thịt, trứng gia cầm.\r\n\r\nBản tin có đề cập tại Chương trình thời sự HTV (03/10/2017)\r\n\r\nhttp://us.tvnet.gov.vn/video/92534/chuong-trinh-thoi-su-htv03102017/thoi-su\r\n\r\nTrích ngồn: Báo Hải Quang', '../HinhAnh/diem-ban-truy-suat-nguon-goc-gia-cam.jpg', '2017-09-10'),
(7, 'LỰA CHỌN THỊT GÀ, VỊT THẾ NÀO ĐỂ TRÁNH NHIỄM CÚM H7N9', 'Không nên mua gà, vịt sống về nhà tự thịt. Chọn gà khỏe đảm bảo rõ ràng nguồn gốc. Và đặc biệt, nếu ăn thịt gà đông lạnh cần phải có kiểm dịch, rõ xuất xứ.\r\n', 'Không nên mua gà, vịt sống về nhà tự thịt. Chọn gà khỏe đảm bảo rõ ràng nguồn gốc. Và đặc biệt, nếu ăn thịt gà đông lạnh cần phải có kiểm dịch, rõ xuất xứ.\r\n\r\nTrong bối cảnh dịch cúm gia cầm A/H7N9 từ Trung Quốc có nguy cơ xâm nhập vào nước ta bất cứ lúc nào, nhiều người dân cho rằng ăn thịt gà đông lạnh hay mua gà về nhà tự thịt sẽ giảm được nguy cơ bị lây nhiễm dịch bệnh này. Tuy nhiên, đây là nhận định rất sai lầm.\r\n\r\nTheo Tiến sĩ Nguyễn Thị Minh, một trong những thành viên tham gia dự án xây dựng và kiểm soát chất lượng nông sản thực phẩm (CIDA) thì thịt gà, vịt trên thị trường hiện nay khó có thể phân biệt đâu là an toàn tuyệt đối, báo GĐ&XH đưa tin.\r\n\r\nKhông mua gà về nhà thịt để tránh lây nhiễm dịch cúm.\r\n\r\nNếu bạn mua gà, vịt sống ở chợ về nhà giết mổ, chế biến thì đây chính là con đường lây nhiễm cúm A/H5N1, A/H7N9 dễ nhất, đặc biệt là khi đang xảy ra dịch cúm như hiện nay.\r\n\r\nDo vậy, theo TS Nguyễn Thị Minh, cách để đảm bảo an toàn nhất là không nên mua gà, vịt sống về nhà tự làm thịt, bởi việc đó không chỉ nguy hiểm cho người trực tiếp làm thịt gà, vịt mà còn vô tình mang nguồn virus cúm về nhà, gây nguy hiểm cho các thành viên khác trong gia đình và cho chính cộng đồng mà mình đang sinh sống.\r\n\r\nTrong khi dịch cúm đang diễn ra, tốt nhất người nội trợ chỉ nên mua gà, vịt mổ sẵn để đảm bảo an toàn sức khỏe cho cả nhà. Khi chọn gà, vịt mổ sẵn, bạn nên lựa chọn theo tiêu chí sau: Gà, vịt có màu sắc tự nhiên, da không có vết bầm, thớ thịt tươi, độ đàn hồi cao, thịt không có mùi hôi hoặc mùi kháng sinh, trên da không có vết bầm tím hoặc tụ máu. Màng ngoài thịt khô, không bị nhớt, có màu hồng, không có mảng bầm, tím, tụ máu. Ấn tay vào thấy thịt mềm, có độ dính.\r\n\r\nTrả lời phỏng vấn PV Báo ANTĐ ngày 19/2, PGS.TS Trần Đắc Phu, Cục trưởng Cục Y tế dự phòng – Bộ Y tế khẳng định, nếu gà đông lạnh hay trứng gà đã nhiễm virus cúm gia cầm A/H7N9, H5N1 thì vẫn hoàn toàn có khả năng lây bệnh sang người giống như cơ chế lây truyền từ gia cầm sống nhiễm bệnh sang người.\r\n\r\nGà đông lạnh cần đảm bảo rõ nguồn gốc, xuất xứ.\r\n\r\nÔng Trần Đắc Phu cho biết, dù là gia cầm sống hay gia cầm đông lạnh, trứng gia cầm khi nhập khẩu, giao thương trên thị trường đều phải có kiểm dịch, có nguồn gốc xuất xứ rõ ràng thì mới được coi là đảm bảo chất lượng.\r\n\r\nCòn tất cả các sản phẩm từ gia cầm sống đến thịt gia cầm đông lạnh, trứng gia cầm, nếu nhập lậu qua các đường tiểu ngạch, không có nguồn gốc xuất xứ rõ ràng thì người tiêu dùng đều không nên sử dụng.\r\n\r\nVì vậy, nên chọn kỹ lưỡng những con gà, vịt đang sống khỏe mạnh và yêu cầu người bán hàng giết mổ, sát muối và rửa sạch sẽ rồi mới mang về nhà. Mang về chỉ còn một việc là cho gà và nồi là đảm bảo an toàn nhất. Nếu mang về vẫn phải thái chặt thì sau khi làm xong cần phải rửa sạch dao thớt bằng nước rửa bát và dội lại nước sôi.\r\n\r\nNguồn: http://www.baomoi.com/', '../HinhAnh/1_42578.jpg', '2017-02-24'),
(8, 'SINH NHẬT LẦN THỨ 8 CỬA HÀNG GIA CẦM HẢI ĐĂNG', 'Chúc Mừng Sinh Nhật Lần Thứ 8 Cửa Hàng Gia Cầm Hải Đăng\r\nKính chúc quý khách buôn may bán đắt , hạnh phúc vô biên , sức khoẻ triền miên', 'Chúc Mừng Sinh Nhật Lần Thứ 8 Cửa Hàng Gia Cầm Hải Đăng\r\n\r\n- Điều đầu tiên thật sự cảm ơn quý khách hàng đã tin dùng sản phẩm gà tươi chúng tôi trong suốt thời gian dài qua.\r\n\r\n- Kính chúc quý khách buôn may bán đắt , hạnh phúc vô biên , sức khoẻ triền miên\r\n\r\n Chúc mọi người 1 năm mới an khang thịnh vượng. ', '../HinhAnh/IMG_4637.jpg', '2017-10-19'),
(9, 'LONG BÌNH TỰ HÀO LÀ MỘT TRONG NHỮNG NHÀ CUNG CẤP GÀ TƯƠI CHO HỆ THỐNG KFC', 'Long Bình tự hào là một trong những nhà cung cấp gà tươi cho hệ thống KFC', 'Long Bình tự hào là một trong những nhà cung cấp gà tươi cho hệ thống KFC', '../HinhAnh/maxresdefault(1).jpg', '2017-09-10'),
(11, 'CẦN SỚM TIẾP TỤC TRIỂN KHAI ĐỀ ÁN THÍ ĐIỂM CHUỖI AN TOÀN THỰC PHẨM', 'Cùng chung tay vì cuộc sống and sức khoẻ mọi người cùng Công ty TNHH Chăn Nuôi LONG BÌNH Để có 1 địa điểm buôn bán Thực Phẩm An Toàn trên toàn quốc. ', 'Cùng chung tay vì cuộc sống and sức khoẻ mọi người cùng Công ty TNHH Chăn Nuôi LONG BÌNH Để có 1 địa điểm buôn bán Thực Phẩm An Toàn trên toàn quốc. \r\nThông mọi tin truyền thông vui lòng liên hệ: \r\nÔng Như Sinh \r\nTell: 0919.166.228 \r\nWesite:  http://longbinhfood.vn \r\nmail: longbinhfood@gmail.com', '../HinhAnh/cty-tnhh-chan-nuoi-long-binh-10.jpg', '2016-10-17'),
(12, 'CÚM H7N9 NẾU GÀ MẮC BỆNH, NGƯỜI KHÔNG GIẾT MỔ VẪN CÓ THỂ MẮC VÌ LÝ DO NÀY', 'Cúm A (H7N9) chưa xuất hiện ở Việt Nam nhưng vẫn cần đề phòng. Chuyên gia cảnh báo, nếu gà mắc bệnh không được đun chín kỹ hay việc tiếp xúc để sơ chế sau khi mua cũng được xem là không an toàn.', 'Cúm A (H7N9) chưa xuất hiện ở Việt Nam nhưng vẫn cần đề phòng. Chuyên gia cảnh báo, nếu gà mắc bệnh không được đun chín kỹ hay việc tiếp xúc để sơ chế sau khi mua cũng được xem là không an toàn.\r\n\r\nKhông mổ gà sẽ không nhiễm vi rút cúm?\r\n    Dịch cúm gia cầm H7N9 đang bùng phát ở 13 tỉnh thành của Trung Quốc với số ca mắc tăng vọt. 40% số ca mắc bệnh cúm gia cầm tại Trung Quốc đã tử vong. Theo khuyến cáo của Bộ Y tế, cúm gia cầm H7N9 có nguy cơ cao lan sang Việt Nam qua đường nhập lậu gia cầm.\r\n\r\nTuy nhiên, hiện nay không ít người dân vẫn còn chủ quan với cúm A (H7N9). Một số người cho rằng không tiếp xúc giết mổ, chăn nuôi gà hay ăn thịt gà sẽ không mắc bệnh.\r\n\r\nChị Nguyễn Thị Lê (Cầu Diễn, Hà Nội) cho biết, chị và gia đình đã nghe tới dịch cúm H7N9 đang bùng phát tại Trung Quốc và người bị mắc cúm. Trong đó là những người tiếp xúc trực tiếp với gà (giết mổ, chăn nuôi). Tuy nhiên, chị Lê và không ít bà nội trợ tỏ ra khá chủ quan vì chưa thấy dịch xuất hiện ở Việt Nam.\r\n\r\n“Tôi thường mua gà sống ngoài chợ nhờ họ mổ sẵn rồi mang về nhà. Sau khi mang gà về, tôi rửa sạch lại nấu sôi kỹ rồi mới ăn. Quá trình đun sôi như vậy tôi nghĩ vi rút có thể chết và ăn thịt gà cũng khó có thể gây bệnh”, Chị Lê chia sẻ.\r\n\r\nCòn theo chị Dương Thu Hương (Tây Mỗ, Hà Nội), chị không trực tiếp mổ gà, chỉ mua gà giết mổ sẵn thì cũng khó có thể nhiễm cúm gia cầm.\r\n\r\nChị Hương có lý giải: “Mình có đọc thông tin và được biết cúm gia cầm người bị mắc thường là người giết mổ, chăn nuôi gia cầm. Mua gà về sơ chế sạch, nấu chín ăn chắc sẽ không có vấn đề gì”.\r\n\r\nVi rút có tốc độ lan truyền rất nhanh\r\n\r\nTrao đổi với PGS.TS. Nguyễn Duy Thịnh, Viện Công nghệ Sinh học và Thực phẩm (Đại học Bách Khoa Hà Nội) về vấn đề trên, ông cho hay, không trực tiếp giết mổ, nuôi gia cầm nhưng ăn gia cầm mắc bệnh chưa được nấu chín vẫn có nguy cơ nhiễm vi rút.\r\n\r\nVề mặt sinh học, mọi loài vi sinh vật trong đó có vi rút có thể chết ở nhiệt độ 70 độ C. Cũng vì vậy mà ông cha ta thường khuyên phải “ăn chín uống sôi”. Khi nhiệt độ sôi đạt 100 độ C thì vi khuẩn, vi sinh vật đều có thể bị tiêu diệt, khi đó ăn thực phẩm là an toàn.\r\n\r\nPGS.TS. Nguyễn Duy Thịnh cho rằng: “Nguy cơ nhiễm vi rút cúm gia cầm cho người cao ở khâu trước khi được luộc chín. Khi mua gà về, chúng ta vẫn phải dùng tay lấy gà ra để rửa, sơ chế. Quá trình đó cũng được cho là có tiếp xúc trực tiếp với gà. Chưa kể khi con gà mang vi rút thì tốc độ lây lan của nó sẽ rất nhanh. Chỉ cần một giọt nước rơi từ con gà mang bệnh trên sàn nhà, bàn bếp, thớt, tường (băm, chặt) đều có nguy cơ lan truyền bệnh”.\r\n\r\nNguy cơ cao nhất của virus cúm gà H7N9 là người dân vẫn còn rất chủ quan. Trước đây, khi dịch cúm gà H5N1 xuất hiện Việt Nam, dù được thông tin rất nhiều nhưng người dân tỏ ra không hề quan tâm.\r\n\r\n“Dù hiện nay vẫn chưa có bằng chứng cúm A (H7N9) lây từ người sang người, nhưng trên thực tế đã có rất nhiều trường hợp bị tử vong vì cúm gia cầm. Tiêu thụ gà có virus H7N9 vẫn có nguy cơ cao mắc bệnh”, PGS.TS. Nguyễn Duy Thịnh khuyến cáo.\r\n\r\nCũng theo PGS.TS. Nguyễn Duy Thịnh, khi mua gia cầm ở chợ cần lưu ý chọn những con gà khỏe mạnh không bị chậm chạp hay mắt nhắm lại. Người mua gia cầm đã giết mổ sẵn cần phải có giấy tờ kiểm dịch hoặc dấu đóng kiểm dịch trên thịt gà.\r\n\r\n“Khi gà mắc phải chủng cúm vi rút H5N1, H7N9… thường chết rất nhanh. Người dân khi thấy gia cầm chết tuyệt đối không nên ăn. Không vứt gia cầm chết xuống nguồn nước (sông, suối, rảnh..). Gia cầm chết cần phải chôn và rắc vôi để tránh nguy cơ lan truyền bệnh”, PGS.TS. Nguyễn Duy Thịnh nói.\r\n\r\nnguồn : http://www.baomoi.com/', '../HinhAnh/1_56869.jpg', '2017-02-24'),
(13, 'VIỆT NAM PHÁT HIỆN 5 Ổ CÚM GIA CẦM, MỞ RỘNG GIÁM SÁT', 'Việt Nam đã phát hiện 4 ổ dịch H5N1, 1 ổ H5N6 và đang tiếp tục đối mặt với nguy cơ H7N9 xâm nhập.\r\n\r\nTrước diễn biến phức tạp của dịch cúm gia cầm, chiều tối nay Bộ Y tế tổ chức cuộc họp khẩn tìm giải pháp ứng phó.', 'Việt Nam đã phát hiện 4 ổ dịch H5N1, 1 ổ H5N6 và đang tiếp tục đối mặt với nguy cơ H7N9 xâm nhập.\r\n\r\nTrước diễn biến phức tạp của dịch cúm gia cầm, chiều tối nay Bộ Y tế tổ chức cuộc họp khẩn tìm giải pháp ứng phó.\r\n\r\nThứ trưởng Nguyễn Thanh Long cho biết, đến nay Việt Nam chưa ghi nhận cúm A H7N9, tuy nhiên dịch có nguy cơ xâm nhập Việt Nam rất lớn khi Trung Quốc - ổ dịch lớn nhất thế giới đã có gần 200 ca tử vong, tập trung ở 2 tỉnh Vân Nam và Quảng Tây, tiếp giáp Việt Nam.\r\n\r\n“Đáng lo ngại, virus cúm H7N9 không biểu hiện rõ trên gia cầm. Gà, vịt mang virus nhưng vẫn khoẻ mạnh bình thường nên người dân rất dễ chủ quan”, ông Long lưu ý.\r\n\r\nLoại cúm A nguy hiểm không kém là H5N1 và H5N6 dù chưa phát hiện trường hợp nào trên người nhưng đến nay đã có 4 ổ dịch.\r\n\r\nÔng Đàm Xuân Thành, Phó Cục trưởng Cục Thú y, Bộ NN&PTNT cho biết, ngay trong sáng nay, cơ quan chức năng đã phát hiện 1 ổ dịch H5N1 tại 3 hộ dân xã Trực Thuận, Trực Ninh, Nam Định, buộc tiêu huỷ hơn 4.600 con vịt. Ngoài ra còn 2 ổ dịch H5N1 tại huyện Phú Đông, tỉnh Bạc Liêu và 1 ổ tại Diễn Châu, Nghệ An.\r\n\r\nCũng trong thời gian này, đã ghi nhận ổ dịch cúm gia cầm H5N6 tại xã Phổ Cường, huyện Đức Phổ, tỉnh Quảng Ngãi.\r\n\r\nTrước nguy cơ dịch cúm lây lan sang người, ông Long yêu cầu các viện Pasteur 3 miền tăng cường giám sát, mở rộng đối tượng lấy mẫu cho cả những trường hợp có triệu chứng nhẹ, đặc biệt tại Nha Trang, Khánh Hoà, nơi đang có rất đông khách du lịch Trung Quốc.', '../HinhAnh/20170220191807-long.jpg', '2017-02-21'),
(14, '8 CHUỖI CUNG ỨNG THỰC PHẨM THỊT GÀ TƯƠI AN TOÀN', 'Sản phẩm thịt gà tươi Cty Chăn Nuôi Long Bình - Người bạn của mọi nhà', 'Sản phẩm thịt gà tươi Cty Chăn Nuôi Long Bình - Người bạn của mọi nhà', '../HinhAnh/banner-1.jpg', '2017-02-21'),
(15, 'DIỄN ĐÀN KINH TẾ TRANG TRẠI VÀ DOANH NGHIỆP NÔNG NGHIỆP VIỆT NAM', 'Diễn Đàn Kinh Tế Trang Trại và Doanh Nghiệp Nông Nghiệp Việt Nam Lần 1.', 'Diễn Đàn Kinh Tế Trang Trại và Doanh Nghiệp Nông Nghiệp Việt Nam Lần 1.\r\nMọi thông tin truyền thông vui lòng liên hệ:\r\nMr. Như Sinh\r\nTell: 0919.166.228\r\nWesite: https://longbinhfood.vn \r\nMail: longbinhfood@gmail.com', '../HinhAnh/15439881_1426570110687491_4763140003772676083_n.jpg', '2016-12-16'),
(16, 'TẾT TRUNG THU TẾT TÌNH THÂN', 'GÀ TƯƠI LONG BÌNH xin gửi đến Quý Khách hàng lời chúc nhân dịp Tết Trung Thu vui vẻ, đầm ấm, hạnh phúc, nhiều may mắn.', 'GÀ TƯƠI LONG BÌNH xin gửi đến Quý Khách hàng lời chúc nhân dịp Tết Trung Thu vui vẻ, đầm ấm, hạnh phúc, nhiều may mắn.\r\nCầu chúc cho tâm hồn mọi người luôn đẹp như ánh trăng rằm \r\n\r\ncuộc sống này luôn ngọt ngào như những chiếc bánh Trung Thu', '../HinhAnh/trungthu.jpg', '2016-09-12'),
(17, 'CHƯƠNG TRÌNH CHÀO ĐÓN TÂN SINH VIÊN-HỌC VIÊN-NGHIÊN CỨU SINH 2016', 'Chương trình chào đón Tân sinh viên, Học viên, Nghiên cứu sinh năm 2016 của ngành Chăn nuôi và Thú y, Trường Đại học Cần Thơ', 'Chương trình chào đón Tân sinh viên, Học viên, Nghiên cứu sinh năm 2016 của ngành Chăn nuôi và Thú y, Trường Đại học Cần Thơ\r\nKính mời quý khách và các bạn sinh viên đến tham quan và mua sản phẩm gà tươi, gà rán cùng với chúng tôi ngày 10/10( từ 7h đến 18h ).\r\n------------------------------------------------------------------\r\nMọi thông tin truyền thông vui lòng liên hệ:\r\nMr. Như Sinh\r\nTell: 0919.166.228\r\nWesite: https://longbinhfood.vn \r\nRất mong được đón tiếp quý khách tại đại học Cần Thơ của Long Bình Gà Tươi.\r\n\r\n', '../HinhAnh/14563379_1156155434463837_1388689979371988823_n.jpg', '2016-10-11'),
(18, 'HỘI CHỢ QUỐC TẾ NÔNG NGHIỆP, NÔNG SẢN & THỰC PHẨM VIỆT NAM 2016', 'Thời gian:  28/09 - 02/10/2016\r\nĐịa điểm: NHÀ THI ĐẤU THỂ DỤC THỂ THAO PHÚ THỌ 01 Lữ Gia, P.15, Q.11, TP. Hồ Chí Minh.', '\r\nThời gian:  28/09 - 02/10/2016\r\nMở cửa từ: 09h đến 21h30\r\nĐịa điểm: NHÀ THI ĐẤU THỂ DỤC THỂ THAO PHÚ THỌ\r\n01 Lữ Gia, P.15, Q.11, TP. Hồ Chí Minh.\r\nHội chợ Quốc tế Nông nghiệp và Nông sản Việt Nam (tên cũ là Hội chợ Nông sản Xuất khẩu Việt Nam) - Vietnam Farm Expo 2016 là nơi quy tụ, trưng bày một cách toàn diện về tất cả các lĩnh vực thuộc yếu tố đầu vào và đầu ra của ngành nông nghiệp, tạo ra cơ hội giao thương đa chiều trên nhiều khía cạnh của ngành nông nghiệp, như:\r\n\r\n- Giúp doanh nghiệp nông nghiệp, trang trại và người nông dân, là những người trực tiếp sản xuất trong nông nghiệp, có điều kiện tiếp xúc các sản phẩm dịch vụ tốt nhất thuộc yếu tố đầu vào cho sản xuất nông nghiệp (máy móc công nghệ, cây con giống, vật tư, ....), đồng thời tiếp cận kiến thức khoa học kỹ thuật mới trong nông nghiệp thông qua các buổi hội thảo chuyên ngành được tổ chức trong khuôn khổ hội chợ.\r\n\r\n- Làm cấu nối giao thương giữa các đơn vị sản xuất, kinh doanh nông sản trong nước với các doanh nghiệp nhập khẩu nông sản nước ngoài. Đồng thời, cũng là cơ hội để các doanh nghiệp trong nước tìm hiểu cơ hội hợp tác lẫn nhau.\r\n\r\n- Việc gặp gỡ các đối tác nước ngoài ngay tại Việt Nam, sẽ giúp doanh nghiệp tiết kiệm chi phí tam quan, xúc tiến thương mại thị trường nước ngoài.\r\n\r\n- Hội chợ cũng là cơ hội để các doanh nghiệp sản xuất, kinh doanh nông sản trong cả nước tiếp cận người tiêu dùng, mở rộng thị trường tiêu thụ trong nước, đặc biệt là thị trường Thành phố Hồ Chí Minh.\r\n\r\nTạo cơ hội thúc đẩy việc ứng dụng khoa học công nghệ, nâng cao chất lượng và năng suất trong sản xuất  nông nghiệp, kết hợp phát triển thị trường đầu ra cho nông sản sẽ góp phần phát triển toàn diện ngành nông nghiệp Việt Nam.\r\n\r\n \r\n\r\nLĨNH VỰC TRƯNG BÀY:\r\n\r\n- Máy nông nghiệp\r\n\r\n- Vật tư nông nghiệp, vật tư chăn nuôi\r\n\r\n- Mô hình nông nghiệp\r\n\r\n- Giống nông nghiệp (giống cây trồng, vật nuôi, giống thủy hải sản)\r\n\r\n- Dây chuyền chế biến, bảo quản nông sản & thực phẩm.\r\n\r\n- Nông sản\r\n\r\n- Thực phẩm\r\n\r\n- Bon sai, cây cảnh.', '../HinhAnh/hoi-cho-nong-nghiep.jpg', '2016-09-20'),
(19, 'KỶ NIỆM 10 NĂM THÀNH LẬP CÔNG TY LONG BÌNH', 'Cám ơn tất cả các khách hàng sỉ và lẻ đã đồng hành cùng Long Bình foods trong suốt 10 năm qua.', 'Cám ơn tất cả các khách hàng sỉ và lẻ đã đồng hành cùng Long Bình foods trong suốt 10 năm qua.\r\nLong Bình foods sẽ giảm giá 10% hoặc quà tặng cho các khách hàng thân thiết của Long Bình Foods.\r\n\r\nlike và share fanpage Long Binh foods theo link Gà Tươi Long Bình\r\ncomment số điện thoại vào sự kiện này kỷ niệm 10 năm thành lập Long Bình Foods\r\nKính chúc quý khách hàng may mắn phát tài phát lộc.', '../HinhAnh/banner-sinh-nhat-10-nam-2.jpg', '2016-07-22'),
(20, 'HỘI NGHỊ QUẢNG BÁ THÔNG TIN GÀ TƯƠI LONG BÌNH THEO CHUẨN VIETGAP', 'Hội nghị trưng bài quảng bá thông tin sản phẩm gà tươi Long bình theo chuẩn VietGAP kết nối sản phẩm nông nghiệp an toàn đến các trường học có bếp ăn bán trú.', 'Hội nghị trưng bài quảng bá thông tin sản phẩm gà tươi Long bình theo chuẩn VietGAP kết nối sản phẩm nông nghiệp an toàn đến các trường học có bếp ăn bán trú.', '../HinhAnh/vieigap.jpg', '2016-05-12'),
(21, 'HỘI ChỢ TRIỂN LÃM QUỐC TẾ ILDEX VIETNAM 2016', 'HỘI ChỢ TRIỂN LÃM QUỐC TẾ ILDEX VIETNAM 2016', 'HỘI ChỢ TRIỂN LÃM QUỐC TẾ ILDEX VIETNAM 2016', '../HinhAnh/ILDEX-HCM-2016-.jpg', '2016-05-09');
INSERT INTO `tsukien` (`STT`, `TIEUDE`, `GIOITHIEU`, `NOIDUNG`, `HINHANH`, `THOIGIAN`) VALUES
(22, 'CÔNG TY TNHH CHĂN NUÔI LONG BÌNH THAM GIA DANH SÁCH 42 DOANH NGHIỆP BÌNH ỔN CỦA TP.HCM', 'Bình ổn thị trường các mặt hàng lương thực, thực phẩm thiết yếu là 1 trong 4 chương trình được TPHCM thực hiện song song. Với 42 doanh nghiệp (DN) tham gia, cung ứng khoảng 500 sản phẩm, Chương trình bình ổn thị trường các mặt hàng lương thực, thực phẩm (CTBOTT LTTP) trở thành chương trình có quy mô lớn và sản lượng hàng hóa chi phối mạnh mẽ trên thị trường. ', 'Bình ổn thị trường các mặt hàng lương thực, thực phẩm thiết yếu là 1 trong 4 chương trình được TPHCM thực hiện song song. Với 42 doanh nghiệp (DN) tham gia, cung ứng khoảng 500 sản phẩm, Chương trình bình ổn thị trường các mặt hàng lương thực, thực phẩm (CTBOTT LTTP) trở thành chương trình có quy mô lớn và sản lượng hàng hóa chi phối mạnh mẽ trên thị trường. Với chương trình này, TPHCM sẽ đảm bảo cân đối cung - cầu hàng hóa, BOTT, chăm lo an sinh xã hội, là cơ sở để thực hiện có hiệu quả cuộc vận động “Người Việt Nam ưu tiên dùng hàng Việt Nam”.\r\nHàng bình ổn chiếm 25% - 30% nhu cầu thị trường\r\n\r\nCTBOTT LTTP năm 2016 - Tết Đinh Dậu 2017 được triển khai từ ngày 1-4-2016, kết thúc vào ngày 31-3-2017, với 10 ngân hàng tham gia gói tín dụng ưu đãi dành cho chương trình là 12.900 tỷ đồng và 42 DN sản xuất, kinh doanh, cung ứng hàng hóa. Về mặt hàng, chương trình năm nay tiếp tục thực hiện bình ổn đối với 9 nhóm mặt hàng gồm lương thực, đường, dầu ăn, thịt gia súc, thịt gia cầm, trứng gia cầm, thực phẩm chế biến, rau củ quả, thủy hải sản. Ngoài những nhóm hàng thực phẩm thiết yếu, cung ứng cho nhu cầu hàng ngày, chương trình tiếp tục được bổ sung và mở rộng thêm chủng loại hàng hóa như nấm rơm, nấm mèo, các chủng loại thủy hải sản khô, chế biến (tép sấy, cá khô, lẩu đóng gói&hellip nhằm đa dạng hóa sự lựa chọn cho người tiêu dùng TP. Theo tính toán của Sở Công thương, tổng số hàng thực phẩm nằm trong diện bình ổn hiện đã vượt con số 500 sản phẩm.\r\n\r\nVề hàng hóa, dựa vào sự thay đổi trong tập quán, thói quen mua sắm, tiêu dùng của người dân TP và dựa trên kế hoạch sản xuất, kinh doanh tạo nguồn hàng, lượng hàng đăng ký của DN, TPHCM đã phân bổ cho DN thực hiện bình ổn thị trường năm 2016, trong đó hàng bình ổn chiếm khoảng 25% - 30% nhu cầu thị trường các tháng thường và chiếm 30% - 40% nhu cầu thị trường các tháng tết và tăng bình quân từ 30% - 35% so với kết quả thực hiện năm 2015.\r\n\r\nÔng Nguyễn Thành Nhân, Tổng Giám đốc Liên hiệp HTX Thương mại TPHCM (Saigon Co.op) cho biết, công tác chuẩn bị hàng hóa tham gia CTBOTT 2016 và tết 2017 đã được Saigon Co.op chủ động lên kế hoạch chuẩn bị rất chu đáo, đầy đủ. Năm nay, Saigon Co.op vẫn tham gia đầy đủ 9 nhóm hàng như các năm vừa qua. Để đảm bảo đủ hàng hóa, Saigon Co.op đang thực hiện việc ứng vốn cho các DN, các HTX vệ tinh để phát triển sản xuất, cung ứng hàng hóa cho chương trình. Mặt khác, Saigon Co.op cũng chủ động tổ chức sản xuất để đảm bảo lượng hàng bình ổn đáp ứng đầy đủ nhu cầu thị trường và có kế hoạch dự trữ đề phòng thị trường có biến động. Trong xu hướng kinh doanh năm 2016, Saigon Co.op tiếp tục phát triển và có ưu tiên cho các sản phẩm đạt chuẩn VietGAP, góp phần định hướng tiêu dùng cho người dân, từng bước loại bỏ các mặt hàng không an toàn trên thị trường.\r\n\r\nCùng quan điểm trên, ông Văn Đức Mười, Tổng Giám đốc Vissan, cũng cho hay, từ nhiều năm qua, Vissan đang theo đuổi chiến lược khép kín quy trình sản xuất, chế biến “từ trang trại đến bàn ăn”. Đến thời điểm này, Vissan đã hoàn thành bước đầu, đó là cung ứng 100% sản lượng thịt sạch ra thị trường, kể từ ngày 15-4 tới. Để làm được việc này, bản thân Vissan nỗ lực phát triển tổng đàn, đồng thời liên kết chặt chẽ với các đối tác thực sự có năng lực để cung ứng nguồn heo nguyên liệu cho giết mổ và chế biến.\r\n\r\nTheo nhận định của Sở Công thương, việc triển khai CTBOTT LTTP năm nay tiếp tục được xã hội hóa ở mức cao nhất, số lượng và thành phần các DN tham gia chương trình rất đa dạng. Đáng lưu ý, hầu hết các DN đều có thế mạnh trong sản xuất, kinh doanh trong nhiều lĩnh vực khác nhau. Bên cạnh đó, nguồn vốn từ các ngân hàng cam kết dành cho chương trình với lãi suất hợp lý tăng hơn 1.000 tỷ đồng so với năm 2015. Đây là điều kiện tốt cho các DN tăng cường đầu tư, liên kết các tỉnh, thành phát triển sản xuất, đổi mới công nghệ nhằm nâng cao năng suất, chất lượng sản phẩm, đáp ứng ngày càng tốt hơn nhu cầu tiêu dùng của nhân dân TP.\r\n\r\nTập trung phát triển điểm bán\r\n\r\nCùng với việc chuẩn bị nguồn hàng, công tác phát triển điểm bán mới, đồng thời nâng cấp các điểm bán hiện hữu là một trong những công tác trọng điểm của chương trình bình ổn năm nay. Để thực hiện được mục tiêu này, tại Quyết định số 1128 do Phó Chủ tịch UBND TPHCM Lê Văn Khoa ký, ban hành vào cuối tháng 3-2016 về Kế hoạch thực hiện CTBOTT LTTP trên địa bàn TPHCM năm 2016 và Tết Đinh Dậu 2017, đã phân công rõ trách nhiệm cho từng sở, ngành chức năng trong việc hỗ trợ và tạo điều kiện cho DN mở rộng, phát triển điểm bán.\r\n\r\nTheo đó, TP cũng khuyến khích DN tham gia chương trình đầu tư phát triển các loại hình phân phối hiện đại như siêu thị, cửa hàng tiện lợi; chú trọng phát triển điểm bán tại các chợ truyền thống, KCN-KCX, khu lưu trú công nhân, khu vực quận ven - huyện ngoại thành trên địa bàn TP; tích cực tổ chức thực hiện các chuyến bán hàng lưu động và đẩy mạnh cung ứng hàng hóa BOTT đến các bếp ăn tập thể; chủ động tổ chức thực hiện các chương trình khuyến mãi nhằm đẩy mạnh phân phối, xúc tiến tiêu thụ hàng hóa BOTT.\r\n TP sẽ đẩy mạnh chương trình hợp tác giữa DN BOTT với Hội Liên hiệp Phụ nữ và Thành đoàn TNCS TPHCM để phát triển các cửa hàng liên kết thanh niên, cửa hàng liên kết phụ nữ gắn với nâng cao hiệu quả hoạt động và gia tăng số lượng, chủng loại hàng hóa bình ổn tại các cửa hàng này. TP cũng khuyến khích DN thuộc các thành phần kinh tế đáp ứng đầy đủ điều kiện đăng ký tham gia chương trình, chấp hành các quy định và chủ động xây dựng, thực hiện các chương trình khuyến mãi nhằm đẩy mạnh phân phối và xúc tiến tiêu thụ các mặt hàng BOTT trong chương trình.\r\n\r\nUBND TP cũng giao nhiệm vụ cho UBND các quận, huyện phối hợp với các sở, ngành chức năng rà soát, giới thiệu các mặt bằng đang quản lý, sử dụng không hiệu quả, không đúng mục đích cho DN tham gia chương trình đầu tư phát triển cửa hàng, siêu thị; hỗ trợ phát triển điểm bán BOTT tại các chợ truyền thống, trong đó ưu tiên phân phối những mặt hàng thiết yếu như thịt gia súc, thịt gia cầm, trứng gia cầm, rau củ quả. Sở Công thương tiếp tục phối hợp với Ban Quản lý các KCX-KCN TPHCM (HEPZA) nhằm đưa hàng bình ổn vào các bếp ăn tập thể nhằm ổn định giá cả và chất lượng dinh dưỡng cho bữa ăn hàng ngày của công nhân.\r\n\r\nTheo Phó Chủ tịch UBND TPHCM Lê Văn Khoa, năm 2016 là năm thứ 4 TP thực hiện bình ổn theo cơ chế mới. Về cơ bản, chương trình đang vận hành khá suôn sẻ, nguồn vốn thực hiện rất dồi dào. Tuy nhiên, trong quá trình triển khai thực hiện, nếu DN gặp khó khăn, cần báo ngay cho các sở, ngành chức năng để tìm biện pháp giải quyết kịp thời, tạo điều kiện tốt nhất cho các DN thực hiện chương trình, góp phần ổn định an sinh xã hội.\r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\n Sản lượng 9 nhóm mặt hàng lương thực, thực phẩm chủ lực của CTBOTT năm 2016 và Tết Đinh Dậu 2017 \r\n\r\n + Nhóm Lương thực: tháng thường 7.179,6 tấn/tháng, tháng tết 6.873,1 tấn.\r\n\r\n+ Đường RE, RS: tháng thường 2.250 tấn/tháng; tháng tết 3.060 tấn/tháng.\r\n\r\n+ Dầu ăn: tháng thường 1.003,6 tấn/tháng; tháng tết 1.551,4 tấn/tháng.\r\n\r\n+ Thịt heo: tháng thường 4.410,6 tấn/tháng; tháng tết 5.068,5 tấn/tháng, tăng 81,6%.\r\n\r\n+ Thịt gia cầm: tháng thường 10.280, 9 tấn/tháng; tháng tết 11.151 tấn/tháng.\r\n\r\n+ Trứng gia cầm: tháng thường 30,7 triệu quả/tháng; tháng tết 38,7 triệu quả/tháng.\r\n\r\n+ Thực phẩm chế biến: tháng thường 1.576,8 tấn/tháng; tháng tết 2.607,9 tấn/tháng.\r\n\r\n+ Rau củ quả: tháng thường 5.557 tấn/tháng; tháng tết 8.395,4 tấn/tháng.\r\n\r\n+ Thủy hải sản: tháng thường 864,3 tấn/tháng, tăng 67,9%; tháng tết 1.176,4 tấn/tháng.\r\n\r\n                                          **************************\r\n\r\nDANH SÁCH 42 ĐOANH NGHIỆP THAM GIA CHƯƠNG TRÌNH BOTT  LTTP NĂM 2016 - TẾT ĐINH DẬU 2017 \r\n\r\n1. Tổng Công ty Thương mại Sài Gòn - TNHH MTV (gạo trắng thơm, gạo trắng thường 5% tấm).\r\n\r\n2. Tổng Công ty Nông nghiệp Sài Gòn - TNHH MTV (thịt heo, gà thả vườn, thực phẩm chế biến).\r\n\r\n3. Công ty CP DV Hàng không Sân bay Tân Sơn Nhất (nước mắm).\r\n\r\n4. Hợp tác xã Nông nghiệp SX-TM-DV Phước An (rau củ quả).\r\n\r\n5. Công ty CP TM-DV Cần Giờ (gạo trắng thường 5% tấm, đường RE, dầu ăn).\r\n\r\n6. Công ty cổ phần Thực phẩm Vĩnh Thành Đạt (trứng gà, trứng vịt).\r\n\r\n7. Công ty TNHH TM-DV Siêu thị BigC An Lạc (gạo trắng thường, dầu ăn, thịt heo, thực phẩm chế biến, nước  mắm).\r\n\r\n8. Công ty TNHH MTV Lương thực TPHCM (gạo thơm Jasmine, gạo trắng thường 5% tấm).\r\n\r\n9. Công ty cổ phần Đầu tư Vinh Phát (gạo trắng thơm, gạo trắng thường, gạo Jasmine).\r\n\r\n10. Công ty cổ phần Thực phẩm Công nghệ Sài Gòn (đường RE, đường RS, dầu ăn).\r\n\r\n11. Công ty TNHH Thực phẩm 2 (đường RE, đường RS).\r\n\r\n \r\nNgười tiêu dùng đang chọn mua các loại trái cây tại siêu thị Co.opmart\r\n\r\n12. Công ty TNHH MTV Việt Nam Kỹ nghệ súc sản - Vissan (thịt gia súc, thực phẩm chế biến).\r\n\r\n13. Công ty TNHH Phạm Tôn (gà ta nguyên con, gà công nghiệp nguyên con, gà thả vườn nguyên con, gà công nghiệp pha lóc).\r\n\r\n14. Công ty TNHH San Hà (gà ta nguyên con, gà công nghiệp nguyên con, gà thả vườn nguyên con, gà công nghiệp pha lóc, vịt nguyên con).\r\n\r\n15. Công ty cổ phần Phát triển nông nghiệp TNXP (trứng gà.\r\n\r\n16. Công ty TNHH Ba Huân (trứng gà, trứng vịt, thịt gà công nghiệp, thực phẩm chế biến).\r\n\r\n17. Công ty cổ phần Chế biến hàng xuất khẩu Cầu Tre (thực phẩm chế biến).\r\n\r\n18. Công ty cổ phần Chế biến thủy hải sản Liên Thành (nước mắm).\r\n\r\n19. Công ty cổ phần Thủy đặc sản Việt Nam (thực phẩm chế biến).\r\n\r\n20. Công ty CP KD nước mắm Phan Thiết - Mũi Né (nước mắm).\r\n\r\n21. Liên hiệp HTX Thương mại TPHCM - Saigon Co.op (tham gia đầy đủ 9 nhóm mặt hàng lương thực, thực phẩm chủ lực).\r\n\r\n22. HTX Nông nghiệp TM-DV Phú Lộc (rau củ quả).\r\n\r\n23. Công ty TNHH MTV TM DV Nhân Dân (dầu ăn, gạo trắng thường, gạo thơm).\r\n\r\n24. Công ty CP Lương thực, thực phẩm Colusa Miliket (mì, bún khô.\r\n\r\n25. Công ty cổ phần Sài Gòn Food (thực phẩm chế biến).\r\n\r\n26. HTX Dịch vụ nông nghiệp tổng hợp Anh Đào (rau củ quả).\r\n\r\n27. Công ty TNHH MTV Hội nhập phát triển Đông Hưng (gạo trắng thơm, gà thả vườn, trứng gà.\r\n\r\n28. Công ty TNHH TM-SX Hưng Việt (nước mắn).\r\n\r\n29. Công ty TNHH Nông sản thực phẩm Thảo Nguyên (rau củ quả).\r\n\r\n30. Công ty TNHH Lương thực Tấn Vương (gạo trắng thơm, gạo trắng thường).\r\n\r\n31. Công ty TNHH TMDV Đóng gói Trường Phát (dầu ăn).\r\n\r\n32. Công ty TNHH Đầu tư TM-DV Khang Gia Land (gạo trắng thơm, gạo trắng thường, dầu ăn).\r\n\r\n33. Công ty CP Kinh doanh thủy hải sản Sài Gòn (thực phẩm chế biến, nước mắm).\r\n\r\n34. Công ty TNHH Việt Tùng (thực phẩm chế biến).\r\n\r\n35. Công ty cổ phần Thành Thiên Lộc (nước mắm).\r\n\r\n36. Công ty cổ phần Thực phẩm Bình Tây (mì, phở, bún… khô và bún, phở, hủ tiếu, bánh hỏi… tươi.\r\n\r\n37. Công ty TNHH SXTM Nông sản Phong Thúy (rau củ quả).\r\n\r\n38. Công ty TNHH MTV Thực phẩm Ánh Nhi (rau củ quả).\r\n\r\n39. Công ty TNHH Sản xuất chế biến thủy hải sản và thương mại Thanh Phát (nước mắm).\r\n\r\n40. Công ty TNHH TMSX Hải Nam (thủy hải sản).\r\n\r\n41. Công ty TNHH Quốc tế Phước Thắng (rau củ quả, dầu ăn, mì, bún khô.\r\n\r\n42. Công ty TNHH Chăn nuôi Long Bình (gà công nghiệp nguyên con, gà công nghiệp pha lóc chân, đầu, cánh, đùi, ức&hellip.\r\n\r\n(Nguồn: Sở Công thương TPHCM)', '../HinhAnh/logo-longbinh.png', '2016-04-13'),
(23, 'HỘI CHỢ ILDEX VIETNAM 2016', 'Là chuỗi triển lãm thương mại quốc tế Cuyên ngành Chăn nuôi, Bơ sữa, Chế biến thịt và nuôi trồng Thủy sản được tổ chức tại các nước Việt Nam, Ấn Độ, Indonesia, Myanmar, Trung quốc và Thái Lan.', 'Chi tiết Là chuỗi triển lãm thương mại quốc tế Cuyên ngành Chăn nuôi, Bơ sữa, Chế biến thịt và nuôi trồng Thủy sản được tổ chức tại các nước Việt Nam, Ấn Độ, Indonesia, Myanmar, Trung quốc và Thái Lan. ILDEX VIETNAM 2016 - lần thứ 6 – là một triển lãm giá trị với diện tích trưng bày gần 6000m2 với 200 doanh nghiệp tham gia triễn lãm, nhằm mục tiêu phát triển thị trường Việt Nam nói chung và Đông Dương nói riêng.\r\n\r\nTiếp tục đồng hành cùng ILDEX VIETNAM 2016 là các thương hiệu toàn cầu trong ngành chăn nuôi như: Biomin, Big Dutchman, P&N, Peja, Amlan,Buhler, EW Nutrion, Vietfarm,……… cùng như sự tham gia của nhiều thương hiệu mới: Sanphar, Jefo, Kentmaster, Yemmark, Schaumann, Agrologic, DKSH,…..... hứa hẹn sẽ mang đến các sản phẩm, dịch vụ phong phú, tiến bộ đầy tính cạnh tranh.\r\n\r\nBên cạnh khu vực gian hàng đa quốc gia Pháp, Hàn Quốc, Trung Quốc… lần đầu tiên, chúng tôi chào đón khu vực gian hàng đa quốc gia Mỹ- dẫn đầu bởi công ty Amlan, Hiệp hội xuất khẩu giống gia cầm Mỹ, Insta-Pro International, Micron Bio-Systems, DAR PRO …… sẽ trưng bày các sản phẩm nguyên liệu thức ăn, sức khỏe và dinh dưỡng vật nuôi, giống di truyền và trang thiết bị hàng đầu tại ILDEX Việt Nam năm 2016.\r\n\r\nBên cạnh triển lãm là chương trình Hội thảo khoa học quốc tế liên tục trong 3 ngày với nhiều chủ đề: xúc tiến đầu tư trong chăn nuôi, diễn đàn ngành sữa, sức khỏe và dinh dưỡng vật nuôi,..…từ các chuyên gia của FAVA, VIV và các doanh nghiệp tiêu biểu hàng đầu trong ngành.\r\n\r\nVới sự phát triển vượt bậc, Ildex Vietnam 2016 hứa hẹn sẽ mang đến những cơ hội kinh doanh mới, công nghệ tiên tiến, thông tin và kinh nghiệm quý báu phục vụ cho sản xuất, kinh doanh, nghiên cứu phát triển của ngành chăn nuôi, nuôi trồng thủy sản, chế biến thịt, sữa,....cho khách tham quan. Triển lãm dự kiến đón 7,000 khách tham quan thương mại từ khắp Việt Nam, các nước Asean và nhiều quốc gia khác, đặc biệt là các nước lân cận như Campuchia, Myanmar, Lào,...\r\n\r\nBan Tổ chức hoan nghênh các công ty, cơ quan đơn vị, cá nhân thuộc Ngành chăn nuôi, công nghiệp thức ăn gia súc, giống vật nuôi, thú y, Bác sĩ, kỹ thuật viên thú y, ngành Chế biến thịt, Chế biến thủy hải sản, chế biến sữa, Người chăn nuôi, chủ trang trại nuôi trồng thủy sản, Nhà nhập khẩu, Nhà phân phối, Thương gia, Nhà cung cấp bán sĩ, Cơ quan nhà nước, các cơ quan của ngành nông nghiệp, chăn nuôi, viện trường,.. Các hiệp hội thương mại có liên quan trong ngành nông nghiệp, đại diện các tổ chức quốc tế…\r\n \r\n\r\n23 Tháng 3 – 25 Tháng 323 Tháng 3 lúc 8:00 đến 25 Tháng 3 lúc 17:00 \r\nTrung tâm Hội chợ & Triển lãm Sài Gòn (SECC) 799 Nguyễn Văn Linh, Phú Mỹ Hưng, Q.7, Tp.HCM ', '../HinhAnh/14583603768225_10448466_1008414832571232_7360837987793226732_o.jpg', '2016-04-13'),
(24, 'GẶP GỠ NHỮNG NHÀ TIÊN PHONG SẢN XUẤT THEO CHUỖI', 'Tập đoàn Lộc Trời, gần đây nổi tiếng với việc xây dựng chuỗi giá trị hạt gạo và là doanh nghiệp duy nhất của Việt Nam được kết nạp thành viên Sustainable Rice Platform (SRP).', 'Thực tiễn là kim chỉ nam\r\n\r\nTập đoàn Lộc Trời, gần đây nổi tiếng với việc xây dựng chuỗi giá trị hạt gạo và là doanh nghiệp duy nhất của Việt Nam được kết nạp thành viên Sustainable Rice Platform (SRP). Ông Huỳnh Văn Thòn, chủ tịch tập đoàn Lộc Trời cho biết, cuộc đấu xảo gạo ngon nhất thế giới do The Rice Trader, tổ chức quốc tế chuyên nghiên cứu về lúa gạo, tổ chức ở Malaysia, từ ngày 28 – 30.10.2015, giống AGPPS 103 của Lộc Trời được xếp vào top 3 gạo ngon nhất thế giới năm 2015. Đây là thành quả quan trọng để Lộc Trời phát huy thương hiệu và hội nhập sâu, hiệu quả vào thị trường toàn cầu.\r\nGạo hữu cơ hoa sữa được cho là đang đi theo xu hướng mà Thái Lan đầu tư sản xuất gạo berry\r\n\r\nNhiều người nói Lộc Trời có tầm nhìn xa khi chuyển hướng từ bán thuốc bảo vệ thực vật sang khuyến khích canh tác không dùng thuốc và đầu tư cho chuỗi giá trị nông nghiệp. Nhưng ông Huỳnh Văn Thòn lại lý giải “tầm nhìn xa” đó chính là những thay đổi cho phù hợp với thực tiễn sản xuất kinh doanh.\r\n\r\nĐầu tiên Lộc Trời làm thuốc bảo vệ thực vật và bán thuốc thì phải có bộ phận chuyển giao kỹ thuật hỗ trợ nông dân sử dụng thuốc sao cho hiệu quả. Việc gắn bó với nông dân nảy sinh việc phải có giống tốt để cung cấp cho nông dân. Lộc Trời nhảy vào nghiên cứu giống cung cấp cho nông dân. “Rồi nông dân đòi hỏi phải làm sao cho có lời thì chúng tôi nhảy vào tổ chức tiêu thụ. Như vậy, chuỗi liên kết Lộc Trời đã hình thành từ thực tế theo nhu cầu và lợi ích của người nông dân”.\r\n\r\n“Nếu không có chuỗi, không truy xuất nguồn gốc được thì không làm thương hiệu được. Không có thương hiệu thì làm sao bán giá cao? Muốn bán giá cao cũng đòi hỏi phải có chất lượng, mà chất lượng thì gắn với công nghệ nên phải đầu tư cho công nghệ. Khi lợi ích bị giới hạn bởi năng suất, thì phải chế biến nâng cao giá trị”, ông Thòn nói. Từ thực tiễn, cứ thế chuỗi giá trị Lộc Trời hình thành.\r\n\r\n“Nói thì dễ, làm không dễ”, ông Thòn bộc bạch: “Trong quá trình làm đã có xung đột trong tầm nhìn giữa lợi ích lâu dài và lợi ích trước mắt trong các cổ đông. Nhiều cổ đông muốn thu lời nhanh, chúng tôi đã phải khéo léo thay chỗ bằng các nhà đầu tư chiến lược có tầm nhìn xa, có trách nhiệm xã hội”. Một ví dụ về tầm nhìn xa, ông Thòn cho biết: “Nhà máy dầu cám chúng tôi làm hai năm vẫn chưa ra. Tại sao chậm? Nếu ăn xổi thì chỉ cho ra dầu cám là xong, nhưng đằng sau dầu cám là mỹ phẩm… cần quá trình dài”.\r\n\r\n \r\n\r\nKhông chờ đợi\r\n\r\nMôi trường kinh doanh đang không ủng hộ các doanh nghiệp làm ăn chân chính. Bà Trần Thị Diệu Hoàng, đại diện công ty Koyun & Unitek cho biết, Koyun & Unitek đang làm hồ sơ xuất khẩu đi Nhật. Nếu thành công, thì đây là công ty đầu tiên trong ngành chăn nuôi gà Việt Nam làm được việc này.\r\n\r\nBà Hoàng nhận xét: “Do quy hoạch không đồng bộ giữa khu dân cư và khu chăn nuôi, nên vùng đệm có một số nhà dân đến ở xen kẽ. Việc này ảnh hưởng đến việc chấm điểm đánh giá môi trường nuôi. Chăn nuôi ở Việt Nam theo hình thức nhỏ lẻ còn nhiều, gây khó khăn cho việc kiểm soát cúm gia cầm quốc gia và ảnh hưởng đến an toàn vùng đệm chăn nuôi. Trong khi đó, việc đánh giá xuất khẩu là đánh giá chuỗi. Nếu một khâu không đạt, thì chuỗi sẽ không đạt”.\r\n\r\nThị trường nội địa còn có tình trạng vàng thau lẫn lộn, sản phẩm sạch và không sạch đều có giá bán như nhau trong khi chi phí cho sản xuất sạch cao hơn.\r\n\r\n“Khó khăn thì vẫn phải làm, không thể chờ đợi”, nông dân Nguyễn Văn Ngọc, người có hơn 20 năm nuôi gà, từng vật lộn với con gà do giá cả thị trường bấp bênh, thiếu ổn định nói vậy. Không hoành tráng như Lộc Trời, nhưng trong khi nhiều chủ trang trại mất trắng, sạt nghiệp, ông Ngọc vẫn trụ vững và đến nay ông sở hữu 34 trại gà, mỗi trại có vốn đầu tư 2 tỉ đồng.\r\n\r\nNói như vậy để thấy, nếu biết cách làm, hoàn toàn có thể làm giàu với con gà. Nội lực Việt Nam đến từ chính những người như ông Ngọc. Để bảo vệ ngành chăn nuôi gà, ông Ngọc, trên cương vị là phó chủ tịch hiệp hội Gia cầm miền Đông, đã khởi xướng vụ kiện thịt gà Mỹ bán phá giá. Ông đích thân lặn lội sang các nước thu thập chứng cứ làm cơ sở cho vụ kiện.\r\n\r\nÔng Ngọc hiện đang tham gia vào chuỗi sản xuất gà sạch của công ty Belga. Phương thức chăn nuôi là công ty Belga cung cấp con giống từ châu Âu qua, công ty sản xuất thức ăn cung cấp thức ăn, công ty giết mổ thu mua sản phẩm bán ra thị trường. Trong chuỗi này, người chăn nuôi đóng vai trò trung tâm, chi phí đầu vào sẽ được kiểm soát để có giá thành tốt, các bên đều có lợi nhuận.\r\n\r\nÔng Phi Long, giám đốc công ty TNHH chăn nuôi Long Bình, áp dụng mô hình quản lý chuỗi như nước ngoài. Đàn gà của ông có 6.000 con, có lò giết mổ và bán gà đến tay người tiêu dùng theo thương  hiệu riêng. Ông Long cho biết sản xuất sạch là khó khăn và tốn kém. Nước trong trang trại phải sạch, uống được, không nhiễm kim loại nặng.\r\n\r\nGiết mổ xong phải đưa ngay vào môi trường lạnh. Lưu thông cũng phải bảo quản lạnh. Trong khi đó, hàng giao siêu thị lúc 5 giờ sáng thì 8 giờ nhân viên siêu thị mới đưa vào kho. Hàm lượng vi khuẩn trong sản phẩm sẽ tăng lên. Ông Long cho biết có lần kiểm tra vi sinh (thương hàn, E. coli) sản phẩm thịt tại siêu thị thì hàm lượng vi sinh tăng lên gấp 5.000 – 8.000 lần.\r\n\r\nTrước thực trạng đó, ông Long quyết định không đưa hàng vào siêu thị mà tổ chức tiêu thụ riêng và chấp nhận giá bán “vàng thau lẫn lộn”…\r\n\r\nTham gia TPP, áp lực cải cách thể chế sẽ lớn hơn, và môi trường kinh doanh sắp tới có thể sẽ được cải thiện, có thể nhanh, có thể chậm, tuỳ theo nỗ lực của Chính phủ. Nhưng dù nhanh hay chậm, doanh nghiệp vẫn nỗ lực, không chờ đợi...\r\n\r\nnguồn: http://danviet.vn/nha-nong/gap-go-nhung-nha-tien-phong-san-xuat-theo-chuoi-659415.html', '../HinhAnh/14582058549571_quan-ly-chuoi-cua-hang.jpg', '2016-04-13'),
(25, 'GÀ TƯƠI LONG BÌNH, TƯƠI NGON MỖI NGÀY', 'Hãy cùng Gà Tươi Long Bình mang lại bữa cơm cuối tuần cho gia đình! Nhân dịp khai trương chi nhánh mới, công ty chúng tôi đang có nhiều khuyến mãi cho khách hàng.', 'Hãy cùng Gà Tươi Long Bình mang lại bữa cơm cuối tuần cho gia đình! Nhân dịp khai trương chi nhánh mới, công ty chúng tôi đang có nhiều khuyến mãi cho khách hàng.\r\nHãy liên hệ với chúng tôi\" Gà Tươi Long Bình, Tươi Ngon Mỗi Ngày\".\r\nĐc: 438 Võ Văn Kiệt F. Cô Giang Quận 1\r\nCall: 0916.610.228\r\nRất hân hạnh phục vụ quý khách hàng!\r\n\r\n', '../HinhAnh/14581146692504_12289682_104950866543303_640651633900662918_n.jpg', '2016-04-13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tthongbao`
--

CREATE TABLE `tthongbao` (
  `MANV` char(5) NOT NULL,
  `NOIDUNG` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tthongbao`
--

INSERT INTO `tthongbao` (`MANV`, `NOIDUNG`) VALUES
('NVBH', 'Thêm khuyến mãi cho các kho miền nam'),
('NVGH', 'nhân viên giao hàng nhiều hơn ở khu vực miền  nam');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ttonkho`
--

CREATE TABLE `ttonkho` (
  `STT` int(5) NOT NULL,
  `MASP` char(8) NOT NULL,
  `MAKHO` char(12) NOT NULL,
  `SOLUONG` int(5) NOT NULL,
  `NGAYSX` date NOT NULL,
  `HANSD` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `ttonkho`
--

INSERT INTO `ttonkho` (`STT`, `MASP`, `MAKHO`, `SOLUONG`, `NGAYSX`, `HANSD`) VALUES
(55, 'a4', 'K1', 498, '2018-11-11', '2018-11-25'),
(56, 'a5', 'K1', 368, '2018-11-11', '2018-11-25'),
(57, 'a6', 'K1', 0, '2018-11-11', '2018-11-25'),
(58, 'a7', 'K1', 498, '2018-11-11', '2018-11-25'),
(59, 'a8', 'K1', 500, '2018-11-11', '2018-11-25'),
(61, 'a1', 'K2', 200, '2018-11-11', '2018-11-25'),
(62, 'a2', 'K2', 200, '2018-11-11', '2018-11-25'),
(63, 'a3', 'K2', 186, '2018-11-11', '2018-11-25'),
(64, 'a4', 'K2', 180, '2018-11-11', '2018-11-25'),
(65, 'a5', 'K2', 199, '2018-11-11', '2018-11-25'),
(66, 'a6', 'K2', 199, '2018-11-11', '2018-11-25'),
(67, 'a7', 'K2', 189, '2018-11-11', '2018-11-25'),
(68, 'a8', 'K2', 200, '2018-11-11', '2018-11-25'),
(69, 'a9', 'K2', 200, '2018-11-11', '2018-11-25'),
(71, 'a2', 'K3', 100, '2018-11-11', '2018-11-25'),
(72, 'a3', 'K3', 100, '2018-11-11', '2018-11-25'),
(74, 'a5', 'K3', 100, '2018-11-11', '2018-11-25'),
(77, 'a8', 'K3', 100, '2018-11-11', '2018-11-25'),
(78, 'a9', 'K3', 100, '2018-11-11', '2018-11-25'),
(79, 'a1', 'K1', 0, '2018-11-12', '2018-11-25'),
(81, 'a10', 'K1', 7, '2018-11-18', '2018-11-27'),
(83, 'a2', 'K1', 0, '2018-11-18', '2018-11-29'),
(85, 'a8', 'K1', 3, '2018-12-08', '2018-12-20'),
(87, 'a3', 'K3', 1, '2018-12-08', '2018-12-19'),
(88, 'a1', 'K3', 5, '2018-12-10', '2018-12-20'),
(89, 'a10', 'K3', 9, '2018-12-10', '2018-12-20'),
(90, 'a1', 'K1', 0, '2018-12-10', '2018-12-30'),
(91, 'a2', 'K1', 460, '2018-12-10', '2018-12-30'),
(92, 'a1', 'K3', 100, '2018-12-11', '2018-12-21'),
(93, 'a4', 'K3', 200, '2018-12-11', '2018-12-21'),
(94, 'a1', 'K1', 5, '2018-12-11', '2018-12-30'),
(95, 'a9', 'K2', 99, '2018-12-11', '2018-12-21'),
(96, 'a1', 'K3', 200, '2018-12-11', '2018-12-21'),
(97, 'a10', 'K3', 100, '2018-12-11', '2018-12-21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tuser`
--

CREATE TABLE `tuser` (
  `ID` varchar(16) NOT NULL,
  `MAND` char(5) NOT NULL DEFAULT 'CKH',
  `HOTEN` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `EMAIL` varchar(40) NOT NULL,
  `SODT` int(9) NOT NULL,
  `DIACHI` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `SOFAX` int(12) DEFAULT NULL,
  `TKNH` varchar(16) DEFAULT NULL,
  `VAITRO` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'KHÁCH HÀNG',
  `PASS` varchar(20) NOT NULL,
  `MAKH` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `tuser`
--

INSERT INTO `tuser` (`ID`, `MAND`, `HOTEN`, `EMAIL`, `SODT`, `DIACHI`, `SOFAX`, `TKNH`, `VAITRO`, `PASS`, `MAKH`) VALUES
('admin', 'AD', 'nguyen van admin', 'admin@gmail.com', 985654321, 'vinh long', NULL, NULL, 'ADMIN', 'admin', NULL),
('duongvanly', 'KH', 'Dương Văn Lý', 'duongvanly1996@gmail.com', 973918234, 'Đường 3/2, Xuân khánh, Ninh Kiều, Cần Thơ', 0, '', 'KHÁCH HÀNG', 'duongvanly', 784559),
('duongvanly1', 'KH', 'Duong Van Ly', 'lyb1400705@gmail.com', 973918239, 'da nang', 0, '', 'KHÁCH HÀNG', 'duongvanly1', 826978),
('huyhai', 'KH', 'Nguyễn Quang Huy Hải', 'huyhai@gmail.com', 987433345, '30/4, Ninh Kiều, Cần Thơ', 0, '', 'KHÁCH HÀNG', 'huyhai', NULL),
('nhanvienbh', 'NVBH', 'Trần Bán Hàng111', 'nvbh@gmail.com', 122654321, 'can tho', 0, '', 'NHÂN VIÊN BÁN HÀNG', 'nhanvienbh', NULL),
('nhanviengh', 'NVGH', 'NGuyễn giao hàng', 'giaohang@gmail.com', 987438983, 'ninh kiều, cần tho', 483564839, '934390590345803', 'NHÂN VIÊN GIAO HÀNG', 'nhanviengh', NULL),
('nhanvienkd', 'NVKD', 'kinh doanh 12', 'kinhdoanh@gmail.com', 987573828, '114a, Mậu Thân, Ninh Kiều, Cần Thơ', 444465653, '9834892304294828', 'NHÂN VIÊN KINH DOANH', 'nhanvienkd', NULL),
('vanly', 'KH', 'duong van Ly', 'duongvanly96@gmail.com', 974898072, 'Đường 3/2, Ninh Kiều, Cần Thơ', NULL, NULL, 'KHÁCH HÀNG', 'vanly1', 489572),
('vanlypro', 'KH', 'Đường Văn Lỳ', 'duongvanly12@gmail.com', 973918238, 'Ninh Kiều, Cần Thơ', NULL, NULL, 'KHÁCH HÀNG', 'vanlypro', 342421);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbeplb`
--
ALTER TABLE `tbeplb`
  ADD PRIMARY KEY (`STT`);

--
-- Chỉ mục cho bảng `tdonhang`
--
ALTER TABLE `tdonhang`
  ADD PRIMARY KEY (`MADH`),
  ADD KEY `fk_htk_ID1` (`ID`);

--
-- Chỉ mục cho bảng `tdonhangct`
--
ALTER TABLE `tdonhangct`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `fk_htk_MADH1` (`MADH`);

--
-- Chỉ mục cho bảng `tgiohang`
--
ALTER TABLE `tgiohang`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MASP` (`MASP`),
  ADD KEY `fk_htk_ID2` (`ID`);

--
-- Chỉ mục cho bảng `thuyhang`
--
ALTER TABLE `thuyhang`
  ADD PRIMARY KEY (`STT`);

--
-- Chỉ mục cho bảng `tkho`
--
ALTER TABLE `tkho`
  ADD PRIMARY KEY (`MAKHO`);

--
-- Chỉ mục cho bảng `tkhuyenmai`
--
ALTER TABLE `tkhuyenmai`
  ADD PRIMARY KEY (`STT`);

--
-- Chỉ mục cho bảng `tlienhe`
--
ALTER TABLE `tlienhe`
  ADD PRIMARY KEY (`STT`);

--
-- Chỉ mục cho bảng `tquytrinh`
--
ALTER TABLE `tquytrinh`
  ADD PRIMARY KEY (`DOT`,`LOAIGA`);

--
-- Chỉ mục cho bảng `tsanpham`
--
ALTER TABLE `tsanpham`
  ADD PRIMARY KEY (`MASP`);

--
-- Chỉ mục cho bảng `tsukien`
--
ALTER TABLE `tsukien`
  ADD PRIMARY KEY (`STT`);

--
-- Chỉ mục cho bảng `tthongbao`
--
ALTER TABLE `tthongbao`
  ADD PRIMARY KEY (`MANV`);

--
-- Chỉ mục cho bảng `ttonkho`
--
ALTER TABLE `ttonkho`
  ADD PRIMARY KEY (`STT`),
  ADD KEY `MAKHO` (`MAKHO`),
  ADD KEY `fk_htk_MASP` (`MASP`);

--
-- Chỉ mục cho bảng `tuser`
--
ALTER TABLE `tuser`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbeplb`
--
ALTER TABLE `tbeplb`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `tdonhangct`
--
ALTER TABLE `tdonhangct`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;

--
-- AUTO_INCREMENT cho bảng `tgiohang`
--
ALTER TABLE `tgiohang`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `thuyhang`
--
ALTER TABLE `thuyhang`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT cho bảng `tkhuyenmai`
--
ALTER TABLE `tkhuyenmai`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `tlienhe`
--
ALTER TABLE `tlienhe`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tquytrinh`
--
ALTER TABLE `tquytrinh`
  MODIFY `DOT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `tsukien`
--
ALTER TABLE `tsukien`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `ttonkho`
--
ALTER TABLE `ttonkho`
  MODIFY `STT` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tdonhang`
--
ALTER TABLE `tdonhang`
  ADD CONSTRAINT `fk_htk_ID1` FOREIGN KEY (`ID`) REFERENCES `tuser` (`ID`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tdonhangct`
--
ALTER TABLE `tdonhangct`
  ADD CONSTRAINT `fk_htk_MADH1` FOREIGN KEY (`MADH`) REFERENCES `tdonhang` (`MADH`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `tgiohang`
--
ALTER TABLE `tgiohang`
  ADD CONSTRAINT `fk_htk_ID2` FOREIGN KEY (`ID`) REFERENCES `tuser` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `tgiohang_ibfk_1` FOREIGN KEY (`MASP`) REFERENCES `tsanpham` (`MASP`),
  ADD CONSTRAINT `tgiohang_ibfk_2` FOREIGN KEY (`ID`) REFERENCES `tuser` (`ID`);

--
-- Các ràng buộc cho bảng `ttonkho`
--
ALTER TABLE `ttonkho`
  ADD CONSTRAINT `fk_htk_MASP` FOREIGN KEY (`MASP`) REFERENCES `tsanpham` (`MASP`) ON DELETE CASCADE,
  ADD CONSTRAINT `ttonkho_ibfk_1` FOREIGN KEY (`MASP`) REFERENCES `tsanpham` (`MASP`),
  ADD CONSTRAINT `ttonkho_ibfk_2` FOREIGN KEY (`MAKHO`) REFERENCES `tkho` (`MAKHO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
