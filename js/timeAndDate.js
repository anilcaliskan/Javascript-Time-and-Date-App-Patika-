let userName = prompt("Your Name");
document.querySelector("#yourName").innerHTML = userName;

function showUserTime() {
    const userTime = document.querySelector("#yourTime");
    const time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }

    userTime.innerHTML = hour + ":" + minute + ":" + second;

    setTimeout(showUserTime, 1000)
}

showUserTime();

function showUserDate() {
    const userDate = document.querySelector("#yourDate");
    const date = new Date();

    let day = date.getDay();
    let mounth = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
        day = "0" + day
    }
    if (mounth < 10) {
        mounth = "0" + mounth
    }

    userDate.innerHTML = day + "/" + mounth + "/" + year;
}

showUserDate();