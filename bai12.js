
const form = document.getElementById("dateForm");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const weekdays = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy"
];

function updateCalendar(day, month, year) {
    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        alert("Ngày, tháng hoặc năm không hợp lệ!");
        return;
    }

    document.getElementById("yearDisplay").textContent = year;
    document.getElementById("monthDisplay").textContent =
        "Tháng " + month;
    document.getElementById("dayDisplay").textContent = day;
    document.getElementById("weekdayDisplay").textContent =
        weekdays[date.getDay()];
}

function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Chào buổi sáng!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Chào buổi chiều!";
    } else {
        greeting = "Chào buổi tối!";
    }

    document.getElementById("greeting").textContent = greeting;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const day = Number(dayInput.value);
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);

    updateCalendar(day, month, year);
});


updateCalendar(24, 12, 2026);
updateGreeting();
