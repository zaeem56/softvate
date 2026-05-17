(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // Set target date here
    const targetDate = new Date("2026-05-22 00:00:00").getTime();

    const x = setInterval(function () {

        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }

    }, 1000); // update every second
})();

document.getElementById("notifyForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("successMsg").classList.remove("hidden");

    document.getElementById("email").value = "";
});