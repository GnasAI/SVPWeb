
var city = document.getElementById('city');
var quan = document.getElementById('quan');
var xa = document.getElementById('xa')


city.addEventListener('change', function() {
    // Xóa tất cả các tùy chọn hiện có từ dropdown 'quan'
    while (quan.options.length > 0) {
        quan.remove(0);
    }
    while (xa.options.length > 0) {
        xa.remove(0);
    }
    // Thêm các quận/huyện tương ứng với tỉnh/thành phố được chọn
    if (city.value === "hcm") {
        var hcmDistricts = ["Huyện Bình Chánh","Huyện Cần Giờ","Huyện Củ Chi","Huyện Hóc Môn","Huyện Nhà Bè","Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7","Quận 8","Quận 10","Quận 11","Quận 12","Quận Bình Tân","Quận Bình Thạnh","Quận Gò Vấp","Quận Phú Nhuận","Quận Tân Phú","Thành Phố THủ Đức",];
        for (var i = 0; i < hcmDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = hcmDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "hn") {
        var hanoiDistricts = ["Quận Hoàn Kiếm", "Quận Đống Đa", "Quận Ba Đình", "Quận Hai Bà Trưng", "Quận Hoàng Mai", "Quận Thanh Xuân", "Quận Long Biên", "Huyện Nam Từ Liêm", "Huyện Bắc Từ Liêm", "Quận Tây Hồ", "Quận Cầu Giấy", "Huyện Hà Đông","Huyện Ba Vì", "Huyện Chương Mỹ", "Huyện Phúc Thọ", "Huyện Đan Phượng", "Huyện Đông Anh", "Huyện Gia Lâm", "Huyện Hoài Đức", "Huyện Mê Linh", "Huyện Mỹ Đức", "Huyện Phú Xuyên", "Huyện Quốc Oai", "Huyện Sóc Sơn", "Huyện Thạch Thất", "Huyện Thanh Oai", "Huyện Thường Tín", "Huyện Ứng Hòa", "Huyện Thanh Trì","Thị xã Sơn Tây"];
        for (var j = 0; j < hanoiDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = hanoiDistricts[j];
            quan.add(option);
        }
    }
    else if (city.value === "dn") {
        var danangDistricts = ["Quận Liên Chiểu", "Quận Hải Châu", "Quận Ngũ Hành Sơn", "Quận Sơn Trà", "Quận Cẩm Lệ", "Quận Thanh Khê","Huyện Hòa Vang","Huyện Hoàng Sa"];
        for (var k = 0; k < danangDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = danangDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "ag") {
        var angiangDistricts = ["Huyện An Phú", "Huyện Châu Phú", "Thị xã Tân Châu","Huyện Chợ Mới", "Thành phố Long Xuyên", "Thành phố Châu Đốc", "Huyện Tịnh Biên"];
        for (var l = 0; l < angiangDistricts.length; l++) {
            var option = document.createElement("option");
            option.text = angiangDistricts[l];
            quan.add(option);
        }
    }
    else if (city.value === "vt") {
        var bariavungtauDistricts = ["Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "Thành phố Vũng Tàu", "Thành phố Bà Rịa"];
        for (var m = 0; m < bariavungtauDistricts.length; m++) {
            var option = document.createElement("option");
            option.text = bariavungtauDistricts[m];
            quan.add(option);
        }
    }
    else if (city.value === "bd") {
        var binhduongDistricts = ["Thị xã Bến Cát", "Thị xã Dĩ An", "Huyện Dầu Tiếng", "Huyện Phú Giáo", "Huyện Tân Uyên", "Huyện Thuận An", "Thành phố Thủ Dầu Một"];
        for (var n = 0; n < binhduongDistricts.length; n++) {
            var option = document.createElement("option");
            option.text = binhduongDistricts[n];
            quan.add(option);
        }
    }
    else if (city.value === "bp") {
        var binhphuocDistricts = ["Huyện Bù Đăng", "Huyện Bù Đốp", "Huyện Bù Gia Mập", "Huyện Chơn Thành", "Huyện Đồng Phú", "Huyện Hớn Quản", "Huyện Lộc Ninh", "Huyện Phú Riềng", "Thị xã Bình Long", "Thị xã Đồng Xoài", "Thị xã Phước Long"];
        for (var i = 0; i < binhphuocDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = binhphuocDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "bt") {
        var binhthuanDistricts = ["Huyện Bắc Bình", "Huyện Đức Linh", "Huyện Hàm Tân", "Huyện Hàm Thuận Bắc", "Huyện Hàm Thuận Nam", "Huyện Phú Quý", "Huyện Tánh Linh", "Huyện Tuy Phong", "Thành phố Phan Thiết", "Thị xã La Gi"];
        for (var j = 0; j < binhthuanDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = binhthuanDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "bdinh") {
        var binhdinhDistricts = ["Huyện An Lão", "Huyện An Nhơn", "Huyện Hoài Ấu", "Huyện Hoài Nhơn", "Huyện Phù Cát", "Huyện Phù Mỹ", "Huyện Tây Sơn", "Huyện Tuy Phước", "Huyện Vân Canh", "Thành phố Qui Nhơn"];
        for (var k = 0; k < binhdinhDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = binhdinhDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "bl") {
        var baclieuDistricts = ["Huyện Đông Hải", "Huyện Giá Rai", "Huyện Hòa Bình", "Huyện Hồng Dân", "Huyện Phước Long", "Thành phố Bạc Liêu", "Thị xã Vĩnh Lợi"];
        for (var i = 0; i < baclieuDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = baclieuDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "bg") {
        var bacgiangDistricts = ["Huyện Hiệp Hòa", "Huyện Lạng Giang", "Huyện Lục Nam", "Huyện Lục Ngạn", "Huyện Sơn Động", "Huyện Tân Yên", "Huyện Việt Yên", "Huyện Yên Dũng", "Huyện Yên Thế", "Thành phố Bắc Giang"];
        for (var i = 0; i < bacgiangDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = bacgiangDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "bk") {
        var backanDistricts = ["Huyện Ba Bể", "Huyện Bạch Thông", "Huyện Chợ Đồn", "Huyện Chợ Mới", "Huyện Na Rì", "Huyện Ngân Sơn", "Huyện Pác Nặm", "Thành phố Bắc Kạn"];
        for (var k = 0; k < backanDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = backanDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "bn") {
        var bacninhDistricts = ["Huyện Gia Bình", "Huyện Lương Tài", "Huyện Quế Võ", "Huyện Thuận Thành", "Huyện Tiên Du", "Huyện Yên Phong", "Thành phố Bắc Ninh", "Thị xã Từ Sơn"];
        for (var i = 0; i < bacninhDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = bacninhDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "btre") {
        var bentreDistricts = ["Huyện Ba Tri", "Huyện Bình Đại", "Huyện Châu Thành", "Huyện Chợ Lách", "Huyện Giồng Trôm", "Huyện Mỏ Cày Bắc", "Huyện Mỏ Cày Nam", "Huyện Thạnh Phú", "Thành phố Bến Tre"];
        for (var j = 0; j < bentreDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = bentreDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "cbang") {
        var caobangDistricts = ["Huyện Bảo Lạc", "Huyện Bảo Lâm", "Huyện Hạ Lang", "Huyện Hà Quảng", "Huyện Hòa An", "Huyện Nguyên Bình", "Huyện Quảng Uyên", "Huyện Thạch An", "Huyện Trà Lĩnh", "Huyện Trùng Khánh", "Thành phố Cao Bằng"];
        for (var k = 0; k < caobangDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = caobangDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "cmau") {
        var camauDistricts = ["Huyện Cái Nước", "Huyện Đầm Dơi", "Huyện Năm Căn", "Huyện Ngọc Hiển", "Huyện Phú Tân", "Huyện Thới Bình", "Huyện Trần Văn Thời", "Thành phố Cà Mau", "Thị xã Cái Nước"];
        for (var i = 0; i < camauDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = camauDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "ctho") {
        var canthoDistricts = ["Huyện Cờ Đỏ", "Huyện Phong Điền", "Huyện Thới Lai", "Huyện Vĩnh Thạnh", "Quận Bình Thủy", "Quận Cái Răng", "Quận Ninh Kiều", "Quận Ô Môn"];
        for (var j = 0; j < canthoDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = canthoDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "glai") {
        var gialaiDistricts = ["Huyện Chư Păh", "Huyện Chư Prông", "Huyện Chư Pưh", "Huyện Chư Sê", "Huyện Đắk Đoa", "Huyện Đắk Pơ", "Huyện Đức Cơ", "Huyện Ia Grai", "Huyện Ia Pa", "Huyện K'Bang", "Huyện Kông Chro", "Huyện Krông Pa", "Huyện Mang Yang", "Huyện Phú Thiện", "Huyện Chư Pưh", "Thành phố Pleiku", "Thị xã An Khê", "Thị xã Ayun Pa", "Thị xã Kông Chro"];
        for (var k = 0; k < gialaiDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = gialaiDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "hgiang") {
        var hagiangDistricts = ["Huyện Bắc Mê", "Huyện Bắc Quang", "Huyện Đồng Văn", "Huyện Hoàng Su Phì", "Huyện Mèo Vạc", "Huyện Quản Bạ", "Huyện Quang Bình", "Huyện Vị Xuyên", "Huyện Xín Mần", "Thành phố Hà Giang"];
        for (var i = 0; i < hagiangDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = hagiangDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "hnam") {
        var hanamDistricts = ["Huyện Bình Lục", "Huyện Duy Tiên", "Huyện Kim Bảng", "Huyện Lý Nhân", "Huyện Thanh Liêm", "Thành phố Phủ Lý"];
        for (var j = 0; j < hanamDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = hanamDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "htinh") {
        var hatinhDistricts = ["Huyện Cẩm Xuyên", "Huyện Can Lộc", "Huyện Đức Thọ", "Huyện Hương Khê", "Huyện Hương Sơn", "Huyện Kỳ Anh", "Huyện Lộc Hà", "Huyện Nghi Xuân", "Huyện Thạch Hà", "Huyện Vũ Quang", "Thành phố Hà Tĩnh"];
        for (var k = 0; k < hatinhDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = hatinhDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "hbinh") {
        var hoabinhDistricts = ["Huyện Cao Phong", "Huyện Đà Bắc", "Huyện Kim Bôi", "Huyện Kỳ Sơn", "Huyện Lạc Sơn", "Huyện Lạc Thủy", "Huyện Lương Sơn", "Huyện Mai Châu", "Huyện Tân Lạc", "Huyện Yên Thủy", "Thành phố Hòa Bình"];
        for (var i = 0; i < hoabinhDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = hoabinhDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "hyen") {
        var hungyenDistricts = ["Huyện Ân Thi", "Huyện Khoái Châu", "Huyện Kim Động", "Huyện Mỹ Hào", "Huyện Phù Cừ", "Huyện Tiên Lữ", "Huyện Văn Giang", "Huyện Văn Lâm", "Huyện Yên Mỹ", "Thành phố Hưng Yên"];
        for (var j = 0; j < hungyenDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = hungyenDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "hduong") {
        var haiduongDistricts = ["Huyện Bình Giang", "Huyện Cẩm Giàng", "Huyện Gia Lộc", "Huyện Kim Thành", "Huyện Kinh Môn", "Huyện Nam Sách", "Huyện Ninh Giang", "Huyện Thanh Hà", "Huyện Thanh Miện", "Thành phố Chí Linh", "Thành phố Hải Dương", "Thị xã Kinh Môn"];
        for (var k = 0; k < haiduongDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = haiduongDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "hphong") {
        var haiphongDistricts = ["Huyện An Dương", "Huyện An Lão", "Huyện Bạch Long Vĩ", "Huyện Cát Hải", "Huyện Kiến Thụy", "Huyện Thủy Nguyên", "Huyện Tiên Lãng", "Huyện Vĩnh Bảo", "Quận Đồ Sơn", "Quận Dương Kinh", "Quận Hải An", "Quận Hồng Bàng", "Quận Kiến An", "Quận Lê Chân", "Quận Ngô Quyền"];
        for (var i = 0; i < haiphongDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = haiphongDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "hgiang") {
        var haugiangDistricts = ["Huyện Châu Thành", "Huyện Châu Thành A", "Huyện Long Mỹ", "Huyện Phụng Hiệp", "Thành phố Vị Thanh", "Thị xã Ngã Bảy"];
        for (var j = 0; j < haugiangDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = haugiangDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "khoa") {
        var khanhhoaDistricts = ["Huyện Cam Lâm", "Huyện Diên Khánh", "Huyện Khánh Sơn", "Huyện Khánh Vĩnh", "Huyện Trường Sa", "Thành phố Cam Ranh", "Thành phố Nha Trang", "Thị xã Ninh Hòa"];
        for (var k = 0; k < khanhhoaDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = khanhhoaDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "kgiang") {
        var kiengiangDistricts = ["Huyện An Biên", "Huyện An Minh", "Huyện Châu Thành", "Huyện Giang Thành", "Huyện Giồng Riềng", "Huyện Gò Quao", "Huyện Hòn Đất", "Huyện Kiên Hải", "Huyện Kiên Lương", "Huyện Phú Quốc", "Huyện Tân Hiệp", "Huyện U Minh Thượng", "Huyện Vĩnh Thuận", "Thành phố Rạch Giá", "Thị xã Hà Tiên"];
        for (var i = 0; i < kiengiangDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = kiengiangDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "ktum") {
        var kontumDistricts = ["Huyện Đắk Glei", "Huyện Đắk Hà", "Huyện Đắk Tô", "Huyện Kon Plông", "Huyện Kon Rẫy", "Huyện Ngọc Hồi", "Huyện Sa Thầy", "Thành phố Kon Tum", "Thị xã Kon Tum"];
        for (var j = 0; j < kontumDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = kontumDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "lchau") {
        var laichauDistricts = ["Huyện Mường Tè", "Huyện Phong Thổ", "Huyện Sìn Hồ", "Huyện Tam Đường", "Huyện Tân Uyên", "Huyện Than Uyên", "Thị xã Lai Châu"];
        for (var k = 0; k < laichauDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = laichauDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "lan") {
        var longanDistricts = ["Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc", "Huyện Châu Thành", "Huyện Đức Hòa", "Huyện Đức Huệ", "Huyện Mộc Hóa", "Huyện Tân Hưng", "Huyện Tân Thạnh", "Huyện Tân Trụ", "Huyện Thạnh Hóa", "Thành phố Tân An"];
        for (var i = 0; i < longanDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = longanDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "lcai") {
        var laocaiDistricts = ["Huyện Bắc Hà", "Huyện Bảo Thắng", "Huyện Bảo Yên", "Huyện Bát Xát", "Huyện Mường Khương", "Huyện Sa Pa", "Huyện Văn Bàn", "Thành phố Lào Cai"];
        for (var j = 0; j < laocaiDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = laocaiDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "ldong") {
        var lamdongDistricts = ["Huyện Bảo Lâm", "Huyện Cát Tiên", "Huyện Đạ Huoai", "Huyện Đạ Tẻh", "Huyện Đam Rông", "Huyện Di Linh", "Huyện Đơn Dương", "Huyện Đức Trọng", "Huyện Lạc Dương", "Thành phố Bảo Lộc", "Thành phố Đà Lạt"];
        for (var k = 0; k < lamdongDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = lamdongDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "lson") {
        var langsonDistricts = ["Huyện Bắc Sơn", "Huyện Bình Gia", "Huyện Cao Lộc", "Huyện Chi Lăng", "Huyện Đình Lập", "Huyện Hữu Lũng", "Huyện Lộc Bình", "Huyện Tràng Định", "Thành phố Lạng Sơn", "Thị xã Văn Lãng"];
        for (var i = 0; i < langsonDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = langsonDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "ndinh") {
        var namdinhDistricts = ["Huyện Giao Thủy", "Huyện Hải Hậu", "Huyện Mỹ Lộc", "Huyện Nam Trực", "Huyện Nghĩa Hưng", "Huyện Trực Ninh", "Huyện Vụ Bản", "Huyện Xuân Trường", "Huyện ý Yên", "Thành phố Nam Định"];
        for (var j = 0; j < namdinhDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = namdinhDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "nghean") {
        var ngheanDistricts = ["Huyện Anh Sơn", "Huyện Con Cuông", "Huyện Diễn Châu", "Huyện Đô Lương", "Huyện Hưng Nguyên", "Huyện Kỳ Sơn", "Huyện Nam Đàn", "Huyện Nghi Lộc", "Huyện Nghĩa Đàn", "Huyện Quế Phong", "Huyện Quỳ Châu", "Huyện Quỳ Hợp", "Huyện Quỳnh Lưu", "Huyện Tân Kỳ", "Huyện Thanh Chương", "Huyện Tương Dương", "Huyện Yên Thành", "Thành phố Vinh"];
        for (var k = 0; k < ngheanDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = ngheanDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "nbinh") {
        var ninhbinhDistricts = ["Huyện Gia Viễn", "Huyện Hoa Lư", "Huyện Kim Sơn", "Huyện Nho Quan", "Huyện Yên Khánh", "Thành phố Ninh Bình", "Thị xã Tam Điệp"];
        for (var i = 0; i < ninhbinhDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = ninhbinhDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "nthuan") {
        var ninhthuanDistricts = ["Huyện Bác Ái", "Huyện Ninh Hải", "Huyện Ninh Phước", "Huyện Ninh Sơn", "Thành phố Phan Rang-Tháp Chàm"];
        for (var j = 0; j < ninhthuanDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = ninhthuanDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "ptho") {
        var phuthoDistricts = ["Huyện Cẩm Khê", "Huyện Đoan Hùng", "Huyện Hạ Hòa", "Huyện Lâm Thao", "Huyện Phù Ninh", "Huyện Tam Nông", "Huyện Tân Sơn", "Huyện Thanh Ba", "Huyện Thanh Sơn", "Huyện Thanh Thuỷ", "Thành phố Việt Trì", "Thị xã Phú Thọ"];
        for (var k = 0; k < phuthoDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = phuthoDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "phuyen") {
        var phuyenDistricts = ["Huyện Đông Hòa", "Huyện Đồng Xuân", "Huyện Phú Hòa", "Huyện Sơn Hòa", "Huyện Sông Hinh", "Huyện Tây Hòa", "Thành phố Đông Hòa", "Thị xã Sông Cầu", "Thị xã Tuy Hòa"];
        for (var i = 0; i < phuyenDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = phuyenDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "quangbinh") {
        var quangbinhDistricts = ["Huyện Bố Trạch", "Huyện Lệ Thủy", "Huyện Minh Hóa", "Huyện Quảng Ninh", "Huyện Quảng Trạch", "Huyện Tuyên Hóa", "Thành phố Đồng Hới"];
        for (var j = 0; j < quangbinhDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = quangbinhDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "quangnam") {
        var quangnamDistricts = ["Huyện Bắc Trà My", "Huyện Đại Lộc", "Huyện Điện Bàn", "Huyện Đông Giang", "Huyện Duy Xuyên", "Huyện Hiệp Đức", "Huyện Nam Giang", "Huyện Nam Trà My", "Huyện Nông Sơn", "Huyện Núi Thành", "Huyện Phú Ninh", "Huyện Phước Sơn", "Huyện Quế Sơn", "Huyện Tây Giang", "Huyện Thăng Bình", "Huyện Tiên Phước", "Thành phố Điện Bàn", "Thành phố Hội An", "Thành phố Tam Kỳ"];
        for (var k = 0; k < quangnamDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = quangnamDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "quangngai") {
        var quangngaiDistricts = ["Huyện Ba Tơ", "Huyện Bình Sơn", "Huyện Đức Phổ", "Huyện Lý Sơn", "Huyện Minh Long", "Huyện Mộ Đức", "Huyện Nghĩa Hành", "Huyện Sơn Hà", "Huyện Sơn Tây", "Huyện Sơn Tịnh", "Huyện Tây Trà", "Huyện Trà Bồng", "Huyện Tư Nghĩa", "Thành phố Quảng Ngãi"];
        for (var i = 0; i < quangngaiDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = quangngaiDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "quangninh") {
        var quangninhDistricts = ["Huyện Ba Chẽ", "Huyện Bình Liêu", "Huyện Cô Tô", "Huyện Đầm Hà", "Huyện Đông Triều", "Huyện Hải Hà", "Huyện Hoành Bồ", "Huyện Tiên Yên", "Huyện Vân Đồn", "Thành phố Hạ Long", "Thành phố Móng Cái", "Thị xã Đông Triều", "Thị xã Quảng Yên", "Xã Ba Trại"];
        for (var j = 0; j < quangninhDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = quangninhDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "quangtri") {
        var quangtriDistricts = ["Huyện Cam Lộ", "Huyện Cồn Cỏ", "Huyện Đa Krông", "Huyện Gio Linh", "Huyện Hải Lăng", "Huyện Hướng Hóa", "Huyện Triệu Phong", "Thành phố Đông Hà", "Thị xã Quảng Trị"];
        for (var k = 0; k < quangtriDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = quangtriDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "soctrang") {
        var soctrangDistricts = ["Huyện Châu Thành", "Huyện Cù Lao Dung", "Huyện Kế Sách", "Huyện Long Phú", "Huyện Mỹ Tú", "Huyện Mỹ Xuyên", "Huyện Ngã Năm", "Huyện Thạnh Trị", "Huyện Trần Đề", "Thành phố Sóc Trăng", "Thị xã Vĩnh Châu"];
        for (var i = 0; i < soctrangDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = soctrangDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "sonla") {
        var sonlaDistricts = ["Huyện Bắc Yên", "Huyện Mai Sơn", "Huyện Mộc Châu", "Huyện Mường La", "Huyện Phù Yên", "Huyện Quỳnh Nhai", "Huyện Sông Mã", "Huyện Sốp Cộp", "Huyện Thuận Châu", "Huyện Vân Hồ", "Huyện Yên Châu", "Thành phố Sơn La"];
        for (var j = 0; j < sonlaDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = sonlaDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "thanhhoa") {
        var thanhhoaDistricts = ["Huyện Bá Thước", "Huyện Cẩm Thủy", "Huyện Đông Sơn", "Huyện Hà Trung", "Huyện Hậu Lộc", "Huyện Hoằng Hóa", "Huyện Lang Chánh", "Huyện Mường Lát", "Huyện Nga Sơn", "Huyện Ngọc Lặc", "Huyện Như Thanh", "Huyện Như Xuân", "Huyện Nông Cống", "Huyện Quan Hóa", "Huyện Quan Sơn", "Huyện Quảng Xương", "Huyện Thạch Thành", "Huyện Thiệu Hóa", "Huyện Thọ Xuân", "Huyện Thường Xuân", "Huyện Tĩnh Gia", "Huyện Triệu Sơn", "Huyện Vĩnh Lộc", "Huyện Yên Định", "Thành phố Thanh Hóa", "Thị xã Bỉm Sơn", "Thị xã Sầm Sơn"];
        for (var k = 0; k < thanhhoaDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = thanhhoaDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "thaibinh") {
        var thaibinhDistricts = ["Huyện Đông Hưng", "Huyện Hưng Hà", "Huyện Kiến Xương", "Huyện Quỳnh Phụ", "Huyện Thái Thụy", "Huyện Tiền Hải", "Huyện Vũ Thư", "Thành phố Thái Bình"];
        for (var i = 0; i < thaibinhDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = thaibinhDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "thainguyen") {
        var thainguyenDistricts = ["Huyện Đại Từ", "Huyện Định Hóa", "Huyện Đồng Hỷ", "Huyện Phổ Yên", "Huyện Phú Bình", "Huyện Phú Lương", "Huyện Võ Nhai", "Thành phố Sông Công", "Thành phố Thái Nguyên"];
        for (var j = 0; j < thainguyenDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = thainguyenDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "thuathienhue") {
        var hueDistricts = ["Huyện A Lưới", "Huyện Hương Thủy", "Huyện Hương Trà", "Huyện Nam Đông", "Huyện Phong Điền", "Huyện Phú Lộc", "Huyện Quảng Điền", "Thành phố Huế"];
        for (var k = 0; k < hueDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = hueDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "tiengiang") {
        var tiengiangDistricts = ["Huyện Cai Lậy", "Huyện Cái Bè", "Huyện Châu Thành", "Huyện Chợ Gạo", "Huyện Gò Công Đông", "Huyện Gò Công Tây", "Huyện Tân Phú Đông", "Huyện Tân Phước", "Thành phố Mỹ Tho"];
        for (var i = 0; i < tiengiangDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = tiengiangDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "travinh") {
        var travinhDistricts = ["Huyện Càng Long", "Huyện Cầu Kè", "Huyện Cầu Ngang", "Huyện Châu Thành", "Huyện Duyên Hải", "Huyện Tiểu Cần", "Huyện Trà Cú", "Thành phố Trà Vinh"];
        for (var j = 0; j < travinhDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = travinhDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "tuyenquang") {
        var tuyenquangDistricts = ["Huyện Chiêm Hóa", "Huyện Hàm Yên", "Huyện Lâm Bình", "Huyện Na Hang", "Huyện Sơn Dương", "Huyện Yên Sơn", "Thành phố Tuyên Quang"];
        for (var k = 0; k < tuyenquangDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = tuyenquangDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "tayninh") {
        var tayninhDistricts = ["Huyện Bến Cầu", "Huyện Châu Thành", "Huyện Dương Minh Châu", "Huyện Gò Dầu", "Huyện Hòa Thành", "Huyện Tân Biên", "Huyện Tân Châu", "Thị xã Tây Ninh"];
        for (var i = 0; i < tayninhDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = tayninhDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "vinhlong") {
        var vinhlongDistricts = ["Huyện Bình Tân", "Huyện Long Hồ", "Huyện Mang Thít", "Huyện Tam Bình", "Huyện Trà Ôn", "Huyện Vũng Liêm", "Thành phố Vĩnh Long"];
        for (var j = 0; j < vinhlongDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = vinhlongDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "vinhphuc") {
        var vinhphucDistricts = ["Huyện Bình Xuyên", "Huyện Lập Thạch", "Huyện Sông Lô", "Huyện Tam Đảo", "Huyện Tam Dương", "Huyện Vĩnh Tường", "Huyện Yên Lạc", "Thành phố Vĩnh Yên", "Thị xã Phúc Yên"];
        for (var k = 0; k < vinhphucDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = vinhphucDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "yenbai") {
        var yenbaiDistricts = ["Huyện Lục Yên", "Huyện Mù Cang Chải", "Huyện Trạm Tấu", "Huyện Trấn Yên", "Huyện Văn Chấn", "Huyện Văn Yên", "Huyện Yên Bình", "Thành phố Yên Bái"];
        for (var i = 0; i < yenbaiDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = yenbaiDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "dienbien") {
        var dienbienDistricts = ["Huyện Điện Biên", "Huyện Điện Biên Đông", "Huyện Mường Ảng", "Huyện Mường Chà", "Huyện Mường Nhé", "Huyện Mường Ới", "Thành phố Điện Biên Phủ", "Thị xã Mường Lay"];
        for (var j = 0; j < dienbienDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = dienbienDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "daklak") {
        var daklakDistricts = ["Huyện Buôn Đôn", "Huyện Cư Kuin", "Huyện Cư M'gar", "Huyện Ea H'leo", "Huyện Ea Kar", "Huyện Ea Súp", "Huyện Krông Ana", "Huyện Krông Bông", "Huyện Krông Buk", "Huyện Krông Năng", "Huyện Krông Pắc", "Huyện Lắk", "Thành phố Buôn Ma Thuột"];
        for (var k = 0; k < daklakDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = daklakDistricts[k];
            quan.add(option);
        }
    }
    else if (city.value === "daknong") {
        var daknongDistricts = ["Huyện Cư Jút", "Huyện Đắk GLong", "Huyện Đắk Mil", "Huyện Đắk RLấp", "Huyện Đắk Song", "Huyện KRông Nô", "Huyện Tuy Đức", "Thành phố Gia Nghĩa"];
        for (var i = 0; i < daknongDistricts.length; i++) {
            var option = document.createElement("option");
            option.text = daknongDistricts[i];
            quan.add(option);
        }
    } else if (city.value === "dongnai") {
        var dongnaiDistricts = ["Huyện Cẩm Mỹ", "Huyện Định Quán", "Huyện Long Thành", "Huyện Nhơn Trạch", "Huyện Tân Phú", "Huyện Thống Nhất", "Huyện Trảng Bom", "Huyện Vĩnh Cửu", "Huyện Xuân Lộc", "Thành phố Biên Hòa", "Thành phố Long Khánh"];
        for (var j = 0; j < dongnaiDistricts.length; j++) {
            var option = document.createElement("option");
            option.text = dongnaiDistricts[j];
            quan.add(option);
        }
    } else if (city.value === "dongthap") {
        var dongthapDistricts = ["Huyện Cao Lãnh", "Huyện Châu Thành", "Huyện Hồng Ngự", "Huyện Lai Vung", "Huyện Lấp Vò", "Huyện Tam Nông", "Huyện Tân Hồng", "Huyện Thanh Bình", "Huyện Tháp Mười", "Thành phố Cao Lãnh", "Thành phố Sa Đéc"];
        for (var k = 0; k < dongthapDistricts.length; k++) {
            var option = document.createElement("option");
            option.text = dongthapDistricts[k];
            quan.add(option);
        }
    }
});
quan.addEventListener('change',function(){
    
    if (quan.value === "Quận 1") {
        var quan1Wards = ["Phường Tân Định", "Phường Đa Kao", "Phường Bến Nghé", "Phường Bến Thành", "Phường Nguyễn Thái Bình", "Phường Phạm Ngũ Lão", "Phường Cầu Ông Lãnh", "Phường Cô Giang", "Phường Nguyễn Cư Trinh", "Phường Cầu Kho"];
        for (var i = 0; i < quan1Wards.length; i++) {
            var option = document.createElement("option");
            option.text = quan1Wards[i];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận 3") {
        var quan3Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var j = 0; j < quan3Wards.length; j++) {
            var option = document.createElement("option");
            option.text = quan3Wards[j];
            xa.add(option);
        }
    } else if (quan.value === "Quận 5") {
        var quan5Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var k = 0; k < quan5Wards.length; k++) {
            var option = document.createElement("option");
            option.text = quan5Wards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận 4") {
        var quan4Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var k = 0; k < quan4Wards.length; k++) {
            var option = document.createElement("option");
            option.text = quan4Wards[k];
            xa.add(option);
        }
    } else if (quan.value === "Quận 6") {
        var quan6Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var l = 0; l < quan6Wards.length; l++) {
            var option = document.createElement("option");
            option.text = quan6Wards[l];
            xa.add(option);
        }
    } else if (quan.value === "Quận 7") {
        var quan7Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var m = 0; m < quan7Wards.length; m++) {
            var option = document.createElement("option");
            option.text = quan7Wards[m];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận 8") {
        var quan8Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var n = 0; n < quan8Wards.length; n++) {
            var option = document.createElement("option");
            option.text = quan8Wards[n];
            xa.add(option);
        }
    } else if (quan.value === "Quận 10") {
        var quan10Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var p = 0; p < quan10Wards.length; p++) {
            var option = document.createElement("option");
            option.text = quan10Wards[p];
            xa.add(option);
        }
    } else if (quan.value === "Quận 11") {
        var quan11Wards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14"];
        for (var q = 0; q < quan11Wards.length; q++) {
            var option = document.createElement("option");
            option.text = quan11Wards[q];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận 12") {
        var quan12Wards = ["Phường Thạnh Lộc", "Phường Thạnh Xuân", "Phường Thạnh Lộc", "Phường Phú Thọ Hòa", "Phường Phú Thạnh", "Phường Phú Trung", "Phường Phú Hòa", "Phường Phú Đông"];
        for (var i = 0; i < quan12Wards.length; i++) {
            var option = document.createElement("option");
            option.text = quan12Wards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Bình Tân") {
        var binhTanWards = ["Phường Bình Hưng Hòa", "Phường Bình Hưng Hoà A", "Phường Bình Hưng Hoà B", "Phường Bình Trị Đông", "Phường Bình Trị Đông A", "Phường Bình Trị Đông B", "Phường Tân Tạo", "Phường Tân Tạo A", "Phường An Lạc", "Phường An Lạc A", "Phường Bình Hưng Hoà", "Phường Tân Thới Hiệp"];
        for (var j = 0; j < binhTanWards.length; j++) {
            var option = document.createElement("option");
            option.text = binhTanWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Quận Bình Thạnh") {
        var binhThanhWards = ["Phường 01", "Phường 02", "Phường 03", "Phường 04", "Phường 05", "Phường 06", "Phường 07", "Phường 08", "Phường 09", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18", "Phường 19", "Phường 20", "Phường 21", "Phường 22", "Phường 23", "Phường 24", "Phường 25", "Phường 26", "Phường 27", "Phường 28", "Phường 29", "Phường 30", "Phường Bình Thạnh"];
        for (var k = 0; k < binhThanhWards.length; k++) {
            var option = document.createElement("option");
            option.text = binhThanhWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận Gò Vấp") {
        var goVapWards = ["Phường 01", "Phường 02", "Phường 03", "Phường 04", "Phường 05", "Phường 06", "Phường 07", "Phường 08", "Phường 09", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17"];
        for (var i = 0; i < goVapWards.length; i++) {
            var option = document.createElement("option");
            option.text = goVapWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Phú Nhuận") {
        var phuNhuanWards = ["Phường 01", "Phường 02", "Phường 03", "Phường 04", "Phường 05", "Phường 06", "Phường 07", "Phường 08", "Phường 09", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18"];
        for (var j = 0; j < phuNhuanWards.length; j++) {
            var option = document.createElement("option");
            option.text = phuNhuanWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Quận Tân Phú") {
        var tanPhuWards = ["Phường Tân Sơn Nhì", "Phường Tây Thạnh", "Phường Sơn Kỳ", "Phường Tân Quý", "Phường Tân Thành", "Phường Phú Thọ Hòa", "Phường Phú Thạnh", "Phường Phú Trung", "Phường Hoà Thạnh", "Phường Hiệp Tân", "Phường Hiệp Phú", "Phường Hoà Thành"];
        for (var k = 0; k < tanPhuWards.length; k++) {
            var option = document.createElement("option");
            option.text = tanPhuWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bình Chánh") {
        var binhChanhWards = ["Xã Bình Chánh", "Xã Bình Hưng", "Xã Bình Lợi", "Xã Đa Phước", "Xã Hưng Long", "Xã Lê Minh Xuân", "Xã Phạm Văn Hai", "Xã Phong Phú", "Xã Quy Đức", "Xã Tân Kiên", "Xã Tân Nhựt", "Xã Tân Quý Tây", "Xã Vĩnh Lộc A", "Xã Vĩnh Lộc B"];
        for (var i = 0; i < binhChanhWards.length; i++) {
            var option = document.createElement("option");
            option.text = binhChanhWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cần Giờ") {
        var canGioWards = ["Thị trấn Cần Thạnh", "Xã An Thới Đông", "Xã Bình Khánh", "Xã Long Hòa", "Xã Lý Nhơn", "Xã Tam Thôn Hiệp", "Xã Thạnh An"];
        for (var j = 0; j < canGioWards.length; j++) {
            var option = document.createElement("option");
            option.text = canGioWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Củ Chi") {
        var cuChiWards = ["Thị trấn Củ Chi", "Xã An Nhơn Tây", "Xã An Phú", "Xã Bình Mỹ", "Xã Hòa Phú", "Xã Nhuận Đức", "Xã Phạm Văn Cội", "Xã Phú Hòa Đông", "Xã Phú Mỹ Hưng", "Xã Phước Hiệp", "Xã Phước Thạnh", "Xã Phước Vĩnh An", "Xã Tân An Hội", "Xã Tân Phú Trung", "Xã Tân Thạnh Đông", "Xã Tân Thạnh Tây", "Xã Tân Thông Hội", "Xã Thái Mỹ", "Xã Trung An", "Xã Trung Lập Hạ", "Xã Trung Lập Thượng", "Xã Trung Lập Trường"];
        for (var k = 0; k < cuChiWards.length; k++) {
            var option = document.createElement("option");
            option.text = cuChiWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Hóc Môn") {
        var hocMonWards = ["Xã An Nhơn Tây", "Xã Bà Điểm", "Xã Đông Thạnh", "Xã Hóc Môn", "Xã Tân Hiệp", "Xã Tân Thới Nhì", "Xã Thới Tam Thôn", "Xã Trung Chánh", "Xã Xuân Thới Đông", "Xã Xuân Thới Sơn"];
        for (var i = 0; i < hocMonWards.length; i++) {
            var option = document.createElement("option");
            option.text = hocMonWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nhà Bè") {
        var nhaBeWards = ["Thị trấn Nhà Bè", "Xã Hiệp Phước", "Xã Long Thới", "Xã Nhơn Đức", "Xã Phú Xuân", "Xã Phước Kiển", "Xã Phước Lộc", "Xã Phước Thuận", "Xã Phước Vĩnh An", "Xã Tân An", "Xã Tân Thạnh"];
        for (var j = 0; j < nhaBeWards.length; j++) {
            var option = document.createElement("option");
            option.text = nhaBeWards[j];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận Hoàn Kiếm") {
        var hoanKiemWards = ["Phường Phan Chu Trinh", "Phường Hàng Bạc", "Phường Hàng Bài", "Phường Hàng Trống", "Phường Cửa Đông", "Phường Lý Thái Tổ", "Phường Hàng Bồ", "Phường Hàng Gai", "Phường Chương Dương Độ", "Phường Hàng Đào", "Phường Hàng Bông", "Phường Tràng Tiền", "Phường Trần Hưng Đạo", "Phường Phan Chu Trinh", "Phường Hàng Bạc", "Phường Hàng Bài", "Phường Hàng Trống", "Phường Cửa Đông", "Phường Lý Thái Tổ", "Phường Hàng Bồ", "Phường Hàng Gai", "Phường Chương Dương Độ", "Phường Hàng Đào", "Phường Hàng Bông", "Phường Tràng Tiền", "Phường Trần Hưng Đạo"];
        for (var i = 0; i < hoanKiemWards.length; i++) {
            var option = document.createElement("option");
            option.text = hoanKiemWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Đống Đa") {
        var dongDaWards = ["Phường Cát Linh", "Phường Láng Thượng", "Phường Thịnh Quang", "Phường Trung Phụng", "Phường Trung Liệt", "Phường Phương Liên", "Phường Thịnh Quang", "Phường Trung Liệt", "Phường Khâm Thiên", "Phường Quốc Tử Giám", "Phường Thổ Quan", "Phường Trúc Bạch", "Phường Văn Chương", "Phường Ô Chợ Dừa", "Phường Ô Chợ Dừa", "Phường Quốc Tử Giám", "Phường Trúc Bạch", "Phường Văn Chương"];
        for (var j = 0; j < dongDaWards.length; j++) {
            var option = document.createElement("option");
            option.text = dongDaWards[j];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận Ba Đình") {
        var baDinhWards = ["Phường Trúc Bạch", "Phường Vĩnh Phúc", "Phường Cống Vị", "Phường Liễu Giai", "Phường Nguyễn Trung Trực", "Phường Quán Thánh", "Phường Ngọc Hà", "Phường Điện Biên", "Phường Đội Cấn", "Phường Ngọc Khánh", "Phường Kim Mã", "Phường Giảng Võ", "Phường Thành Công", "Phường Phúc Xá", "Phường Hàng Bài", "Phường Hàng Trống", "Phường Tràng Tiền"];
        for (var i = 0; i < baDinhWards.length; i++) {
            var option = document.createElement("option");
            option.text = baDinhWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Hai Bà Trưng") {
        var haiBaTrungWards = ["Phường Nguyễn Du", "Phường Bạch Đằng", "Phường Bách Khoa", "Phường Lê Đại Hành", "Phường Đồng Nhân", "Phường Phạm Đình Hổ", "Phường Lê Đại Hành", "Phường Ô Chợ Dừa", "Phường Đồng Tâm", "Phường Vĩnh Tuy", "Phường Bạch Mai", "Phường Quỳnh Lôi", "Phường Quỳnh Mai", "Phường Minh Khai", "Phường Thanh Lương", "Phường Đồng Tâm", "Phường Vĩnh Tuy"];
        for (var j = 0; j < haiBaTrungWards.length; j++) {
            var option = document.createElement("option");
            option.text = haiBaTrungWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Quận Hoàng Mai") {
        var hoangMaiWards = ["Phường Vĩnh Hưng", "Phường Vĩnh Tuy", "Phường Thanh Trì", "Phường Lĩnh Nam", "Phường Mai Động", "Phường Đồng Tâm", "Phường Đại Kim", "Phường Tân Mai", "Phường Hoàng Văn Thụ", "Phường Giáp Bát", "Phường Hoàng Liệt", "Phường Thịnh Liệt", "Phường Yên Sở", "Phường Trương Định"];
        for (var k = 0; k < hoangMaiWards.length; k++) {
            var option = document.createElement("option");
            option.text = hoangMaiWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận Thanh Xuân") {
        var thanhXuanWards = ["Phường Nhân Chính", "Phường Thượng Đình", "Phường Khương Trung", "Phường Khương Mai", "Phường Thanh Xuân Trung", "Phường Phương Liệt", "Phường Hạ Đình", "Phường Khương Đình", "Phường Thanh Xuân Bắc", "Phường Kim Giang", "Phường Ngã Tư Sở"];
        for (var i = 0; i < thanhXuanWards.length; i++) {
            var option = document.createElement("option");
            option.text = thanhXuanWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Long Biên") {
        var longBienWards = ["Phường Thượng Thanh", "Phường Ngọc Thụy", "Phường Ngọc Lâm", "Phường Sài Đồng", "Phường Long Biên", "Phường Phúc Đồng", "Phường Giang Biên", "Phường Phúc Lợi", "Phường Bồ Đề", "Phường Cự Khối", "Phường Gia Thụy", "Phường Ngọc Thuỵ"];
        for (var j = 0; j < longBienWards.length; j++) {
            var option = document.createElement("option");
            option.text = longBienWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nam Từ Liêm") {
        var namTuLiemWards = ["Phường Cầu Diễn", "Phường Xuân Phương", "Phường Phú Diễn", "Phường Mỹ Đình 1", "Phường Mỹ Đình 2", "Phường Tây Mỗ", "Phường Mễ Trì", "Phường Phương Canh", "Phường Trung Văn"];
        for (var k = 0; k < namTuLiemWards.length; k++) {
            var option = document.createElement("option");
            option.text = namTuLiemWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bắc Từ Liêm") {
        var bacTuLiemWards = ["Xã Thụy Phương", "Xã Xuân Dương", "Xã Quốc Oai", "Xã Phú Cát", "Xã Phú Mãn", "Xã Đông Xuân", "Xã Đông La", "Xã Tân Hòa", "Xã Hồng Hà", "Xã Yên Sở", "Xã Yên Bình"];
        for (var i = 0; i < bacTuLiemWards.length; i++) {
            var option = document.createElement("option");
            option.text = bacTuLiemWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Tây Hồ") {
        var tayHoWards = ["Phường Phú Thượng", "Phường Nhật Tân", "Phường Tứ Liên", "Phường Quảng An", "Phường Xuân La", "Phường Yên Phụ", "Phường Bưởi", "Phường Thụy Khuê", "Phường Thượng Thanh", "Phường Ngọc Hà"];
        for (var j = 0; j < tayHoWards.length; j++) {
            var option = document.createElement("option");
            option.text = tayHoWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Quận Cầu Giấy") {
        var cauGiayWards = ["Phường Nghĩa Đô", "Phường Nghĩa Tân", "Phường Mai Dịch", "Phường Dịch Vọng", "Phường Dịch Vọng Hậu", "Phường Quan Hoa", "Phường Yên Hòa", "Phường Trung Hoà", "Phường Phúc Diễn", "Phường Xuân Phương"];
        for (var k = 0; k < cauGiayWards.length; k++) {
            var option = document.createElement("option");
            option.text = cauGiayWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Hà Đông") {
        var haDongWards = ["Xã Biên Giang", "Xã Dương Nội", "Xã Kiến Hưng", "Xã La Phù", "Xã Phú La", "Xã Phú Lãm", "Xã Phú Lương", "Xã Phúc La", "Xã Quang Trung", "Xã Văn Khê", "Xã Yên Nghĩa"];
        for (var i = 0; i < haDongWards.length; i++) {
            var option = document.createElement("option");
            option.text = haDongWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ba Vì") {
        var baViWards = ["Thị trấn Tây Đằng", "Xã Ba Trại", "Xã Ba Vì", "Xã Cẩm Lĩnh", "Xã Châu Sơn", "Xã Chu Minh", "Xã Cổ Đô", "Xã Đông Quang", "Xã Đồng Thái", "Xã Khánh Thượng", "Xã Minh Châu", "Xã Minh Quang", "Xã Phong Vân", "Xã Phú Châu", "Xã Phú Cường", "Xã Phú Đông", "Xã Phú Phương", "Xã Sơn Đà", "Xã Tản Hồng", "Xã Tản Lĩnh", "Xã Thái Hòa", "Xã Thuần Mỹ", "Xã Thụy An", "Xã Tiên Phong", "Xã Tòng Bạt", "Xã Vân Hòa", "Xã Vạn Thắng"];
        for (var j = 0; j < baViWards.length; j++) {
            var option = document.createElement("option");
            option.text = baViWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chương Mỹ") {
        var chuongMyWards = ["Thị trấn Chúc Sơn", "Xã Đại Yên", "Xã Đồng Lạc", "Xã Đồng Phú", "Xã Đông Phương Yên", "Xã Hoàng Diệu", "Xã Hòa Chính", "Xã Hồng Phong", "Xã Hợp Đồng", "Xã Hữu Văn", "Xã Lam Điền", "Xã Mỹ Lương", "Xã Nam Phương Tiến", "Xã Ngọc Hòa", "Xã Phụng Châu", "Xã Phú Nam An", "Xã Phú Nghĩa", "Xã Phú Thịnh", "Xã Quảng Bị", "Xã Tân Tiến", "Xã Thanh Bình", "Xã Thụy Hương", "Xã Thủy Xuân Tiên", "Xã Tiền Phong", "Xã Tốt Động", "Xã Trần Phú"];
        for (var k = 0; k < chuongMyWards.length; k++) {
            var option = document.createElement("option");
            option.text = chuongMyWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Phúc Thọ") {
        var phucThoWards = ["Thị trấn Phúc Thọ", "Xã Hát Môn", "Xã Liên Hiệp", "Xã Liên Hồng", "Xã Liên Trung", "Xã Phúc Hòa", "Xã Phúc Thọ", "Xã Sen Phương", "Xã Tam Hiệp", "Xã Tam Thuấn", "Xã Thanh Đa", "Xã Thọ Lộc", "Xã Thượng Cốc", "Xã Tích Giang", "Xã Trạch Mỹ Lộc", "Xã Vân Hà", "Xã Vân Nam", "Xã Vân Phúc"];
        for (var i = 0; i < phucThoWards.length; i++) {
            var option = document.createElement("option");
            option.text = phucThoWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đan Phượng") {
        var danPhuongWards = ["Thị trấn Đan Phượng", "Xã Đan Phượng", "Xã Đồng Tháp", "Xã Hồng Hà", "Xã Liên Hồng", "Xã Liên Hà", "Xã Liên Trung", "Xã Phùng", "Xã Song Phượng", "Xã Tân Hội", "Xã Thọ An", "Xã Thọ Xuân", "Xã Thượng Mỗ", "Xã Trung Châu"];
        for (var j = 0; j < danPhuongWards.length; j++) {
            var option = document.createElement("option");
            option.text = danPhuongWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đông Anh") {
        var dongAnhWards = ["Thị trấn Đông Anh", "Xã Bắc Hồng", "Xã Cổ Loa", "Xã Đại Mạch", "Xã Đông Hội", "Xã Dục Tú", "Xã Kim Chung", "Xã Kim Nỗ", "Xã Liên Hà", "Xã Mai Lâm", "Xã Nam Hồng", "Xã Nguyên Khê", "Xã Tàm Xá", "Xã Thụy Lâm", "Xã Tiên Dương", "Xã Uy Nỗ", "Xã Vân Hà", "Xã Vân Nội", "Xã Vân Phú", "Xã Vân Trì"];
        for (var k = 0; k < dongAnhWards.length; k++) {
            var option = document.createElement("option");
            option.text = dongAnhWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Gia Lâm") {
        var giaLamWards = ["Thị trấn Trâu Quỳ", "Xã Yên Viên", "Xã Yên Thường", "Xã Yên Thế", "Xã Yên Phụ", "Xã Yên Hưng", "Xã Yên Thọ", "Xã Yên Bình", "Xã Yên Lộc", "Xã Ninh Hiệp", "Xã Đình Xuyên", "Xã Đình Thụ", "Xã Đình Hiệp", "Xã Đình Tân", "Xã Đình Hà", "Xã Đình Đông", "Xã Dương Hà", "Xã Phù Đổng"];
        for (var i = 0; i < giaLamWards.length; i++) {
            var option = document.createElement("option");
            option.text = giaLamWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoài Đức") {
        var hoaiDucWards = ["Thị trấn Trạm Trôi", "Xã Đức Giang", "Xã Đức Thượng", "Xã Đức Vân", "Xã Đức Chương", "Xã Đức Lương", "Xã Đức Thanh", "Xã Đức Hòa", "Xã Đức Thắng", "Xã Đông La", "Xã Kim Chung", "Xã La Phù", "Xã Minh Khai", "Xã Song Phương", "Xã Sơn Đồng", "Xã Tiền Yên", "Xã Vân Canh", "Xã Vân Côn"];
        for (var j = 0; j < hoaiDucWards.length; j++) {
            var option = document.createElement("option");
            option.text = hoaiDucWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mê Linh") {
        var meLinhWards = ["Thị trấn Chi Đông", "Xã Chu Phan", "Xã Đại Thịnh", "Xã Hoàng Kim", "Xã Hoàng Thạch", "Xã Liên Mạc", "Xã Mê Linh", "Xã Quang Minh", "Xã Tiền Phong", "Xã Tiến Thắng", "Xã Tiến Thịnh", "Xã Tráng Việt", "Xã Tự Lập", "Xã Văn Khê", "Xã Vạn Yên"];
        for (var k = 0; k < meLinhWards.length; k++) {
            var option = document.createElement("option");
            option.text = meLinhWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Mỹ Đức") {
        var myDucWards = ["Thị trấn Đại Nghĩa", "Xã Đồng Tâm", "Xã Đồng Văn", "Xã Hồng Sơn", "Xã Hợp Thanh", "Xã Hợp Tiến", "Xã Hùng Tiến", "Xã Hương Sơn", "Xã Lê Thanh", "Xã Mỹ Thành", "Xã Phúc Lâm", "Xã Phùng Xá", "Xã Thượng Lâm", "Xã Tuy Lai"];
        for (var i = 0; i < myDucWards.length; i++) {
            var option = document.createElement("option");
            option.text = myDucWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Xuyên") {
        var phuXuyenWards = ["Thị trấn Phú Minh", "Xã Chuyên Mỹ", "Xã Đại Thắng", "Xã Đồng Tâm", "Xã Hoàng Long", "Xã Hồng Minh", "Xã Hồng Thái", "Xã Khai Thái", "Xã Minh Tân", "Xã Nam Phong", "Xã Nam Triều", "Xã Phú Túc", "Xã Phú Xuyên", "Xã Phú Yên", "Xã Phúc Tiến", "Xã Phượng Dực", "Xã Quang Lãng", "Xã Quang Trung", "Xã Sơn Hà", "Xã Tri Thủy"];
        for (var j = 0; j < phuXuyenWards.length; j++) {
            var option = document.createElement("option");
            option.text = phuXuyenWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quốc Oai") {
        var quocOaiWards = ["Thị trấn Quốc Oai", "Xã Cấn Hữu", "Xã Cộng Hòa", "Xã Đại Thành", "Xã Đông Xuân", "Xã Đông Yên", "Xã Hòa Thạch", "Xã Liệp Tuyết", "Xã Nghĩa Hương", "Xã Ngọc Liệp", "Xã Ngọc Mỹ", "Xã Phú Cát", "Xã Phú Mãn", "Xã Phượng Cách", "Xã Sài Sơn", "Xã Tân Hòa", "Xã Tân Phú", "Xã Thạch Thán", "Xã Thái Hòa", "Xã Tuyết Nghĩa"];
        for (var k = 0; k < quocOaiWards.length; k++) {
            var option = document.createElement("option");
            option.text = quocOaiWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Sóc Sơn") {
        var socSonWards = ["Thị trấn Sóc Sơn", "Xã Bắc Sơn", "Xã Bắc Phú", "Xã Cổ Loa", "Xã Đông Xuân", "Xã Đức Hoà", "Xã Hiền Ninh", "Xã Hồng Kỳ", "Xã Kim Lũ", "Xã Mai Đình", "Xã Minh Phú", "Xã Minh Trí", "Xã Nam Sơn", "Xã Phù Linh", "Xã Phù Lỗ", "Xã Phú Cường", "Xã Phú Minh", "Xã Quang Tiến", "Xã Sơn Đông", "Xã Tân Dân", "Xã Tân Hưng", "Xã Tân Minh", "Xã Thanh Xuân", "Xã Tiên Dược", "Xã Trung Giã", "Xã Việt Long"];
        for (var i = 0; i < socSonWards.length; i++) {
            var option = document.createElement("option");
            option.text = socSonWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạch Thất") {
        var thachThatWards = ["Thị trấn Liên Quan", "Xã Bình Phú", "Xã Cẩm Yên", "Xã Canh Nậu", "Xã Chàng Sơn", "Xã Đại Đồng", "Xã Đồng Trúc", "Xã Hữu Bằng", "Xã Hữu Sản", "Xã Kim Quan", "Xã Lại Thượng", "Xã Phú Kim", "Xã Phùng Xá", "Xã Phúc Lâm", "Xã Phúc Sơn", "Xã Quế", "Xã Song Phượng", "Xã Tiến Xuân", "Xã Tân Xã", "Xã Thạch Hoà", "Xã Thạch Xá", "Xã Tuy Lai"];
        for (var j = 0; j < thachThatWards.length; j++) {
            var option = document.createElement("option");
            option.text = thachThatWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Oai") {
        var thanhOaiWards = ["Thị trấn Thanh Oai", "Xã Bích Hòa", "Xã Bình Minh", "Xã Cao Dương", "Xã Cao Viên", "Xã Cự Khê", "Xã Dân Hòa", "Xã Đỗ Động", "Xã Đông Cửu", "Xã Hồng Dương", "Xã Liên Châu", "Xã Minh Cường", "Xã Nam Cường", "Xã Phương Liệt", "Xã Sơn Hà", "Xã Tam Hồng", "Xã Tân Hòa", "Xã Thanh Cao", "Xã Thanh Mai", "Xã Thanh Thùy", "Xã Thanh Văn", "Xã Thanh Xuân", "Xã Tiền Phong", "Xã Xuân Dương", "Xã Xuân Tảo"];
        for (var k = 0; k < thanhOaiWards.length; k++) {
            var option = document.createElement("option");
            option.text = thanhOaiWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Thường Tín") {
        var thuongTinWards = ["Thị trấn Thường Tín", "Xã Chương Dương", "Xã Dũng Tiến", "Xã Hiền Giang", "Xã Hòa Bình", "Xã Hồng Vân", "Xã Khánh Hà", "Xã Liên Phương", "Xã Lưu Hoàng", "Xã Minh Cường", "Xã Nghiêm Xuyên", "Xã Nguyễn Trãi", "Xã Nhị Khê", "Xã Ninh Sở", "Xã Quất Động", "Xã Tân Minh", "Xã Thắng Lợi", "Xã Thống Nhất", "Xã Thư Phú", "Xã Tiền Phong", "Xã Tô Hiệu", "Xã Tự Nhiên", "Xã Văn Bình", "Xã Vạn Điểm", "Xã Văn Phú", "Xã Vân Tảo", "Xã Vân Từ", "Xã Vân Đình", "Xã Văn Tự", "Xã Vạn Thái"];
        for (var i = 0; i < thuongTinWards.length; i++) {
            var option = document.createElement("option");
            option.text = thuongTinWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ứng Hòa") {
        var ungHoaWards = ["Thị trấn Vân Đình", "Xã Cao Thành", "Xã Đại Cường", "Xã Đại Hùng", "Xã Đội Bình", "Xã Đông Lỗ", "Xã Đồng Tân", "Xã Hòa Lâm", "Xã Hòa Nam", "Xã Hòa Phú", "Xã Hòa Thạch", "Xã Hòa Xá", "Xã Hồng Quang", "Xã Liên Bạt", "Xã Lưu Hoàng", "Xã Minh Đạo", "Xã Phù Lưu", "Xã Phương Tú", "Xã Quảng Phú Cầu", "Xã Sơn Công", "Xã Tảo Dương Văn", "Xã Thọ Thanh", "Xã Trầm Lộng", "Xã Trung Tú", "Xã Trường Thịnh", "Xã Vạn Thái", "Xã Vân Hội", "Xã Vạn Xuân", "Xã Xuân Thành"];
        for (var j = 0; j < ungHoaWards.length; j++) {
            var option = document.createElement("option");
            option.text = ungHoaWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Trì") {
        var thanhTriWards = ["Thị trấn Thanh Trì", "Xã Cự Khê", "Xã Duyên Hà", "Xã Ngọc Hồi", "Xã Ngũ Hiệp", "Xã Tả Thanh Oai", "Xã Tam Hiệp", "Xã Tân Triều", "Xã Thanh Liệt", "Xã Tứ Hiệp", "Xã Văn Điển", "Xã Vạn Phúc", "Xã Vĩnh Quỳnh", "Xã Yên Mỹ"];
        for (var k = 0; k < thanhTriWards.length; k++) {
            var option = document.createElement("option");
            option.text = thanhTriWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Sơn Tây") {
        var sonTayWards = ["Phường Ngô Quyền", "Phường Phú Thịnh", "Phường Quang Trung", "Phường Sơn Lộc", "Phường Sơn Tây", "Xã Cổ Đông", "Xã Đường Lâm", "Xã Kim Sơn", "Xã Minh Quang", "Xã Phú Sơn", "Xã Sơn Đông", "Xã Thanh Mỹ"];
        for (var l = 0; l < sonTayWards.length; l++) {
            var option = document.createElement("option");
            option.text = sonTayWards[l];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận Liên Chiểu") {
        var lienChieuWards = ["Phường Hòa Hiệp Bắc", "Phường Hòa Hiệp Nam", "Phường Hòa Khánh Bắc", "Phường Hòa Khánh Nam", "Phường Hòa Minh"];
        for (var i = 0; i < lienChieuWards.length; i++) {
            var option = document.createElement("option");
            option.text = lienChieuWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Hải Châu") {
        var haiChauWards = ["Phường Bình Hiên", "Phường Bình Thuận", "Phường Hải Châu 1", "Phường Hải Châu 2", "Phường Hòa Cường Bắc", "Phường Hòa Cường Nam", "Phường Hòa Thuận Đông", "Phường Hòa Thuận Tây", "Phường Nam Dương", "Phường Phước Ninh", "Phường Thạch Thang", "Phường Thanh Bình", "Phường Thuận Phước"];
        for (var j = 0; j < haiChauWards.length; j++) {
            var option = document.createElement("option");
            option.text = haiChauWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Quận Ngũ Hành Sơn") {
        var nguHanhSonWards = ["Phường Hòa Hải", "Phường Khuê Mỹ", "Phường Mỹ An"];
        for (var k = 0; k < nguHanhSonWards.length; k++) {
            var option = document.createElement("option");
            option.text = nguHanhSonWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Quận Sơn Trà") {
        var sonTraWards = ["Phường An Hải Bắc", "Phường An Hải Đông", "Phường An Hải Tây", "Phường Mân Thái", "Phường Nại Hiên Đông", "Phường Phước Mỹ", "Phường Thọ Quang"];
        for (var l = 0; l < sonTraWards.length; l++) {
            var option = document.createElement("option");
            option.text = sonTraWards[l];
            xa.add(option);
        }
    }
    else if (quan.value === "Quận Cẩm Lệ") {
        var camLeWards = ["Phường Hòa An", "Phường Hòa Phát", "Phường Hòa Thọ Đông", "Phường Hòa Thọ Tây", "Phường Hòa Xuân"];
        for (var i = 0; i < camLeWards.length; i++) {
            var option = document.createElement("option");
            option.text = camLeWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Quận Thanh Khê") {
        var thanhKheWards = ["Phường An Khê", "Phường Chính Gián", "Phường Hòa Khê", "Phường Tam Thuận", "Phường Thanh Khê Đông", "Phường Thanh Khê Tây", "Phường Thạc Gián"];
        for (var j = 0; j < thanhKheWards.length; j++) {
            var option = document.createElement("option");
            option.text = thanhKheWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hòa Vang") {
        var hoaVangWards = ["Phường Hòa Bắc", "Phường Hòa Châu", "Phường Hòa Khương", "Phường Hòa Liên", "Phường Hòa Nhơn", "Phường Hòa Ninh", "Phường Hòa Phong", "Phường Hòa Phú", "Phường Hòa Phước", "Phường Hòa Sơn", "Phường Hòa Tiến", "Xã Hòa Bắc"];
        for (var i = 0; i < hoaVangWards.length; i++) {
            var option = document.createElement("option");
            option.text = hoaVangWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoàng Sa") {
        var hoangSaWards = ["Phường Hoàng Sa"];
        for (var j = 0; j < hoangSaWards.length; j++) {
            var option = document.createElement("option");
            option.text = hoangSaWards[j];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện An Phú") {
        var anPhuWards = ["Thị trấn An Phú", "Xã Long Bình", "Xã Long Hiệp", "Xã Long Huỳnh", "Xã Long Phú", "Xã Phú Hữu", "Xã Phú Khánh", "Xã Phú Nhuận", "Xã Phú Thạnh"];
        for (var i = 0; i < anPhuWards.length; i++) {
            var option = document.createElement("option");
            option.text = anPhuWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Phú") {
        var chauPhuWards = ["Thị trấn Châu Phú A", "Thị trấn Châu Phú B", "Xã Bình Chánh", "Xã Bình Long", "Xã Bình Mỹ", "Xã Bình Thủy", "Xã Chợ Vàm", "Xã Đào Hữu Cảnh", "Xã Hòa An", "Xã Khánh Hòa", "Xã Mỹ Chánh", "Xã Mỹ Hội", "Xã Mỹ Đông", "Xã Mỹ Quý", "Xã Ô Long Vỹ", "Xã Vĩnh Thạnh Trung"];
        for (var j = 0; j < chauPhuWards.length; j++) {
            var option = document.createElement("option");
            option.text = chauPhuWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Châu Thành", "Xã Đồng Khánh", "Xã Hòa Lợi", "Xã Hòa Minh", "Xã Hòa Thuận", "Xã Phú An", "Xã Phú Bình", "Xã Phú Long", "Xã Phú Thành A", "Xã Phú Thành B", "Xã Vĩnh Bảo"];
        for (var k = 0; k < chauThanhWards.length; k++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chợ Mới") {
        var choMoiWards = ["Thị trấn Chợ Mới", "Xã An Thạnh Trung", "Xã Hòa An", "Xã Hòa Bình", "Xã Hội An", "Xã Kiến An", "Xã Long Điền A", "Xã Long Điền B", "Xã Long Giang", "Xã Long Kiến", "Xã Mỹ An", "Xã Mỹ Hội Đông", "Xã Mỹ Hội Tây", "Xã Mỹ Đông", "Xã Nhơn Mỹ", "Xã Tân An Thạnh", "Xã Tân Hội", "Xã Tân Trung", "Xã Thạnh Đức", "Xã Thạnh Quới"];
        for (var l = 0; l < choMoiWards.length; l++) {
            var option = document.createElement("option");
            option.text = choMoiWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Tân Châu") {
        var tanChauWards = ["Phường Long Thạnh", "Phường Long Hưng", "Phường Long Hội", "Phường Long Châu", "Phường Phú Lợi", "Phường Bình Đức", "Phường Long Trị", "Xã Phú Vĩnh", "Xã Lê Chánh", "Xã Phú Thạnh", "Xã Tân An", "Xã Hòa Bình", "Xã An Khánh", "Xã Gia Lạc", "Xã Phú Văn", "Xã Lê Thạnh"];
        for (var m = 0; m < tanChauWards.length; m++) {
            var option = document.createElement("option");
            option.text = tanChauWards[m];
            xa.add(option);
        }
    }
     else if (quan.value === "Thành phố Long Xuyên") {
        var longXuyenWards = ["Phường Mỹ Bình", "Phường Mỹ Long", "Phường Đông Xuyên", "Phường Bình Khánh", "Phường Bình Đức", "Phường Mỹ Phước", "Phường Mỹ Hoà", "Phường Mỹ Quý", "Phường Mỹ Thới", "Xã Đạo Long", "Xã Đạo Thạnh", "Xã Trường Long", "Xã Trường Xuân"];
        for (var k = 0; k < longXuyenWards.length; k++) {
            var option = document.createElement("option");
            option.text = longXuyenWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Châu Đốc") {
        var chauDocWards = ["Phường Châu Phú B", "Phường Châu Phú A", "Phường Vĩnh Mỹ", "Phường Núi Sam", "Phường Vĩnh Tế", "Xã Vĩnh Châu", "Xã Vĩnh Tế"];
        for (var l = 0; l < chauDocWards.length; l++) {
            var option = document.createElement("option");
            option.text = chauDocWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tịnh Biên") {
        var tinhBienWards = ["Thị trấn Tịnh Biên", "Xã An Cư", "Xã An Hòa", "Xã An Nông", "Xã An Phú", "Xã An Thạnh", "Xã An Tịnh", "Xã An Định", "Xã Ba Chúc"];
        for (var m = 0; m < tinhBienWards.length; m++) {
            var option = document.createElement("option");
            option.text = tinhBienWards[m];
            xa.add(option);
        }
    } 
    else if (quan.value === "Huyện Châu Đức") {
        var chauDucWards = ["Thị trấn Ngãi Giao", "Xã Bàu Năm", "Xã Bình Ba", "Xã Suối Nghệ", "Xã Sơn Bình", "Xã Bình Sơn", "Xã Bình Hòa", "Xã Minh Đức", "Xã Kim Long", "Xã Đá Bạc", "Xã Xuân Sơn", "Xã Nhân Nghĩa"];
        for (var i = 0; i < chauDucWards.length; i++) {
            var option = document.createElement("option");
            option.text = chauDucWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Côn Đảo") {
        var conDaoWards = ["Thị trấn Côn Đảo", "Xã Bình Sơn", "Xã Bông Lan", "Xã Bưng Riềng", "Xã Côn Đảo"];
        for (var j = 0; j < conDaoWards.length; j++) {
            var option = document.createElement("option");
            option.text = conDaoWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đất Đỏ") {
        var datDoWards = ["Thị trấn Long Thành", "Xã An Thái", "Xã Láng Lớn", "Xã Bàu Lâm", "Xã Lộc An", "Xã Long Điền", "Xã An Long", "Xã Lộc Điền", "Xã Phước Hưng", "Xã An Lâm", "Xã Lộc Thành"];
        for (var k = 0; k < datDoWards.length; k++) {
            var option = document.createElement("option");
            option.text = datDoWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Long Điền") {
        var longDienWards = ["Thị trấn Long Điền", "Xã An Ngãi", "Xã An Thái", "Xã An Bá", "Xã An Phước", "Xã Long Hưng", "Xã Long Tân", "Xã An Vĩnh", "Xã Long Sơn", "Xã An Khánh", "Xã An Hòa", "Xã An Long"];
        for (var l = 0; l < longDienWards.length; l++) {
            var option = document.createElement("option");
            option.text = longDienWards[l];
            xa.add(option);
        }
    }
    else if (quan.value === "Thành phố Vũng Tàu") {
        var vungTauWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường Rạch Dừa", "Phường Thắng Nhất", "Phường Thắng Nhì", "Phường Thắng Tam", "Phường Thắng Chí", "Phường Thắng Nhất"];
        for (var i = 0; i < vungTauWards.length; i++) {
            var option = document.createElement("option");
            option.text = vungTauWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bà Rịa") {
        var baRiaWards = ["Phường Phước Hưng", "Phường Long Toàn", "Phường Long Hương", "Phường Kim Dinh", "Xã Long Tâm", "Xã Long Toàn", "Xã Phước Tân", "Xã Hòa Long", "Xã Long Hưng", "Xã An Phước", "Xã Long Phước"];
        for (var j = 0; j < baRiaWards.length; j++) {
            var option = document.createElement("option");
            option.text = baRiaWards[j];
            xa.add(option);
        }
    }
    else if (quan.value === "Thị xã Bến Cát") {
        var benCatWards = ["Phường Chánh Phú Hòa", "Phường An Điền", "Phường An Tây", "Phường An Hòa", "Xã An Phước", "Xã Thới Hòa"];
        for (var i = 0; i < benCatWards.length; i++) {
            var option = document.createElement("option");
            option.text = benCatWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Dĩ An") {
        var diAnWards = ["Phường Dĩ An", "Phường Tân Bình", "Phường Tân Đông Hiệp", "Phường Tân Hòa", "Phường Bình An", "Phường Bình Thắng", "Phường Đông Hòa", "Xã An Bình", "Xã An Thạnh", "Xã Tân Long", "Xã Bình Thắng"];
        for (var j = 0; j < diAnWards.length; j++) {
            var option = document.createElement("option");
            option.text = diAnWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Dầu Tiếng") {
        var dauTiengWards = ["Thị trấn Dầu Tiếng", "Xã Minh Hoà", "Xã Minh Thạnh", "Xã Minh Tân", "Xã Minh Thái", "Xã Minh Đức", "Xã Long Hoà", "Xã Long Tân", "Xã Long Hòa", "Xã Dầu Tiếng", "Xã Tiến Thành", "Xã Thanh An", "Xã Thanh Tuyền", "Xã Phước An", "Xã Bàu Đồn"];
        for (var k = 0; k < dauTiengWards.length; k++) {
            var option = document.createElement("option");
            option.text = dauTiengWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Giáo") {
        var phuGiaoWards = ["Thị trấn Phước Vĩnh", "Xã An Linh", "Xã An Long", "Xã An Bình", "Xã Tân Hiệp", "Xã Tam Lập", "Xã Tân Long", "Xã Long Tân", "Xã Vĩnh Hoà", "Xã Phú Giao", "Xã Tân Long", "Xã An Định", "Xã An Nhựt Tân", "Xã Phước Sang", "Xã An Lập"];
        for (var l = 0; l < phuGiaoWards.length; l++) {
            var option = document.createElement("option");
            option.text = phuGiaoWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Uyên") {
        var tanUyenWards = ["Phường Uyên Hưng", "Phường Tân Phước Khánh", "Phường Tân Hiệp", "Phường Tân Bình", "Phường Khánh Bình", "Xã Bạch Đằng", "Xã Thạnh Hội", "Xã Bình Hòa", "Xã Lạc An", "Xã Thạnh Phước", "Xã Hội Nghĩa", "Xã Thái Hòa", "Xã Thuận An", "Xã Phú Chánh"];
        for (var m = 0; m < tanUyenWards.length; m++) {
            var option = document.createElement("option");
            option.text = tanUyenWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thuận An") {
        var thuanAnWards = ["Phường Lái Thiêu", "Phường Bình Chuẩn", "Xã An Thạnh", "Xã Bình Nhâm", "Xã Bình Chánh", "Xã Bình Hòa", "Xã Bình Hòa A", "Xã An Sơn", "Xã Thuận Giao"];
        for (var n = 0; n < thuanAnWards.length; n++) {
            var option = document.createElement("option");
            option.text = thuanAnWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Thủ Dầu Một") {
        var thuDauMotWards = ["Phường Hiệp Thành", "Phường Chánh Nghĩa", "Phường Đông", "Phường Tân Hiệp", "Phường Bình An", "Phường Bình Thắng", "Phường Phú Hòa", "Phường Phú Cường", "Phường Phú Lợi", "Phường Phú Mỹ", "Phường Chánh Mỹ", "Phường Hiệp An"];
        for (var o = 0; o < thuDauMotWards.length; o++) {
            var option = document.createElement("option");
            option.text = thuDauMotWards[o];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bù Đăng") {
        var buDangWards = ["Thị trấn Bù Đăng", "Xã Đắk Nhau", "Xã Đắk PLao", "Xã Đắk HRing", "Xã Đắk Môl", "Xã Đắk N'Drót", "Xã Đắk Sôr", "Xã Đức An", "Xã Đức Lập", "Xã Đức Phong", "Xã Đức Hòa", "Xã Đức Thắng"];
        for (var i = 0; i < buDangWards.length; i++) {
            var option = document.createElement("option");
            option.text = buDangWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bù Đốp") {
        var buDopWards = ["Thị trấn Thanh Bình", "Xã Hưng Phước", "Xã Phước Thiện", "Xã Đak Ơ", "Xã Đak Mông", "Xã Long Bình", "Xã Phú Vinh", "Xã Phước Tân", "Xã Minh Hưng", "Xã Thanh An"];
        for (var j = 0; j < buDopWards.length; j++) {
            var option = document.createElement("option");
            option.text = buDopWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bù Gia Mập") {
        var buGiaMapWards = ["Thị trấn Long Thành", "Xã Đak Ơ", "Xã Đức Hạnh", "Xã Đức Phước", "Xã Đức Thắng", "Xã Đức Tài", "Xã Đức Chánh", "Xã Đức Hòa", "Xã ĐaK Nôr", "Xã ĐaK Mâm", "Xã Phước Minh", "Xã Quảng Minh"];
        for (var k = 0; k < buGiaMapWards.length; k++) {
            var option = document.createElement("option");
            option.text = buGiaMapWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chơn Thành") {
        var chonThanhWards = ["Thị trấn Chơn Thành", "Xã Minh Hưng", "Xã Minh Lập", "Xã Minh Long", "Xã Minh Thành", "Xã Nghĩa Bình", "Xã Nghĩa Đức", "Xã Quang Minh", "Xã Minh Thắng", "Xã Thành Tâm", "Xã Minh Tâm", "Xã Minh Thuận", "Xã Minh Phú", "Xã Minh Quang"];
        for (var l = 0; l < chonThanhWards.length; l++) {
            var option = document.createElement("option");
            option.text = chonThanhWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đồng Phú") {
        var dongPhuWards = ["Thị trấn Đồng Xoài", "Xã ĐaK Nhau", "Xã Phước Thạnh", "Xã Tân Hưng", "Xã Đồng Tiến", "Xã Đồng Tâm", "Xã Tân Thành", "Xã Tân Thiện", "Xã Tiến Hưng", "Xã Tiến Thành", "Xã Tân Phú", "Xã Tiến Thắng", "Xã Tân Hiệp", "Xã Tân Hòa"];
        for (var m = 0; m < dongPhuWards.length; m++) {
            var option = document.createElement("option");
            option.text = dongPhuWards[m];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Hớn Quản") {
        var honQuanWards = ["Thị trấn Hớn Quản", "Xã Đồng Nơ", "Xã Đồng Tâm", "Xã Đồng Tiến", "Xã Đồng Yên", "Xã Đức Bình", "Xã Đức Phú", "Xã Mỹ Đồng", "Xã Mỹ Quý", "Xã Phú Mỹ", "Xã Phú Tân", "Xã Phú Thành", "Xã Tân Lợi", "Xã Thanh Bình", "Xã Thanh Hòa", "Xã Thanh Tâm", "Xã Thanh Tân"];
        for (var i = 0; i < honQuanWards.length; i++) {
            var option = document.createElement("option");
            option.text = honQuanWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lộc Ninh") {
        var locNinhWards = ["Thị trấn Lộc Ninh", "Xã Lộc An", "Xã Lộc Điền", "Xã Lộc Đức", "Xã Lộc Hiệp", "Xã Lộc Hòa", "Xã Lộc Hưng", "Xã Lộc Khánh", "Xã Lộc Phú", "Xã Lộc Phát", "Xã Lộc Thái", "Xã Lộc Thành", "Xã Lộc Thắng", "Xã Lộc Thạnh", "Xã Lộc Thịnh", "Xã Lộc Vượng"];
        for (var j = 0; j < locNinhWards.length; j++) {
            var option = document.createElement("option");
            option.text = locNinhWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Riềng") {
        var phuRiengWards = ["Thị trấn Phú Riềng", "Xã Bình Thạnh", "Xã Bình Tân", "Xã Bình Hòa", "Xã Bình Phước", "Xã Bình Định Bắc", "Xã Bình Định Nam", "Xã Bình Quới", "Xã Long Hưng", "Xã Bù Nho", "Xã Long Thành", "Xã Long Tân", "Xã Long Hoà", "Xã Phú Trung", "Xã Phú Cường", "Xã Phú Lộc", "Xã Long Bình", "Xã Bình Sơn"];
        for (var k = 0; k < phuRiengWards.length; k++) {
            var option = document.createElement("option");
            option.text = phuRiengWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Bình Long") {
        var binhLongWards = ["Phường An Lộc", "Phường Thanh Lương", "Phường Thanh Phú", "Phường Thanh Bình", "Phường Phú Thịnh", "Phường Thanh Hưng", "Xã Minh Hưng", "Xã Minh Long", "Xã Minh Hòa", "Xã Minh Thắng", "Xã Thanh An", "Xã Thanh Hoà", "Xã Đồng Tiến", "Xã Đồng Tâm", "Xã Đồng Kho", "Xã Đồng Nai", "Xã Đồng Nghệ", "Xã Đồng Yên"];
        for (var l = 0; l < binhLongWards.length; l++) {
            var option = document.createElement("option");
            option.text = binhLongWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Đồng Xoài") {
        var dongXoaiWards = ["Phường Tân Bình", "Phường Tân Đồng", "Phường Tân Phú", "Phường Tân Thành", "Phường Tân Thiện", "Xã Tiến Hưng", "Xã Tiến Thành", "Xã Tiến Thành", "Xã Tiến Hòa", "Xã Tiến Lợi", "Xã Tiến Thắng", "Xã Tiến Phước", "Xã Tiến Hưng", "Xã Tiến Thành", "Xã Tiến Hưng", "Xã Tiến Lợi"];
        for (var m = 0; m < dongXoaiWards.length; m++) {
            var option = document.createElement("option");
            option.text = dongXoaiWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Phước Long") {
        var phuocLongWards = ["Phường Phước Long", "Phường Sơn Giang", "Phường Long Phước", "Phường Long Bình", "Phường Long Thuận", "Xã Phước Tín", "Xã Phước Lý", "Xã Long Giang", "Xã Long Trị", "Xã Long Trạch", "Xã Long Phước", "Xã Phước Bình", "Xã Phước Chỉ", "Xã Long Hà", "Xã Long Tân", "Xã Long Hưng", "Xã Phước Hưng"];
        for (var n = 0; n < phuocLongWards.length; n++) {
            var option = document.createElement("option");
            option.text = phuocLongWards[n];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bắc Bình") {
        var bacBinhWards = ["Thị trấn Chợ Lầu", "Xã Phan Điền", "Xã Phan Sơn", "Xã Phan Lâm", "Xã Phan Tiến", "Xã Phan Hòa", "Xã Phan Thanh", "Xã Phan Hiệp", "Xã Phan Rí Cửa", "Xã Phan Bình"];
        for (var i = 0; i < bacBinhWards.length; i++) {
            var option = document.createElement("option");
            option.text = bacBinhWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Linh") {
        var ducLinhWards = ["Thị trấn Đức Tài", "Xã Đa Kai", "Xã Vũ Hòa", "Xã Đông Hà", "Xã Đức Tín", "Xã Đức Hạnh", "Xã Đức Minh", "Xã Đức Thắng", "Xã Đức Hùng", "Xã Đức Tâm", "Xã Suối Kiết", "Xã Đức Lợi", "Xã Đức Phú", "Xã Đức Hà", "Xã Đức Thạnh"];
        for (var j = 0; j < ducLinhWards.length; j++) {
            var option = document.createElement("option");
            option.text = ducLinhWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hàm Tân") {
        var hamTanWards = ["Thị trấn Hàm Tân", "Xã Mỹ Thắng", "Xã Mỹ Lộc", "Xã Mỹ Lợi", "Xã Mỹ An", "Xã Mỹ Phước", "Xã Mỹ Đức", "Xã Mỹ Thành", "Xã Mỹ Chánh", "Xã Mỹ Quý", "Xã Mỹ Hòa", "Xã Mỹ Hiệp", "Xã Mỹ Tài", "Xã Mỹ Cát", "Xã Mỹ Trinh", "Xã Mỹ Xuyên", "Xã Mỹ Trung"];
        for (var k = 0; k < hamTanWards.length; k++) {
            var option = document.createElement("option");
            option.text = hamTanWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hàm Thuận Bắc") {
        var hamThuanBacWards = ["Thị trấn Đức Phổ", "Xã Mỹ Thọ", "Xã Mỹ Lâm", "Xã Mỹ Phú", "Xã Mỹ Đồng", "Xã Mỹ Thuận", "Xã Mỹ Hương", "Xã Mỹ Tài", "Xã Mỹ Chánh", "Xã Mỹ Chánh", "Xã Mỹ Chánh"];
        for (var l = 0; l < hamThuanBacWards.length; l++) {
            var option = document.createElement("option");
            option.text = hamThuanBacWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hàm Thuận Nam") {
        var hamThuanNamWards = ["Thị trấn Thuận Nam", "Xã Mỹ Thắng", "Xã Mỹ Lộc", "Xã Mỹ Lợi", "Xã Mỹ An", "Xã Mỹ Phước", "Xã Mỹ Đức", "Xã Mỹ Thành", "Xã Mỹ Chánh", "Xã Mỹ Quý", "Xã Mỹ Hòa", "Xã Mỹ Hiệp", "Xã Mỹ Tài", "Xã Mỹ Cát", "Xã Mỹ Trinh", "Xã Mỹ Xuyên", "Xã Mỹ Trung"];
        for (var m = 0; m < hamThuanNamWards.length; m++) {
            var option = document.createElement("option");
            option.text = hamThuanNamWards[m];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Phú Quý") {
        var phuQuyWards = ["Xã Long Hải", "Xã Ngũ Phụng", "Xã Tam Thanh", "Xã Trường Hải", "Xã Vĩnh Hải"];
        for (var i = 0; i < phuQuyWards.length; i++) {
            var option = document.createElement("option");
            option.text = phuQuyWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tánh Linh") {
        var tanhLinhWards = ["Thị trấn Lạc Tánh", "Xã Bắc Phong", "Xã Đức Phong", "Xã Nam Phong", "Xã Đa Kai", "Xã Đa Loan", "Xã Đồng Kho", "Xã Gia Canh", "Xã Lạc Phú", "Xã Nghị Đức", "Xã Tân Hà", "Xã Tân Phú", "Xã Tân Thiện"];
        for (var j = 0; j < tanhLinhWards.length; j++) {
            var option = document.createElement("option");
            option.text = tanhLinhWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tuy Phong") {
        var tuyPhongWards = ["Thị trấn Liên Hương", "Xã Bình Thạnh", "Xã Phước Thể", "Xã Phước Hội", "Xã Phước Trung", "Xã Phước Thuận", "Xã Phước Hải", "Xã Phước Tiến", "Xã Tiến Thành", "Xã Tiến Hưng", "Xã Tiến Lợi", "Xã Tiến Thọ", "Xã Tiến Đức"];
        for (var k = 0; k < tuyPhongWards.length; k++) {
            var option = document.createElement("option");
            option.text = tuyPhongWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Phan Thiết") {
        var phanThietWards = ["Phường Phú Thủy", "Phường Phú Hài", "Phường Phú Tài", "Phường Phú Trinh", "Phường Thanh Hải", "Phường Đức Long", "Phường Đức Thắng", "Phường Đức Nghĩa", "Phường Đức Thạnh", "Phường Hàm Tiến", "Phường Hàm Sinh", "Phường Hàm Phú", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến", "Phường Hàm Tiến"];
        for (var l = 0; l < phanThietWards.length; l++) {
            var option = document.createElement("option");
            option.text = phanThietWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã La Gi") {
        var laGiWards = ["Phường La Gi", "Phường Bình Thạnh", "Phường Tân An", "Xã Tân Bình", "Xã Tân Hải", "Xã Tân Phước"];
        for (var m = 0; m < laGiWards.length; m++) {
            var option = document.createElement("option");
            option.text = laGiWards[m];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện An Lão") {
        var anLaoWards = ["Thị trấn An Lão", "Xã An Dũng", "Xã An Hòa", "Xã An Hưng", "Xã An Lão", "Xã An Quang", "Xã An Tân", "Xã An Toàn", "Xã An Trung", "Xã An Vinh", "Xã An Xuyên", "Xã An Xuân", "Xã Bok Tới", "Xã Bồng Sơn", "Xã Đằng Hải", "Xã Đồn Dương", "Xã Hoài Hảo", "Xã Hồng Sơn", "Xã Hộ Phòng", "Xã Tân Thành", "Xã Tân Tiến", "Xã Thanh Sơn"];
        for (var i = 0; i < anLaoWards.length; i++) {
            var option = document.createElement("option");
            option.text = anLaoWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện An Nhơn") {
        var anNhonWards = ["Thị trấn An Nhơn", "Xã An Châu", "Xã An Dân", "Xã An Hiệp", "Xã An Hòa", "Xã An Lợi", "Xã An Nghiệp", "Xã An Thạnh", "Xã An Thái", "Xã An Tân", "Xã An Vinh", "Xã Nhơn Hòa", "Xã Nhơn Hưng", "Xã Nhơn Lý", "Xã Nhơn Phong", "Xã Nhơn Phúc", "Xã Nhơn Tân", "Xã Nhơn Thọ", "Xã Nhơn Thành", "Xã Nhơn Thắng", "Xã Nhơn Thọ", "Xã Nhơn Trạch", "Xã Nhơn Đức"];
        for (var j = 0; j < anNhonWards.length; j++) {
            var option = document.createElement("option");
            option.text = anNhonWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoài Ấu") {
        var hoaiAuWards = ["Thị trấn Hoài Ân", "Xã Hoài Ân", "Xã Bồng Sơn", "Xã Hoài Châu", "Xã Hoài Châu Bắc", "Xã Hoài Châu Nam", "Xã Hoài Đức", "Xã Hoài Hải", "Xã Hoài Hảo", "Xã Hoài Hương", "Xã Hoài Mỹ", "Xã Hoài Phú", "Xã Hoài Sơn", "Xã Hoài Tân", "Xã Hoài Thanh", "Xã Hoài Thanh Tây", "Xã Hoài Xuân", "Xã Tân Thành", "Xã Tam Quan", "Xã Tam Quan Bắc", "Xã Tam Quan Nam"];
        for (var k = 0; k < hoaiAuWards.length; k++) {
            var option = document.createElement("option");
            option.text = hoaiAuWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoài Nhơn") {
        var hoaiNhonWards = ["Thị trấn Hoài Nhơn", "Xã Hoài Châu", "Xã Hoài Châu Bắc", "Xã Hoài Châu Nam", "Xã Hoài Đức", "Xã Hoài Hải", "Xã Hoài Hảo", "Xã Hoài Hương", "Xã Hoài Mỹ", "Xã Hoài Phú", "Xã Hoài Sơn", "Xã Hoài Tân", "Xã Hoài Thanh", "Xã Hoài Thanh Tây", "Xã Hoài Xuân", "Xã Tân Thành", "Xã Tam Quan", "Xã Tam Quan Bắc", "Xã Tam Quan Nam"];
        for (var l = 0; l < hoaiNhonWards.length; l++) {
            var option = document.createElement("option");
            option.text = hoaiNhonWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phù Cát") {
        var phuCatWards = ["Thị trấn Bình Dương", "Xã Cát Chánh", "Xã Cát Hải", "Xã Cát Hanh", "Xã Cát Hưng", "Xã Cát Khánh", "Xã Cát Lâm", "Xã Cát Minh", "Xã Cát Nhơn", "Xã Cát Sơn", "Xã Cát Tài", "Xã Cát Tân", "Xã Cát Thắng", "Xã Cát Tiến", "Xã Cát Trinh", "Xã Cát Tường", "Xã Cát Vinh"];
        for (var m = 0; m < phuCatWards.length; m++) {
            var option = document.createElement("option");
            option.text = phuCatWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phù Mỹ") {
        var phuMyWards = ["Thị trấn Phù Mỹ", "Xã Mỹ An", "Xã Mỹ Cát", "Xã Mỹ Chánh", "Xã Mỹ Chánh Tây", "Xã Mỹ Châu", "Xã Mỹ Đức", "Xã Mỹ Hiệp", "Xã Mỹ Hòa", "Xã Mỹ Lộc", "Xã Mỹ Lợi", "Xã Mỹ Lương", "Xã Mỹ Phong", "Xã Mỹ Quang", "Xã Mỹ Tài", "Xã Mỹ Thắng", "Xã Mỹ Thành", "Xã Mỹ Thuận", "Xã Mỹ Thọ", "Xã Mỹ Trinh", "Xã Mỹ Trung", "Xã Mỹ Tường", "Xã Mỹ Xuân", "Xã Mỹ Yên"];
        for (var n = 0; n < phuMyWards.length; n++) {
            var option = document.createElement("option");
            option.text = phuMyWards[n];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Tây Sơn") {
        var taySonWards = ["Thị trấn Tây Sơn", "Xã Bình Hòa", "Xã Bình Hải", "Xã Bình Tân", "Xã Bình Thành", "Xã Bình Thuận", "Xã Bình Đông", "Xã Bình Minh", "Xã Bình Nam", "Xã Bình Nguyên", "Xã Bình Phú", "Xã Bình Tường", "Xã Bình Thắng", "Xã Bình Châu", "Xã Bình Phước", "Xã Bình Quế", "Xã Bình An", "Xã Bình Dương", "Xã Bình Khê", "Xã Bình Long", "Xã Bình Thanh Tây"];
        for (var i = 0; i < taySonWards.length; i++) {
            var option = document.createElement("option");
            option.text = taySonWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tuy Phước") {
        var tuyPhuocWards = ["Thị trấn Tuy Phước", "Xã Phước An", "Xã Phước Hiệp", "Xã Phước Hòa", "Xã Phước Huân", "Xã Phước Lộc", "Xã Phước Nghĩa", "Xã Phước Thành", "Xã Phước Thắng", "Xã Phước Thọ", "Xã Phước Thủy", "Xã Phước Tiến", "Xã Phước Vinh"];
        for (var j = 0; j < tuyPhuocWards.length; j++) {
            var option = document.createElement("option");
            option.text = tuyPhuocWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vân Canh") {
        var vanCanhWards = ["Thị trấn Vân Canh", "Xã Canh Hiển", "Xã Canh Hiệp", "Xã Canh Hòa", "Xã Canh Liên", "Xã Canh Thuận", "Xã Canh Vinh", "Xã Canh Hưng", "Xã Canh Tiến", "Xã Canh Tân", "Xã Canh Trung", "Xã Canh Thịnh"];
        for (var k = 0; k < vanCanhWards.length; k++) {
            var option = document.createElement("option");
            option.text = vanCanhWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Qui Nhơn") {
        var quiNhonWards = ["Phường Trần Hưng Đạo", "Phường Lê Lợi", "Phường Ngô Mây", "Phường Trần Phú", "Phường Lý Thường Kiệt", "Phường Lê Hồng Phong", "Phường Trần Quang Diệu", "Phường Trần Cao Vân", "Phường Lê Hữu Trác", "Phường Đống Đa", "Phường Trần Phú", "Phường Bùi Thị Xuân", "Phường Lê Lợi", "Phường Lê Lợi", "Phường Trần Hưng Đạo", "Phường Lê Hồng Phong", "Phường Trần Hưng Đạo", "Phường Trần Phú"];
        for (var l = 0; l < quiNhonWards.length; l++) {
            var option = document.createElement("option");
            option.text = quiNhonWards[l];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Đông Hải") {
        var dongHaiWards = ["Thị trấn Gành Hào", "Xã Long Điền Đông", "Xã Long Điền Đông", "Xã Long Điền Tây", "Xã Long Điền Tây", "Xã Long Điền Đông", "Xã Long Điền Tây", "Xã Long Điền Đông", "Xã Long Điền Đông", "Xã Long Điền Đông", "Xã Long Điền Tây", "Xã Long Điền Tây", "Xã Long Điền Tây", "Xã Long Điền Đông", "Xã Long Điền Tây", "Xã Long Điền Tây", "Xã Long Điền Đông", "Xã Long Điền Đông", "Xã Long Điền Tây", "Xã Long Điền Đông"];
        for (var i = 0; i < dongHaiWards.length; i++) {
            var option = document.createElement("option");
            option.text = dongHaiWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Giá Rai") {
        var giaRaiWards = ["Thị trấn Cái Tắc", "Xã Vĩnh Biên", "Xã Vĩnh Lợi", "Xã Đông Hải", "Xã Đông Thành", "Xã Đông Thành", "Xã Đông Thành", "Xã Tân Phú", "Xã Tân Phú", "Xã Tân Thạnh", "Xã Thạnh Trị", "Xã Thạnh Trị", "Xã Tân Bình", "Xã Tân Bình", "Xã Tân Bình", "Xã Tân Phú", "Xã Đông Hòa", "Xã Đông Hòa"];
        for (var j = 0; j < giaRaiWards.length; j++) {
            var option = document.createElement("option");
            option.text = giaRaiWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hòa Bình") {
        var hoaBinhWards = ["Thị trấn Ngan Dừa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa", "Xã Tân Hòa"];
        for (var k = 0; k < hoaBinhWards.length; k++) {
            var option = document.createElement("option");
            option.text = hoaBinhWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hồng Dân") {
        var hongDanWards = ["Thị trấn Hòa Bình", "Xã Đại Thành", "Xã Đại Hưng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng", "Xã Đại Hồng"];
        for (var l = 0; l < hongDanWards.length; l++) {
            var option = document.createElement("option");
            option.text = hongDanWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phước Long") {
        var phuocLongWards = ["Thị trấn Phước Long", "Xã Phong Thạnh Tây A", "Xã Phong Thạnh Tây B", "Xã Phong Thạnh Đông", "Xã Phong Thạnh Đông A", "Xã Phong Thạnh Đông B", "Xã Phong Thạnh", "Xã Phong Thạnh A", "Xã Phong Thạnh B", "Xã Phong Thạnh Tây", "Xã Phong Thạnh Tây A", "Xã Phong Thạnh Tây B", "Xã Phong Thạnh Tây", "Xã Phong Thạnh Tây", "Xã Phong Thạnh Tây", "Xã Phong Thạnh Tây"];
        for (var m = 0; m < phuocLongWards.length; m++) {
            var option = document.createElement("option");
            option.text = phuocLongWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bạc Liêu") {
        var bacLieuWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18", "Phường 19", "Phường 20", "Phường 21", "Phường 22", "Phường 23", "Phường 24", "Phường 25", "Phường 26", "Phường 27", "Phường 28", "Phường 29", "Phường 30", "Phường 31", "Phường 32"];
        for (var n = 0; n < bacLieuWards.length; n++) {
            var option = document.createElement("option");
            option.text = bacLieuWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Vĩnh Lợi") {
        var vinhLoiWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường 13", "Phường 14", "Phường 15", "Phường 16", "Phường 17", "Phường 18", "Phường 19", "Phường 20", "Phường 21", "Phường 22", "Phường 23", "Phường 24", "Phường 25", "Phường 26", "Phường 27", "Phường 28", "Phường 29", "Phường 30", "Phường 31", "Phường 32"];
        for (var o = 0; o < vinhLoiWards.length; o++) {
            var option = document.createElement("option");
            option.text = vinhLoiWards[o];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Hiệp Hòa") {
        var hiepHoaWards = ["Thị trấn Liên Thủy", "Xã Bắc Lý", "Xã Chân Sơn", "Xã Đại Sơn", "Xã Đào Mỹ", "Xã Đồng Sơn", "Xã Hải Lý", "Xã Hoành Sơn", "Xã Hồng Sơn", "Xã Khả Cửu", "Xã Lập Lễ", "Xã Liên Thủy", "Xã Lưu Kiền", "Xã Mỹ Đức", "Xã Mỹ Thái", "Xã Nam Dương", "Xã Nam Giang", "Xã Ngọc Lý", "Xã Ngọc Thanh", "Xã Phú Nghĩa", "Xã Phú Thanh", "Xã Phúc Lương", "Xã Quý Sơn", "Xã Tân Lập", "Xã Tân Thanh", "Xã Thanh Sơn", "Xã Thường Thắng", "Xã Trì Quang", "Xã Trung Sơn", "Xã Trung Thành", "Xã Văn Lý", "Xã Xuân Quang", "Xã Yên Định"];
        for (var i = 0; i < hiepHoaWards.length; i++) {
            var option = document.createElement("option");
            option.text = hiepHoaWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lạng Giang") {
        var langGiangWards = ["Thị trấn Kép", "Xã An Hà", "Xã Đại Lâm", "Xã Đại Xuyên", "Xã Đồng Thắng", "Xã Hương Lâm", "Xã Hùng Sơn", "Xã Hưng Thịnh", "Xã Liên Hà", "Xã Mỹ Hà", "Xã Mỹ Thái", "Xã Phương Hoàng", "Xã Quang Thịnh", "Xã Tân Sơn", "Xã Thái Sơn", "Xã Tiên Lục", "Xã Tiến Thắng", "Xã Xuân Hương"];
        for (var j = 0; j < langGiangWards.length; j++) {
            var option = document.createElement("option");
            option.text = langGiangWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lục Nam") {
        var lucNamWards = ["Thị trấn Kiên Lao", "Xã An Dục", "Xã Bình An", "Xã Bình Trung", "Xã Châu Sơn", "Xã Đồng Phúc", "Xã Gia Hưng", "Xã Hà Châu", "Xã Hương Lâm", "Xã Hùng Sơn", "Xã Hùng Thắng", "Xã Hưng Đạo", "Xã Lam Sơn", "Xã Lạng Giang", "Xã Liên Sơn", "Xã Mai Sơn", "Xã Minh Sơn", "Xã Nghĩa Hưng", "Xã Quang Thịnh", "Xã Thanh Vân", "Xã Thiên Sơn", "Xã Thụy Sơn", "Xã Văn Sơn", "Xã Vĩnh Sơn", "Xã Xuân Cẩm"];
        for (var k = 0; k < lucNamWards.length; k++) {
            var option = document.createElement("option");
            option.text = lucNamWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lục Ngạn") {
        var lucNganWards = ["Thị trấn Hòa Sơn", "Xã An Hòa", "Xã Cương Sơn", "Xã Đồng Sơn", "Xã Đông Phú", "Xã Hoàng Sơn", "Xã Hồng Sơn", "Xã Hồng Phong", "Xã Hương Lâm", "Xã Hương Sơn", "Xã Liên Sơn", "Xã Lạng Sơn", "Xã Minh Sơn", "Xã Mỹ Sơn", "Xã Ngọc Sơn", "Xã Phù Sơn", "Xã Tân Sơn", "Xã Thái Sơn", "Xã Thanh Sơn", "Xã Thiên Sơn", "Xã Thượng Sơn", "Xã Trung Sơn", "Xã Trường Sơn", "Xã Văn Sơn", "Xã Xuân Sơn"];
        for (var l = 0; l < lucNganWards.length; l++) {
            var option = document.createElement("option");
            option.text = lucNganWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sơn Động") {
        var sonDongWards = ["Thị trấn Hùng Sơn", "Xã An Lạc", "Xã An Phú", "Xã Cẩm Đàn", "Xã Cường Sơn", "Xã Hiệp Sơn", "Xã Hồng Sơn", "Xã Lê Sơn", "Xã Long Sơn", "Xã Lương Sơn", "Xã Minh Sơn", "Xã Mỹ Sơn", "Xã Nghĩa Sơn", "Xã Phú Sơn", "Xã Quang Sơn", "Xã Tân Sơn", "Xã Thạch Sơn", "Xã Thịnh Sơn", "Xã Thụy Sơn", "Xã Trường Sơn", "Xã Vĩnh Sơn"];
        for (var m = 0; m < sonDongWards.length; m++) {
            var option = document.createElement("option");
            option.text = sonDongWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Yên") {
        var tanYenWards = ["Thị trấn Nếnh", "Xã An Dương", "Xã An Lạc", "Xã An Lập", "Xã An Phượng", "Xã An Thịnh", "Xã An Thắng", "Xã An Tràng", "Xã An Vũ", "Xã Bạch Đằng", "Xã Đa Phúc", "Xã Đại Phong", "Xã Đoàn Kết", "Xã Đồng Tiến", "Xã Đức Thắng", "Xã Hồng Phong", "Xã Hồng Thái", "Xã Hồng Tiến", "Xã Nam Mẫu", "Xã Phúc Thắng", "Xã Quốc Khánh", "Xã Tân An", "Xã Tân Tiến", "Xã Tân Trào", "Xã Tân Việt", "Xã Thái Hòa", "Xã Thái Sơn", "Xã Thanh Sơn", "Xã Trung Mỹ", "Xã Trung Thành", "Xã Trưng Vương", "Xã Vĩnh Tiến", "Xã Vĩnh Trung"];
        for (var n = 0; n < tanYenWards.length; n++) {
            var option = document.createElement("option");
            option.text = tanYenWards[n];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Việt Yên") {
        var vietYenWards = ["Thị trấn Việt Yên", "Xã Đức Thắng", "Xã Đồng Tâm", "Xã Hương Vĩ", "Xã Quang Tiến", "Xã Tân Dân", "Xã Tân Đức", "Xã Tiền Phong", "Xã Trung Mỹ", "Xã Trung Sơn", "Xã Tự Lạn", "Xã Việt Tiến", "Xã Yên Lễ", "Xã Đồng Việt", "Xã Hồng Tiến", "Xã Khắc Niệm", "Xã Tân Thành", "Xã Thượng Lan", "Xã Tiến Dũng", "Xã Trung Hà", "Xã Trung Hòa", "Xã Việt Hồng", "Xã Yên Bằng", "Xã Yên Lư", "Xã Yên Ninh"];
        for (var i = 0; i < vietYenWards.length; i++) {
            var option = document.createElement("option");
            option.text = vietYenWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Dũng") {
        var yenDungWards = ["Thị trấn Nham Biền", "Xã Bằng Phúc", "Xã Bằng Thành", "Xã Bằng Vân", "Xã Cảnh Thụy", "Xã Đại Sảo", "Xã Đồng Phúc", "Xã Đức Giang", "Xã Lãng Sơn", "Xã Quỳnh Sơn", "Xã Tân Hiệp", "Xã Tân Lập", "Xã Tân Quang", "Xã Tiến Dũng", "Xã Tiến Thắng", "Xã Trí Yên", "Xã Văn Sơn", "Xã Yên Lạc", "Xã Yên Phú"];
        for (var j = 0; j < yenDungWards.length; j++) {
            var option = document.createElement("option");
            option.text = yenDungWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Thế") {
        var yenTheWards = ["Thị trấn Yên Thế", "Xã Cảnh Đức", "Xã Đồng Vương", "Xã Đức Giang", "Xã Lão Hộ", "Xã Lang Sơn", "Xã Quỳnh Đôi", "Xã Tân Long", "Xã Thắng Cương", "Xã Thống Nhất", "Xã Tiến Dương", "Xã Tiến Dũng", "Xã Tiến Thắng", "Xã Yên Thắng", "Xã Yên Thọ"];
        for (var k = 0; k < yenTheWards.length; k++) {
            var option = document.createElement("option");
            option.text = yenTheWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bắc Giang") {
        var bacGiangWards = ["Phường An Bình", "Phường Bắc Giang", "Phường Hoàng Văn Thụ", "Phường Lê Lợi", "Phường Lê Lợi", "Phường Mỹ Độ", "Phường Ngô Quyền", "Phường Sơn Lộc", "Phường Tân Mỹ", "Phường Trần Nguyên Hãn", "Phường Đa Mai", "Phường Dĩnh Kế", "Phường Dĩnh Trì", "Phường Đồng Sơn", "Phường Hồng Hà", "Phường Mỹ Đức", "Phường Song Mai", "Phường Song Mai", "Phường Song Mai", "Phường Song Mai"];
        for (var l = 0; l < bacGiangWards.length; l++) {
            var option = document.createElement("option");
            option.text = bacGiangWards[l];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Ba Bể") {
        var baBeWards = ["Thị trấn Chợ Rã", "Xã Bành Trạch", "Xã Cao Tân", "Xã Cao Thắng", "Xã Chợ Rã", "Xã Chu Hương", "Xã Chu Hương", "Xã Địa Linh", "Xã Đồng Phúc", "Xã Hà Hiệu", "Xã Khuôn Lùng", "Xã Mỹ Phương", "Xã Nam Mẫu", "Xã Nà Phặc", "Xã Phương Thiện", "Xã Quảng Phong", "Xã Quyết Tiến", "Xã Sơn Lập", "Xã Sơn Lộ", "Xã Thượng Lâm", "Xã Yến Dương", "Xã Yến Thượng"];
        for (var i = 0; i < baBeWards.length; i++) {
            var option = document.createElement("option");
            option.text = baBeWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bạch Thông") {
        var bachThongWards = ["Thị trấn Phủ Thông", "Xã Cao Sơn", "Xã Đôn Phong", "Xã Lục Bình", "Xã Mã Ba", "Xã Na Phước", "Xã Nà Phặc", "Xã Quang Thịnh", "Xã Quang Minh", "Xã Tân Lập", "Xã Vi Hương", "Xã Vĩnh Phong", "Xã Vũ Linh", "Xã Xuân Lập", "Xã Yên Cường"];
        for (var j = 0; j < bachThongWards.length; j++) {
            var option = document.createElement("option");
            option.text = bachThongWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chợ Đồn") {
        var choDonWards = ["Thị trấn Chợ Đồn", "Xã Bằng Lang", "Xã Bản Thi", "Xã Công Đa", "Xã Đồng Lạc", "Xã Giáo Hiệu", "Xã Giáp Lài", "Xã Kéo Yên", "Xã Quảng Bạch", "Xã Sảng Mã", "Xã Sơn Phú", "Xã Tân Lập", "Xã Thanh Bình", "Xã Trung Hội", "Xã Vân Sơn", "Xã Vần Dính", "Xã Vĩnh Phong", "Xã Yên Định"];
        for (var k = 0; k < choDonWards.length; k++) {
            var option = document.createElement("option");
            option.text = choDonWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chợ Mới") {
        var choMoiWards = ["Thị trấn Chợ Mới", "Xã Cao Kỳ", "Xã Chiến Thắng", "Xã Chợ Mới", "Xã Đồng Thành", "Xã Hòa Mục", "Xã Minh Phát", "Xã Nam Cường", "Xã Nông Thịnh", "Xã Quang Trung", "Xã Tân Hợp", "Xã Trung Hòa", "Xã Trung Thành", "Xã Vĩnh Thành"];
        for (var l = 0; l < choMoiWards.length; l++) {
            var option = document.createElement("option");
            option.text = choMoiWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Na Rì") {
        var naRiWards = ["Thị trấn Na Rì", "Xã Bình An", "Xã Bình Minh", "Xã Côn Minh", "Xã Đạo Viện", "Xã Hồng Thái", "Xã Hợp Hòa", "Xã Kháng Nhật", "Xã Kiến Thiết", "Xã Kim Hỷ", "Xã Lăng Hiếu", "Xã Lạng San", "Xã Phương Tiến", "Xã Quang Phong", "Xã Sơn Hà", "Xã Sơn Lập", "Xã Thành Vận", "Xã Thượng Ân", "Xã Trung Hòa", "Xã Trung Hợp", "Xã Trung Minh", "Xã Trung Sơn", "Xã Trung Thành", "Xã Trung Thủy", "Xã Tức Tranh", "Xã Văn Hòa", "Xã Văn Minh", "Xã Văn Tài", "Xã Yên Lâm"];
        for (var m = 0; m < naRiWards.length; m++) {
            var option = document.createElement("option");
            option.text = naRiWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ngân Sơn") {
        var nganSonWards = ["Thị trấn Ngân Sơn", "Xã Bằng Vân", "Xã Cốc Đán", "Xã Côn Lôn", "Xã Đức Vân", "Xã Hòa Cuông", "Xã Khánh Yên", "Xã Lãng Ngâm", "Xã Minh Long", "Xã Minh Thanh", "Xã Minh Tiến", "Xã Mông Ân", "Xã Tân Thành", "Xã Thái Hòa", "Xã Thái Sơn", "Xã Thành Long", "Xã Trung Thành", "Xã Trường Giang", "Xã Vân Tùng", "Xã Văn Hán", "Xã Văn Lang", "Xã Yên Lập"];
        for (var n = 0; n < nganSonWards.length; n++) {
            var option = document.createElement("option");
            option.text = nganSonWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Pác Nặm") {
        var pacNamWards = ["Thị trấn Pác Nặm", "Xã Bình Giang", "Xã Bình Thành", "Xã Cao Tân", "Xã Lục Bình", "Xã Minh Tân", "Xã Nam Cường", "Xã Nàn Mai", "Xã Quảng Bạch", "Xã Thành Tâm", "Xã Thượng Ân", "Xã Tân Sơn", "Xã Trấn Yên", "Xã Vĩnh Phong", "Xã Vũ Loan", "Xã Xuân Lập"];
        for (var o = 0; o < pacNamWards.length; o++) {
            var option = document.createElement("option");
            option.text = pacNamWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bắc Kạn") {
        var bacKanCityWards = ["Phường Đức Xuân", "Phường Huyền Tụng", "Phường Nguyễn Thị Minh Khai", "Phường Phùng Chí Kiên", "Phường Sông Cầu", "Phường Xuất Hóa", "Xã Dương Quang", "Xã Dương Xá", "Xã Nam Bình", "Xã Nghĩa An", "Xã Ngọc Đào", "Xã Ngọc Đồng", "Xã Ngọc Thành", "Xã Phương Hòa", "Xã Phương Thiện", "Xã Quang Trung", "Xã Quảng Phúc", "Xã Xuân Hòa"];
        for (var p = 0; p < bacKanCityWards.length; p++) {
            var option = document.createElement("option");
            option.text = bacKanCityWards[p];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Gia Bình") {
        var giaBinhWards = ["Thị trấn Gia Bình", "Xã Bình Dương", "Xã Cao Đức", "Xã Đại Bái", "Xã Đại Lai", "Xã Đông Cứu", "Xã Đông Ngàn", "Xã Đông Thọ", "Xã Hoàng Bây", "Xã Mỹ Hương", "Xã Quỳnh Phú", "Xã Song Giang", "Xã Tân Lễ", "Xã Thái Bảo", "Xã Xuân Lai", "Xã Xuân Lễ"];
        for (var i = 0; i < giaBinhWards.length; i++) {
            var option = document.createElement("option");
            option.text = giaBinhWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lương Tài") {
        var luongTaiWards = ["Thị trấn Lương Tài", "Xã An Thịnh", "Xã Bồ Sao", "Xã Cao Đông", "Xã Chi Lăng", "Xã Đại Xuân", "Xã Đồng Thịnh", "Xã Hồ Sơn", "Xã Lai Hạ", "Xã Lang Sơn", "Xã Quảng Cư", "Xã Tân Lãng", "Xã Tân Thành", "Xã Thanh Lãng", "Xã Tiên Thành", "Xã Trùng Khánh", "Xã Trung Hà", "Xã Trung Kênh", "Xã Vũ Xá", "Xã Yên Bái"];
        for (var j = 0; j < luongTaiWards.length; j++) {
            var option = document.createElement("option");
            option.text = luongTaiWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quế Võ") {
        var queVoWards = ["Thị trấn Phố Mới", "Xã Bằng An", "Xã Bồng Lai", "Xã Cách Bi", "Xã Châu Phong", "Xã Chi Lăng", "Xã Đại Xuân", "Xã Đào Viên", "Xã Đức Long", "Xã Hồng Phong", "Xã Phù Lãng", "Xã Phương Liễu", "Xã Phượng Mao", "Xã Quế Tân", "Xã Tân Dân", "Xã Tân Việt", "Xã Yên Giả", "Xã Yên Viên"];
        for (var k = 0; k < queVoWards.length; k++) {
            var option = document.createElement("option");
            option.text = queVoWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thuận Thành") {
        var thuanThanhWards = ["Thị trấn Gia Đông", "Xã An Bình", "Xã An Thái", "Xã Bình Dương", "Xã Bình Lãng", "Xã Cù Vân", "Xã Dương Thành", "Xã Gia Khánh", "Xã Hà Mãn", "Xã Hoài Thượng", "Xã Hợp Thịnh", "Xã Hồng Phong", "Xã Hợp Lâm", "Xã Hương Lạc", "Xã Lê Thanh", "Xã Liên Bạt", "Xã Mão Điền", "Xã Nghĩa Đạo", "Xã Ngọc Lâm", "Xã Phú Khánh", "Xã Phượng Mao", "Xã Song Hồ", "Xã Tân Hồng", "Xã Thanh Khương", "Xã Trạm Lộ", "Xã Trí Quả", "Xã Tự Lập", "Xã Vân Hà", "Xã Vạn Thái", "Xã Việt Hồng", "Xã Vĩnh Khúc", "Xã Xuân Lương"];
        for (var l = 0; l < thuanThanhWards.length; l++) {
            var option = document.createElement("option");
            option.text = thuanThanhWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiên Du") {
        var tienDuWards = ["Thị trấn Lim", "Xã An Hòa", "Xã Bắc Sơn", "Xã Bình Dân", "Xã Cộng Hòa", "Xã Đại An", "Xã Đông Nguyên", "Xã Đồng Tâm", "Xã Hoàng Hoa Thám", "Xã Hồ Xá", "Xã Hợp Hưng", "Xã Liên Bão", "Xã Minh Tân", "Xã Nguyên Xá", "Xã Phú Thái", "Xã Quang Trung", "Xã Tân Dân", "Xã Tân Việt", "Xã Thái Hòa", "Xã Thái Sơn", "Xã Tiên Cường", "Xã Tiên Hưng", "Xã Tiên Lãng", "Xã Tiên Thắng", "Xã Tiền Tiến", "Xã Trung Hòa", "Xã Trung Hưng", "Xã Vĩnh Hồng", "Xã Vĩnh Tiến"];
        for (var m = 0; m < tienDuWards.length; m++) {
            var option = document.createElement("option");
            option.text = tienDuWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Phong") {
        var yenPhongWards = ["Thị trấn Yên Phong", "Xã Chân Lý", "Xã Đồng Cẩm", "Xã Đồng Kỳ", "Xã Đồng Vương", "Xã Hòa Tiến", "Xã Liêu Xá", "Xã Long Xa", "Xã Ngọc Long", "Xã Ngũ Đoan", "Xã Nguyên Xá", "Xã Nội Hoàng", "Xã Phồn Xương", "Xã Tân Dân", "Xã Tân Đoàn", "Xã Trung Hòa", "Xã Trung Kênh", "Xã Trung Kiên", "Xã Yên Lư", "Xã Yên Phụ", "Xã Yên Trung"];
        for (var n = 0; n < yenPhongWards.length; n++) {
            var option = document.createElement("option");
            option.text = yenPhongWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bắc Ninh") {
        var bacNinhCityWards = ["Phường Bế Văn Đàn", "Phường Đại Phúc", "Phường Hạp Lĩnh", "Phường Hòa Long", "Phường Khắc Niệm", "Phường Khúc Xuyên", "Phường Kim Chân", "Phường Kim Động", "Phường Kinh Bắc", "Phường Nam Sơn", "Phường Ninh Xá", "Phường Phong Khê", "Phường Suối Hoa", "Phường Thị Cầu", "Phường Tiền An", "Phường Vạn An", "Phường Vân Dương", "Phường Vệ An", "Phường Võ Cường", "Phường Vũ Ninh"];
        for (var p = 0; p < bacNinhCityWards.length; p++) {
            var option = document.createElement("option");
            option.text = bacNinhCityWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Từ Sơn") {
        var tuSonTownWards = ["Phường Đình Bảng", "Phường Đồng Nguyên", "Phường Đồng Kỵ", "Phường Hương Mạc", "Phường Phù Chẩn", "Phường Phù Khê", "Phường Tương Giang", "Xã An Bình", "Xã Bình Dương", "Xã Cao Đức", "Xã Đình Bảng", "Xã Đồng Nguyên", "Xã Đồng Kỵ", "Xã Hương Mạc", "Xã Phù Chẩn", "Xã Phù Khê", "Xã Tam Sơn"];
        for (var q = 0; q < tuSonTownWards.length; q++) {
            var option = document.createElement("option");
            option.text = tuSonTownWards[q];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Ba Tri") {
        var baTriWards = ["Thị trấn Ba Tri", "Xã An Đức", "Xã An Hiệp", "Xã An Hòa", "Xã An Ngãi Tây", "Xã An Ngãi Trung", "Xã An Phú Trung", "Xã An Vĩnh Ngãi", "Xã Bảo Thạnh", "Xã Bảo Thuận", "Xã Tân Hưng", "Xã Tân Mỹ", "Xã Tân Thủy", "Xã Tân Xuân", "Xã Vĩnh An"];
        for (var i = 0; i < baTriWards.length; i++) {
            var option = document.createElement("option");
            option.text = baTriWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bình Đại") {
        var binhDaiWards = ["Thị trấn Bình Đại", "Xã Bình Thành", "Xã Bình Thới", "Xã Bình Trị", "Xã Long Định", "Xã Long Hòa", "Xã Long Hựu Đông", "Xã Long Hựu Tây", "Xã Phú Long", "Xã Tam Hiệp", "Xã Thạnh Phước"];
        for (var j = 0; j < binhDaiWards.length; j++) {
            var option = document.createElement("option");
            option.text = binhDaiWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Tân Phú", "Xã Đại Điền", "Xã Định Thủy", "Xã Hòa Lợi", "Xã Phú Tân", "Xã Tân Phong", "Xã Tân Thạnh", "Xã Tân Thới", "Xã Tân Tiến", "Xã Thành Triệu", "Xã Thành Đông", "Xã Thành Lợi", "Xã Thành Trung", "Xã Thành Xuân"];
        for (var k = 0; k < chauThanhWards.length; k++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chợ Lách") {
        var choLachWards = ["Thị trấn Chợ Lách", "Xã Hòa Nghĩa", "Xã Hưng Khánh Trung B", "Xã Long Thới", "Xã Phú Phụng", "Xã Sơn Định", "Xã Tân Dịch", "Xã Vĩnh Bình", "Xã Vĩnh Hưng", "Xã Vĩnh Thành"];
        for (var l = 0; l < choLachWards.length; l++) {
            var option = document.createElement("option");
            option.text = choLachWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Giồng Trôm") {
        var giongTromWards = ["Thị trấn Giồng Trôm", "Xã Bình Hoà", "Xã Bình Thành", "Xã Châu Hòa", "Xã Hưng Lợi", "Xã Hưng Nhượng", "Xã Hưng Phong", "Xã Hưng Thành", "Xã Tân Thành", "Xã Thạnh Phú Đông", "Xã Thuận Điền", "Xã Vĩnh Phú", "Xã Vĩnh Thạnh", "Xã Vĩnh Thuận"];
        for (var m = 0; m < giongTromWards.length; m++) {
            var option = document.createElement("option");
            option.text = giongTromWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mỏ Cày Bắc") {
        var moCayBacWards = ["Thị trấn Mỏ Cày", "Xã An Định", "Xã An Thạnh", "Xã An Thới", "Xã Bình Khánh", "Xã Cẩm Sơn", "Xã Đa Phước Hội", "Xã Hương Mỹ", "Xã Minh Đức", "Xã Ngãi Đăng", "Xã Phước Lợi", "Xã Phước Thành", "Xã Tân Trung", "Xã Thành Thới A"];
        for (var n = 0; n < moCayBacWards.length; n++) {
            var option = document.createElement("option");
            option.text = moCayBacWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mỏ Cày Nam") {
        var moCayNamWards = ["Thị trấn Mỏ Cày", "Xã Định Thủy", "Xã Đa Phước", "Xã Định Thành", "Xã Phước Hiệp", "Xã Tân Hội", "Xã Tân Trung", "Xã Thành An"];
        for (var o = 0; o < moCayNamWards.length; o++) {
            var option = document.createElement("option");
            option.text = moCayNamWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạnh Phú") {
        var thanhPhuWards = ["Thị trấn Thạnh Phú", "Xã An Điền", "Xã An Nhơn", "Xã Bình Thạnh", "Xã Hòa Lợi", "Xã Mỹ An", "Xã Mỹ Hưng", "Xã Mỹ Thành", "Xã Nhơn Thạnh", "Xã Phú Khương", "Xã Tân Phong", "Xã Tân Thành"];
        for (var p = 0; p < thanhPhuWards.length; p++) {
            var option = document.createElement("option");
            option.text = thanhPhuWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bến Tre") {
        var benTreCityWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường An Hội", "Phường Phú Khương", "Phường Phú Tân"];
        for (var q = 0; q < benTreCityWards.length; q++) {
            var option = document.createElement("option");
            option.text = benTreCityWards[q];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bảo Lạc") {
        var baoLacWards = ["Thị trấn Bảo Lạc", "Xã Bảo Toàn", "Xã Cô Ba", "Xã Cốc Pàng", "Xã Đình Phong", "Xã Đức Hạnh", "Xã Hồng An", "Xã Hồng Trị", "Xã Hồng Việt", "Xã Hưng Đạo", "Xã Khánh Xuân", "Xã Kim Cúc", "Xã Phan Thanh", "Xã Sơn Lập", "Xã Sơn Lộ", "Xã Sảng Tủng", "Xã Xuân Trường"];
        for (var i = 0; i < baoLacWards.length; i++) {
            var option = document.createElement("option");
            option.text = baoLacWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bảo Lâm") {
        var baoLamWards = ["Thị trấn Thông Nông", "Xã Bình Lãng", "Xã Cai Bộ", "Xã Định Bình", "Xã Lương Bằng", "Xã Lương Thông", "Xã Mã Ba", "Xã Nghĩa Tá", "Xã Thông Thụ", "Xã Vĩnh Phong"];
        for (var j = 0; j < baoLamWards.length; j++) {
            var option = document.createElement("option");
            option.text = baoLamWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hạ Lang") {
        var haLangWards = ["Thị trấn Cần Yên", "Xã Đại Sảo", "Xã Lãnh Bình Thăng", "Xã Lũng Niêm", "Xã Ngọc Đào", "Xã Phúc Lễ", "Xã Sóc Hà", "Xã Thanh Nhật", "Xã Vĩnh Phong", "Xã Vô Điếm"];
        for (var k = 0; k < haLangWards.length; k++) {
            var option = document.createElement("option");
            option.text = haLangWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hà Quảng") {
        var haQuangWards = ["Thị trấn Hà Quảng", "Xã Cải Viên", "Xã Đồng Mục", "Xã Gia Minh", "Xã Hoàng Tung", "Xã Hồng Sỹ", "Xã Kim Ngọc", "Xã Lý Bôn", "Xã Minh Long", "Xã Minh Tân", "Xã Nam Quang", "Xã Quảng Hưng", "Xã Thái Hòa", "Xã Thành Long", "Xã Thượng Thôn", "Xã Xuân Hoà"];
        for (var l = 0; l < haQuangWards.length; l++) {
            var option = document.createElement("option");
            option.text = haQuangWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hòa An") {
        var hoaAnWards = ["Thị trấn Hòa An", "Xã Bế Triều", "Xã Cao Thượng", "Xã Dân Chủ", "Xã Đại Tiến", "Xã Hồng Tiến", "Xã Hồng Trị", "Xã Hùng Mỹ", "Xã Nguyễn Huệ", "Xã Quang Trung", "Xã Thái Học", "Xã Tiên Cường", "Xã Vĩnh Hào"];
        for (var m = 0; m < hoaAnWards.length; m++) {
            var option = document.createElement("option");
            option.text = hoaAnWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nguyên Bình") {
        var nguyenBinhWards = ["Thị trấn Thanh Nhật", "Xã Côn Minh", "Xã Cư Lễ", "Xã Đức Hội", "Xã Đức Long", "Xã Đức Thông", "Xã Giáp Trung", "Xã Lương Bằng", "Xã Thanh Long", "Xã Thanh Thịnh", "Xã Trường Sinh"];
        for (var n = 0; n < nguyenBinhWards.length; n++) {
            var option = document.createElement("option");
            option.text = nguyenBinhWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quảng Uyên") {
        var quangUyenWards = ["Thị trấn Quảng Uyên", "Xã Bạch Đằng", "Xã Cai Bộ", "Xã Cai Rồng", "Xã Đoài Dương", "Xã Hạnh Phúc", "Xã Sóc Đăng", "Xã Thanh Dương", "Xã Xuân Nội", "Xã Xuân Thủy", "Xã Yên Thường"];
        for (var o = 0; o < quangUyenWards.length; o++) {
            var option = document.createElement("option");
            option.text = quangUyenWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạch An") {
        var thachAnWards = ["Thị trấn Phúc Sen", "Xã Bình Long", "Xã Cao Sơn", "Xã Đoàn Kết", "Xã Độc Lập", "Xã Đông Lợi", "Xã Đồng Loan", "Xã Đồng Tâm", "Xã Đồng Tiến", "Xã Đồng Trung", "Xã Hồng Quang", "Xã Hồng Thái", "Xã Hồng Thịnh", "Xã Hướng Lập", "Xã Mỹ Hòa", "Xã Phúc An", "Xã Phúc Hòa", "Xã Phúc Thành"];
        for (var p = 0; p < thachAnWards.length; p++) {
            var option = document.createElement("option");
            option.text = thachAnWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trà Lĩnh") {
        var traLinhWards = ["Thị trấn Trà Lĩnh", "Xã Bình Ngọc", "Xã Cao Chương", "Xã Cao Thịnh", "Xã Cẩm Thành", "Xã Cao Trĩ", "Xã Công Đa", "Xã Địa Linh", "Xã Đồng Năng", "Xã Hòa Thuận", "Xã Hồng Thái", "Xã Hồng Trĩ", "Xã Khâm Thành", "Xã Linh Phú", "Xã Linh Sơn", "Xã Long Định"];
        for (var q = 0; q < traLinhWards.length; q++) {
            var option = document.createElement("option");
            option.text = traLinhWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trùng Khánh") {
        var trungKhanhWards = ["Thị trấn Trùng Khánh", "Xã Cao Thăng", "Xã Cao Trung", "Xã Cao Xá", "Xã Đàm Thượng", "Xã Đình Minh", "Xã Đoài Côn", "Xã Đức Hồng", "Xã Hùng Quốc", "Xã Khâm Thành", "Xã Lăng Hiếu", "Xã Ngọc Chung", "Xã Ngọc Côn", "Xã Ngọc Khê", "Xã Phong Nậm", "Xã Phong Niên", "Xã Phong Thịnh", "Xã Quang Hán", "Xã Quang Trung", "Xã Tri Phương", "Xã Tức Tranh"];
        for (var r = 0; r < trungKhanhWards.length; r++) {
            var option = document.createElement("option");
            option.text = trungKhanhWards[r];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Cao Bằng") {
        var caoBangCityWards = ["Phường Hợp Giang", "Phường Hưng Đạo", "Phường Ngọc Xuân", "Phường Sông Bằng", "Phường Sông Hiến", "Phường Tân Giang", "Phường Vĩnh Quang"];
        for (var s = 0; s < caoBangCityWards.length; s++) {
            var option = document.createElement("option");
            option.text = caoBangCityWards[s];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cái Nước") {
        var caiNuocWards = ["Thị trấn Cái Nước", "Xã Đông Hưng", "Xã Đông Thới", "Xã Hưng Mỹ", "Xã Lương Thế Trân", "Xã Phú Hưng", "Xã Tân Hưng", "Xã Tân Hưng Đông", "Xã Thạnh Phú", "Xã Trần Thới"];
        for (var i = 0; i < caiNuocWards.length; i++) {
            var option = document.createElement("option");
            option.text = caiNuocWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đầm Dơi") {
        var damDoiWards = ["Thị trấn Đầm Dơi", "Xã Tân Dân", "Xã Tân Đức", "Xã Tân Thành", "Xã Tân Tiến", "Xã Tân Trung"];
        for (var j = 0; j < damDoiWards.length; j++) {
            var option = document.createElement("option");
            option.text = damDoiWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Năm Căn") {
        var namCanWards = ["Thị trấn Năm Căn", "Xã Hàm Rồng", "Xã Hiệp Tùng", "Xã Lâm Hải", "Xã Tam Giang", "Xã Tam Giang Đông", "Xã Tam Giang Tây"];
        for (var k = 0; k < namCanWards.length; k++) {
            var option = document.createElement("option");
            option.text = namCanWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ngọc Hiển") {
        var ngocHienWards = ["Thị trấn Ngọc Hiển", "Xã Đất Mới", "Xã Lại Hòa", "Xã Láng Tròn", "Xã Ngọc Chánh", "Xã Thạnh Tấn", "Xã Trần Hợi"];
        for (var l = 0; l < ngocHienWards.length; l++) {
            var option = document.createElement("option");
            option.text = ngocHienWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Tân") {
        var phuTanWards = ["Thị trấn Phú Tân", "Xã Đại Ân 1", "Xã Định Bình", "Xã Hưng Phú", "Xã Tân Phú", "Xã Tân Thành"];
        for (var m = 0; m < phuTanWards.length; m++) {
            var option = document.createElement("option");
            option.text = phuTanWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thới Bình") {
        var thoiBinhWards = ["Thị trấn Thới Bình", "Xã Biển Bạch", "Xã Biển Bạch Đông", "Xã Biển Bạch Tây", "Xã Bình Thới", "Xã Long Hoà", "Xã Tân Bằng", "Xã Thới Bình", "Xã Thới Bình Thới", "Xã Trí Lực"];
        for (var n = 0; n < thoiBinhWards.length; n++) {
            var option = document.createElement("option");
            option.text = thoiBinhWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trần Văn Thời") {
        var tranVanThoiWards = ["Thị trấn Sông Đốc", "Xã Đất Mới", "Xã Nguyễn Văn Thới", "Xã Tân Duyệt", "Xã Thạnh Thới An", "Xã Thạnh Thới Thuận", "Xã Trần Hợi"];
        for (var o = 0; o < tranVanThoiWards.length; o++) {
            var option = document.createElement("option");
            option.text = tranVanThoiWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Cà Mau") {
        var caMauCityWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường Tân Thành", "Phường Tân Xuyên", "Phường Tắc Vân", "Phường Đông Hưng", "Phường Hòa Tân"];
        for (var p = 0; p < caMauCityWards.length; p++) {
            var option = document.createElement("option");
            option.text = caMauCityWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Cái Nước") {
        var caiNuocTownWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Xã Đông Hải", "Xã Đông Hưng", "Xã Hoà Mỹ", "Xã Hoà Thuận", "Xã Tân Hưng", "Xã Tân Hưng Đông", "Xã Tân Hưng Tây"];
        for (var q = 0; q < caiNuocTownWards.length; q++) {
            var option = document.createElement("option");
            option.text = caiNuocTownWards[q];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cờ Đỏ") {
        var coDoWards = ["Thị trấn Cờ Đỏ", "Xã Thới Hưng", "Xã Thới Thạch", "Xã Thới Tu", "Xã Thới Thạnh", "Xã Trung An", "Xã Trung Hưng", "Xã Trung Thạnh"];
        for (var i = 0; i < coDoWards.length; i++) {
            var option = document.createElement("option");
            option.text = coDoWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phong Điền") {
        var phongDienWards = ["Thị trấn Phong Điền", "Xã Giai Xuân", "Xã Mỹ Khánh", "Xã Nhơn Ái", "Xã Nhơn Nghĩa", "Xã Trường Long", "Xã Trường Phú"];
        for (var j = 0; j < phongDienWards.length; j++) {
            var option = document.createElement("option");
            option.text = phongDienWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thới Lai") {
        var thoiLaiWards = ["Thị trấn Thới Lai", "Xã Định Môn", "Xã Thới Hòa", "Xã Thới Long", "Xã Thới Thạnh"];
        for (var k = 0; k < thoiLaiWards.length; k++) {
            var option = document.createElement("option");
            option.text = thoiLaiWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vĩnh Thạnh") {
        var vinhThanhWards = ["Thị trấn Vĩnh Thạnh", "Xã Thạnh An", "Xã Thạnh Lợi", "Xã Thạnh Lộc", "Xã Thạnh Mỹ", "Xã Thạnh Qưới", "Xã Thạnh Thắng"];
        for (var l = 0; l < vinhThanhWards.length; l++) {
            var option = document.createElement("option");
            option.text = vinhThanhWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Quận Bình Thủy") {
        var binhThuyWards = ["Phường An Thới", "Phường Bình Thủy", "Phường Long Hòa", "Phường Trà An"];
        for (var m = 0; m < binhThuyWards.length; m++) {
            var option = document.createElement("option");
            option.text = binhThuyWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Quận Cái Răng") {
        var caiRangWards = ["Phường Ba Láng", "Phường Hưng Phú", "Phường Lê Bình", "Phường Phú Thứ", "Phường Thường Thạnh"];
        for (var n = 0; n < caiRangWards.length; n++) {
            var option = document.createElement("option");
            option.text = caiRangWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Quận Ninh Kiều") {
        var ninhKieuWards = ["Phường An Bình", "Phường An Cư", "Phường An Hòa", "Phường An Khánh", "Phường An Nghiệp", "Phường An Phú", "Phường Cái Khế", "Phường Hưng Lợi", "Phường Tân An", "Phường Thới Bình", "Phường Trà Nóc"];
        for (var o = 0; o < ninhKieuWards.length; o++) {
            var option = document.createElement("option");
            option.text = ninhKieuWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Quận Ô Môn") {
        var oMonWards = ["Phường Châu Văn Liêm", "Phường Long Hưng", "Phường Phước Thới", "Phường Thới An", "Phường Thới Hòa", "Phường Thới Long"];
        for (var p = 0; p < oMonWards.length; p++) {
            var option = document.createElement("option");
            option.text = oMonWards[p];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Chư Păh") {
        var chuPahWards = ["Thị trấn Chư Păh", "Xã Ia Blứ", "Xã Ia Chia", "Xã Ia Drăng", "Xã Ia Krêl", "Xã Ia Lang", "Xã Ia Nan", "Xã Ia Pia", "Xã Ia Pếch", "Xã Ia Sao", "Xã Ia Tôr", "Xã Ia Tul"];
        for (var i = 0; i < chuPahWards.length; i++) {
            var option = document.createElement("option");
            option.text = chuPahWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chư Prông") {
        var chuProngWards = ["Thị trấn Chư Prông", "Xã Bình Giáo", "Xã Bình Phước", "Xã Chư Drăng", "Xã Chư Gu", "Xã Ia Đal", "Xã Ia Đêr", "Xã Ia Dêr", "Xã Ia Phang", "Xã Ia Phí", "Xã Nghĩa An", "Xã Nghĩa Đức"];
        for (var j = 0; j < chuProngWards.length; j++) {
            var option = document.createElement("option");
            option.text = chuProngWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chư Pưh") {
        var chuPuhWards = ["Thị trấn Chư Pưh", "Xã Chư Don", "Xã Ia Blang", "Xã Ia Dreng", "Xã Ia Hrung", "Xã Ia Kla", "Xã Ia Krai", "Xã Ia Krêl", "Xã Ia Lang", "Xã Ia Nan", "Xã Ia Rong"];
        for (var k = 0; k < chuPuhWards.length; k++) {
            var option = document.createElement("option");
            option.text = chuPuhWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chư Sê") {
        var chuSeWards = ["Thị trấn Chư Sê", "Xã AL Bá", "Xã Ayun", "Xã Bar Măih", "Xã Bờ Ngoong", "Xã Chư Pơng", "Xã Đất Bằng", "Xã Ia Blang", "Xã Ia HLốp", "Xã Ia Ko", "Xã Ia Pal", "Xã Ia Tiêm", "Xã Kông HTok"];
        for (var l = 0; l < chuSeWards.length; l++) {
            var option = document.createElement("option");
            option.text = chuSeWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk Đoa") {
        var dakDoaWards = ["Thị trấn Đắk Đoa", "Xã Hà Bầu", "Xã Hà Đông", "Xã Hà Lâm", "Xã Hà Tân", "Xã Hà Tĩnh", "Xã Hòa Hảo", "Xã Hòa Thành", "Xã Phú Tân", "Xã Quảng Tín", "Xã Tân Hà", "Xã Đắk Sơmei"];
        for (var m = 0; m < dakDoaWards.length; m++) {
            var option = document.createElement("option");
            option.text = dakDoaWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk Pơ") {
        var dakPoWards = ["Thị trấn Đắk Pơ", "Xã Đắk Cơ Me", "Xã Đắk Sông", "Xã Đắk Tờ Re", "Xã Đắk Trăm", "Xã Đắk Wer", "Xã Kiến Đức", "Xã Kiến Thành", "Xã Nghĩa Thành", "Xã Pờ Tó"];
        for (var n = 0; n < dakPoWards.length; n++) {
            var option = document.createElement("option");
            option.text = dakPoWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Cơ") {
        var ducCoWards = ["Thị trấn Đức Cơ", "Xã Đắk R'Măng", "Xã Đắk N'Drót", "Xã Đắk Ruồng", "Xã Đắk Sor", "Xã Đức Lập", "Xã Đức Man", "Xã Đức Minh", "Xã Đức Phổ", "Xã Đức Vân", "Xã Đức Xuyên"];
        for (var o = 0; o < ducCoWards.length; o++) {
            var option = document.createElement("option");
            option.text = ducCoWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ia Grai") {
        var iaGraiWards = ["Thị trấn Ia Grai", "Xã Ia Ake", "Xã Ia Bă", "Xã Ia Chia", "Xã Ia Dêr", "Xã Ia Grăng", "Xã Ia Hrú", "Xã Ia Kha", "Xã Ia Khai", "Xã Ia Kreng", "Xã Ia Mơ", "Xã Ia Nhin", "Xã Ia Phang", "Xã Ia Piơ", "Xã Ia Pếch", "Xã Ia Sao", "Xã Ia Tôr", "Xã Ia Yok", "Xã Ia Yeng"];
        for (var p = 0; p < iaGraiWards.length; p++) {
            var option = document.createElement("option");
            option.text = iaGraiWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ia Pa") {
        var iaPaWards = ["Thị trấn Ia Pa", "Xã Ia Băng", "Xã Ia Chia", "Xã Ia Dêr", "Xã Ia Kla", "Xã Ia Pal", "Xã Ia Piar", "Xã Ia Piơ", "Xã Ia Sao", "Xã Ia Ser", "Xã Ia Yok", "Xã Pờ Tó"];
        for (var q = 0; q < iaPaWards.length; q++) {
            var option = document.createElement("option");
            option.text = iaPaWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Huyện K'Bang") {
        var kBangWards = ["Thị trấn K'Bang", "Xã An Trạch", "Xã Đức An", "Xã Đức Đồng", "Xã Đức Lập", "Xã Đức Năng", "Xã Đức Xuyên", "Xã Đức Yên", "Xã Ia Din", "Xã Ia Dơk", "Xã Ia Kly", "Xã Ia Pal", "Xã Ia Toại"];
        for (var r = 0; r < kBangWards.length; r++) {
            var option = document.createElement("option");
            option.text = kBangWards[r];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Kông Chro") {
        var kongChroWards = ["Thị trấn Đăk Krong", "Xã An Bình", "Xã An Phú", "Xã Cư An", "Xã Cư Bông", "Xã Cư Elang", "Xã Cư Huê", "Xã Ea Tih", "Xã Hòa Lễ", "Xã Hòa Phú", "Xã Hoà Sơn", "Xã Hòa Tân", "Xã Hòa Thành", "Xã Hòa Vinh", "Xã Yang Réo"];
        for (var i = 0; i < kongChroWards.length; i++) {
            var option = document.createElement("option");
            option.text = kongChroWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Krông Pa") {
        var krongPaWards = ["Thị trấn Đắk Hòa", "Xã Hòa Đăng", "Xã Hòa Định", "Xã Hòa Phú", "Xã Hòa Lợi", "Xã Hòa Phong", "Xã Hòa Thành", "Xã Hòa Tân", "Xã Hòa Thắng", "Xã Hòa Xuân", "Xã Hòa Sơn"];
        for (var j = 0; j < krongPaWards.length; j++) {
            var option = document.createElement("option");
            option.text = krongPaWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mang Yang") {
        var mangYangWards = ["Thị trấn Mang Yang", "Xã Dray Bhăng", "Xã Đắk Đoa", "Xã Hòa Đông", "Xã Hòa Tiến", "Xã Hòa Tường", "Xã Hòa Trị", "Xã Krông Năng", "Xã Hòa Sơn", "Xã Hòa Lễ", "Xã Phú Hòa"];
        for (var k = 0; k < mangYangWards.length; k++) {
            var option = document.createElement("option");
            option.text = mangYangWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Thiện") {
        var phuThienWards = ["Thị trấn Chư Drăng", "Xã Bình Minh", "Xã Hòa Phú", "Xã Ia Phìn", "Xã Ia Sol", "Xã Ia JLơi", "Xã Ia Le", "Xã Ia Tôr", "Xã Phú Hòa", "Xã Nghĩa Hòa", "Xã Nghĩa Hưng"];
        for (var l = 0; l < phuThienWards.length; l++) {
            var option = document.createElement("option");
            option.text = phuThienWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chư Pưh") {
        var chuPuhWards = ["Thị trấn Chư Pưh", "Xã Bàu Cạn", "Xã Ia BLứ", "Xã Ia HLốp", "Xã Ia Lốp", "Xã Ia RPăng", "Xã Ia Rmok", "Xã Ia RSai", "Xã Ia RSươm", "Xã Ia RVê", "Xã Ia Sao", "Xã Ia Sol"];
        for (var m = 0; m < chuPuhWards.length; m++) {
            var option = document.createElement("option");
            option.text = chuPuhWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Pleiku") {
        var pleikuWards = ["Phường An Phú", "Phường Đống Đa", "Phường Hải Châu", "Phường Hội Thương", "Phường Ích Vọng", "Phường Lê Lợi", "Phường Phù Đổng", "Phường Thắng Lợi", "Phường Thống Nhất", "Phường Trà Bá", "Phường Trà Đa"];
        for (var n = 0; n < pleikuWards.length; n++) {
            var option = document.createElement("option");
            option.text = pleikuWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã An Khê") {
        var anKheWards = ["Phường An Bình", "Phường An Phú", "Phường Cửu An", "Phường Tây Sơn", "Phường Tú An", "Xã An Phước", "Xã Cửu An", "Xã Tây Sơn", "Xã Tú An"];
        for (var o = 0; o < anKheWards.length; o++) {
            var option = document.createElement("option");
            option.text = anKheWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Ayun Pa") {
        var ayunPaWards = ["Phường Cheo Reo", "Phường Hòa Bình", "Phường Ia RBol", "Phường Sông Bờ", "Xã Ayun", "Xã Chrôh Pơnan", "Xã Ia RBol", "Xã Ia RTô", "Xã Ia Sao", "Xã Phú Hòa", "Xã Uar"];
        for (var p = 0; p < ayunPaWards.length; p++) {
            var option = document.createElement("option");
            option.text = ayunPaWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Kông Chro") {
        var kongChroWards = ["Phường Chư Mố", "Phường Hòa Lễ", "Phường Ia Kring", "Phường Đoàn Kết", "Xã Chư Răng", "Xã Đăng Hà", "Xã Đăng Phước", "Xã Đoàn Kết", "Xã Ia Pếch", "Xã Ia RMok", "Xã Phú Hòa"];
        for (var q = 0; q < kongChroWards.length; q++) {
            var option = document.createElement("option");
            option.text = kongChroWards[q];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bắc Mê") {
        var bacMeWards = ["Thị trấn Đồng Văn", "Xã Lũng Cú", "Xã Lũng Táo", "Xã Phó Bảng", "Xã Sảng Tủng", "Xã Sính Lủng", "Xã Sủng Là", "Xã Sủng Trái", "Xã Tả Lủng", "Xã Tả Phìn"];
        for (var i = 0; i < bacMeWards.length; i++) {
            var option = document.createElement("option");
            option.text = bacMeWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bắc Quang") {
        var bacQuangWards = ["Thị trấn Bắc Quang", "Xã Hữu Sản", "Xã Lùng Vai", "Xã Lùng Tám", "Xã Nghĩa Tá", "Xã Quang Thuận", "Xã Thanh Vân", "Xã Tân Thành", "Xã Tùng Vài"];
        for (var j = 0; j < bacQuangWards.length; j++) {
            var option = document.createElement("option");
            option.text = bacQuangWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đồng Văn") {
        var dongVanWards = ["Thị trấn Đồng Văn", "Xã Lũng Cú", "Xã Lũng Phìn", "Xã Lũng Táo", "Xã Lũng Thầu", "Xã Má Lé", "Xã Phó Bảng", "Xã Phố Cáo", "Xã Sảng Tủng", "Xã Sính Lủng", "Xã Sủng Là", "Xã Sủng Trái", "Xã Sủng Trà"];
        for (var k = 0; k < dongVanWards.length; k++) {
            var option = document.createElement("option");
            option.text = dongVanWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoàng Su Phì") {
        var hoangSuPhiWards = ["Thị trấn Vinh Quang", "Xã Bản Luốc", "Xã Bản Máy", "Xã Bản Nhùng", "Xã Hồ Thầu", "Xã Nàng Đôn", "Xã Nậm Dịch", "Xã Nậm Khòa", "Xã Thông Nguyên", "Xã Tả Sử Choóng", "Xã Tả Thàng", "Xã Thông Đức"];
        for (var l = 0; l < hoangSuPhiWards.length; l++) {
            var option = document.createElement("option");
            option.text = hoangSuPhiWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mèo Vạc") {
        var meoVacWards = ["Thị trấn Mèo Vạc", "Xã Đồng Chum", "Xã Giàng Chu Phìn", "Xã Khâu Vai", "Xã Lũng Chinh", "Xã Lũng Pù", "Xã Niêm Sơn", "Xã Niêm Tòng", "Xã Quản Lạn", "Xã Sủng Máng", "Xã Sủng Trà", "Xã Tả Lủng", "Xã Tát Ngà"];
        for (var m = 0; m < meoVacWards.length; m++) {
            var option = document.createElement("option");
            option.text = meoVacWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quản Bạ") {
        var quanBaWards = ["Thị trấn Quản Bạ", "Xã Lùng Hoà", "Xã Lùng Phìn", "Xã Phùng Phình", "Xã Sủng Trà", "Xã Tả Ván", "Xã Tả Phìn", "Xã Tùng Vài", "Xã Đường Thượng", "Xã Đại Sáp", "Xã Giáp Trung", "Xã Quản Bạ", "Xã Quyết Tiến", "Xã Tân Bắc", "Xã Thái An", "Xã Tân Thượng"];
        for (var n = 0; n < quanBaWards.length; n++) {
            var option = document.createElement("option");
            option.text = quanBaWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quang Bình") {
        var quangBinhWards = ["Thị trấn Yên Minh", "Xã Sủng Tráng", "Xã Sủng Trà", "Xã Sủng Thắng", "Xã Sủng Thế", "Xã Phú Lũng", "Xã Phúc Xa", "Xã Thắng Mố", "Xã Đông Minh", "Xã Đường Thượng", "Xã Lao Và Chải", "Xã Mậu Duệ", "Xã Thanh Đức", "Xã Thanh Thủy", "Xã Tiên Nguyên", "Xã Vị Xuyên", "Xã Xín Cái"];
        for (var o = 0; o < quangBinhWards.length; o++) {
            var option = document.createElement("option");
            option.text = quangBinhWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vị Xuyên") {
        var viXuyenWards = ["Thị trấn Cốc Pài", "Xã Cốc Rế", "Xã Nông Trường Việt Lâm", "Xã Phiêng Luông", "Xã Tả Ván", "Xã Tát Ngà", "Xã Thèn Phàng", "Xã Trung Thành", "Xã Xín Chải"];
        for (var p = 0; p < viXuyenWards.length; p++) {
            var option = document.createElement("option");
            option.text = viXuyenWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Xín Mần") {
        var xinManWards = ["Thị trấn Cốc Mỳ", "Xã Bản Díu", "Xã Bản Ngò", "Xã Chế Là", "Xã Chí Cà", "Xã Cốc Rế", "Xã Nàn Xỉn", "Xã Nàn Ma", "Xã Nàn Hài", "Xã Sán Chải", "Xã Sín Thầu", "Xã Sán Xả Hồ", "Xã Tả Nhìu", "Xã Thào Chư Phìn", "Xã Thèn Chu Phìn", "Xã Tủa Tẩu"];
        for (var q = 0; q < xinManWards.length; q++) {
            var option = document.createElement("option");
            option.text = xinManWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hà Giang") {
        var haGiangCityWards = ["Phường Ngọc Đường", "Phường Phương Độ", "Phường Quang Trung", "Phường Minh Khai", "Phường Ngọc Lam", "Phường Quảng Bị", "Phường Quốc Toản", "Phường Trần Phú"];
        for (var r = 0; r < haGiangCityWards.length; r++) {
            var option = document.createElement("option");
            option.text = haGiangCityWards[r];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bình Lục") {
        var binhLucWards = ["Thị trấn Bình Mỹ", "Xã Bình Nghĩa", "Xã Bình Thanh", "Xã Chính Mỹ", "Xã Đồn Đạc", "Xã Hậu Mỹ", "Xã Lạc Phú", "Xã Lạc Vân", "Xã Lang Mỹ", "Xã Phụng Mỹ", "Xã Sơn Mỹ", "Xã Tân Mỹ", "Xã Thanh Mỹ", "Xã Trung Mỹ", "Xã Vĩnh Mỹ"];
        for (var i = 0; i < binhLucWards.length; i++) {
            var option = document.createElement("option");
            option.text = binhLucWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Duy Tiên") {
        var duyTienWards = ["Thị trấn Duy Tiên", "Xã An Tiến", "Xã Bạch Thượng", "Xã Châu Lộc", "Xã Châu Quế Hạ", "Xã Châu Quế Thượng", "Xã Duy Hải", "Xã Duy Minh", "Xã Duy Nghĩa", "Xã Duy Tân", "Xã Duy Thành", "Xã Hoàng Đông", "Xã Mộc Nam", "Xã Yên Hòa"];
        for (var j = 0; j < duyTienWards.length; j++) {
            var option = document.createElement("option");
            option.text = duyTienWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kim Bảng") {
        var kimBangWards = ["Thị trấn Kim Bảng", "Xã Biên Hòa", "Xã Bình Yên", "Xã Bùi Xá", "Xã Cự Khê", "Xã Dân Tiến", "Xã Đỗ Động", "Xã Hồng Thái", "Xã Hùng An", "Xã Khả Phong", "Xã Lê Hồ", "Xã Liên Sơn", "Xã Nghĩa Hành", "Xã Phù Phong", "Xã Phương Trung"];
        for (var k = 0; k < kimBangWards.length; k++) {
            var option = document.createElement("option");
            option.text = kimBangWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lý Nhân") {
        var lyNhanWards = ["Thị trấn Lý Nhân", "Xã Bắc Lý", "Xã Chân Lý", "Xã Đạo Lý", "Xã Hợp Lý", "Xã Nguyên Lý", "Xã Ninh Lý", "Xã Quang Lý", "Xã Thanh Lý", "Xã Trung Lý", "Xã Văn Lý"];
        for (var l = 0; l < lyNhanWards.length; l++) {
            var option = document.createElement("option");
            option.text = lyNhanWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Liêm") {
        var thanhLiemWards = ["Thị trấn Lương Bằng", "Xã Cao Dương", "Xã Đức Thắng", "Xã Hoàng Hanh", "Xã Hồng Quang", "Xã Khoái Châu", "Xã Kim Bình", "Xã Liên Bạt", "Xã Lương Bằng", "Xã Minh Tân", "Xã Nghĩa Dân", "Xã Phú Hòa", "Xã Tam Hồng", "Xã Tân Dân", "Xã Thanh Cường", "Xã Tiền Tiến", "Xã Toàn Thắng", "Xã Trung Hưng", "Xã Việt Hòa"];
        for (var m = 0; m < thanhLiemWards.length; m++) {
            var option = document.createElement("option");
            option.text = thanhLiemWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Phủ Lý") {
        var phuLyCityWards = ["Phường Bạch Đằng", "Phường Bến Tắm", "Phường Lê Hồng Phong", "Phường Liêm Chính", "Phường Minh Khai", "Phường Nam Bình", "Phường Phù Vân", "Phường Quang Trung", "Phường Thanh Châu", "Phường Trần Hưng Đạo", "Phường Trịnh Xá", "Phường Văn Miu"];
        for (var n = 0; n < phuLyCityWards.length; n++) {
            var option = document.createElement("option");
            option.text = phuLyCityWards[n];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cẩm Xuyên") {
        var camXuyenWards = ["Thị trấn Cẩm Xuyên", "Xã Cẩm Bình", "Xã Cẩm Duệ", "Xã Cẩm Dương", "Xã Cẩm Hà", "Xã Cẩm Hoá", "Xã Cẩm Hưng", "Xã Cẩm Huy", "Xã Cẩm Lĩnh", "Xã Cẩm Lộc", "Xã Cẩm Lợi", "Xã Cẩm Nam", "Xã Cẩm Phú", "Xã Cẩm Quý", "Xã Cẩm Sơn", "Xã Cẩm Thạch", "Xã Cẩm Thành", "Xã Cẩm Thịnh", "Xã Cẩm Thủy", "Xã Cẩm Trung", "Xã Cẩm Vĩnh", "Xã Cẩm Vũ"];
        for (var i = 0; i < camXuyenWards.length; i++) {
            var option = document.createElement("option");
            option.text = camXuyenWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Can Lộc") {
        var canLocWards = ["Thị trấn Xuân Lộc", "Xã Thạch Bình", "Xã Thạch Châu", "Xã Thạch Đài", "Xã Thạch Điền", "Xã Thạch Đồng", "Xã Thạch Hạ", "Xã Thạch Hải", "Xã Thạch Hòa", "Xã Thạch Hội", "Xã Thạch Hương", "Xã Thạch Khê", "Xã Thạch Khoán", "Xã Thạch Lạc", "Xã Thạch Liên", "Xã Thạch Long", "Xã Thạch Lưu", "Xã Thạch Ngọc", "Xã Thạch Quảng", "Xã Thạch Sơn", "Xã Thạch Tân", "Xã Thạch Thắng", "Xã Thạch Thanh", "Xã Thạch Tiến", "Xã Thạch Trị", "Xã Thạch Văn", "Xã Thạch Vĩnh", "Xã Thạch Xuân"];
        for (var j = 0; j < canLocWards.length; j++) {
            var option = document.createElement("option");
            option.text = canLocWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Thọ") {
        var ducThoWards = ["Thị trấn Đức Thọ", "Xã Đức An", "Xã Đức Dũng", "Xã Đức Đồng", "Xã Đức Hòa", "Xã Đức Lâm", "Xã Đức Lập", "Xã Đức Lạc", "Xã Đức Lạng", "Xã Đức Lập Hạ", "Xã Đức Lập Thượng", "Xã Đức Long", "Xã Đức Lương", "Xã Đức Nhân", "Xã Đức Ninh", "Xã Đức Thanh", "Xã Đức Thịnh", "Xã Đức Thuận", "Xã Đức Tín", "Xã Đức Trạch", "Xã Đức Trung", "Xã Đức Văn", "Xã Đức Xuân"];
        for (var k = 0; k < ducThoWards.length; k++) {
            var option = document.createElement("option");
            option.text = ducThoWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hương Khê") {
        var huongKheWards = ["Thị trấn Hương Khê", "Xã Hà Linh", "Xã Hòa Hải", "Xã Hương Bình", "Xã Hương Đô", "Xã Hương Giang", "Xã Hương Lâm", "Xã Hương Liên", "Xã Hương Long", "Xã Hương Thủy", "Xã Hương Trà", "Xã Hương Trạch", "Xã Hương Vĩnh", "Xã Hương Xuân", "Xã Phúc Đồng", "Xã Phúc Trạch", "Xã Sơn Thọ", "Xã Tân Hòa", "Xã Tân Khai", "Xã Tân Lợi", "Xã Tân Long", "Xã Tân Mỹ", "Xã Tân Phú", "Xã Tân Thanh", "Xã Tân Trào"];
        for (var l = 0; l < huongKheWards.length; l++) {
            var option = document.createElement("option");
            option.text = huongKheWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hương Sơn") {
        var huongSonWards = ["Thị trấn Hương Sơn", "Xã Hà Linh", "Xã Hòa Hải", "Xã Hương Bình", "Xã Hương Đô", "Xã Hương Giang", "Xã Hương Lâm", "Xã Hương Liên", "Xã Hương Long", "Xã Hương Thủy", "Xã Hương Trà", "Xã Hương Trạch", "Xã Hương Vĩnh", "Xã Hương Xuân", "Xã Phúc Đồng", "Xã Phúc Trạch", "Xã Sơn Thọ", "Xã Tân Hòa", "Xã Tân Khai", "Xã Tân Lợi", "Xã Tân Long", "Xã Tân Mỹ", "Xã Tân Phú", "Xã Tân Thanh", "Xã Tân Trào"];
        for (var m = 0; m < huongSonWards.length; m++) {
            var option = document.createElement("option");
            option.text = huongSonWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kỳ Anh") {
        var kyAnhWards = ["Thị trấn Kỳ Anh", "Xã Cẩm Xuyên", "Xã Đức Dũng", "Xã Đức Thọ", "Xã Hải Hà", "Xã Hải Hòa", "Xã Hải Sơn", "Xã Hải Tân", "Xã Hải Thành", "Xã Hải Thượng", "Xã Hải Trạch", "Xã Hải Vĩnh", "Xã Hòa Hải", "Xã Kỳ Bắc", "Xã Kỳ Châu", "Xã Kỳ Đồng", "Xã Kỳ Giang", "Xã Kỳ Hải", "Xã Kỳ Hà", "Xã Kỳ Hoa", "Xã Kỳ Hưng", "Xã Kỳ Lợi", "Xã Kỳ Long", "Xã Kỳ Minh", "Xã Kỳ Nam", "Xã Kỳ Ninh", "Xã Kỳ Phong", "Xã Kỳ Phú", "Xã Kỳ Sơn", "Xã Kỳ Tân", "Xã Kỳ Tây", "Xã Kỳ Thành", "Xã Kỳ Thịnh", "Xã Kỳ Thọ", "Xã Kỳ Tiến", "Xã Kỳ Trinh", "Xã Kỳ Trung", "Xã Kỳ Văn", "Xã Kỳ Xuân", "Xã Kỳ Yên"];
        for (var n = 0; n < kyAnhWards.length; n++) {
            var option = document.createElement("option");
            option.text = kyAnhWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lộc Hà") {
        var locHaWards = ["Thị trấn Lộc Hà", "Xã Hồi Xuân", "Xã Phù Lưu", "Xã Thạch Hà", "Xã Thạch Kênh", "Xã Thạch Lập", "Xã Thạch Liên", "Xã Thạch Trị", "Xã Thanh Hà", "Xã Tiến Hạnh", "Xã Vĩnh Lộc"];
        for (var o = 0; o < locHaWards.length; o++) {
            var option = document.createElement("option");
            option.text = locHaWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nghi Xuân") {
        var nghiXuanWards = ["Thị trấn Cửa Sở", "Xã Cương Gián", "Xã Đan Trường", "Xã Đông Thọ", "Xã Hòa Mục", "Xã Nam Giang", "Xã Nam Nghị", "Xã Nam Thanh", "Xã Nam Xuân", "Xã Thượng Giang", "Xã Thượng Ninh", "Xã Xuân An", "Xã Xuân Giang", "Xã Xuân Hải", "Xã Xuân Hội", "Xã Xuân Phổ", "Xã Xuân Thành", "Xã Xuân Viên", "Xã Xuân Yên"];
        for (var p = 0; p < nghiXuanWards.length; p++) {
            var option = document.createElement("option");
            option.text = nghiXuanWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạch Hà") {
        var thachHaWards = ["Thị trấn Thạch Hà", "Xã Thạch Bi", "Xã Thạch Định", "Xã Thạch Đồng", "Xã Thạch Hải", "Xã Thạch Hội", "Xã Thạch Hợi", "Xã Thạch Kênh", "Xã Thạch Khê", "Xã Thạch Lạc", "Xã Thạch Liên", "Xã Thạch Long", "Xã Thạch Mỹ", "Xã Thạch Ngọc", "Xã Thạch Sơn", "Xã Thạch Tân", "Xã Thạch Thắng", "Xã Thạch Thanh", "Xã Thạch Tiến", "Xã Thạch Trị", "Xã Thạch Văn", "Xã Thạch Vĩnh", "Xã Thạch Xuân", "Xã Thạch Yên"];
        for (var q = 0; q < thachHaWards.length; q++) {
            var option = document.createElement("option");
            option.text = thachHaWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vũ Quang") {
        var vuQuangWards = ["Thị trấn Vũ Quang", "Xã Ân Phú", "Xã Đức Bồng", "Xã Đức Giang", "Xã Đức Hương", "Xã Đức Liên", "Xã Đức Lĩnh", "Xã Đức Phong", "Xã Đức Tân", "Xã Đức Thắng", "Xã Đức Thịnh", "Xã Đức Thủy", "Xã Hương Điền", "Xã Hương Minh", "Xã Hương Quang", "Xã Hương Thọ", "Xã Sơn Thọ", "Xã Thọ Điền"];
        for (var r = 0; r < vuQuangWards.length; r++) {
            var option = document.createElement("option");
            option.text = vuQuangWards[r];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hà Tĩnh") {
        var haTinhCityWards = ["Phường Bắc Hà", "Phường Đại Nài", "Phường Nam Hà", "Phường Nguyễn Du", "Phường Tân Giang", "Phường Tân Hà", "Phường Thạch Linh", "Phường Trần Phú", "Phường Văn Yên", "Phường Xuân Đài", "Phường Yên Thế"];
        for (var s = 0; s < haTinhCityWards.length; s++) {
            var option = document.createElement("option");
            option.text = haTinhCityWards[s];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cao Phong") {
        var caoPhongWards = ["Thị trấn Cao Phong", "Xã Bắc Phong", "Xã Bình Thanh", "Xã Cao Sơn", "Xã Dũng Phong", "Xã Hợp Phong", "Xã Tây Phong", "Xã Thung Nai", "Xã Thung Sơn", "Xã Thu Phong", "Xã Thuần Hóa", "Xã Tiên Phong", "Xã Xuân Phong"];
        for (var i = 0; i < caoPhongWards.length; i++) {
            var option = document.createElement("option");
            option.text = caoPhongWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đà Bắc") {
        var daBacWards = ["Thị trấn Đà Bắc", "Xã Đồng Chum", "Xã Đồng Nghê", "Xã Giáp Đắt", "Xã Hoàng An", "Xã Huống Thượng", "Xã Khánh Thượng", "Xã Tân Minh", "Xã Tân Pheo", "Xã Thanh Hải", "Xã Thanh Nông", "Xã Thượng Lâm", "Xã Tuân Đạo"];
        for (var j = 0; j < daBacWards.length; j++) {
            var option = document.createElement("option");
            option.text = daBacWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kim Bôi") {
        var kimBoiWards = ["Thị trấn Bo", "Xã Bảo La", "Xã Cao Thắng", "Xã Đồng Hưu", "Xã Đồng Nhi", "Xã Gia Mô", "Xã Kim Lập", "Xã Kim Thạch", "Xã Kim Truy", "Xã Mi Hòa", "Xã Nam Thượng", "Xã Nuông Dăm", "Xã Phiêng Luông", "Xã Sào Báy", "Xã Tú Sơn", "Xã Vĩnh Đồng"];
        for (var k = 0; k < kimBoiWards.length; k++) {
            var option = document.createElement("option");
            option.text = kimBoiWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kỳ Sơn") {
        var kySonWards = ["Thị trấn Phong Phú", "Xã Bắc Lý", "Xã Châu Minh", "Xã Đoàn Kết", "Xã Đồng Tâm", "Xã Hợp Thành", "Xã Lam Sơn", "Xã Lâm Sơn", "Xã Mường Xén", "Xã Nam Lý", "Xã Ngọc Mỹ", "Xã Phú Cường", "Xã Phú Lợi", "Xã Phú Thịnh", "Xã Quang Phong", "Xã Tân Xuân", "Xã Tây Sơn", "Xã Thái Bình", "Xã Thọ Thanh", "Xã Trung Thành", "Xã Trung Tiến", "Xã Xuân Lập", "Xã Yên Ninh"];
        for (var l = 0; l < kySonWards.length; l++) {
            var option = document.createElement("option");
            option.text = kySonWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lạc Sơn") {
        var lacSonWards = ["Thị trấn Lạc Sơn", "Xã Bình Sơn", "Xã Chí Đạo", "Xã Công Đa", "Xã Đa Phúc", "Xã Hương Nhượng", "Xã Minh Sơn", "Xã Ngọc Lâu", "Xã Phùng Giáo", "Xã Phùng Minh", "Xã Trung Sơn", "Xã Trúc Lâu", "Xã Vân Nghĩa", "Xã Văn Miếu", "Xã Yên Lãng"];
        for (var m = 0; m < lacSonWards.length; m++) {
            var option = document.createElement("option");
            option.text = lacSonWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lạc Thủy") {
        var lacThuyWards = ["Thị trấn Cao Phong", "Xã Bắc Phong", "Xã Bình Thanh", "Xã Cao Sơn", "Xã Dũng Phong", "Xã Hợp Phong", "Xã Tây Phong", "Xã Thung Nai", "Xã Thung Sơn", "Xã Thu Phong", "Xã Thuần Hóa", "Xã Tiên Phong", "Xã Xuân Phong"];
        for (var n = 0; n < lacThuyWards.length; n++) {
            var option = document.createElement("option");
            option.text = lacThuyWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lương Sơn") {
        var luongSonWards = ["Thị trấn Lương Sơn", "Xã Cao Dương", "Xã Cao Sơn", "Xã Cư Yên", "Xã Hòa Sơn", "Xã Hợp Châu", "Xã Hợp Thanh", "Xã Kiên Thọ", "Xã Lâm Sơn", "Xã Liễu Đô", "Xã Mỹ Thành", "Xã Tân Thành", "Xã Thanh Hà", "Xã Trúc Sơn", "Xã Trường Sơn", "Xã Trường Thọ", "Xã Trung Sơn", "Xã Tử Nê", "Xã Vĩnh Lợi", "Xã Xuân Cẩm", "Xã Yên Sơn"];
        for (var o = 0; o < luongSonWards.length; o++) {
            var option = document.createElement("option");
            option.text = luongSonWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mai Châu") {
        var maiChauWards = ["Thị trấn Mai Châu", "Xã Bao La", "Xã Chiềng Châu", "Xã Chiềng Đông", "Xã Chiềng Mai", "Xã Chiềng Ngàm", "Xã Chiềng San", "Xã Chiềng Xôm", "Xã Mai Hạ", "Xã Mai Hịch", "Xã Nà Phòn", "Xã Pà Cò", "Xã Sáng Chải", "Xã Tân Mai", "Xã Tân Sơn"];
        for (var p = 0; p < maiChauWards.length; p++) {
            var option = document.createElement("option");
            option.text = maiChauWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Lạc") {
        var tanLacWards = ["Thị trấn Mành Sơn", "Xã Ba Hàng Đồi", "Xã Chiềng Ban", "Xã Chiềng Chăn", "Xã Chiềng Chung", "Xã Chiềng Dong", "Xã Chiềng Kheo", "Xã Chiềng Lao", "Xã Chiềng Muôn", "Xã Chiềng Nơi", "Xã Chiềng Sung", "Xã Hát Lót", "Xã Mường Bằng", "Xã Mường Bon", "Xã Mường Tranh", "Xã Nà Bó", "Xã Nà Ớt", "Xã Phiêng Cằm", "Xã Phiêng Pằn", "Xã Tà Hộc", "Xã Tân Lập"];
        for (var q = 0; q < tanLacWards.length; q++) {
            var option = document.createElement("option");
            option.text = tanLacWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Thủy") {
        var yenThuyWards = ["Thị trấn Yên Bồng", "Xã An Bình", "Xã Bảo Hiệu", "Xã Cát Thịnh", "Xã Đại Phong", "Xã Đại Sơn", "Xã Động Quan", "Xã Đỗ Bình", "Xã Hóa Thượng", "Xã Hồng Thượng", "Xã Hợp Đồng", "Xã Hợp Thành", "Xã Hùng Tiến", "Xã Kim Bôi", "Xã Kim Lập", "Xã Lâm Thượng", "Xã Lạc Sỹ", "Xã Lập Tạ", "Xã Miền Đồi", "Xã Mông Hóa", "Xã Mỹ Bắc", "Xã Mỹ Thái", "Xã Nam Thái", "Xã Ngoại Hà", "Xã Tân Lập", "Xã Tân Phong", "Xã Thành Sơn", "Xã Thượng Tiến", "Xã Tiến Phú", "Xã Trung Thành", "Xã Trung Tiến", "Xã Văn Hội", "Xã Vĩnh Đồng", "Xã Xuân Vân"];
        for (var r = 0; r < yenThuyWards.length; r++) {
            var option = document.createElement("option");
            option.text = yenThuyWards[r];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hòa Bình") {
        var hoaBinhCityWards = ["Phường Hữu Nghị", "Phường Tân Hòa", "Phường Tân Thịnh", "Phường Đồng Tiến", "Phường Thái Bình", "Phường Hữu Nghị", "Phường Tân Hòa", "Phường Tân Thịnh", "Phường Đồng Tiến", "Phường Thái Bình"];
        for (var s = 0; s < hoaBinhCityWards.length; s++) {
            var option = document.createElement("option");
            option.text = hoaBinhCityWards[s];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Ân Thi") {
        var anThiWards = ["Thị trấn Ân Thi", "Xã Bắc Sơn", "Xã Bãi Sậy", "Xã Cẩm Ninh", "Xã Đa Lộc", "Xã Đặng Lễ", "Xã Đào Dương", "Xã Hạ Lễ", "Xã Hồ Tùng Mậu", "Xã Hồng Quang", "Xã Phù Ủng", "Xã Quế Tân", "Xã Tân Lễ", "Xã Thanh Ninh", "Xã Thủy Lộc", "Xã Tiền Phong", "Xã Vân Du", "Xã Việt Hùng"];
        for (var i = 0; i < anThiWards.length; i++) {
            var option = document.createElement("option");
            option.text = anThiWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Khoái Châu") {
        var khoaiChauWards = ["Thị trấn Dạ Trạch", "Xã Đại Tập", "Xã Đại Xuyên", "Xã Dân Tiến", "Xã Đốc Binh Kiều", "Xã Hàm Tử", "Xã Hồng Tiến", "Xã Lương Hoà", "Xã Minh Hoà", "Xã Ngũ Hiệp", "Xã Ngũ Phúc", "Xã Phùng Hưng", "Xã Tân Châu", "Xã Tân Dân", "Xã Thành Công", "Xã Thuần Thiện", "Xã Trung Chính", "Xã Trung Dũng", "Xã Việt Hòa", "Xã Việt Thanh"];
        for (var j = 0; j < khoaiChauWards.length; j++) {
            var option = document.createElement("option");
            option.text = khoaiChauWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kim Động") {
        var kimDongWards = ["Thị trấn Hùng Cường", "Xã Bình Dương", "Xã Chính Nghĩa", "Xã Đồng Thanh", "Xã Đức Hợp", "Xã Hiệp Cường", "Xã Hùng Thắng", "Xã Kim Định", "Xã Kim Đồng", "Xã Kim Thái", "Xã Phú Thịnh", "Xã Tân Định", "Xã Tân Thành", "Xã Tứ Dân", "Xã Việt Hòa"];
        for (var k = 0; k < kimDongWards.length; k++) {
            var option = document.createElement("option");
            option.text = kimDongWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mỹ Hào") {
        var myHaoWards = ["Thị trấn Mỹ Hào", "Xã Bạch Sam", "Xã Cao Đức", "Xã Dương Quang", "Xã Hồng Phong", "Xã Hợp Đức", "Xã Hợp Thanh", "Xã Hùng An", "Xã Hưng Long", "Xã Hương Lạc", "Xã Liên Phương", "Xã Minh Đức", "Xã Nhân Hòa", "Xã Phùng Chí Kiên", "Xã Phù Ủng", "Xã Thanh Hòa", "Xã Thượng Đình", "Xã Vạn Điểm", "Xã Xuân Dục"];
        for (var l = 0; l < myHaoWards.length; l++) {
            var option = document.createElement("option");
            option.text = myHaoWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phù Cừ") {
        var phuCucWards = ["Thị trấn Phù Cừ", "Xã An Ninh", "Xã Bảo Khê", "Xã Gia Khánh", "Xã Hàm Cường", "Xã Hồng Tiến", "Xã Liêm Cần", "Xã Liêm Sơn", "Xã Liêm Tuyền", "Xã Nghĩa Dân", "Xã Phù Cường", "Xã Phú Ninh", "Xã Tân Tiến", "Xã Tử Đà", "Xã Việt Hồng"];
        for (var m = 0; m < phuCucWards.length; m++) {
            var option = document.createElement("option");
            option.text = phuCucWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiên Lữ") {
        var tienLuWards = ["Thị trấn Tiên Lữ", "Xã Đại Hưng", "Xã Đại Nghĩa", "Xã Đoàn Đào", "Xã Hạp Lý", "Xã Hồng Vân", "Xã Khánh Hưng", "Xã Minh Tân", "Xã Nghi Hưng", "Xã Phụng Hưng", "Xã Quảng Phú Cầu", "Xã Tam Cường", "Xã Tân Phong", "Xã Thanh Phong", "Xã Tự Lạn", "Xã Việt Cường"];
        for (var n = 0; n < tienLuWards.length; n++) {
            var option = document.createElement("option");
            option.text = tienLuWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Văn Giang") {
        var vanGiangWards = ["Thị trấn Văn Giang", "Xã Cửu Cao", "Xã Đình Dù", "Xã Liên Nghĩa", "Xã Nghĩa Trụ", "Xã Phụng Công", "Xã Tân Tiến", "Xã Thanh Lưu", "Xã Vĩnh Khúc", "Xã Xuân Quan"];
        for (var o = 0; o < vanGiangWards.length; o++) {
            var option = document.createElement("option");
            option.text = vanGiangWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Văn Lâm") {
        var vanLamWards = ["Thị trấn Văn Đức", "Xã Bạch Đằng", "Xã Chỉ Đạo", "Xã Liên Hồng", "Xã Liêu Xá", "Xã Nghĩa Hưng", "Xã Tân Hưng", "Xã Tân Lạc", "Xã Thanh Hà", "Xã Thanh Vân", "Xã Trưng Trắc", "Xã Việt Hưng"];
        for (var p = 0; p < vanLamWards.length; p++) {
            var option = document.createElement("option");
            option.text = vanLamWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Mỹ") {
        var yenMyWards = ["Thị trấn Yên Mỹ", "Xã Đồng Than", "Xã Đức Hòa", "Xã Hòa Phong", "Xã Hòa Sơn", "Xã Hưng Long", "Xã Ngọc Long", "Xã Nguyệt Đức", "Xã Phúc Hòa", "Xã Tam Hòa", "Xã Trung Hòa", "Xã Trung Hưng", "Xã Yên Hòa", "Xã Yên Mỹ", "Xã Yên Phú", "Xã Yên Thắng"];
        for (var q = 0; q < yenMyWards.length; q++) {
            var option = document.createElement("option");
            option.text = yenMyWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hưng Yên") {
        var hungYenCityWards = ["Phường Hiến Nam", "Phường An Tảo", "Phường Lam Sơn", "Phường Minh Khai", "Phường Quang Trung", "Phường Hồng Châu", "Phường Lam Hạ", "Phường Liên Phương", "Phường Hồng Nam", "Phường Quảng Châu", "Phường Trung Nghĩa", "Phường Trung Tâm"];
        for (var r = 0; r < hungYenCityWards.length; r++) {
            var option = document.createElement("option");
            option.text = hungYenCityWards[r];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bình Giang") {
        var binhGiangWards = ["Thị trấn Bình Giang", "Xã Cổ Bì", "Xã Đại Bái", "Xã Lê Ninh", "Xã Nhân Quyền", "Xã Quang Minh", "Xã Thái Bảo", "Xã Vĩnh Quỳnh"];
        for (var i = 0; i < binhGiangWards.length; i++) {
            var option = document.createElement("option");
            option.text = binhGiangWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cẩm Giàng") {
        var camGiangWards = ["Thị trấn Cẩm Giàng", "Xã Cẩm Điền", "Xã Cẩm Đoài", "Xã Cẩm Đông", "Xã Cẩm Giang", "Xã Cẩm Phúc", "Xã Cẩm Sơn", "Xã Cẩm Thành", "Xã Cẩm Thịnh", "Xã Cẩm Thuỷ", "Xã Cẩm Trung", "Xã Cao An", "Xã Định Sơn", "Xã Đức Chánh", "Xã Đức Hưng", "Xã Đức Thắng", "Xã Dương Hưu", "Xã Lương Điền", "Xã Ngọc Liên", "Xã Tân Trường", "Xã Thạch Lỗi"];
        for (var j = 0; j < camGiangWards.length; j++) {
            var option = document.createElement("option");
            option.text = camGiangWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gia Lộc") {
        var giaLocWards = ["Thị trấn Gia Lộc", "Xã Đức Hồng", "Xã Định Trung", "Xã Gia Khánh", "Xã Gia Lương", "Xã Lê Lợi", "Xã Thống Kênh", "Xã Trưng Trắc", "Xã Trưng Trường", "Xã Yết Kiêu"];
        for (var k = 0; k < giaLocWards.length; k++) {
            var option = document.createElement("option");
            option.text = giaLocWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kim Thành") {
        var kimThanhWards = ["Thị trấn Cổ Dũng", "Xã Cộng Hòa", "Xã Đại Đức", "Xã Đại Thành", "Xã Kim Anh", "Xã Kim Đính", "Xã Kim Khê", "Xã Kim Lương", "Xã Kim Tân", "Xã Kim Trung", "Xã Kim Xuyên", "Xã Liên Hòa", "Xã Thượng Vũ", "Xã Tứ Kỳ", "Xã Vĩnh Xuyên"];
        for (var l = 0; l < kimThanhWards.length; l++) {
            var option = document.createElement("option");
            option.text = kimThanhWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kinh Môn") {
        var kinhMonWards = ["Thị trấn Kinh Môn", "Xã Bạch Đằng", "Xã Đại Tân", "Xã Hà Lâu", "Xã Hồng Phong", "Xã Hưng Thịnh", "Xã Kiến Quốc", "Xã Liên Hiệp", "Xã Quang Hưng", "Xã Thanh Hòa", "Xã Thái Hòa", "Xã Thái Sơn", "Xã Thái Thịnh", "Xã Thái Dương", "Xã Thái Hưng"];
        for (var m = 0; m < kinhMonWards.length; m++) {
            var option = document.createElement("option");
            option.text = kinhMonWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nam Sách") {
        var namSachWards = ["Thị trấn Nam Sách", "Xã An Bình", "Xã An Lâm", "Xã An Sơn", "Xã Cộng Hòa", "Xã Hợp Tiến", "Xã Hồng Phong", "Xã Minh Tân", "Xã Nam Chính", "Xã Nam Hưng", "Xã Nam Hồng", "Xã Nam Hồng", "Xã Nam Sơn", "Xã Nam Thành", "Xã Nam Toàn", "Xã Thái Tân"];
        for (var n = 0; n < namSachWards.length; n++) {
            var option = document.createElement("option");
            option.text = namSachWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ninh Giang") {
        var ninhGiangWards = ["Thị trấn Ninh Giang", "Xã An Đức", "Xã An Thịnh", "Xã Công Bằng", "Xã Đông Xuyên", "Xã Hoàng Hanh", "Xã Hồng Dụ", "Xã Hồng Đức", "Xã Hồng Phong", "Xã Hồng Thái", "Xã Hưng Long", "Xã Kiến Quốc", "Xã Nghĩa An", "Xã Ninh Hải", "Xã Tân Hương", "Xã Tân Phong", "Xã Thái Học"];
        for (var o = 0; o < ninhGiangWards.length; o++) {
            var option = document.createElement("option");
            option.text = ninhGiangWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Hà") {
        var thanhHaWards = ["Thị trấn Thanh Hà", "Xã An Lương", "Xã Cẩm Chế", "Xã Đại Cường", "Xã Đoàn Kết", "Xã Hồng Lạc", "Xã Hợp Hưng", "Xã Hợp Thành", "Xã Minh Đức", "Xã Nam Chính", "Xã Quang Phục", "Xã Quyết Thắng", "Xã Tân Minh", "Xã Thanh An", "Xã Thanh Bình", "Xã Thanh Cường", "Xã Thanh Hải", "Xã Thanh Hồng", "Xã Thanh Hợp", "Xã Thanh Hương", "Xã Thanh Lâm", "Xã Thanh Lương", "Xã Thanh Phong", "Xã Thanh Quang", "Xã Thanh Sơn", "Xã Thanh Thủy", "Xã Thanh Xá", "Xã Thanh Xuân", "Xã Thanh Đồng", "Xã Vĩnh Lập"];
        for (var p = 0; p < thanhHaWards.length; p++) {
            var option = document.createElement("option");
            option.text = thanhHaWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Miện") {
        var thanhMienWards = ["Thị trấn Thanh Miện", "Xã An Thanh", "Xã Bắc Sơn", "Xã Bình Minh", "Xã Cao Thắng", "Xã Đại Đồng", "Xã Đoàn Đào", "Xã Đoàn Tùng", "Xã Đông Lợi", "Xã Hồng Quang", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Minh Tân", "Xã Minh Tâm", "Xã Ngũ Hồ", "Xã Quang Minh", "Xã Tân Trào", "Xã Thanh Giang", "Xã Thanh Tùng", "Xã Thanh Xá", "Xã Trung Thành", "Xã Văn Tới"];
        for (var q = 0; q < thanhMienWards.length; q++) {
            var option = document.createElement("option");
            option.text = thanhMienWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Chí Linh") {
        var chiLinhCityWards = ["Phường An Lạc", "Phường Bến Tắm", "Phường Bến Ái", "Phường Cao Xanh", "Phường Chi Lăng", "Phường Đồng Mỹ", "Phường Hoàng Tân", "Phường Hòa Bình", "Phường Hòa Tiến", "Phường Hồng Phong", "Phường Lam Sơn", "Phường Phả Lại", "Phường Sao Đỏ", "Phường Thái Học", "Phường Thái Long", "Phường Thái Thịnh", "Phường Văn An", "Phường Văn Đức", "Phường Văn Lang", "Phường Văn Thượng", "Phường Vĩnh Trường", "Xã An Sinh", "Xã Bắc An", "Xã Bắc Hưng", "Xã Bắc Lãm", "Xã Bắc Xa", "Xã Chí Minh", "Xã Chiến Thắng", "Xã Chi Lăng", "Xã Cộng Hoà", "Xã Công Bình", "Xã Cộng Hòa", "Xã Cộng Lạc", "Xã Cộng Tâm", "Xã Cộng Việt", "Xã Đồng Lạc", "Xã Đông Cường", "Xã Đông Đức", "Xã Đông Kênh", "Xã Đông Kinh", "Xã Đông Minh", "Xã Đồng Quang", "Xã Đồng Xuyên", "Xã Đồng Việt", "Xã Hoàng Tân", "Xã Hồng Phong", "Xã Hồng Thái", "Xã Hồng Thịnh", "Xã Hùng An", "Xã Hữu Hòa", "Xã Hữu Thượng", "Xã Hữu Việt", "Xã Lê Lợi", "Xã Liên Hồng", "Xã Minh Tân", "Xã Minh Tiến", "Xã Quang Thành", "Xã Quang Thịnh", "Xã Quốc Tuấn", "Xã Sao Đỏ", "Xã Tân An", "Xã Tân Bình", "Xã Tân Dân", "Xã Tân Định", "Xã Tân Hưng", "Xã Tân Lập", "Xã Tân Liên", "Xã Tân Thành", "Xã Tân Việt", "Xã Thái Cường", "Xã Thái Hòa", "Xã Thái Long", "Xã Thái Nguyên", "Xã Thái Thịnh", "Xã Thắng Lợi", "Xã Tiên Cường", "Xã Tiên Đức", "Xã Tiên Thắng", "Xã Tiên Thanh", "Xã Tiên Thịnh", "Xã Tiên Thuận", "Xã Tràng An", "Xã Trung Dân", "Xã Trung Đông", "Xã Trung Hòa", "Xã Trung Hưng", "Xã Trung Lập", "Xã Trung Lương", "Xã Trung Nguyên", "Xã Trung Thành", "Xã Trung Thành Đông", "Xã Trung Thành Tây", "Xã Trung Thịnh", "Xã Trung Tiến", "Xã Trường An", "Xã Trường Chính", "Xã Trường Hòa", "Xã Trường Học", "Xã Trường Lâm", "Xã Trường Lập", "Xã Trường Sơn", "Xã Trường Thành", "Xã Trường Thọ", "Xã Trường Thống", "Xã Trường Thọ", "Xã Trường Tiến", "Xã Trường Trung", "Xã Trường Xuân", "Xã Việt Hồng", "Xã Vũ An"];
        for (var r = 0; r < chiLinhCityWards.length; r++) {
            var option = document.createElement("option");
            option.text = chiLinhCityWards[r];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hải Dương") {
        var haiDuongCityWards = ["Phường Ái Quốc", "Phường An Châu", "Phường Bình Hàn", "Phường Cẩm Thượng", "Phường Chính Kinh", "Phường Đại Nài", "Phường Đồng Quang", "Phường Gia Xuyên", "Phường Hải Tân", "Phường Lê Thanh Nghị", "Phường Liên Hồng", "Phường Nam Sơn", "Phường Ngọc Châu", "Phường Nguyễn Trãi", "Phường Phạm Ngũ Lão", "Phường Phú Hòa", "Phường Phú Khánh", "Phường Tân Bình", "Phường Tân Hưng", "Phường Tân Lập", "Phường Thạch Khôi", "Phường Thanh Bình", "Phường Thanh Sơn", "Phường Thượng Đạt", "Phường Trần Hưng Đạo", "Phường Trần Phú", "Phường Trần Quang Khải", "Phường Trần Hưng Đạo", "Phường Trường Thi", "Phường Tứ Minh", "Phường Việt Hòa", "Phường Việt Hoà", "Xã Cao Xanh", "Xã Cẩm Điền", "Xã Đông Kinh", "Xã Liên Hồng", "Xã Nam Hồng", "Xã Ngọc Châu", "Xã Nguyễn Trãi", "Xã Phạm Ngũ Lão", "Xã Tân Bình", "Xã Thạch Khôi", "Xã Thanh Bình", "Xã Thượng Đạt", "Xã Tứ Minh", "Xã Việt Hòa", "Xã Việt Hoà"];
        for (var s = 0; s < haiDuongCityWards.length; s++) {
            var option = document.createElement("option");
            option.text = haiDuongCityWards[s];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Kinh Môn") {
        var kinhMonTownWards = ["Phường An Phụ", "Phường An Sinh", "Phường Công Đa", "Phường Đồng Tiến", "Phường Hiến Thành", "Phường Quang Thành", "Phường Tân Dân", "Phường Tân Việt", "Phường Thành Tâm", "Phường Thái Thịnh", "Xã An Lạc", "Xã Đoàn Tùng", "Xã Lai Hòa", "Xã Lập Lễ", "Xã Phước Tân", "Xã Tân Lợi", "Xã Thái Dương", "Xã Thăng Long"];
        for (var t = 0; t < kinhMonTownWards.length; t++) {
            var option = document.createElement("option");
            option.text = kinhMonTownWards[t];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện An Dương") {
        var anDuongWards = ["Thị trấn An Dương", "Xã An Đồng", "Xã An Hòa", "Xã An Hồng", "Xã An Hưng", "Xã An Lão", "Xã An Lư", "Xã An Ninh", "Xã An Phú", "Xã An Phụ", "Xã An Thái", "Xã An Thọ", "Xã An Tiến", "Xã An Trung", "Xã An Vũ", "Xã Bắc Sơn", "Xã Đại Bản", "Xã Đặng Cương", "Xã Đồng Thái", "Xã Hồng Phong", "Xã Hồng Thái", "Xã Lê Lợi", "Xã Lê Nghiệm", "Xã Nam Sơn", "Xã Quốc Tuấn", "Xã Tân Tiến", "Xã Tây Sơn", "Xã Thái Sơn", "Xã Thanh Sơn", "Xã Thuỵ Hương", "Xã Tiên Tiến", "Xã Trường Sơn", "Xã Trường Thành", "Xã An Minh", "Xã An Sơn"];
        for (var u = 0; u < anDuongWards.length; u++) {
            var option = document.createElement("option");
            option.text = anDuongWards[u];
            xa.add(option);
        }
    } else if (quan.value === "Huyện An Lão") {
        var anLaoWards = ["Thị trấn An Lão", "Xã An Thái An", "Xã An Thắng", "Xã An Thọ", "Xã An Tiến", "Xã An Tràng", "Xã An Vinh", "Xã An Vũ", "Xã Bát Trang", "Xã Chiến Thắng", "Xã Mỹ Đức", "Xã Quang Hưng", "Xã Quang Trung", "Xã Quốc Tuấn", "Xã Tân Dân", "Xã Tân Viên", "Xã Thái Sơn", "Xã Thái Toàn", "Xã Trường Sơn"];
        for (var v = 0; v < anLaoWards.length; v++) {
            var option = document.createElement("option");
            option.text = anLaoWards[v];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bạch Long Vĩ") {
        var bachLongViWards = ["Thị trấn Bạch Long Vĩ", "Xã Điền Xá", "Xã Đồng Đò", "Xã Đồng Hải", "Xã Đồng Sơn", "Xã Kiền Bái", "Xã Kim Sơn", "Xã Nam Sơn", "Xã Phục Lễ", "Xã Trung Đông", "Xã Trung tây"];
        for (var w = 0; w < bachLongViWards.length; w++) {
            var option = document.createElement("option");
            option.text = bachLongViWards[w];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cát Hải") {
        var catHaiWards = ["Thị trấn Cát Hải", "Xã Cát Bà", "Xã Đồng Bài", "Xã Gia Luận", "Xã Hiền Hào", "Xã Hoàng Châu", "Xã Nghĩa Lộ", "Xã Phù Long", "Xã Trân Châu", "Xã Văn Phong", "Xã Việt Hải", "Xã Xuân Đám", "Xã Xưởng Rèn", "Xã Đường Hoa"];
        for (var x = 0; x < catHaiWards.length; x++) {
            var option = document.createElement("option");
            option.text = catHaiWards[x];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kiến Thụy") {
        var kienThuyWards = ["Thị trấn Cộng Hiền", "Thị trấn Đông Hải", "Xã An Lư", "Xã Bắc Hải", "Xã Đại Thành", "Xã Đoàn Xá", "Xã Đông Sơn", "Xã Đức Chính", "Xã Hải Lăng", "Xã Lại Xuân", "Xã Lâm Động", "Xã Minh Tân", "Xã Nam Hải", "Xã Nguyên Xá", "Xã Phả Lại", "Xã Phục Lễ", "Xã Quảng Thành", "Xã Thuận Thiên", "Xã Thành An", "Xã Tiến Thủy", "Xã Vạn Hương", "Xã Vũ Lăng"];
        for (var y = 0; y < kienThuyWards.length; y++) {
            var option = document.createElement("option");
            option.text = kienThuyWards[y];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thủy Nguyên") {
        var thuyNguyenWards = ["Thị trấn Núi Đèo", "Xã An Lư", "Xã An Sơn", "Xã Cao Nhân", "Xã Chính Mỹ", "Xã Đông Sơn", "Xã Đồng Sơn", "Xã Hoà Bình", "Xã Hợp Thành", "Xã Hưng Đạo", "Xã Kênh Giang", "Xã Kiến Quốc", "Xã Lập Lễ", "Xã Lê Lợi", "Xã Minh Thành", "Xã Nam Sơn", "Xã Phú Thứ", "Xã Quảng Thanh", "Xã Tân Dương", "Xã Thanh Sơn", "Xã Thủy Đường", "Xã Thủy Sơn", "Xã Trung Hà", "Xã Việt Dân", "Xã Vĩnh Hải", "Xã Vĩnh Phong", "Xã Vĩnh Tiến", "Xã Võ Thịnh"];
        for (var z = 0; z < thuyNguyenWards.length; z++) {
            var option = document.createElement("option");
            option.text = thuyNguyenWards[z];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiên Lãng") {
        var tienLangWards = ["Thị trấn Tiên Lãng", "Xã Bắc Hưng", "Xã Đại Thắng", "Xã Đoàn Lập", "Xã Đông Hưng", "Xã Hùng Thắng", "Xã Khởi Nghĩa", "Xã Kiến Thiết", "Xã Nam Hưng", "Xã Quang Phục", "Xã Quyết Tiến", "Xã Tây Hưng", "Xã Tiên Cường", "Xã Tiên Minh", "Xã Tiên Thắng", "Xã Tiên Thanh", "Xã Tiên Tiến", "Xã Toàn Thắng", "Xã Tự Cường", "Xã Việt Tiến", "Xã Vĩnh Tiến"];
        for (var aa = 0; aa < tienLangWards.length; aa++) {
            var option = document.createElement("option");
            option.text = tienLangWards[aa];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vĩnh Bảo") {
        var vinhBaoWards = ["Thị trấn Vĩnh Bảo", "Xã An Hòa", "Xã Cao Minh", "Xã Cổ Am", "Xã Cộng Hiền", "Xã Đồng Minh", "Xã Dũng Tiến", "Xã Gia Minh", "Xã Hiền Thành", "Xã Hòa Bình", "Xã Hồng Phong", "Xã Hưng Nhân", "Xã Lý Học", "Xã Lý Sơn", "Xã Minh Hòa", "Xã Quang Phú", "Xã Tam Cường", "Xã Tân Minh", "Xã Thắng Thuỷ", "Xã Thanh Lương", "Xã Tiền Phong", "Xã Trấn Dương", "Xã Trung Lập", "Xã Việt Tiến", "Xã Vĩnh An", "Xã Vĩnh Long", "Xã Vĩnh Phong", "Xã Vĩnh Tiến", "Xã Vĩnh Tiến"];
        for (var bb = 0; bb < vinhBaoWards.length; bb++) {
            var option = document.createElement("option");
            option.text = vinhBaoWards[bb];
            xa.add(option);
        }
    } else if (quan.value === "Quận Đồ Sơn") {
        var doSonWards = ["Phường Đằng Hải", "Phường Đằng Lâm", "Phường Đằng Lương", "Phường Đằng Sơn", "Phường Đằng Thanh", "Phường Đằng Trung", "Phường Đằng Xuân", "Phường Ngọc Xuyên", "Phường Vạn Hương"];
        for (var cc = 0; cc < doSonWards.length; cc++) {
            var option = document.createElement("option");
            option.text = doSonWards[cc];
            xa.add(option);
        }
    } else if (quan.value === "Quận Dương Kinh") {
        var duongKinhWards = ["Phường Anh Dũng", "Phường Đa Phúc", "Phường Hải Thành", "Phường Hoà Nghĩa", "Phường Hưng Đạo", "Phường Tân Thành", "Phường Thanh Bình", "Phường Tràng Cát"];
        for (var dd = 0; dd < duongKinhWards.length; dd++) {
            var option = document.createElement("option");
            option.text = duongKinhWards[dd];
            xa.add(option);
        }
    } else if (quan.value === "Quận Hải An") {
        var haiAnWards = ["Phường Cát Bi", "Phường Đằng Hải", "Phường Nam Hải", "Phường Tràng Minh", "Phường Tràng Quốc", "Phường Tràng Tiền"];
        for (var ee = 0; ee < haiAnWards.length; ee++) {
            var option = document.createElement("option");
            option.text = haiAnWards[ee];
            xa.add(option);
        }
    } else if (quan.value === "Quận Hồng Bàng") {
        var hongBangWards = ["Phường Hạ Lý", "Phường Hạ Pê", "Phường Hoàng Văn Thụ", "Phường Minh Khai", "Phường Nam Từ Liêm", "Phường Nguyễn Văn Cừ", "Phường Phạm Hồng Thái", "Phường Phan Bội Châu", "Phường Quán Toan", "Phường Sở Dầu", "Phường Thượng Lý", "Phường Trại Chuối", "Phường Tuần Hưng", "Phường Việt Hưng", "Phường Vĩnh Niệm", "Phường Vị Xuyên"];
        for (var ff = 0; ff < hongBangWards.length; ff++) {
            var option = document.createElement("option");
            option.text = hongBangWards[ff];
            xa.add(option);
        }
    } else if (quan.value === "Quận Kiến An") {
        var kienAnWards = ["Phường An Đồng", "Phường Đông Hải 1", "Phường Đông Hải 2", "Phường Hải An", "Phường Hải Bắc", "Phường Nam Hải", "Phường Trại Cau", "Phường Trần Thành Ngọ", "Phường Trần Thành Ngọ", "Phường Trần Thành Ngọ"];
        for (var gg = 0; gg < kienAnWards.length; gg++) {
            var option = document.createElement("option");
            option.text = kienAnWards[gg];
            xa.add(option);
        }
    } else if (quan.value === "Quận Lê Chân") {
        var leChanWards = ["Phường An Biên", "Phường Cát Dài", "Phường Đằng Giang", "Phường Đông Hải 1", "Phường Đông Hải 2", "Phường Minh Đức", "Phường Niệm Nghĩa", "Phường Trại Chuối", "Phường Trần Nguyên Hãn"];
        for (var hh = 0; hh < leChanWards.length; hh++) {
            var option = document.createElement("option");
            option.text = leChanWards[hh];
            xa.add(option);
        }
    } else if (quan.value === "Quận Ngô Quyền") {
        var ngoQuyenWards = ["Phường Cầu Đất", "Phường Đằng Giang", "Phường Đông Khê", "Phường Gia Viên", "Phường Lạc Viên", "Phường Lạch Tray", "Phường Lê Lợi", "Phường Máy Chai", "Phường Mạo Khê", "Phường Vạn Mỹ"];
        for (var ii = 0; ii < ngoQuyenWards.length; ii++) {
            var option = document.createElement("option");
            option.text = ngoQuyenWards[ii];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cam Lâm") {
        var camLamWards = ["Thị trấn Cam Lâm", "Xã Cam An Bắc", "Xã Cam An Nam", "Xã Cam Đức", "Xã Cam Hải Đông", "Xã Cam Hải Tây", "Xã Cam Hiệp Bắc", "Xã Cam Hiệp Nam", "Xã Cam Hòa", "Xã Cam Phước Đông", "Xã Cam Thành Bắc", "Xã Cam Thành Nam", "Xã Sơn Tân"];
        for (var a = 0; a < camLamWards.length; a++) {
            var option = document.createElement("option");
            option.text = camLamWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Diên Khánh") {
        var dienKhanhWards = ["Thị trấn Diên Khánh", "Xã Diên An", "Xã Diên Điền", "Xã Diên Đồng", "Xã Diên Hòa", "Xã Diên Lạc", "Xã Diên Lâm", "Xã Diên Lộc", "Xã Diên Phú", "Xã Diên Phước", "Xã Diên Sơn", "Xã Diên Tân", "Xã Diên Thạnh", "Xã Diên Thọ", "Xã Diên Toàn", "Xã Diên Xuân", "Xã Suối Hiệp"];
        for (var b = 0; b < dienKhanhWards.length; b++) {
            var option = document.createElement("option");
            option.text = dienKhanhWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Khánh Sơn") {
        var khanhSonWards = ["Thị trấn Tô Hạp", "Xã Ba Cụm Bắc", "Xã Ba Cụm Nam", "Xã Sơn Bình", "Xã Sơn Hiệp", "Xã Sơn Lâm", "Xã Sơn Trung", "Xã Thành Sơn", "Xã Tô Hạp"];
        for (var c = 0; c < khanhSonWards.length; c++) {
            var option = document.createElement("option");
            option.text = khanhSonWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Khánh Vĩnh") {
        var khanhVinhWards = ["Thị trấn Vĩnh Thái", "Xã Cầu Bà", "Xã Giang Ly", "Xã Khánh Bình", "Xã Khánh Đông", "Xã Khánh Hiệp", "Xã Khánh Nam", "Xã Khánh Phú", "Xã Khánh Thành", "Xã Khánh Thượng", "Xã Khánh Trung", "Xã Liên Sang", "Xã Sơn Thái", "Xã Vĩnh Hải", "Xã Vĩnh Ngọc", "Xã Vĩnh Phước", "Xã Vĩnh Thạnh", "Xã Vĩnh Trung"];
        for (var d = 0; d < khanhVinhWards.length; d++) {
            var option = document.createElement("option");
            option.text = khanhVinhWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trường Sa") {
        var truongSaWards = ["Thị trấn Trường Sa"];
        for (var e = 0; e < truongSaWards.length; e++) {
            var option = document.createElement("option");
            option.text = truongSaWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Cam Ranh") {
        var camRanhWards = ["Phường Ba Ngòi", "Phường Cam Hải Đông", "Phường Cam Hải Tây", "Phường Cam Lâm", "Phường Cam Linh", "Phường Cam Nghĩa", "Phường Cam Phúc Bắc", "Phường Cam Phúc Nam", "Phường Cam Phú"];
        for (var f = 0; f < camRanhWards.length; f++) {
            var option = document.createElement("option");
            option.text = camRanhWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Nha Trang") {
        var nhaTrangWards = ["Phường Lộc Thọ", "Phường Ngọc Hiệp", "Phường Phước Đồng", "Phường Phước Hải", "Phường Phước Hòa", "Phường Phước Long", "Phường Phước Tân", "Phường Phước Tiến", "Phường Phương Sài", "Phường Phương Sơn", "Phường Tân Lập", "Phường Vạn Thắng"];
        for (var g = 0; g < nhaTrangWards.length; g++) {
            var option = document.createElement("option");
            option.text = nhaTrangWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Ninh Hòa") {
        var ninhHoaWards = ["Phường Ninh Đông", "Phường Ninh Hiệp", "Phường Ninh Phú", "Phường Ninh Quang", "Phường Ninh Sim", "Xã Ninh An", "Xã Ninh Bình", "Xã Ninh Đông", "Xã Ninh Giang", "Xã Ninh Hải", "Xã Ninh Hà", "Xã Ninh Lộc", "Xã Ninh Phụng", "Xã Ninh Quí", "Xã Ninh Thủy"];
        for (var h = 0; h < ninhHoaWards.length; h++) {
            var option = document.createElement("option");
            option.text = ninhHoaWards[h];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện An Biên") {
        var anBienWards = ["Thị trấn Thứ Ba", "Thị trấn Tân Tiến", "Xã Hưng Hà", "Xã Nam Thái", "Xã Nam Thái A", "Xã Nam Thái Thượng", "Xã Đông Hưng", "Xã Đông Thái", "Xã Đông Yên"];
        for (var a = 0; a < anBienWards.length; a++) {
            var option = document.createElement("option");
            option.text = anBienWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện An Minh") {
        var anMinhWards = ["Thị trấn Núi Sập", "Thị trấn Thứ Mười Một", "Xã Bình Phú", "Xã Đông Hòa", "Xã Đông Hưng", "Xã Đông Thạnh", "Xã Đông Thành", "Xã Đông Thới", "Xã Đông Tiến", "Xã Tân Thạnh", "Xã Tân Thanh", "Xã Tân Tiến"];
        for (var b = 0; b < anMinhWards.length; b++) {
            var option = document.createElement("option");
            option.text = anMinhWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Tân Hiệp", "Xã Hòa Lợi", "Xã Hòa Minh", "Xã Hòa Thuận", "Xã Minh Lợi", "Xã Phước Long", "Xã Vĩnh Hòa Hiệp", "Xã Vĩnh Hòa Phú"];
        for (var c = 0; c < chauThanhWards.length; c++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Giang Thành") {
        var giangThanhWards = ["Thị trấn Ngọc Hiển", "Xã Hoà Chánh", "Xã Hoà Lợi", "Xã Hòa Hưng", "Xã Hoà Minh", "Xã Hoà Mỹ", "Xã Long Hoà", "Xã Ngọc Chúc", "Xã Phú Lợi", "Xã Rạch Sỏi", "Xã Thạnh Yên"];
        for (var d = 0; d < giangThanhWards.length; d++) {
            var option = document.createElement("option");
            option.text = giangThanhWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Giồng Riềng") {
        var giongRiengWards = ["Thị trấn Giồng Riềng", "Xã Hòa An", "Xã Hòa Hưng", "Xã Hòa Lợi", "Xã Hòa Thuận", "Xã Hòa Thành", "Xã Hòa An", "Xã Ngọc Chúc", "Xã Thạnh Bình", "Xã Thạnh Hòa", "Xã Thạnh Hưng", "Xã Thạnh Lộc"];
        for (var e = 0; e < giongRiengWards.length; e++) {
            var option = document.createElement("option");
            option.text = giongRiengWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gò Quao") {
        var goQuaoWards = ["Thị trấn Gò Quao", "Xã Định An", "Xã Định Hòa", "Xã Định Thành", "Xã Thới Quản", "Xã Thủy Liễu", "Xã Vĩnh Hòa Hưng Bắc", "Xã Vĩnh Hòa Hưng Nam"];
        for (var f = 0; f < goQuaoWards.length; f++) {
            var option = document.createElement("option");
            option.text = goQuaoWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hòn Đất") {
        var honDatWards = ["Thị trấn Sóc Sơn", "Xã Bình Giang", "Xã Bình Sơn", "Xã Mỹ Thái", "Xã Mỹ Thuận", "Xã Sơn Bình", "Xã Sơn Kiên", "Xã Sơn Trung", "Xã Thổ Sơn"];
        for (var g = 0; g < honDatWards.length; g++) {
            var option = document.createElement("option");
            option.text = honDatWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kiên Hải") {
        var kienHaiWards = ["Thị trấn Hòn Tre", "Xã Bình Giang", "Xã Bình Sơn", "Xã Bình Triều", "Xã Lình Huỳnh", "Xã Lình Huỳnh", "Xã Sơn Hải", "Xã Sơn Kỳ", "Xã Sơn Lập", "Xã Sơn Điền", "Xã Sơn Trà"];
        for (var h = 0; h < kienHaiWards.length; h++) {
            var option = document.createElement("option");
            option.text = kienHaiWards[h];
            xa.add(option);
        }
    }
    else  if (quan.value === "Huyện Kiên Lương") {
        var kienLuongWards = ["Thị trấn Kiên Lương", "Xã Bình An", "Xã Bình Minh", "Xã Hòa Điền", "Xã Kiên Bình", "Xã Kiên Thành", "Xã Sơn Hải", "Xã Thạnh Hưng", "Xã Tân Thạnh"];
        for (var a = 0; a < kienLuongWards.length; a++) {
            var option = document.createElement("option");
            option.text = kienLuongWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Quốc") {
        var phuQuocWards = ["Thị trấn Dương Đông", "Xã Bãi Thơm", "Xã Cửa Cạn", "Xã Cửa Dương", "Xã Cửa Đại", "Xã Gành Dầu", "Xã Hàm Ninh", "Xã Thổ Châu", "Xã Vị Thanh"];
        for (var b = 0; b < phuQuocWards.length; b++) {
            var option = document.createElement("option");
            option.text = phuQuocWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Hiệp") {
        var tanHiepWards = ["Thị trấn Tân Hiệp", "Xã Tân Hội", "Xã Tân Hoà", "Xã Tân Thành", "Xã Tân Xuân"];
        for (var c = 0; c < tanHiepWards.length; c++) {
            var option = document.createElement("option");
            option.text = tanHiepWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện U Minh Thượng") {
        var uMinhThuongWards = ["Thị trấn Thạnh Yên", "Xã An Minh Bắc", "Xã An Minh Đông", "Xã An Minh Trung", "Xã Đông Hòa", "Xã Minh Thuận", "Xã Thạnh Tân", "Xã Vĩnh Hòa"];
        for (var d = 0; d < uMinhThuongWards.length; d++) {
            var option = document.createElement("option");
            option.text = uMinhThuongWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vĩnh Thuận") {
        var vinhThuanWards = ["Thị trấn Vĩnh Thuận", "Xã Bình Minh", "Xã Lương Hoà A", "Xã Lương Hoà", "Xã Lương Phong", "Xã Thuận Hoà", "Xã Vĩnh Bình Bắc", "Xã Vĩnh Bình Nam", "Xã Vĩnh Phong", "Xã Vĩnh Thuận"];
        for (var e = 0; e < vinhThuanWards.length; e++) {
            var option = document.createElement("option");
            option.text = vinhThuanWards[e];
            xa.add(option);
        }
    }
    else if (quan.value === "Thành phố Rạch Giá") {
        var rachGiaWards = ["Phường An Hòa", "Phường An Bình", "Phường Rạch Sỏi", "Phường Vĩnh Thanh Vân", "Phường Vĩnh Thanh", "Phường Vĩnh Lạc", "Phường Vĩnh Hiệp", "Phường Vĩnh Lợi", "Phường Rạch Giá", "Phường Vĩnh Bảo", "Phường Hòn Sơn", "Phường Vĩnh Thông"];
        for (var a = 0; a < rachGiaWards.length; a++) {
            var option = document.createElement("option");
            option.text = rachGiaWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Hà Tiên") {
        var haTienWards = ["Phường Pháo Đài", "Phường Thuận Yên", "Phường Tô Châu", "Phường Đông Hồ", "Phường Mỹ Đức", "Phường Mỹ Hòa", "Phường Mỹ Xuyên"];
        for (var b = 0; b < haTienWards.length; b++) {
            var option = document.createElement("option");
            option.text = haTienWards[b];
            xa.add(option);
        }
    }
    else  if (quan.value === "Huyện Đắk Glei") {
        var dakGleiWards = ["Thị trấn Đắk Glei", "Xã Đắk Blô", "Xã Đắk Man", "Xã Đắk Nhoong", "Xã Đắk Pne", "Xã Đắk Plô", "Xã Đắk Pring", "Xã Đắk Puồng", "Xã Đắk Sôr", "Xã Đức An", "Xã Đức Cơ", "Xã Đức Hòa", "Xã Đức Hòa Đông", "Xã Đức Hòa Hạ", "Xã Đức Hòa Thượng", "Xã Đức Liễu", "Xã Đức Lập", "Xã Đức Mạnh", "Xã Đức Minh", "Xã Đức Phong", "Xã Đức Thắng", "Xã Đức Vận", "Xã Đức Xuân", "Xã Đức Yên"];
        for (var a = 0; a < dakGleiWards.length; a++) {
            var option = document.createElement("option");
            option.text = dakGleiWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk Hà") {
        var dakHaWards = ["Thị trấn Đắk Hà", "Xã Đắk HRing", "Xã Đắk La", "Xã Đắk Long", "Xã Đắk Mar", "Xã Đắk Ngọk", "Xã Đắk Pxi", "Xã Đắk Ui", "Xã Hà Mòn", "Xã Ngọk Tụ", "Xã Ngọk Lây"];
        for (var b = 0; b < dakHaWards.length; b++) {
            var option = document.createElement("option");
            option.text = dakHaWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk Tô") {
        var dakToWards = ["Thị trấn Đắk Tô", "Xã Đắk Rơ Wa", "Xã Đắk Trăm", "Xã Kon Đào", "Xã Ngọk Hoa", "Xã Ngọk Tụ", "Xã Pờ Ê", "Xã Tân Cảnh", "Xã Văn Lem"];
        for (var c = 0; c < dakToWards.length; c++) {
            var option = document.createElement("option");
            option.text = dakToWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kon Plông") {
        var konPlongWards = ["Thị trấn Măng Bút", "Xã Đắk Ang", "Xã Đắk Dục", "Xã Đắk Nho", "Xã Đắk Xú", "Xã Đắk Kan", "Xã Đắk Knong", "Xã Đắk Y", "Xã Ngok Réo", "Xã Pờ Ê", "Xã Sa Loong"];
        for (var d = 0; d < konPlongWards.length; d++) {
            var option = document.createElement("option");
            option.text = konPlongWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kon Rẫy") {
        var konRayWards = ["Thị trấn Đắk Rve", "Xã Đắk Kôi", "Xã Đắk Tơ Ver", "Xã Đắk Pne", "Xã Đắk Ruồng", "Xã Đắk Sin", "Xã Đắk Wer", "Xã Đắk Hlơ", "Xã Đắk Kôi", "Xã Đắk Pne", "Xã Đắk Ruồng", "Xã Đắk Sin", "Xã Đắk Wer"];
        for (var e = 0; e < konRayWards.length; e++) {
            var option = document.createElement("option");
            option.text = konRayWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ngọc Hồi") {
        var ngocHoiWards = ["Thị trấn Đắk Glei", "Xã Đắk Blô", "Xã Đắk Man", "Xã Đắk Nhoong", "Xã Đắk Pne", "Xã Đắk Plô", "Xã Đắk Pring", "Xã Đắk Puồng", "Xã Đắk Sôr", "Xã Đức An", "Xã Đức Cơ", "Xã Đức Hòa", "Xã Đức Hòa Đông", "Xã Đức Hòa Hạ", "Xã Đức Hòa Thượng", "Xã Đức Liễu", "Xã Đức Lập", "Xã Đức Mạnh", "Xã Đức Minh", "Xã Đức Phong", "Xã Đức Thắng", "Xã Đức Vận", "Xã Đức Xuân", "Xã Đức Yên"];
        for (var f = 0; f < ngocHoiWards.length; f++) {
            var option = document.createElement("option");
            option.text = ngocHoiWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sa Thầy") {
        var saThayWards = ["Thị trấn Đắk Pơ", "Xã Đắk Năng", "Xã Đắk Plo", "Xã Đắk Rơ Ông", "Xã Đắk Tờ Re", "Xã Pờ Cò", "Xã Sa Loong", "Xã Sa Nghĩa", "Xã Sa Pả", "Xã Sa Thầy"];
        for (var g = 0; g < saThayWards.length; g++) {
            var option = document.createElement("option");
            option.text = saThayWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Kon Tum") {
        var konTumCityWards = ["Phường Duy Tân", "Phường Duy Trinh", "Phường Ia Kring", "Phường Quang Trung", "Phường Thắng Lợi", "Phường Thống Nhất", "Phường Trường Chinh"];
        for (var h = 0; h < konTumCityWards.length; h++) {
            var option = document.createElement("option");
            option.text = konTumCityWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Kon Tum") {
        var konTumTownWards = ["Phường Đắk Blà", "Phường Đắk Cấm", "Phường Đắk Rơ Wa", "Phường Đoàn Kết", "Phường Ngô Mây", "Phường Quyết Thắng", "Phường Vinh Quang"];
        for (var i = 0; i < konTumTownWards.length; i++) {
            var option = document.createElement("option");
            option.text = konTumTownWards[i];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Mường Tè") {
        var muongTeWards = ["Thị trấn Mường Tè", "Xã Bum Nưa", "Xã Bum Tở", "Xã Ka Lăng", "Xã Kan Hồ", "Xã Mù Cả", "Xã Mường Tè", "Xã Pa Ủ", "Xã Pa Vệ Sử", "Xã Tá Bạ", "Xã Tá Bảng", "Xã Tá Đảnh", "Xã Tà Tổng"];
        for (var a = 0; a < muongTeWards.length; a++) {
            var option = document.createElement("option");
            option.text = muongTeWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phong Thổ") {
        var phongThoWards = ["Thị trấn Phong Thổ", "Xã Bản Lang", "Xã Dào San", "Xã Hoang Thèn", "Xã Huổi Luông", "Xã Khổng Lào", "Xã Lả Nhì Thàng", "Xã Ma Ly Pho", "Xã Mù Sang", "Xã Mường So", "Xã Mường Tòng", "Xã Nậm Xe", "Xã Pa Vây Sử", "Xã Sin Suối Hồ", "Xã Sì Lở Lầu", "Xã Vàng Ma Chải"];
        for (var b = 0; b < phongThoWards.length; b++) {
            var option = document.createElement("option");
            option.text = phongThoWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sìn Hồ") {
        var sinHoWards = ["Thị trấn Sìn Hồ", "Xã Chăn Nưa", "Xã Hồng Thu", "Xã Làng Mô", "Xã Ma Quai", "Xã Mường Mươn", "Xã Mường Típ", "Xã Nậm Cha", "Xã Nậm Cuổi", "Xã Nậm Hăn", "Xã Nậm Mạ", "Xã Nậm Tăm", "Xã Nậm Tỵ", "Xã Pa Khoá", "Xã Pa Tần", "Xã Phăng Sô Lin", "Xã Sà Dề Phìn", "Xã Sin Hồ", "Xã Tả Phìn", "Xã Tả Sìn Thàng", "Xã Thào Chu Phìn", "Xã Thanh Phù", "Xã Trung Thu", "Xã Tủa Sín Chải"];
        for (var c = 0; c < sinHoWards.length; c++) {
            var option = document.createElement("option");
            option.text = sinHoWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tam Đường") {
        var tamDuongWards = ["Thị trấn Tam Đường", "Xã Bản Bo", "Xã Bản Giang", "Xã Bản Hon", "Xã Bình Lư", "Xã Giang Ma", "Xã Hồ Thầu", "Xã Khun Há", "Xã Nà Tăm", "Xã Nùng Nàng", "Xã Sơn Bình", "Xã Sùng Phài", "Xã Tả Lèng", "Xã Thèn Phàng", "Xã Tùng Chải"];
        for (var d = 0; d < tamDuongWards.length; d++) {
            var option = document.createElement("option");
            option.text = tamDuongWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Uyên") {
        var tanUyenWards = ["Thị trấn Tân Uyên", "Xã Hố Mít", "Xã Mường Khoa", "Xã Nậm Cần", "Xã Nậm Sỏ", "Xã Pắc Ta", "Xã Phúc Khoa", "Xã Tà Mít", "Xã Tân Sỏi", "Xã Thân Thuộc", "Xã Trung Đồng", "Xã Trung Thạch"];
        for (var e = 0; e < tanUyenWards.length; e++) {
            var option = document.createElement("option");
            option.text = tanUyenWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Than Uyên") {
        var thanUyenWards = ["Thị trấn Than Uyên", "Xã Hua Nà", "Xã Khoen On", "Xã Mường Cang", "Xã Mường Kim", "Xã Mường Mít", "Xã Mường Than", "Xã Pha Mu", "Xã Phúc Than", "Xã Phúc Thắng", "Xã Tà Hừa", "Xã Tà Mung", "Xã Tà Mít"];
        for (var f = 0; f < thanUyenWards.length; f++) {
            var option = document.createElement("option");
            option.text = thanUyenWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Lai Châu") {
        var laiChauCityWards = ["Phường Tân Phong", "Phường Đoàn Kết", "Phường Quyết Thắng", "Phường Tân Hà", "Phường Nam Quảng", "Xã Đoàn Kết", "Xã Quyết Thắng", "Xã Tân Phong"];
        for (var g = 0; g < laiChauCityWards.length; g++) {
            var option = document.createElement("option");
            option.text = laiChauCityWards[g];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bến Lức") {
        var benLucWards = ["Thị trấn Bến Lức", "Xã An Thạnh", "Xã Bình Đức", "Xã Long Hiệp", "Xã Lương Bình", "Xã Lương Hòa", "Xã Mỹ Yên", "Xã Nhựt Chánh", "Xã Phước Lợi", "Xã Tân Bửu", "Xã Thạnh Đức", "Xã Thạnh Hòa", "Xã Thạnh Lợi", "Xã Thanh Điền", "Xã Vĩnh Công"];
        for (var a = 0; a < benLucWards.length; a++) {
            var option = document.createElement("option");
            option.text = benLucWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cần Đước") {
        var canDuocWards = ["Thị trấn Cần Đước", "Xã Long Cang", "Xã Long Định", "Xã Long Hòa", "Xã Long Hựu Đông", "Xã Long Hựu Tây", "Xã Long Khê", "Xã Long Sơn", "Xã Long Thủy", "Xã Long Trạch", "Xã Long Trị", "Xã Phước Đông", "Xã Phước Tuy", "Xã Phước Vân", "Xã Tân Ân", "Xã Tân Chánh", "Xã Tân Lân", "Xã Tân Trụ", "Xã Thạnh Phú"];
        for (var b = 0; b < canDuocWards.length; b++) {
            var option = document.createElement("option");
            option.text = canDuocWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cần Giuộc") {
        var canGiuocWards = ["Thị trấn Cần Giuộc", "Xã Long An", "Xã Long Hậu", "Xã Long Phụng", "Xã Long Thượng", "Xã Long Trì", "Xã Mỹ Lộc", "Xã Phước Hậu", "Xã Phước Lại", "Xã Phước Lâm", "Xã Phước Lý", "Xã Phước Vĩnh Đông", "Xã Phước Vĩnh Tây", "Xã Tân Kim", "Xã Thuận Thành", "Xã Thuận Thành A"];
        for (var c = 0; c < canGiuocWards.length; c++) {
            var option = document.createElement("option");
            option.text = canGiuocWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Tầm Vu", "Xã An Lục Long", "Xã Bình Quới", "Xã Đức Tân", "Xã Kim Hoa", "Xã Long An", "Xã Long Định", "Xã Long Hòa", "Xã Long Phú", "Xã Phú Ngãi Trị", "Xã Phước Tân Hưng", "Xã Tân An Hội", "Xã Tân Bình", "Xã Tân Lân", "Xã Tân Trung", "Xã Thường Lạc", "Xã Thường Phước 1", "Xã Thường Thạnh", "Xã Thường Tân", "Xã Thạnh Đức", "Xã Thạnh Hòa Sơn", "Xã Thạnh Lộc", "Xã Thạnh Lợi", "Xã Thạnh Phú", "Xã Vĩnh Công 1", "Xã Vĩnh Công 2"];
        for (var d = 0; d < chauThanhWards.length; d++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Hòa") {
        var ducHoaWards = ["Thị trấn Đức Hòa", "Xã An Ninh Đông", "Xã An Ninh Tây", "Xã Đức Hòa Đông", "Xã Đức Hòa Hạ", "Xã Đức Hòa Thượng", "Xã Hiệp Hòa", "Xã Hòa Khánh Đông", "Xã Hòa Khánh Nam", "Xã Hòa Khánh Tây", "Xã Hòa Khánh Tây", "Xã Hòa Khánh Đông", "Xã Hòa Lộc", "Xã Hòa Long", "Xã Hòa Nam", "Xã Hòa Nghĩa", "Xã Hòa Phú", "Xã Mỹ Hạnh Bắc", "Xã Mỹ Hạnh Nam", "Xã Tân Mỹ", "Xã Tân Phú", "Xã Đức Lập Hạ", "Xã Đức Lập Thượng"];
        for (var e = 0; e < ducHoaWards.length; e++) {
            var option = document.createElement("option");
            option.text = ducHoaWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Huệ") {
        var ducHueWards = ["Thị trấn Đức Huệ", "Xã Bình Hòa Bắc", "Xã Bình Hòa Hưng", "Xã Bình Hòa Nam", "Xã Mỹ Bình", "Xã Mỹ Quý Đông", "Xã Mỹ Thạnh Bắc", "Xã Mỹ Thạnh Đông", "Xã Mỹ Thạnh Tây", "Xã Mỹ Tho", "Xã Mỹ Trà", "Xã Nhựt Ninh", "Xã Tân Hòa", "Xã Tân Trụ", "Xã Thanh Hòa", "Xã Thuận Bình", "Xã Thủy Bình", "Xã Thuận Nghĩa Hưng", "Xã Thuận Ngãi"];
        for (var f = 0; f < ducHueWards.length; f++) {
            var option = document.createElement("option");
            option.text = ducHueWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mộc Hóa") {
        var mocHoaWards = ["Thị trấn Mộc Hóa", "Xã Bình Hiệp", "Xã Bình Hòa Nam", "Xã Bình Hòa Trung", "Xã Bình Hòa Đông", "Xã Bình Phong Thạnh", "Xã Bình Thạnh", "Xã Hòa Lộc", "Xã Tân Lập", "Xã Tân Thành"];
        for (var g = 0; g < mocHoaWards.length; g++) {
            var option = document.createElement("option");
            option.text = mocHoaWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Hưng") {
        var tanHungWards = ["Thị trấn Tân Hưng", "Xã Hưng Điền B", "Xã Hưng Điền", "Xã Hưng Hà", "Xã Hưng Thạnh", "Xã Thạnh Hưng", "Xã Thạnh Trị"];
        for (var h = 0; h < tanHungWards.length; h++) {
            var option = document.createElement("option");
            option.text = tanHungWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Thạnh") {
        var tanThanhWards = ["Thị trấn Tân Thạnh", "Xã Bắc Hòa", "Xã Hậu Thạnh Đông", "Xã Hậu Thạnh Tây", "Xã Kiến Bình", "Xã Tân Đông", "Xã Tân Đông", "Xã Tân Trung", "Xã Tân Bình"];
        for (var i = 0; i < tanThanhWards.length; i++) {
            var option = document.createElement("option");
            option.text = tanThanhWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Trụ") {
        var tanTruWards = ["Thị trấn Tân Trụ", "Xã Bình Lãng", "Xã Bình Tịnh", "Xã Bình Trinh Đông", "Xã Lạc Tấn", "Xã Nhựt Ninh", "Xã Quê Mỹ Thạnh", "Xã Tân Phước Tây", "Xã Tân Thành Bình", "Xã Thành Công", "Xã Tuyên Thạnh"];
        for (var j = 0; j < tanTruWards.length; j++) {
            var option = document.createElement("option");
            option.text = tanTruWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạnh Hóa") {
        var thanhHoaWards = ["Thị trấn Thạnh Hóa", "Xã Hoà Lợi", "Xã Lương Bình", "Xã Lương Hòa", "Xã Lương Phong", "Xã Mỹ Lương", "Xã Mỹ Thành Bắc", "Xã Mỹ Thành Nam", "Xã Tân Lợi", "Xã Thạnh Trị", "Xã Thạnh Trị", "Xã Thuận Bình", "Xã Thuận Nghĩa", "Xã Thuận Yên", "Xã Thứ Mười Một", "Xã Việt Khê", "Xã Việt Thuận", "Xã Vĩnh Thạnh"];
        for (var k = 0; k < thanhHoaWards.length; k++) {
            var option = document.createElement("option");
            option.text = thanhHoaWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bắc Hà") {
        var bacHaWards = ["Thị trấn Bắc Hà", "Xã Bản Cái", "Xã Bản Già", "Xã Bản Liền", "Xã Bản Phố", "Xã Bản Vược", "Xã Cốc Ly", "Xã Cốc Ly", "Xã Hồng Ngài", "Xã Lầu Thí Ngài", "Xã Lùng Cải", "Xã Lùng Phình", "Xã Lùng Thàng", "Xã Tả Củ Tỷ", "Xã Tả Van Chư", "Xã Tân Lợi"];
        for (var a = 0; a < bacHaWards.length; a++) {
            var option = document.createElement("option");
            option.text = bacHaWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bảo Thắng") {
        var baoThangWards = ["Thị trấn Phố Ràng", "Xã Bản Cầm", "Xã Bản Phiệt", "Xã Gia Phú", "Xã Nậm Có", "Xã Nậm Sài", "Xã Nậm Tỵ", "Xã Pố Lồ", "Xã Tả Ngảo", "Xã Thái Niên", "Xã Xuân Giao"];
        for (var b = 0; b < baoThangWards.length; b++) {
            var option = document.createElement("option");
            option.text = baoThangWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bảo Yên") {
        var baoYenWards = ["Thị trấn Phố Ràng", "Xã Bảo Hà", "Xã Cốc Dán", "Xã Cốc Pài", "Xã Nà Hối", "Xã Nà Khoa", "Xã Nậm Chảy", "Xã Nậm Mòn", "Xã Nậm Rạng", "Xã Pà Khoang", "Xã Pà Vi", "Xã Thượng Hà"];
        for (var c = 0; c < baoYenWards.length; c++) {
            var option = document.createElement("option");
            option.text = baoYenWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bát Xát") {
        var batXatWards = ["Thị trấn Bát Xát", "Xã A Lù", "Xã A Mú Sung", "Xã Bản Qua", "Xã Bản Vược", "Xã Bản Xèo", "Xã Bản Xùa", "Xã Cốc Mỳ", "Xã Cốc San", "Xã Dền Sáng", "Xã Mường Hum", "Xã Mường Vi", "Xã Mường Đun", "Xã Sàng Ma Sáo"];
        for (var d = 0; d < batXatWards.length; d++) {
            var option = document.createElement("option");
            option.text = batXatWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường Khương") {
        var muongKhuongWards = ["Thị trấn Mường Khương", "Xã Bản Lầu", "Xã Bản Sen", "Xã Cao Sơn", "Xã Dìn Chin", "Xã La Pan Tẩn", "Xã Lùng Khấu Nhin", "Xã Lùng Vai", "Xã Mường Khương", "Xã Tả Gia Khâu", "Xã Tả Ngải Chồ", "Xã Tả Thàng", "Xã Thanh Bình"];
        for (var e = 0; e < muongKhuongWards.length; e++) {
            var option = document.createElement("option");
            option.text = muongKhuongWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sa Pa") {
        var saPaWards = ["Thị trấn Sa Pa", "Xã Bản Hồ", "Xã Lao Chải", "Xã Mường Hoa", "Xã Tả Van", "Xã Tả Phìn", "Xã Tả Giàng Phình", "Xã Hầu Thào", "Xã Sa Pả"];
        for (var f = 0; f < saPaWards.length; f++) {
            var option = document.createElement("option");
            option.text = saPaWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Văn Bàn") {
        var vanBanWards = ["Thị trấn Khánh Yên", "Xã Dần Thàng", "Xã Nậm Chày", "Xã Nậm Hàng", "Xã Nậm Mười", "Xã Nậm Tỵ", "Xã Tân An", "Xã Tân Thượng", "Xã Thẳm Dương", "Xã Võ Lao"];
        for (var g = 0; g < vanBanWards.length; g++) {
            var option = document.createElement("option");
            option.text = vanBanWards[g];
            xa.add(option);
        }
    }
    else  if (quan.value === "Huyện Bảo Lâm") {
        var baoLamWards = ["Thị trấn Lộc Thắng", "Xã B'Lá", "Xã Lộc Tấn", "Xã Lộc Thành", "Xã Lộc Thắng", "Xã Lộc Trìu", "Xã Lộc Tân", "Xã Lộc Nga", "Xã Lộc Phú", "Xã Lộc Quảng", "Xã Lộc Bảo", "Xã Lộc Đức", "Xã Lộc An", "Xã Lộc Châu", "Xã Lộc Ninh", "Xã Lộc Thái"];
        for (var a = 0; a < baoLamWards.length; a++) {
            var option = document.createElement("option");
            option.text = baoLamWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cát Tiên") {
        var catTienWards = ["Thị trấn Cát Tiến", "Xã Đồng Nai Thượng", "Xã Đồng Nai", "Xã Đồng Nai Thượng", "Xã Đồng Nai", "Xã Nam Ninh", "Xã Đạ Đờn", "Xã Đạ M'ri", "Xã Phước Cát 1", "Xã Phước Cát 2", "Xã Tiên Hoàng", "Xã Phước Cát 3", "Xã Phước Cát 4", "Xã Phước Cát 5", "Xã Tiên Long", "Xã Phước Cát 6", "Xã Phước Cát 7", "Xã Phước Cát 8", "Xã Phước Cát 9", "Xã Phước Cát 10"];
        for (var b = 0; b < catTienWards.length; b++) {
            var option = document.createElement("option");
            option.text = catTienWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đạ Huoai") {
        var daHuoaiWards = ["Thị trấn Đạ M'Ri", "Xã Đạ M'Ri", "Xã Ma Đa Guôi", "Xã Đạ Tồn", "Xã Đạ Oai", "Xã Đạ Ploa", "Xã Đạ Dơng", "Xã Đạ Tẻh", "Xã An Nhơn", "Xã Phước Lộc", "Xã Đạ Rsal", "Xã La Đồng", "Xã Đạ K'Nàng"];
        for (var c = 0; c < daHuoaiWards.length; c++) {
            var option = document.createElement("option");
            option.text = daHuoaiWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đạ Tẻh") {
        var daTehWards = ["Thị trấn Đạ Tẻh", "Xã An Lạc", "Xã An Bình", "Xã Đạ Kho", "Xã Ma Đa Guôi", "Xã Đạ Lây", "Xã Đạ Pal", "Xã Đạ Ôn", "Xã Đạ Tơng", "Xã Đoàn Kết", "Xã Phước Lộc", "Xã Phước Tân", "Xã Thanh An"];
        for (var d = 0; d < daTehWards.length; d++) {
            var option = document.createElement("option");
            option.text = daTehWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đam Rông") {
        var damRongWards = ["Thị trấn Đạ K'Nàng", "Xã Đạ Long", "Xã Đạ M'rong", "Xã Đạ Rsal", "Xã Đạ Tông", "Xã Đạ Hồng", "Xã Đạ Lây", "Xã Đạ Pal", "Xã Đạ Kho", "Xã Đạ Bút", "Xã Đạ Oai", "Xã Đạ Ploa", "Xã Đạ Tồn", "Xã Đạ Đờn", "Xã Đạ M'ri", "Xã Đạ Thông"];
        for (var e = 0; e < damRongWards.length; e++) {
            var option = document.createElement("option");
            option.text = damRongWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Di Linh") {
        var diLinhWards = ["Thị trấn Di Linh", "Xã Đinh Lạc", "Xã Đinh Trang Hòa", "Xã Liên Đầm", "Xã Lộc Thắng", "Xã Sơn Điền", "Xã Sơn Thành", "Xã Tam Bố", "Xã Tân Châu", "Xã Tân Lâm", "Xã Tân Nghĩa", "Xã Tân Thành", "Xã Tân Trung", "Xã Đinh An", "Xã Đinh Lạc", "Xã Đinh Lạc Thôn", "Xã Đinh Lạc Thượng", "Xã Đinh Lạc Tron", "Xã Gia Bắc", "Xã Gia Hiệp", "Xã Gung Ré", "Xã Gung Ré Thôn", "Xã Liên Đầm Thôn", "Xã Sơn Bình", "Xã Sơn Thịnh"];
        for (var f = 0; f < diLinhWards.length; f++) {
            var option = document.createElement("option");
            option.text = diLinhWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đơn Dương") {
        var donDuongWards = ["Thị trấn Đạ M'ri", "Xã Lạc Lâm", "Xã Lạc Xuân", "Xã Đạ M'ri", "Xã Đạ Oai", "Xã Đạ Ploa", "Xã Đạ Tồn", "Xã Đạ Đờn", "Xã Đạ M'rong", "Xã Đạ Rsal", "Xã Đạ Thông", "Xã Ma Đa Guôi"];
        for (var g = 0; g < donDuongWards.length; g++) {
            var option = document.createElement("option");
            option.text = donDuongWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Trọng") {
        var ducTrongWards = ["Thị trấn Liên Nghĩa", "Xã Bảo Thuận", "Xã Liên Hiệp", "Xã Liên Nghĩa", "Xã N'Thol Hạ", "Xã N'Thol Lập", "Xã Tân Hội", "Xã Tân Lập", "Xã Tân Thành", "Xã Đà Loan", "Xã Đan Phượng"];
        for (var h = 0; h < ducTrongWards.length; h++) {
            var option = document.createElement("option");
            option.text = ducTrongWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lạc Dương") {
        var lacDuongWards = ["Thị trấn Lạc Dương", "Xã Đạ Chais", "Xã Đạ Nhim", "Xã Đạ Sar", "Xã Đạ Tông", "Xã Lát", "Xã Liên", "Xã Phú Sơn", "Xã Sơn Điền", "Xã Sơn Thủy", "Xã Đạ Chích", "Xã Đạ Long", "Xã Đạ M'ri", "Xã Đạ Pal", "Xã Đạ Trung"];
        for (var i = 0; i < lacDuongWards.length; i++) {
            var option = document.createElement("option");
            option.text = lacDuongWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Bảo Lộc") {
        var baoLocWards = ["Phường 1", "Phường 2", "Phường 3", "Phường B'Lao", "Phường Lộc Phát", "Phường Lộc Sơn", "Phường Lộc Thanh", "Phường Lộc Tiến", "Phường Lộc Trường", "Phường Tân Hòa"];
        for (var j = 0; j < baoLocWards.length; j++) {
            var option = document.createElement("option");
            option.text = baoLocWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Đà Lạt") {
        var daLatWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Phường 12", "Phường Tà Nung", "Phường Xuân Trường"];
        for (var k = 0; k < daLatWards.length; k++) {
            var option = document.createElement("option");
            option.text = daLatWards[k];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bắc Sơn") {
        var bacSonWards = ["Thị trấn Bắc Sơn", "Xã Bắc Lương", "Xã Bắc Quỳnh", "Xã Bắc Cường", "Xã Bắc Sơn", "Xã Bắc Tiến", "Xã Bắc Hải", "Xã Bắc Đồng", "Xã Bắc Sở", "Xã Bắc Lễ", "Xã Bắc Cường", "Xã Bắc Đại", "Xã Bắc Thắng"];
        for (var a = 0; a < bacSonWards.length; a++) {
            var option = document.createElement("option");
            option.text = bacSonWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bình Gia") {
        var binhGiaWards = ["Thị trấn Bình Gia", "Xã Bình La", "Xã Hoa Thám", "Xã Hoa Lư", "Xã Thái Học", "Xã Hồng Phong", "Xã Hồng Thái", "Xã Minh Khai", "Xã Quang Minh", "Xã Vĩnh Yên", "Xã Hòa Bình", "Xã Đồng Phúc", "Xã Đồng Mỹ", "Xã Đồng Tiến", "Xã Đồng Tâm", "Xã Đồng Vương", "Xã Hồng Thái", "Xã Hòa Bình"];
        for (var b = 0; b < binhGiaWards.length; b++) {
            var option = document.createElement("option");
            option.text = binhGiaWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cao Lộc") {
        var caoLocWards = ["Thị trấn Cao Lộc", "Xã Cao Lâu", "Xã Cao Minh", "Xã Cao Lộc", "Xã Cao Thắng", "Xã Cao Thành", "Xã Cao Tiến", "Xã Cao Tri", "Xã Cao Chương", "Xã Cao Xá", "Xã Hải Yến", "Xã Hòa Cư", "Xã Hồng Phong", "Xã Lộc Yên", "Xã Phú Xá", "Xã Thạch Lạn"];
        for (var c = 0; c < caoLocWards.length; c++) {
            var option = document.createElement("option");
            option.text = caoLocWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chi Lăng") {
        var chiLangWards = ["Thị trấn Đồng Mỏ", "Xã An Lạc", "Xã Bắc Thủy", "Xã Bằng Hữu", "Xã Bằng Mạc", "Xã Bằng Phúc", "Xã Chi Lăng", "Xã Chiến Thắng", "Xã Chi Lăng", "Xã Chí Minh", "Xã Đồng Quan", "Xã Hòa Bình", "Xã Hữu Kiên", "Xã Lâm Sơn", "Xã Liên Sơn", "Xã Quang Lang", "Xã Thành Lợi"];
        for (var d = 0; d < chiLangWards.length; d++) {
            var option = document.createElement("option");
            option.text = chiLangWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đình Lập") {
        var dinhLapWards = ["Thị trấn Yên Khoái", "Xã Bắc Lãng", "Xã Bắc Xa", "Xã Đình Lập", "Xã Đình Hữu", "Xã Kiên Mộc", "Xã Lâm Ca", "Xã Minh Tân", "Xã Ngọc Thanh", "Xã Quán Sơn", "Xã Tân Thành", "Xã Trung Minh", "Xã Tân Quang"];
        for (var e = 0; e < dinhLapWards.length; e++) {
            var option = document.createElement("option");
            option.text = dinhLapWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hữu Lũng") {
        var huuLungWards = ["Thị trấn Hữu Lũng", "Xã Cai Kinh", "Xã Đồng Tân", "Xã Đồng Tiến", "Xã Hòa Bình", "Xã Hòa Lạc", "Xã Hòa Sơn", "Xã Minh Hòa", "Xã Minh Sơn", "Xã Minh Tiến", "Xã Quảng Bình", "Xã Quảng La", "Xã Sơn Hà", "Xã Tân Lập", "Xã Tân Thành", "Xã Yên Bình", "Xã Yên Sơn"];
        for (var f = 0; f < huuLungWards.length; f++) {
            var option = document.createElement("option");
            option.text = huuLungWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lộc Bình") {
        var locBinhWards = ["Thị trấn Lộc Bình", "Xã Bắc Xa", "Xã Bằng Cốc", "Xã Bằng Lang", "Xã Bằng Phúc", "Xã Bình Phú", "Xã Cao Tân", "Xã Chí Hòa", "Xã Chí Minh", "Xã Hòa Lạc", "Xã Lợi Bác", "Xã Nam Cường", "Xã Tân Lập", "Xã Tân Long", "Xã Tân Mỹ", "Xã Tân Thành", "Xã Thành Long", "Xã Thanh Lương", "Xã Thanh Xuân", "Xã Vân Mộng", "Xã Vân Quan", "Xã Vĩnh Phong", "Xã Vĩnh Tiến"];
        for (var g = 0; g < locBinhWards.length; g++) {
            var option = document.createElement("option");
            option.text = locBinhWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tràng Định") {
        var trangDinhWards = ["Thị trấn Bắc An", "Xã Bắc Cường", "Xã Bắc Ngọc", "Xã Bắc Thủy", "Xã Bắc Vân", "Xã Bảo Lâm", "Xã Bình Thủy", "Xã Bình Yên", "Xã Hồng Thái", "Xã Hưng Đạo", "Xã Hùng Sơn", "Xã Minh Lập", "Xã Minh Thanh", "Xã Nam An", "Xã Quốc Toản", "Xã Tân Thanh", "Xã Tổng Cọt"];
        for (var h = 0; h < trangDinhWards.length; h++) {
            var option = document.createElement("option");
            option.text = trangDinhWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Lạng Sơn") {
        var langSonWards = ["Phường Bắc Hà", "Phường Chi Lăng", "Phường Đông Kinh", "Phường Hoàng Đồng", "Phường Hoàng Văn Thụ", "Phường Tam Thanh", "Phường Võ Nguyên Giáp", "Phường Quảng Lạc", "Phường Quảng Cảnh"];
        for (var i = 0; i < langSonWards.length; i++) {
            var option = document.createElement("option");
            option.text = langSonWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Văn Lãng") {
        var vanLangWards = ["Phường An Hòa", "Phường Đồng Tân", "Phường Hòa Bình", "Phường Hòa Lạc", "Phường Hòa Thuận", "Phường Hòa Thắng", "Phường Minh Tân", "Phường Sơn Dương"];
        for (var j = 0; j < vanLangWards.length; j++) {
            var option = document.createElement("option");
            option.text = vanLangWards[j];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Anh Sơn") {
        var anhSonWards = ["Thị trấn Anh Sơn", "Xã Cẩm Sơn", "Xã Đa Lộc", "Xã Đức Sơn", "Xã Hoa Sơn", "Xã Hội Sơn", "Xã Hùng Sơn", "Xã Lạng Sơn", "Xã Lĩnh Sơn", "Xã Long Sơn", "Xã Phúc Sơn", "Xã Tam Sơn", "Xã Tân Sơn", "Xã Thạch Sơn", "Xã Thành Sơn", "Xã Thọ Sơn", "Xã Vĩnh Sơn", "Xã Xuân Sơn"];
        for (var b = 0; b < anhSonWards.length; b++) {
            var option = document.createElement("option");
            option.text = anhSonWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Con Cuông") {
        var conCuongWards = ["Thị trấn Con Cuông", "Xã Bình Chuẩn", "Xã Bồng Khê", "Xã Cam Lâm", "Xã Châu Khê", "Xã Chi Khê", "Xã Lạng Khê", "Xã Mậu Đức", "Xã Môn Sơn", "Xã Thạch Ngàn", "Xã Tân Sơn", "Xã Thịnh Sơn"];
        for (var c = 0; c < conCuongWards.length; c++) {
            var option = document.createElement("option");
            option.text = conCuongWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đô Lương") {
        var doLuongWards = ["Thị trấn Đô Lương", "Xã Bắc Sơn", "Xã Bảo Đại", "Xã Bảo Hưng", "Xã Đại Đồng", "Xã Đại Hợp", "Xã Đặng Lễ", "Xã Đông Cứu", "Xã Đồng Thắng", "Xã Đồng Tiến", "Xã Hồng Bạch", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hùng Tiến", "Xã Minh Lập", "Xã Nam Sơn", "Xã Ngọc Đồng", "Xã Phú Lương", "Xã Song Mai", "Xã Tân Bình", "Xã Tiến Thắng", "Xã Tùng Ảnh", "Xã Việt Đồng"];
        for (var d = 0; d < doLuongWards.length; d++) {
            var option = document.createElement("option");
            option.text = doLuongWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hưng Nguyên") {
        var hungNguyenWards = ["Thị trấn Hưng Nguyên", "Xã Hưng Đạo", "Xã Hưng Lĩnh", "Xã Hưng Lợi", "Xã Hưng Thịnh", "Xã Hưng Tiến", "Xã Hưng Yên", "Xã Lam Sơn", "Xã Nghĩa Đồng", "Xã Nghĩa Lợi", "Xã Nghĩa Thái", "Xã Nghĩa Thành", "Xã Nghĩa Trung", "Xã Nghĩa Yên", "Xã Tân Lĩnh", "Xã Tân Tiến", "Xã Tân Vinh"];
        for (var e = 0; e < hungNguyenWards.length; e++) {
            var option = document.createElement("option");
            option.text = hungNguyenWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kỳ Sơn") {
        var kySonWards = ["Thị trấn Mường Xén", "Xã Căm Muộn", "Xã Chiêu Lưu", "Xã Chiêu Lưu", "Xã Chiêu Yên", "Xã Mường Chiên", "Xã Mường Mít", "Xã Mường Típ", "Xã Mường Ải", "Xã Na Loi", "Xã Nà Ớt", "Xã Nà Pó", "Xã Pá Khoang", "Xã Tà Cạ", "Xã Tây Sơn", "Xã Than Uyên"];
        for (var f = 0; f < kySonWards.length; f++) {
            var option = document.createElement("option");
            option.text = kySonWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nam Đàn") {
        var namDanWards = ["Thị trấn Nam Đàn", "Xã Hồng Long", "Xã Hùng Tiến", "Xã Khánh Sơn", "Xã Nam Anh", "Xã Nam Cát", "Xã Nam Đàn", "Xã Nam Giang", "Xã Nam Hưng", "Xã Nam Lĩnh", "Xã Nam Nghĩa", "Xã Nam Thanh", "Xã Nam Xuân", "Xã Thượng Tân Lạc", "Xã Trung Phong", "Xã Xuân Hòa", "Xã Xuân Lâm", "Xã Xuân Lập", "Xã Xuân Phong", "Xã Xuân Thái", "Xã Xuân Thắng", "Xã Xuân Trường"];
        for (var g = 0; g < namDanWards.length; g++) {
            var option = document.createElement("option");
            option.text = namDanWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nghi Lộc") {
        var nghiLocWards = ["Thị trấn Nghi Lộc", "Xã Khánh Hợp", "Xã Nghi Công Bắc", "Xã Nghi Công Nam", "Xã Nghi Diên", "Xã Nghi Đồng", "Xã Nghi Hoa", "Xã Nghi Hưng", "Xã Nghi Kiều", "Xã Nghi Lâm", "Xã Nghi Long", "Xã Nghi Mỹ", "Xã Nghi Phong", "Xã Nghi Quang", "Xã Nghi Thạch", "Xã Nghi Thái", "Xã Nghi Thiết", "Xã Nghi Thịnh", "Xã Nghi Thường", "Xã Nghi Tiến", "Xã Nghi Trung", "Xã Nghi Trường", "Xã Nghi Văn", "Xã Nghi Vạn", "Xã Nghi Xuân", "Xã Nghi Yên"];
        for (var h = 0; h < nghiLocWards.length; h++) {
            var option = document.createElement("option");
            option.text = nghiLocWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nghĩa Đàn") {
        var nghiaDanWards = ["Thị trấn Nghĩa Đàn", "Xã Nghĩa An", "Xã Nghĩa Bình", "Xã Nghĩa Đức", "Xã Nghĩa Đồng", "Xã Nghĩa Hải", "Xã Nghĩa Hồng", "Xã Nghĩa Hợp", "Xã Nghĩa Hưng", "Xã Nghĩa Lạc", "Xã Nghĩa Lâm", "Xã Nghĩa Lộc", "Xã Nghĩa Lợi", "Xã Nghĩa Long", "Xã Nghĩa Mỹ", "Xã Nghĩa Phú", "Xã Nghĩa Phúc", "Xã Nghĩa Thắng", "Xã Nghĩa Thịnh", "Xã Nghĩa Trung", "Xã Nghĩa Yên"];
        for (var i = 0; i < nghiaDanWards.length; i++) {
            var option = document.createElement("option");
            option.text = nghiaDanWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quế Phong") {
        var quePhongWards = ["Thị trấn Quế Phong", "Xã Hạnh Dịch", "Xã Hồng Thủy", "Xã Hương Nộn", "Xã Kim Sơn", "Xã Lưu Kiền", "Xã Mai Sơn", "Xã Quang Phong", "Xã Thạch Kênh", "Xã Thanh Minh", "Xã Trung Hòa", "Xã Trung Thành", "Xã Xuân Phú"];
        for (var j = 0; j < quePhongWards.length; j++) {
            var option = document.createElement("option");
            option.text = quePhongWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quỳ Châu") {
        var quiChauWards = ["Thị trấn Quỳ Châu", "Xã Châu Bình", "Xã Châu Bính", "Xã Châu Hạnh", "Xã Châu Hoàn", "Xã Châu Hội", "Xã Châu Lộc", "Xã Châu Nga", "Xã Châu Phong", "Xã Châu Thành", "Xã Châu Thắng", "Xã Châu Thuận", "Xã Châu Tiến", "Xã Châu Trinh", "Xã Châu Hồng", "Xã Châu Văn Liêm", "Xã Diên Lãm", "Xã Đồng Hợp", "Xã Tân Lạc", "Xã Tân Phong", "Xã Tiên Phong"];
        for (var k = 0; k < quiChauWards.length; k++) {
            var option = document.createElement("option");
            option.text = quiChauWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quỳ Hợp") {
        var quiHopWards = ["Thị trấn Quỳ Hợp", "Xã Bắc Sơn", "Xã Châu Cường", "Xã Châu Đình", "Xã Châu Hồng", "Xã Châu Lộc", "Xã Châu Lý", "Xã Châu Quang", "Xã Châu Thái", "Xã Châu Thành", "Xã Châu Tiến", "Xã Châu Trường", "Xã Đồng Hợp", "Xã Hạ Sơn", "Xã Liên Hợp", "Xã Nam Sơn", "Xã Nghĩa Xuân", "Xã Tam Hợp", "Xã Thọ Sơn", "Xã Văn Lợi", "Xã Xuân Thái"];
        for (var l = 0; l < quiHopWards.length; l++) {
            var option = document.createElement("option");
            option.text = quiHopWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quỳnh Lưu") {
        var quiLuuWards = ["Thị trấn Quỳnh Lưu", "Xã An Hòa", "Xã An Hồng", "Xã An Hùng", "Xã An Lão", "Xã An Nghiệp", "Xã An Ninh", "Xã An Quý", "Xã An Sinh", "Xã An Thái", "Xã An Tịnh", "Xã An Vĩnh", "Xã Bình Lương", "Xã Lê Hồng", "Xã Tân Lập", "Xã Tân Long", "Xã Tân Phú", "Xã Tân Thịnh", "Xã Thanh Sơn", "Xã Thọ Thắng", "Xã Trung Sơn", "Xã Vĩnh Hồng"];
        for (var m = 0; m < quiLuuWards.length; m++) {
            var option = document.createElement("option");
            option.text = quiLuuWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Kỳ") {
        var tanKyWards = ["Thị trấn Tân Kỳ", "Xã Đồng Lợi", "Xã Giai Xuân", "Xã Hương Sơn", "Xã Kỳ Sơn", "Xã Nghĩa Bình", "Xã Nghĩa Dũng", "Xã Nghĩa Hành", "Xã Nghĩa Hợp", "Xã Nghĩa Phúc", "Xã Phú Sơn", "Xã Quỳnh Thọ", "Xã Tân An", "Xã Tân Hợp", "Xã Tân Hương", "Xã Tân Kỳ", "Xã Tân Long", "Xã Tân Phú", "Xã Tân Xuân", "Xã Tiến Thủy", "Xã Xuân Bắc", "Xã Xuân Châu", "Xã Xuân Đài", "Xã Xuân Đình", "Xã Xuân Hòa", "Xã Xuân Phong", "Xã Xuân Tân", "Xã Xuân Thắng", "Xã Xuân Thành"];
        for (var n = 0; n < tanKyWards.length; n++) {
            var option = document.createElement("option");
            option.text = tanKyWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Chương") {
        var thanhChuongWards = ["Thị trấn Thanh Chương", "Xã Cát Văn", "Xã Đại Đồng", "Xã Đồng Văn", "Xã Gia Lĩnh", "Xã Hạnh Lâm", "Xã Hạnh Phúc", "Xã Hào Phú", "Xã Sơn Lư", "Xã Thanh An", "Xã Thanh Chi", "Xã Thanh Đồng", "Xã Thanh Đức", "Xã Thanh Dương", "Xã Thanh Giang", "Xã Thanh Hà", "Xã Thanh Hòa", "Xã Thanh Hồng", "Xã Thanh Khai", "Xã Thanh Khê", "Xã Thanh Lâm", "Xã Thanh Liên", "Xã Thanh Long", "Xã Thanh Lương", "Xã Thanh Mai", "Xã Thanh Mỹ", "Xã Thanh Ngọc", "Xã Thanh Nguyên", "Xã Thanh Nho", "Xã Thanh Phong", "Xã Thanh Sơn", "Xã Thanh Thịnh", "Xã Thanh Thủy", "Xã Thanh Tiên", "Xã Thanh Tùng", "Xã Thanh Văn", "Xã Thanh Xuân", "Xã Thanh Yên"];
        for (var o = 0; o < thanhChuongWards.length; o++) {
            var option = document.createElement("option");
            option.text = thanhChuongWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tương Dương") {
        var tuongDuongWards = ["Thị trấn Tương Dương", "Xã Đà Sơn", "Xã Mậu Đông", "Xã Ngọc Đồng", "Xã Phong Thịnh", "Xã Tân Dương", "Xã Tân Dân", "Xã Thanh Định", "Xã Thanh Minh", "Xã Thanh Trù", "Xã Thượng Ninh", "Xã Trung Ninh", "Xã Trù Sơn"];
        for (var p = 0; p < tuongDuongWards.length; p++) {
            var option = document.createElement("option");
            option.text = tuongDuongWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Thành") {
        var yenThanhWards = ["Thị trấn Yên Thành", "Xã Bảo Thành", "Xã Bắc Thành", "Xã Công Thành", "Xã Đô Thành", "Xã Đại Thành", "Xã Định Thành", "Xã Hậu Thành", "Xã Hoa Thành", "Xã Hồng Thành", "Xã Hợp Thành", "Xã Hùng Thành", "Xã Khánh Thành", "Xã Kim Thành", "Xã Lăng Thành", "Xã Liên Thành", "Xã Long Thành", "Xã Lý Thành", "Xã Mã Thành", "Xã Minh Thành", "Xã Nam Thành", "Xã Nhân Thành", "Xã Phúc Thành", "Xã Quang Thành", "Xã Sơn Thành", "Xã Tây Thành", "Xã Thịnh Thành", "Xã Thọ Thành", "Xã Tiến Thành", "Xã Trọng Thành", "Xã Văn Thành", "Xã Viên Thành", "Xã Vĩnh Thành", "Xã Xuân Thành"];
        for (var q = 0; q < yenThanhWards.length; q++) {
            var option = document.createElement("option");
            option.text = yenThanhWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Vinh của Nghệ An") {
        var vinhCityWards = ["Phường Bến Thủy", "Phường Cửa Nam", "Phường Đội Cung", "Phường Hà Huy Tập", "Phường Hưng Bình", "Phường Hưng Dũng", "Phường Hưng Phúc", "Phường Lê Lợi", "Phường Lê Mao", "Phường Quán Bàu", "Phường Quang Trung", "Phường Trung Đô", "Phường Trường Thi", "Phường Vinh Tân", "Phường Vĩnh Thành", "Xã Hồng Sơn", "Xã Hưng Chính", "Xã Hưng Đông", "Xã Hưng Hòa", "Xã Hưng Lộc", "Xã Hưng Long", "Xã Hưng Mỹ", "Xã Hưng Phú", "Xã Hưng Thịnh", "Xã Hưng Thông", "Xã Hưng Tiến", "Xã Hưng Yên", "Xã Nghi Ân", "Xã Nghi Đức", "Xã Nghi Hải", "Xã Nghi Hoa", "Xã Nghi Hồng", "Xã Nghi Hợp", "Xã Nghi Lâm", "Xã Nghi Phong", "Xã Nghi Quang", "Xã Nghi Thái", "Xã Nghi Thắng", "Xã Nghi Thịnh", "Xã Nghi Thuận", "Xã Nghi Trung", "Xã Nghi Xuân", "Xã Quang Phong", "Xã Quang Tiến"];
        for (var r = 0; r < vinhCityWards.length; r++) {
            var option = document.createElement("option");
            option.text = vinhCityWards[r];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Giao Thủy") {
        var giaoThuyWards = ["Thị trấn Giao Thủy", "Xã An Hòa", "Xã An Hưng", "Xã An Lâm", "Xã Bình Hòa", "Xã Đại Phong", "Xã Đại An", "Xã Đình Hoà", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Hòa Thịnh", "Xã Hoành Sơn", "Xã Hồng Hòa", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hoàng Đông", "Xã Hồng Thái", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Liên Hoa", "Xã Phương Thịnh", "Xã Quất Lâm", "Xã Tân Phong", "Xã Thanh Hòa", "Xã Tiên Trang", "Xã Tràng An", "Xã Trung Hoà", "Xã Trung Hòa", "Xã Trường Thắng", "Xã Tử Ninh"];
        for (var a = 0; a < giaoThuyWards.length; a++) {
            var option = document.createElement("option");
            option.text = giaoThuyWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gia Viễn") {
        var giaVienWards = ["Thị trấn Gia Viễn", "Xã Gia Hòa", "Xã Gia Hưng", "Xã Gia Lạc", "Xã Gia Lập", "Xã Gia Minh", "Xã Gia Phong", "Xã Gia Phú", "Xã Gia Phương", "Xã Gia Sinh", "Xã Gia Tân", "Xã Gia Thắng", "Xã Gia Thanh", "Xã Gia Thịnh", "Xã Gia Tiến", "Xã Gia Trấn", "Xã Gia Trung", "Xã Gia Vân", "Xã Gia Vượng", "Xã Gia Xuân"];
        for (var b = 0; b < giaVienWards.length; b++) {
            var option = document.createElement("option");
            option.text = giaVienWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoa Lư") {
        var hoaLuWards = ["Thị trấn Thiên Tôn", "Xã Ninh An", "Xã Ninh Giang", "Xã Ninh Hải", "Xã Ninh Hòa", "Xã Ninh Khang", "Xã Ninh Mỹ", "Xã Ninh Thắng", "Xã Ninh Thái", "Xã Ninh Thọ", "Xã Ninh Thủy", "Xã Ninh Tiến", "Xã Ninh Vân", "Xã Ninh Xuân", "Xã Trường Yên"];
        for (var c = 0; c < hoaLuWards.length; c++) {
            var option = document.createElement("option");
            option.text = hoaLuWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kim Sơn") {
        var kimSonWards = ["Thị trấn Kim Sơn", "Xã Cồn Thoi", "Xã Hưng Lợi", "Xã Hương Nộn", "Xã Kim Anh", "Xã Kim Bình", "Xã Kim Châu", "Xã Kim Định", "Xã Kim Đồng", "Xã Kim Hải", "Xã Kim Liên", "Xã Kim Mỹ", "Xã Kim Tân", "Xã Kim Thành", "Xã Kim Trung", "Xã Kim Tuyến", "Xã Kim Tân", "Xã Kim Tân", "Xã Kim Xuyên"];
        for (var d = 0; d < kimSonWards.length; d++) {
            var option = document.createElement("option");
            option.text = kimSonWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nho Quan") {
        var nhoQuanWards = ["Thị trấn Nho Quan", "Xã Cúc Phương", "Xã Đồng Phong", "Xã Đức Long", "Xã Gia Lâm", "Xã Gia Sơn", "Xã Gia Thủy", "Xã Lạc Vân", "Xã Lạng Phong", "Xã Phú Lộc", "Xã Phú Sơn", "Xã Quảng Lạc", "Xã Quảng Thành", "Xã Quỳnh Lâm", "Xã Sơn Lai", "Xã Sơn Thành", "Xã Thạch Bình", "Xã Thanh Lạc", "Xã Thanh Sơn", "Xã Thượng Lâm", "Xã Văn Phong", "Xã Văn Phương", "Xã Yên Quang"];
        for (var e = 0; e < nhoQuanWards.length; e++) {
            var option = document.createElement("option");
            option.text = nhoQuanWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Khánh") {
        var yenKhanhWards = ["Thị trấn Yên Khánh", "Xã Khánh An", "Xã Khánh Công", "Xã Khánh Cư", "Xã Khánh Cường", "Xã Khánh Hải", "Xã Khánh Hòa", "Xã Khánh Hội", "Xã Khánh Hồng", "Xã Khánh Lợi", "Xã Khánh Mậu", "Xã Khánh Nhạc", "Xã Khánh Phú", "Xã Khánh Thành", "Xã Khánh Thiện", "Xã Khánh Thủy", "Xã Khánh Tiên", "Xã Khánh Trung", "Xã Khánh Vân", "Xã Khánh Vĩnh", "Xã Yên Mạc", "Xã Yên Thắng", "Xã Yên Thành"];
        for (var f = 0; f < yenKhanhWards.length; f++) {
            var option = document.createElement("option");
            option.text = yenKhanhWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Ninh Bình") {
        var ninhBinhCityWards = ["Phường Bích Đào", "Phường Đông Thành", "Phường Nam Bình", "Phường Nam Thành", "Phường Ninh Khánh", "Phường Ninh Phong", "Phường Ninh Sơn", "Phường Tân Thành", "Phường Thanh Bình", "Phường Vân Giang", "Phường Vân Long", "Xã Ninh Nhất", "Xã Ninh Phú", "Xã Ninh Sơn", "Xã Ninh Tiến", "Xã Phúc Thành"];
        for (var g = 0; g < ninhBinhCityWards.length; g++) {
            var option = document.createElement("option");
            option.text = ninhBinhCityWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Tam Điệp") {
        var tamDiepTownWards = ["Phường Bắc Sơn", "Phường Nam Sơn", "Phường Ninh Khánh", "Phường Ninh Xá", "Phường Trung Sơn", "Xã Bích Đào", "Xã Đông Sơn", "Xã Hòa Sơn", "Xã Khánh Sơn", "Xã Lam Sơn", "Xã Phú Sơn", "Xã Quang Sơn", "Xã Tây Sơn", "Xã Trung Sơn", "Xã Văn Sơn", "Xã Xuân Sơn"];
        for (var h = 0; h < tamDiepTownWards.length; h++) {
            var option = document.createElement("option");
            option.text = tamDiepTownWards[h];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Giao Thủy") {
        var giaoThuyWards = ["Thị trấn Giao Thủy", "Xã An Hòa", "Xã An Hưng", "Xã An Lâm", "Xã Bình Hòa", "Xã Đại Phong", "Xã Đại An", "Xã Đình Hoà", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Hòa Thịnh", "Xã Hoành Sơn", "Xã Hồng Hòa", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hoàng Đông", "Xã Hồng Thái", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Liên Hoa", "Xã Phương Thịnh", "Xã Quất Lâm", "Xã Tân Phong", "Xã Thanh Hòa", "Xã Tiên Trang", "Xã Tràng An", "Xã Trung Hoà", "Xã Trung Hòa", "Xã Trường Thắng", "Xã Tử Ninh"];
        for (var a = 0; a < giaoThuyWards.length; a++) {
            var option = document.createElement("option");
            option.text = giaoThuyWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bác Ái") {
        var bacAiWards = ["Thị trấn Phước Bình", "Xã Phước Đại", "Xã Phước Hòa", "Xã Phước Hưng", "Xã Phước Khánh", "Xã Phước Lộc", "Xã Phước Ninh", "Xã Phước Tân", "Xã Phước Thành", "Xã Phước Thắng"];
        for (var b = 0; b < bacAiWards.length; b++) {
            var option = document.createElement("option");
            option.text = bacAiWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ninh Hải") {
        var ninhHaiWards = ["Thị trấn Khánh Hải", "Xã Hải An", "Xã Hải Cảng", "Xã Hải Châu", "Xã Hải Hòa", "Xã Hải Lĩnh", "Xã Hải Nhân", "Xã Hải Ninh", "Xã Hải Thanh", "Xã Phương Hải", "Xã Tân Hải"];
        for (var c = 0; c < ninhHaiWards.length; c++) {
            var option = document.createElement("option");
            option.text = ninhHaiWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ninh Phước") {
        var ninhPhuocWards = ["Thị trấn Phước Dân", "Xã An Hải", "Xã Phước Diêm", "Xã Phước Hà", "Xã Phước Hải", "Xã Phước Hậu", "Xã Phước Hiệp", "Xã Phước Hữu", "Xã Phước Huy", "Xã Phước Lộc", "Xã Phước Nam", "Xã Phước Ninh", "Xã Phước Thái", "Xã Phước Thuận", "Xã Phước Vinh", "Xã Phước Xuân"];
        for (var d = 0; d < ninhPhuocWards.length; d++) {
            var option = document.createElement("option");
            option.text = ninhPhuocWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ninh Sơn") {
        var ninhSonWards = ["Thị trấn Phước Dân", "Xã Cà Ná", "Xã Nhị Hà", "Xã Phước Diêm", "Xã Phước Hà", "Xã Phước Hải", "Xã Phước Hậu", "Xã Phước Hữu", "Xã Phước Lộc", "Xã Phước Nam", "Xã Phước Thái"];
        for (var e = 0; e < ninhSonWards.length; e++) {
            var option = document.createElement("option");
            option.text = ninhSonWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Phan Rang-Tháp Chàm") {
        var phanRangWards = ["Phường Bảo An", "Phường Đài Sơn", "Phường Đạo Long", "Phường Đô Vinh", "Phường Kinh Dinh", "Phường Mỹ Bình", "Phường Mỹ Đông", "Phường Mỹ Hải", "Phường Mỹ Hương", "Phường Mỹ Phước", "Phường Mỹ Thạnh", "Phường Mỹ Xuyên", "Phường Phủ Hà", "Phường Phước Mỹ", "Phường Thành Hải", "Phường Thanh Sơn", "Phường Văn Hải"];
        for (var f = 0; f < phanRangWards.length; f++) {
            var option = document.createElement("option");
            option.text = phanRangWards[f];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Giao Thủy") {
        var giaoThuyWards = ["Thị trấn Giao Thủy", "Xã An Hòa", "Xã An Hưng", "Xã An Lâm", "Xã Bình Hòa", "Xã Đại Phong", "Xã Đại An", "Xã Đình Hoà", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Hòa Thịnh", "Xã Hoành Sơn", "Xã Hồng Hòa", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hoàng Đông", "Xã Hồng Thái", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Liên Hoa", "Xã Phương Thịnh", "Xã Quất Lâm", "Xã Tân Phong", "Xã Thanh Hòa", "Xã Tiên Trang", "Xã Tràng An", "Xã Trung Hoà", "Xã Trung Hòa", "Xã Trường Thắng", "Xã Tử Ninh"];
        for (var a = 0; a < giaoThuyWards.length; a++) {
            var option = document.createElement("option");
            option.text = giaoThuyWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cẩm Khê") {
        var camKheWards = ["Thị trấn Cẩm Khê", "Xã Cấp Dẫn", "Xã Đại An", "Xã Đan Hà", "Xã Đình Cao", "Xã Đồng Lương", "Xã Đồng Thịnh", "Xã Hùng Việt", "Xã Hương Lung", "Xã Phú Khê", "Xã Phượng Vĩ", "Xã Quang Hùng", "Xã Sơn Tình", "Xã Tân Sơn", "Xã Tiên Lương", "Xã Văn Bán", "Xã Xuân Đình"];
        for (var b = 0; b < camKheWards.length; b++) {
            var option = document.createElement("option");
            option.text = camKheWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đoan Hùng") {
        var doanHungWards = ["Thị trấn Đoan Hùng", "Xã Bằng Doãn", "Xã Ca Đình", "Xã Chân Mộng", "Xã Hữu Đô", "Xã Lâm Xa", "Xã Minh Lương", "Xã Phú Đô", "Xã Phùng Xá", "Xã Tiêu Sơn", "Xã Tùng Châu", "Xã Vân Đồn", "Xã Vân Du", "Xã Yên Kiện"];
        for (var c = 0; c < doanHungWards.length; c++) {
            var option = document.createElement("option");
            option.text = doanHungWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hạ Hòa") {
        var haHoaWards = ["Thị trấn Thiên Kiều", "Xã An Lạc", "Xã Gia Điền", "Xã Hạ Hòa", "Xã Hậu Bổng", "Xã Lệnh Khanh", "Xã Liên Minh", "Xã Nghĩa Đức", "Xã Phong Phú", "Xã Phú Lâm", "Xã Phú Xuyên", "Xã Quân Khê", "Xã Tam Sơn", "Xã Thạch Kiệt", "Xã Tiến Xuân", "Xã Tứ Dân", "Xã Xuân Phú"];
        for (var d = 0; d < haHoaWards.length; d++) {
            var option = document.createElement("option");
            option.text = haHoaWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lâm Thao") {
        var lamThaoWards = ["Thị trấn Lâm Thao", "Xã Bản Nguyên", "Xã Hợp Hòa", "Xã Hồng Sơn", "Xã Khai Phú", "Xã Liễn Sơn", "Xã Minh Hòa", "Xã Sơn Vi", "Xã Thạch Đồng", "Xã Tiên Kiên", "Xã Tứ Xã", "Xã Vĩnh Lại", "Xã Xuân Huy", "Xã Xuân Lũng", "Xã Xuân Thủy"];
        for (var e = 0; e < lamThaoWards.length; e++) {
            var option = document.createElement("option");
            option.text = lamThaoWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phù Ninh") {
        var phuNinhWards = ["Thị trấn Phong Châu", "Xã Âu Cơ", "Xã Bồng Lai", "Xã Châu Sơn", "Xã Đào Viên", "Xã Đồng Phụ", "Xã Hạ Giáp", "Xã Lục Dân", "Xã Minh Phụ", "Xã Phù Ninh", "Xã Phú Lạc", "Xã Phú Nghiêm", "Xã Phú Sơn", "Xã Phú Thái", "Xã Phúc Thắng", "Xã Tiên Du", "Xã Triệu Đề", "Xã Văn Lung", "Xã Vĩnh Phú", "Xã Xuân Hòa"];
        for (var f = 0; f < phuNinhWards.length; f++) {
            var option = document.createElement("option");
            option.text = phuNinhWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tam Nông") {
        var tamNongWards = ["Thị trấn Phú Nghĩa", "Xã An Hòa", "Xã Đại Thắng", "Xã Đan Thượng", "Xã Hiền Lương", "Xã Hương Nộn", "Xã La Phù", "Xã Lai Đồng", "Xã Minh Đài", "Xã Phú Thượng", "Xã Quảng Nạp", "Xã Tân Lập", "Xã Tự Tân", "Xã Việt Đồng", "Xã Xuân Quang"];
        for (var g = 0; g < tamNongWards.length; g++) {
            var option = document.createElement("option");
            option.text = tamNongWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Sơn") {
        var tanSonWards = ["Thị trấn Tân Sơn", "Xã Bình Yên", "Xã Chương Xá", "Xã Đình Xá", "Xã Đức Xương", "Xã Kiệt Sơn", "Xã Kim Thượng", "Xã Lai Thành", "Xã Mỹ Thuận", "Xã Xuân Đài", "Xã Xuân Sơn"];
        for (var h = 0; h < tanSonWards.length; h++) {
            var option = document.createElement("option");
            option.text = tanSonWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Ba") {
        var thanhBaWards = ["Thị trấn Thanh Ba", "Xã Bình Minh", "Xã Hương Lâm", "Xã Lương Lỗ", "Xã Sơn Cẩm", "Xã Thanh Hà", "Xã Thanh Vân", "Xã Vân Lĩnh", "Xã Võ Lao"];
        for (var i = 0; i < thanhBaWards.length; i++) {
            var option = document.createElement("option");
            option.text = thanhBaWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Sơn") {
        var thanhSonWards = ["Thị trấn Thanh Sơn", "Xã An Lương", "Xã Bồ Sao", "Xã Cự Đồng", "Xã Địch Quả", "Xã Giáo Liêm", "Xã Hương Nộn", "Xã Nhân Đạo", "Xã Quảng Cát", "Xã Quảng Đại", "Xã Thanh Lãng", "Xã Thanh Nông", "Xã Thanh Phong", "Xã Thanh Quân", "Xã Thanh Sơn", "Xã Thanh Thịnh", "Xã Thanh Vận", "Xã Thanh Xá", "Xã Xuân Phong"];
        for (var j = 0; j < thanhSonWards.length; j++) {
            var option = document.createElement("option");
            option.text = thanhSonWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Thuỷ") {
        var thanhThuyWards = ["Thị trấn Thanh Thủy", "Xã Địa Linh", "Xã Đồng Xuân", "Xã Đồng Yên", "Xã Hoàng Xá", "Xã Sơn Thủy", "Xã Thanh Đồng", "Xã Thanh Sơn", "Xã Thanh Thịnh", "Xã Thanh Xá", "Xã Trung Thịnh", "Xã Yến Mao"];
        for (var k = 0; k < thanhThuyWards.length; k++) {
            var option = document.createElement("option");
            option.text = thanhThuyWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Việt Trì") {
        var vietTriCityWards = ["Phường Bạch Hạc", "Phường Cao Ngạn", "Phường Dữu Lâu", "Phường Gia Cẩm", "Phường Hùng Vương", "Phường Minh Nông", "Phường Nông Trang", "Phường Phan Đình Phùng", "Phường Thanh Miếu", "Phường Tiên Cát", "Phường Vân Cơ", "Phường Vân Phú", "Phường Võ Cường", "Phường Vũ Đình", "Xã Thanh Sơn"];
        for (var l = 0; l < vietTriCityWards.length; l++) {
            var option = document.createElement("option");
            option.text = vietTriCityWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Phú Thọ") {
        var phuThoTownWards = ["Phường Âu Cơ", "Phường Bình Thanh", "Phường Hùng Vương", "Phường Lam Sơn", "Phường Nam Viêm", "Phường Âu Lâu", "Xã Bảo Lý", "Xã Thanh Minhs"];
        for (var m = 0; m < phuThoTownWards.length; m++) {
            var option = document.createElement("option");
            option.text = phuThoTownWards[m];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Giao Thủy") {
        var giaoThuyWards = ["Thị trấn Giao Thủy", "Xã An Hòa", "Xã An Hưng", "Xã An Lâm", "Xã Bình Hòa", "Xã Đại Phong", "Xã Đại An", "Xã Đình Hoà", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Hòa Thịnh", "Xã Hoành Sơn", "Xã Hồng Hòa", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hoàng Đông", "Xã Hồng Thái", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Liên Hoa", "Xã Phương Thịnh", "Xã Quất Lâm", "Xã Tân Phong", "Xã Thanh Hòa", "Xã Tiên Trang", "Xã Tràng An", "Xã Trung Hoà", "Xã Trung Hòa", "Xã Trường Thắng", "Xã Tử Ninh"];
        for (var a = 0; a < giaoThuyWards.length; a++) {
            var option = document.createElement("option");
            option.text = giaoThuyWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đông Hòa") {
        var dongHoaWards = ["Thị trấn Hòa Hảo", "Xã Hòa Đồng", "Xã Hòa Mục", "Xã Hòa Phong", "Xã Hòa Thịnh", "Xã Hòa Tân", "Xã Hòa Vinh"];
        for (var b = 0; b < dongHoaWards.length; b++) {
            var option = document.createElement("option");
            option.text = dongHoaWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đồng Xuân") {
        var dongXuanWards = ["Thị trấn Đa Lộc", "Xã Đa Lộc", "Xã Đồng Xuân", "Xã Đồng Tâm", "Xã Đồng Tiến", "Xã Đồng Khởi", "Xã Đồng Nội", "Xã Đồng Phong"];
        for (var c = 0; c < dongXuanWards.length; c++) {
            var option = document.createElement("option");
            option.text = dongXuanWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Hòa") {
        var phuHoaWards = ["Thị trấn Sơn Hòa", "Xã Sơn Lâm", "Xã Sơn Thành", "Xã Sơn Tân", "Xã Sơn Mỹ", "Xã Sơn Định", "Xã Sơn Hòa", "Xã Sơn Phú", "Xã Sơn Đông"];
        for (var d = 0; d < phuHoaWards.length; d++) {
            var option = document.createElement("option");
            option.text = phuHoaWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sơn Hòa") {
        var sonHoaWards = ["Thị trấn Sông Hinh", "Xã Hòa Bình", "Xã Hòa Bình 1", "Xã Hòa Bình 2", "Xã Hòa Chánh", "Xã Hòa Châu", "Xã Hòa Định", "Xã Hòa Đông", "Xã Hòa Hội", "Xã Hòa Khánh", "Xã Hòa Phong", "Xã Hòa Phú", "Xã Hòa Phước", "Xã Hòa Phước 1", "Xã Hòa Sơn", "Xã Hòa Tân", "Xã Hòa Thắng", "Xã Hòa Thành", "Xã Hòa Thịnh", "Xã Hòa Trị", "Xã Hòa Vinh", "Xã Hòa Xuân", "Xã Hòa Xuân Đông", "Xã Hòa Xuân Nam", "Xã Hòa Xuân Tây"];
        for (var e = 0; e < sonHoaWards.length; e++) {
            var option = document.createElement("option");
            option.text = sonHoaWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sông Hinh") {
        var songHinhWards = ["Thị trấn Hòa Hiệp Trung", "Xã Hòa Hiệp Bắc", "Xã Hòa Hiệp Nam", "Xã Hòa Khương", "Xã Hòa Mỹ Đông", "Xã Hòa Mỹ Tây", "Xã Hòa Quang Bắc", "Xã Hòa Quang Nam", "Xã Hòa Quang Đông", "Xã Hòa Quang Tây", "Xã Hòa Sơn"];
        for (var f = 0; f < songHinhWards.length; f++) {
            var option = document.createElement("option");
            option.text = songHinhWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tây Hòa") {
        var tayHoaWards = ["Thị trấn Sơn Dinh", "Xã Sơn Bình", "Xã Sơn Bình 1", "Xã Sơn Bình 2", "Xã Sơn Bình 3", "Xã Sơn Bình 4", "Xã Sơn Dương", "Xã Sơn Lập", "Xã Sơn Lợi", "Xã Sơn Long", "Xã Sơn Phước", "Xã Sơn Xuân", "Xã Sơn Nguyên", "Xã Sơn Phú"];
        for (var g = 0; g < tayHoaWards.length; g++) {
            var option = document.createElement("option");
            option.text = tayHoaWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Đông Hòa") {
        var dongHoaCityWards = ["Phường Hòa Hiệp Bắc", "Phường Hòa Hiệp Nam", "Phường Hòa Hiệp Trung", "Phường Hòa Vinh", "Phường Hòa Xuân"];
        for (var h = 0; h < dongHoaCityWards.length; h++) {
            var option = document.createElement("option");
            option.text = dongHoaCityWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Sông Cầu") {
        var songCauTownWards = ["Phường Hòa Bình 1", "Phường Hòa Bình 2", "Phường Hòa Phú", "Phường Hòa Phát", "Phường Hòa Xuân", "Xã Hòa Đồng"];
        for (var i = 0; i < songCauTownWards.length; i++) {
            var option = document.createElement("option");
            option.text = songCauTownWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Tuy Hòa") {
        var tuyHoaTownWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường An Phú", "Phường Hòa Hảo", "Phường Phú Đông", "Phường Phú Lâm", "Phường Phú Thạnh", "Phường Phú Trinh", "Phường Tân Xuyên"];
        for (var j = 0; j < tuyHoaTownWards.length; j++) {
            var option = document.createElement("option");
            option.text = tuyHoaTownWards[j];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Giao Thủy") {
        var giaoThuyWards = ["Thị trấn Giao Thủy", "Xã An Hòa", "Xã An Hưng", "Xã An Lâm", "Xã Bình Hòa", "Xã Đại Phong", "Xã Đại An", "Xã Đình Hoà", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Hòa Thịnh", "Xã Hoành Sơn", "Xã Hồng Hòa", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hoàng Đông", "Xã Hồng Thái", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Liên Hoa", "Xã Phương Thịnh", "Xã Quất Lâm", "Xã Tân Phong", "Xã Thanh Hòa", "Xã Tiên Trang", "Xã Tràng An", "Xã Trung Hoà", "Xã Trung Hòa", "Xã Trường Thắng", "Xã Tử Ninh"];
        for (var a = 0; a < giaoThuyWards.length; a++) {
            var option = document.createElement("option");
            option.text = giaoThuyWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bố Trạch") {
        var boTrachWards = ["Thị trấn Phong Nha", "Xã Bắc Trạch", "Xã Bắc Lý", "Xã Đồng Trạch", "Xã Đức Trạch", "Xã Hòa Trạch", "Xã Hòa Trạch Đông", "Xã Hòa Trạch Tây", "Xã Hưng Trạch", "Xã Lâm Trạch", "Xã Liên Trạch", "Xã Nam Trạch", "Xã Phú Định", "Xã Phú Trạch", "Xã Sơn Lộc", "Xã Tân Trạch", "Xã Tây Trạch", "Xã Thanh Trạch", "Xã Vạn Trạch", "Xã Xuân Trạch"];
        for (var b = 0; b < boTrachWards.length; b++) {
            var option = document.createElement("option");
            option.text = boTrachWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lệ Thủy") {
        var leThuyWards = ["Thị trấn Ba Đồn", "Xã Xuân Sơn", "Xã Xuân Lâm", "Xã Xuân Lộc", "Xã Phúc Ninh", "Xã Xuân Bắc", "Xã Xuân Phú", "Xã Xuân Thành", "Xã Xuân Trường", "Xã Xuân Viên", "Xã Xuân Đài", "Xã Xuân Hải", "Xã Xuân Trung", "Xã Xuân Minh", "Xã Xuân Tân"];
        for (var c = 0; c < leThuyWards.length; c++) {
            var option = document.createElement("option");
            option.text = leThuyWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Minh Hóa") {
        var minhHoaWards = ["Thị trấn Minh Hóa", "Xã Hồi Xuân", "Xã Quyết Thắng", "Xã Xuân Thủy", "Xã Trung Hòa", "Xã Trung Sơn", "Xã Trung Thành", "Xã Trung Tiến", "Xã Trung Xuân", "Xã Trung Trạch", "Xã Trung Ý", "Xã Trung Phú", "Xã Trung Hải", "Xã Trung Nam"];
        for (var d = 0; d < minhHoaWards.length; d++) {
            var option = document.createElement("option");
            option.text = minhHoaWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quảng Ninh") {
        var quangNinhWards = ["Thị trấn Quán Hàu", "Xã Gia Ninh", "Xã Trường Sơn", "Xã Trường Xuân", "Xã Trường Hải", "Xã Trường Lâm", "Xã Trường Minh", "Xã Trường Giang", "Xã Trường Phú", "Xã Trường Trung", "Xã Trường An"];
        for (var e = 0; e < quangNinhWards.length; e++) {
            var option = document.createElement("option");
            option.text = quangNinhWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quảng Trạch") {
        var quangTrachWards = ["Thị trấn Quảng Trạch", "Xã Cảnh Dương", "Xã Cảnh Hóa", "Xã Liên Trường", "Xã Quảng Đông", "Xã Quảng Hiệp", "Xã Quảng Hòa", "Xã Quảng Hợp", "Xã Quảng Hưng", "Xã Quảng Liên", "Xã Quảng Lộc", "Xã Quảng Phong", "Xã Quảng Phú", "Xã Quảng Sơn", "Xã Quảng Tân", "Xã Quảng Thạch", "Xã Quảng Thanh", "Xã Quảng Thọ", "Xã Quảng Tiến", "Xã Quảng Tùng", "Xã Quảng Văn", "Xã Quảng Vinh", "Xã Quảng Xuân"];
        for (var f = 0; f < quangTrachWards.length; f++) {
            var option = document.createElement("option");
            option.text = quangTrachWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tuyên Hóa") {
        var tuyenHoaWards = ["Thị trấn Hương Trạch", "Xã Hòa Trạch", "Xã Hòa Hải", "Xã Hòa Thuận", "Xã Hòa Mạc", "Xã Hòa Minh", "Xã Hòa Phú", "Xã Hòa Phong", "Xã Hòa Thành", "Xã Hòa Tiến", "Xã Hòa Tân", "Xã Hòa Thắng", "Xã Hòa Lạc", "Xã Hòa Liên", "Xã Hòa Sơn", "Xã Hòa Quỳ", "Xã Hòa Hồng", "Xã Hòa Xuân", "Xã Hòa Phúc", "Xã Hòa Phú"];
        for (var g = 0; g < tuyenHoaWards.length; g++) {
            var option = document.createElement("option");
            option.text = tuyenHoaWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Đồng Hới") {
        var dongHoiCityWards = ["Phường Bắc Lý", "Phường Bắc Nghĩa", "Phường Bắc Trạch", "Phường Đồng Phú", "Phường Đồng Sơn", "Phường Đồng Tâm", "Phường Đồng Xuân", "Phường Nam Lý", "Phường Phú Hải", "Phường Phú Hợp", "Phường Phú Nhuận", "Phường Phú Sơn", "Phường Phú Thủy", "Phường Quang Phong", "Phường Quang Tiến", "Phường Quảng Phú", "Phường Tân Hải", "Phường Trường Sơn"];
        for (var h = 0; h < dongHoiCityWards.length; h++) {
            var option = document.createElement("option");
            option.text = dongHoiCityWards[h];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Giao Thủy") {
        var giaoThuyWards = ["Thị trấn Giao Thủy", "Xã An Hòa", "Xã An Hưng", "Xã An Lâm", "Xã Bình Hòa", "Xã Đại Phong", "Xã Đại An", "Xã Đình Hoà", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Hòa Thịnh", "Xã Hoành Sơn", "Xã Hồng Hòa", "Xã Hồng Lĩnh", "Xã Hồng Phong", "Xã Hoàng Đông", "Xã Hồng Thái", "Xã Lam Sơn", "Xã Lê Hồng", "Xã Liên Hoa", "Xã Phương Thịnh", "Xã Quất Lâm", "Xã Tân Phong", "Xã Thanh Hòa", "Xã Tiên Trang", "Xã Tràng An", "Xã Trung Hoà", "Xã Trung Hòa", "Xã Trường Thắng", "Xã Tử Ninh"];
        for (var a = 0; a < giaoThuyWards.length; a++) {
            var option = document.createElement("option");
            option.text = giaoThuyWards[a];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bắc Trà My") {
        var bacTraMyWards = ["Thị trấn Trà My", "Xã Trà Leng", "Xã Trà Đốc", "Xã Trà Linh", "Xã Trà Nam", "Xã Trà Don", "Xã Trà Dơn", "Xã Trà Tập"];
        for (var b = 0; b < bacTraMyWards.length; b++) {
            var option = document.createElement("option");
            option.text = bacTraMyWards[b];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đại Lộc") {
        var daiLocWards = ["Thị trấn Ái Nghĩa", "Xã Đại An", "Xã Đại Chánh", "Xã Đại Cường", "Xã Đại Hải", "Xã Đại Hòa", "Xã Đại Hiệp", "Xã Đại Hưng", "Xã Đại Lãnh", "Xã Đại Minh", "Xã Đại Nghĩa", "Xã Đại Phong", "Xã Đại Quang", "Xã Đại Sơn", "Xã Đại Tân", "Xã Đại Thắng", "Xã Đại Thạnh", "Xã Đại Thành", "Xã Đại Thuận", "Xã Đại Tường"];
        for (var c = 0; c < daiLocWards.length; c++) {
            var option = document.createElement("option");
            option.text = daiLocWards[c];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Điện Bàn") {
        var dienBanWards = ["Thị trấn Điện Dương", "Xã Điện An", "Xã Điện Bắc", "Xã Điện Đại", "Xã Điện Dương", "Xã Điện Hòa", "Xã Điện Hồng", "Xã Điện Lâm", "Xã Điện Minh", "Xã Điện Nam Bắc", "Xã Điện Nam Đông", "Xã Điện Nam Trung", "Xã Điện Ngọc", "Xã Điện Phong", "Xã Điện Phước", "Xã Điện Phương", "Xã Điện Quang", "Xã Điện Thắng Bắc", "Xã Điện Thắng Nam", "Xã Điện Thắng Trung", "Xã Điện Thọ", "Xã Điện Tiến", "Xã Điện Trung", "Xã Điện Trung Bắc", "Xã Điện Trung Nam", "Xã Điện Xuân", "Xã Điện Yên"];
        for (var d = 0; d < dienBanWards.length; d++) {
            var option = document.createElement("option");
            option.text = dienBanWards[d];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đông Giang") {
        var dongGiangWards = ["Thị trấn A Rooi", "Xã A Dơk", "Xã A Nông", "Xã A Tiêng", "Xã Bha Lê", "Xã Đắc Pre", "Xã Đắc Pring", "Xã Ea Trul", "Xã Hòa Bắc", "Xã Hòa Nam", "Xã Hòa Ninh", "Xã Hòa Phong", "Xã Hòa Phú"];
        for (var e = 0; e < dongGiangWards.length; e++) {
            var option = document.createElement("option");
            option.text = dongGiangWards[e];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Duy Xuyên") {
        var duyXuyenWards = ["Thị trấn Nam Phước", "Xã Duy Châu", "Xã Duy Hải", "Xã Duy Hòa", "Xã Duy Nghĩa", "Xã Duy Phú", "Xã Duy Phước", "Xã Duy Sơn", "Xã Duy Tân", "Xã Duy Thành", "Xã Duy Thu"];
        for (var f = 0; f < duyXuyenWards.length; f++) {
            var option = document.createElement("option");
            option.text = duyXuyenWards[f];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hiệp Đức") {
        var hiepDucWards = ["Thị trấn Tân Bình", "Xã Quế Bình", "Xã Quế Lộc", "Xã Quế Lộc Điền", "Xã Quế Lợi", "Xã Quế Ninh", "Xã Quế Phong", "Xã Quế Phú", "Xã Quế Thuận", "Xã Sông Trà", "Xã Tịnh Hòa", "Xã Tịnh Kỳ", "Xã Tịnh Thiện", "Xã Trà Bui"];
        for (var g = 0; g < hiepDucWards.length; g++) {
            var option = document.createElement("option");
            option.text = hiepDucWards[g];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nam Giang") {
        var namGiangWards = ["Thị trấn Thanh An", "Xã Cà Dy", "Xã Chơ Chun", "Xã Đắc Tôi", "Xã Hồ Thần", "Xã La Dêê", "Xã Sông Kôn", "Xã Tà Long", "Xã Tà Rụt"];
        for (var h = 0; h < namGiangWards.length; h++) {
            var option = document.createElement("option");
            option.text = namGiangWards[h];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nam Trà My") {
        var namTraMyWards = ["Thị trấn Trà My", "Xã Trà Bui", "Xã Trà Đốc", "Xã Trà Đông", "Xã Trà Dương", "Xã Trà Giác", "Xã Trà Giang", "Xã Trà Giáp", "Xã Trà Ka", "Xã Trà Kót", "Xã Trà Nú", "Xã Trà Sơn", "Xã Trà Tân", "Xã Trà Tây", "Xã Trà Thủy", "Xã Trà Thanh", "Xã Trà Thọ", "Xã Trà Vân", "Xã Trà Vinh"];
        for (var i = 0; i < namTraMyWards.length; i++) {
            var option = document.createElement("option");
            option.text = namTraMyWards[i];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nông Sơn") {
        var nongSonWards = ["Thị trấn Đại Lộc", "Xã Đại An", "Xã Đại Chánh", "Xã Đại Cường", "Xã Đại Dương", "Xã Đại Hiệp", "Xã Đại Hòa", "Xã Đại Hồng", "Xã Đại Hùng", "Xã Đại Hưng", "Xã Đại Lãnh", "Xã Đại Nghĩa", "Xã Đại Phong", "Xã Đại Quang", "Xã Đại Sơn", "Xã Đại Tân", "Xã Đại Tự", "Xã Đại Xuân"];
        for (var j = 0; j < nongSonWards.length; j++) {
            var option = document.createElement("option");
            option.text = nongSonWards[j];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Núi Thành") {
        var nuiThanhWards = ["Thị trấn Núi Thành", "Xã Tam Anh Bắc", "Xã Tam Anh Nam", "Xã Tam Dân", "Xã Tam Lãnh", "Xã Tam Lộc", "Xã Tam Phước", "Xã Tam Thạnh", "Xã Tam Thái", "Xã Tam Tiến", "Xã Tam Trà", "Xã Tam Xuân I", "Xã Tam Xuân II", "Xã Tam Xuân III"];
        for (var k = 0; k < nuiThanhWards.length; k++) {
            var option = document.createElement("option");
            option.text = nuiThanhWards[k];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Ninh") {
        var phuNinhWards = ["Thị trấn Tam Mỹ", "Xã Tam An", "Xã Tam Đại", "Xã Tam Dân", "Xã Tam Lạc", "Xã Tam Lập", "Xã Tam Phú", "Xã Tam Sơn", "Xã Tam Thái", "Xã Tam Thành", "Xã Tam Vinh", "Xã Tam Xuân"];
        for (var l = 0; l < phuNinhWards.length; l++) {
            var option = document.createElement("option");
            option.text = phuNinhWards[l];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phước Sơn") {
        var phuocSonWards = ["Thị trấn Khâm Đức", "Xã Phước An", "Xã Phước Chánh", "Xã Phước Cường", "Xã Phước Đức", "Xã Phước Hiệp", "Xã Phước Hoà", "Xã Phước Kim", "Xã Phước Lộc", "Xã Phước Mỹ", "Xã Phước Năng", "Xã Phước Thành", "Xã Phước Thuận", "Xã Phước Xuân"];
        for (var m = 0; m < phuocSonWards.length; m++) {
            var option = document.createElement("option");
            option.text = phuocSonWards[m];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quế Sơn") {
        var queSonWards = ["Thị trấn Hương An", "Xã Quế An", "Xã Quế Châu", "Xã Quế Hiệp", "Xã Quế Long", "Xã Quế Minh", "Xã Quế Phong", "Xã Quế Phú", "Xã Quế Thọ", "Xã Quế Xuân 1", "Xã Quế Xuân 2"];
        for (var n = 0; n < queSonWards.length; n++) {
            var option = document.createElement("option");
            option.text = queSonWards[n];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tây Giang") {
        var tayGiangWards = ["Thị trấn A Nông", "Xã A Tiêng", "Xã A Vương", "Xã Bha Lê", "Xã Đắc Tôi", "Xã Hòa Sơn", "Xã Sông Kôn", "Xã Tà Lu", "Xã Tà Rụt"];
        for (var o = 0; o < tayGiangWards.length; o++) {
            var option = document.createElement("option");
            option.text = tayGiangWards[o];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thăng Bình") {
        var thangBinhWards = ["Thị trấn Hà Lam", "Xã Bình An", "Xã Bình Chánh", "Xã Bình Dương", "Xã Bình Đào", "Xã Bình Định Bắc", "Xã Bình Định Nam", "Xã Bình Hải", "Xã Bình Lãnh", "Xã Bình Minh", "Xã Bình Nam", "Xã Bình Nguyên", "Xã Bình Phú", "Xã Bình Tân", "Xã Bình Thạnh", "Xã Bình Thuận", "Xã Bình Trị", "Xã Bình Trị Thông", "Xã Bình Triều", "Xã Bình Tú", "Xã Bình Tường"];
        for (var p = 0; p < thangBinhWards.length; p++) {
            var option = document.createElement("option");
            option.text = thangBinhWards[p];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiên Phước") {
        var tienPhuocWards = ["Thị trấn Tiên Kỳ", "Xã Tiên An", "Xã Tiên Cẩm", "Xã Tiên Cảnh", "Xã Tiên Châu", "Xã Tiên Hà", "Xã Tiên Hiệp", "Xã Tiên Hội", "Xã Tiên Lãnh", "Xã Tiên Lập", "Xã Tiên Lộc", "Xã Tiên Mỹ", "Xã Tiên Ngọc", "Xã Tiên Phong", "Xã Tiên Sơn", "Xã Tiên Thọ", "Xã Tiên Tân", "Xã Tiên Thành", "Xã Tiên Thắng", "Xã Tiên Thuận", "Xã Tiên Tiến", "Xã Tiên Trung", "Xã Tiên Vận", "Xã Tiên Vinh"];
        for (var q = 0; q < tienPhuocWards.length; q++) {
            var option = document.createElement("option");
            option.text = tienPhuocWards[q];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Điện Bàn") {
        var dienBanCityWards = ["Phường Điện An", "Phường Điện Dương", "Phường Điện Hòa", "Phường Điện Hồng", "Phường Điện Nam Bắc", "Phường Điện Nam Đông", "Phường Điện Nam Trung", "Phường Điện Ngọc", "Phường Điện Phước", "Phường Điện Phương", "Phường Điện Quang", "Phường Điện Thắng Bắc", "Phường Điện Thắng Nam", "Phường Điện Thắng Trung", "Phường Điện Thọ", "Phường Điện Tiến", "Phường Điện Trung", "Phường Điện Trung Bắc", "Phường Điện Trung Nam", "Xã Điện Hải", "Xã Điện Hoà", "Xã Điện Hồng", "Xã Điện Hồng", "Xã Điện Lâm", "Xã Điện Minh", "Xã Điện Phương", "Xã Điện Phước", "Xã Điện Phương Đông", "Xã Điện Phương Tây", "Xã Điện Sơn", "Xã Điện Tân", "Xã Điện Thắng"];
        for (var r = 0; r < dienBanCityWards.length; r++) {
            var option = document.createElement("option");
            option.text = dienBanCityWards[r];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hội An") {
        var hoiAnCityWards = ["Phường Cẩm An", "Phường Cẩm Châu", "Phường Cẩm Hà", "Phường Cẩm Kim", "Phường Cẩm Nam", "Phường Cẩm Phô", "Phường Cẩm Thanh", "Phường Cửa Đại", "Xã Cẩm Hòa", "Xã Cẩm Thành"];
        for (var s = 0; s < hoiAnCityWards.length; s++) {
            var option = document.createElement("option");
            option.text = hoiAnCityWards[s];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Tam Kỳ") {
        var tamKyCityWards = ["Phường An Mỹ", "Phường An Phú", "Phường An Sơn", "Phường An Xuân", "Phường Hòa Hương", "Phường Hòa Thuận", "Phường Phước Hòa", "Phường Tân Thạnh"];
        for (var t = 0; t < tamKyCityWards.length; t++) {
            var option = document.createElement("option");
            option.text = tamKyCityWards[t];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Ba Tơ") {
        var baToWards = ["Thị trấn Ba Tơ", "Xã Ba Bích", "Xã Ba Cung", "Xã Ba Dinh", "Xã Ba Điền", "Xã Ba Động", "Xã Ba Giang", "Xã Ba Khâm", "Xã Ba Lế", "Xã Ba Liên", "Xã Ba Nam", "Xã Ba Ngạc", "Xã Ba Thành", "Xã Ba Tiêu", "Xã Ba Tô", "Xã Ba Trang", "Xã Ba Vì"];
        for (var u = 0; u < baToWards.length; u++) {
            var option = document.createElement("option");
            option.text = baToWards[u];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bình Sơn") {
        var binhSonWards = ["Thị trấn Dung Quất", "Xã Bình Chánh", "Xã Bình Chương", "Xã Bình Dương", "Xã Bình Hải", "Xã Bình Hòa", "Xã Bình Khương", "Xã Bình Lãnh", "Xã Bình Minh", "Xã Bình Nam", "Xã Bình Nguyên", "Xã Bình Phú", "Xã Bình Phước", "Xã Bình Tân", "Xã Bình Thành", "Xã Bình Thuận", "Xã Bình Trị", "Xã Bình Triều", "Xã Bình Xuyên"];
        for (var v = 0; v < binhSonWards.length; v++) {
            var option = document.createElement("option");
            option.text = binhSonWards[v];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đức Phổ") {
        var ducPhoWards = ["Thị trấn Đức Phổ", "Xã Phổ An", "Xã Phổ Châu", "Xã Phổ Cường", "Xã Phổ Hòa", "Xã Phổ Khánh", "Xã Phổ Minh", "Xã Phổ Ninh", "Xã Phổ Phong", "Xã Phổ Quang", "Xã Phổ Thạnh", "Xã Phổ Thuận", "Xã Phổ Văn", "Xã Phổ Vinh"];
        for (var w = 0; w < ducPhoWards.length; w++) {
            var option = document.createElement("option");
            option.text = ducPhoWards[w];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lý Sơn") {
        var lySonWards = ["Thị trấn Lý Sơn", "Xã An Vĩnh", "Xã Lý Sơn", "Xã Thổ Sơn"];
        for (var x = 0; x < lySonWards.length; x++) {
            var option = document.createElement("option");
            option.text = lySonWards[x];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Minh Long") {
        var minhLongWards = ["Thị trấn Khe Mo", "Xã An Hải", "Xã An Nhơn", "Xã Long Sơn", "Xã Minh Hải", "Xã Minh Long", "Xã Minh Thạnh", "Xã Thanh An", "Xã Vĩnh Châu"];
        for (var y = 0; y < minhLongWards.length; y++) {
            var option = document.createElement("option");
            option.text = minhLongWards[y];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mộ Đức") {
        var moDucWards = ["Thị trấn Mộ Đức", "Xã Đức Chánh", "Xã Đức Hiệp", "Xã Đức Hòa", "Xã Đức Lân", "Xã Đức Lợi", "Xã Đức Minh", "Xã Đức Nhuận", "Xã Đức Phong", "Xã Đức Tân", "Xã Đức Thắng", "Xã Đức Thạnh", "Xã Đức Thịnh", "Xã Đức Thuận", "Xã Đức Tài"];
        for (var z = 0; z < moDucWards.length; z++) {
            var option = document.createElement("option");
            option.text = moDucWards[z];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nghĩa Hành") {
        var nghiaHanhWards = ["Thị trấn Chợ Chùa", "Xã Chợ Mới", "Xã Hành Thuận", "Xã Hành Đức", "Xã Nghĩa An", "Xã Nghĩa Điền", "Xã Nghĩa Hiệp", "Xã Nghĩa Hòa", "Xã Nghĩa Kỳ", "Xã Nghĩa Lâm", "Xã Nghĩa Lợi", "Xã Nghĩa Mỹ", "Xã Nghĩa Phú", "Xã Nghĩa Thắng", "Xã Nghĩa Thuận", "Xã Nghĩa Thành", "Xã Nghĩa Trung", "Xã Nghĩa Tân", "Xã Nghĩa Yên"];
        for (var aa = 0; aa < nghiaHanhWards.length; aa++) {
            var option = document.createElement("option");
            option.text = nghiaHanhWards[aa];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sơn Hà") {
        var sonHaWards = ["Thị trấn Di Lăng", "Xã Sơn Ba", "Xã Sơn Bao", "Xã Sơn Cao", "Xã Sơn Giang", "Xã Sơn Hạ", "Xã Sơn Hải", "Xã Sơn Kỳ", "Xã Sơn Linh", "Xã Sơn Nham", "Xã Sơn Thành", "Xã Sơn Thượng", "Xã Sơn Thủy", "Xã Sơn Trung", "Xã Sơn Bua"];
        for (var ab = 0; ab < sonHaWards.length; ab++) {
            var option = document.createElement("option");
            option.text = sonHaWards[ab];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sơn Tây") {
        var sonTayWards = ["Thị trấn Sơn Tây", "Xã Sơn Bua", "Xã Sơn Dung", "Xã Sơn Lập", "Xã Sơn Lộc", "Xã Sơn Nham", "Xã Sơn Hiệp", "Xã Sơn Phú", "Xã Sơn Trung", "Xã Sơn Hòa", "Xã Sơn Hải", "Xã Sơn Kỳ", "Xã Sơn Thành", "Xã Sơn Diệm", "Xã Sơn Long", "Xã Sơn Thịnh", "Xã Sơn Lĩnh"];
        for (var ac = 0; ac < sonTayWards.length; ac++) {
            var option = document.createElement("option");
            option.text = sonTayWards[ac];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sơn Tịnh") {
        var sonTinhWards = ["Thị trấn Sơn Mỹ", "Xã Sơn Bằng", "Xã Sơn Bua", "Xã Sơn Cao", "Xã Sơn Châu", "Xã Sơn Giang", "Xã Sơn Hà", "Xã Sơn Hải", "Xã Sơn Hòa", "Xã Sơn Kỳ", "Xã Sơn Lâm", "Xã Sơn Nham", "Xã Sơn Thành", "Xã Sơn Thượng", "Xã Sơn Trung", "Xã Sơn Hồng", "Xã Sơn Tân"];
        for (var ad = 0; ad < sonTinhWards.length; ad++) {
            var option = document.createElement("option");
            option.text = sonTinhWards[ad];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tây Trà") {
        var tayTraWards = ["Thị trấn Trà Bui", "Xã Trà Đốc", "Xã Trà Đông", "Xã Trà Dương", "Xã Trà Giang", "Xã Trà Giác", "Xã Trà Giáp", "Xã Trà Ka", "Xã Trà Kót", "Xã Trà My", "Xã Trà Nú", "Xã Trà Sơn", "Xã Trà Tân", "Xã Trà Tây", "Xã Trà Thanh", "Xã Trà Thủy", "Xã Trà Vân"];
        for (var ae = 0; ae < tayTraWards.length; ae++) {
            var option = document.createElement("option");
            option.text = tayTraWards[ae];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trà Bồng") {
        var traBongWards = ["Thị trấn Trà Xuân", "Xã Trà Bình", "Xã Trà Bùi", "Xã Trà Giác", "Xã Trà Giang", "Xã Trà Hiệp", "Xã Trà Lâm", "Xã Trà Phong", "Xã Trà Sơn", "Xã Trà Tân", "Xã Trà Tây", "Xã Trà Thủy", "Xã Trà Xuân"];
        for (var af = 0; af < traBongWards.length; af++) {
            var option = document.createElement("option");
            option.text = traBongWards[af];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tư Nghĩa") {
        var tuNghiaWards = ["Thị trấn Trà Khê", "Xã Tư An", "Xã Tư Chính", "Xã Tư Cơ", "Xã Tư Hiệp", "Xã Tư Kỳ", "Xã Tư Long", "Xã Tư Lộc", "Xã Tư Nghĩa", "Xã Tư Phong", "Xã Tư Thành", "Xã Tư Thắng", "Xã Tư Thịnh", "Xã Tư Trinh"];
        for (var ag = 0; ag < tuNghiaWards.length; ag++) {
            var option = document.createElement("option");
            option.text = tuNghiaWards[ag];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Quảng Ngãi") {
        var quangNgaiCityWards = ["Phường Chánh Lộ", "Phường Lê Hồng Phong", "Phường Nghĩa Chánh", "Phường Nghĩa Dõng", "Phường Nguyễn Nghiêm", "Phường Nguyễn Thị Minh Khai", "Phường Quảng Phú", "Phường Tịnh Kỳ", "Phường Trần Hưng Đạo", "Phường Trương Quang Trọng", "Phường Trương Quang Trọng", "Phường Tự Do"];
        for (var ah = 0; ah < quangNgaiCityWards.length; ah++) {
            var option = document.createElement("option");
            option.text = quangNgaiCityWards[ah];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Ba Chẽ") {
        var baCheWards = ["Thị trấn Ba Chẽ", "Xã Đạp Thanh", "Xã Đồn Đạc", "Xã Lương Mạc", "Xã Minh Cầm", "Xã Nam Sơn", "Xã Thanh Lâm", "Xã Thanh Sơn", "Xã Thanh Thủy"];
        for (var ai = 0; ai < baCheWards.length; ai++) {
            var option = document.createElement("option");
            option.text = baCheWards[ai];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Bình Liêu") {
        var binhLieuWards = ["Thị trấn Bình Liêu", "Xã Đồng Tâm", "Xã Đồng Văn", "Xã Hoành Mô", "Xã Húc Động", "Xã Lục Hồn", "Xã Quảng Hưng", "Xã Tình Húc"];
        for (var aj = 0; aj < binhLieuWards.length; aj++) {
            var option = document.createElement("option");
            option.text = binhLieuWards[aj];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cô Tô") {
        var coToWards = ["Thị trấn Cô Tô", "Xã Cô Tô", "Xã Đồng Tiến", "Xã Thanh Lân"];
        for (var ak = 0; ak < coToWards.length; ak++) {
            var option = document.createElement("option");
            option.text = coToWards[ak];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đầm Hà") {
        var damHaWards = ["Thị trấn Đầm Hà", "Xã Đại Bàng", "Xã Đầm Hà", "Xã Dực Yên", "Xã Quảng An", "Xã Quảng Lâm", "Xã Quảng Tân", "Xã Tân Bình"];
        for (var al = 0; al < damHaWards.length; al++) {
            var option = document.createElement("option");
            option.text = damHaWards[al];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đông Triều") {
        var dongTrieuWards = ["Thị trấn Đông Triều", "Xã An Sinh", "Xã Bình Dương", "Xã Đức Chính", "Xã Đức Ninh Đông", "Xã Hoàng Quế", "Xã Hồng Phong", "Xã Hồng Thái Đông", "Xã Hồng Thái Tây", "Xã Hùng An", "Xã Tràng An"];
        for (var am = 0; am < dongTrieuWards.length; am++) {
            var option = document.createElement("option");
            option.text = dongTrieuWards[am];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hải Hà") {
        var haiHaWards = ["Thị trấn Hải Hà", "Xã Đất Đỏ", "Xã Đoàn Xá", "Xã Nam Hải", "Xã Ngũ Lão", "Xã Phong Dụ", "Xã Tân Dân", "Xã Tiến Tới"];
        for (var an = 0; an < haiHaWards.length; an++) {
            var option = document.createElement("option");
            option.text = haiHaWards[an];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoành Bồ") {
        var hoanhBoWards = ["Thị trấn Hoành Bồ", "Xã Cái Rồng", "Xã Đa Mai", "Xã Đại Bình", "Xã Điền Xá", "Xã Đồng Sơn", "Xã Minh Châu", "Xã Tiến Thủy"];
        for (var ao = 0; ao < hoanhBoWards.length; ao++) {
            var option = document.createElement("option");
            option.text = hoanhBoWards[ao];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiên Yên") {
        var tienYenWards = ["Thị trấn Tiên Yên", "Xã Đại Dực", "Xã Điền Xá", "Xã Đông Hải", "Xã Đông Ngũ", "Xã Đông Rui", "Xã Hà Lâu", "Xã Hải Lạng", "Xã Hải Sơn", "Xã Hải Tiến", "Xã Minh Đức", "Xã Phong Dụ", "Xã Tiến Yên"];
        for (var ap = 0; ap < tienYenWards.length; ap++) {
            var option = document.createElement("option");
            option.text = tienYenWards[ap];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vân Đồn") {
        var vanDonWards = ["Thị trấn Cái Rồng", "Xã Bằng Cả", "Xã Đài Xuyên", "Xã Đoàn Kết", "Xã Hạ Long", "Xã Hải Long", "Xã Quan Lạn", "Xã Thắng Lợi", "Xã Minh Châu"];
        for (var aq = 0; aq < vanDonWards.length; aq++) {
            var option = document.createElement("option");
            option.text = vanDonWards[aq];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Hạ Long") {
        var haLongCityWards = ["Phường Bạch Đằng", "Phường Bãi Cháy", "Phường Cao Thắng", "Phường Cao Xanh", "Phường Giếng Đáy", "Phường Hà Khánh", "Phường Hà Lầm", "Phường Hà Phong", "Phường Hà Trung", "Phường Hà Tu", "Phường Hồng Gai", "Phường Hồng Hà", "Phường Hồng Hải", "Phường Phan Đình Phùng", "Phường Tuần Châu", "Xã Việt Hưng", "Xã Yết Kiêu"];
        for (var ar = 0; ar < haLongCityWards.length; ar++) {
            var option = document.createElement("option");
            option.text = haLongCityWards[ar];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Móng Cái") {
        var mongCaiCityWards = ["Phường Bắc Sơn", "Phường Hải Đông", "Phường Hải Hòa", "Phường Hải Xuân", "Phường Ka Long", "Phường Ninh Dương", "Phường Trà Cổ", "Phường Trần Phú", "Xã Hải Yên", "Xã Hòa Lạc", "Xã Hòa Lê", "Xã Hòa Trung", "Xã Hồng Phong", "Xã Hùng Thắng", "Xã Lục Hòa", "Xã Lục Hồng", "Xã Phú Hải", "Xã Trà Lĩnh", "Xã Việt Hưng", "Xã Vạn Ninh"];
        for (var as = 0; as < mongCaiCityWards.length; as++) {
            var option = document.createElement("option");
            option.text = mongCaiCityWards[as];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Đông Triều") {
        var dongTrieuTownWards = ["Phường Bình Dương", "Phường Đông Triều", "Phường Hưng Đạo", "Phường Mao Điền", "Xã An Sinh", "Xã Bình Khê", "Xã Đức Chính", "Xã Hồng Phong", "Xã Hồng Thái Đông", "Xã Hồng Thái Tây", "Xã Hùng Thắng", "Xã Tràng An"];
        for (var at = 0; at < dongTrieuTownWards.length; at++) {
            var option = document.createElement("option");
            option.text = dongTrieuTownWards[at];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Quảng Yên") {
        var quangYenTownWards = ["Phường Cộng Hòa", "Phường Đông Mai", "Phường Minh Thành", "Phường Nam Hoà", "Phường Phong Cốc", "Phường Tiên An", "Xã Đông Mai", "Xã Hoàng Tân", "Xã Tân An", "Xã Yên Giang", "Xã Yên Hải"];
        for (var au = 0; au < quangYenTownWards.length; au++) {
            var option = document.createElement("option");
            option.text = quangYenTownWards[au];
            xa.add(option);
        }
    } else if (quan.value === "Xã Ba Trại") {
        var baTraiWards = ["Thôn Bát Quái", "Thôn Bắc Lý", "Thôn Cải Tạo", "Thôn Chánh Lý", "Thôn Đại Thành", "Thôn Đại Xuyên", "Thôn Hậu Lâm", "Thôn Lâm Phong", "Thôn Liên Phong", "Thôn Ngọc Lý", "Thôn Phúc Lý", "Thôn Quốc Lâm", "Thôn Sơn Phong", "Thôn Tân Lâm", "Thôn Tiến Lâm", "Thôn Trung Lâm", "Thôn Việt Lâm", "Thôn Vượng Lâm"];
        for (var av = 0; av < baTraiWards.length; av++) {
            var option = document.createElement("option");
            option.text = baTraiWards[av];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cam Lộ") {
        var camLoWards = ["Thị trấn Cam Lộ", "Xã Cam Hải", "Xã Cam Thủy", "Xã Cam Tuyền", "Xã Cam Lộ"];
        for (var aw = 0; aw < camLoWards.length; aw++) {
            var option = document.createElement("option");
            option.text = camLoWards[aw];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cồn Cỏ") {
        var conCoWards = ["Thị trấn Cồn Cỏ", "Xã Đắk Cấm", "Xã Đắk Lắk", "Xã Đắk Nhoong", "Xã Đắk Pne", "Xã Đắk Trăm", "Xã Đắk Tơ Lung", "Xã Đắk Trôi", "Xã Đắk Wil", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong", "Xã Đắk Nhoong"];
        for (var ax = 0; ax < conCoWards.length; ax++) {
            var option = document.createElement("option");
            option.text = conCoWards[ax];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đa Krông") {
        var daKrongWards = ["Thị trấn Krông Klang", "Xã A Bung", "Xã A Ngo", "Xã A Vao", "Xã B Lá", "Xã Đắk Ring", "Xã Húc Nghì", "Xã Hướng Hiệp", "Xã Hướng Phùng", "Xã Hướng Sơn", "Xã Hướng Linh", "Xã Hướng Lập", "Xã Hướng Hóa", "Xã Hướng Tân", "Xã Trường Xuân"];
        for (var ay = 0; ay < daKrongWards.length; ay++) {
            var option = document.createElement("option");
            option.text = daKrongWards[ay];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gio Linh") {
        var gioLinhWards = ["Thị trấn Gio Linh", "Xã Cửa Việt", "Xã Trung Giang", "Xã Trung Hải", "Xã Trung Sơn", "Xã Gio Mỹ", "Xã Gio An", "Xã Gio Châu", "Xã Gio Hải", "Xã Gio Linh", "Xã Gio Mai", "Xã Gio Quang", "Xã Gio Sơn", "Xã Gio Thành", "Xã Gio Việt", "Xã Linh Hải", "Xã Linh Thượng"];
        for (var az = 0; az < gioLinhWards.length; az++) {
            var option = document.createElement("option");
            option.text = gioLinhWards[az];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hải Lăng") {
        var haiLangWards = ["Thị trấn Hải Lăng", "Xã Hải An", "Xã Hải Ba", "Xã Hải Chánh", "Xã Hải Dương", "Xã Hải Hà", "Xã Hải Hòa", "Xã Hải Khê", "Xã Hải Kỳ", "Xã Hải Lâm", "Xã Hải Lệ", "Xã Hải Long", "Xã Hải Phong", "Xã Hải Phú", "Xã Hải Phúc", "Xã Hải Phúc", "Xã Hải Phúc", "Xã Hải Sơn", "Xã Hải Tân", "Xã Hải Tây"];
        for (var ba = 0; ba < haiLangWards.length; ba++) {
            var option = document.createElement("option");
            option.text = haiLangWards[ba];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hướng Hóa") {
        var huongHoaWards = ["Thị trấn Hướng Hóa", "Xã Hướng Hóa", "Xã Hướng Lập", "Xã Hướng Linh", "Xã Hướng Lộc", "Xã Hướng Phùng", "Xã Hướng Sơn", "Xã Hướng Tân", "Xã Hướng Thọ", "Xã Hướng Việt", "Xã Hướng Vân", "Xã Hướng Xuân", "Xã Hướng Phúc"];
        for (var bb = 0; bb < huongHoaWards.length; bb++) {
            var option = document.createElement("option");
            option.text = huongHoaWards[bb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Triệu Phong") {
        var trieuPhongWards = ["Thị trấn Ái Tử", "Xã Ái Tử", "Xã Triệu An", "Xã Triệu Đại", "Xã Triệu Độ", "Xã Triệu Đông", "Xã Triệu Giang", "Xã Triệu Hải", "Xã Triệu Long", "Xã Triệu Phước", "Xã Triệu Sơn", "Xã Triệu Thành", "Xã Triệu Thuận", "Xã Triệu Thượng"];
        for (var bc = 0; bc < trieuPhongWards.length; bc++) {
            var option = document.createElement("option");
            option.text = trieuPhongWards[bc];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Đông Hà") {
        var dongHaCityWards = ["Phường 1", "Phường 1", "Phường 2", "Phường 3", "Phường 3", "Phường 4", "Phường Đông Giang", "Phường Đông Lễ", "Phường Đông Lương", "Phường Đông Thanh", "Phường Đông Thạnh", "Phường Đông Thọ", "Phường Đông Văn", "Xã Đông Hà"];
        for (var bd = 0; bd < dongHaCityWards.length; bd++) {
            var option = document.createElement("option");
            option.text = dongHaCityWards[bd];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Quảng Trị") {
        var quangTriTownWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Xã An Đôn", "Xã Hải Lệ", "Xã Vĩnh Linh", "Xã Triệu An", "Xã Triệu Ái"];
        for (var be = 0; be < quangTriTownWards.length; be++) {
            var option = document.createElement("option");
            option.text = quangTriTownWards[be];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Châu Thành", "Xã An Hiệp", "Xã An Hóa", "Xã An Khánh", "Xã An Phước", "Xã An Thạnh", "Xã An Thới", "Xã An Xuân", "Xã Đại Điền", "Xã Hữu Định", "Xã Minh Đức", "Xã Tiên Long", "Xã Tiên Thủy"];
        for (var bf = 0; bf < chauThanhWards.length; bf++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[bf];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cù Lao Dung") {
        var cuLaoDungWards = ["Thị trấn Cù Lao Dung", "Xã An Thạnh 1", "Xã An Thạnh 2", "Xã An Thạnh 3", "Xã An Thạnh Đông", "Xã An Thạnh Nam", "Xã An Thạnh Tây", "Xã Đại Ân 1", "Xã Đại Ân 2", "Xã Định An", "Xã Giao Thạnh", "Xã Giao Thịnh", "Xã Mỹ Thạnh"];
        for (var bg = 0; bg < cuLaoDungWards.length; bg++) {
            var option = document.createElement("option");
            option.text = cuLaoDungWards[bg];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kế Sách") {
        var keSachWards = ["Thị trấn Kế Sách", "Xã An Lạc Thôn", "Xã An Lạc Tây", "Xã Ba Trinh", "Xã Đại Hải", "Xã Gia Hòa 1", "Xã Gia Hòa 2", "Xã Hòa Tú 1", "Xã Hòa Tú 2", "Xã Kế An", "Xã Kế Sách", "Xã Kế Thành", "Xã Nhơn Mỹ", "Xã Phong Nẫm"];
        for (var bh = 0; bh < keSachWards.length; bh++) {
            var option = document.createElement("option");
            option.text = keSachWards[bh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Long Phú") {
        var longPhuWards = ["Thị trấn Long Phú", "Xã Châu Khánh", "Xã Đại Ngãi", "Xã Hậu Thạnh", "Xã Long Đức", "Xã Long Phú", "Xã Long Phú", "Xã Phú Hữu", "Xã Song Phụng", "Xã Tân Hưng", "Xã Tân Thạnh", "Xã Tân Thạnh", "Xã Trường Khánh", "Xã Viên An"];
        for (var bi = 0; bi < longPhuWards.length; bi++) {
            var option = document.createElement("option");
            option.text = longPhuWards[bi];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mỹ Tú") {
        var myTuWards = ["Thị trấn Mỹ Tú", "Xã Đại Tâm", "Xã Hòa Tú 1", "Xã Hòa Tú II", "Xã Mỹ Hòa", "Xã Mỹ Phước", "Xã Mỹ Thuận", "Xã Ngọc Tố", "Xã Phú Mỹ", "Xã Tham Đôn"];
        for (var bj = 0; bj < myTuWards.length; bj++) {
            var option = document.createElement("option");
            option.text = myTuWards[bj];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mỹ Xuyên") {
        var myXuyenWards = ["Thị trấn Mỹ Xuyên", "Xã Đại Tâm", "Xã Gia Hòa 1", "Xã Gia Hòa 2", "Xã Hòa Tú 1", "Xã Hòa Tú I", "Xã Hòa Tú II", "Xã Mỹ Hòa 1", "Xã Mỹ Hòa 2", "Xã Mỹ Hòa Hưng", "Xã Mỹ Khánh 1", "Xã Mỹ Khánh 2", "Xã Mỹ Khánh Hưng", "Xã Mỹ Quý", "Xã Mỹ Thạnh"];
        for (var bk = 0; bk < myXuyenWards.length; bk++) {
            var option = document.createElement("option");
            option.text = myXuyenWards[bk];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ngã Năm") {
        var ngaNamWards = ["Thị trấn Ngã Năm", "Xã Đại Thắng", "Xã Hưng Phú", "Xã Hưng Phước", "Xã Hưng Thông", "Xã Long Thạnh", "Xã Mỹ Bình", "Xã Mỹ Hòa", "Xã Mỹ Quý", "Xã Mỹ Thắng", "Xã Tài Văn", "Xã Thạnh Tân", "Xã Thành Lợi"];
        for (var bl = 0; bl < ngaNamWards.length; bl++) {
            var option = document.createElement("option");
            option.text = ngaNamWards[bl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạnh Trị") {
        var thanhTriWards = ["Thị trấn Thạnh Trị", "Xã Hòa Lợi", "Xã Lợi Hòa", "Xã Tân Phong", "Xã Thạnh Tân", "Xã Thạnh Trị"];
        for (var bm = 0; bm < thanhTriWards.length; bm++) {
            var option = document.createElement("option");
            option.text = thanhTriWards[bm];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trần Đề") {
        var tranDeWards = ["Thị trấn Trần Đề", "Xã Long Điền", "Xã Long Hữu", "Xã Long Hưng", "Xã Long Khánh", "Xã Long Phú", "Xã Long Thủy", "Xã Long Toàn", "Xã Long Trị", "Xã Long Trị A", "Xã Tài Văn", "Xã Viên Bình"];
        for (var bn = 0; bn < tranDeWards.length; bn++) {
            var option = document.createElement("option");
            option.text = tranDeWards[bn];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Sóc Trăng") {
        var socTrangCityWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Xã Long Phú", "Xã Mỹ Bình", "Xã Tân Phú", "Xã Vĩnh Quới", "Xã Vĩnh Tân"];
        for (var bo = 0; bo < socTrangCityWards.length; bo++) {
            var option = document.createElement("option");
            option.text = socTrangCityWards[bo];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Vĩnh Châu") {
        var vinhChauTownWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Xã Châu Hưng", "Xã Hòa Đông", "Xã Hòa Tân", "Xã Lạc Hòa", "Xã Lai Hòa", "Xã Thanh Hòa", "Xã Vĩnh Hải", "Xã Vĩnh Hiệp", "Xã Vĩnh Tân"];
        for (var bp = 0; bp < vinhChauTownWards.length; bp++) {
            var option = document.createElement("option");
            option.text = vinhChauTownWards[bp];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bắc Yên") {
        var bacYenWards = ["Thị trấn Bắc Yên", "Xã Chiềng Sại", "Xã Chiềng Xuân", "Xã Đại Sơn", "Xã Làng Chếu", "Xã Mường Khoa", "Xã Tân Thượng", "Xã Tú Lệ", "Xã Xuân Tầm"];
        for (var bq = 0; bq < bacYenWards.length; bq++) {
            var option = document.createElement("option");
            option.text = bacYenWards[bq];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mai Sơn") {
        var maiSonWards = ["Thị trấn Mai Sơn", "Xã Chiềng Hặc", "Xã Chiềng Khoa", "Xã Chiềng Lao", "Xã Chiềng Ân", "Xã Hát Lót", "Xã Mường Bằng", "Xã Mường Bon", "Xã Mường Chà", "Xã Mường Mươn", "Xã Mường Tè", "Xã Nà Nhạn", "Xã Nà Dương", "Xã Pú Pẩu", "Xã Chiềng Pha", "Xã Săm Khóe", "Xã Sốp Cộp", "Xã Mường Lay"];
        for (var br = 0; br < maiSonWards.length; br++) {
            var option = document.createElement("option");
            option.text = maiSonWards[br];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mộc Châu") {
        var mocChauWards = ["Thị trấn Mộc Châu", "Xã Chiềng Hắc", "Xã Chiềng Khừa", "Xã Chiềng Sơn", "Xã Đông Sang", "Xã Hua Păng", "Xã Lóng Sập", "Xã Mường Sang", "Xã Nà Mường", "Xã Phiêng Luông", "Xã Tà Lai"];
        for (var bs = 0; bs < mocChauWards.length; bs++) {
            var option = document.createElement("option");
            option.text = mocChauWards[bs];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường La") {
        var muongLaWards = ["Thị trấn Mường La", "Xã Chiềng Âm", "Xã Chiềng Công", "Xã Chiềng Hoa", "Xã Chiềng Lao", "Xã Chiềng Muôn", "Xã Chiềng San", "Xã Hua Trai", "Xã Tạ Bú"];
        for (var bt = 0; bt < muongLaWards.length; bt++) {
            var option = document.createElement("option");
            option.text = muongLaWards[bt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phù Yên") {
        var phuYenWards = ["Thị trấn Phù Yên", "Xã Sập Xa", "Xã Chư Prông", "Xã Chiềng Khoang", "Xã Dồm Đăng", "Xã Huổi Tụ", "Xã Mường Lựm", "Xã Mường Nhà", "Xã Nậm Xây", "Xã Tà Hừa", "Xã Tạ Khoa"];
        for (var bu = 0; bu < phuYenWards.length; bu++) {
            var option = document.createElement("option");
            option.text = phuYenWards[bu];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quỳnh Nhai") {
        var quynhNhaiWards = ["Thị trấn Quỳnh Nhai", "Xã Chiềng Bằng", "Xã Chiềng Khay", "Xã Chiềng Khoong", "Xã Chiềng Ơn", "Xã Chiềng Pha", "Xã Chiềng Sơ", "Xã Chiềng Tương", "Xã Mường Chiên", "Xã Nà Ho", "Xã Phiêng Ban", "Xã Tà Hộc", "Xã Tà Lại"];
        for (var bv = 0; bv < quynhNhaiWards.length; bv++) {
            var option = document.createElement("option");
            option.text = quynhNhaiWards[bv];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sông Mã") {
        var songMaWards = ["Thị trấn Sông Mã", "Xã Bó Sinh", "Xã Chiềng Cang", "Xã Chiềng En", "Xã Chiềng Khoi", "Xã Chiềng Khừa", "Xã Chiềng Phung", "Xã Hua Trai", "Xã Nà Nghịu", "Xã Nậm Giôn", "Xã Nậm Păm", "Xã Sông Mã", "Xã Suối Bàng", "Xã Suối Bau", "Xã Suối Giàng", "Xã Suối Quyền"];
        for (var bw = 0; bw < songMaWards.length; bw++) {
            var option = document.createElement("option");
            option.text = songMaWards[bw];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sốp Cộp") {
        var sopCopWards = ["Thị trấn Sốp Cộp", "Xã Ban Sơn", "Xã Bản Lầm", "Xã Bản Lầu", "Xã Bản Mù", "Xã Đứa Mòn", "Xã Mường Lạn", "Xã Mường Lèo", "Xã Mường Và"];
        for (var bx = 0; bx < sopCopWards.length; bx++) {
            var option = document.createElement("option");
            option.text = sopCopWards[bx];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thuận Châu") {
        var thuanChauWards = ["Thị trấn Thuận Châu", "Xã Hua Thanh", "Xã Lóng Phiêng", "Xã Mường Lựm", "Xã Mường Trai", "Xã Phổng Lái", "Xã Phổng Lăng", "Xã Phổng Lập", "Xã Pú Đao", "Xã Pú Nhung", "Xã Pú Xi", "Xã Tà Hừa", "Xã Tà Xùa"];
        for (var by = 0; by < thuanChauWards.length; by++) {
            var option = document.createElement("option");
            option.text = thuanChauWards[by];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vân Hồ") {
        var vanHoWards = ["Thị trấn Vân Hồ", "Xã Hồng Ngài", "Xã Làng Chếu", "Xã Lềnh Phình", "Xã Mường Men", "Xã Quang Minh", "Xã Tân Xuân", "Xã Tân Xuân", "Xã Tân Xuân", "Xã Viêng Lán", "Xã Xuân Nha"];
        for (var bz = 0; bz < vanHoWards.length; bz++) {
            var option = document.createElement("option");
            option.text = vanHoWards[bz];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Châu") {
        var yenChauWards = ["Thị trấn Yên Châu", "Xã Chiềng Đông", "Xã Chiềng Hặc", "Xã Chiềng Khoi", "Xã Chiềng On", "Xã Chiềng Pằn", "Xã Chiềng Sàng", "Xã Chiềng Tương", "Xã Đa Phước", "Xã Hòa Chấn", "Xã Hua Thanh", "Xã Lóng Phiêng", "Xã Mường Lựm", "Xã Mường Tùng", "Xã Phiêng Khoài", "Xã Phiêng Khoài", "Xã Sập Sa"];
        for (var ca = 0; ca < yenChauWards.length; ca++) {
            var option = document.createElement("option");
            option.text = yenChauWards[ca];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Sơn La") {
        var sonLaCityWards = ["Phường Chiềng An", "Phường Chiềng Cơi", "Phường Chiềng Sinh", "Phường Chiềng Lề", "Phường Chiềng Ngần", "Phường Quyết Thắng", "Phường Quyết Tâm", "Phường Quyết Chiến", "Phường Quyết Tiến", "Phường Quyết Phát", "Phường Quyết Thắng", "Xã Chiềng Cọ", "Xã Chiềng Hắc", "Xã Chiềng Mung", "Xã Chiềng Sung", "Xã Mường Cai", "Xã Mường Tranh"];
        for (var cb = 0; cb < sonLaCityWards.length; cb++) {
            var option = document.createElement("option");
            option.text = sonLaCityWards[cb];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bá Thước") {
        var baThuocWards = ["Thị trấn Hố Hô", "Xã Bắc Sơn", "Xã Bá Thước", "Xã Bình Lương", "Xã Hồng Bạch", "Xã Lũng Cao", "Xã Lũng Niêm", "Xã Lý Quốc", "Xã Minh Hóa", "Xã Phú Định", "Xã Phúc Lợi", "Xã Phúc Trạch", "Xã Tân Lập", "Xã Tân Lĩnh", "Xã Tân Long", "Xã Tân Thành", "Xã Tân Xa", "Xã Thạch Bình", "Xã Thạch Châu", "Xã Thạch Kim", "Xã Thạch Liên", "Xã Thạch Môn", "Xã Thạch Tân", "Xã Thành An", "Xã Thành Công", "Xã Thành Hưng", "Xã Thành Long", "Xã Thành Minh", "Xã Thành Mỹ", "Xã Thành Tâm", "Xã Thành Thọ", "Xã Thành Tiến", "Xã Thành Trực", "Xã Thành Vân", "Xã Thành Vinh", "Xã Thành Yên", "Xã Vạn Lộc", "Xã Vạn Thủy", "Xã Yên Kiện"];
        for (var cc = 0; cc < baThuocWards.length; cc++) {
            var option = document.createElement("option");
            option.text = baThuocWards[cc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cẩm Thủy") {
        var camThuyWards = ["Thị trấn Hồi Xuân", "Xã An Dương", "Xã Bắc Lương", "Xã Bến Thủy", "Xã Cẩm Dương", "Xã Cẩm Hải", "Xã Cẩm Hùng", "Xã Cẩm Lạc", "Xã Cẩm Lĩnh", "Xã Cẩm Lộc", "Xã Cẩm Nhượng", "Xã Cẩm Phú", "Xã Cẩm Quý", "Xã Cẩm Sơn", "Xã Cẩm Tâm", "Xã Cẩm Tân", "Xã Cẩm Thạch", "Xã Cẩm Thành", "Xã Cẩm Tú", "Xã Cẩm Vân", "Xã Cẩm Yến", "Xã Đồng Lương", "Xã Hà Lương", "Xã Hữu Lập", "Xã Hữu Liên", "Xã Hữu Trung", "Xã Hữu Xuân", "Xã Lương Hoà", "Xã Lương Hồng", "Xã Phú Lâm", "Xã Phú Sơn", "Xã Phú Xuân", "Xã Tân Lâm", "Xã Tân Liên", "Xã Tân Trường", "Xã Thanh Hà", "Xã Thanh Thủy", "Xã Thanh Xá", "Xã Thượng Lâm", "Xã Xuân Lam"];
        for (var cd = 0; cd < camThuyWards.length; cd++) {
            var option = document.createElement("option");
            option.text = camThuyWards[cd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đông Sơn") {
        var dongSonWards = ["Thị trấn Quảng Xương", "Xã Bắc Sơn", "Xã Bảo Đài", "Xã Bảo Hưng", "Xã Bảo Khê", "Xã Bảo Lý", "Xã Bảo Thành", "Xã Bảo Vinh", "Xã Cát Vân", "Xã Đồng Trung", "Xã Đồng Văn", "Xã Hương Trạch", "Xã Tân Độ", "Xã Thành Lộc", "Xã Thành Trực", "Xã Thọ Sơn", "Xã Trung Sơn"];
        for (var ce = 0; ce < dongSonWards.length; ce++) {
            var option = document.createElement("option");
            option.text = dongSonWards[ce];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hà Trung") {
        var haTrungWards = ["Thị trấn Hà Trung", "Xã Bắc Trung", "Xã Bảo Lý", "Xã Châu Lộc", "Xã Đại Nghĩa", "Xã Đại Thịnh", "Xã Đông Lĩnh", "Xã Đông Tân", "Xã Hòa Lộc", "Xã Hợp Lý", "Xã Hợp Thành", "Xã Hùng Tiến", "Xã Hương Giang", "Xã Hương Sơn", "Xã Nga Phú", "Xã Tây Lĩnh", "Xã Tây Lộc", "Xã Tây Sơn", "Xã Thọ Lộc", "Xã Tiến Lộc", "Xã Xuân Hội"];
        for (var cf = 0; cf < haTrungWards.length; cf++) {
            var option = document.createElement("option");
            option.text = haTrungWards[cf];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hậu Lộc") {
        var hauLocWards = ["Thị trấn Hậu Lộc", "Xã Đồng Lộc", "Xã Hà Lộc", "Xã Hòa Lộc", "Xã Liên Lộc", "Xã Phong Lộc", "Xã Thành Lộc", "Xã Tiến Lộc", "Xã Triệu Lộc", "Xã Tuy Lộc"];
        for (var cg = 0; cg < hauLocWards.length; cg++) {
            var option = document.createElement("option");
            option.text = hauLocWards[cg];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hoằng Hóa") {
        var hoangHoaWards = ["Thị trấn Hoằng Hóa", "Xã Đạo Lý", "Xã Đức Lý", "Xã Hậu Lý", "Xã Hòa Lý", "Xã Hùng Lý", "Xã Mã Lý", "Xã Ngọc Lý", "Xã Phong Lý", "Xã Sơn Lý", "Xã Tân Lý", "Xã Tiến Lý", "Xã Văn Lý", "Xã Xuân Lý"];
        for (var ch = 0; ch < hoangHoaWards.length; ch++) {
            var option = document.createElement("option");
            option.text = hoangHoaWards[ch];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lang Chánh") {
        var langChanhWards = ["Thị trấn Lang Chánh", "Xã Bắc Sơn", "Xã Bảo Khê", "Xã Cát Tân", "Xã Đồng Văn", "Xã Giao An", "Xã Giao Thiện", "Xã Khánh Sơn", "Xã Lạng Sơn", "Xã Quang Tiến", "Xã Tân Phúc", "Xã Thái Bình", "Xã Trung Tâm", "Xã Xuân Lập", "Xã Xuân Minh", "Xã Xuân Tín"];
        for (var ci = 0; ci < langChanhWards.length; ci++) {
            var option = document.createElement("option");
            option.text = langChanhWards[ci];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường Lát") {
        var muongLatWards = ["Thị trấn Mường Lát", "Xã Phong Thịnh", "Xã Quang Chiểu", "Xã Quang Kim", "Xã Quang Liên", "Xã Quang Phong", "Xã Quang Xuân", "Xã Tân Xã", "Xã Thanh Xuân", "Xã Trung Thành", "Xã Trường Xuân"];
        for (var cj = 0; cj < muongLatWards.length; cj++) {
            var option = document.createElement("option");
            option.text = muongLatWards[cj];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nga Sơn") {
        var ngaSonWards = ["Thị trấn Ba Đình", "Xã Nga Điền", "Xã Nga Giáp", "Xã Nga Hải", "Xã Nga Hưng", "Xã Nga Liên", "Xã Nga Lĩnh", "Xã Nga Mỹ", "Xã Nga Nghĩa", "Xã Nga Nhân", "Xã Nga Phú", "Xã Nga Sơn", "Xã Nga Tân", "Xã Nga Thanh", "Xã Nga Thành", "Xã Nga Thái", "Xã Nga Thắng", "Xã Nga Thủy", "Xã Nga Tiến", "Xã Nga Trung", "Xã Nga Trường", "Xã Nga Văn", "Xã Nga Vịnh"];
        for (var ck = 0; ck < ngaSonWards.length; ck++) {
            var option = document.createElement("option");
            option.text = ngaSonWards[ck];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Ngọc Lặc") {
        var ngocLacWards = ["Thị trấn Ngọc Lặc", "Xã Cao Ngọc", "Xã Cao Thịnh", "Xã Đồng Thịnh", "Xã Kiên Thọ", "Xã Lam Sơn", "Xã Lộc Thịnh", "Xã Minh Sơn", "Xã Minh Tiến", "Xã Mỹ Tân", "Xã Ngọc Liên", "Xã Ngọc Sơn", "Xã Ngọc Trung", "Xã Phúc Thịnh", "Xã Phùng Thịnh", "Xã Quang Trung", "Xã Thạch Lập", "Xã Thúy Sơn", "Xã Trung Sơn", "Xã Trường Sơn", "Xã Vân Âm", "Xã Xuân Sơn"];
        for (var cl = 0; cl < ngocLacWards.length; cl++) {
            var option = document.createElement("option");
            option.text = ngocLacWards[cl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Như Thanh") {
        var nhuThanhWards = ["Thị trấn Hà Bắc", "Xã Bảo Thịnh", "Xã Hà Giang", "Xã Hà Hộc", "Xã Hà Lĩnh", "Xã Hà Long", "Xã Hà Phú", "Xã Hà Sơn", "Xã Hà Thái", "Xã Hà Vinh", "Xã Hòa Bình", "Xã Hòa Sơn", "Xã Hòa Thành", "Xã Hòa Trị", "Xã Hưng Thành", "Xã Minh Lương", "Xã Minh Sơn", "Xã Nga Phượng", "Xã Quang Hòa", "Xã Quang Trung", "Xã Quang Xuân", "Xã Sơn Lương", "Xã Thành Sơn", "Xã Thanh Sơn", "Xã Thịnh Minh", "Xã Xuân Áng"];
        for (var cm = 0; cm < nhuThanhWards.length; cm++) {
            var option = document.createElement("option");
            option.text = nhuThanhWards[cm];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Như Xuân") {
        var nhuXuanWards = ["Thị trấn Phú Thượng", "Xã Cao Dương", "Xã Cao Thắng", "Xã Cao Xá", "Xã Đồng Xuân", "Xã Gia Phú", "Xã Minh Xuân", "Xã Nam Xuân", "Xã Ngọc Xuân", "Xã Phượng Xuân", "Xã Tân Xuân", "Xã Thanh Xuân", "Xã Thượng Xuân", "Xã Tiến Xuân", "Xã Trường Xuân", "Xã Văn Xuân", "Xã Võ Xu", "Xã Xuân Khê", "Xã Xuân Phong", "Xã Xuân Tường"];
        for (var cn = 0; cn < nhuXuanWards.length; cn++) {
            var option = document.createElement("option");
            option.text = nhuXuanWards[cn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nông Cống") {
        var nongCongWards = ["Thị trấn Nông Cống", "Xã Công Chính", "Xã Công Liêm", "Xã Công Lý", "Xã Công Mỹ", "Xã Công Tiến", "Xã Công Trung", "Xã Công Tâm", "Xã Công Thành", "Xã Công Thắng", "Xã Công Thịnh", "Xã Công Vinh", "Xã Công Yên", "Xã Hoàng Giang", "Xã Hoàng Sơn", "Xã Hoàng Thanh", "Xã Hoàng Tiến", "Xã Hoàng Trinh", "Xã Hùng Tiến", "Xã Tân Phúc", "Xã Tân Thọ", "Xã Tân Tiến"];
        for (var co = 0; co < nongCongWards.length; co++) {
            var option = document.createElement("option");
            option.text = nongCongWards[co];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quan Hóa") {
        var quanHoaWards = ["Thị trấn Quan Hóa", "Xã Hồi Xuân", "Xã Thành Sơn", "Xã Trung Sơn", "Xã Trung Thành", "Xã Trung Tiến", "Xã Trung Xuân", "Xã Xuân Phú"];
        for (var cp = 0; cp < quanHoaWards.length; cp++) {
            var option = document.createElement("option");
            option.text = quanHoaWards[cp];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quan Sơn") {
        var quanSonWards = ["Thị trấn Quan Sơn", "Xã Công Bằng", "Xã Công Chính", "Xã Công Liêm", "Xã Công Lý", "Xã Công Mỹ", "Xã Công Tiến", "Xã Công Trung", "Xã Công Thành", "Xã Công Thắng", "Xã Công Thịnh", "Xã Công Vinh", "Xã Công Yên", "Xã Đồng Trung", "Xã Hoàng Giang", "Xã Hoàng Sơn", "Xã Hoàng Thành", "Xã Hoàng Tiến", "Xã Hoàng Trinh", "Xã Hùng Tiến", "Xã Tân Phúc", "Xã Tân Thọ", "Xã Tân Tiến"];
        for (var cq = 0; cq < quanSonWards.length; cq++) {
            var option = document.createElement("option");
            option.text = quanSonWards[cq];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quảng Xương") {
        var quangXuongWards = ["Thị trấn Tân Phong", "Xã Bắc Lương", "Xã Bắc Ninh", "Xã Bảo Thạnh", "Xã Đồng Thành", "Xã Hậu Thành", "Xã Hồng Thành", "Xã Khánh Hậu", "Xã Nam Thành", "Xã Phú Thành", "Xã Phúc Thành", "Xã Tiến Thành", "Xã Văn Thành"];
        for (var cr = 0; cr < quangXuongWards.length; cr++) {
            var option = document.createElement("option");
            option.text = quangXuongWards[cr];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thạch Thành") {
        var thachThanhWards = ["Thị trấn Hà Hồi", "Xã Đồng Lương", "Xã Hậu Bổng", "Xã Liên Minh", "Xã Phùng Giáo", "Xã Tân Phúc", "Xã Thạch Định", "Xã Thạch Hợp", "Xã Thạch Hương", "Xã Thạch Kênh", "Xã Thạch Long", "Xã Thạch Môn", "Xã Thạch Sơn", "Xã Thạch Trị", "Xã Thạch Văn", "Xã Thạch Vĩnh", "Xã Thạch Xuân", "Xã Thạch Yên", "Xã Tiến Thủy", "Xã Xuân Bắc", "Xã Xuân Châu", "Xã Xuân Giang", "Xã Xuân Hòa", "Xã Xuân Hồng", "Xã Xuân Thành", "Xã Xuân Thủy", "Xã Xuân Trị"];
        for (var cs = 0; cs < thachThanhWards.length; cs++) {
            var option = document.createElement("option");
            option.text = thachThanhWards[cs];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thiệu Hóa") {
        var thieuHoaWards = ["Thị trấn Hoằng Hợp", "Xã Đồng Lưu", "Xã Hoằng Đại", "Xã Hoằng Đạo", "Xã Hoằng Đông", "Xã Hoằng Thanh", "Xã Hoằng Lộc", "Xã Hoằng Trạch", "Xã Hoằng Phượng", "Xã Hoằng Tân", "Xã Hoằng Trường", "Xã Hoằng Quang", "Xã Hoằng Kim", "Xã Hoằng Cát", "Xã Hoằng Xuyên", "Xã Hoằng Phụ", "Xã Hoằng Quỳ", "Xã Hoằng Hợp", "Xã Hoằng Phong", "Xã Hoằng Châu", "Xã Hoằng Tân", "Xã Hoằng Thắng", "Xã Hoằng Thịnh", "Xã Hoằng Minh", "Xã Hoằng Phú", "Xã Hoằng Châu", "Xã Hoằng Vinh", "Xã Hoằng Chương", "Xã Hoằng Hà", "Xã Hoằng Giang", "Xã Hoằng Hải", "Xã Hoằng Ngọc", "Xã Hoằng Khánh", "Xã Hoằng Lưu", "Xã Hoằng Phong", "Xã Hoằng Sơn", "Xã Hoằng Thái"];
        for (var ct = 0; ct < thieuHoaWards.length; ct++) {
            var option = document.createElement("option");
            option.text = thieuHoaWards[ct];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thọ Xuân") {
        var thoXuanWards = ["Thị trấn Thọ Xuân", "Xã Bắc Lương", "Xã Bảo Nam", "Xã Bảo Thành", "Xã Nam Giang", "Xã Nam Hòa", "Xã Nam Thanh", "Xã Nam Xuân", "Xã Phú Thành", "Xã Thọ Diên", "Xã Thọ Lâm", "Xã Thọ Lập", "Xã Thọ Minh", "Xã Thọ Ngọc", "Xã Thọ Sơn", "Xã Thọ Tiến", "Xã Thọ Xuân", "Xã Thọ Xương"];
        for (var cu = 0; cu < thoXuanWards.length; cu++) {
            var option = document.createElement("option");
            option.text = thoXuanWards[cu];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thường Xuân") {
        var thuongXuanWards = ["Thị trấn Thường Xuân", "Xã Bát Mọt", "Xã Xuân Chân", "Xã Xuân Cẩm", "Xã Xuân Canh", "Xã Xuân Chinh", "Xã Xuân Đình", "Xã Xuân Hòa", "Xã Xuân Hưng", "Xã Xuân Lai", "Xã Xuân Lam", "Xã Xuân Lập", "Xã Xuân Minh", "Xã Xuân Phong", "Xã Xuân Quang", "Xã Xuân Sinh", "Xã Xuân Tân", "Xã Xuân Thắng", "Xã Xuân Trường", "Xã Xuân Vinh", "Xã Xuân Văn"];
        for (var cv = 0; cv < thuongXuanWards.length; cv++) {
            var option = document.createElement("option");
            option.text = thuongXuanWards[cv];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tĩnh Gia") {
        var tinhGiaWards = ["Thị trấn Tĩnh Gia", "Xã An Hải", "Xã Đông Hải", "Xã Đông Hoàng", "Xã Đông Hòa", "Xã Đông Hưng", "Xã Đông Hương", "Xã Đông Lĩnh", "Xã Đông Long", "Xã Đông Minh", "Xã Đông Phú", "Xã Đông Quí", "Xã Đông Sơn", "Xã Đông Tiến", "Xã Đông Trà", "Xã Đông Văn", "Xã Tân Dân", "Xã Tân Hải", "Xã Tân Kiên", "Xã Tân Linh", "Xã Tân Lĩnh", "Xã Tân Phú", "Xã Tân Thành", "Xã Tân Trường", "Xã Tây Hải", "Xã Tây Hưng", "Xã Tây Phú", "Xã Tây Sơn", "Xã Tây Tiến", "Xã Tây Trường"];
        for (var cw = 0; cw < tinhGiaWards.length; cw++) {
            var option = document.createElement("option");
            option.text = tinhGiaWards[cw];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Triệu Sơn") {
        var trieuSonWards = ["Thị trấn Triệu Sơn", "Xã Thọ Sơn", "Xã Thọ Bình", "Xã Thọ Cường", "Xã Thọ Dân", "Xã Thọ Điền", "Xã Thọ Hải", "Xã Thọ Lâm", "Xã Thọ Lập", "Xã Thọ Lộc", "Xã Thọ Minh", "Xã Thọ Ngọc", "Xã Thọ Phú", "Xã Thọ Sơn", "Xã Thọ Thắng", "Xã Thọ Tiến", "Xã Thọ Vực", "Xã Thọ Xuân", "Xã Thọ Thịnh", "Xã Thọ Lễ", "Xã Thọ Hòa", "Xã Thọ Hoàng"];
        for (var cx = 0; cx < trieuSonWards.length; cx++) {
            var option = document.createElement("option");
            option.text = trieuSonWards[cx];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vĩnh Lộc") {
        var vinhLocWards = ["Thị trấn Vĩnh Lộc", "Xã Đồng Lộc", "Xã Đức Lộc", "Xã Hòa Lộc", "Xã Hùng Lộc", "Xã Hưng Lộc", "Xã Lạc Lộc", "Xã Lâm Lộc", "Xã Liên Lộc", "Xã Mai Lộc", "Xã Mỹ Lộc", "Xã Quang Lộc", "Xã Tân Lộc", "Xã Thịnh Lộc", "Xã Thủy Lộc", "Xã Tiến Lộc", "Xã Trung Lộc", "Xã Văn Lộc", "Xã Xuân Lộc"];
        for (var cy = 0; cy < vinhLocWards.length; cy++) {
            var option = document.createElement("option");
            option.text = vinhLocWards[cy];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Định") {
        var yenDinhWards = ["Thị trấn Yên Định", "Xã Ái Dương", "Xã Diên Lãm", "Xã Diên Lãm", "Xã Diên Đồng", "Xã Diên Hòa", "Xã Diên Hồng", "Xã Diên Phú", "Xã Diên Thái", "Xã Diên Thọ", "Xã Diên Toàn", "Xã Diên Xuân", "Xã Diên Yên", "Xã Minh Đức", "Xã Phú Phong", "Xã Thanh Sơn", "Xã Thanh Tân", "Xã Trường Sơn", "Xã Trường Thọ"];
        for (var cz = 0; cz < yenDinhWards.length; cz++) {
            var option = document.createElement("option");
            option.text = yenDinhWards[cz];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Thanh Hóa") {
        var thanhHoaWards = ["Phường Bà Triệu", "Phường Ba Đình", "Phường Điện Biên", "Phường Đông Cương", "Phường Đông Hương", "Phường Đông Sơn", "Phường Đông Tân", "Phường Hàm Rồng", "Phường Lam Sơn", "Phường Lê Lợi", "Phường Minh Khai", "Phường Nam Ngạn", "Phường Ngọc Trạo", "Phường Phú Sơn", "Phường Quảng Cư", "Phường Quảng Hưng", "Phường Quảng Thành", "Phường Quảng Thịnh", "Phường Tân Sơn", "Phường Thành Công", "Phường Thiệu Dương", "Phường Thiệu Giao", "Phường Thiệu Khánh", "Phường Thiệu Vân", "Phường Trường Thi", "Phường Văn Miếu", "Phường Vạn Bảo", "Phường Đông Vinh", "Phường Đông Vương", "Phường Đông Hải", "Phường Đông Thọ", "Phường Đông Phong"];
        for (var da = 0; da < thanhHoaWards.length; da++) {
            var option = document.createElement("option");
            option.text = thanhHoaWards[da];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Bỉm Sơn") {
        var bimSonWards = ["Phường Bắc Sơn", "Phường Lam Sơn", "Phường Nam Sơn", "Phường Quang Minh", "Phường Trung Sơn"];
        for (var db = 0; db < bimSonWards.length; db++) {
            var option = document.createElement("option");
            option.text = bimSonWards[db];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Sầm Sơn") {
        var samSonWards = ["Phường Bắc Sơn", "Phường Đồng Văn", "Phường Quảng Cát", "Phường Quảng Tiến", "Phường Quảng Tiến", "Phường Trung Sơn"];
        for (var dc = 0; dc < samSonWards.length; dc++) {
            var option = document.createElement("option");
            option.text = samSonWards[dc];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Đông Hưng") {
        var dongHungWards = ["Thị trấn Đông Hưng", "Xã An Châu", "Xã Đô Lương", "Xã Đông Phương", "Xã Đông Sơn", "Xã Đông Tân", "Xã Đông Vinh", "Xã Hợp Thịnh", "Xã Hưng Đông", "Xã Kim Định", "Xã Liên Hiệp", "Xã Nam Chính", "Xã Nam Cường", "Xã Nam Đồng", "Xã Phong Châu", "Xã Tân Động", "Xã Tân Hiệp", "Xã Tân Lợi", "Xã Tây Giang", "Xã Tây Hồng", "Xã Tây Sơn", "Xã Trung An", "Xã Trung Hà", "Xã Trung Hải", "Xã Trung Hiệp", "Xã Trung Hòa", "Xã Trung Hưng", "Xã Trung Nguyên"];
        for (var dh = 0; dh < dongHungWards.length; dh++) {
            var option = document.createElement("option");
            option.text = dongHungWards[dh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hưng Hà") {
        var hungHaWards = ["Thị trấn Hưng Hà", "Xã Chí Hòa", "Xã Điềm Mặc", "Xã Đông Luật", "Xã Đông Thanh", "Xã Hòa Tiến", "Xã Hồng Lĩnh", "Xã Hồng Minh", "Xã Hồng Việt", "Xã Kim Chung", "Xã Tân Tiến", "Xã Tây Đức", "Xã Tây Hồng", "Xã Tây Lương", "Xã Tây Ninh", "Xã Tây Phong", "Xã Tây Sơn", "Xã Tây Tiến", "Xã Thái Hòa", "Xã Thái Hồng", "Xã Thái Minh", "Xã Thái Thành", "Xã Thái Thịnh", "Xã Thái Thọ", "Xã Thái Tiến", "Xã Thái Xuyên", "Xã Thái Đức"];
        for (var hh = 0; hh < hungHaWards.length; hh++) {
            var option = document.createElement("option");
            option.text = hungHaWards[hh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Kiến Xương") {
        var kienXuongWards = ["Thị trấn Kiến Xương", "Xã An Bình", "Xã An Thành", "Xã Bình Thành", "Xã Định Bình", "Xã Đô Thành", "Xã Hồng Thành", "Xã Hùng Thành", "Xã Liên Bảo", "Xã Nhân Bình", "Xã Quang Bình", "Xã Tân Bình", "Xã Tân Danh", "Xã Thanh Bình", "Xã Thanh Hà", "Xã Thanh Hồng", "Xã Thanh Thịnh", "Xã Thanh Thủy", "Xã Thanh Đồng"];
        for (var kx = 0; kx < kienXuongWards.length; kx++) {
            var option = document.createElement("option");
            option.text = kienXuongWards[kx];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quỳnh Phụ") {
        var quynhPhuWards = ["Thị trấn Hải Hưng", "Xã An Bài", "Xã An Bình", "Xã An Hòa", "Xã An Hưng", "Xã An Lễ", "Xã An Ninh", "Xã An Quí", "Xã An Tràng", "Xã An Vũ", "Xã An Đồng", "Xã An Đức", "Xã An Định", "Xã An Hòa", "Xã An Hội", "Xã An Lạc", "Xã An Minh", "Xã An Ninh", "Xã An Phong", "Xã An Phú", "Xã An Thái", "Xã An Thắng", "Xã An Thanh", "Xã An Thọ", "Xã An Tiến", "Xã An Trang", "Xã An Vinh", "Xã An Vĩnh"];
        for (var qp = 0; qp < quynhPhuWards.length; qp++) {
            var option = document.createElement("option");
            option.text = quynhPhuWards[qp];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thái Thụy") {
        var thaiThuyWards = ["Thị trấn Thái Thụy", "Xã Đồng Thái", "Xã Hòa Đồng", "Xã Liên Thái", "Xã Lưu Đề", "Xã Minh Đức", "Xã Phú Đông", "Xã Tân Phú", "Xã Thái Hòa", "Xã Thái Nguyên", "Xã Thái Phú", "Xã Thái Thọ", "Xã Thái Thượng", "Xã Thái Thành", "Xã Thái Thịnh", "Xã Thái Thuận", "Xã Thái Thắng", "Xã Thái Xuân", "Xã Thái Đô"];
        for (var tt = 0; tt < thaiThuyWards.length; tt++) {
            var option = document.createElement("option");
            option.text = thaiThuyWards[tt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiền Hải") {
        var tienHaiWards = ["Thị trấn Tiền Hải", "Xã Bắc Hải", "Xã Nam Hải", "Xã Nguyên Bình", "Xã Phương Bình", "Xã Quảng Thành", "Xã Tây Hải", "Xã Đông Hải", "Xã Đông Ngũ", "Xã Đông Phong", "Xã Đông Phương", "Xã Đông Quí", "Xã Đông Trà", "Xã Đông Trung", "Xã Đông Vinh", "Xã Tây Lương", "Xã Tây Phong", "Xã Tây Sơn", "Xã Tây Trà", "Xã Tây Trung"];
        for (var th = 0; th < tienHaiWards.length; th++) {
            var option = document.createElement("option");
            option.text = tienHaiWards[th];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vũ Thư") {
        var vuThuWards = ["Thị trấn Vũ Thư", "Xã Đa Lộc", "Xã Đồng Thanh", "Xã Dũng Nghĩa", "Xã Hiệp Hòa", "Xã Hiệp Sơn", "Xã Hòa Lạc", "Xã Hồng Lý", "Xã Hồng Phong", "Xã Hồng Thái", "Xã Minh Khai", "Xã Minh Lãng", "Xã Minh Quang", "Xã Minh Thắng", "Xã Minh Tiến", "Xã Minh Xuân", "Xã Nguyên Xá", "Xã Tân Hòa", "Xã Tân Lập", "Xã Tân Phong", "Xã Tân Thành", "Xã Thân Nghĩa", "Xã Thượng Hiền", "Xã Trung An", "Xã Trung Hòa", "Xã Trung Nghĩa", "Xã Trưng Vương", "Xã Việt Hùng", "Xã Vũ Đoài"];
        for (var tv = 0; tv < vuThuWards.length; tv++) {
            var option = document.createElement("option");
            option.text = vuThuWards[tv];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Thái Bình") {
        var thaiBinhWards = ["Phường Bồ Xuyên", "Phường Đề Thám", "Phường Hàm Nghi", "Phường Hoàng Diệu", "Phường Kỳ Bá", "Phường Lê Hồng Phong", "Phường Nam Phong", "Phường Quang Trung", "Phường Thịnh Lang", "Phường Tiền Phong", "Phường Trần Hưng Đạo", "Phường Vũ Chính", "Xã Thái Bình", "Xã Tiền Tiến", "Xã Đông Cơ", "Xã Đông Hòa", "Xã Đông Mỹ", "Xã Đông Thọ", "Xã Hồ", "Xã Vũ Lăng", "Xã Vũ Lễ"];
        for (var tb = 0; tb < thaiBinhWards.length; tb++) {
            var option = document.createElement("option");
            option.text = thaiBinhWards[tb];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Đại Từ") {
        var daiTuWards = ["Thị trấn Đại Từ", "Xã Bản Ngoại", "Xã Bình Thuận", "Xã Cát Nê", "Xã Đồng Liên", "Xã Đức Lương", "Xã Hà Thượng", "Xã Hoàng Nông", "Xã Hợp Thành", "Xã Khải Xuân", "Xã Lâm Xa", "Xã Minh Tiến", "Xã Na Mao", "Xã Phúc Lương", "Xã Phúc Tường", "Xã Phúc Xá", "Xã Quân Chu", "Xã Quân Chu", "Xã Quân Chu", "Xã Quân Chu", "Xã Quân Chu", "Xã Tân Linh", "Xã Tiến Nông", "Xã Vạn Thọ", "Xã Văn Yên", "Xã Yên Lập"];
        for (var dt = 0; dt < daiTuWards.length; dt++) {
            var option = document.createElement("option");
            option.text = daiTuWards[dt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Định Hóa") {
        var dinhHoaWards = ["Thị trấn Cổ Lễ", "Xã Bạch Xa", "Xã Bằng Cốc", "Xã Đỗ Sơn", "Xã Đỗ Xuyên", "Xã Hà Lương", "Xã Hải Lựu", "Xã Hoàng Nông", "Xã Hợp Thành", "Xã Hùng Sơn", "Xã Kiên Thành", "Xã Lệ Xá", "Xã Minh Hòa", "Xã Minh Tiến", "Xã Ngọc Đồng", "Xã Phấn Mễ", "Xã Phú Thịnh", "Xã Phương Giao", "Xã Sơn Lư", "Xã Thanh Kiên", "Xã Thanh Miện", "Xã Thượng Cường", "Xã Tiến Xá", "Xã Trung Minh", "Xã Tứ Cường", "Xã Vạn Thọ", "Xã Vũ Lăng"];
        for (var dh = 0; dh < dinhHoaWards.length; dh++) {
            var option = document.createElement("option");
            option.text = dinhHoaWards[dh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đồng Hỷ") {
        var dongHyWards = ["Thị trấn Hòa Bình", "Xã Đạo Đức", "Xã Hồ Sơn", "Xã Hoàng Xá", "Xã Hợp Tiến", "Xã Khánh Cường", "Xã Lương Phú", "Xã Minh Lập", "Xã Nga My", "Xã Nhân Mục", "Xã Phú Thành", "Xã Quang Phong", "Xã Tân Đức", "Xã Thái Sơn", "Xã Thanh Thủy", "Xã Thuỵ Sơn", "Xã Tiến Đức", "Xã Tứ Quận", "Xã Vân Đồn", "Xã Vũ Lâm"];
        for (var dh = 0; dh < dongHyWards.length; dh++) {
            var option = document.createElement("option");
            option.text = dongHyWards[dh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phổ Yên") {
        var phoYenWards = ["Thị trấn Đồng Tiến", "Xã Bằng Cốc", "Xã Công Đa", "Xã Đạo Viện", "Xã Hoàng Khai", "Xã Hợp Hòa", "Xã Hùng An", "Xã Hùng Lợi", "Xã Hùng Sơn", "Xã Phúc Khánh", "Xã Tân Tiến", "Xã Tân Yên", "Xã Thái Bình", "Xã Tiến Phú", "Xã Vũ Thịnh", "Xã Yên Lỗ"];
        for (var py = 0; py < phoYenWards.length; py++) {
            var option = document.createElement("option");
            option.text = phoYenWards[py];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Bình") {
        var phuBinhWards = ["Thị trấn Bảo Lý", "Xã Bảo Lý", "Xã Đại Hà", "Xã Đại Thành", "Xã Đan Hà", "Xã Đông Hà", "Xã Đông Thành", "Xã Đồng Liên", "Xã Đức Lương", "Xã Hà Thanh", "Xã Hồng Tiến", "Xã Hồng Trị", "Xã Hợp Hòa", "Xã Hợp Thành", "Xã Hợp Thịnh", "Xã Kiến Thiết", "Xã Kim Sơn", "Xã Lương Thành", "Xã Minh Tân", "Xã Phú Thành", "Xã Quang Thành", "Xã Tân Thành", "Xã Thái Hòa", "Xã Thanh Lâm", "Xã Thượng Lâm", "Xã Tiên Phong", "Xã Trung Hà", "Xã Trung Thành", "Xã Vạn Thọ", "Xã Vũ Linh"];
        for (var pb = 0; pb < phuBinhWards.length; pb++) {
            var option = document.createElement("option");
            option.text = phuBinhWards[pb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Lương") {
        var phuLuongWards = ["Thị trấn Xuân Dương", "Xã An Bá", "Xã An Châu", "Xã An Lạc", "Xã An Lập", "Xã An Lợi", "Xã An Mỹ", "Xã An Nội", "Xã An Phú", "Xã An Sơn", "Xã An Thái", "Xã An Vinh", "Xã Hòa Sơn", "Xã Hồng Lạc", "Xã Lương Hoà", "Xã Thanh Hòa", "Xã Tiên Hội", "Xã Tử Đà", "Xã Vạn Thọ"];
        for (var pl = 0; pl < phuLuongWards.length; pl++) {
            var option = document.createElement("option");
            option.text = phuLuongWards[pl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Võ Nhai") {
        var voNhaiWards = ["Thị trấn Thanh Long", "Xã Bình Long", "Xã Các Sơn", "Xã Cao Sơn", "Xã Hà Vị", "Xã Lương Sơn", "Xã Lương Thành", "Xã Quang Sơn", "Xã Sơn Hà", "Xã Sơn Hùng", "Xã Sơn Lập", "Xã Sơn Lộ", "Xã Thượng Cường", "Xã Thượng Long", "Xã Trường Sinh", "Xã Trường Sơn", "Xã Vạn Thủy"];
        for (var vn = 0; vn < voNhaiWards.length; vn++) {
            var option = document.createElement("option");
            option.text = voNhaiWards[vn];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Sông Công") {
        var songCongWards = ["Phường Cải Đan", "Phường Đồng Lạc", "Phường Hà Lầm", "Phường Phố Cò", "Phường Phố Đôi", "Phường Phố Hồng", "Phường Phú Xá", "Phường Tân Quang", "Xã Bách Quang", "Xã Hương Sơn", "Xã Hương Đô", "Xã Lương Sơn", "Xã Tân Lập", "Xã Tân Mỹ", "Xã Tân Thành", "Xã Tân Thịnh", "Xã Vân Sơn", "Xã Đông Sơn", "Xã Đồng Xá"];
        for (var sc = 0; sc < songCongWards.length; sc++) {
            var option = document.createElement("option");
            option.text = songCongWards[sc];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Thái Nguyên") {
        var thaiNguyenWards = ["Phường Cam Giá", "Phường Đồng Bẩm", "Phường Gia Sàng", "Phường Hương Sơn", "Phường Phú Xá", "Phường Phúc Thành", "Phường Quán Triều", "Phường Quang Trung", "Phường Quang Vinh", "Phường Tân Lập", "Phường Tân Thành", "Phường Thịnh Đán", "Phường Trung Thành", "Phường Tích Lương", "Phường Võ Cường", "Phường Vạn Thắng", "Phường Đồng Quang", "Xã Phan Đình Phùng", "Xã Quang Tiến", "Xã Tân Long", "Xã Tân Thịnh", "Xã Tân Thành", "Xã Tân Thông", "Xã Thịnh Đán", "Xã Trung Thành"];
        for (var tn = 0; tn < thaiNguyenWards.length; tn++) {
            var option = document.createElement("option");
            option.text = thaiNguyenWards[tn];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Đại Từ") {
        var daiTuWards = ["Thị trấn Đại Từ", "Xã Bản Ngoại", "Xã Bình Thuận", "Xã Cát Nê", "Xã Đồng Liên", "Xã Đức Lương", "Xã Hà Thượng", "Xã Hoàng Nông", "Xã Hợp Thành", "Xã Khải Xuân", "Xã Lâm Xa", "Xã Minh Tiến", "Xã Na Mao", "Xã Phúc Lương", "Xã Phúc Tường", "Xã Phúc Xá", "Xã Quân Chu", "Xã Quân Chu", "Xã Quân Chu", "Xã Quân Chu", "Xã Quân Chu", "Xã Tân Linh", "Xã Tiến Nông", "Xã Vạn Thọ", "Xã Văn Yên", "Xã Yên Lập"];
        for (var dt = 0; dt < daiTuWards.length; dt++) {
            var option = document.createElement("option");
            option.text = daiTuWards[dt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Định Hóa") {
        var dinhHoaWards = ["Thị trấn Cổ Lễ", "Xã Bạch Xa", "Xã Bằng Cốc", "Xã Đỗ Sơn", "Xã Đỗ Xuyên", "Xã Hà Lương", "Xã Hải Lựu", "Xã Hoàng Nông", "Xã Hợp Thành", "Xã Hùng Sơn", "Xã Kiên Thành", "Xã Lệ Xá", "Xã Minh Hòa", "Xã Minh Tiến", "Xã Ngọc Đồng", "Xã Phấn Mễ", "Xã Phú Thịnh", "Xã Phương Giao", "Xã Sơn Lư", "Xã Thanh Kiên", "Xã Thanh Miện", "Xã Thượng Cường", "Xã Tiến Xá", "Xã Trung Minh", "Xã Tứ Cường", "Xã Vạn Thọ", "Xã Vũ Lăng"];
        for (var dh = 0; dh < dinhHoaWards.length; dh++) {
            var option = document.createElement("option");
            option.text = dinhHoaWards[dh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đồng Hỷ") {
        var dongHyWards = ["Thị trấn Hòa Bình", "Xã Đạo Đức", "Xã Hồ Sơn", "Xã Hoàng Xá", "Xã Hợp Tiến", "Xã Khánh Cường", "Xã Lương Phú", "Xã Minh Lập", "Xã Nga My", "Xã Nhân Mục", "Xã Phú Thành", "Xã Quang Phong", "Xã Tân Đức", "Xã Thái Sơn", "Xã Thanh Thủy", "Xã Thuỵ Sơn", "Xã Tiến Đức", "Xã Tứ Quận", "Xã Vân Đồn", "Xã Vũ Lâm"];
        for (var dh = 0; dh < dongHyWards.length; dh++) {
            var option = document.createElement("option");
            option.text = dongHyWards[dh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phổ Yên") {
        var phoYenWards = ["Thị trấn Đồng Tiến", "Xã Bằng Cốc", "Xã Công Đa", "Xã Đạo Viện", "Xã Hoàng Khai", "Xã Hợp Hòa", "Xã Hùng An", "Xã Hùng Lợi", "Xã Hùng Sơn", "Xã Phúc Khánh", "Xã Tân Tiến", "Xã Tân Yên", "Xã Thái Bình", "Xã Tiến Phú", "Xã Vạn Thọ", "Xã Văn Thương", "Xã Yên Lỗ"];
        for (var py = 0; py < phoYenWards.length; py++) {
            var option = document.createElement("option");
            option.text = phoYenWards[py];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Bình") {
        var phuBinhWards = ["Thị trấn Bảo Lý", "Xã Bảo Lý", "Xã Đại Hà", "Xã Đại Thành", "Xã Đan Hà", "Xã Đông Hà", "Xã Đông Thành", "Xã Đồng Liên", "Xã Đức Lương", "Xã Hà Thanh", "Xã Hồng Tiến", "Xã Hồng Trị", "Xã Hợp Hòa", "Xã Hợp Thành", "Xã Hợp Thịnh", "Xã Kiến Thiết", "Xã Kim Sơn", "Xã Lương Thành", "Xã Minh Tân", "Xã Phú Thành", "Xã Quang Thành", "Xã Tân Thành", "Xã Thái Hòa", "Xã Thanh Lâm", "Xã Thượng Lâm", "Xã Tiên Phong", "Xã Trung Hà", "Xã Trung Thành", "Xã Vạn Thọ", "Xã Vũ Linh"];
        for (var pb = 0; pb < phuBinhWards.length; pb++) {
            var option = document.createElement("option");
            option.text = phuBinhWards[pb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Lương") {
        var phuLuongWards = ["Thị trấn Xuân Dương", "Xã An Bá", "Xã An Châu", "Xã An Lạc", "Xã An Lập", "Xã An Lợi", "Xã An Mỹ", "Xã An Nội", "Xã An Phú", "Xã An Sơn", "Xã An Thái", "Xã An Vinh", "Xã Hòa Sơn", "Xã Hồng Lạc", "Xã Lương Hoà", "Xã Thanh Hòa", "Xã Tiên Hội", "Xã Tử Đà", "Xã Vạn Thọ"];
        for (var pl = 0; pl < phuLuongWards.length; pl++) {
            var option = document.createElement("option");
            option.text = phuLuongWards[pl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Võ Nhai") {
        var voNhaiWards = ["Thị trấn Thanh Long", "Xã Bình Long", "Xã Các Sơn", "Xã Cao Sơn", "Xã Hà Vị", "Xã Lương Sơn", "Xã Lương Thành", "Xã Quang Sơn", "Xã Sơn Hà", "Xã Sơn Hùng", "Xã Sơn Lập", "Xã Sơn Lộ", "Xã Thượng Cường", "Xã Thượng Long", "Xã Trường Sinh", "Xã Trường Sơn", "Xã Vạn Thủy"];
        for (var vn = 0; vn < voNhaiWards.length; vn++) {
            var option = document.createElement("option");
            option.text = voNhaiWards[vn];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Sông Công") {
        var songCongWards = ["Phường Cải Đan", "Phường Đồng Lạc", "Phường Hà Lầm", "Phường Phố Cò", "Phường Phố Đôi", "Phường Phố Hồng", "Phường Phú Xá", "Phường Tân Quang", "Xã Bách Quang", "Xã Hương Sơn", "Xã Hương Đô", "Xã Lương Sơn", "Xã Tân Lập", "Xã Tân Mỹ", "Xã Tân Thành", "Xã Tân Thịnh", "Xã Vân Sơn", "Xã Đông Sơn", "Xã Đồng Xá"];
        for (var sc = 0; sc < songCongWards.length; sc++) {
            var option = document.createElement("option");
            option.text = songCongWards[sc];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Thái Nguyên") {
        var thaiNguyenWards = ["Phường Cam Giá", "Phường Đồng Bẩm", "Phường Gia Sàng", "Phường Hương Sơn", "Phường Phú Xá", "Phường Phúc Thành", "Phường Quán Triều", "Phường Quang Trung", "Phường Quang Vinh", "Phường Tân Lập", "Phường Tân Thành", "Phường Thịnh Đán", "Phường Trung Thành", "Phường Tích Lương", "Phường Võ Cường", "Phường Vạn Thắng", "Phường Đồng Quang", "Xã Phan Đình Phùng", "Xã Quang Tiến", "Xã Tân Long", "Xã Tân Thịnh", "Xã Tân Thành", "Xã Tân Thông", "Xã Thịnh Đán", "Xã Trung Thành"];
        for (var tn = 0; tn < thaiNguyenWards.length; tn++) {
            var option = document.createElement("option");
            option.text = thaiNguyenWards[tn];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện A Lưới") {
        var aLuoiWards = ["Thị trấn A Lưới", "Xã A Ngo", "Xã A Roàng", "Xã Đông Sơn", "Xã Hồng Bắc", "Xã Hồng Hạ", "Xã Hồng Kim", "Xã Hồng Thái", "Xã Hồng Thượng", "Xã Hồng Thủy", "Xã Hồng Trung", "Xã Hương Nguyên", "Xã Hương Phong", "Xã Hương Thủy", "Xã Hương Xuân", "Xã Lâm Đớt", "Xã Phú Vinh", "Xã Quảng Nhâm", "Xã Sơn Thủy", "Xã Trung Sơn"];
        for (var al = 0; al < aLuoiWards.length; al++) {
            var option = document.createElement("option");
            option.text = aLuoiWards[al];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hương Thủy") {
        var huongThuyWards = ["Thị trấn Hương Thủy", "Xã Bình Thành", "Xã Dương Hòa", "Xã Hà Đông", "Xã Hương Bình", "Xã Hương Chữ", "Xã Hương Đô", "Xã Hương Hữu", "Xã Hương Lâm", "Xã Hương Lộc", "Xã Hương Phú", "Xã Hương Thọ", "Xã Hương Toàn", "Xã Hương Vân", "Xã Hương Vinh", "Xã Thượng Lộ", "Xã Thượng Long", "Xã Thượng Trạch", "Xã Thượng Trạch", "Xã Thượng Trạch"];
        for (var ht = 0; ht < huongThuyWards.length; ht++) {
            var option = document.createElement("option");
            option.text = huongThuyWards[ht];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hương Trà") {
        var huongTraWards = ["Thị trấn Hương Trà", "Xã Hương An", "Xã Hương Bình", "Xã Hương Chữ", "Xã Hương Điền", "Xã Hương Giang", "Xã Hương Hồ", "Xã Hương Lộc", "Xã Hương Phong", "Xã Hương Thọ", "Xã Hương Thủy", "Xã Hương Toàn", "Xã Hương Vân", "Xã Hương Vinh", "Xã Hương Xuân", "Xã Thượng Lộ", "Xã Thượng Long", "Xã Thượng Trạch"];
        for (var htr = 0; htr < huongTraWards.length; htr++) {
            var option = document.createElement("option");
            option.text = huongTraWards[htr];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nam Đông") {
        var namDongWards = ["Thị trấn Khe Tre", "Xã Hương Bình", "Xã Hương Điền", "Xã Hương Hồ", "Xã Hương Phú", "Xã Hương Phong", "Xã Hương Thọ", "Xã Hương Toàn", "Xã Hương Vân", "Xã Hương Vinh", "Xã Thượng Lộ", "Xã Thượng Long", "Xã Thượng Trạch"];
        for (var nd = 0; nd < namDongWards.length; nd++) {
            var option = document.createElement("option");
            option.text = namDongWards[nd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phong Điền") {
        var phongDienWards = ["Thị trấn Phong Điền", "Xã Điền Hải", "Xã Điền Hòa", "Xã Điền Hồng", "Xã Điền Lộc", "Xã Điền Môn", "Xã Điền Phong", "Xã Điền Phước", "Xã Điền Thượng", "Xã Phong An", "Xã Phong Bình", "Xã Phong Chương", "Xã Phong Hải", "Xã Phong Hiền", "Xã Phong Hòa", "Xã Phong Mỹ", "Xã Phong Sơn", "Xã Phong Th", "Xã Phong Thu", "Xã Phong Xuân", "Xã Phong Xuân"];
        for (var pd = 0; pd < phongDienWards.length; pd++) {
            var option = document.createElement("option");
            option.text = phongDienWards[pd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Phú Lộc") {
        var phuLocWards = ["Thị trấn Lăng Cô", "Xã Lộc An", "Xã Lộc Bình", "Xã Lộc Bổn", "Xã Lộc Điền", "Xã Lộc Hòa", "Xã Lộc Sơn", "Xã Lộc Thủy", "Xã Lộc Tiến", "Xã Lộc Trì", "Xã Lộc Vĩnh", "Xã Lộc Xuân"];
        for (var pl = 0; pl < phuLocWards.length; pl++) {
            var option = document.createElement("option");
            option.text = phuLocWards[pl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Quảng Điền") {
        var quangDienWards = ["Thị trấn Sịa", "Xã Quảng An", "Xã Quảng Công", "Xã Quảng Lợi", "Xã Quảng Ngạn", "Xã Quảng Phú", "Xã Quảng Phước", "Xã Quảng Thạch", "Xã Quảng Thái", "Xã Quảng Thành", "Xã Quảng Thọ", "Xã Quảng Vinh"];
        for (var qd = 0; qd < quangDienWards.length; qd++) {
            var option = document.createElement("option");
            option.text = quangDienWards[qd];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Huế") {
        var hueWards = ["Phường An Cựu", "Phường An Đông", "Phường An Hòa", "Phường An Tây", "Phường Đúc", "Phường Hương Long", "Phường Hương Sơ", "Phường Kim Long", "Phường Phú Bình", "Phường Phú Cát", "Phường Phú Hậu", "Phường Phú Hiệp", "Phường Phú Hòa", "Phường Phú Hội", "Phường Phú Hương", "Phường Phú Nhuận", "Phường Phú Thượng", "Phường Phú Xuân", "Phường Tây Lộc", "Phường Thuận Hòa", "Phường Thuận Lộc", "Phường Thuận Thành", "Phường Thuận Viên", "Phường Thủy Biều", "Phường Thủy Vân", "Phường Trường An", "Phường Trường Bình", "Phường Trường Định", "Phường Trường Phú", "Phường Vĩ Dạ", "Xã Hương An"];
        for (var hu = 0; hu < hueWards.length; hu++) {
            var option = document.createElement("option");
            option.text = hueWards[hu];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cai Lậy") {
        var caiLayWards = ["Thị trấn Cai Lậy", "Xã Hậu Mỹ Bắc A", "Xã Hậu Mỹ Bắc B", "Xã Hậu Mỹ Bắc C", "Xã Hậu Mỹ Bắc D", "Xã Hậu Mỹ Nam A", "Xã Hậu Mỹ Nam B", "Xã Hậu Mỹ Phú", "Xã Mỹ Hạnh Bắc", "Xã Mỹ Hạnh Nam", "Xã Mỹ Phước Tây", "Xã Tân Bình", "Xã Tân Hội", "Xã Tân Lý Đông", "Xã Tân Lý Tây", "Xã Thạnh Lộc", "Xã Thạnh Lợi", "Xã Thạnh Phú", "Xã Thường Phước"];
        for (var cl = 0; cl < caiLayWards.length; cl++) {
            var option = document.createElement("option");
            option.text = caiLayWards[cl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cái Bè") {
        var caiBeWards = ["Thị trấn Cái Bè", "Xã An Cư", "Xã An Hữu", "Xã An Thái Đông", "Xã An Thái Trung", "Xã Đông Hòa Hiệp", "Xã Hậu Mỹ Bắc A", "Xã Hậu Mỹ Bắc B", "Xã Hậu Mỹ Bắc C", "Xã Hậu Mỹ Bắc D", "Xã Hậu Mỹ Nam A", "Xã Hậu Mỹ Nam B", "Xã Hậu Mỹ Phú", "Xã Mỹ Hạnh Bắc", "Xã Mỹ Hạnh Nam", "Xã Mỹ Thành Bắc", "Xã Mỹ Thành Nam", "Xã Mỹ Tân", "Xã Mỹ Trung"];
        for (var cb = 0; cb < caiBeWards.length; cb++) {
            var option = document.createElement("option");
            option.text = caiBeWards[cb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Tân Hiệp", "Xã Hữu Đạo", "Xã Hữu Đạo", "Xã Long An", "Xã Mỹ An", "Xã Mỹ An", "Xã Mỹ Đức", "Xã Mỹ Hòa", "Xã Mỹ Lợi A", "Xã Mỹ Lợi B", "Xã Nhị Mỹ", "Xã Nhị Quý", "Xã Phú An", "Xã Phú Cường", "Xã Tân Bình", "Xã Tân Phú", "Xã Tân Phước", "Xã Thạnh Lộc", "Xã Thạnh Mỹ"];
        for (var cth = 0; cth < chauThanhWards.length; cth++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[cth];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Chợ Gạo") {
        var choGaoWards = ["Thị trấn Chợ Gạo", "Xã Bình Ninh", "Xã Bình Phan", "Xã Hòa Định", "Xã Hòa Tịnh", "Xã Long Bình Điền", "Xã Lương Hòa Lạc", "Xã Mỹ Tịnh An", "Xã Phú Kiết", "Xã Phú Tân", "Xã Quơn Long", "Xã Song Bình", "Xã Tân Bình Thạnh", "Xã Tân Thuận Bình", "Xã Thanh Bình", "Xã Trung Hòa", "Xã Xuân Đông"];
        for (var cg = 0; cg < choGaoWards.length; cg++) {
            var option = document.createElement("option");
            option.text = choGaoWards[cg];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gò Công Đông") {
        var goCongDongWards = ["Thị trấn Tân Hòa", "Xã Bình Ân", "Xã Bình Nghị", "Xã Gia Thuận", "Xã Kiểng Phước", "Xã Phước Trung", "Xã Tân Điền", "Xã Tân Đông", "Xã Tân Hữu Đông", "Xã Tân Hương", "Xã Tân Lý Đông", "Xã Tân Lý Tây", "Xã Tân Phước", "Xã Tân Quới", "Xã Tân Thành", "Xã Tân Thạnh", "Xã Thành Thới A", "Xã Thành Thới B"];
        for (var gcd = 0; gcd < goCongDongWards.length; gcd++) {
            var option = document.createElement("option");
            option.text = goCongDongWards[gcd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gò Công Tây") {
        var goCongTayWards = ["Thị trấn Tân Hòa", "Xã An Thạnh Thủy", "Xã Bình Thành", "Xã Đồng Sơn", "Xã Đồng Thạnh", "Xã Long Bình", "Xã Long Vĩnh", "Xã Thành Công", "Xã Tân Thành", "Xã Tân Thông Hội", "Xã Tân Thới", "Xã Thạnh Nhựt", "Xã Vĩnh Bình"];
        for (var gct = 0; gct < goCongTayWards.length; gct++) {
            var option = document.createElement("option");
            option.text = goCongTayWards[gct];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Phú Đông") {
        var tanPhuDongWards = ["Thị trấn Tân Phú", "Xã Phú Thạnh", "Xã Phú Đông", "Xã Phú Tân", "Xã Phú Đức", "Xã Phú An", "Xã Phú Hữu", "Xã Phú Nhuận", "Xã Phú Thọ", "Xã Tân Hòa", "Xã Tân Hội", "Xã Tân Lập"];
        for (var tpd = 0; tpd < tanPhuDongWards.length; tpd++) {
            var option = document.createElement("option");
            option.text = tanPhuDongWards[tpd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Phước") {
        var tanPhuocWards = ["Thị trấn Tân Phước", "Xã Đồng Tâm", "Xã Phú Thịnh", "Xã Tân Hòa Đông", "Xã Tân Hòa Tây", "Xã Tân Lân", "Xã Tân Phú", "Xã Tân Thành"];
        for (var tpp = 0; tpp < tanPhuocWards.length; tpp++) {
            var option = document.createElement("option");
            option.text = tanPhuocWards[tpp];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Mỹ Tho") {
        var myThoWards = ["Phường 1", "Phường 10", "Phường 11", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Xã Đạo Thạnh", "Xã Mỹ Phong", "Xã Phước Thạnh", "Xã Tân Mỹ Chánh"];
        for (var mt = 0; mt < myThoWards.length; mt++) {
            var option = document.createElement("option");
            option.text = myThoWards[mt];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Càng Long") {
        var cangLongWards = ["Thị trấn Càng Long", "Xã An Trường", "Xã An Trường A", "Xã Bình Phú", "Xã Đại Phúc", "Xã Đại Phước", "Xã Đức Mỹ", "Xã Huyền Hội", "Xã Mỹ Cẩm", "Xã Nhị Long", "Xã Nhị Long Phú", "Xã Phương Thạnh", "Xã Song Phụng", "Xã Tân An", "Xã Tân Bình", "Xã Tân Lược", "Xã Thanh Mỹ", "Xã Trường Khánh"];
        for (var cl = 0; cl < cangLongWards.length; cl++) {
            var option = document.createElement("option");
            option.text = cangLongWards[cl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cầu Kè") {
        var cauKeWards = ["Thị trấn Cầu Kè", "Xã An Phong", "Xã Hòa Ân", "Xã Hòa Tân", "Xã Hòa Đông", "Xã Hưng Hà", "Xã Ninh Thới", "Xã Phong Phú", "Xã Phong Thạnh", "Xã Tân Hưng", "Xã Tân Hòa", "Xã Thông Hòa", "Xã Đông Hòa"];
        for (var ck = 0; ck < cauKeWards.length; ck++) {
            var option = document.createElement("option");
            option.text = cauKeWards[ck];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Cầu Ngang") {
        var cauNgangWards = ["Thị trấn Cầu Ngang", "Xã Hiệp Hòa", "Xã Hiệp Mỹ Đông", "Xã Hiệp Mỹ Tây", "Xã Kim Hòa", "Xã Long Sơn", "Xã Mỹ Hòa", "Xã Mỹ Long", "Xã Mỹ Long Bắc", "Xã Mỹ Long Nam", "Xã Nhị Trân", "Xã Thạnh Hòa Sơn", "Xã Thạnh Hòa", "Xã Thạnh Phú", "Xã Trường Thọ", "Xã Đông Hòa", "Xã Đông Thạnh"];
        for (var cn = 0; cn < cauNgangWards.length; cn++) {
            var option = document.createElement("option");
            option.text = cauNgangWards[cn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Châu Thành", "Xã An Hiệp", "Xã An Khánh", "Xã An Nhơn", "Xã An Phú", "Xã An Thái Đông", "Xã An Thái Trung", "Xã Cây Dương", "Xã Hòa Lợi", "Xã Phú An Hòa", "Xã Phú Hòa", "Xã Phú Tân", "Xã Phú Túc", "Xã Sơn Điền", "Xã Thanh Mỹ", "Xã Tam Ngãi", "Xã Vĩnh Hanh", "Xã Vĩnh Thạnh"];
        for (var cth = 0; cth < chauThanhWards.length; cth++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[cth];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Duyên Hải") {
        var duyenHaiWards = ["Thị trấn Duyên Hải", "Xã Long Hữu Đông", "Xã Long Hữu Tây", "Xã Long Khánh", "Xã Long Phước", "Xã Long Tân", "Xã Long Toàn", "Xã Long Vĩnh", "Xã Long Đức", "Xã Phú Hữu", "Xã Rạch Gốc", "Xã Đông Hải", "Xã Đông Thạnh"];
        for (var dh = 0; dh < duyenHaiWards.length; dh++) {
            var option = document.createElement("option");
            option.text = duyenHaiWards[dh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tiểu Cần") {
        var tieuCanWards = ["Thị trấn Tiểu Cần", "Xã Hòa Mỹ", "Xã Lương Hoà A", "Xã Lương Hoà", "Xã Phú Cần", "Xã Phú Hữu", "Xã Phước Hưng", "Xã Phước Long", "Xã Tân Hùng", "Xã Tân Lợi", "Xã Thạnh Qưới", "Xã Trung Thành Đông", "Xã Trung Thành Tây"];
        for (var tc = 0; tc < tieuCanWards.length; tc++) {
            var option = document.createElement("option");
            option.text = tieuCanWards[tc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trà Cú") {
        var traCuWards = ["Thị trấn Trà Cú", "Xã Đại An", "Xã Định An", "Xã Hàm Giang", "Xã Hàm Tân", "Xã Ngãi Xuyên", "Xã Ngọc Biên", "Xã Tân Hiệp", "Xã Tân Hưng", "Xã Tân Sơn", "Xã Tập Sơn", "Xã Thanh Sơn", "Xã Đại Hòa Đông", "Xã Định An", "Xã Định Yên", "Xã Đôn Xuân"];
        for (var tc = 0; tc < traCuWards.length; tc++) {
            var option = document.createElement("option");
            option.text = traCuWards[tc];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Trà Vinh") {
        var traVinhWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Xã 8", "Xã 9", "Xã 10", "Xã 11", "Xã 12", "Xã 9", "Xã Lạc Hòa", "Xã Lạc Thành", "Xã Trường Long", "Xã Thạnh Ngãi"];
        for (var tv = 0; tv < traVinhWards.length; tv++) {
            var option = document.createElement("option");
            option.text = traVinhWards[tv];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Chiêm Hóa") {
        var chiemHoaWards = ["Thị trấn Vĩnh Lộc", "Xã Bình Nhân", "Xã Bình Phú", "Xã Chiêm Hoá", "Xã Đồng Khê", "Xã Đôn Phong", "Xã Đức Quang", "Xã Hà Lang", "Xã Hòa An", "Xã Hòa Phú", "Xã Hùng Mỹ", "Xã Kiên Đài", "Xã Kim Bình", "Xã Kim Thượng", "Xã Linh Phú", "Xã Minh Quang", "Xã Quang Bình", "Xã Quang Minh", "Xã Thành Long", "Xã Vĩnh Yên"];
        for (var ch = 0; ch < chiemHoaWards.length; ch++) {
            var option = document.createElement("option");
            option.text = chiemHoaWards[ch];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hàm Yên") {
        var hamYenWards = ["Thị trấn Yên Na", "Xã Bạch Xa", "Xã Côn Minh", "Xã Đức Ninh", "Xã Hồng Ca", "Xã Hùng Đức", "Xã Hùng Thắng", "Xã Hùng Tiến", "Xã Hương Xạ", "Xã Lam Sơn", "Xã Lực Hành", "Xã Minh Dân", "Xã Minh Hòa", "Xã Minh Khôi", "Xã Minh Tâm", "Xã Nam Cường", "Xã Phú Lâm", "Xã Phúc Thịnh", "Xã Tân Thành", "Xã Tân Yên", "Xã Thái Hòa", "Xã Thịnh Hội", "Xã Tiến Yên"];
        for (var hy = 0; hy < hamYenWards.length; hy++) {
            var option = document.createElement("option");
            option.text = hamYenWards[hy];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lâm Bình") {
        var lamBinhWards = ["Thị trấn Thanh Tùng", "Xã Bình An", "Xã Bình Tân", "Xã Cao Tùng", "Xã Cúc Đường", "Xã Địch Giáo Ba", "Xã Đức Hạnh", "Xã Hà Lang", "Xã Hòa Phú", "Xã Hùng Mỹ", "Xã Kiên Đài", "Xã Linh Phú", "Xã Minh Tâm", "Xã Nông Thượng", "Xã Phong Minh", "Xã Thanh Bình", "Xã Thanh Mai", "Xã Thanh Thịnh", "Xã Thanh Vận", "Xã Thượng Đình", "Xã Xuân Lập", "Xã Xuân Mỹ", "Xã Xuân Tùng"];
        for (var lb = 0; lb < lamBinhWards.length; lb++) {
            var option = document.createElement("option");
            option.text = lamBinhWards[lb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Na Hang") {
        var naHangWards = ["Thị trấn Na Hang", "Xã Bình An", "Xã Côn Lôn", "Xã Đà Vị", "Xã Khau Tinh", "Xã Năng Khả", "Xã Sinh Long", "Xã Thượng Giáp", "Xã Thượng Nông", "Xã Yên Hoa", "Xã Yên Lâm", "Xã Yên Từ"];
        for (var nh = 0; nh < naHangWards.length; nh++) {
            var option = document.createElement("option");
            option.text = naHangWards[nh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sơn Dương") {
        var sonDuongWards = ["Thị trấn Sơn Dương", "Xã Bình Yên", "Xã Cấp Tiến", "Xã Chi Thiết", "Xã Đại Phú", "Xã Đông Lợi", "Xã Đông Thắng", "Xã Hoàng Diệu", "Xã Hợp Hòa", "Xã Hữu Thác", "Xã Lương Thiện", "Xã Minh Thanh", "Xã Mỹ Thái", "Xã Ngọc Đồng", "Xã Phúc Ứng", "Xã Tân Thanh", "Xã Tân Trào", "Xã Thanh Bình", "Xã Thượng Ấm", "Xã Trung Yên", "Xã Tú Thịnh", "Xã Văn Phú", "Xã Vân Sơn", "Xã Vĩnh Lợi"];
        for (var sd = 0; sd < sonDuongWards.length; sd++) {
            var option = document.createElement("option");
            option.text = sonDuongWards[sd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Sơn") {
        var yenSonWards = ["Thị trấn Yên Sơn", "Xã Bạch Xa", "Xã Chi Thiết", "Xã Đạo Viện", "Xã Kim Thượng", "Xã Lương Thiện", "Xã Minh Đạo", "Xã Mỹ Bằng", "Xã Nhữ Hán", "Xã Nhữ Khê", "Xã Phú Thiện", "Xã Phúc Ninh", "Xã Tam Thanh", "Xã Tân Long", "Xã Thanh Luông", "Xã Thượng Cường", "Xã Trí Yên"];
        for (var ys = 0; ys < yenSonWards.length; ys++) {
            var option = document.createElement("option");
            option.text = yenSonWards[ys];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Tuyên Quang") {
        var tuyenQuangWards = ["Phường An Tường", "Phường Đại Yên", "Phường Tân Hà", "Phường Tân Quang", "Phường Tràng Tiền", "Xã An Khang", "Xã An Tường", "Xã Đại Phúc", "Xã Hùng Sơn", "Xã Hưng Thành", "Xã Kim Phú", "Xã Lưỡng Vượng", "Xã Minh Xuân", "Xã Phan Thiết", "Xã Tân Hương", "Xã Tân Thành", "Xã Thái Long", "Xã Tràng Đà", "Xã Yên Phú"];
        for (var tq = 0; tq < tuyenQuangWards.length; tq++) {
            var option = document.createElement("option");
            option.text = tuyenQuangWards[tq];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bến Cầu") {
        var benCauWards = ["Thị trấn Bến Cầu", "Xã An Thạnh", "Xã An Tịnh", "Xã An Điền", "Xã An Phú", "Xã Hòa Hội", "Xã Long Chữ", "Xã Long Giang", "Xã Long Khánh", "Xã Lợi Bình Nhì", "Xã Lợi Thuận", "Xã Long Thuận", "Xã Minh Lập", "Xã Thanh Điền", "Xã Tiên Thuận", "Xã Tiên Long", "Xã Tiên Thành", "Xã Tiến Thành", "Xã Trảng Bàng"];
        for (var bc = 0; bc < benCauWards.length; bc++) {
            var option = document.createElement("option");
            option.text = benCauWards[bc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhTNWards = ["Thị trấn Châu Thành", "Xã Hưng Hòa", "Xã Hưng Điền", "Xã Hưng Khánh Trung B", "Xã Hưng Thiện", "Xã Thanh Mỹ", "Xã Trí Bình", "Xã Trí Hiệp", "Xã Trí Quả", "Xã Trí Tôn", "Xã Trí Trung", "Xã Út Tôn"];
        for (var ctn = 0; ctn < chauThanhTNWards.length; ctn++) {
            var option = document.createElement("option");
            option.text = chauThanhTNWards[ctn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Dương Minh Châu") {
        var duongMinhChauWards = ["Thị trấn Dương Minh Châu", "Xã Bàu Năng", "Xã Bến Củi", "Xã Cầu Khởi", "Xã Chà Là", "Xã Lộc Ninh", "Xã Phan", "Xã Phước Minh", "Xã Phước Ninh", "Xã Phước Vĩnh", "Xã Truông Mít", "Xã Truông Pơ", "Xã Truông Tạo"];
        for (var dmc = 0; dmc < duongMinhChauWards.length; dmc++) {
            var option = document.createElement("option");
            option.text = duongMinhChauWards[dmc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Gò Dầu") {
        var goDauWards = ["Thị trấn Gò Dầu", "Xã Bàu Đồn", "Xã Cẩm Sơn", "Xã Hiệp Thạnh", "Xã Phước Đông", "Xã Phước Thạnh", "Xã Phước Trạch", "Xã Thanh Phước", "Xã Thanh Tuyền", "Xã Thanh Điền", "Xã Thạnh Đức"];
        for (var gd = 0; gd < goDauWards.length; gd++) {
            var option = document.createElement("option");
            option.text = goDauWards[gd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hòa Thành") {
        var hoaThanhWards = ["Thị trấn Trảng Bàng", "Xã An Tịnh", "Xã Bình Thạnh", "Xã Đất Cuốc", "Xã Gia Lộc", "Xã Gia Ray", "Xã Lộc Hưng", "Xã Lợi Thuận", "Xã Phước Chỉ", "Xã Phước Hoà", "Xã Phước Lưu", "Xã Phước Vĩnh", "Xã Tân Bình", "Xã Tân Lợi", "Xã Thành Trí", "Xã Trảng Bàng"];
        for (var ht = 0; ht < hoaThanhWards.length; ht++) {
            var option = document.createElement("option");
            option.text = hoaThanhWards[ht];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Biên") {
        var tanBienWards = ["Thị trấn Tân Biên", "Xã Hòa Hiệp", "Xã Mỏ Công", "Xã Tân Bình", "Xã Tân Lập", "Xã Tân Phong", "Xã Thạnh Bắc", "Xã Thạnh Bình", "Xã Thạnh Tây", "Xã Thạnh Đông", "Xã Thạnh Đức"];
        for (var tb = 0; tb < tanBienWards.length; tb++) {
            var option = document.createElement("option");
            option.text = tanBienWards[tb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Châu") {
        var tanChauWards = ["Thị trấn Tân Châu", "Xã Hưng Định", "Xã Hưng Khánh Trung A", "Xã Lợi Bình Nhì", "Xã Minh Đức", "Xã Thành Đông", "Xã Thành Lợi", "Xã Thành Trung", "Xã Thành Đức"];
        for (var tc = 0; tc < tanChauWards.length; tc++) {
            var option = document.createElement("option");
            option.text = tanChauWards[tc];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Tây Ninh") {
        var tayNinhWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Phường 11", "Xã Bình Minh", "Xã Tân Bình", "Xã Thanh Tân"];
        for (var tn = 0; tn < tayNinhWards.length; tn++) {
            var option = document.createElement("option");
            option.text = tayNinhWards[tn];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bình Tân") {
        var binhTanWards = ["Thị trấn Bình Tân", "Xã Bình Thạnh", "Xã Chợ Lách", "Xã Định Thành", "Xã Điềm Hy", "Xã Hưng Khánh Trung B", "Xã Thành Lợi", "Xã Thành Trung", "Xã Tân Lãnh", "Xã Tân Thành", "Xã Vĩnh Bình", "Xã Vĩnh Hựu", "Xã Vĩnh Trinh"];
        for (var bt = 0; bt < binhTanWards.length; bt++) {
            var option = document.createElement("option");
            option.text = binhTanWards[bt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Long Hồ") {
        var longHoWards = ["Thị trấn Long Hồ", "Xã An Bình", "Xã Đồng Phú", "Xã Hòa Ninh", "Xã Phước Hậu", "Xã Phước Thạnh", "Xã Thanh Đức", "Xã Thanh Hòa", "Xã Tân Hạnh", "Xã Tân Thạnh", "Xã Thạnh Quới"];
        for (var lh = 0; lh < longHoWards.length; lh++) {
            var option = document.createElement("option");
            option.text = longHoWards[lh];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mang Thít") {
        var mangThitWards = ["Thị trấn Cái Nhum", "Xã An Phước", "Xã Bình Phước", "Xã Chánh An", "Xã Hòa Tịnh", "Xã Long Mỹ", "Xã Phú Mỹ", "Xã Tân Bình", "Xã Tân Phước", "Xã Thạnh Hoà", "Xã Thạnh Trị"];
        for (var mt = 0; mt < mangThitWards.length; mt++) {
            var option = document.createElement("option");
            option.text = mangThitWards[mt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tam Bình") {
        var tamBinhWards = ["Thị trấn Hồng Ngự", "Xã Hoà Hiệp Trung", "Xã Hưng Thạnh", "Xã Lương Hòa", "Xã Phú Lộc", "Xã Phú Thịnh", "Xã Tân Hòa", "Xã Tân Phú", "Xã Tân Phước", "Xã Tân Quới", "Xã Thành Trung", "Xã Thạnh Phước", "Xã Thạnh Tây"];
        for (var tb = 0; tb < tamBinhWards.length; tb++) {
            var option = document.createElement("option");
            option.text = tamBinhWards[tb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trà Ôn") {
        var traOnWards = ["Thị trấn Trà Ôn", "Xã Hoà Bình", "Xã Hựu Thành", "Xã Lục Sỹ Thành", "Xã Nhơn Bình", "Xã Phú Thành", "Xã Tân Mỹ", "Xã Thới Hòa", "Xã Thuận Thới", "Xã Trà Côn", "Xã Vĩnh Xuân"];
        for (var to = 0; to < traOnWards.length; to++) {
            var option = document.createElement("option");
            option.text = traOnWards[to];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vũng Liêm") {
        var vungLiemWards = ["Thị trấn Vũng Liêm", "Xã Hiếu Nghĩa", "Xã Hiếu Nhơn", "Xã Hiếu Phụng", "Xã Hiếu Thành", "Xã Hiếu Thuận", "Xã Quới An", "Xã Trung An", "Xã Trung Hiếu", "Xã Trung Thành"];
        for (var vl = 0; vl < vungLiemWards.length; vl++) {
            var option = document.createElement("option");
            option.text = vungLiemWards[vl];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Vĩnh Long") {
        var vinhLongWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8", "Phường 9", "Phường 10", "Xã Long Bình", "Xã Long Định", "Xã Long Hồ", "Xã Long Phước", "Xã Long Trường"];
        for (var vl = 0; vl < vinhLongWards.length; vl++) {
            var option = document.createElement("option");
            option.text = vinhLongWards[vl];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Bình Xuyên") {
        var binhXuyenWards = ["Thị trấn Hương Canh", "Xã Hương Sơn", "Xã Phú Xuân", "Xã Phúc Hòa", "Xã Phúc Tiến", "Xã Phúc Tân", "Xã Phúc Thắng", "Xã Phúc Tiến", "Xã Thanh Lãng", "Xã Thanh Xuân", "Xã Trung Mỹ", "Xã Trung Tú"];
        for (var bx = 0; bx < binhXuyenWards.length; bx++) {
            var option = document.createElement("option");
            option.text = binhXuyenWards[bx];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lập Thạch") {
        var lapThachWards = ["Thị trấn Lập Thạch", "Xã Bắc Bình", "Xã Bàn Giản", "Xã Đình Chu", "Xã Đồng Ích", "Xã Hoàng Đan", "Xã Liên Hòa", "Xã Liễn Sơn", "Xã Thái Hòa", "Xã Tử Du", "Xã Vân Trục"];
        for (var lt = 0; lt < lapThachWards.length; lt++) {
            var option = document.createElement("option");
            option.text = lapThachWards[lt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Sông Lô") {
        var songLoWards = ["Thị trấn Vĩnh Yên", "Xã Đạo Đức", "Xã Hoàng Đan", "Xã Khánh Công", "Xã Khánh Thượng", "Xã Liễn Sơn", "Xã Liễn Xương", "Xã Nguyễn Trãi", "Xã Phú Thịnh", "Xã Phú Đông", "Xã Tân Long", "Xã Trung Hòa"];
        for (var sl = 0; sl < songLoWards.length; sl++) {
            var option = document.createElement("option");
            option.text = songLoWards[sl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tam Đảo") {
        var tamDaoWards = ["Thị trấn Tam Đảo", "Xã Bồ Lý", "Xã Đạo Trù", "Xã Hợp Châu", "Xã Minh Quang", "Xã Sơn Đông", "Xã Tam Quan", "Xã Tam Đảo"];
        for (var td = 0; td < tamDaoWards.length; td++) {
            var option = document.createElement("option");
            option.text = tamDaoWards[td];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tam Dương") {
        var tamDuongWards = ["Thị trấn Hợp Hòa", "Xã Đạo Tú", "Xã Dũng Nghĩa", "Xã Hoà Phú", "Xã Hoàng Hoa", "Xã Hoàng Tây", "Xã Hợp Thịnh", "Xã Minh Hòa", "Xã Minh Thái", "Xã Phú Cường", "Xã Yên Dưỡng"];
        for (var tduong = 0; tduong < tamDuongWards.length; tduong++) {
            var option = document.createElement("option");
            option.text = tamDuongWards[tduong];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vĩnh Tường") {
        var vinhTuongWards = ["Thị trấn Thổ Tang", "Xã An Tường", "Xã Cao Đại", "Xã Cao Phong", "Xã Đại Đồng", "Xã Lũng Hoà", "Xã Phú Đa", "Xã Phú Thịnh", "Xã Tân Phong", "Xã Thượng Trưng", "Xã Tuân Chính", "Xã Tứ Trưng", "Xã Vĩnh Ninh"];
        for (var vt = 0; vt < vinhTuongWards.length; vt++) {
            var option = document.createElement("option");
            option.text = vinhTuongWards[vt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Lạc") {
        var yenLacWards = ["Thị trấn Yên Lạc", "Xã Bình Định", "Xã Bình Định A", "Xã Đại Tự", "Xã Đồng Cương", "Xã Đồng Văn", "Xã Hồ Tùng Mậu", "Xã Phúc Lâm", "Xã Tam Hồng", "Xã Tề Lễ", "Xã Tiến Xuân", "Xã Xuân Hòa", "Xã Xuân Lập"];
        for (var yl = 0; yl < yenLacWards.length; yl++) {
            var option = document.createElement("option");
            option.text = yenLacWards[yl];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Vĩnh Yên") {
        var vinhYenWards = ["Phường Bích Đào", "Phường Hợp Châu", "Phường Khai Quang", "Phường Lãng Hạ", "Phường Liên Bảo", "Phường Phúc Thắng", "Phường Tích Sơn", "Phường Tích Thành", "Phường Vân Hồ", "Xã Bình Định", "Xã Định Trung", "Xã Đống Đa", "Xã Đồng Tâm", "Xã Hội Hợp", "Xã Kỳ Sơn", "Xã Tam Phúc", "Xã Văn Hòa", "Xã Yên Bình"];
        for (var vy = 0; vy < vinhYenWards.length; vy++) {
            var option = document.createElement("option");
            option.text = vinhYenWards[vy];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Phúc Yên") {
        var phucYenWards = ["Phường Đồng Tiến", "Phường Hùng Vương", "Phường Nam Viêm", "Phường Phúc Thắng", "Phường Phúc Tiến", "Phường Quang Trung", "Xã Bồ Đề", "Xã Cao Minh", "Xã Hòa Long", "Xã Hòa Phú", "Xã Hòa Tiến", "Xã Hòa Xá", "Xã Phượng Mao", "Xã Quang Minh", "Xã Tiên Phong", "Xã Trưng Nhị", "Xã Vân Xuân"];
        for (var py = 0; py < phucYenWards.length; py++) {
            var option = document.createElement("option");
            option.text = phucYenWards[py];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Lục Yên") {
        var lucYenWards = ["Thị trấn Lục Yên", "Xã An Phú", "Xã Bình An", "Xã Châu Quế Hạ", "Xã Châu Quế Thượng", "Xã Đền Thượng", "Xã Khánh Hòa", "Xã Kim Quan", "Xã Lâm Giang", "Xã Lâm Nguyên", "Xã Liễu Đô", "Xã Minh Tân", "Xã Phong Dụ Hạ", "Xã Phong Dụ Thượng", "Xã Tân Lập", "Xã Thượng Cường", "Xã Vĩnh Lạc"];
        for (var ly = 0; ly < lucYenWards.length; ly++) {
            var option = document.createElement("option");
            option.text = lucYenWards[ly];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mù Cang Chải") {
        var muCangChaiWards = ["Thị trấn Mù Cang Chải", "Xã Cao Phạ", "Xã Chế Cu Nha", "Xã Chế Tạo", "Xã Dế Xu Phình", "Xã Hồ Bốn", "Xã Khao Mang", "Xã Kim Nọi", "Xã La Pán Tẩn", "Xã Lao Chải", "Xã Mồ Dề", "Xã Nậm Có", "Xã Púng Luông", "Xã Xà Hồ"];
        for (var mcc = 0; mcc < muCangChaiWards.length; mcc++) {
            var option = document.createElement("option");
            option.text = muCangChaiWards[mcc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trạm Tấu") {
        var tramTauWards = ["Thị trấn Trạm Tấu", "Xã Bản Công", "Xã Bản Mù", "Xã Hát Lìu", "Xã Hát Lừu", "Xã Làng Nhì", "Xã Pá Hu", "Xã Pá Lau", "Xã Trạm Tấu"];
        for (var tt = 0; tt < tramTauWards.length; tt++) {
            var option = document.createElement("option");
            option.text = tramTauWards[tt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trấn Yên") {
        var tranYenWards = ["Thị trấn Trấn Yên", "Xã Bảo Hưng", "Xã Cổ Phúc", "Xã Đào Thịnh", "Xã Kim Hỷ", "Xã Liên Phú", "Xã Phúc Sơn", "Xã Phúc Thắng", "Xã Quyết Tiến", "Xã Thái Bình", "Xã Vân Hội", "Xã Vân Lĩnh", "Xã Võ Lao"];
        for (var ty = 0; ty < tranYenWards.length; ty++) {
            var option = document.createElement("option");
            option.text = tranYenWards[ty];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Văn Chấn") {
        var vanChanWards = ["Thị trấn Nà Hang", "Xã Đà Vị", "Xã Khau Tinh", "Xã Nậm Khè", "Xã Nậm Xây", "Xã Phúc Yên", "Xã Thượng Giáp", "Xã Thượng Nông", "Xã Xuân Ái"];
        for (var vc = 0; vc < vanChanWards.length; vc++) {
            var option = document.createElement("option");
            option.text = vanChanWards[vc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Văn Yên") {
        var vanYenWards = ["Thị trấn Mậu A", "Xã An Lạc", "Xã An Thắng", "Xã An Độ", "Xã Đại Sơn", "Xã Đại Phác", "Xã Khai Trung", "Xã Lâm Giang", "Xã Lỗ Sơn", "Xã Minh An", "Xã Tân Hợp", "Xã Tân Lập", "Xã Tân Minh", "Xã Tân Thành", "Xã Trung Minh", "Xã Trung Trực", "Xã Văn Hội", "Xã Vĩnh Lợi"];
        for (var vy = 0; vy < vanYenWards.length; vy++) {
            var option = document.createElement("option");
            option.text = vanYenWards[vy];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Yên Bình") {
        var yenBinhWards = ["Thị trấn Yên Bình", "Xã Bạch Hà", "Xã Bảo Hòa", "Xã Cảm Ân", "Xã Cảm Nhân", "Xã Đại Đồng", "Xã Hán Đà", "Xã Mông Sơn", "Xã Phúc Đức", "Xã Phú Thịnh", "Xã Tân Hương", "Xã Tân Nguyên", "Xã Thác Bà"];
        for (var yb = 0; yb < yenBinhWards.length; yb++) {
            var option = document.createElement("option");
            option.text = yenBinhWards[yb];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Yên Bái") {
        var yenBaiWards = ["Phường Giới Phiên", "Phường Minh Tân", "Phường Nguyễn Phúc", "Phường Yên Ninh", "Xã Hợp Minh", "Xã Phúc Lộc", "Xã Tân Thịnh", "Xã Văn Phú", "Xã Văn Tiến", "Xã Vĩnh Hòa", "Xã Vĩnh Tân"];
        for (var yb = 0; yb < yenBaiWards.length; yb++) {
            var option = document.createElement("option");
            option.text = yenBaiWards[yb];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Điện Biên") {
        var dienBienWards = ["Thị trấn Điện Biên", "Xã Hòa Mạc", "Xã Mường Lói", "Xã Nưa Ngam", "Xã Thanh An", "Xã Thanh Hưng", "Xã Thanh Luông", "Xã Thanh Xương"];
        for (var db = 0; db < dienBienWards.length; db++) {
            var option = document.createElement("option");
            option.text = dienBienWards[db];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Điện Biên Đông") {
        var dienBienDongWards = ["Thị trấn Thanh Xuân", "Xã Điện Biên Đông", "Xã Háng Đồng", "Xã Mường Ảng", "Xã Mường Đông", "Xã Mường Than", "Xã Phà Đánh", "Xã Phình Giàng", "Xã Phình Sáng", "Xã Pú Hồng", "Xã Tân Nam", "Xã Thanh An", "Xã Thanh Chăn", "Xã Thanh Hòa", "Xã Thanh Luân", "Xã Thanh Nưa", "Xã Thanh Xâm", "Xã Thanh Xương", "Xã Xím Vàng"];
        for (var dbd = 0; dbd < dienBienDongWards.length; dbd++) {
            var option = document.createElement("option");
            option.text = dienBienDongWards[dbd];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường Ảng") {
        var muongAngWards = ["Thị trấn Mường Ảng", "Xã Búng Lao", "Xã Mường Đăng", "Xã Mường Lạn", "Xã Mường Lèo", "Xã Nậm Giải", "Xã Nậm Păm", "Xã Pắc Ma", "Xã Phăng Sô Lin", "Xã Phìn Hồ", "Xã Sam Kha"];
        for (var ma = 0; ma < muongAngWards.length; ma++) {
            var option = document.createElement("option");
            option.text = muongAngWards[ma];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường Chà") {
        var muongChaWards = ["Thị trấn Mường Chà", "Xã Huổi Lèng", "Xã Huổi Mí", "Xã Mường Bú", "Xã Mường Mươn", "Xã Nậm Nèn", "Xã Nậm Vì", "Xã Pa Ham", "Xã Xá Tổng"];
        for (var mc = 0; mc < muongChaWards.length; mc++) {
            var option = document.createElement("option");
            option.text = muongChaWards[mc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường Nhé") {
        var muongNheWards = ["Thị trấn Mường Nhé", "Xã Ka Lăng", "Xã Leng Su Sìn", "Xã Mường Toong", "Xã Nậm Sỏ", "Xã Quảng Lâm", "Xã Sen Thượng", "Xã Sín Thầu", "Xã Tả Lèng", "Xã Tả Phìn", "Xã Tênh Phông"];
        for (var mn = 0; mn < muongNheWards.length; mn++) {
            var option = document.createElement("option");
            option.text = muongNheWards[mn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Mường Ới") {
        var muongOiWards = ["Thị trấn Mường Ới", "Xã Chiềng Ken", "Xã Hua Thanh", "Xã Mường Lư", "Xã Na Ngoi", "Xã Nà Pó", "Xã Pá Ma Pha Khinh", "Xã Phú Cường", "Xã Sam Mứn"];
        for (var mo = 0; mo < muongOiWards.length; mo++) {
            var option = document.createElement("option");
            option.text = muongOiWards[mo];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Điện Biên Phủ") {
        var dienBienPhuWards = ["Phường Him Lam", "Phường Mường Thanh", "Phường Nam Thanh", "Phường Noong Bua", "Phường Tân Thanh", "Phường Thanh Bình", "Phường Thanh Minh", "Xã Thanh An", "Xã Thanh Bắc", "Xã Thanh Châu", "Xã Thanh Hưng", "Xã Thanh Luông", "Xã Thanh Minh", "Xã Thanh Nưa", "Xã Thanh Phong", "Xã Thanh Tân", "Xã Thanh Thịnh", "Xã Thanh Trường", "Xã Thanh Xuân"];
        for (var dbp = 0; dbp < dienBienPhuWards.length; dbp++) {
            var option = document.createElement("option");
            option.text = dienBienPhuWards[dbp];
            xa.add(option);
        }
    } else if (quan.value === "Thị xã Mường Lay") {
        var muongLayWards = ["Phường Hồng Thái", "Phường Lóng Mỹ", "Phường Na Lay", "Phường Nà Tấu", "Xã Châu Quế Hạ", "Xã Mường Lay", "Xã Phiêng Ban", "Xã Sông Đà", "Xã Xa Lói"];
        for (var ml = 0; ml < muongLayWards.length; ml++) {
            var option = document.createElement("option");
            option.text = muongLayWards[ml];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Buôn Đôn") {
    var buonDonWards = ["Thị trấn Ea Wer", "Xã Ea Bung", "Xã Ea Lê", "Xã Ea Ning", "Xã Ea Tiêu", "Xã Ea Wer"];
    for (var bd = 0; bd < buonDonWards.length; bd++) {
        var option = document.createElement("option");
        option.text = buonDonWards[bd];
        xa.add(option);
    }
} else if (quan.value === "Huyện Cư Kuin") {
    var cuKuinWards = ["Thị trấn Ea Tul", "Xã Cư Ebur", "Xã Cư Hoa", "Xã Cư Ni", "Xã Ea Pô", "Xã Ea Hồ", "Xã Ea Tir", "Xã Ea Đar", "Xã Ea Sol", "Xã Ea Đal", "Xã Ea Bông", "Xã Ea Tul", "Xã Krông Na"];
    for (var ck = 0; ck < cuKuinWards.length; ck++) {
        var option = document.createElement("option");
        option.text = cuKuinWards[ck];
        xa.add(option);
    }
} else if (quan.value === "Huyện Cư M'gar") {
    var cuMgarWards = ["Thị trấn Cư M'gar", "Xã Cư KTy", "Xã Cư Ni", "Xã Ea Bung", "Xã Ea Lê", "Xã Ea Pil", "Xã Ea Riêng", "Xã Ea Trang", "Xã Hòa Lễ", "Xã Ea H'đinh", "Xã Krông Jang", "Xã Krông Á"];
    for (var cmg = 0; cmg < cuMgarWards.length; cmg++) {
        var option = document.createElement("option");
        option.text = cuMgarWards[cmg];
        xa.add(option);
    }
}  if (quan.value === "Huyện Ea H'leo") {
    var eaHleoWards = ["Thị trấn Ea Drông", "Xã Cư A Mung", "Xã Cư Mốt", "Xã Ea H'leo", "Xã Ea Lai", "Xã Ea Sol", "Xã Ea Tir", "Xã Ea Wy", "Xã Ea Đar"];
    for (var ehl = 0; ehl < eaHleoWards.length; ehl++) {
        var option = document.createElement("option");
        option.text = eaHleoWards[ehl];
        xa.add(option);
    }
} else if (quan.value === "Huyện Ea Kar") {
    var eaKarWards = ["Thị trấn Ea Kar", "Xã Ea Đar", "Xã Ea Sô", "Xã Ea Sar", "Xã Xuân Phú", "Xã Xuân Thành"];
    for (var ek = 0; ek < eaKarWards.length; ek++) {
        var option = document.createElement("option");
        option.text = eaKarWards[ek];
        xa.add(option);
    }
} else if (quan.value === "Huyện Ea Súp") {
    var eaSupWards = ["Thị trấn Ea Súp", "Xã Ea Bung", "Xã Ea Lê", "Xã Ea Hồ", "Xã Ea Pô", "Xã Ea Tam", "Xã Ea Đar", "Xã Ea KPam", "Xã Ea Ô", "Xã Ea Sô", "Xã Ia JLơi", "Xã Ia Lốp", "Xã Ya Tờ Mốt"];
    for (var es = 0; es < eaSupWards.length; es++) {
        var option = document.createElement("option");
        option.text = eaSupWards[es];
        xa.add(option);
    }
} else if (quan.value === "Huyện Krông Ana") {
    var krongAnaWards = ["Thị trấn Krông Ana", "Xã Krông Năng", "Xã Đắk Mâm", "Xã Ea Hồ", "Xã Ea Lai", "Xã Ea Sol", "Xã Ea Ral", "Xã Hoà Lễ", "Xã Phú Xuân"];
    for (var ka = 0; ka < krongAnaWards.length; ka++) {
        var option = document.createElement("option");
        option.text = krongAnaWards[ka];
        xa.add(option);
    }
} else if (quan.value === "Huyện Krông Bông") {
    var krongBongWards = ["Thị trấn Krông Kmar", "Xã Đắk Hòa", "Xã Đắk Rung", "Xã Đắk Sắk", "Xã Ea Lai", "Xã Ea M' Doal", "Xã Ea Puk", "Xã Krông Kmar", "Xã Krông Năng"];
    for (var kb = 0; kb < krongBongWards.length; kb++) {
        var option = document.createElement("option");
        option.text = krongBongWards[kb];
        xa.add(option);
    }
} else if (quan.value === "Huyện Krông Buk") {
    var krongBukWards = ["Thị trấn Krông Buk", "Xã Buôn Trấp", "Xã Đắk Môl", "Xã Đắk Nang", "Xã Đắk Xú", "Xã Ea Bing", "Xã Ea Drông", "Xã Ea Ktur", "Xã Ea Ning", "Xã Ea Tiêu", "Xã Ea Đar"];
    for (var kbk = 0; kbk < krongBukWards.length; kbk++) {
        var option = document.createElement("option");
        option.text = krongBukWards[kbk];
        xa.add(option);
    }
} else if (quan.value === "Huyện Krông Năng") {
    var krongNangWards = ["Thị trấn Krông Năng", "Xã Cuôr KNia", "Xã Ea M' Doal", "Xã Ea H' Leo", "Xã Ea Ning", "Xã Ea T' Lin", "Xã Krông Năng", "Xã Phú Lộc"];
    for (var kn = 0; kn < krongNangWards.length; kn++) {
        var option = document.createElement("option");
        option.text = krongNangWards[kn];
        xa.add(option);
    }
} else if (quan.value === "Huyện Krông Pắc") {
    var krongPacWards = ["Thị trấn Krông Pắc", "Xã Đắk Đoa", "Xã Đắk Pô", "Xã Đắk Sôr", "Xã Ea H' Drai", "Xã Ea H' Leo", "Xã Ea Pốk", "Xã Krông Pắc", "Xã Tân Lập"];
    for (var kp = 0; kp < krongPacWards.length; kp++) {
        var option = document.createElement("option");
        option.text = krongPacWards[kp];
        xa.add(option);
    }
} else if (quan.value === "Huyện Lắk") {
    var lakWards = ["Phường Bình Thủy", "Phường Ea Kao", "Phường Ea Tam", "Phường Hòa Khánh", "Phường Hòa Phú", "Phường Hòa Thắng", "Xã Cư Bao", "Xã Cư Kuin", "Xã Cư M'Lan", "Xã Cư Ni", "Xã Ea Bung", "Xã Ea Drông", "Xã Ea Lai", "Xã Ea M' Doal", "Xã Ea Ral", "Xã Ea Sô", "Xã Ea T'Lin", "Xã Ea Tul", "Xã Krông Ana", "Xã Phú Lộc", "Xã Xuân Phú"];
    for (var l = 0; l < lakWards.length; l++) {
        var option = document.createElement("option");
        option.text = lakWards[l];
        xa.add(option);
    }
}
    else if (quan.value === "Huyện Cư Jút") {
        var cuJutWards = ["Thị trấn Cư Jút", "Xã Cư A Mung", "Xã Ea Pô", "Xã Ea Tô", "Xã Hòa Mỹ", "Xã Hòa Phú", "Xã Hòa Sơn", "Xã Kroong", "Xã Mỹ Đức", "Xã Pô Kô", "Xã Pơng Drang", "Xã Yang Reh"];
        for (var cj = 0; cj < cuJutWards.length; cj++) {
            var option = document.createElement("option");
            option.text = cuJutWards[cj];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk GLong") {
        var dakGlongWards = ["Thị trấn Đắk GLong", "Xã Đắk Mar", "Xã Đắk Plô", "Xã Đắk Púk", "Xã Đắk R'Tíh", "Xã Đắk Song", "Xã Đắk Tờ Re", "Xã Mỹ Bình", "Xã Nghĩa Bình", "Xã Nghĩa Trung", "Xã Quảng Phú", "Xã Thuận Hà", "Xã Thuận Hạnh"];
        for (var dgl = 0; dgl < dakGlongWards.length; dgl++) {
            var option = document.createElement("option");
            option.text = dakGlongWards[dgl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk Mil") {
        var dakMilWards = ["Thị trấn Đắk Mil", "Xã Đắk Lao", "Xã Đắk N'Drót", "Xã Đắk Sắk", "Xã Đức Mạnh", "Xã Đức Minh", "Xã Long Sơn", "Xã Minh Hòa", "Xã Nâm N'Jang", "Xã Pró"];
        for (var dm = 0; dm < dakMilWards.length; dm++) {
            var option = document.createElement("option");
            option.text = dakMilWards[dm];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk RLấp") {
        var dakRLapWards = ["Thị trấn Đắk RLấp", "Xã Đắk Blà", "Xã Đắk Cấm", "Xã Đắk Lê", "Xã Đắk Liêng", "Xã Đắk Nuê", "Xã Đắk Phơi", "Xã Đắk Sơmei", "Xã Đắk Tô", "Xã Đắk Trăm", "Xã Ngọk Réo", "Xã Nhổn", "Xã Văn Lem"];
        for (var drl = 0; drl < dakRLapWards.length; drl++) {
            var option = document.createElement("option");
            option.text = dakRLapWards[drl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Đắk Song") {
        var dakSongWards = ["Thị trấn Đức An", "Xã Đắk Môl", "Xã Đắk N'Drung", "Xã Đắk N'Drót", "Xã Đắk Plô", "Xã Đức Hạnh", "Xã Đức Minh", "Xã Long Đức", "Xã Đức Phong", "Xã Đức Thắng", "Xã Đức Tân", "Xã Thuận Hà", "Xã Thuận Hạnh"];
        for (var ds = 0; ds < dakSongWards.length; ds++) {
            var option = document.createElement("option");
            option.text = dakSongWards[ds];
            xa.add(option);
        }
    } else if (quan.value === "Huyện KRông Nô") {
        var krongNoWards = ["Thị trấn KRông Nô", "Xã Cuôr KNia", "Xã Đắk Drô", "Xã Đắk Mâm", "Xã Đắk Nang", "Xã Đắk Sôr", "Xã Đức Xuyên", "Xã Nam N'Jang", "Xã Nhà Bàng", "Xã Phú Lô", "Xã Phú Xuân", "Xã Phước Thuận"];
        for (var kno = 0; kno < krongNoWards.length; kno++) {
            var option = document.createElement("option");
            option.text = krongNoWards[kno];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tuy Đức") {
        var tuyDucWards = ["Thị trấn Đắk NDrung", "Xã Đắk Plao", "Xã Đắk R'La", "Xã Đắk Song", "Xã Đắk Tơ Lung", "Xã Đắk Xú", "Xã Quảng Trực"];
        for (var td = 0; td < tuyDucWards.length; td++) {
            var option = document.createElement("option");
            option.text = tuyDucWards[td];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Gia Nghĩa") {
        var giaNghiaWards = ["Phường Đạt Hiếu", "Phường Đoàn Kết", "Phường Nghĩa Đô", "Phường Nghĩa Phú", "Phường Nghĩa Tân", "Xã Đắk R'Tíh", "Xã Đắk Nông", "Xã Đắk Wil", "Xã Nghĩa Thành", "Xã Quảng Thành", "Xã Quảng Tiến", "Xã Quảng Tín"];
        for (var gn = 0; gn < giaNghiaWards.length; gn++) {
            var option = document.createElement("option");
            option.text = giaNghiaWards[gn];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cẩm Mỹ") {
        var camMyWards = ["Thị trấn Cẩm Mỹ", "Xã Đại Phước", "Xã Định Thành", "Xã Long Giao", "Xã Long Tân", "Xã Long Hòa", "Xã Long Hưng", "Xã Phước Tân", "Xã Phước Đông", "Xã Tân Công", "Xã Vĩnh An"];
        for (var cm = 0; cm < camMyWards.length; cm++) {
            var option = document.createElement("option");
            option.text = camMyWards[cm];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Định Quán") {
        var dinhQuanWards = ["Thị trấn Định Quán", "Xã Định An", "Xã Định Hiệp", "Xã Định Thành", "Xã Long Điền Đông", "Xã Long Điền Đông", "Xã Long Điền Tây", "Xã Long Hưng A", "Xã Long Hưng B", "Xã Long Thượng", "Xã Phú Tân", "Xã Phú Đông", "Xã Túc Trưng", "Xã La Ngà"];
        for (var dq = 0; dq < dinhQuanWards.length; dq++) {
            var option = document.createElement("option");
            option.text = dinhQuanWards[dq];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Long Thành") {
        var longThanhWards = ["Thị trấn Long Thành", "Xã An Phước", "Xã Bình An", "Xã Bình Sơn", "Xã Long An", "Xã Long Đức", "Xã Long Hưng", "Xã Long Tân", "Xã Nhơn Trạch", "Xã Phước Bình", "Xã Tam An", "Xã Thanh Phước", "Xã An Phú", "Xã Bàu Cạn", "Xã Cẩm Đường", "Xã Phước Thái", "Xã Suối Trầu"];
        for (var lt = 0; lt < longThanhWards.length; lt++) {
            var option = document.createElement("option");
            option.text = longThanhWards[lt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Nhơn Trạch") {
        var nhonTrachWards = ["Thị trấn Hiệp Phước", "Xã Hiệp An", "Xã Phú Đông", "Xã Phú Hội", "Xã Phú Tân", "Xã Phú Hữu", "Xã Phú Lý", "Xã Phú Mỹ", "Xã Phú Thạnh", "Xã Phú Đông", "Xã Vĩnh Thanh", "Xã Vĩnh Tân"];
        for (var nt = 0; nt < nhonTrachWards.length; nt++) {
            var option = document.createElement("option");
            option.text = nhonTrachWards[nt];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Phú") {
        var tanPhuWards = ["Thị trấn Tân Phú", "Xã Dak Lua", "Xã Đồng Nai", "Xã Đồng Tâm", "Xã Gia Kiệm", "Xã Hảo Đước", "Xã Hiếu Liêm", "Xã Long An", "Xã Long Cang", "Xã Long Đức", "Xã Long Lân", "Xã Minh Tân", "Xã Phú Bình", "Xã Phú Lý", "Xã Phú Trung", "Xã Tân Hiệp", "Xã Tân Long", "Xã Tân Tiến"];
        for (var tp = 0; tp < tanPhuWards.length; tp++) {
            var option = document.createElement("option");
            option.text = tanPhuWards[tp];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thống Nhất") {
        var thongNhatWards = ["Thị trấn Thống Nhất", "Xã Bàu Hàm 2", "Xã Bình Minh", "Xã Bảo Hoà", "Xã Lộ 25", "Xã Long An", "Xã Long Tân", "Xã Nhựt Ninh", "Xã Tam An", "Xã Tân Hiệp", "Xã Tân Hòa", "Xã Tân Lập", "Xã Tân Thành", "Xã Thạnh Phước", "Xã Thống Nhất", "Xã Thống Nhất"];
        for (var tn = 0; tn < thongNhatWards.length; tn++) {
            var option = document.createElement("option");
            option.text = thongNhatWards[tn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Trảng Bom") {
        var trangBomWards = ["Thị trấn Trảng Bom", "Xã An Viễn", "Xã Bàu Hàm", "Xã Bắc Sơn", "Xã Đông Hoà", "Xã Đức Liễu", "Xã Gia Tân", "Xã Gia Đông", "Xã Hố Nai 3", "Xã Hưng Thịnh", "Xã Quảng Tiến", "Xã Sông Thao", "Xã Sông Trầu", "Xã Sông Nhạn", "Xã Tây Hoà", "Xã Thanh Bình", "Xã Thanh Sơn"];
        for (var tb = 0; tb < trangBomWards.length; tb++) {
            var option = document.createElement("option");
            option.text = trangBomWards[tb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Vĩnh Cửu") {
        var vinhCuuWards = ["Thị trấn Vĩnh An", "Xã Bình Hòa", "Xã Bình Lợi", "Xã Đồi 61", "Xã Hiếu Liêm", "Xã Mã Đà", "Xã Phú Lý", "Xã Phú Tân", "Xã Tân An", "Xã Tân Bình", "Xã Tân Lý Tây", "Xã Thanh Bình", "Xã Thạnh Phước"];
        for (var vc = 0; vc < vinhCuuWards.length; vc++) {
            var option = document.createElement("option");
            option.text = vinhCuuWards[vc];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Xuân Lộc") {
        var xuanLocWards = ["Thị trấn Xuân Lộc", "Xã Bảo Hoà", "Xã Bảo Sơn", "Xã Đồng Nai", "Xã Long An", "Xã Long Cang", "Xã Long Định", "Xã Long Hòa", "Xã Long Phước", "Xã Phước Tân", "Xã Sơn Bình", "Xã Suối Cao", "Xã Xuân Bảo", "Xã Xuân Đông"];
        for (var xl = 0; xl < xuanLocWards.length; xl++) {
            var option = document.createElement("option");
            option.text = xuanLocWards[xl];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Biên Hòa") {
        var bienHoaWards = ["Phường An Bình", "Phường An Hòa", "Phường An Khánh", "Phường An Tây", "Phường Bình Đa", "Phường Bửu Hòa", "Phường Bửu Long", "Phường Bửu Hòa", "Phường Bửu Long", "Phường Bửu Hòa", "Phường Bửu Hòa 1", "Phường Bửu Hòa 2", "Phường Bửu Long", "Phường Bửu Phong", "Phường Đồng Hòa", "Phường Hố Nai", "Phường Hóa An", "Phường Hòa Bình", "Phường Hòa Hưng", "Phường Hòa Khánh", "Phường Hòa Thọ Đông", "Phường Hòa Thọ Tây", "Phường Hòa Bình", "Phường Long Bình", "Phường Long Bình Tân", "Phường Long Bình, TP Biên Hòa", "Phường Long Hưng", "Phường Quang Vinh", "Phường Quyết Thắng", "Phường Quyết Tiến", "Phường Tam Hiệp", "Phường Tam Hòa", "Phường Tam Hòa, TP Biên Hòa", "Phường Tam Phước", "Phường Tam Bình", "Phường Tam Hòa", "Phường Tam Phước", "Phường Tam Hiệp", "Phường Trung Dũng", "Phường Trung Hòa", "Phường Trung Hòa, TP Biên Hòa", "Phường Trung Hòa", "Phường Trung Hòa, TP Biên Hòa", "Xã An Hòa", "Xã An Bình", "Xã Bắc Sơn", "Xã Bảo Đức", "Xã Bảo Vinh", "Xã Bình Sơn", "Xã Bửu Hòa", "Xã Long Bình", "Xã Long Hưng", "Xã Quyết Thắng"];
        for (var bh = 0; bh < bienHoaWards.length; bh++) {
            var option = document.createElement("option");
            option.text = bienHoaWards[bh];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Long Khánh") {
        var longKhanhWards = ["Phường Bảo Vinh", "Phường Bàu Sen", "Phường Đồng Nai", "Phường Hiệp An", "Phường Long Bình", "Phường Phước Bình", "Phường Tân Biên", "Phường Xuân An", "Xã Xuân Bảo", "Xã Xuân Bình", "Xã Xuân Hiệp", "Xã Xuân Hòa", "Xã Xuân Hưng", "Xã Xuân Phong", "Xã Xuân Quế", "Xã Xuân Tân", "Xã Xuân Thanh", "Xã Xuân Trung", "Xã Xuân Vinh"];
        for (var lk = 0; lk < longKhanhWards.length; lk++) {
            var option = document.createElement("option");
            option.text = longKhanhWards[lk];
            xa.add(option);
        }
    }
    else if (quan.value === "Huyện Cao Lãnh") {
        var caoLanhWards = ["Thị trấn Mỹ Hội", "Thị trấn Mỹ Long", "Xã Mỹ Hiệp", "Xã Mỹ Hội", "Xã Mỹ Long", "Xã Mỹ Phước", "Xã Mỹ Thọ", "Xã Mỹ Thới", "Xã Mỹ Trà", "Xã Nhị Mỹ", "Xã Tân Hội Trung"];
        for (var cl = 0; cl < caoLanhWards.length; cl++) {
            var option = document.createElement("option");
            option.text = caoLanhWards[cl];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Châu Thành") {
        var chauThanhWards = ["Thị trấn Cái Tàu Hạ", "Thị trấn Cái Tàu Trên", "Xã An Hiệp", "Xã An Khánh", "Xã Hòa Tân", "Xã Hòa Thuận", "Xã Phú An", "Xã Tân Bình", "Xã Tân Thuận", "Xã Tân Thuận Đông", "Xã Tân Thuận Tây", "Xã Thành Phước"];
        for (var ct = 0; ct < chauThanhWards.length; ct++) {
            var option = document.createElement("option");
            option.text = chauThanhWards[ct];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Hồng Ngự") {
        var hongNguWards = ["Thị trấn Lái Hồng", "Xã An Bình", "Xã Đồng Phú", "Xã Hòa Hồng", "Xã Hồng Đức", "Xã Hồng Phú", "Xã Hồng Vân", "Xã Hồng Xuyên", "Xã Thường Phước 1"];
        for (var hn = 0; hn < hongNguWards.length; hn++) {
            var option = document.createElement("option");
            option.text = hongNguWards[hn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lai Vung") {
        var laiVungWards = ["Thị trấn Lai Vung", "Xã Định Hòa", "Xã Hòa Thành", "Xã Long Hậu", "Xã Long Thắng", "Xã Long Thới", "Xã Tân Dương", "Xã Tân Hòa", "Xã Tân Phước", "Xã Tân Thành", "Xã Vĩnh Thới"];
        for (var lv = 0; lv < laiVungWards.length; lv++) {
            var option = document.createElement("option");
            option.text = laiVungWards[lv];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Lấp Vò") {
        var lapVoWards = ["Thị trấn Lấp Vò", "Xã Định An", "Xã Định Yên", "Xã Hội An Đông", "Xã Long Hưng A", "Xã Mỹ An Hưng", "Xã Mỹ An", "Xã Mỹ Định", "Xã Mỹ Hòa", "Xã Mỹ Quý", "Xã Mỹ Thành", "Xã Tân Kiều"];
        for (var lv = 0; lv < lapVoWards.length; lv++) {
            var option = document.createElement("option");
            option.text = lapVoWards[lv];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tam Nông") {
        var tamNongWards = ["Thị trấn Tràm Chim", "Xã An Hiệp", "Xã An Hòa", "Xã An Long", "Xã An Thạnh", "Xã An Trường", "Xã Phú Cường", "Xã Phú Đức", "Xã Phú Hiệp", "Xã Phú Ninh", "Xã Phú Thành A", "Xã Phú Thành B", "Xã Phú Thọ", "Xã Phú Thủy", "Xã Phú Tiến", "Xã Tân Công Sính", "Xã Tân Hội Trung", "Xã Tân Long", "Xã Tân Phú", "Xã Tân Thanh", "Xã Tân Thới"];
        for (var tn = 0; tn < tamNongWards.length; tn++) {
            var option = document.createElement("option");
            option.text = tamNongWards[tn];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tân Hồng") {
        var tanHongWards = ["Thị trấn Thanh Bình", "Xã An Phước", "Xã Bình Thành", "Xã Phú Đức", "Xã Tân Bình", "Xã Tân Hòa", "Xã Tân Lợi", "Xã Tân Phước", "Xã Tân Quới"];
        for (var th = 0; th < tanHongWards.length; th++) {
            var option = document.createElement("option");
            option.text = tanHongWards[th];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Thanh Bình") {
        var thanhBinhWards = ["Thị trấn Thanh Bình", "Xã Tân Bình", "Xã Tân Hòa", "Xã Tân Lợi", "Xã Tân Phước"];
        for (var tb = 0; tb < thanhBinhWards.length; tb++) {
            var option = document.createElement("option");
            option.text = thanhBinhWards[tb];
            xa.add(option);
        }
    } else if (quan.value === "Huyện Tháp Mười") {
        var thapMuiWards = ["Thị trấn Mỹ An", "Xã Hưng Thạnh", "Xã Mỹ An", "Xã Mỹ Đông", "Xã Mỹ Hòa", "Xã Mỹ Hưng", "Xã Mỹ Lợi A", "Xã Mỹ Quý", "Xã Mỹ Thành B", "Xã Mỹ Thọ"];
        for (var tm = 0; tm < thapMuiWards.length; tm++) {
            var option = document.createElement("option");
            option.text = thapMuiWards[tm];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Cao Lãnh") {
        var caoLanhCityWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường An Bình", "Phường Bình Thạnh", "Phường Hòa An", "Phường Mỹ Phú", "Phường Mỹ Ngãi", "Phường Mỹ Tân", "Phường Mỹ Trà", "Phường Tân Phú"];
        for (var clc = 0; clc < caoLanhCityWards.length; clc++) {
            var option = document.createElement("option");
            option.text = caoLanhCityWards[clc];
            xa.add(option);
        }
    } else if (quan.value === "Thành phố Sa Đéc") {
        var saDecCityWards = ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường An Hoà", "Phường Tân Quy Đông", "Phường Tân Quy Tây"];
        for (var sdc = 0; sdc < saDecCityWards.length; sdc++) {
            var option = document.createElement("option");
            option.text = saDecCityWards[sdc];
            xa.add(option);
        }
    }
                                           
    

})
// function calculateTotalPrice() {
//     let totalPrice = 0;
//     let productDetails = document.querySelectorAll('.shoppingdetail');

//     productDetails.forEach(function (productDetail) {
//         let quantity = parseInt(productDetail.querySelector('.right3-left input').value);
//         let pricePerUnit = productDetail.querySelector('.right3-right span').innerText;
//         let totalPricePerProduct = parseInt(pricePerUnit.replace(/\D/g, ''));
//         totalPrice += totalPricePerProduct;

//     });

//     let totalPriceSpan = document.querySelector('.prices');
//     totalPriceSpan.innerText = totalPrice.toLocaleString('de-DE');
//     let totalPriceSpan4 = document.querySelector('.mn');
//     totalPriceSpan4.innerText = totalPrice.toLocaleString('de-DE');
// }
function calculateTotalPrice() {
    let totalPrice = 0;
    let productDetails = document.querySelectorAll('.shoppingdetail');

    productDetails.forEach(function (productDetail) {
        let quantity = parseInt(productDetail.querySelector('.right3-left input').value);
        let pricePerUnit = parseFloat(productDetail.querySelector('.price').getAttribute('data-price')); // Lấy giá tiền từ thuộc tính dữ liệu
        let totalPricePerProduct = quantity * pricePerUnit * 1000;
        totalPrice += totalPricePerProduct;

        productDetail.querySelector('.right3-right span').innerText = totalPricePerProduct.toLocaleString('de-DE');
    });
    let averagePrice = totalPrice / 2;
    let totalPriceSpans = document.querySelectorAll('.prices');
    totalPriceSpans.forEach(function(span) {
        span.innerText =  averagePrice.toLocaleString('de-DE');
    });

    let totalPriceSpan4s = document.querySelectorAll('.mn');
    totalPriceSpan4s.forEach(function(span) {
        span.innerText =  averagePrice.toLocaleString('de-DE');
    }); 
}

window.onload = function () {
    // Lấy dữ liệu giỏ hàng từ localStorage khi trang được tải
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hiển thị thông tin sản phẩm trên trang shopping
    let cartContainers = document.querySelectorAll('#dt'); // Lấy tất cả các phần tử có id là "dt"
    cart.forEach(function (product) {
        cartContainers.forEach(function(cartContainer) {
            let productElement = document.createElement('div');
            productElement.innerHTML = `
                <div class="shoppingdetail" data-id="${product.id}">
                    <div class="cart-view">
                        <div class="left"><img src="${product.img}" alt=""></div>
                        <div class="right" style="margin:0">
                            <div class="right1"><p style="margin:0">${product.name}</p></div>
                            <div class="right2"><span style="margin:0">${product.size}</span><img src="${product.color}" alt="" class = "shc"></div>
                            <div class="right3">
                                <div class="right3-left" style="margin:0">
                                    <div class="update" >
                                        <div class="giam">
                                            <div class="_2"><input type="text" name="" id="" value="${product.quanti}" style ="background: #fafafa;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="right3-right" style="margin-right:0;diplay:flex;align-items: center;"><span class="price" data-price="${product.price}" style = "background: #fafafa;">${product.price}</span></div>
                            </div>
                        </div>
                    </div>
                </div>`;

            cartContainer.appendChild(productElement);
        });
        localStorage.removeItem('cart');
    });
    calculateTotalPrice();

}

let hienthi = document.querySelector('.hienthongtin')
let xuong = document.querySelector('.fa-chevron-down')
let hientt = document.querySelector('.anhttghh')
let hienttdh = document.querySelector('.hienttdh')
let anttdh = document.querySelector('.anttdh')
let check = true
hienthi.addEventListener('click',function(){
    if(check){
        xuong.style.transform = "rotate(180deg)"
        hientt.style.display = 'block'
        hienttdh.style.display = 'none'
        anttdh.style.display = 'inline-block'
        check = false
    }
    else{
        xuong.style.transform = "rotate(0deg)"
        hientt.style.display = 'none'
        hienttdh.style.display = 'inline-block'
        anttdh.style.display = 'none'
        check = true
    }
})