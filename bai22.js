const nutGat = document.getElementById("doi-che-do");
const trangThai = document.getElementById("trang-thai");

function capNhatGiaoDien() {
    document.body.classList.toggle("toi", nutGat.checked);

    if (nutGat.checked) {
        trangThai.textContent = "Đây là giao diện ở chế độ Tối (đang bật).";
    } else {
        trangThai.textContent = "Đây là giao diện ở chế độ Sáng (đang bật).";
    }
}

nutGat.addEventListener("change", capNhatGiaoDien);

capNhatGiaoDien();
