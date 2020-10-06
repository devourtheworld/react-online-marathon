const howMuchSec = (sec = 0, min = 0, hr = 0, day = 0, weak = 0, mont = 0, year = 0) => {
    let z = [];
    z.push(year * 3600 * 24 * 7 * 30 * 365, mont * 3600 * 24 * 7 * 30, weak * 3600 * 24 * 7 , day * 3600 * 24, hr * 3600, min * 60, sec);
    let intoSec = z.reduce((value, acc) => acc + value, 0);
    return intoSec;
};

/*
const howMuchSec = (s = 0, m = 0, h = 0, d = 0, w = 0, mon = 0, y = 0) => {
    let years = Math.floor(y * 60 * 60 * 24 * 7 * 30 * 365);
    let months = Math.floor(mon * 60 * 60 * 24 * 7 * 30);
    let weeks = Math.floor(w * 60 * 60 * 24 * 7);
    let days = Math.floor(d * 60 * 60 * 24);
    let hours = Math.floor(h * 60 * 60);
    let minutes = Math.floor(m * 60);
    let z = [];
    z.push(years, months, weeks, days, hours, minutes, s);
    let intoSec = z.reduce((value, acc) => acc + value, 0);
    return intoSec;
} */