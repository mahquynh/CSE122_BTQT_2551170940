
function setDigit(id, number) {
    const image = document.getElementById(id);
    image.src = "Anh/Bai13/" +
                String(number).padStart(2, "0") + ".gif";
}

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setDigit("h1", Math.floor(hours / 10));
    setDigit("h2", hours % 10);

    setDigit("m1", Math.floor(minutes / 10));
    setDigit("m2", minutes % 10);

    setDigit("s1", Math.floor(seconds / 10));
    setDigit("s2", seconds % 10);

    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Chào buổi sáng";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Chào buổi chiều";
    } else {
        greeting = "Chào buổi tối";
    }

    document.getElementById("greeting").textContent = greeting;
}

updateClock();
setInterval(updateClock, 1000);
