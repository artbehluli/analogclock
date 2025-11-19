function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = ((seconds / 60) * 360) + 90;
    const minuteDeg = ((minutes / 60) * 360) + 90;
    const hourDeg = ((hours / 12) * 360) + 90;

    document.getElementsByClassName("second-hand").style.transform = `rotate(${secondDeg}deg)`;
    document.getElementsByClassName("min-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementsByClassName("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();