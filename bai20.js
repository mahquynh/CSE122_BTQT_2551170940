const hoaHong = document.getElementById("hoa-hong");
const cacNut = document.querySelectorAll(".nut");

const cacHieuUng = [
    "gray",
    "xray",
    "invert",
    "fliph",
    "flipv",
    "glow",
    "shadow",
    "bold-shadow",
    "dropshadow",
    "blur",
    "wave",
    "mask",
    "alpha"
];

cacNut.forEach(function (nut) {
    nut.addEventListener("click", function () {
        const hieuUng = nut.dataset.effect;

        hoaHong.classList.remove(...cacHieuUng);
        hoaHong.classList.add(hieuUng);

        cacNut.forEach(function (nutKhac) {
            nutKhac.classList.remove("active");
        });

        nut.classList.add("active");
    });
});
