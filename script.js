setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hour.style.transform=`rotate(${htime*30 + mtime/2}deg)`;
    minute.style.transform=`rotate(${mtime*6}deg)`;
    second.style.transform=`rotate(${stime*6}deg)`;
}, 1000);