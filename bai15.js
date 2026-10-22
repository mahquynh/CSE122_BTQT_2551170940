let bieuThuc = "";
let vuaTinhXong = false;

const manHinhPhepTinh = document.getElementById("phep-tinh");
const manHinhKetQua = document.getElementById("ket-qua");


function capNhatManHinh() {
    manHinhPhepTinh.textContent = bieuThuc
        .replace(/\*/g, "×")
        .replace(/\//g, "÷");

    if (bieuThuc === "") {
        manHinhKetQua.textContent = "0";
    }
}


function themKyTu(kyTu) {
    if (vuaTinhXong && /[0-9.(]/.test(kyTu)) {
        bieuThuc = "";
    }

    vuaTinhXong = false;

    if (kyTu === "(") {
        if (bieuThuc !== "" && /[0-9)]$/.test(bieuThuc)) {
            bieuThuc += "*";
        } else if (bieuThuc.endsWith("%")) {
            bieuThuc += "*";
        }
        bieuThuc += "(";
    } else if (kyTu === "%") {
        if (/[0-9)]$/.test(bieuThuc)) {
            bieuThuc += "%";
        }
    } else {
        bieuThuc += kyTu;
    }

    capNhatManHinh();
}


function xoaTatCa() {
    bieuThuc = "";
    vuaTinhXong = false;
    manHinhPhepTinh.textContent = "";
    manHinhKetQua.textContent = "0";
}

function tinhToan() {
    if (bieuThuc === "") return;

    try {
  
        if (!/^[0-9+\-*/().%\s]+$/.test(bieuThuc)) {
            throw new Error("Biểu thức không hợp lệ");
        }

        let bieuThucTinh = bieuThuc.replace(
            /(\d+\.?\d*|\))%/g,
            "($1/100)"
        );

     
        let ketQua = Function(
            '"use strict"; return (' + bieuThucTinh + ')'
        )();

        if (!Number.isFinite(ketQua)) {
            throw new Error("Kết quả không hợp lệ");
        }

        manHinhPhepTinh.textContent = bieuThuc
            .replace(/\*/g, "×")
            .replace(/\//g, "÷");

        manHinhKetQua.textContent =
            Number(ketQua.toPrecision(12)).toString();

        bieuThuc = ketQua.toString();
        vuaTinhXong = true;

    } catch (loi) {
        manHinhKetQua.textContent = "Lỗi";
        bieuThuc = "";
        vuaTinhXong = false;
    }
}
