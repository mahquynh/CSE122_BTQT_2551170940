const oNhap = document.getElementById("cong-viec-moi");
const nutThem = document.getElementById("nut-them");
const danhSach = document.getElementById("danh-sach");
const thongKe = document.getElementById("thong-ke");


let congViecs = [
    { ten: "Đọc chương HTML5 cơ bản", hoanThanh: true },
    { ten: "Làm bài tập CSS Grid", hoanThanh: false },
    { ten: "Quay video OBS nộp bài", hoanThanh: false }
];


function hienThiDanhSach() {
    danhSach.replaceChildren();

    congViecs.forEach(function (congViec, index) {

        const li = document.createElement("li");
        li.className = "cong-viec";

        if (congViec.hoanThanh) {
            li.classList.add("hoan-thanh");
        }

  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = congViec.hoanThanh;

        checkbox.addEventListener("change", function () {
            congViecs[index].hoanThanh = checkbox.checked;
            hienThiDanhSach();
        });

        const ten = document.createElement("span");
        ten.className = "ten-cong-viec";
        ten.textContent = congViec.ten;

        const nutXoa = document.createElement("button");
        nutXoa.className = "nut-xoa";
        nutXoa.textContent = "Xóa";

        nutXoa.addEventListener("click", function () {
            congViecs.splice(index, 1);
            hienThiDanhSach();
        });

  
        li.append(checkbox, ten, nutXoa);
        danhSach.appendChild(li);
    });

    const soViecChuaXong = congViecs.filter(function (congViec) {
        return !congViec.hoanThanh;
    }).length;

    thongKe.textContent =
        "Còn " + soViecChuaXong + " việc chưa hoàn thành";
}

function themCongViec() {
    const tenCongViec = oNhap.value.trim();


    if (tenCongViec === "") {
        alert("Vui lòng nhập công việc!");
        oNhap.focus();
        return;
    }

    congViecs.push({
        ten: tenCongViec,
        hoanThanh: false
    });

    oNhap.value = "";
    hienThiDanhSach();
    oNhap.focus();
}


nutThem.addEventListener("click", themCongViec);


oNhap.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        themCongViec();
    }
});


hienThiDanhSach();
