const hoTen = document.getElementById("ho-ten");
const email = document.getElementById("email");
const matKhau = document.getElementById("mat-khau");
const xacNhan = document.getElementById("xac-nhan");

const form = document.getElementById("form-dang-ky");
const ketQua = document.getElementById("ket-qua");

function hienThi(loaiInput, hopLe, noiDung) {
    const nhom = loaiInput.parentElement;
    const thongBao = nhom.querySelector(".thong-bao");

    loaiInput.classList.remove("hop-le", "khong-hop-le");
    thongBao.classList.remove("dung", "sai");

    if (hopLe) {
        loaiInput.classList.add("hop-le");
        thongBao.classList.add("dung");
        thongBao.textContent = "✓ Hợp lệ";
    } else {
        loaiInput.classList.add("khong-hop-le");
        thongBao.classList.add("sai");
        thongBao.textContent = "✗ " + noiDung;
    }
}

function kiemTraHoTen() {
    const giaTri = hoTen.value.trim();

    if (giaTri === "") {
        hienThi(hoTen, false, "Vui lòng nhập họ và tên");
        return false;
    }

    hienThi(hoTen, true);
    return true;
}

function kiemTraEmail() {
    const giaTri = email.value.trim();
    const mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mauEmail.test(giaTri)) {
        hienThi(email, false, "Email không hợp lệ");
        return false;
    }

    hienThi(email, true);
    return true;
}

function kiemTraMatKhau() {
    if (matKhau.value.length < 6) {
        hienThi(matKhau, false,
            "Mật khẩu phải có ít nhất 6 ký tự");
        return false;
    }

    hienThi(matKhau, true);
    return true;
}

function kiemTraXacNhan() {
    if (xacNhan.value === "") {
        hienThi(xacNhan, false,
            "Vui lòng xác nhận mật khẩu");
        return false;
    }

    if (xacNhan.value !== matKhau.value) {
        hienThi(xacNhan, false,
            "Mật khẩu xác nhận không khớp");
        return false;
    }

    hienThi(xacNhan, true);
    return true;
}

hoTen.addEventListener("input", kiemTraHoTen);
email.addEventListener("input", kiemTraEmail);
matKhau.addEventListener("input", function () {
    kiemTraMatKhau();

    if (xacNhan.value !== "") {
        kiemTraXacNhan();
    }
});
xacNhan.addEventListener("input", kiemTraXacNhan);


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tenDung = kiemTraHoTen();
    const emailDung = kiemTraEmail();
    const matKhauDung = kiemTraMatKhau();
    const xacNhanDung = kiemTraXacNhan();

    if (tenDung && emailDung &&
        matKhauDung && xacNhanDung) {

        ketQua.textContent =
            "Đăng ký hợp lệ! Dữ liệu đã được kiểm tra.";
        ketQua.className = "thanh-cong";

    } else {
        ketQua.textContent =
            "Vui lòng kiểm tra lại thông tin.";
        ketQua.className = "that-bai";
    }
});
